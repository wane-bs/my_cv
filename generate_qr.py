import sys
import os

try:
    import qrcode
except ImportError:
    print("Thư viện 'qrcode' chưa được cài đặt. Vui lòng chạy lệnh sau để cài đặt:")
    print("pip install qrcode pillow")
    sys.exit(1)

def generate_qr(link, filename="qr_code.png"):
    print(f"Đang khởi tạo mã QR cho đường link: {link}...")
    
    # Cấu hình QR Code
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(link)
    qr.make(fit=True)

    # Tạo ảnh QR
    img = qr.make_image(fill_color="black", back_color="white")
    
    # Lưu file
    img.save(filename)
    print(f"✓ Đã tạo thành công và lưu ảnh QR tại: {os.path.abspath(filename)}")

if __name__ == "__main__":
    # Nhận đường link từ đối số dòng lệnh hoặc nhập từ bàn phím
    if len(sys.argv) > 1:
        url = sys.argv[1]
    else:
        url = input("Nhập đường link cần tạo mã QR: ").strip()
    
    if not url:
        print("Đường link không được để trống!")
        sys.exit(1)
        
    generate_qr(url)
