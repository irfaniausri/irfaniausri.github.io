import ketoneImg from "../assets/images/landing_page/ketone.jpg";
import nutritionImg from "../assets/images/landing_page/nutritional_calculator.jpg";
import reviewImg from "../assets/images/landing_page/review_paper.jpg";

export const work = [
  {
    title:
      "Nutrition Database & Recipe Processing System",

    year: 2025,

    project_type: "Experimental System",

    status: "Prototype",

    summary:
      "Developed an experimental nutrition database and recipe processing system to explore how real-world recipes and food behaviors in Indonesia could be translated into structured nutritional data. The project involved ingredient matching with USDA datasets, modular recipe decomposition, unit conversion workflows, and computational modeling of fried food oil absorption.",

    thumbnail: nutritionImg,

    slug: "nutritional_calculator",
    summary_link: "/nutritional_calculator",
  },

  {
    title:
      "Multifunctional Dopamine-Based Hydrogel Microneedle Electrode for Continuous Ketone Sensing",

    year: 2024,

    journal: "Advanced Materials",

    authors:
      "Irfani Rahmi Ausri, Sadegh Sadeghzadeh, ..., Amin GhavamiNejad, and Mahla Poudineh",

    summary:
      "Led the design and validation of a wearable hydrogel microneedle platform for continuous ketone monitoring. This project involved the development of a novel microneedle biosensor platform, diabetic rat validation, and data-driven modeling of ketone dynamics.",

    thumbnail: ketoneImg,

    slug: "ketone-sensor",
    article_link: "https://advanced.onlinelibrary.wiley.com/doi/abs/10.1002/adma.202402009",
    summary_link: "/ketone_sensor",
  },

  {
    title:
      "Recent advances and challenges: Translational research of minimally invasive wearable biochemical sensors",

    year: 2023,

    journal: "Biosensors and Bioelectronics: X",

    authors:
      "Irfani Rahmi Ausri, Yael Zilberman, Sarah Schneider, Xiaowu Shirley Tang",

    summary:
      "Led a review of minimally invasive wearable biochemical sensors validated in vivo, with a focus on challenges in translating laboratory sensor performance into real-world settings.",

    thumbnail: reviewImg,

    slug: "review-paper",
    article_link: "https://www.sciencedirect.com/science/article/pii/S2590137023001024",
    summary_link: "/review_paper",
  },

  {
    title:
      "Towards a transdermal membrane biosensor for the detection of lactate in body fluids",

    year: 2020,

    journal: "Sensors and Actuators B: Chemical",

    authors:
      "Yuxing Wang, Irfani Rahmi Ausri, Zimeng Wang, Cam Derry, Xiaowu Tang",

    summary:
      "Contributed to the development of a transdermal microneedle membrane biosensor for lactate detection in body fluids.",

    thumbnail: null,

    slug: "lactate-sensor",
    article_link: "https://www.sciencedirect.com/science/article/abs/pii/S0925400519318441",
  },

  {
    title:
      "Towards label-free, wash-free and quantitative B-type natriuretic peptide detection for heart failure diagnosis",

    year: 2019,

    journal: "Nanoscale",

    authors:
      "Zhi Li, Irfani Rahmi Ausri, Yael Zilberman, Xiaowu Shirley Tang",

    summary:
      "Contributed to a point-of-care sensing platform for BNP detection aimed at heart failure diagnosis and home monitoring applications. The platform demonstrated strong agreement with clinical reference assays.",

    thumbnail: null,

    slug: "BNP-sensor",
    article_link: "https://pubs.rsc.org/en/content/articlelanding/2019/nr/c9nr05386g/unauth",
  },
];