---
title: "Quantitative Financial Statement Analysis Automation"
date: "2026-03-01T00:00:00Z"
image: "/images/projects/fiinpro.jpg"
categories: ["Financial Analysis", "Machine Learning"]
tags: ["Python", "Machine Learning", "ElasticNet", "PLSR", "Valuation", "Streamlit", "FiinPro"]
draft: false
---

**Role**: Quantitative Financial Developer / Financial Analyst  
**Timeframe**: 03/2026 (Completed within a tight 2-hour limit at the Banking Academy & FiinGroup Workshop)  
**Links**: [GitHub](https://github.com/wane-bs/fiinpro_tt) | [Dashboard](https://wane-bs.github.io/fiinpro_tt/)

### Overview
Built an automated quantitative financial statement analysis system based on a "Diagnostics, not Forecasting" philosophy under strict time pressure. The project replaces manual Excel analysis of FPT's 6 raw sheets with a comprehensive diagnostic pipeline to decode financial shape, structural drivers, cyclical positions, and valuation.

### Detailed Implementation
- **Problem**: Diagnose stability of financial structure and identify Structural Drivers instead of making point forecasts. Solved the perfection collinearity problem on short-series time datasets ($N \in [40, 60], P \gg N$).
- **Architecture & Solutions**:
  - **4-Chapter Pipeline**:
    - *Chapter 1 (Foundation)*: *Balanced Vertical Analysis* using `np.where` to handle DivideByZero and `max(..., 0)` bounding to guarantee exactly 100% structural balance:
      $$\text{Common-size Ratio} = \text{np.where}\left(\text{Denominator} \neq 0, \frac{\text{Numerator}}{\text{Denominator}} \times 100, \text{np.nan}\right)$$
    - *Chapter 2 (Performance)*: Dynamic DuPont (ROE quarterly changes) and Sloan Accrual Ratio for cash flow quality assessment.
    - *Chapter 3 (Valuation)*: Multi-method integration (SoTP - Sum-of-the-parts and DCF) adapted for FPT's conglomerate structure.
    - *Chapter 4 (Structure & Cycle)*: STL Decomposition (period=4, `robust=True` IRLS algorithm) with a centered moving average fallback ($window=4$, $min\_periods=1$) for small samples ($N < 8$) to eliminate boundary noise, and Cross-Correlation Functions (CCF) at lags $k \in [-4, +4]$ for leading indicators.
  - **Machine Learning (Dual-Auditor)**: Applied linear regularized models (**ElasticNet** for grouping effects and **PLSR** with $H=3$ components to maximize covariance) to compute VIP Scores, replacing overfitting-prone Random Forest:
    $$\text{VIP}_j = \sqrt{P \frac{\sum_{h=1}^H R^2(y, t_h) \left( w_{hj} / \|w_h\| \right)^2}{\sum_{h=1}^H R^2(y, t_h)}}$$
  - **Composite Score v2**: Scaled in $[-100, 100]$ based on Health (30%), Growth & Cycle (35%), and Valuation (35%).

### Results & Impact
- **Quantitative**: Automated data analysis workflow from 6 FiinPro sheets, exporting over 40 in-depth analysis result files (CSV) and visualizing them on a Streamlit Dashboard.
- **Qualitative**: The system successfully identifies **4 Diagnostic Patterns**:
  1. *Profit-Cash Divergence*: Flags fake profit when Sloan Accrual Ratio $> 5\%$ and $\text{CFO/NI} < 0.7$ for 3 consecutive quarters.
  2. *Structural Shift Trigger*: Sensitivity sliders via CCF lag $k^* > 0$ to simulate financial scenarios.
  3. *Leverage-driven Growth*: Identifies ROE growth driven by leverage ($\Delta\text{Equity Multiplier}$) while safety margins and asset efficiency decline.
  4. *Valuation Band Position*: Pinpoints overbought/oversold boundaries ($\text{Band Position} \to 0$ or $1$) on historical dails.

### Reflections & Learnings
- **Time Allocation (66% Architecture vs <5% Coding)**: Shifted focus from syntax coding to architectural and mathematical design using AI-First vibe coding.
- **Learnings**: Constrained linear models (ElasticNet/PLSR) provide much higher mathematical explainability and stability than non-linear models on short financial time series. Handled accountants' balance adjustments via self-healing balancing items.
