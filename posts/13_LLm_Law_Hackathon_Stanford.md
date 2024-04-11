---
Status: 'Published' # 'Draft', 'Pending', 'Published', 'Rewriting'
docType: 'Project' # 'Project', 'Article'
id: '13'
title: LLM Law Hackathon Impressions Exploring New Frontiers in Legal Tech
description: Recently, I had the opportunity to participate in the LLM Law Hackathon, an event that brought together legal minds, tech enthusiasts, and innovators to collaborate on creating solutions at the intersection of law and technology. As a participant, I was not only exposed to cutting-edge tools and technologies but also immersed in a vibrant community of like-minded individuals. Here are some of my key impressions from the event. 
slug: project8
date: 2024-4-8
author: Shoto
image: /project/8/opening.png
category: Hackathon
tags: [ Hackathon, LLM, Law, RAG ]
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

# LLM Law Hackathon Impressions Exploring New Frontiers in Legal Tech

Recently, I had the opportunity to participate in the LLM Law Hackathon, an event that brought together legal minds, tech enthusiasts, and innovators to collaborate on creating solutions at the intersection of law and technology. As a participant, I was not only exposed to cutting-edge tools and technologies but also immersed in a vibrant community of like-minded individuals. Here are some of my key impressions from the event. 

![opening](/project/8/opening.png)

## Embracing New Technologies
One of the most exciting aspects of the hackathon was the opportunity to experiment with new technologies. While I had prior experience with popular front-end tools like React and Barcell, I made a deliberate choice to explore unfamiliar territory this time. I delved into platforms such as Firebase, Svelte, and Gemini, which are poised to play a significant role in the future of software development. Leveraging these tools not only expanded my technical repertoire but also provided valuable insights into emerging trends in the industry. It was particularly fascinating to integrate Google's AI capabilities, made possible through their sponsorship of the event, into our projects, opening up new possibilities for innovation.

### Why Did I Choose [Svelte](https://svelte.dev/)?

[Svelte](https://svelte.dev/), a relatively recent entrant into the front-end framework landscape, has been gaining attention and traction, including a feature in [The State of JavaScript 2019 report](https://2019.stateofjs.com/). As a developer exploring the evolving ecosystem of web development tools, I found myself drawn to Svelte for several compelling reasons.

```Svelte
<script>
	import '../app.pcss';
	import './styles.css';
	import Header from '../component/Header.svelte';
</script>

<div class="app">
	<Header />
		
	<slot />

</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		padding-bottom: 10px;
		background-color: bisque;
	}

</style>
```

When you compile a Svelte component, it produces both JavaScript and CSS files, each optimized for performance. The resulting JavaScript bundle is notably small, thanks to Svelte's approach of compiling away its framework-specific code during the build process. Additionally, Svelte's CSS handling involves scoping styles to the component level, minimizing the risk of unintended style conflicts.

### Key Reasons for Choosing [Svelte](https://svelte.dev/):
1. [Write Less Code](https://svelte.dev/blog/write-less-code)
Svelte's design philosophy centers around reducing boilerplate and minimizing the amount of code required to achieve desired functionality. By embracing features like bi-directional bindings, akin to those in Vue.js, Svelte empowers developers to accomplish tasks with concise, expressive syntax. Furthermore, its mutable state updates streamline the development process, eliminating unnecessary verbosity.

2. [No Virtual DOM](https://svelte.dev/blog/virtual-dom-is-pure-overhead)
Unlike frameworks such as React and Vue.js, which rely on a virtual DOM for efficient rendering, Svelte takes a different approach. By analyzing component dependencies during compilation, Svelte generates optimized code that directly manipulates the DOM without the overhead of virtual DOM reconciliation. This results in faster performance and a more lightweight runtime environment.

## Netwokring in Top LLM × Law area
Beyond the technical aspects, the hackathon provided an invaluable opportunity to connect with a diverse array of individuals. Engaging in discussions with fellow participants, mentors, and industry experts was both inspiring and enriching. I gained insights not only into their projects and areas of expertise but also into their personal journeys and aspirations. These interactions fostered a sense of camaraderie and collaboration, laying the groundwork for potential future collaborations. The sense of community and mutual support was palpable throughout the event, creating a conducive environment for creativity and innovation.

![alt](/post/4/meeting.jpg)

## Knowing my level in Bay Area
As a student aspiring to enter the workforce, participating in the hackathon served as a validation of my skills and capabilities. In the competitive landscape of job applications, it's easy to doubt one's proficiency, especially when faced with rejections or lack of opportunities. However, the experience of successfully contributing to a project within the constraints of a hackathon reaffirmed my confidence in my abilities. It underscored the importance of practical experience and demonstrated that proficiency transcends traditional metrics of evaluation. Moreover, it highlighted the democratizing influence of technology, leveling the playing field and empowering individuals to showcase their talents regardless of background or pedigree.

## Over-reliance on Familiar Methods
One significant realization during the hackathon was the diminishing novelty of certain methodologies, such as the **Retrieval Augumented Generator (RAG)** approach. While initially intending to introduce RAG as a meaningful tool for project management, I soon realized that it was already widely known and utilized. 

This serves as a reminder that the RAG methodology is not simply about introducing new concepts, but rather about applying existing concepts in a novel and impactful way. It highlights the importance of contextual relevance and data consistency when introducing a methodology such as RAG. The study was conducted to show that simply adopting a trendy approach without considering its applicability and implications can lead to inefficiencies and misalignment with project goals.

For example, an effective use of this approach would be to maintain a database of more than 1,000,000 messages, or a database limited to only the most relevant cases to date. This would be a very good use if it can be demonstrated that the use of this approach has improved performance and institutional efficiency.

## Lack of Focus on LLM Aspect
One of the most glaring shortcomings of our team's approach was the insufficient emphasis on the intersection of machine learning and law (LLM). Despite the overarching theme of the hackathon, our efforts primarily revolved around front-end development and design, neglecting the core domain of LLM. In hindsight, this oversight is particularly perplexing, considering the wealth of resources and support provided by sponsors specializing in machine learning tools. It underscores the importance of aligning project objectives with the overarching theme of the event and capitalizing on available resources to maximize impact. By not delving deeper into the LLM aspect, we missed out on opportunities for innovation and collaboration within the intended domain.

![Chat-UI](/project/8/chat-UI.png)