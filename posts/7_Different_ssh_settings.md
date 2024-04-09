---
Status: 'Published' # 'Draft', 'Pending', 'Published', 'Rewriting'
docType: 'Article' # 'Project', 'Article'
id: '999'
title: 【Note】Procedures for using different ssh connection settings (config) with multiple Github accounts
description: When working with multiple GitHub accounts, it's crucial to configure SSH connection settings properly to ensure seamless authentication. Here are the steps to set up and manage multiple SSH configurations
slug: blog3
date: 2024-02-11
author: Shoto Morisaki
image: sample/opened-laptop.jpg
category: Coding
tags: [Git]
relatedDoc1: ""
relatedDoc2: ""
relatedDoc3: ""
relatedDoc4: ""
relatedDoc5: ""

editor_img: ''
editor_bio: ''

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
---

# Procedures for using different ssh connection settings (config) with multiple Github accounts

When working with multiple GitHub accounts, it's crucial to configure SSH connection settings properly to ensure seamless authentication. Here are the steps to set up and manage multiple SSH configurations:

## 1. Generate SSH Keys

Generate SSH keys for each GitHub account you'll be using. Use the `ssh-keygen` command and follow the prompts to create a unique key pair for each account.

```bash
ssh-keygen -t rsa -C "your_email@example.com"
```

Ensure that you provide a distinct name for the keys to differentiate them easily.

2. Add SSH Keys to SSH Agent
Add the generated SSH keys to your SSH agent using the ssh-add command. This will allow your SSH agent to manage your private keys.

```bash
ssh-add ~/.ssh/custom_key
```

Repeat this step for each SSH key you generated.

3. Create SSH Configuration File
Create or modify the SSH configuration file (~/.ssh/config) to specify different settings for each GitHub account. You can use aliases to distinguish between the accounts.

```bash
# Default GitHub account
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_rsa

# Secondary GitHub account
Host github-second
  HostName github.com
  User git
  IdentityFile ~/.ssh/second_rsa
```

Replace github-second with an alias of your choice for your secondary GitHub account, and second_rsa with the corresponding private key filename.

4. Configure Git Remotes
Update the remote URLs in your Git repositories to use the aliases defined in the SSH configuration file.

```bash
git remote set-url origin git@github-second:username/repo.git
```

Replace 'username' with your GitHub username and repo with the name of your repository.

5. Test SSH Connection
Ensure that your SSH configuration is correctly set up by testing the connection to each GitHub account.

```bash
ssh -T git@github-second
```

If the setup is successful, you'll receive a confirmation message.

By following these procedures, you can manage multiple GitHub accounts with distinct SSH connection settings efficiently.

## Reference 
[1台のPCで複数のGitHubアカウントを使う(SSHとhttps)](https://qiita.com/shizuma/items/2b2f873a0034839e47ce)
[GitHubでssh接続する手順~公開鍵・秘密鍵の生成から~](https://qiita.com/shizuma/items/2b2f873a0034839e47ce)