---
Status: 'Published' # 'Draft', 'Pending', 'Published', 'Rewriting'
docType: 'Article' # 'Project', 'Article'
id: '999'
title: Comprehensive Survey of Hallucination Mitigation Techniques in Large Language Models
description: A comprehensive survey of techniques developed to reduce hallucinations in LLMs
slug: blog2
date: 2024-02-11
author: Shoto Morisaki
image: sample/sample4.jpg
category: Research
tags: [Large Language Models, Hallucination Mitigation, Techniques, Survey]
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

# Comprehensive Survey of More Than 32 Techniques to Reduce LLM Hallucinations
[Paper Article](https://arxiv.org/abs/2401.01313)
Large Language Models (LLMs) have significantly advanced our ability to generate human-like text. However, a persistent issue plaguing these models is the tendency to "hallucinate," generating content that appears factual but lacks substantiation. This poses a significant obstacle to the safe integration of LLMs into real-world applications, impacting various domains such as medical records summarization, customer support conversations, and financial analysis reports (Jain, 2023).

Traditional LLMs, unlike traditional AI systems, are trained on vast amounts of online text data, enabling remarkable language fluency but also making them susceptible to biases in the training data. This susceptibility can lead to misinterpretation of ambiguous prompts or modification of information to superficially match input, which is particularly concerning for sensitive applications.

Despite the advancements in self-learning, this paper presents a comprehensive survey of more than 32 techniques aimed at reducing hallucinations in LLMs. Notable techniques include Search Assisted Generation (RAG) (Lewis et al., 2021), knowledge retrieval (Varshney et al., 2023), CoNLI (Lei et al., 2023), and CoVe (Dhuliawala et al., 2023).

Furthermore, a detailed taxonomy is provided to categorize these techniques based on parameters such as dataset utilization, common tasks, feedback mechanisms, and retriever type. This classification aids in distinguishing between various approaches specifically designed to address hallucination problems in LLMs.

By analyzing the inherent limitations of these techniques, this paper lays a solid foundation for future research endeavors aimed at tackling hallucinations and related phenomena in the realm of Large Language Models.

# Animate-A-Story: Storytelling with Retrieval-Augmented Video Generation
[Paper Article](https://arxiv.org/abs/2307.06940)
Creating engaging storytelling videos is a complex and labor-intensive process that typically involves live-action filming or CG animation production. This technical nature not only demands significant resources from professional content creators but also creates barriers for the general public to effectively utilize this powerful medium. Recently, significant advances have been made in text-to-video (T2V) generation, allowing automatic generation of videos based on text descriptions \[He et al. 2022; 2022a; Singer et al. 2022; Zhou et al. 2022\]. However, the effectiveness of these video generation techniques remains limited, resulting in less-than-expected results and hindering their practical application. Furthermore, the layout and composition of the generated video cannot be controlled by text. This is important for visualizing and filming compelling stories. For example, close-ups, long shots, and composition help directors convey implicit information to the audience. Current text-to-video generation models are rarely able to generate the appropriate motion and layout to meet the requirements of a movie. 

To overcome these challenges, we propose a novel video generation approach that incorporates rich existing video content into the T2V generation process. This is specifically called search-enhanced video generation. Our approach retrieves videos from an external database based on text prompts and utilizes them as follows: induction signal for T2V generation. Building on this idea, our approach allows users to utilize the video obtained in the input as a structural reference when animating their stories, giving them more control over the layout and composition of the generated video. It will be. Moreover, by leveraging the rich knowledge and information contained in the captured videos, the quality of the generated videos can be improved, and the realism and consistency of the generated scenes can be improved. Text prompts are responsible for rendering the appearance of scenes and objects to generate new videos. 

However, such search-guided video generation process still encounters the problem of character mismatch between different video clips. Additionally, the character's appearance is controlled by text prompts and is generated in a probabilistic manner that is not controllable by the user. To further address this issue, we study the existing literature on personalization \[Ruiz et al. 2023\] to fine-tune the generative model and re-render the character's appearance. We then propose a new approach (TimeInv) to better represent personalized concepts and improve performance. By incorporating his two core modules: search-enhanced T2V generation and video character re-rendering, our approach provides a more efficient and accessible way for content creators to produce high-quality animated videos. Offers. 

In order to justify its effectiveness, we evaluate this method from the following aspects: First, we compare our search-enhanced T2V generation model with existing baselines and demonstrate significant superiority in video generation performance. Second, we justify the advantages of our proposed personalization approach compared to existing competitors. Furthermore, we conduct comprehensive experiments on the overall effectiveness of the proposed storytelling video synthesis framework and suggest its potential for practical application.

## Method

Our goal is to develop a framework that can automatically generate high-quality storytelling videos based on story scripts or with minimal interactive effort. To achieve this, we propose to search existing video assets to improve the performance of T2V generation (see Sec. 3.1). Specifically, we extract structures from the retrieved videos and serve as guidance signals provided to the T2V generation process (Sec.). Furthermore, in order to synthesize consistent characters between different video clips, we propose Perform video character re-rendering based on the TimeInv approach (see Sec.3). The following sections delve into the key technical designs that enable that functionality.

## Retrieval-augmented Text-to-Video Generation

As shown in Figure 2, our video generation framework includes three steps: text processing, video retrieval, and video synthesis. The text processing stage extracts important plot points from the story script through storyboard analysis. To simplify the problem, we define each plot as a single event with no shot transitions. For example, "The boy encountered a wolf in the forest" is one plot, but "The boy encountered a wolf in the forest and killed it with a gun" should be separated into two plots. For each plot, further tailor and embellish the description to serve as an effective text query and text prompt, respectively. This step can be completed manually or with the assistance of a large-scale language model (LLM) such as GPT-4 \[OpenAI 2023\]. Each plot is then processed separately using two modules executed sequentially. Given a text query, a ready-made text-based video search engine associated with a database containing approximately 10M open-world videos collected from the Internet \[Bain et al. Therefore, by applying a depth estimation algorithm, only the motion structure of the video is obtained. This improves the usability of existing videos. To synthesize a video of "Santa Claus playing with a wolf in the forest" as in the example shown in Figure 3

## Results

In Figure 7, we show the qualitative results of the comparison with the baseline personalization approach in video generation settings. As you can see, DreamBooth updates the entire pre-trained parameters, so it tends to suffer from overfitting issues, hindering the diversity of the generation (e.g. in lines 3 and 4) The background looks very similar to the trained character image). Textual Inversion only optimizes a single token embedding to represent the appearance of the target character, making it difficult to capture character details and resulting in low character fidelity. Custom diffusion updates the linear layer for computing k and v in the attention module inside the pretrained network and combines it with text inversion. Although this achieves better character fidelity, artifacts are often seen in the appearance of the generated characters. Table 2 shows the quantitative comparison results of this method. Section 2 shows quantitative comparison results. Our proposed TimeInv serves as an alternative to character inversion and can be combined with custom diffusion to achieve better semantic alignment. Besides video generation settings, we also evaluate our proposed timestep variable text inversion in general image personalization settings.

Compare the performance of TimeInv and Textual Inversion using the Custom Diffusion codebase. The results are shown in Figure 8. You will notice that when you combine TimeInv and Custom Diffusion, you get more background diversity and better composition of concepts (for example, the ball appears more often than with Custom Diffusion + Textual Inversion). If we directly compare TimeInv and Textual Inversion without updating the model parameters, we can see that TimeInv has more character similarity (i.e. the cat's unique texture).
