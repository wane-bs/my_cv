---
title: "Hệ thống Tự động hóa Phân tích BCTC Định lượng"
date: "2026-03-01T00:00:00Z"
image: "/images/projects/fiinpro.jpg"
categories: ["Phân tích Tài chính", "Machine Learning"]
tags: ["Python", "Machine Learning", "ElasticNet", "PLSR", "Valuation", "Streamlit", "FiinPro"]
draft: false
---

**Vai trò**: Quantitative Financial Developer / Financial Analyst  
**Thời gian**: 03/2026 (Hoàn thiện cấp tốc trong giới hạn 2 giờ tại Hội thảo Học viện Ngân hàng & FiinGroup)  
**Links**: [GitHub](https://github.com/wane-bs/fiinpro_tt) | [Dashboard](https://wane-bs.github.io/fiinpro_tt/)

### Tổng quan
Xây dựng hệ thống tự động hóa phân tích BCTC định lượng chuyên sâu với triết lý "Hệ thống không dự báo — Hệ thống chẩn đoán" dưới áp lực thời gian thực. Dự án thay thế tư duy xử lý Excel thủ công bằng pipeline tự động hóa toàn diện để bóc tách hình thái tài chính FPT, xác định vị thế chu kỳ và đánh giá định giá doanh nghiệp từ 6 sheets dữ liệu thô FiinGroup.

### Chi tiết thực hiện
- **Vấn đề**: Chẩn đoán sự ổn định của cấu trúc tài chính và xác định các động lực thực sự (Structural Drivers) thay vì dự báo điểm số. Giải quyết bài toán mẫu nhỏ, đa cộng tuyến hoàn hảo ($N \in [40, 60], P \gg N$).
- **Kiến trúc & Giải pháp**:
  - **Pipeline 4 Chương nâng cấp**:
    - *Chương 1 (Nền tảng)*: Ứng dụng *Balanced Vertical Analysis* qua hàm `np.where` và cơ chế bù trừ không âm `max(..., 0)` để bảo đảm cơ cấu luôn cân bằng tuyệt đối 100%:
      $$\text{Tỷ lệ common-size} = \text{np.where}\left(\text{Denominator} \neq 0, \frac{\text{Numerator}}{\text{Denominator}} \times 100, \text{np.nan}\right)$$
    - *Chương 2 (Hiệu suất)*: DuPont động bóc tách $\Delta\text{ROE}$ từng quý và đánh giá chất lượng dòng tiền qua hệ số Sloan Accrual.
    - *Chương 3 (Định giá)*: Tích hợp mô hình định giá từng phần SoTP (Sum-of-the-parts) kết hợp DCF thích ứng với cấu trúc đa ngành của FPT.
    - *Chương 4 (Cấu trúc & Chu kỳ)*: Phân rã chuỗi cộng tính bằng `STL` (period=4, robust=True IRLS) với cơ chế fallback sang Trung bình trượt trung tâm khi $N < 8$ để xóa nhiễu biên, kết hợp tương quan chéo CCF tại các độ trễ $k \in [-4, +4]$ để xác định chỉ báo dẫn dắt.
  - **Machine Learning (Dual-Auditor)**: Thay thế Random Forest bằng khối đối chiếu kép tuyến tính có ràng buộc: **ElasticNet** (phạt L1/L2) và **PLSR** ($H=3$ components) để tối đa hóa hiệp phương sai, tính toán điểm VIP Score:
    $$\text{VIP}_j = \sqrt{P \frac{\sum_{h=1}^H R^2(y, t_h) \left( w_{hj} / \|w_h\| \right)^2}{\sum_{h=1}^H R^2(y, t_h)}}$$
  - **Composite Score v2**: Thang điểm tổng hợp trong $[-100, 100]$ dựa trên: Sức khỏe (30% - màng lọc rủi ro) — Tăng trưởng & Chu kỳ (35% - động cơ hiệu suất) — Định giá (35% - chốt chặn bảo vệ vốn).

### Kết quả & Tác động
- **Định lượng**: Tự động hóa quy trình phân tích dữ liệu từ 6 sheets FiinPro, xuất ra hơn 40 tệp kết quả phân tích cấu trúc chuyên sâu (CSV) và trực quan hóa tức thì trên Streamlit Dashboard.
- **Định tính**: Hệ thống chẩn đoán tự động nhận diện **4 Mẫu hình chuyên sâu**:
  1. *Phân kỳ Lợi nhuận - Dòng tiền*: Cảnh báo rủi ro lợi nhuận ảo khi Sloan Accrual Ratio $> 5\%$ và $\text{CFO/NI} < 0.7$ liên tiếp 3 quý.
  2. *Điểm kích hoạt đảo chiều cơ cấu*: Xác định độ trễ dẫn trước ($k^* > 0$) của biến cấu trúc qua CCF để thiết lập thanh trượt giả lập kịch bản.
  3. *Tăng trưởng ảo bằng Đòn bẩy*: Phát hiện ROE tăng do đòn bẩy ($\Delta\text{Equity Multiplier}$) phình to trong khi biên an toàn và hiệu suất tài sản suy giảm.
  4. *Điểm đảo chiều định giá*: Đo lường vị thế giá thực tế trên dải định giá lịch sử ($\text{Band Position} \to 0$ hoặc $1$).

### Cảm nhận & Bài học
- **Tái phân bổ thời gian (66% Kiến trúc vs <5% Lập trình)**: Dịch chuyển từ gõ mã nguồn thủ công sang thiết kế kiến trúc và nghiên cứu giải pháp chuyên môn nhờ tư duy AI-First.
- **Bài học rút ra**: Các mô hình tuyến tính có ràng buộc (ElasticNet/PLSR) mang lại khả năng giải thích toán học và độ ổn định cao hơn vượt trội so với các mô hình phi tuyến phức tạp trên dữ liệu tài chính chuỗi ngắn. Xử lý triệt để các biến động tài khoản bằng cơ chế Balancing Items.
