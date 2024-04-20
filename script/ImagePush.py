import os
import re
import glob
import shutil
from PIL import Image
from git import Repo
from dotenv import load_dotenv
import markdown
load_dotenv()

import subprocess
import os

# Configurable variables
markdown_file = "2_Electric_Sheep.md"
image_directory = "posts"
github_repo_name = "portfolio-nextjs"
repo_path = os.getenv("REPO_NAME")
github_username = os.getenv("REPO_OWNER")
github_token = os.getenv("PERSONAL_GITHUB_TOKEN")
image_name = '.png' 
branch_name = 'main' 

def find_image(directory, markdown_file):
    markdown_path = os.path.join(directory, markdown_file)
    if not os.path.exists(markdown_path):
        raise FileNotFoundError(f"Markdown file {markdown_file} not found in {directory}")

    with open(markdown_path, 'r') as md_file:
        content = md_file.read()
        image_regex = r"!\[.*?\]\((.*?\.(?:png|jpeg|jpg))\)"
        matches = re.findall(image_regex, content)
        for match in matches:
            image_path = os.path.join(os.getcwd(), "public", str(match[1:]))
            if os.path.exists(image_path):
                return image_path
    return None

def convert_to_webp(image_path):
    img = Image.open(image_path).convert("RGB")
    webp_path = os.path.splitext(image_path)[0] + ".webp"
    img.save(webp_path, "WEBP")
    return webp_path

def commit_and_push(image_path, repo_path):
    PARENT_DIR = os.path.dirname(os.getcwd())
    os.chdir(PARENT_DIR)
    if not os.path.exists(repo_path):
        subprocess.run(['git', 'clone', 'git@github.com.main:shoot649854/IMG_DB.git'])
        os.chdir(repo_path)

    webp_path = convert_to_webp(image_path)

    image_parts = webp_path.split("/")
    directory_parts = image_parts[-3:-1]
    filename = image_parts[-1]
    destination_directory = os.path.join(PARENT_DIR, repo_path, *directory_parts, "")

    os.makedirs(destination_directory, exist_ok=True)
    destination_path = os.path.join(PARENT_DIR, repo_path, *image_parts[-3:])
    shutil.copy(webp_path, destination_path)

    relative_img_path = "/".join(image_parts[-3:])

    os.chdir(repo_path)
    subprocess.run(['git', 'add', relative_img_path], check=True)
    commit_message = f"📦 Add image {relative_img_path}"
    subprocess.run(['git', 'commit', '-m', commit_message], check=False)
    # subprocess.run(['git', 'push', 'origin', branch_name], check=False)
    return relative_img_path


def construct_raw_url(github_username, relative_img_path):
    url = f"https://raw.githubusercontent.com/{github_username}/{repo_path}/{relative_img_path}"
    return url

def replace(markdown_path, local_image_path, web_link):
    try:
        with open(markdown_path, 'rb') as file:
            content = file.read().decode('utf-8')
        
        public_index = local_image_path.find("public")
        value_after_public = local_image_path[public_index + len("public"):].lstrip("/")
        target = re.escape("/") + str(value_after_public)
        print(target)
        replaced_content = re.sub(target, r'{}'.format(web_link), content)
        if replaced_content == content:
            print("Nothing has changed")
            return None
        print(replaced_content)
        # with open(markdown_path, 'w') as file:
        #     file.write(replaced_content)

    except FileNotFoundError:
        print("File not found.")
    except Exception as e:
        print("An error occurred:", e)

if __name__ == "__main__":
    try:
        md_path = os.path.join(os.getcwd(), 'posts/*.md')
        # for markdown_path in glob.glob(md_path):
        markdown_path = "/Users/shotomorisaki/Engineering/portfolio-nextjs/posts/13_LLm_Law_Hackathon_Stanford.md"
        local_image_path = find_image(image_directory, markdown_path)
        if(local_image_path is not None):
            relative_img_path = commit_and_push(local_image_path, repo_path)
            web_link = construct_raw_url(github_username, relative_img_path)
            replace(markdown_path, local_image_path, web_link)

    except Exception as e:
        print(f"Error: {e}")