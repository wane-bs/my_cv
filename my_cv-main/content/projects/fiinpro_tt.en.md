---
title: "Quantitative Risk Diagnostics & Predictive Modeling"
date: "2026-03-01T00:00:00Z"
image: "/images/projects/fiinpro.jpg"
categories: ["Risk Analysis", "Machine Learning"]
tags: ["Python", "SQL", "ElasticNet", "PLSR", "Feature Selection", "Anomaly Detection", "Streamlit"]
draft: false
---

**Role**: Quantitative Developer / Risk Analyst  
**Timeframe**: 03/2026 (Completed within a tight 2-hour limit at the Banking Academy & FiinGroup Workshop)  
**Links**: [GitHub](https://github.com/wane-bs/fiinpro_tt) | [Dashboard](https://wane-bs.github.io/fiinpro_tt/)

### Overview
Built an automated financial diagnostics pipeline under strict time pressure to parse raw unstructured datasets into analytical tables. The system replaces manual spreadsheet analysis with an automated statistical engine that flags anomalies, isolates structural trends, and performs feature dimensionality reduction.

### Detailed Implementation
- **Problem**: Solved the multicollinearity and perfect collinearity problem on short-series time datasets ($N \in [40, 60], P \gg N$) to identify structural risk drivers rather than point forecasts.
- **Architecture & Solutions**:
  - **4-Chapter Pipeline**:
    - *Chapter 1 (Foundation)*: *Balanced Vertical Analysis* using `np.where` and bounding logic (`max(..., 0)`) in Python/SQL to guarantee exactly 100% structural balance.
    - *Chapter 2 (Anomaly Detection)*: Designed an anomaly detection system based on Sloan Accruals ($>5\%$) and DuPont dynamics to flag accounting irregularities and potential financial distress indicators.
    - *Chapter 3 (Risk Diagnostics)*: Multi-method valuation integration (SoTP and DCF) adapted for conglomerate structures to measure financial buffer margins.
    - *Chapter 4 (Structure & Cycle)*: Applied STL decomposition with centered moving averages to isolate structural trend patterns and filter seasonal noise from financial time-series.
  - **Machine Learning (Dual-Auditor Feature Selection)**: Utilized **ElasticNet** and **PLSR** ($H=3$) to compute Variable Importance in Projection (VIP) scores, effectively resolving multicollinearity and identifying key predictive risk factors.

### Results & Impact
- **Quantitative**: Automated data analysis workflow from 6 raw spreadsheets, exporting over 40 structured CSV result files on a Streamlit Dashboard.
- **Qualitative**: The system successfully identifies **4 Diagnostic Risk Patterns**:
  1. *Profit-Cash Divergence*: Flags potential earnings manipulation when Sloan Accrual Ratio $> 5\%$ and $\text{CFO/NI} < 0.7$ for 3 consecutive quarters.
  2. *Structural Shift Trigger*: Cross-Correlation Functions (CCF) at lag $k^* > 0$ to identify lead-lag relationships for sensitivity analysis.
  3. *Leverage-driven Growth*: Identifies risk where ROE growth is driven purely by leverage ($\Delta\text{Equity Multiplier}$) while asset efficiency declines.
  4. *Valuation Band Position*: Pinpoints historical valuation boundaries ($\text{Band Position} \to 0$ or $1$) to signal risk extremes.

### Reflections & Learnings
- **Time Allocation**: Shifted focus from syntax coding to statistical and mathematical design using AI-First vibe coding.
- **Learnings**: Constrained linear models (ElasticNet/PLSR) provide much higher mathematical explainability and stability than non-linear models on short financial time series.
