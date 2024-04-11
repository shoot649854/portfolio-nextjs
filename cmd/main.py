import requests
import os 

MediumID = os.getenv("MEDIUM_ID")
MEDIUM_INTEGRATION_TOKEN = os.getenv("MEDIUM_INTEGRATION_TOKEN")
path = "../posts/5_Definition_of_RAG.md"

def push_to_medium(
    file_to_upload,
    medium_id,
    token,
    title,
    tag_list,
    publish_status="draft",
    content_format="html",
):
    """
    Push an HTML file to Medium as a draft post.

    Args:
        file_to_upload (str): Path to the HTML file to be uploaded.
        id (str): User ID for Medium.
        token (str): Medium API token.
    """
    if len(tag_list) > 5:
        raise ValueError("Tag list should not contain more than 5 elements.")
    with open(file_to_upload, "r") as content_text:
        content = content_text.read()

    url = f"https://api.medium.com/v1/users/{medium_id}/posts"

    post_data = {
        "title": title,
        "contentFormat": content_format,
        "content": content,
        "tags": tag_list,
        "publishStatus": publish_status,
    }

    headers = {
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Accept-Charset": "utf-8",
    }

    response = requests.post(url, headers=headers, json=post_data)

    if response.status_code == 201:
        post_details = response.json()
        print("Draft Post Created Successfully:")
        print("Post Details:")
        print(post_details)
    else:
        print("Failed to create draft post. Status code:", response.status_code)
        print("Response:", response.text)


push_to_medium(path, MediumID, MEDIUM_INTEGRATION_TOKEN, 'AAA', 'tag', 'public', 'html')