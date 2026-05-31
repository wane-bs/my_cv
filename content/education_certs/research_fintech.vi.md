---
title: "Nghiên cứu khoa học: Tác động của Fintech đến Phổ cập tài chính"
role: "Nghiên cứu viên chính"
timeframe: "10/2023 – 12/2024"
tags: ["Nghiên cứu khoa học", "Fintech", "Phổ cập tài chính", "Dữ liệu bảng", "Stata 17", "Hồi quy GLS"]
---
### 1. Tổng quan
Nghiên cứu tác động của hệ sinh thái Fintech đối với vấn đề phổ cập tài chính (Financial Inclusion) tại 20 tỉnh thành có quy mô kinh tế dẫn đầu Việt Nam trong giai đoạn 2017 - 2023.

### 2. Chi tiết thực hiện & Phương pháp luận
- **Bài toán Nghiên cứu**: Lượng hóa và đánh giá khoa học tác động của công nghệ tài chính đến mức độ tiếp cận dịch vụ tài chính của người dân, đồng thời nhận diện các rào cản mang tính cấu trúc.
- **Phương pháp luận & Mô hình lượng hóa**:
  - Sử dụng phương pháp dữ liệu bảng (*Panel Data*) trên phần mềm **Stata 17**.
  - Triển khai các mô hình hồi quy OLS (Bình phương nhỏ nhất), REM (Mô hình tác động ngẫu nhiên), FEM (Mô hình tác động cố định).
  - Áp dụng kiểm định các khuyết tật của mô hình và khắc phục bằng phương pháp GLS (Bình phương nhỏ nhất tổng quát).

### 3. Kết quả & Tác động
- **Định lượng**: Xác định Hệ sinh thái FinTech là biến giải thích có tác động thuận chiều mạnh nhất đến chỉ số tài chính toàn diện với hệ số hồi quy $GLS = 7.56$ (có ý nghĩa thống kê cực kỳ cao ở mức $1\%$, $p < 0.01$). Chỉ ra điểm nghẽn cấu trúc: Tỷ lệ đầu tư R&D quốc gia thấp ($< 0.5\% \text{ GDP}$) và sự bất đối xứng hạ tầng công nghệ giữa các địa phương.
- **Định tính**: Mô hình hóa thành công lộ trình dịch chuyển rào cản, đưa ra dự báo hai trung tâm kinh tế lớn (TP.HCM & Đà Nẵng) sẽ giảm bớt $2/3$ các rào cản cấu trúc về hạ tầng công nghệ vào năm 2026.

### 4. Cảm nhận & Bài học
- **Bài học rút ra**: Thành thạo tư duy lượng hóa nghiên cứu học thuật, cách xử lý dữ liệu bảng và ứng dụng kiểm định khuyết tật mô hình hồi quy để đưa ra kết luận khoa học vững chắc.
- **Khó khăn đã vượt qua**: Xử lý vấn đề tự tương quan (autocorrelation) và phương sai thay đổi (heteroscedasticity) của dữ liệu bảng thông qua kiểm định và hiệu chỉnh bằng ước lượng GLS.
