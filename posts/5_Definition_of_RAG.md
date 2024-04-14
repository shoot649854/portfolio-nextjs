---
Status: Published # 'Draft', 'Pending', 'Published-Portfolio', 'Published-Medium', 'Rewriting'
docType: Article # 'Project', 'Article'
id: 5
title: Definition of RAG
description: Exploring the RAG Paradigm in LLMs. Technically, RAG uses a variety of innovative approaches that address important questions such as “what to search for,” “when to search for,” and “how to use the information obtained.” It has been strengthened.
slug: Definition_of_RAG
date: 2024-02-3
author: Shoto Morisaki
image: sample/sample3.jpg
category: Research
tags: [RAG, LLM, Knowledge Injection, Fine-tuning, External Data]
relatedDoc1: None
relatedDoc2: None
relatedDoc3: None
relatedDoc4: None
relatedDoc5: None
editor_img: None
editor_bio: None
editor_name: Shoto Morisaki
editor_social:
    -
        icon: fab fa-facebook-f
        url: None
    -
        icon: fa-brands fa-x-twitter
        url: None
    -
        icon: fas fa-link
        url: None
---





# Definition of RAG
Technically, RAG uses a variety of innovative approaches that address important questions such as “what to search for,” “when to search for,” and “how to use the information obtained.” It has been strengthened.

### Retrieval-Augmented Generation for Large Language Models
[Retrieval-Augmented Generation for Large Language Models: A Survey](https://arxiv.org/pdf/2312.10997.pdf)

RAG = Paradigm that enhances LLM by integrating external knowledge bases
RAG is a paradigm that enhances LLM by integrating external knowledge bases. This is a synergistic approach that combines information retrieval mechanisms and In-Context Learning (ICL) to improve the performance of LLM. Search algorithms find relevant information through user-initiated queries. This information is built into LLM's prompts and provides additional context to the generation process. The main advantage of RAG is that it eliminates the need to retrain his LLM for task-specific applications.

## RAG Workflow

The RAG workflow consists of three main steps.

1. First, the corpus is divided into individual chunks and a vector index is constructed using an encoder model.
2. RAG identifies and searches chunks based on the vector similarity between the query and the indexed chunks.
3. RAG synthesizes a response based on the context information obtained from the obtained chunk. These steps form the basic framework of the RAG process and support information retrieval and context generation functions.

# Developing RAG system needs irrelevant information

## The Power of Noise: Redefining Retrieval for RAG Systems

When building a RAG (external data import) system for LLM, it has been suggested that search accuracy may be improved by mixing "unrelated" documents into the database.

### Why does this happen

1. Overfitting occurs when all documents are highly related.
2. Increased ability to filter out irrelevant information.

## Experiments and Results

1. Using 7B each of Llama i2, Falcon, Phi-2, and MPT 2.
2. Experimenting on a dataset containing various document types.
3. Adding random documents improved accuracy.
4. On the other hand, adding related documents reduced accuracy.

The results showed that, in particular, including unrelated documents unexpectedly improved performance by more than 30%. This contradicts the initial assumption that quality would deteriorate. These results highlight the need to develop special strategies to integrate language production models and retrieval, and lay the foundation for future research in this area.

## Disadvantages of having too many related documents

1. The model's attention is divided due to overflowing information.
2. It becomes difficult to properly evaluate “related but potentially inaccurate information.” Additionally, it is necessary to devise the location and number of documents.

# RAG is effective than Fine-tuning / Microsoft

## Fine-Tuning or Retrieval? Comparing Knowledge Injection in LLMs
[Fine-Tuning or Retrieval? Comparing Knowledge Injection in LLMs](https://arxiv.org/abs/2312.05934)

Large-scale language models (LLMs) encapsulate vast amounts of factual information within them. Its ability to process vast amounts of factual information is evidenced by its ability to answer diverse questions across different domains. However, this knowledge is inherently limited and highly dependent on the characteristics of the training data. Therefore, using external datasets to incorporate new information and improve LLM capabilities is an important issue. In this study, we compare two common approaches: Generation (RAG). Both approaches were evaluated on knowledge-intensive tasks across a variety of topics.

The results revealed that while unsupervised fine-tuning yields some improvement, RAG always outperforms it. Completely new knowledge Also, LLM has a hard time learning new factual information LLM has a hard time learning new factual information through unsupervised fine-tuning. This problem may be alleviated by giving students lots of experience.

Microsoft researchers report experimental results comparing two methods of incorporating external knowledge into LLM: fine-tuning and RAG. The general conclusion is that RAG appears to be consistently more effective than fine tuning. However, selection and implementation are highly data and application dependent.

## Research Background

- LLM knowledge is generally not updated automatically.
- It is important to update existing knowledge and inject new knowledge.
- Main methods known as fine tuning and RAG.

## Comparative Experiment

- Implemented on 7B of Mistral / Llama2 / Orca2.
- Perform fine tuning and RAG on each.
- Test your ability to absorb new information using MMLU etc.
- Establish comprehensive evaluation criteria to measure effectiveness.

### Experiment Results

- RAG consistently showed better performance.
- RAG was effective in leveraging new information and existing knowledge.
- Fine tuning is useful for specific purposes. However, they add that the quality of the data is important for both methods, and that there are many points to consider when applying them to real-world applications.
