import os
import re
import github
from markdown import markdown

class MarkdownImageUploader:
    def __init__(self, markdown_file):
        self.github_token = os.getenv("GITHUB_TOKEN")
        self.repo_owner = os.getenv("REPO_OWNEER")
        self.repo_name = os.getenv("REPO_NAME")
        self.markdown_file = markdown_file

    def find_image_file(self, content):
        image_match = re.search(r'\!\[.*?\]\((.*?)\)', content)
        if image_match:
            return image_match.group(1)
        return None

    def replace_image_link(self, content, local_path, git_link):
        return content.replace(local_path, git_link)

    def upload_image_to_github(self, image_file):
        g = github.Github(self.github_token)
        repo = g.get_user(self.repo_owner).get_repo(self.repo_name)
        
        with open(image_file, "rb") as file:
            image_content = file.read()
        image_name = os.path.basename(image_file)
        
        try:
            repo.create_file(image_name, "Added by script", image_content)
            print("Image file uploaded to GitHub repository successfully.")
        except Exception as e:
            print("Error uploading image file to GitHub repository:", e)

    def process_markdown_file(self):
        with open(self.markdown_file, "r") as file:
            markdown_content = file.read()

        image_file = self.find_image_file(markdown_content)
        if image_file:
            self.upload_image_to_github(image_file)
            
            git_image_link = f"https://raw.githubusercontent.com/{self.repo_owner}/{self.repo_name}/master/{os.path.basename(image_file)}"
            modified_content = self.replace_image_link(markdown_content, image_file, git_image_link)

            with open(self.markdown_file, "w") as file:
                file.write(modified_content)
            print("Markdown file updated with git image link.")
        else:
            print("No image file found in the markdown content.")

markdown_file = "posts/13_LLm_Law_Hackathon_Stanford.md"
uploader = MarkdownImageUploader(markdown_file)
uploader.process_markdown_file()