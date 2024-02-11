---
title: What is Portflorio?
description: Template for Next.js
slug: about
date: 2021-12-31
author: Shoto
image: sample1.jpg
category: Other
tags: []
---

# What is Portflorio?

Portflorio is a blog template built for Next.js. This is a free template that uses TypeScript and article management using Markdown, while maintaining the speed-up features that are the hallmark of Next.js.

Below is a list of what the expressions written in Markdown look like.

# header

```md
# h1

##h2

### h3

#### h4

##### h5

###### h6
````

# h1

##h2

### h3

#### h4

##### h5

###### h6

# Text decoration

```md
**Emphasis** Highlighted string
*italic* text string
~cancelled~ string
````

**Emphasis** Highlighted string
*italic* text string
~cancelled~ string

# table

```md
| th | th | th | th |
| ----------- | :---------| | ----------: | :---------: |
| sample text | sample text | sample text | sample text |
| a | b | c | d |
| a | b | c | d |
````

| th | th | th | th |
| ----------- | :---------| | ----------: | :---------: |
| sample text | sample text | sample text | sample text |
| a | b | c | d |
| a | b | c | d |

# list

```md
-item
   -item
   -item
   1.item

1.item
    -item
````

-item
   -item
   -item
   1.item

1.item
    -item

# linked string

```md
[Link text](https://example.com/)
[You can also write this way][1]

[1]: https://example.com/
````

[Link text](https://example.com/)
[You can also write this way][1]

[1]: https://example.com/

# image

```md
![alt](/sample1.jpg)
![alt](/sample2.jpg "caption")
````

![alt](/sample1.jpg)
![alt](/sample2.jpg "caption")

# Quote

```md
> Quoted text
> Quoted text
````

> Quoted text
> Quoted text

# code

````md
This is the `code` in the text.

````js
let x = "sample text";
````
````

This is the `code` in the text.

````js
let x = "sample text";
````

# YouTube embed

````md
```youtube
bIHPvQmU7JQ
````
````

```youtube
bIHPvQmU7JQ
````

# Twitter embed

````md
```twitter
1441739144300929030
````
````

```twitter
1441739144300929030
````

# directly embedded HTML

```md
<ul>
   <li>item</li>
   <li>item</li>
</ul>
````

<ul>
   <li>item</li>
   <li>item</li>
</ul>

Since it is assumed that only his Markdown written by himself will be loaded, no sanitization processing is performed when converting Markdown to HTML. If you don't trust the Markdown author, add some sanitization.

# separator line

```md
---
````

---

that's all.