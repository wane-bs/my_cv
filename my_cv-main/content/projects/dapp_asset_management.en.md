---
title: "Decentralized Asset & Rental Protocol (Book Rental DApp)"
role: "Blockchain Solutions Architect & Technical Documentation Lead"
timeframe: "Sep 2024 – Oct 2024"
link: "https://wane-bs.github.io/dsr_ly_thuyet/"
tags: ["Solidity", "DApp", "Decentralized Storage", "IPFS", "OpenZeppelin v5", "EVM Optimization", "Blockchain"]
featured: true
---
### 1. Overview
Designed a secure decentralized digital asset management and book rental protocol, separating ownership and usage rights on the blockchain to resolve single points of failure in centralized storage while minimizing execution overhead.

### 2. Actions & Detailed Implementation
- **Hybrid Token Model Design**: Researched and established a layered ownership system: utilized **ERC-721** to represent unique book assets linked with IPFS/Arweave CID hashes, designed a **Soulbound Token (SBT)** for rental restriction by overriding the OpenZeppelin v5 `_update` hook, and integrated **ERC-4907** to partition Owner and User roles, permitting automatic user-right expiration without requiring gas-expensive reclamation.
- **EVM Storage & Gas Optimization**: Structured code to minimize EVM execution costs: applied *Storage Slot Packing* (bundling variables within 32 bytes for the EvidencePack struct), replaced standard `require` statement strings with *Custom Errors* to shrink byte-code size, and optimized parameter passing using calldata memory regions.
- **AI-Augmented Engineering & Technical Documentation**: Leveraged *AI-Augmented Engineering* (vibe coding via custom automation libraries to optimize >80% of smart contract code generation). Produced detailed *System Architecture Diagrams* and developer guidelines to standardize integration logic across the engineering team.

### 3. Key Results
- **Quantitative**: Achieved a >30% reduction in gas transaction costs through variable packing and custom error patterns. Successfully deployed a gasless rental expiration flow.
- **Qualitative**: Modeled secure cryptographic and decentralized storage protocols that eliminate central storage vulnerabilities, laying groundwork for deployment on Avalanche L1 / NDA Chain mainnet ecosystems.
