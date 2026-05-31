---
title: "Historical Stock Data ETL Pipeline (CafeF Pipeline)"
role: "Lead FinTech Developer / Data Engineer"
timeframe: "Sep 2024"
link: "https://github.com/wane-bs/cafef-stock-automation"
tags: ["Python", "Data Ingestion", "CafeF", "Ichimoku", "ETL", "io.BytesIO", "Regex", "Automation"]
featured: true
---
### 1. Overview
Built an automated, self-healing ETL (Extract - Transform - Load) pipeline to stream, clean, and ingest historical stock data from CafeF, supplying clean inputs to post-market technical analysis algorithms with a single click.

### 2. Actions & Detailed Implementation
- **Dynamic URL Scanning & Verification**: Developed a *Dynamic Backwards Scanning* algorithm using a date-subtraction loop (timedelta) to find the most recent available data URL. Integrated HTTP HEAD request validation to check link validity, saving bandwidth and preventing rate limiting.
- **In-Memory Stream Processing**: Implemented chunk-based streaming (chunk_size=8192) directly into RAM using `io.BytesIO`, completely bypassing disk I/O constraints.
- **Encoding & Parsing Fallbacks**: Designed a multi-encoding fallback system and a regular expression-based manual parser to extract raw data when standard CSV files contained corrupt formatting. Standardized column structures (Open, High, Low, Close, Volume) and categorized files by market index (HSX, HNX, UPCOM) using regular expressions.

### 3. Key Results
- **Quantitative**: Achieved 100% automation of post-market data collection with one-click execution, reducing manual processing time to 0. Eliminated all process hanging issues using optimal request timeout configurations.
- **Qualitative**: Removed manual latency and delivered highly reliable, structured, and cleansed datasets for immediate technical analysis modeling.
