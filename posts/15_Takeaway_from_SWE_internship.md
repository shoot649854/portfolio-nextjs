---
Status: 'Published' # 'Draft', 'Pending', 'Published', 'Rewriting'
docType: 'Article' # 'Project', 'Article'
id: '999'
title: Takeaway of 8 months Internship as Software Engineer 
description: Wrapping up 8 months of internship at start up software engineering company as a Software Engineer has been an enriching journey. Here's a summary of key takeaways
slug: blog4
date: 2024-02-20
author: Shoto Morisaki
image: sample/sample7.jpg
category: Blog
tags: [ Internship, Software Engineering ]
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

# 🚀 Introduction 
Wrapping up 8 months of internship at start up software engineering company as a Software Engineer has been an enriching journey. Here's a summary of key takeaways:

As I mentioned above in my LinkedIn post, there are many changes in technology and updates in the field of programming in general, not just in the field of AI, which is still a new field. Top-notch engineers, after all. I also think that one thing that managers try to do every day is to update their skills and be able to adapt to changes, so here are some tools that I utilize on a daily basis to keep up with the trends.

---

# 🧠 Mental Agility 
> Communicating effectively means separating facts from feelings. Clarity in articulating tasks and research ensures smoother collaboration and understanding among team members.

This is the lesson I learned when I was at a meeting and was asked about the API specs. I believe that a meeting in which I don't speak up is meaningless, so I always try to be prepared and say something at the meeting, but sometimes when I get nervous in a room full of other engineers and my boss, I don't always say the right information. It is still very effective to say that you don't understand something even when you are in the middle of speaking, and to look it up at that moment and say the correct information.
![alt](/post/4/meeting.jpg)

---

# 💻 Embrace Innovation 
> Staying abreast of the latest tech trends, particularly in AI, is paramount. Engaging with coding as more than just a job fosters a mindset of continuous learning and creativity.

Technical sites are a great place for engineers and programmers to find out what has changed and what new technologies are available, from personal to corporate blogs. While I understand the need for caution, as some of the information may be incorrect, I recommend that you check out the personal blogs, as they are often quicker and more comprehensive. 

As a bilingual engineer, my intuition tells me that Japanese-language literature is written in a way that is easier to understand, with more personal output, diagrams, and actual code used than in the U.S. or other countries. 

[Qiita](https://qiita.com/) : sharing engineering knowledge. You can easily record and publish your programming tips, know-how, and notes.
[Zenn](https://zenn.dev/) : Community for engineering to share ideas and skills.

I also have the impression that there is not much in the English literature that is written by individuals with correct and personal information, and that there are blogs and the like that you can only view if you pay a fee.

[LinkedIn](https://www.linkedin.com/) : always nice place for formal skill share space
[Twitter](https://twitter.com/) : always nice place for informal skill share space

---

# 🔑 Simplicity Wins 
> The principle of KISS (Keep It Simple, Stupid) reigns supreme. Simplifying tasks and breaking them into manageable sub-modules enhances productivity and clarity in execution.

I feel that many college students and interns, when faced with a large task, struggle to break it down and determine where to begin, and I was one of them. When approaching a task, I always consider the bigger picture and the background knowledge required. I'd like to share some tools that I typically use.

[Goblin Tools](https://goblin.tools/) is that one such tool allows me to break down tasks into smaller components. While I rely on LLM for accuracy, I find it invaluable for task subdivision and prioritization.

```python
def log_time(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        execution_time = end_time - start_time
        logger.info(f"関数( {func.__name__}) の実行時間: {execution_time} sec")
        return result
    return wrapper

@log_time
def lambda_handler(event: LambdaFunctionUrlEvent, context: LambdaContext) -> dict:
...
```

For instance, the other day, I had to measure the execution time of a function. However, the function was implemented using AWS ECR, so I needed to confirm that this was indeed the case. As I delved deeper into this technology, I realized the importance of understanding Docker, and even further, I needed to grasp the function's decorator. This experience highlighted the effectiveness of breaking down tasks into manageable steps.

![alt](/post/4/docker_and_ecr.png "Architecture of sample Docker and ECR")

---

# 🎯 Purposeful Coding 
> Having a clear rationale behind coding approaches is essential. Confidence in one's abilities breeds irreplaceability, contributing to a robust and purpose-driven coding ethos.

As for meaningful coding, consider the following example. You are an engineer and must create a model for a website. This website will receive data from users and return a json of that data. You will create this model in Python streamlit.

Ex I came up with the following I would take input from the user, access the database based on that input, and generate an error if the input information is missing.

```python
def str_name_selection(self, name_list):
  single_selection = st.sidebar.selectbox("Pick a data", name_list, key=name_list)
  return single_selection
```

However, there are many drawbacks to the above idea. The first major one is that it gives the user time to think. What I mean is that the user needs to remember the information of the data in detail, which has the drawback that typing errors may occur and the user cannot check the information of data that he/she does not know. By providing the user with the option of knowing what data is available, the code will be more meaningful.

```python
import logging

def s3_option(self):
    option_list = []
    name = []
    
    for option in self.muti_data_picker_as_option("bucket-name"):
        try: 
            name = option.rsplit("/", 2)[-2]
            option_list.append(name)
            names_list.append(name)
        except IndexError as e:
            logging.error(f"{e}, input format is incorrect.")
    
    return [option_list, names_list]

```

---

# ⏰ Efficiency Matters 
> Time management is key. Providing estimated task durations and visualizing final outcomes promptly streamlines workflow and fosters alignment across teams, particularly in frontend development.

Reflecting on these lessons, I'm grateful for the growth opportunities and experiences during my tenure at start up software engineering company. Excited to carry these insights forward as I embark on new endeavors in the dynamic world of software engineering.