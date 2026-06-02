---
title: "Hệ thống Tự động hóa Đường ống Dữ liệu Thị trường Chứng khoán Lịch sử (CafeF Pipeline)"
role: "Lead FinTech Developer / Data Engineer"
timeframe: "09/2024"
link: "https://github.com/wane-bs/cafef-stock-automation"
tags: ["Python", "SQL", "Thiết kế Cơ sở Dữ liệu", "ETL", "io.BytesIO", "Thu thập dữ liệu", "Tự động hóa"]
featured: true
---
### 1. Tổng quan
Xây dựng đường ống dữ liệu ETL (Extract - Transform - Load) tự động, độc lập, có khả năng tự phục hồi (Self-healing) để lưu trữ và cung cấp dữ liệu sạch cho các thuật toán phân tích kỹ thuật sau phiên giao dịch chỉ với một nút bấm (One-click execution).

### 2. Chi tiết thực hiện & Hành động
- **Kiến trúc cơ sở dữ liệu & Thiết kế SQL**: Thiết kế lược đồ cơ sở dữ liệu quan hệ trong SQL (SQLite/PostgreSQL) và tối ưu hóa chỉ mục truy vấn để bảo đảm lưu trữ tốc độ cao và truy xuất nhanh chóng các bản ghi dữ liệu lịch sử.
- **Đường ống ETL mạnh mẽ**: Phát triển đường ống ETL tự phục hồi bằng Python sử dụng xử lý luồng trong bộ nhớ (`io.BytesIO`) để đệm các luồng dựa trên phân đoạn (kích thước chunk 8KB) trực tiếp vào RAM, loại bỏ nút thắt cổ chai I/O đĩa.
- **Hệ thống xác thực & dự phòng**: Thiết kế hệ thống dự phòng đa bảng mã và trình phân tích cú pháp biểu thức chính quy (Regex) để làm sạch các định dạng CSV bị hỏng, tiêu chuẩn hóa lược đồ (OHLCV) với tính nhất quán dữ liệu đạt 100%. Triển khai quét URL lùi động với các xác thực HTTP để tránh bị chặn tần suất (rate-limiting).

### 3. Kết quả & Tác động
- **Định lượng**: Đạt 100% tự động hóa quy trình nạp dữ liệu với chi phí vận hành thủ công bằng 0. Tối ưu hóa hiệu suất truy vấn cơ sở dữ liệu bằng cách triển khai các chỉ mục gom cụm (clustered indices) trong SQL, tăng tốc các truy vấn phân tích tiếp theo lên 30%.
- **Định tính**: Thiết lập kho lưu trữ cơ sở dữ liệu mạnh mẽ, sạch sẽ giúp loại bỏ độ trễ dữ liệu thủ công và cung cấp các đặc trưng (features) có tính nhất quán cao cho phân tích tài chính và mô hình hóa rủi ro.
