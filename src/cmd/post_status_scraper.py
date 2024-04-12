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

def extract_yaml_front_matter(md_file_path):
    with open(md_file_path, 'rb') as f:
        content = f.read()
        front_matter_end = content.index(b'---', 4)
        yaml_str = content[4:front_matter_end].strip()
        front_matter = yaml.safe_load(yaml_str.decode('utf-8'))
        return front_matter

def update_front_matter(md_file_path, data):
    update = "\n".join([f"{key}: {value}" for key, value in data.items()])
    with open(md_file_path, 'r', encoding='utf-8', errors='replace') as f:
        content = f.read()
    start_index = content.find("---update---") + len("---update---")
    end_index = content.find("---", start_index)
    
    # Additional content to be added
    additional_content = """
editor_social:
    -
        icon: fab fa-facebook-f
        url: 
    -
        icon: fa-brands fa-x-twitter
        url: 
    - 
        icon: fas fa-link
        url: 
"""

    updated_content = '---' + "\n" + update + additional_content + "\n" + content[end_index:]
    with open(md_file_path, 'w', encoding='utf-8', errors='replace') as f:
        f.write(updated_content)

def status_check(md_file):
    file_name = os.path.basename(md_file)
    id, *rest = file_name.split('_')
    id = id.strip()
    author = "Shoto Morisaki"
    slug = '_'.join(rest).strip()
    return id, author, slug

def main():
    csv_dir = POST_DIR
    if not os.path.exists(csv_dir):
        os.makedirs(csv_dir)

    all_data = []
    md_path = os.path.join(os.getcwd(), 'posts/*.md')
    for markdown_path in glob.glob(md_path):
        items = extract_yaml_front_matter(markdown_path)
        data = scrape_md_file(markdown_path)
        id, author, slug = status_check(markdown_path)
        data['id'] = id
        data['author'] = author
        data['slug'] = slug
        if items['id'] != id or items['author'] != author or items['slug'] != slug:
            update_front_matter(markdown_path, data)
            print(f"Updated '{markdown_path}' due to status check failure.")
        all_data.append(data)

    # 
    combined_df = pd.DataFrame(all_data)
    csv_path = './cmd/sample.csv'
    excel_path = './cmd/sample.xlsx'

    combined_df.to_csv(csv_path, index=False)
    print(f"CSV file saved successfully at '{os.path.abspath(csv_path)}'.")

    combined_df.to_excel(excel_path, index=False)
    print(f"Excel file saved successfully at '{os.path.abspath(excel_path)}'.")


if __name__ == "__main__":
    main()