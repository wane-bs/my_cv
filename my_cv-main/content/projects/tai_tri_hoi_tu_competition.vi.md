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
- **Học máy & Phân tích Rủi ro**: Huấn luyện bộ phân loại XGBoost dự báo xác suất vỡ nợ tín dụng (đạt các chỉ số AUC/Gini kiểm định mô hình ở mức cao). Tích hợp **framework SHAP (Explainable AI)** để giải thích rõ ràng các trọng số rủi ro đóng góp (ví dụ: đòn bẩy tài chính, áp lực dòng tiền), phục vụ việc chấm điểm rủi ro minh bạch.
- **Đường ống nạp dữ liệu Python & SQL**: Phát triển lớp xử lý dữ liệu lõi `ETLProcessor` để làm sạch dữ liệu thô, xử lý các điểm dị biệt tài chính (np.inf sang median), xử lý các điểm khuyết thiếu và tính toán các chỉ số tín dụng di động lũy kế 12 tháng (TTM rolling indicators).
- **Trực quan hóa Rủi ro & Điều phối Nhóm**: Xây dựng ứng dụng Streamlit trực quan hóa thẻ điểm rủi ro (credit scorecards), bản đồ nhiệt PD và các kịch bản stress-testing vĩ mô. Điều phối nhóm liên phòng ban giữa tài chính và phần mềm để đồng bộ hóa mã nguồn và các quy tắc chính sách tín dụng.

### 3. Kết quả & Tác động
- **Định lượng**: Đạt **Giải Nhất cuộc thi chuyên môn \"Tài trí hội tụ\"**. Triển khai thành công công cụ dự báo mặc định hiển thị 15 năm (2011-2025) dữ liệu lịch sử và các kịch bản stress-testing giả lập rủi ro tín dụng của danh mục đầu tư dưới biến động thị trường.
- **Định tính**: Hợp nhất các chỉ số kế toán và đầu ra của mô hình học máy thành biểu đồ *Vital Signs Combo Chart*, cho phép đối soát thời gian thực giữa lợi nhuận danh nghĩa và rủi ro vỡ nợ dòng tiền thực tế.
