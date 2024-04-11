import secrets
import os
import requests
import re
from functools import reduce
from operator import add

class MediumPoster:
    def __init__(self, integration_token):
        self.integration_token = integration_token

    def post_to_medium(self, file_path, publish_status='draft'):
        try:
            if not os.path.exists(file_path):
                print(f'{file_path} does not exist.')
                return

            title, tags, content = self._parse_file(file_path)
            json_data = self._generate_json(title, content, tags, publish_status)
            article_url = self._send_post_request(json_data)

            print(f'{file_path} was posted to Medium! Article URL: "{article_url}"')

        except KeyboardInterrupt:
            print('\n')
            print('Cancelled.')
        except Exception as e:
            print(f'An error occurred: {e}')

    def _parse_file(self, file_path):
        with open(file_path, 'r') as f:
            origin = f.read()

            title = origin.splitlines()[0]
            tags = re.findall(r'#([^\s]+)', origin.splitlines()[2])

            if len(tags) != 0:
                content_start = 3
            else:
                content_start = 2

            content = reduce(add, map(lambda m: m + "\n", origin.split('\n')[content_start:]))

        return title, tags, content

    def _generate_json(self, title, content, tags, publish_status):
        return {
            "title": title,
            "contentFormat": 'markdown',
            "content": content,
            "tags": tags,
            "publishStatus": publish_status
        }

    def _send_post_request(self, json_data):
        user_id_res = requests.get('https://api.medium.com/v1/me', headers={ 'Authorization': f'Bearer {self.integration_token}' })
        user_id = user_id_res.json()['data']['id']

        post_url = f'https://api.medium.com/v1/users/{user_id}/posts'

        headers = {
            'Authorization': f'Bearer {self.integration_token}',
            'Content-Type': 'application/json'
        }

        res = requests.post(post_url, headers=headers, json=json_data)
        return res.json()['data']['url']

# Example usage:
integration_token = os.getenv("MEDIUM_INTEGRATION_TOKEN")
medium_poster = MediumPoster(integration_token)
path = "posts/13_LLm_Law_Hackathon_Stanford.md"
medium_poster.post_to_medium(path, publish_status='public')