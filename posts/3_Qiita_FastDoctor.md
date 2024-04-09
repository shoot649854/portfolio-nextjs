---
Status: 'Published' # 'Draft', 'Pending', 'Published', 'Rewriting'
docType: 'Project' # 'Project', 'Article'
id: '3'
title: Qiita × Fast DOCTOR Health Tech Hackathon
description: Medical project to support medical industry with group of University students from California. We had implementation of a visual verification system as a solution. The goal of this approach is to reduce paperwork and streamline processes.
slug: project3
date: 2023-6-14
author: Shoto
image: project/3/projectQiitaFD1.jpeg
category: Project
tags: [FastAPI, Flask, GPT API]
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

## ProjectQiitaFD1
---

### What is ANTI SOCIETY? / Our Team Goals 

Hello, I am the representative of ANTI SOCIETY. This time, I wowed the audience with my presentation and the fact that I came from California, but when I started working on the project, I was a bit apprehensive. First of all, we decided to develop it in Flutter, which took about 12 hours to set up the environment (I developed an aversion to Flutter). Then I had to finish it in about 4 hours, so it may not have turned out perfectly. However, considering my limited development experience as a student, I'm not sure if it was a good idea or not. 🙇 Thank you for checking out Qiita. I hope you will also take a look at the GitHub page.

---

### Raising Issues

The current healthcare system faces a serious problem: physicians are burdened with excessive paperwork and the need to fill out extensive medical records. A significant portion of their time is spent on this administrative task, resulting in limited opportunities for direct patient care. As a result, the quality of patient care suffers, and healthcare professionals struggle to communicate and collaborate effectively with one another. Inefficient utilization of physician time hinders their ability to provide optimal healthcare services, reduces patient satisfaction, and can impair patient outcomes. Solutions are needed to streamline administrative tasks, allow physicians to focus more on patient care, and facilitate better communication within the healthcare ecosystem.

![alt](/project/3/projectQiitaFD4.jpg)
---

### Our Solution

We propose the implementation of a visual verification system as a solution. The goal of this approach is to reduce paperwork and streamline processes, allowing physicians to allocate more time to direct patient care. The use of visual technology, including automation and digitization, simplifies administrative tasks, improves efficiency, and facilitates communication among healthcare professionals.


```python
class SOAP_Converter:
    def __init__(self): 
        pass

    def get_subjective(self, prompt):
        prompt = """
        Subjective information in medical records includes patient's physical findings, 
        test results, and various examinations like auscultation, palpation, and imaging tests:
        """ 

        prompt = "find subjective information within 30 words:" + prompt
        res = openai.Completion.create(
            model="text-davinci-003",
            prompt=prompt,
            max_tokens=2048,
            temperature=0
        )
        return res.choices[0].text
```

![alt](/project/3/projectQiitaFD3.jpg)

---

### Output

![alt](/project/3/output.png)

---

## After Hackathon is over ... 
Listening to each team's presentation, I witnessed firsthand the amazing skills of working professionals. Our group was made up of only students, but I felt that we need to study harder from now on. Thanks to this hackathon, other members including myself were able to recognize the joy of team development and the fun of hackathon. It was also a valuable experience for me to talk with other team members at the reception after the hackathon. I would definitely like to participate in the second health tech hackathon. Thank you for reading this far.


