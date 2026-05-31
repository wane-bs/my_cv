---
title: "Financial Solvency Dashboard & Digital Solution (\"Tai Tri Hoi Tu\" Competition)"
role: "Tech Lead & Solution Architect / Quantitative Financial Developer"
timeframe: "Oct 2025 – Apr 2026 (Inherited & Developed)"
link: "https://phantichtcdn-wane-hieu.streamlit.app/"
tags: ["Python", "Streamlit", "Plotly", "XGBoost", "SHAP", "Altman Z''-Score", "Beneish M-Score", "System Design"]
featured: true
---
### 1. Overview
Designed and implemented an enterprise-grade corporate solvency assessment and risk forecasting dashboard using traditional accounting metrics and explainable machine learning models, deployed in a localized sandbox for Vietnam Airlines (HVN).

### 2. Actions & Detailed Implementation
- **System Architecture & ETLProcessor (Tech Lead & Solution Architect)**: Directed the system's software architecture and end-to-end data pipeline. Engineered the `ETLProcessor` class to automatically handle tabular format variations, impute missing data, perform Trailing Twelve Months (TTM) rolling cash flow calculations, and execute annualization scaling for incomplete calendar years.
- **Machine Learning & Local Caching (Quantitative Developer)**: Trained an XGBoost classifier to predict default probabilities, integrating the SHAP framework for explainable features. Created offline contingency fallbacks using local caching and synthetic default distribution data. Preprocessed financial outliers (replacing np.inf with feature medians) prior to classification.
- **Data Visualization & Team Coordination (Project Manager)**: Programmed a Streamlit interface containing advanced dual-axis Plotly charts (PD heatmaps, sector-adjusted Altman Z'' bands, Beneish M-Score fraud boundaries, SHAP explanations, and 6-axis credit scorecards). Coordinated a cross-functional team of finance majors and software developers to synchronize codebase and business rules.

### 3. Key Results
- **Quantitative**: Won **1st Place** at the departmental "Tai Tri Hoi Tu" Fintech competition. Deployed a comprehensive solvency dashboard displaying 15 years (2011-2025) of audited financial records and macro stress testing options (exchange rates and fuel price volatility).
- **Qualitative**: Consolidated traditional ratios and ML models into a unified *Vital Signs Combo Chart*, enabling users to reconcile accounting earnings with actual cash generation in real-time.
