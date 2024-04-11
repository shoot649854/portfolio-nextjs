import yaml
import pandas as pd
import os
import re
import glob

POST_DIR = 'posts'

def scrape_md_file(md_file):
    with open(md_file, 'r', encoding='utf-8', errors='replace') as f:
        content = f.read()

    pattern = r'^(\w+): (.+)$'
    matches = re.findall(pattern, content, re.MULTILINE)

    data = {}
    for match in matches:
        key, value = match
        data[key] = value.strip()

    return data

def status_check(md_file):
    file_name = os.path.basename(md_file)
    id, *rest = file_name.split('_')
    id = id.strip()

    author = "Shoto Morisaki"
    slug = '_'.join(rest).strip()

    return id, author, slug

def update_md_file(md_file, data):
    content = "\n".join([f"{key}: {value}" for key, value in data.items()])

    with open(md_file, 'w', encoding='utf-8') as f:
        f.write(content)


def retrieve_items_from_md(md_file, encoding='utf-8'):
    with open(md_file, 'rb') as f:
        content = f.read()
        front_matter_end = content.index(b'---', 4)
        yaml_str = content[4:front_matter_end].strip()

        front_matter = yaml.safe_load(yaml_str.decode(encoding))

        # Check if the 'title' field exists and is not empty
        title = front_matter.get('title', '').strip()
        if not title:
            # Assign a default value or handle it as needed
            title = "Untitled"

        front_matter['title'] = title

        return front_matter

def main():
    csv_dir = POST_DIR
    if not os.path.exists(csv_dir):
        os.makedirs(csv_dir)

    all_data = []
    md_path = os.path.join(os.getcwd(), 'posts/*.md')

    for markdown_path in glob.glob(md_path):
        items = retrieve_items_from_md(markdown_path)

        data = scrape_md_file(markdown_path)

        id, author, slug = status_check(markdown_path)
        data['id'] = id
        data['author'] = author
        data['slug'] = slug

        if data['id'] != id or data['author'] != author or data['slug'] != slug:
            update_md_file(markdown_path, data)
            print(f"Updated '{markdown_path}' due to status check failure.")

        all_data.append(data)

    combined_df = pd.DataFrame(all_data)
    csv_path = './sample.csv'
    excel_path = './sample.xlsx'

    combined_df.to_csv(csv_path, index=False)
    print(f"CSV file saved successfully at '{os.path.abspath(csv_path)}'.")

    combined_df.to_excel(excel_path, index=False)
    print(f"Excel file saved successfully at '{os.path.abspath(excel_path)}'.")


if __name__ == "__main__":
    main()