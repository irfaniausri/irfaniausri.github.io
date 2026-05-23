---
title: "Multifunctional Dopamine-Based Hydrogel Microneedle Electrode for Continuous Ketone Sensing"
year: 2024
journal: "Advanced Materials"
authors: "Irfani Rahmi Ausri, Sadegh Sadeghzadeh, ..., Amin GhavamiNejad, and Mahla Poudineh"
summary: "Led the design and validation of a wearable hydrogel microneedle platform for continuous ketone monitoring. This project involved the development of a novel microneedle biosensor platform, diabetic rat validation, and data-driven modeling of ketone dynamics."
thumbnail: "ketone.jpg"
slug: "ketone-sensor"
---

## Overview

Diabetic ketoacidosis (DKA) is a life-threatening complication of type 1 diabetes caused by elevated ketone levels. Despite its severity, ketone monitoring today is not continuous and less accessible than glucose monitoring.

<Figure
  src="../../assets/images/ketone_paper/overall_schematic.jpg"
  caption="Schematic of the wearable hydrogel microneedle sensor for continuous ketone monitoring."
  align="center"
/>

This project explored a wearable continuous ketone monitoring system based on skin-compatible hydrogel microneedles capable of sampling interstitial fluid beneath the skin surface with minimal discomfort.

The system combined:

1. a chemically engineered sensing layer for detecting ketone-related reactions
2. a hydrogel microneedle platform developed for continuous wear
3. a data-driven modeling approach for interpreting real-time physiological signals

The work included both sensor development and in vivo validation in a type 1 diabetic animal model, demonstrating the ability to continuously track changes in ketone levels over time.

---

## The Problem

Despite the prevalence of continuous glucose monitoring, ketone monitoring still relies on intermittent blood or urine tests that provide sporadic data. This creates a major gap in diabetes care where ketone levels can change rapidly but current tools are not designed for continuous tracking or early warning.

Recently developed experimental ketone sensors also face significant engineering challenges. Many uses rigid needle-based structures that are mechanically incompatible with soft human skin, leading to poor long-term contact, unstable signals, and potential safety concerns.

The project focused on addressing both problems simultaneously:

1. enabling continuous ketone monitoring
2. designing a sensor platform better suited for long-term wear and signal stability

---

## Sensor Design

The skin-compatible hydrogel microneedle sensor platform matches the skin’s mechanical properties and accesses interstitial fluid beneath the skin surface with minimal invasiveness.

The core of the sensor is the dopamine-based catechol-quinone chemistry leveraged to serve two roles simultaneously:

1. stabilizing the hydrogel sensor structure
2. enabling the detection of enzymatic ketone reactions

The sensing platform integrated:

1. conductive polymer materials for signal transmission
2. catechol-quinone chemistry for enzymatic ketone sensing
3. a hydrogel matrix for continuous skin-compatible operation

<Figure
  src="../../assets/images/ketone_paper/sensing_mechanism.jpg"
  caption="Illustration of the multi-step electrochemical sensing process used to for ketone detection."
  align="center"
/>

The sensing mechanism relied on enzymatic oxidation of β-hydroxybutyrate (β-HB), where electrochemical changes generated within the hydrogel were measured and correlated with ketone concentration over time.

Since the sensing chemistry operates under physiological conditions where there are limited reactive quinone species, a staged electrochemical detection protocol was developed to enhance signal stability and sensitivity. The detection protocol used a pre-oxidation step followed by a timed detection step to enable the accuracy and consistency across sensors.

<Figure
  src="../../assets/images/ketone_paper/microneedles.jpg"
  caption="Scanning electron microscopy (SEM) images of the hydrogel microneedle arrays."
  align="left"
/>

The microneedle arrays were engineered to provide:

- sufficient mechanical strength for skin penetration
- flexibility for skin conformity
- porous swelling behavior for interstitial fluid access
- electrical conductivity for continuous sensing

Structural and mechanical characterization confirmed stable needle integrity and functional conductivity under hydrated operating conditions.

---

## Validation

<Figure
  src="../../assets/images/ketone_paper/animal_validation.jpg"
  caption="In vivo validation of continuous ketone monitoring across multiple type 1 diabetic rat models and correlation with reference blood ketone measurements."
  align="right"
/>

The sensor was evaluated in a type 1 diabetic rat model under physiologically relevant conditions and successfully tracked dynamic ketone changes over time.

Following insulin administration, the platform continuously monitored reductions in ketone levels, while a data-driven machine learning model was used to account for physiological delays between interstitial fluid and blood ketone measurements.

---

## Why It Matters

While continuous glucose monitoring has significantly improved diabetes management, continuous ketone monitoring remains underdeveloped despite the serious risks associated with diabetic ketoacidosis.

This project explored a wearable sensing platform designed not only to continuously monitor ketone levels but also to address the practical challenges of wearable microneedle sensors’ long-term performance.

Beyond diabetes monitoring, the underlying catechol-quinone sensing chemistry may also be adapted for other biomarkers. The broader goal is the development of skin-compatible continuous monitoring systems capable of tracking dynamic physiological changes in real-world settings.

This work represents an intersection of materials engineering, biosensing, and data-driven physiological monitoring, demonstrating how multidisciplinary systems can be translated into practical health technologies.