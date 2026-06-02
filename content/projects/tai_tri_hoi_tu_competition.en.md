---
title: "Solvency Dashboard & Default Risk Forecasting (\"Tai Tri Hoi Tu\" Competition)"
role: "Tech Lead & PM / Quantitative Developer"
timeframe: "Oct 2025 – Apr 2026 (Inherited & Developed)"
link: "https://github.com/wane-bs/Tai_lanh_-_Talent"
tags: ["Python", "SQL", "XGBoost", "SHAP", "Altman Z''-Score", "Default Risk Modeling", "Streamlit"]
featured: true
---
### 1. Overview
Designed and implemented an enterprise-grade credit default forecasting and solvency assessment system using traditional financial ratios and explainable machine learning models, deployed in a localized sandbox for corporate analysis.

### 2. Actions & Detailed Implementation
- **Machine Learning & Risk Analysis**: Trained an XGBoost classifier to predict credit default probabilities (achieving high AUC/Gini score metrics). Integrated the **SHAP framework** for explainable AI to transparently identify risk contributors (e.g. leverage ratios, cash flow constraints) to ensure fair risk scoring.
- **Python & SQL Data Ingestion Pipeline**: Engineered the core `ETLProcessor` pipeline to clean raw data, handle outliers (replacing np.inf with medians), impute missing values, and calculate Trailing Twelve Months (TTM) rolling credit indicators.
- **Risk Visualizations & Team Coordination**: Built an interactive Streamlit dashboard featuring risk scorecards, PD heatmaps, and macro stress-testing scenarios. Coordinated a cross-functional team of finance majors and software developers to synchronize codebase and credit policy rules.

### 3. Key Results
- **Quantitative**: Won **1st Place** at the departmental "Tai Tri Hoi Tu" Fintech competition. Deployed a comprehensive default forecasting engine displaying 15 years (2011-2025) of data and stress tests simulating portfolio credit risk under market volatility.
- **Qualitative**: Consolidated financial indicators and ML outputs into a unified *Vital Signs Combo Chart*, enabling real-time reconciliation of accounting earnings with actual cash-flow default risk.
