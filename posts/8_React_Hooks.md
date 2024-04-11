---
Status: 'Published' # 'Draft', 'Pending', 'Published', 'Rewriting'
docType: 'Article' # 'Project', 'Article'
id: 8
title: Commonly Used React HooksGithub accounts
description: List of commonly used React hooks with brief explanations.
slug: React_Hooks.md
date: 2024-02-11
author: Shoto Morisaki
image: sample/opened-laptop.jpg
category: Coding
tags: [Git]
relatedDoc1: ""
relatedDoc2: ""
relatedDoc3: ""
relatedDoc4: ""
relatedDoc5: ""
editor_img: ''
editor_bio: ''
editor_name: ''
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

# Commonly Used React Hooks

Here's a list of some commonly used React hooks along with brief explanations:

## useState

Allows functional components to manage state.

## useEffect

Allows functional components to perform side effects (e.g., data fetching, DOM manipulation) after render.

## useContext

Allows functional components to consume context.

## useReducer

An alternative to useState. Allows functional components to manage complex state logic with reducers.

## useCallback

Memoizes callback functions to prevent unnecessary re-renders.

## useMemo

Memoizes computed values to prevent unnecessary recalculations.

## useRef

Provides a mutable reference that persists across renders.

## useLayoutEffect

Similar to useEffect, but fires synchronously after all DOM mutations.

## useImperativeHandle

Customizes the instance value that is exposed to parent components when using ref.

## useDebugValue

Adds a label to custom hooks for better debugging in React DevTools.
