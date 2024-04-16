---
Status: Published # 'Draft', 'Pending', 'Published-Portfolio', 'Published-Medium', 'Rewriting'
docType: Article # 'Project', 'Article'
id: 9
title: Writing README for team project 101
description: When a new member joins a project, writing a README with an overview of the project and links to necessary documents will make it easier to understand the project and reduce unnecessary communication costs.
slug: README_for_team
date: 2024-02-24
author: Shoto Morisaki
image: /post/5/sample5.jpg
category: Blog
tags: [Coding, README]
relatedDoc1: 
relatedDoc2: 
relatedDoc3: 
relatedDoc4: 
relatedDoc5: 
editor_img: https://raw.githubusercontent.com/shoot649854/IMG_DB/main/profile.webp
editor_bio: Computer Science @ University of California Santa Cruz | Intern @ LiNK
editor_name: Shoto Morisaki
editor_social:
  -
    icon: fab fa-linkedin
    url: https://www.linkedin.com/in/shoto-morisaki-93b0a71bb/
  -
    icon: fab fa-github
    url: https://github.com/shoot649854/
  -
    icon: fab fa-portfolio
    url: https://portfolio-shoto.vercel.app/
---










# 🚀 What is README.md? 
README is the application's

- Overview
- Environment setup

and other information necessary for the project.
In this article, I will explain how to write an easy-to-understand README that can be found on GitHub and other sites.


# 🤔 Purpose of README.md
When a new member joins a project, writing a README with an overview of the project and links to necessary documents will make it easier to understand the project and reduce unnecessary communication costs. Also, by writing the procedures for building the environment, anyone can build the development environment without relying on the technical level of each individual.

# 🗒️ Content list
- Main Technologies In Use
- Overview of the project
- List of required environment variables and commands
- Directory structure
- How to build a development environment
- Troubleshooting

## Main Technologies In Use
You can kind of tell what kind of technology is being used by the directory structure, files, etc., but I put Sheild at the beginning because I felt that it might be difficult for someone who is not familiar with the technology used in the project to see it. I put "Sheild" at the beginning of the file because I felt it would be difficult for someone who is not familiar with the technology used in the project to see it.

## About Shield 
[Shields](https://shields.io/)
[Shields Icon](https://simpleicons.org/)

```bash
https://img.shields.io/badge/:badgeContent
```

https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white

https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge