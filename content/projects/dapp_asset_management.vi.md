---
title: "Giao thức Quản lý Tài sản Phi tập trung & Cho thuê Sách (Decentralized Asset & Rental Protocol)"
role: "Blockchain Solutions Architect & Technical Documentation Lead"
timeframe: "09/2024 – 10/2024"
link: "https://wane-bs.github.io/dsr_ly_thuyet/"
tags: ["Solidity", "DApp", "Decentralized Storage", "IPFS", "OpenZeppelin v5", "EVM Optimization", "Blockchain"]
featured: true
---
### 1. Tổng quan
Thiết kế giải pháp quản lý tài sản phi tập trung và cho thuê sách an toàn, phân tách rõ ràng quyền sở hữu và quyền sử dụng trên nền tảng blockchain, nhằm loại bỏ rủi ro của hệ thống lưu trữ tập trung (Single Point of Failure) và giảm thiểu tối đa chi phí giao dịch cho người dùng.

### 2. Chi tiết thực hiện & Hành động
- **Thiết kế Mô hình Token Lai (Hybrid Token Model)**: Nghiên cứu và thiết lập giải pháp phân lớp quyền sở hữu: Sử dụng **ERC-721** định danh tài sản độc bản kết hợp cơ chế mã băm CID trên **IPFS/Arweave**; thiết kế **Soulbound Token (SBT)** khống chế chuyển nhượng cho hợp đồng thuê bằng cách ghi đè hàm `_update` (OpenZeppelin v5); tích hợp **ERC-4907** để phân tách Quyền sở hữu (Owner) và Quyền khai thác (User) tự động hết hạn mà không tốn gas thu hồi.
- **Chuẩn hóa & Tối ưu hóa EVM Storage**: Định hình khung kỹ thuật giảm thiểu tối đa chi phí thực thi (*Execution cost*): Áp dụng kỹ thuật đóng gói biến (*Storage Slot Packing* $\le 32$ bytes cho cấu trúc EvidencePack), chuyển đổi hệ thống cảnh báo từ `require` string sang lỗi tùy biến (*Custom Errors*), và điều hướng tham số vùng nhớ calldata thay vì memory.
- **AI-Augmented Engineering & Quản trị Tri thức**: Sử dụng phương pháp *AI-Augmented Engineering* (Vibe coding qua thư viện antigravity tối ưu hóa >80% tiến trình sinh mã). Thiết kế các sơ đồ trực quan (*System Architecture Diagrams*) và biên soạn tài liệu hướng dẫn chuẩn hóa cấu trúc hệ thống, đảm bảo tính đồng bộ logic và khả năng tương thích mã nguồn cho các thành viên trong đội ngũ phát triển.

### 3. Kết quả & Tác động
- **Định lượng**: Tối ưu hóa chi phí thực thi gas hơn 30% nhờ áp dụng Storage Slot Packing và Custom Errors. Triển khai thành công mô hình cho thuê tự động hết hạn không tốn gas thu hồi.
- **Định tính**: Đề xuất thành công các giao thức bảo mật dữ liệu an toàn, giải quyết được các rào cản kỹ thuật về hạ tầng lưu trữ, tạo tiền đề ứng dụng rộng rãi trên Avalanche L1 / NDA Chain Mainnet Ecosystem.
