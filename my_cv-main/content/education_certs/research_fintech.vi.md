---
title: "Nghiên cứu khoa học: Tác động của Fintech đến Phổ cập tài chính tại Việt Nam"
role: "Nghiên cứu viên chính (Mô hình hóa lượng lượng)"
timeframe: "10/2023 – 12/2024"
tags: ["Nghiên cứu khoa học", "Fintech", "Phổ cập tài chính", "Dữ liệu bảng", "Stata 17", "Hồi quy FGLS"]
---
### 1. Tổng quan
Thực hiện nghiên cứu lượng lượng về cách thức tiếp cận fintech thúc đẩy phổ cập tài chính tại 20 tỉnh thành hàng đầu Việt Nam từ năm 2017 đến năm 2023.

### 2. Chi tiết thực hiện & Phương pháp luận
- **Bài toán Nghiên cứu**: Lượng hóa và đánh giá khoa học tác động của công nghệ tài chính đến mức độ tiếp cận dịch vụ tài chính của người dân, đồng thời nhận diện các rào cản mang tính cấu trúc.
- **Phương pháp luận & Mô hình lượng hóa**:
  - Sử dụng phương pháp dữ liệu bảng (*Panel Data*) trên phần mềm **Stata 17**.
  - Triển khai các mô hình hồi quy OLS (Bình phương nhỏ nhất), REM (Mô hình tác động ngẫu nhiên), FEM (Mô hình tác động cố định).
  - Áp dụng Feasible Generalized Least Squares (FGLS) để xử lý các khuyết tật phương sai thay đổi và tự tương quan, bảo đảm các suy diễn thống kê mạnh mẽ trên các chỉ báo tài chính số thay thế.

### 3. Kết quả & Tác động
- **Định lượng**: Xác định Hệ sinh thái FinTech là biến giải thích có tác động thuận chiều mạnh nhất đến chỉ số tài chính toàn diện với hệ số hồi quy $GLS = 7.56$ (có ý nghĩa thống kê cực kỳ cao ở mức $1\%$, $p < 0.01$). Kết quả này trực tiếp đồng thuận với sứ mệnh phục vụ nhóm khách hàng chưa được tiếp cận ngân hàng truyền thống (underbanked) của MoMo.
- **Định tính**: Mô hình hóa thành công lộ trình dịch chuyển rào cản hạ tầng công nghệ tại các trung tâm kinh tế lớn.

### 4. Cảm nhận & Bài học
- **Bài học rút ra**: Thành thạo tư duy lượng hóa nghiên cứu học thuật, cách xử lý dữ liệu bảng và ứng dụng kiểm định khuyết tật mô hình hồi quy để đưa ra kết luận khoa học vững chắc.
- **Khó khăn đã vượt qua**: Xử lý vấn đề tự tương quan (autocorrelation) và phương sai thay đổi (heteroscedasticity) của dữ liệu bảng thông qua kiểm định và hiệu chỉnh bằng ước lượng FGLS.
