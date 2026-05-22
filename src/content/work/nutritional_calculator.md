---
title: "Nutrition Database & Recipe Processing System"
year: 2025
project_type: "Experimental System"
status: "Prototype"
summary: "Developed an experimental nutrition database and recipe processing system to explore how real-world recipes and food behaviors in Indonesia could be translated into structured nutritional data. The project involved ingredient matching with USDA datasets, modular recipe decomposition, unit conversion workflows, and computational modeling of fried food oil absorption."
thumbnail: "nutritional_calculator.jpg"
slug: "nutritional_calculator"
---

## Overview

After working on wearable biosensor research, I became increasingly interested in how behavioral and physiological data could be integrated to generate meaningful health insights. This led me to explore a new challenge: how messy real-world health behaviors could be translated into structured, longitudinal data systems.

Nutrition quickly emerged as one of the most difficult problems. Food data is highly inconsistent, preparation methods vary widely, and many local dishes are poorly represented in standard nutritional databases.

I built an experimental nutrition database and recipe processing system using Python, Tkinter, SQLite, and USDA nutritional datasets. The system started as a simple macronutrients tracker and then evolved into an early prototype for structuring nutrition-related health data.

The system combined:

1. ingredient matching workflows
2. recipe decomposition
3. unit conversion workflows
4. human-guided nutritional correction
5. modular recipe components

into a single processing pipeline.

---

## Recipe Calculator Main UI

The recipe calculator is the central workflow of the system that combines ingredient matching, recipe decomposition, and unit conversion workflows into a single interface. The goal was to create a flexible pipeline to transform real-world recipes into structured nutritional data.

The upper section of the interface stores metadata about the recipe itself, including cuisine type, preparation method, food source, and modular recipe components such as protein, sauces, or coatings.

Ingredients entered into the system are matched against USDA nutritional datasets or locally stored database entries. Conversion factors that standardize units, such as tablespoons or cups, into grams are either fetched from the USDA datasets or can be manually added through the popup windows.

As ingredients are processed, they are compiled into structured recipe components and converted into standardized measurements for downstream nutritional estimation. The system also preserves unresolved ingredients to enable future refinement.

---

## Recipe Components

Rather than treating recipes as a single flat list of ingredients, the system deconstructs them into components such as:

- proteins
- coatings
- sauces or dressings
- vegetables
- carbohydrate bases

This structure initially emerged from the need to better estimate nutritional changes in fried foods where different components absorb oil differently during cooking. Batters and breadings, for example, absorb more oil than the protein itself. 

This modular structure can be adapted to meals like salads and pastas that contain interchangeable elements. By separating recipes into reusable components, the system can flexibly represent variations across dishes while enabling component-specific nutritional estimation.

---

## Fried Food Modelling

Fried foods are a major part of Indonesians’ diet but are often poorly represented in standard nutritional databases, especially when preparation methods significantly influence oil absorption. 

To better estimate these nutritional changes, I attempted to model how different coating systems, such as flour coatings, batter, breading, and egg wash, affect frying behavior and oil uptake. 

The system separates fried foods into modular components and estimates factors such as:

- pickup percentage
- oil barrier effects
- flour-to-water ratios
- coating consistency

For battered foods, batter thickness is estimated using flour-to-water ratios, and additional factors such as eggs or milk modify the predicted frying behavior and oil absorption. Breaded foods are similarly deconstructed into flour coating, egg wash, and breading layers to estimate their respective contributions to oil uptake.

To support these estimations, I used experimentally derived values from scientific publications and food science literature. 

Although still experimental, this became an early exploration into computationally modeling real-world food behavior rather than relying solely on static calorie lookups from nutritional databases.

---

## Ingredients Database

The system’s database contains tables such as 

- ingredients
- conversions
- recipes

to support flexible nutritional data handling.

The ingredients table is the foundation of the nutrition database, storing standardized ingredient entries fetched primarily from USDA nutritional datasets alongside manually curated entries. 

Each ingredient record preserves metadata such as:

- food category
- dataset type
- publication date
- source information

to improve traceability and consistency across recipes and datasets.

Although it is a foundational table, building the ingredient database highlighted many of the practical challenges involved in nutrition data systems, including inconsistent naming conventions, multiple representations of similar foods, missing conversion factors, and the difficulty of representing local dishes using standardized nutritional datasets.

---

## Conclusion

This project is an early exploration into the challenges of structuring real-world behavioral and nutritional data for longitudinal health analysis. While still experimental, building the system highlighted the complexity of real-life health data, limitations of standardized datasets, and importance of flexible computational workflows. 