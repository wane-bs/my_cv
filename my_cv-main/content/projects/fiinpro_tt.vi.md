---
title: "Chẩn đoán Rủi ro Định lượng & Mô hình dự báo"
date: "2026-03-01T00:00:00Z"
image: "/images/projects/fiinpro.jpg"
categories: ["Phân tích Rủi ro", "Machine Learning"]
tags: ["Python", "SQL", "ElasticNet", "PLSR", "Lựa chọn Đặc trưng", "Phát hiện Bất thường", "Streamlit"]
draft: false
---

**Vai trò**: Nhà phát triển Định lượng / Chuyên viên Phân tích Rủi ro (Quantitative Developer / Risk Analyst)  
**Thời gian**: 03/2026 (Hoàn thiện cấp tốc trong giới hạn 2 giờ tại Hội thảo Học viện Ngân hàng & FiinGroup)  
**Links**: [GitHub](https://github.com/wane-bs/fiinpro_tt) | [Dashboard](https://wane-bs.github.io/fiinpro_tt/)

### Tổng quan
Xây dựng hệ thống chẩn đoán rủi ro tài chính định lượng tự động dưới áp lực thời gian thực để chuyển đổi các bộ dữ liệu thô phi cấu trúc thành các bảng dữ liệu phân tích. Hệ thống thay thế phương pháp bảng tính thủ công bằng một động cơ thống kê tự động phát hiện các bất thường, cô lập xu hướng cấu trúc và giảm số lượng chiều của các đặc trưng (features).

### Chi tiết thực hiện
- **Vấn đề**: Giải quyết vấn đề đa cộng tuyến và đa cộng tuyến hoàn hảo trên các tập dữ liệu chuỗi thời gian ngắn ($N \in [40, 60], P \gg N$) nhằm xác định các động lực rủi ro cấu trúc thay vì dự báo điểm số đơn thuần.
- **Kiến trúc & Giải pháp**:
  - **Pipeline 4 Chương**:
    - *Chương 1 (Nền tảng)*: *Balanced Vertical Analysis* sử dụng `np.where` và logic ràng buộc không âm `max(..., 0)` bằng Python/SQL để đảm bảo cân bằng cấu trúc tuyệt đối 100%.
    - *Chương 2 (Phát hiện Bất thường)*: Thiết kế hệ thống phát hiện bất thường dựa trên Sloan Accruals ($>5\%$) và phân tích DuPont để gắn cờ các bất thường kế toán và các chỉ báo suy thoái tài chính tiềm ẩn.
    - *Chương 3 (Chẩn đoán Rủi ro)*: Tích hợp định giá đa phương pháp (SoTP và DCF) thích ứng với cấu trúc tập đoàn đa ngành để đo lường dải biên an toàn tài chính.
    - *Chương 4 (Cấu trúc & Chu kỳ)*: Áp dụng phân rã chuỗi thời gian STL với trung bình trượt trung tâm để cô lập mô hình xu hướng cấu trúc và lọc nhiễu mùa vụ từ chuỗi thời gian tài chính.
  - **Machine Learning (Lựa chọn Đặc trưng Dual-Auditor)**: Sử dụng các mô hình tuyến tính có ràng buộc **ElasticNet** và **PLSR** ($H=3$) để tính toán điểm số VIP (Variable Importance in Projection), giải quyết hiệu quả vấn đề đa cộng tuyến và nhận diện các nhân tố rủi ro dự báo chính.

### Kết quả & Tác động
- **Định lượng**: Tự động hóa quy trình phân tích dữ liệu từ 6 bảng tính thô, xuất ra hơn 40 tệp dữ liệu CSV cấu trúc và trực quan hóa tức thì trên Streamlit Dashboard.
- **Định tính**: Hệ thống nhận diện thành công **4 Mẫu hình Rủi ro Chẩn đoán**:
  1. *Phân kỳ Lợi nhuận - Dòng tiền*: Cảnh báo rủi ro thao túng lợi nhuận ảo khi Sloan Accrual Ratio $> 5\%$ và $\text{CFO/NI} < 0.7$ liên tiếp 3 quý.
  2. *Điểm kích hoạt đảo chiều cơ cấu*: Sử dụng hàm tương quan chéo (CCF) tại độ trễ $k^* > 0$ để xác định mối quan hệ dẫn dắt - trễ phục vụ phân tích độ nhạy.
  3. *Tăng trưởng ảo bằng Đòn bẩy*: Phát hiện rủi ro khi ROE tăng thuần túy do phình to đòn bẩy ($\Delta\text{Equity Multiplier}$) trong khi hiệu suất tài sản suy giảm.
  4. *Vị thế dải định giá*: Xác định các ranh giới định giá lịch sử ($\text{Band Position} \to 0$ hoặc $1$) để phát tín hiệu rủi ro cực đoan.

### Cảm nhận & Bài học
- **Phân bổ thời gian**: Dịch chuyển trọng tâm từ lập trình cú pháp thủ công sang thiết kế thống kê và cấu trúc giải pháp nghiệp vụ thông qua triết lý phát triển AI-First.
- **Bài học rút ra**: Các mô hình tuyến tính có ràng buộc (ElasticNet/PLSR) cung cấp tính giải thích toán học và độ ổn định cao hơn vượt trội so với các mô hình phi tuyến phức tạp trên dữ liệu chuỗi thời gian ngắn.
