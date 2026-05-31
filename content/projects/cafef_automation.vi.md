---
title: "Hệ thống Tự động hóa Đường ống Dữ liệu Thị trường Chứng khoán Lịch sử (CafeF Pipeline)"
role: "Lead FinTech Developer / Data Engineer"
timeframe: "09/2024"
link: "https://github.com/wane-bs/cafef-stock-automation"
tags: ["Python", "Data Ingestion", "CafeF", "Ichimoku", "ETL", "io.BytesIO", "Regex", "Tự động hóa"]
featured: true
---
### 1. Tổng quan
Xây dựng đường ống dữ liệu ETL (Extract - Transform - Load) tự động, độc lập, có khả năng tự phục hồi (Self-healing) để cung cấp dữ liệu sạch cho các thuật toán phân tích kỹ thuật sau phiên giao dịch chỉ với một nút bấm (One-click execution).

### 2. Chi tiết thực hiện & Hành động
- **Quét lùi & Kiểm thực URL**: Phát triển thuật toán *Dynamic Backwards Scanning* sử dụng vòng lặp quét lùi ngày (timedelta) để định vị URL dữ liệu khả dụng gần nhất, kết hợp kiểm thực *HTTP HEAD Request* nhằm tiết kiệm băng thông và tránh bị chặn truy cập (Rate limiting).
- **Stream Processing vào RAM**: Triển khai cơ chế tải luồng (*Streaming*) phân đoạn (chunk_size=8192) trực tiếp vào bộ nhớ đệm RAM (*In-memory Buffer* qua io.BytesIO), loại bỏ hoàn toàn ràng buộc I/O vật lý trên ổ đĩa.
- **Xử lý mã hóa & Parser dự phòng**: Thiết kế hệ thống dự phòng đa bảng mã (*Multi-encoding Fallback*) và trình phân tích chuỗi văn bản thuần bằng biểu thức chính quy (*Fallback Manual Parser*) để trích xuất dữ liệu khi cấu trúc tệp CSV bị lỗi nghiêm trọng. Tự động chuẩn hóa tên cột cấu trúc (Open, High, Low, Close, Volume) và phân loại lưu trữ thông minh theo sàn (HSX, HNX, UPCOM) bằng mô hình Regex định dạng chuẩn.

### 3. Kết quả & Tác động
- **Định lượng**: Tự động hóa 100% quy trình trích xuất và làm sạch dữ liệu thô sau phiên qua cơ chế kích hoạt đơn tác vụ, giảm thời gian xử lý thủ công xuống 0; triệt tiêu 100% lỗi treo tiến trình (*hanging*) nhờ cấu hình TIMEOUT tối ưu.
- **Định tính**: Loại bỏ hoàn toàn độ trễ vận hành thủ công, cung cấp dữ liệu sạch, có độ tin cậy tuyệt đối hỗ trợ các thuật toán phân tích kỹ thuật sau phiên.
