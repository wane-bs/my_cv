---
title: "Dashboard Khả năng Thanh toán & Dự báo Rủi ro Vỡ nợ (Cuộc thi \"Tài trí hội tụ\")"
role: "Tech Lead & PM / Nhà phát triển Định lượng (Quantitative Developer)"
timeframe: "10/2025 – 04/2026 (Kế thừa và Phát triển)"
link: "https://github.com/wane-bs/Tai_lanh_-_Talent"
tags: ["Python", "SQL", "XGBoost", "SHAP", "Altman Z''-Score", "Mô hình hóa Rủi ro Vỡ nợ", "Streamlit"]
featured: true
---
### 1. Tổng quan
Nghiên cứu, thiết kế giải pháp công nghệ tài chính và dự báo rủi ro vỡ nợ doanh nghiệp dựa trên các tỷ số tài chính truyền thống và mô hình học máy có khả năng giải thích, triển khai trong môi trường sandbox nội bộ phục vụ phân tích rủi ro.

### 2. Chi tiết thực hiện & Hành động
- **Giải pháp Tín dụng cho Khách hàng "CIC trắng"**: Nghiên cứu, thiết kế sản phẩm chấm điểm và ra quyết định tín dụng tự động cho nhóm SME không có lịch sử tín dụng đầy đủ (CIC trắng), thay thế bằng phương pháp phân tích dòng tiền di động 12 tháng (TTM rolling cash flows) từ báo cáo lưu chuyển tiền tệ.
- **Xây dựng Tính năng "Explainable Decisions" & Hạn mức Tự động**: Tích hợp **framework SHAP (Explainable AI)** để tự động xuất báo cáo giải thích điểm số (lý do tăng/giảm điểm tín dụng) cho người dùng cuối và tự động đề xuất hạn mức tín dụng phê duyệt phù hợp với khả năng thanh toán.
- **Quản lý Vòng đời Sản phẩm & Điều phối Liên phòng ban**: Đóng vai trò PM & Tech Lead, trực tiếp lấy yêu cầu, quản lý lộ trình tính năng (product roadmap) và điều phối công việc giữa nhóm nghiệp vụ tài chính và nhóm phát triển phần mềm để đồng bộ hóa mã nguồn và quy tắc chính sách rủi ro lên dashboard Streamlit.

### 3. Kết quả & Tác động
- **Định lượng**: Đạt **Giải Nhất cuộc thi chuyên môn \"Tài trí hội tụ\"**. Triển khai thành công công cụ dự báo mặc định hiển thị 15 năm (2011-2025) dữ liệu lịch sử và các kịch bản stress-testing giả lập rủi ro tín dụng của danh mục đầu tư dưới biến động thị trường.
- **Định tính**: Hợp nhất các chỉ số kế toán và đầu ra của mô hình học máy thành biểu đồ *Vital Signs Combo Chart*, cho phép đối soát thời gian thực giữa lợi nhuận danh nghĩa và rủi ro vỡ nợ dòng tiền thực tế.
