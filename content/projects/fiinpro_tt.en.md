---
title: "Quantitative Financial Statement Analysis Automation"
date: "2026-03-01T00:00:00Z"
image: "/images/projects/fiinpro.jpg"
categories: ["Financial Analysis", "Machine Learning"]
tags: ["Python", "Machine Learning", "ElasticNet", "PLSR", "Valuation", "Streamlit", "FiinPro"]
draft: false
---

**Role**: Quantitative Financial Developer / Financial Analyst  
**Timeframe**: 03/2026 (Version v3.0 update)  
**Links**: [GitHub](https://github.com/wane-bs/fiinpro_tt) | [Dashboard](https://wane-bs.github.io/fiinpro_tt/)

### Overview
Built an automated quantitative financial statement analysis system based on a "Diagnostics, not Forecasting" philosophy. The project focuses on decoding financial structure, identifying cyclical positions, and assessing corporate valuation based on FiinPro data.

### Detailed Implementation
- **Problem**: Need to diagnose the stability of financial structure and identify Structural Drivers rather than just providing point forecasts. Addressed the $P \gg N$ problem (many variables on a short time series dataset).
- **Architecture & Solutions**:
  - **4-Chapter Pipeline**:
    - *Chapter 1 (Foundation)*: Audit status analysis and Balanced Vertical Analysis.
    - *Chapter 2 (Performance)*: 3-factor DuPont analysis and cash flow quality assessment.
    - *Chapter 3 (Valuation)*: Multi-method integration (DCF, Sum-of-the-parts, P/E Forward Band).
    - *Chapter 4 (Structure & Cycle)*: STL Decomposition to separate Trend/Seasonal and Cross-Correlation (CCF) for cycle lags.
  - **Machine Learning (Dual-Auditor)**: Applied **ElasticNet** (Regularization) and **PLSR** (Dimension Reduction) to determine VIP Score (Variable Importance), replacing Random Forest to avoid overfitting on small datasets.
  - **Composite Score v2**: Synthesized a total score based on 3 pillars: Health (30%), Growth (35%), and Valuation (35%).

### Results & Impact
- **Quantitative**: Automated data analysis workflow from 6 FiinPro sheets, exporting over 40 in-depth analysis result files (CSV) and visualizing them on a Streamlit Dashboard.
- **Qualitative**: Provided a stable diagnostic system, eliminating noise from overly complex models, helping to early detect structural changes in corporate finance.

### Reflections & Learnings
- **Learnings**: The importance of choosing models suited to data characteristics (prioritizing constrained linear models like ElasticNet/PLSR for short financial time series).
- **Challenges Overcome**: Thoroughly handled DivideByZero errors and ensured absolute balance in financial structure analysis.
