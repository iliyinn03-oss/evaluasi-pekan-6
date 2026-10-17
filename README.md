# Evaluasi Pekan 6: Kedai Senja v2

Program JavaScript dasar untuk membersihkan data transaksi, memvalidasi pesanan,
memproses pembayaran Kedai Senja, dan membuat laporan harian. Proyek ini juga
berisi latihan logika, perbaikan bug, serta eksperimen tentang perilaku JavaScript.

## Cara menjalankan

Buka berkas HTML yang sesuai di browser. Buka Developer Tools (`F12`) dan pilih
tab **Console** untuk melihat hasil:

- `index.html` — pembersihan data, mesin kasir, dan laporan harian.
- `logika.html` — latihan fungsi dan algoritma.
- `perbaikan.html` — contoh perbaikan kode.
- `eksperimen.html` — tebakan dan eksperimen JavaScript.

Setiap halaman hanya memuat file JavaScript pasangannya.

## Teknologi

- HTML5
- JavaScript (ECMAScript)
- Git dan GitHub

## Penulis

Illiyin Auro

## Riwayat Git

Tempel keluaran aktual `git log --oneline --graph` di sini setelah commit dan
merge seluruh bagian selesai.

## Refleksi

**Kenapa pekerjaan dibagi ke banyak branch, bukan semuanya di `main`?**  
Branch memisahkan pengerjaan setiap fitur agar perubahan bisa dikerjakan dan
ditinjau tanpa mengganggu versi utama yang stabil. Setelah selesai, perubahan
digabungkan ke `main`.

**Apa fungsi `.gitignore` dan apa yang dimasukkan ke dalamnya?**  
`.gitignore` mencegah berkas tertentu ikut dilacak Git. Di proyek ini,
`node_modules/` dan `.env` diabaikan karena berisi dependensi hasil instalasi
dan konfigurasi lokal yang tidak perlu dimasukkan ke repository.

**Apa beda merge lokal dengan Pull Request di GitHub?**  
Merge lokal menggabungkan branch langsung di repository pada komputer. Pull
Request mengajukan perubahan ke GitHub agar dapat ditinjau dan didiskusikan
sebelum digabungkan ke branch tujuan.
