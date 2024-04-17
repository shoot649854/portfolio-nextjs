---
Status: Published # 'Draft', 'Pending', 'Published-Portfolio', 'Published-Medium', 'Rewriting'
docType: Article # 'Project', 'Article'
id: 17
title: The Human Factors of Formal Methods
description: As formal methods improve in expressiveness and power, they create new opportunities for non-expert adoption. In principle, formal tools are now powerful enough to enable developers to scalably validate realistic systems artifacts without extensive formal training.
slug: Human_Factors_Formal_Methods
date: 2024-04-17
author: Shoto Morisaki
image: project/talk_1.png
category: Article
tags: [Talk, Cognitive Science, ]
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



# Introduction 
This talk presents some of our efforts to address this paucity. We apply ideas from cognitive science, human-factors research, and education theory to improve the usability of formal methods. Along the way, we find misconceptions suffered by users, how technically appealing designs that experts may value may fail to help, and how our tools may even mislead users.

![alt text](/project/talk_1.png)

# Things to cover
1. What to compute
2. How to show
3. What to show
4. How to describe system

# What to compute

## Principle Model Finding

The central focus of computation often revolves around deriving principle model findings, encapsulating complex systems or phenomena into manageable representations. However, the mere creation of intricate mathematical models does not necessarily equate to effective communication with all members of society.

In one such instance, a diagram illustrating loops, non-binary searches, and prompting questions appeared mathematically sound and well-defined. Yet, despite its clarity to some, it proved perplexing and off-putting to many users. This discrepancy between mathematical elegance and user comprehension underscores a crucial point: the beauty of mathematics does not inherently translate to accessibility or utility for all users.

The key takeaway from this observation is the importance of bridging the gap between mathematical sophistication and user-friendly design. While mathematical rigor is essential for robust computation, effective communication requires consideration of diverse user perspectives and levels of understanding. Simply put, a visually appealing or theoretically elegant model may not serve its purpose if it fails to resonate with its intended audience.

# How to show

The ultimate aim of computation extends beyond mere processing of data; it encompasses the profound impact on users, invoking questions rooted in cognitive sciences such as perceptual and educational psychology. Recognizing that prior knowledge serves as a catalyst for empowered output, the challenge lies in effectively presenting computational results to optimize user understanding and engagement.

An illustrative example lies in applying cognitive principles to the output of model findings, particularly highlighting the positive value of negative information. Contrary to conventional wisdom, providing negative information can enhance learning—a phenomenon rooted in the principle of contrasting cases. By juxtaposing contrasting scenarios, users gain deeper insights and a more nuanced understanding of the subject matter.

The key takeaway from this approach is the recognition that as computer scientists, we possess insights into cognitive effects that can significantly enhance the effectiveness of computational output. By integrating principles from cognitive sciences into our computational models and presentations, we can create more impactful and user-friendly systems that resonate with users on a deeper level.

# What to show

Presenting visual representations and exploring avenues for improvement constitutes a vital aspect of effective communication and comprehension. When showcasing diagrams or visual aids, it's essential to solicit feedback on enhancing their clarity and impact. For instance, considering alternatives like silicon-shaped diagrams or dynamic motion animations can significantly enhance user understanding and engagement.

One notable tool facilitating such custom visualizations is Forge. By dynamically adjusting information based on user queries, Forge enables the creation of tailored visualizations that effectively convey complex concepts and data sets.

## Colored text test
Innovative approaches, such as color-text tests, draw inspiration from psychological phenomena like the Stroop effect, where color and text discrepancies create cognitive challenges, thereby deepening user engagement and comprehension.


![Image by Gili Malinsky on Business Insider](https://i.insider.com/5d38a8fc2516e97a8f23a3ab?width=1200&format=jpeg "Image by Gili Malinsky on Business Insider")

## River-Crossing Puzzles (spatial and temporal)
Consider the example of River-Crossing Puzzles, which blend spatial and temporal elements to challenge problem-solving skills. In these puzzles, maneuvering pieces across a river involves understanding both spatial orientation (left, right) and temporal sequencing (before, after).

This interplay of spatial and temporal relations not only imbues meaning into the puzzle but also underscores the importance of metaphorical constructs in domain-specific contexts. Rust, a programming language known for its emphasis on memory safety and performance, leverages these spatial and temporal relationships to offer robust solutions, exemplifying the practical utility of such conceptual frameworks in computational domains.

![Image by Mark Borg on mark-borg.github.io](https://mark-borg.github.io/img/post-banners/river-crossing-puzzles.png "Image by Mark Borg on mark-borg.github.io")

# How to describe the system

Describing the intricacies of a system involves navigating through various formalisms and languages, such as Linear Temporal Logic (LTL), which provides a framework for reasoning about temporal properties in computational systems. Common operators in LTL include "always," "until," and "next stage," each serving to express temporal relationships and constraints within the system.

A seminal paper titled ["Branching vs Linear Time"](https://www.cs.rice.edu/~vardi/papers/etaps01-ver13.pdf) by Vardi et al. sheds light on the distinctions between branching and linear time logics, offering insights into their respective strengths and weaknesses in modeling and verification contexts.

```card
https://www.cs.rice.edu/~vardi/papers/etaps01-ver13.pdf
```

One notable challenge lies in the transformation between LTL and natural language. While converting LTL formulas into English statements may seem straightforward, the reverse process—translating natural language requirements into LTL specifications—poses considerable difficulties. This complexity parallels the historical reliance on Latin terminology in medical contexts, where precise and standardized language facilitates communication despite its esoteric nature.

![alt text](/project/talk_2.png) 

The key takeaway from this observation is the critical importance of rigorous verification in system design. As systems grow increasingly complex, ensuring their correctness and reliability becomes paramount. This necessitates the development of validated tools accessible to all stakeholders, facilitating seamless collaboration and verification processes.

# Conclusion and thought