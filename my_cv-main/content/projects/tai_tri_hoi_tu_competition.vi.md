---
title: "Giải pháp Chuyển đổi số Tài chính & Dự báo Rủi ro Phá sản (Cuộc thi \"Tài trí hội tụ\")"
role: "Tech Lead & Solution Architect / Quantitative Financial Developer"
timeframe: "10/2025 – 04/2026 (Kế thừa và Phát triển)"
link: "https://github.com/wane-bs/Tai_lanh_-_Talent"
tags: ["Python", "Streamlit", "Plotly", "XGBoost", "SHAP", "Altman Z''-Score", "Beneish M-Score", "Kiến trúc Hệ thống"]
featured: true
---
### 1. Tổng quan
Nghiên cứu, thiết kế giải pháp công nghệ tài chính và chẩn đoán rủi ro đa mô hình (Altman Z''-Score, Beneish M-Score, Machine Learning) tích hợp công cụ định giá và Stress Testing vĩ mô, có khả năng tự vận hành độc lập (Local Sandbox) và trực quan hóa các chỉ số sinh tử của doanh nghiệp lớn (Vietnam Airlines - HVN).

### 2. Chi tiết thực hiện & Hành động
- **Thiết kế Giải pháp & ETLProcessor (Tech Lead & Solution Architect)**: Chủ trì phân tích kiến trúc hệ thống, quy hoạch luồng dữ liệu của giải pháp. Xây dựng lớp cấu trúc `ETLProcessor` tự động nhận dạng định dạng bảng (*Auto-Detection Format*), xử lý ma trận khuyết thiếu, và kỹ thuật tính toán dòng tiền lũy kế di động 4 quý (*TTM Rolling*) kết hợp hiệu chỉnh quy đổi năm chưa kết thúc (*Annualization Scaling*).
- **Hồi quy Học máy & Offline Fallback (Quantitative Developer)**: Triển khai thuật toán XGBoost chẩn đoán xác suất vỡ nợ kết hợp framework SHAP (*Explainable AI*) để giải thích đặc trưng đóng góp của từng biến số tài chính. Thiết kế cơ chế *Local Caching* (.arff/.csv) kết hợp thuật toán sinh dữ liệu giả lập (*Synthetic Data Fallback*) mô phỏng phân phối vỡ nợ để hệ thống tự vận hành ổn định khi mất kết nối mạng. Xử lý triệt để các điểm dị biệt tài chính (np.inf sang median) trước khi đưa vào mô hình phân loại.
- **Trực quan hóa Dashboard & Đồng nhất Nghiệp vụ (Project Manager)**: Phát triển ứng dụng Streamlit, thiết kế đồ thị tài chính trục kép chuyên sâu bằng *Plotly* bao gồm: Bản đồ nhiệt xác suất vỡ nợ (PD% Heatmap), Dải biên an toàn Altman Z''-Score (có hiệu chỉnh loại bỏ hàng tồn kho dở dang cho ngành Bất động sản), Đường ngưỡng gian lận Beneish M-Score, Đồ thị giải thích thuật toán SHAP, và Đồ thị Radar chấm điểm tín dụng dòng tiền 6 chiều (*Cash Flow Scorecard*). Điều phối liên ngành giữa chuyên gia tài chính và lập trình viên để đảm bảo tính nhất quán logic nghiệp vụ và mã nguồn.

### 3. Kết quả & Tác động
- **Định lượng**: Đạt **Giải Nhất cuộc thi chuyên môn \"Tài trí hội tụ\"** cấp Khoa nhờ giải pháp công nghệ tài chính đột phá. Xây dựng thành công Dashboard chẩn đoán dữ liệu tài chính lịch sử 15 năm (2011-2025) của HVN, tích hợp Stress Testing vĩ mô (tỷ giá FX, giá nhiên liệu) chạy ổn định 100% trong Local Sandbox.
- **Định tính**: Hợp nhất thành công hệ thống chỉ số tài chính kế toán truyền thống và học máy giải thích được, cho phép người dùng đối chiếu trực quan giữa dòng tiền thực tế và lợi nhuận danh nghĩa thông qua biểu đồ hợp nhất (*Vital Signs Combo Chart*), hỗ trợ ra quyết định quản trị rủi ro chính xác theo thời gian thực.
