---
Status: Draft # 'Draft', 'Pending', 'Published-Portfolio', 'Published-Medium', 'Rewriting'
docType: Article # 'Project', 'Article'
id: 8
title: Commonly Used React HooksGithub accounts
description: List of commonly used React hooks with brief explanations.
slug: React_Hooks
date: 2024-02-11
author: Shoto Morisaki
image: sample/opened-laptop.jpg
category: Coding
tags: [Git]
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
