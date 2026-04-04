---
description: Pipeline tùy biến CV tự động theo cấu hình (Automated CV Tailoring Workflow)
---

# Quy trình Chuẩn hóa và Điều chỉnh CV Tự động (CV Tailoring Workflow)

Quy trình này định nghĩa các bước thực thi từ việc phân tích Job Description (JD) đến việc cập nhật trực tiếp mã nguồn CV trên React/Vite tại thư mục `c:\my_cv-main\my_cv-main` cho từng nhà tuyển dụng.

## 1. Phân bổ Vai trò (Roles Definition)

Quy trình gồm 3 tác nhân/vai trò phối hợp thực hiện:

- **Role 1: Career Strategist (Chiến lược gia Nghề nghiệp)**
  - Phân tích JD và thông tin công ty để trích xuất Keywords.
  - Định hình "tone giọng" (e.g., startup-focused, detail-oriented, analytical).
  - Đề xuất bảng màu (Theme Color) phù hợp với Brand Identity của công ty.

- **Role 2: Content Architect (Kiến trúc sư Nội dung)**
  - Viết lại phần *Professional Summary* dựa trên định hướng của Role 1.
  - Tái cấu trúc *Experience*: Xây dựng lại các bullet points (action verbs + metrics) sát với yêu cầu công việc.
  - Tái định nghĩa *Projects*: Điều chỉnh góc nhìn các dự án có sẵn để giải bài toán liên quan đến vị trí ứng tuyển.
  - Cập nhật và sắp xếp lại *Skills* & *Keywords*.

- **Role 3: Frontend Developer (Lập trình viên Giao Diện)**
  - Xác định và thao tác mã nguồn tại `c:\my_cv-main\my_cv-main`.
  - Cập nhật trực tiếp vào file `App.jsx` và các component liên quan.
  - Đổ nội dung text mới đã được cung cấp từ Role 2.
  - Cập nhật bảng màu Tailwind (`bg-[hex]`, `text-[hex]`) theo định hướng của Role 1.
  - Thay thế các icon (lucide-react) cho phù hợp bối cảnh.

## 2. Các bước thực thi Workflow (Execution Steps)

Để chạy workflow này, hãy thực hiện tuần tự các bước sau:

1. **Khởi tạo & Thu thập Context (Initiation)**
   - Cung cấp Job Description (hoặc link) và thông tin về công ty mục tiêu.
   - [Career Strategist] phân tích và đưa ra bản định hướng chiến lược.

2. **Soạn thảo Nội dung (Content Overhaul)**
   - [Content Architect] căn cứ vào chiến lược để soạn thảo list thay đổi nội dung chi tiết.
   - Nội dung mới phải được xuất ra định dạng rõ ràng để Frontend Developer dễ dàng áp dụng.

3. **Cập nhật Mã Nguồn React (Code Update)**
   - [Frontend Developer] chuyển hướng (hoặc target trực tiếp) vào thư mục làm việc: `c:\my_cv-main\my_cv-main`.
   - [Frontend Developer] áp dụng nội dung văn bản và thay đổi giao diện (màu sắc, icon) vào source code `App.jsx`.

4. **Review & Hoàn tất (Review & Finish)**
   - Xác nhận sơ bộ rằng code tại `c:\my_cv-main\my_cv-main` đã được chỉnh sửa hợp lý và sẵn sàng để chạy local hoặc deploy.
