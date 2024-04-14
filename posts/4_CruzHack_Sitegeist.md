---
Status: Published # 'Draft', 'Pending', 'Published-Portfolio', 'Published-Medium', 'Rewriting'
docType: Project # 'Project', 'Article'
id: 4
title: CruzHack 2024 - Sitegeist
description: Sitegeist, our technical solution for giving you more problems! We wanted a way to easily analyze trending topics and issues faced by those around us.
slug: CruzHack_Sitegeist
date: 2024-1-16
author: Shoto Morisaki
image: project/4/project4-demo.gif
category: Project
tags: [RESTfulAPI, React, Typescript, GPTAPI, HuggingFaceModel]
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










## ProjectCruzHack

### Motivation

Before CruzHack2024, our group began exploring the issues plaguing our community. We identified problems with buses, schools, and more. However, instead of seeing these as isolated issues, we recognized the multitude of challenges our community faces. Thus, we developed Sitegeist, a web-based platform that aggregates all community problems into one interface.

---

### Solution

![alt](/project/4/project4-demo.gif)

Sitegeist, our innovative solution to give you more insights into community issues! We aimed to create a tool for easy analysis of trending topics and community challenges. Sitegeist leverages machine learning to predict the sentiment behind every sentence within a subreddit. It provides users with trending keywords, associated sentiments, and example posts illustrating these topics. Additionally, we integrate ChatGPT to offer users creative solutions to address trending issues.

---

### Key Features 
1. Reddit Sentences Extraction: Sitegeist dives into the depths of a subreddit, extracting topics from various discussions.

2. NLP-Driven Analysis: Each extracted sentence is analyzed using a machine learning model that is adept at discerning the underlying emotions in the text, categorizing them into positive, negative, and other sentiment types. The goal is to identify prevalent problems and topics that exist in an online community's zeitgeist.

3. Interactive Website: The heart of Sitegeist is giving its user an interface to quickly understand the sentiments of certain topics within a community. Here, users can delve into Sitegeist's findings with immediately clear visuals and example posts associated to key topics.

4. Integration with ChatGPT: When Seitgeist identifies an issue or a topic of interest, ChatGPT steps in to suggest potential solutions. This feature aims to inspire innovative thinking towards making the world a better place.

---

### Architecture

![alt](/project/4/architecture.png)

Sitegeist's frontend is built on React, offering a seamless user interface for data interaction. The backend utilizes FastAPI, a robust service handling tasks like data extraction, sentiment analysis, and NLP processing. Within Sitegeist's NLP pipeline, NLTK, scikit-learn, and transformers collaborate to perform sentiment and word frequency analysis. This collaboration ensures Sitegeist's analytical capabilities. Lastly, ChatGPT collaborates with Sitegeist to propose innovative solutions for identified issues, enhancing the platform's problem-solving capabilities.

---

### What we learned

Throughout the project, we encountered various challenges and learned valuable lessons. One major lesson was the importance of backend development for frontend progress. To overcome this bottleneck, we prioritized designing our database schema and API early on, ensuring consistency in data formats for testing. Collaboration was key, but we also faced challenges with overlapping efforts, resulting in conflicts during merges. However, we learned to strategize our efforts to minimize conflicts and optimize productivity.
