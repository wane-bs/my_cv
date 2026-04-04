import qrcode

url = "https://phantichtcdn-wane-hieu.streamlit.app/" # Thay bằng URL thật của bạn
img = qrcode.make(url)
img.save("quet_de.png")
print("Đã tạo xong mã QR!")
