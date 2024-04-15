import os
import re
import glob
import shutil
from PIL import Image
from git import Repo
from dotenv import load_dotenv

load_dotenv()

import subprocess
import os

# Configurable variables
markdown_file = "2_Electric_Sheep.md"
image_directory = "posts"
github_repo_name = "portfolio-nextjs"
repo_path = os.getenv("REPO_NAME")
github_username = os.getenv("USERNAME_GITHUB")
github_token = os.getenv("PERSONAL_GITHUB_TOKEN")
image_name = '.png' 
branch_name = 'main' 

def find_image(directory, markdown_file):
    """
    Scrape the markdown file for image paths with .png or .jpeg extensions.
    
    :param directory: The directory where the markdown file is located.
    :param markdown_file: The name of the markdown file to scrape.
    :return: A list of found image paths.
    """
    markdown_path = os.path.join(directory, markdown_file)
    if not os.path.exists(markdown_path):
        raise FileNotFoundError(f"Markdown file {markdown_file} not found in {directory}")
    
    image_paths = []
    image_regex = r"!\[.*?\]\((.*?\.(?:png|jpeg))\)"
    
    with open(markdown_path, 'r') as md_file:
        content = md_file.read()
        matches = re.findall(image_regex, content)
        for match in matches:
            image_path = os.path.join(os.getcwd(), "public", str(match[1:]))
            if os.path.exists(image_path):
                image_paths.append(image_path)
            else:
                print(f"Warning: Image file {match} listed in {markdown_file} was not found.")
    
    return image_paths

def convert_to_webp(image_path):
    """
    Convert image to WebP format.
    """
    # Load image
    img = Image.open(image_path)
    # Generate destination path with .webp extension
    webp_path = os.path.splitext(image_path)[0] + ".webp"
    # Convert and save as WebP
    img.save(webp_path, "WEBP")
    return webp_path

def commit_and_push(image_path, repo_path):
    """
    Commit and push the image file to the remote Git repository.
    """
    PARENT_DIR = os.path.dirname(os.getcwd())
    os.chdir(PARENT_DIR)
    if not os.path.exists(repo_path):
        subprocess.run(['git', 'clone', 'git@github.com.main:shoot649854/IMG_DB.git'])
        os.chdir(repo_path)
    
    image_parts = image_path[0].split("/")
    directory_parts = image_parts[-3:-1]
    filename = image_parts[-1]
    destination_directory = os.path.join(PARENT_DIR, repo_path, *directory_parts, "")

    os.makedirs(destination_directory, exist_ok=True)
    destination_path = os.path.join(PARENT_DIR, repo_path, *image_parts[-3:])
    shutil.copy(image_path[0], destination_path)
    
    relative_img_path = "/".join(image_parts[-3:])

    os.chdir(repo_path)
    subprocess.run(['git', 'add', relative_img_path], check=True)
    commit_message = f"📦 Add image {relative_img_path}"
    subprocess.run(['git', 'commit', '-m', commit_message], check=False)
    # subprocess.run(['git', 'push', 'origin', branch_name], check=False)
    return relative_img_path
    

def construct_raw_url(github_username, relative_img_path):
    """
    Construct the raw GitHub URL for the image file.
    """
    url = f"https://raw.githubusercontent.com/{github_username}/{repo_path}/{relative_img_path}"
    return url

def replace(markdown_path, relative_img_path, web_link):
    try:
        # Read the content of the Markdown file
        with open(markdown_path, 'r') as file:
            content = file.read()
        print("Check")
        target = re.escape("/") + re.escape(relative_img_path)
        replaced_content = re.sub(target, r'{}'.format(web_link), content)
        # with open(markdown_path, 'w') as file:
        #     file.write(replaced_content)

        # print("Replacement completed successfully.")
    except FileNotFoundError:
        print("File not found.")
    except Exception as e:
        print("An error occurred:", e)

if __name__ == "__main__":
    try:
        md_path = os.path.join(os.getcwd(), 'posts/*.md')
        for markdown_path in glob.glob(md_path):
            image_path = find_image(image_directory, markdown_file)
            relative_img_path = commit_and_push(image_path, repo_path)
            link = construct_raw_url(github_username, relative_img_path)
            replace(glob.glob(md_path)[12], relative_img_path, link)

    except Exception as e:
        print(f"Error: {e}")

# md_path = os.path.join(os.getcwd(), 'posts/*.md')
# for markdown_path in glob.glob(md_path):

#     raw_link = push_image_to_github(local_image_path, remote_repo_path, github_username, github_token)
#     if raw_link:
#         print(f"Image pushed to GitHub: {raw_link}")
#     else:
#         print("Failed to push image to GitHub.")
