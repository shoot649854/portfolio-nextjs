---
title: CruzHack 2024 - Sitegeist
description:  Sitegeist, our technical solution for giving you more problems! We wanted a way to easily analyze trending topics and issues faced by those around us.
slug: project/4
date: 2024-1-16
author: Shoto
image: demo_cruzhack.gif
category: Project
tags: [ RESTfulAPI, React, Typescript, GPTAPI, HuggingFaceModel, ]
---

## ProjectCruzHack

### Motivation

Prior to this CruzHack2024, our group began looking for what issues were problematic in our community. Problem with the buses, with the schools, however we didn't see any of them as problems, but rather the sheer number of problems. So we developed a Sitegeist, web-based platform that allows us to look at all the problems in our community at once.

---

### Solution

Sitegeist, our technical solution for giving you more problems! We wanted a way to easily analyze trending topics and issues faced by those around us. Sitegeist uses machine learning to predict the sentiment held behind every sentence (literally, every sentence) within a subreddit, giving you trending keywords, their associated sentiments, as well as example posts that give direct examples of those dealing with such topics and issues. Finally, we utilize the power of ChatGPT to additionally provide the user with ideas towards a solution to solve or expand the trending topics.

---

### Architecture

The frontend of Sitegeist is built on React, providing users interface to seamlessly navigate and interact with the data. This user-friendly approach ensures a smooth experience. Backend of Sitegeist is FastAPI, the rich backend service responsible for handling critical tasks, such as data extraction, sentiment analysis, and NLP processing. It forms the core of Sitegeist, guaranteeing efficiency and reliability in processing huge amounts of information. Inner workings of Sitegeist's NLP pipeline, where NLTK, scikit-learn, and transformers collaborate to perform intricate tasks such as sentiment analysis and word frequency analysis. This pipeline forms the backbone of Sitegeist's analytical capabilities. Sitegeist has unique collaboration, ChatGPT, working together to propose innovative solutions for identified issues. It's a dynamic partnership that adds a layer of creativity and problem-solving to the platform's capabilities and finds the base solution for current issues.

---

### What we learned

Some things we learned during the project is the bottleneck produced by needing a backend server to properly continue development on the frontside. We dealt with this by designing our database schema and API designs early on in order for us to be able to work with consistent formats within the dummy data used for fundamental testing. Working in parallel with others provides many advantages, however, overlapping efforts was a particularly difficult challenge for us. Oftentimes working within the same file, most merges resulted in conflicts that needed to be dealt with. However, we learned to strategize the timings of our efforts by making sure the efforts of an individual are towards a different enough piece of the project than the rest of the members.
