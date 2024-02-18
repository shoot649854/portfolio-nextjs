---
title: Electric Sheep Hackathon (Mobility and Big Data)
description:  Collaborated with Japanese university students to create an AR app with Flutter, sponsored by Toyota. Utilized the Luma API and Google Maps API for 3D models and mapping features.
slug: project2
date: 2023-8-14
author: Shoto
image: project/2/projectNagoya2.png
category: Project
tags: [ Flutter, 3DModel, GoogleMapAPI, LumaAPI]
---

## ProjectNagoya

### Description

**Demonstration Video at the end**

This article summarizes the project conducted in Nagoya, Japan, in the summer of 2023 jointly with Metele. In this article, along with my subjective views, I summarize how our team narrowed down ideas and worked on creating a mobile application over three days.

![alt](/project/2/projectNagoya3.png)

---

### Ideathon / Brainstorming

Our group decided to start by brainstorming based on the themes given to us. Our theme was mobility and big data transportation, influenced by Toyota Motor Corporation, the sponsor behind these themes. However, these topics presented complexities that other teams did not face, making it difficult for us to decide which ideas to pursue. We had the freedom to choose the background and era for the product we were going to create.

---

### Our Solution

We decided to focus on Japan 30 years from now, envisioning a depopulated Japan. As the aging population declines, it is predicted that depopulation in rural areas will increase as more people move to major cities. Given Japan's susceptibility to natural disasters like earthquakes, we considered the possibility that, in 30 years, people may be unable to return to abandoned rural areas. Many team members had roots in rural areas but had relocated to Tokyo for university or work, or had friends who moved abroad. Such individuals often express a desire to return to their hometowns, especially at significant milestones. Therefore, we created a mobile application to display 3D models of these areas.

---

### Struggle

One of the challenges we faced was the limited development experience of many team members. This project was targeted towards beginners or students with diverse interests rather than those with prior experience. As a result, it was not initially screened based on experience and aimed to cater to a wide range of skill levels. Consequently, there was a significant amount of self-teaching involved. For example, we provided instruction on using GitHub and basic coding methods throughout the three days.


```Dart
  import 'dart:async';
  import 'package:flutter/material.dart';
  import 'package:flutter/material.dart';
  import 'package:geolocator/geolocator.dart';
  import 'package:google_maps_flutter/google_maps_flutter.dart';
  import 'package:metele/map.dart';
  import 'model.dart';
  
  void main() {
    runApp(const MyApp());
  }
  
  class MyApp extends StatelessWidget {
    const MyApp({Key? key}) : super(key: key);
    @override
    Widget build(BuildContext context) {
      return const MaterialApp(
        title: 'My diARry',
        home: LoginPage(),
      );
    }
  }
```
---

### Demo

Therefore, we, as engineers, decided to develop a demo as a mobile application and began creating it with five engineers in Japan. The most challenging aspect was integrating the Google Maps API and Luma API with Flutter.

---

### Conclusion

One positive aspect of this project was Toyota Motor Corporation's sponsorship, which provided us, as students, with the opportunity to have industry professionals evaluate our ideas and products. Despite the short development timeframe, the evaluations were generally positive. 

```youtube
fbxnJkiEdk0
````


However, I believe there were many areas where our ideas could have been further refined. Nonetheless, I feel that we made the most of the opportunity to collaborate with a prestigious company like Toyota.

![alt](/project/2/demo.gif)