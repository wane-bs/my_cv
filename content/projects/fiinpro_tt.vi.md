---
title: "Hệ thống Tự động hóa Phân tích BCTC Định lượng"
date: "2026-03-01T00:00:00Z"
image: "/images/projects/fiinpro.jpg"
categories: ["Phân tích Tài chính", "Machine Learning"]
tags: ["Python", "Machine Learning", "ElasticNet", "PLSR", "Valuation", "Streamlit", "FiinPro"]
draft: false
---

**Vai trò**: Quantitative Financial Developer / Financial Analyst  
**Thời gian**: 03/2026 (Cập nhật phiên bản v3.0)  
**Links**: [GitHub](https://github.com/wane-bs/fiinpro_tt) | [Dashboard](https://wane-bs.github.io/fiinpro_tt/)

### Tổng quan
Xây dựng hệ thống tự động hóa phân tích BCTC định lượng chuyên sâu với triết lý "Hệ thống không dự báo — Hệ thống chẩn đoán". Dự án tập trung vào việc giải mã hình thái tài chính, xác định vị thế trong chu kỳ và đánh giá định giá doanh nghiệp dựa trên dữ liệu từ nền tảng FiinPro.

### Chi tiết thực hiện
- **Vấn đề**: Chẩn đoán sự ổn định của cấu trúc tài chính và xác định các động lực thực sự (Structural Drivers) thay vì chỉ đưa ra các con số dự báo điểm. Xử lý bài toán $P \gg N$ (nhiều biến số trên tập dữ liệu chuỗi thời gian ngắn).
- **Kiến trúc & Giải pháp**:
  - **Pipeline 4 Chương**:
    - *Chương 1 (Nền tảng)*: Phân tích trạng thái kiểm toán và áp dụng Balanced Vertical Analysis.
    - *Chương 2 (Hiệu suất)*: Phân tích DuPont 3 nhân tố và đánh giá chất lượng dòng tiền.
    - *Chương 3 (Định giá)*: Tích hợp đa phương pháp (DCF, SoTP - Sum-of-the-parts, P/E Forward Band).
    - *Chương 4 (Cấu trúc & Chu kỳ)*: Sử dụng kỹ thuật STL Decomposition để tách Trend/Seasonal và Cross-Correlation (CCF) để tìm độ trễ chu kỳ.
  - **Machine Learning (Dual-Auditor)**: Ứng dụng **ElasticNet** (Regularization) và **PLSR** (Dimension Reduction) để xác định VIP Score (Tầm quan trọng biến), thay thế Random Forest để tránh Overfitting trên tập dữ liệu nhỏ.
  - **Composite Score v2**: Hệ thống hóa điểm tổng hợp dựa trên 3 trụ cột: Sức khỏe (30%), Tăng trưởng (35%) và Định giá (35%).

### Kết quả & Tác động
- **Định lượng**: Tự động hóa quy trình phân tích dữ liệu từ 6 sheets FiinPro, xuất ra hơn 40 tệp kết quả phân tích chuyên sâu (CSV) và hiển thị trực quan trên Streamlit Dashboard.
- **Định tính**: Cung cấp hệ thống chẩn đoán ổn định, loại bỏ nhiễu từ các mô hình quá phức tạp, giúp nhận diện sớm các thay đổi cấu trúc trong tài chính doanh nghiệp.

### Cảm nhận & Bài học
- **Bài học rút ra**: Tầm quan trọng của việc chọn mô hình phù hợp với đặc thù dữ liệu (ưu tiên các mô hình tuyến tính có ràng buộc như ElasticNet/PLSR cho dữ liệu tài chính chuỗi thời gian ngắn).
- **Khó khăn đã vượt qua**: Xử lý triệt để lỗi mẫu số bằng 0 (DivideByZero) và đảm bảo tính cân bằng tuyệt đối trong phân tích cơ cấu tài chính.
