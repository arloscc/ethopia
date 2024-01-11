import pyautogui

def auto_click_left(times):
    try:
        for _ in range(times):
            pyautogui.click()  # Melakukan klik kiri mouse
    except KeyboardInterrupt:
        print("\nAuto Clicker dihentikan.")

# Masukkan jumlah klik yang diinginkan (10 kali dalam kasus ini)
jumlah_klik = 10

auto_click_left(jumlah_klik)
