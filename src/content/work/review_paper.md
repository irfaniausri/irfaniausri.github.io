---
title: "Recent advances and challenges: Translational research of minimally invasive wearable biochemical sensors"
year: 2023
journal: "Biosensors and Bioelectronics: X"
authors: "Irfani Rahmi Ausri, Yael Zilberman, Sarah Schneider, Xiaowu Shirley Tang"
summary: "Led a review of minimally invasive wearable biochemical sensors validated in vivo, with a focus on challenges in translating laboratory sensor performance into real-world settings."
thumbnail: "review_paper.jpg"
slug: "review-paper"
---

## Overview

Despite the rapid advancements in commercial wearable health technologies in recent years, continuous biochemical sensing remains significantly less mature than physical signal monitoring.

Wearable biochemical sensors (WBS) must operate within highly complex physiological environments while maintaining sensitivity, stability, and reliability during real-world use. Although many WBS have been tested in controlled lab settings, few have successfully translated into commercially viable healthcare devices. Currently, continuous glucose monitors remain the only commercially available WBS.

This review focused specifically on WBS that had undergone validated in vivo evaluation, corresponding to Technology Readiness Level 4 (TRL-4) studies. By emphasizing technologies tested under physiologically relevant conditions rather than purely in vitro studies, the review aimed to examine the translational gap between laboratory performance and real-world deployment.

---

## The Translational Gap

Although many WBS demonstrate promising analytical performance in controlled laboratory settings, very few maintain reliable performance under real physiological conditions. 

A major limitation observed across many studies was the discrepancy between the media used to characterize the sensor in vitro and the subsequent in vivo deployment. Sensors are often calibrated using simplified media such as buffers or artificial biofluids that do not fully replicate real biofluids. Variations in proteins, metabolites, conductivity, and viscosity alter the sensor behavior, which affects the sensitivity, response time, stability, and accuracy. WBS that target simpler biofluids such as sweat and tears generally translated better compared to ones for more complex biofluids such as interstitial fluid.

Findings from these studies highlight that strategies implemented need to balance engineering tradeoffs. For instance, approaches that prevent sensor saturation and extend linear range can reduce signal output and sensitivity. Similarly, non-enzymatic sensors demonstrated improved sensitivity and longer stability compared to enzymatic systems but faced selectivity and material challenges.

Long-term stability is another major challenge. While many sensors demonstrated reproducible performance over short periods, maintaining reliable performance over multiple days was difficult due to signal drift, enzyme degradation, biofouling, and material instability.

Real-world deployment is further complicated by physiological variability, where factors such as pH, temperature, skin resistance, and biofluid composition continuously influence sensor behavior. As a result, many studies implemented correctional analysis and personalized calibration strategies to improve quantitative accuracy.

---

## Wearable Biosensor Landscape

WBS can broadly be categorized based on their transduction mechanism and target biofluids. 

### Transduction Mechanisms

There are two dominating transduction mechanism: electrochemical and optical. 

Electrochemical transducers remain the dominant approach for continuous wearable biochemical sensing due to their high sensitivity, miniaturization capability, and compatibility for real-time monitoring. Most electrochemical sensors relies on enzymatic reactions that generate redox-active products. To improve selectivity and signal stability, many sensors incorporated nanomaterials, permeable membranes, surface modifications, and microfluidic integration. Non-enzymatic electrochemical sensors have also emerged as promising alternatives due to their improved stability, though designing highly selective sensing interfaces remains challenging.

Optical sensors typically use fluorescent or colorimetric probes to quantify biomarkers and are suitable for biomarkers that are difficult to measure electrochemically. One of the main challenges is achieving continuous monitoring, though some studies have explored reversible fluorescent techniques to account for this limitation. Furthermore, since optical sensors are dependent on imaging quality and external signal processing, its miniaturization is more challenging compared to electrochemical systems.

### Target Biofluids

Four major biofluids are commonly targeted for wearable biochemical sensing:

1. sweat
2. interstitial fluid (ISF)
3. ocular fluid
4. saliva

The target biofluid strongly influences the sensor design. Sweat remains the most extensively studied biofluid due to its non-invasive accessibility and rich biomarker content. Many sweat sensors integrate microfluidics, absorbent layers, and reservoir systems to ensure continuous sample collection and regeneration. 

ISF is another main biofluid target due to its similarity to blood plasma but requires minimally invasive extraction techniques such as reverse iontophoresis or microneedles. Recent ISF studies increasingly favor solid microneedle systems for continuous monitoring applications.

Ocular fluid and saliva-based sensors are emerging wearable sensing platforms. Ocular systems, such as smart contact lenses and tear sensors, provide continuous biofluid exposure but face challenges related to comfort, irritation, and biomarker correlation to blood levels. Saliva sensors are the most underdeveloped due to inconsistent exposure and interference from daily activities such as eating and drinking.

---

## Future Directions

As WBS continues to develop beyond single biomarker systems towards integrated sensing systems, emerging approaches currently validated only in vitro may help address limitations associated with real-world deployment.

Bioreceptors such as aptamers, molecularly imprinted polymers (MIPs), artificial enzymes, and CRISPR-based have demonstrated promising selectivity, reversibility, and the range of detectable biomarkers. They can also expand the potential for continuous monitoring of targets that are difficult to detect using traditional enzymatic systems.

Signal processing and data processing are also becoming increasingly important components of wearable biochemical sensing systems. Machine learning approaches have shown potential for improving signal interpretation, noise reduction, and biomarker prediction from complex physiological and electrochemical datasets. Consequently, multimodal sensing systems integrated with ML may improve quantitative accuracy and overall sensor performance under dynamic physiological conditions.

Future progress in wearable biochemical sensing will depend not only on advances in sensing materials, but also on the ability to integrate biochemistry, materials engineering, electronics, physiology, and data-driven analysis into reliable long-term monitoring platforms. Large-scale clinical validation, long-term safety studies, and robust real-world testing will remain essential for translating laboratory prototypes into deployable healthcare technologies.