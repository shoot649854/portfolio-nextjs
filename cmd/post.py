import os
import re
import requests
import logging
import secrets
from functools import reduce
from operator import add

class MediumPoster:
    def __init__(self, integration_token):
        self.integration_token = integration_token
        self.logger = logging.getLogger(__name__)
        self.logger.setLevel(logging.INFO)
        self.file = None
        self.publish_status = None
        self.user_id = None
        self.post_url = None
        self.headers = None
        self.title = None
        self.tags = None
        self.content = None
        self.article_url = None

    def set_file_and_publish_status(self):
        try:
            self.file = input('file: ')
            if not os.path.exists(self.file):
                self.logger.error(f'{self.file} does not exist.')
                quit()

            self.publish_status = input('publishStatus: ') or 'draft'
            if self.publish_status not in ['draft', 'public']:
                self.logger.error('Input allowed draft or public.')
                quit()

        except KeyboardInterrupt:
            self.logger.error('\nCancelled.')
            quit()

        except Exception as e:
            self.logger.error(f'An error occurred: {e}')
            quit()

    def get_user_id(self):
        try:
            user_id_res = requests.get('https://api.medium.com/v1/me',
                                       headers={'Authorization': f'Bearer {self.integration_token}'})
            self.user_id = user_id_res.json()['data']['id']
        except KeyError:
            self.logger.error('\nYou may have the wrong token.')
            quit()

    def prepare_post_data(self):
        try:
            with open(self.file, 'r') as f:
                origin = f.read()

                self.title = origin.splitlines()[0]
                self.tags = re.findall(r'#([^\s]+)', origin.splitlines()[2])

                if len(self.tags) != 0:
                    content_start = 3
                else:
                    content_start = 2

                self.content = reduce(add, map(lambda m: m + "\n", origin.split('\n')[content_start:]))

                self.post_url = f'https://api.medium.com/v1/users/{self.user_id}/posts'

                self.headers = {
                    'Authorization': f'Bearer {self.integration_token}',
                    'Content-Type': 'application/json'
                }
        except Exception as e:
            self.logger.error(f'Error preparing post data: {e}')
            quit()

    def post_to_medium(self):
        try:
            res = requests.post(self.post_url, headers=self.headers,
                                json={"title": self.title, "contentFormat": 'markdown', "content": self.content,
                                      "tags": self.tags, "publishStatus": self.publish_status})
            self.article_url = res.json()['data']['url']
            self.logger.info(f'{self.file} was posted to Medium! Article URL: "{self.article_url}"')
        except Exception as e:
            self.logger.error(f'Error posting to Medium: {e}')

if __name__ == "__main__":
    integration_token = secrets.INTEGRATION_TOKEN
    logging.basicConfig(level=logging.INFO)

    medium_poster = MediumPoster(integration_token)
    medium_poster.set_file_and_publish_status()
    medium_poster.get_user_id()
    medium_poster.prepare_post_data()
    medium_poster.post_to_medium()
