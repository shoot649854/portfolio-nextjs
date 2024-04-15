import yaml
import pandas as pd
import os
import re
import glob

import pandas as pd
import os
from datetime import datetime

POST_DIR = 'posts'

PARENT_DIR = os.path.join(os.getcwd())

class MarkdownGenerator:
    def __init__(self, md_file_path):
        self.md_file = md_file_path
        self.format = os.path.join(PARENT_DIR, 'script', 'PostFormat.md')

    def load_template(self):
        with open(self.format, 'r', encoding='utf-8') as template_file:
            return template_file.read()
    
    def extract_yaml_front_matter(self):
        with open(self.md_file, 'rb') as f:
            content = f.read()
            front_matter_end = content.index(b'---', 4)
            yaml_bytes = content[4:front_matter_end].strip()
            yaml_str = yaml_bytes.decode('utf-8')
            yaml_str = yaml_str.replace('    editor_social:', 'editor_social:')
            yaml_str = yaml_str.replace('   -', '-')
            yaml_str = yaml_str.replace('@', '-')
            yaml_dict = yaml.safe_load(yaml_str)
            return yaml_dict
        
    def generate_markdown_file(self, row, current_date):
        template = self.load_template()
        urlslug = row['Slug']
        article_title = row['ServiceName']
        SecondCase = row['ServiceCategoryMajor']
        Company = row['OperatingCompany']
        URL = row['OperatingCompanyURL']
        content = row['RelatedCaseGeneratedText']
        image_url = row['ImageVideoURL']
        case = row['ServiceCategoryMiddle']
        formatted_markdown = template.format(urlslug=urlslug, title=article_title, SecondCase=SecondCase, Company=Company, URL=URL, content=content, date=current_date, image_url=image_url, case=case)

        file_name = f"{urlslug}_{str(article_title).replace(' ', '_')}.md"
        file_path = os.path.join(self.output_dir, file_name)
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(formatted_markdown)

    def generate_markdown_files(self):
        df = pd.read_excel(self.excel_path)
        current_date = datetime.now().strftime('%Y-%m-%d')
        for _, row in df.iterrows():
            self.generate_markdown_file(row, current_date)
        print("Markdownファイルの生成が完了しました。")
    
    def update_front_matter(self, data):
        # update = "\n".join([f"{key}: {value}" for key, value in data.items() if key != 'editor_social'])
        with open(self.md_file, 'r', encoding='utf-8', errors='replace') as f:
            content = f.read()
        front_matter_start = content.find('---')
        front_matter_end = content.find('---', front_matter_start)

        update = ""
        update += "Status: " + data['Status']  + " # 'Draft', 'Pending', 'Published-Portfolio', 'Published-Medium', 'Rewriting'" + "\n"
        update += "docType: " + data['docType'] + " # 'Project', 'Article'" +"\n"
        update += "id: " + data['id'] + "\n"
        update += "title: " + data['title'] + "\n"
        update += "description: " + data['description'] + "\n"
        update += "slug: " + data['slug'] + "\n"
        update += "date: " + str(data['date']) + "\n"
        update += "author: " + data['author'] + "\n"
        update += "image: " + data['image'] + "\n"
        update += "category: " + data['category'] + "\n"
        update += "tags: [" + ", ".join(data['tags']) + "]\n"
        
        update += "relatedDoc1: " + str("") + "\n"
        update += "relatedDoc2: " + str("") + "\n"
        update += "relatedDoc3: " + str("") + "\n"
        update += "relatedDoc4: " + str("") + "\n"
        update += "relatedDoc5: " + str("") + "\n"
        
        social = {'LinkedIn':'https://www.linkedin.com/in/shoto-morisaki-93b0a71bb/', 
                  'Github':'https://github.com/shoot649854/', 
                  'Portfolio':'https://portfolio-shoto.vercel.app/'}
        editor_bio = "Computer Science @ University of California Santa Cruz | Intern @ LiNK"
        update += "editor_img: " + "https://raw.githubusercontent.com/shoot649854/IMG_DB/main/profile.webp" + "\n"
        update += "editor_bio: " + str(editor_bio) + "\n"
        update += "editor_name: " + str(data['editor_name']) + "\n"
        update += "editor_social:\n"
        for key, value in social.items():
            update += "  -\n"
            update += f"    icon: fab fa-{key.lower()}\n"
            update += f"    url: {value}\n" 

        updated_front_matter = '---\n' + update + '---\n'
        updated_content = content[:front_matter_start] + updated_front_matter + content[front_matter_end:]
        print(content[front_matter_end:])
        return updated_content
    
    def write_file(self, updated_content):
        with open(self.md_file, 'w', encoding='utf-8', errors='replace') as f:
            f.write(updated_content)


class PostStatusChecker:
    @staticmethod
    def retrieve_correct_format(md_file):
        file_name = os.path.basename(md_file)
        id, *rest = file_name.split('_')
        id = id.strip()
        author = "Shoto Morisaki"
        slug = '_'.join(rest).strip().split('.')[0]
        return {'id': id, 'author': author, 'slug': slug}

def main():
    csv_dir = POST_DIR
    if not os.path.exists(csv_dir):
        os.makedirs(csv_dir)

    all_data = []
    md_path = os.path.join(os.getcwd(), 'posts/*.md')
    for markdown_path in glob.glob(md_path):
        Generator = MarkdownGenerator(markdown_path)
        targte_md_item = Generator.extract_yaml_front_matter()
        correct_format = PostStatusChecker.retrieve_correct_format(markdown_path)

        if targte_md_item['id'] != correct_format['id'] or targte_md_item['author'] != correct_format['author'] or targte_md_item['slug'] != correct_format['slug']:
            targte_md_item['id'] = correct_format['id']
            targte_md_item['author'] = correct_format['author']
            targte_md_item['slug'] = correct_format['slug']
            targte_md_item['editor_name'] = 'Shoto Morisaki'
            updated_content = Generator.update_front_matter(targte_md_item)
            # Generator.write_file(updated_content)

            print(f"Updated: '{markdown_path}'")
        all_data.append(targte_md_item)

    combined_df = pd.DataFrame(all_data)
    csv_path = './script/sample.csv'
    excel_path = './script/sample.xlsx'

    combined_df.to_csv(csv_path, index=False)
    print(f"CSV file saved successfully at '{os.path.abspath(csv_path)}'.")

    combined_df.to_excel(excel_path, index=False)
    print(f"Excel file saved successfully at '{os.path.abspath(excel_path)}'.")

if __name__ == "__main__":
    main()
