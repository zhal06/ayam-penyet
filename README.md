# 🍽️ Website Pemesanan Makanan - Warung Makan Berkah

Website pemesanan makanan online berbasis HTML, CSS, dan JavaScript vanilla. Website ini dirancang untuk UMKM makanan agar pelanggan dapat memilih beberapa menu terlebih dahulu, lalu memesan melalui WhatsApp dalam satu pesan.

## ✨ Fitur

- ✅ **Sistem Keranjang (Cart)** - Pelanggan bisa pilih beberapa menu sebelum pesan
- ✅ **Kontrol Jumlah** - Bisa tambah/kurang quantity setiap menu
- ✅ **Sistem Varian Produk** - Setiap produk punya pilihan varian (sambal, topping, dll)
- ✅ **Form Data Pelanggan** - Wajib isi nama dan alamat
- ✅ **Validasi Data** - Tidak bisa pesan jika data belum lengkap
- ✅ **Pilihan Pickup/Delivery** - Pilih metode pengiriman yang diinginkan
- ✅ **Pesan WhatsApp Otomatis** - Semua pesanan terkirim dalam satu pesan WhatsApp
- ✅ **Format Pesan Lengkap** - Perkenalan pelanggan + pesanan + varian + metode pengiriman
- ✅ **Format Pesan Sesuai Pilihan** - Pesan delivery menanyakan ongkir otomatis
- ✅ **Responsive Design** - Mobile-first, tampil optimal di semua perangkat
- ✅ **Filter Kategori** - Filter menu berdasarkan Makanan, Minuman, atau Snack
- ✅ **Format Harga Rupiah** - Otomatis format harga ke format Indonesia
- ✅ **Animasi Hover** - Efek hover yang smooth dan modern
- ✅ **Lazy Loading** - Gambar dimuat saat diperlukan untuk performa lebih cepat
- ✅ **Tanpa Backend** - Tidak perlu server atau database, berjalan sepenuhnya di browser
- ✅ **Ringan & Cepat** - Hanya menggunakan vanilla HTML/CSS/JS

## 📁 Struktur File

```
food-order-website/
├── index.html      # Halaman utama
├── style.css       # Styling dan desain
├── script.js       # Fungsionalitas JavaScript + Cart System
├── README.md       # Dokumentasi ini
└── images/         # Folder untuk gambar menu
    └── README.md   # Panduan gambar
```

## 🚀 Cara Upload ke GitHub Pages

### Langkah 1: Siapkan Repository GitHub

1. Buat repository baru di [GitHub](https://github.com/new)
2. Beri nama repository (contoh: `warung-makan`)
3. Pilih **Public** atau **Private** sesuai kebutuhan
4. Klik **Create repository**

### Langkah 2: Upload File

**Cara 1 - Upload langsung via GitHub Web:**
1. Buka repository yang baru dibuat
2. Klik **"uploading an existing file"**
3. Drag & drop SEMUA file dari folder `food-order-website/`:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
4. Tulis commit message (contoh: "Initial commit")
5. Klik **Commit changes**

**Cara 2 - Upload via Git Command Line:**
```bash
cd /path/to/food-order-website
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/warung-makan.git
git push -u origin main
```

### Langkah 3: Aktifkan GitHub Pages

1. Buka repository di GitHub
2. Klik **Settings** tab di bagian atas
3. Di menu kiri, cari dan klik **Pages**
4. Di bagian **Build and deployment** → **Branch**:
   - Pilih `main` (atau `master`)
   - Pilih folder `/(root)`
5. Klik **Save**

### Langkah 4: Tunggu Deploy

1. Tunggu beberapa detik hingga GitHub selesai deploy
2. Refresh halaman Pages
3. Anda akan melihat link website (contoh: `https://username.github.io/warung-makan/`)

## 📖 Cara Menggunakan Website

### Untuk Pelanggan:

1. **Buka website** pemesanan makanan
2. **Telusuri menu** - Pilih kategori yang diinginkan (Makanan/Minuman/Snack)
3. **Klik produk yang diinginkan** - Klik pada gambar produk
4. **Pilih varian produk** yang tersedia:
   - Contoh untuk Ayam Geprek: Sambal Goreng / Sambal Mentah / Sambal Pisah / Sambal Satukan
   - Contoh untuk Nasi Goreng: Pedas / Tidak Pedas
   - Contoh untuk Pisang Goreng: Coklat / Keju / Campur
5. **Lihat keranjang** - Klik tombol "Pesanan" di header untuk melihat:
   - Semua menu dan varian yang dipilih
   - Jumlah setiap item (bisa diubah)
   - Total harga
6. **Isi informasi pelanggan** - Wajib isi:
   - **Nama Lengkap** - Nama Anda
   - **Alamat** - Alamat lengkap pengiriman
7. **Pilih metode pengiriman** - Pilih salah satu:
   - **Ambil di Tempat** - Datang langsung ke lokasi
   - **Delivery** - Makanan diantar ke alamat Anda
8. **Klik "Pesan via WhatsApp"** untuk mengirim pesanan
8. **WhatsApp akan otomatis terbuka** dengan pesan lengkap:

**Jika memilih "Ambil di Tempat":**
```
Perkenalan Pelanggan:
👤 Nama: Budi Santoso
📍 Alamat: Jl. Merpati No. 45, Jakarta

─ • ─ • ─ • ─ • ─ • ─

Halo, saya ingin memesan:

1. 🍽️ Ayam Geprek
   💰 Harga: Rp25.000 x 2
   📦 Subtotal: Rp50.000

2. 🍽️ Es Teh Manis
   💰 Harga: Rp5.000 x 2
   📦 Subtotal: Rp10.000

💵 TOTAL: Rp60.000

📍 Metode: Ambil di Tempat

Mohon info ketersediaan. Terima kasih! 🙏
```

**Jika memilih "Delivery":**
```
Perkenalan Pelanggan:
👤 Nama: Budi Santoso
📍 Alamat: Jl. Merpati No. 45, Jakarta

─ • ─ • ─ • ─ • ─ • ─

Halo, saya ingin memesan:

1. 🍽️ Ayam Geprek
   💰 Harga: Rp25.000 x 2
   📦 Subtotal: Rp50.000

2. 🍽️ Es Teh Manis
   💰 Harga: Rp5.000 x 2
   📦 Subtotal: Rp10.000

💵 TOTAL: Rp60.000

🚚 Metode: Delivery

Berapa ongkos kirim ke alamat saya? 🤔
Terima kasih! 🙏
```

9. **Kirim pesan** dan tunggu konfirmasi penjual

## ⚙️ Konfigurasi

### Ubah Nomor WhatsApp

Buka file `script.js` dan ubah variabel ini:

```javascript
// Ubah nomor WhatsApp di sini (format: 62...)
const WHATSAPP_NUMBER = '6281234567890';
```

### Tambah Menu Baru

Buka file `script.js` dan tambahkan ke array `menuItems`:

```javascript
{
    id: 13,  // Gunakan ID unik
    name: 'Nama Menu Baru',
    description: 'Deskripsi menu yang menarik',
    price: 15000,
    category: 'Makanan',  // Pilih: Makanan, Minuman, atau Snack
    image: 'https://placehold.co/400x300/FF0000/FFFFFF?text=Menu+Anda'
}
```

### Ubah Informasi Usaha

**Nama Usaha & Tagline:**
Buka `index.html` dan cari di bagian `<header>`:

```html
<h1 class="brand-name">Warung Makan Berkah</h1>
<p class="brand-tagline">Cita rasa nusantara yang menggugah selera</p>
```

**Alamat & Jam Buka:**
Buka `index.html` dan cari di bagian `<footer>`:

```html
<span>
    Jl. Makanan Enak No. 123<br>
    Kota Kuliner, Indonesia
</span>
```

```html
<span>
    Senin - Jumat: 10:00 - 21:00<br>
    Sabtu - Minggu: 09:00 - 22:00
</span>
```

### Ubah Warna Tema

Buka `style.css` dan ubah variabel di `:root`:

```css
:root {
    --primary-color: #ea580c;    /* Warna utama - oranye */
    --secondary-color: #dc2626;  /* Warna sekunder - merah */
    --success-color: #16a34a;    /* Warna sukses - hijau */
    /* ... variabel lainnya */
}
```

## 🛒 Fitur Keranjang (Cart)

### Menambah Item ke Cart
- **Klik pada produk** di halaman utama
- Modal varian produk akan muncul
- Pilih varian yang diinginkan
- Item akan otomatis masuk ke cart
- Badge angka di tombol "Pesanan" akan bertambah

### Mengatur Jumlah Item
- Buka cart dengan klik tombol **"Pesanan"** di header
- Gunakan tombol **+** dan **-** untuk mengatur jumlah
- Klik tombol **X** merah untuk menghapus item dari cart

### Mengirim Pesanan
- Setelah semua item ditambahkan, klik **"Pesan via WhatsApp"** di cart
- WhatsApp akan otomatis terbuka dengan semua pesanan
- Kirim pesan untuk mengonfirmasi pesanan

### Mengosongkan Cart
Cart akan otomatis kosong setelah Anda mengirim pesanan (opsional, bisa diubah di script.js)

## 🚚 Pilihan Metode Pengiriman

### Cara Kerja

Di dalam cart, setelah menambahkan menu, pelanggan akan melihat pilihan:

**1. Ambil di Tempat** 📍
- Pelanggan datang langsung ke lokasi warung
- Tidak ada ongkos kirim
- Pesan WhatsApp: "Mohon info ketersediaan"

**2. Delivery** 🚚
- Makanan diantar ke alamat pelanggan
- Pesan WhatsApp otomatis bertanya: "Berapa ongkos kirim ke alamat saya? 🤔"
- Penjual bisa memberikan informasi ongkir dan waktu pengiriman

### Pesan WhatsApp

**Pickup:**
```
📍 Metode: Ambil di Tempat

Mohon info ketersediaan. Terima kasih! 🙏
```

**Delivery:**
```
🚚 Metode: Delivery

Berapa ongkos kirim ke alamat saya? 🤔
Terima kasih! 🙏
```

### Catatan Penting
- Pelanggan **WAJIB** memilih salah satu metode pengiriman
- Jika belum memilih, sistem akan memberi peringatan
- Section pengiriman hanya muncul jika ada item di cart

## 👤 Form Data Pelanggan

### Cara Kerja

Setelah menambahkan menu ke cart, pelanggan akan melihat form informasi pelanggan:

**1. Nama Lengkap** 👤
- Input text untuk nama pelanggan
- Wajib diisi
- Tidak bisa pesan jika kosong

**2. Alamat** 📍
- Textarea untuk alamat lengkap
- Wajib diisi
- Tidak bisa pesan jika kosong

### Validasi Form

- ✅ **Visual Feedback**:
  - Input berwarna hijau jika sudah diisi (valid)
  - Input berwarna merah jika kosong (invalid)
  
- ✅ **Alert System**:
  - "Silakan isi nama lengkap Anda!" - jika nama kosong
  - "Silakan isi alamat lengkap Anda!" - jika alamat kosong
  - Otomatis fokus ke field yang belum diisi

- ✅ **Auto-Validation**:
  - Sistem validasi real-time saat mengetik
  - Menghapus tanda invalid saat user mulai mengetik

### Perkenalan di WhatsApp

Data pelanggan akan muncul di awal pesan WhatsApp:

```
Perkenalan Pelanggan:
👤 Nama: Budi Santoso
📍 Alamat: Jl. Merpati No. 45, Jakarta

─ • ─ • ─ • ─ • ─ • ─

Halo, saya ingin memesan:
...
```

### Catatan Penting
- Pelanggan **WAJIB** mengisi nama dan alamat
- Tidak bisa pesan via WhatsApp jika form belum lengkap
- Section customer info hanya muncul jika ada item di cart
- Data di-reset saat halaman di-refresh (session only)

## 🎯 Sistem Varian Produk

### Cara Kerja

**1. Klik Produk**
- Klik pada card produk di halaman utama
- Modal pilihan varian akan muncul

**2. Pilih Varian**
- Setiap produk memiliki pilihan varian berbeda:
  - **Ayam Geprek**: Sambal Goreng / Sambal Mentah / Sambal Pisah / Sambal Satukan
  - **Nasi Goreng**: Pedas / Tidak Pedas
  - **Soto Ayam**: Koya / Tanpa Koya
  - **Bakso Urat**: Jumbo / Biasa
  - **Pisang Goreng**: Coklat / Keju / Campur
  - **Es Teh / Kopi**: Dingin / Panas
  - **Tahu Krispi**: Pedas / Original

**3. Harga Varian**
- Beberapa varian memiliki harga tambahan (price modifier):
  - Contoh: Sambal Pisah = +Rp2.000
  - Contoh: Topping Keju = +Rp3.000
  - Contoh: Tanpa Koya = -Rp2.000
- Harga final ditampilkan di tombol varian
- Harga yang tersimpan di cart = Harga dasar + Price Modifier

**4. Masuk ke Cart**
- Setelah memilih varian, item otomatis masuk ke cart
- Varian yang dipilih tersimpan bersama item
- Bisa menambah item yang sama dengan varian berbeda

### Contoh di Cart

```
Cart Items:
1. 🍽️ Ayam Geprek
   ✨ Varian: Sambal Pisah
   💰 Harga: Rp27.000 x 2
   📦 Subtotal: Rp54.000

2. 🍽️ Ayam Geprek
   ✨ Varian: Sambal Satukan
   💰 Harga: Rp25.000 x 1
   📦 Subtotal: Rp25.000
```

### Tambah Varian Produk

Buka file `script.js` dan tambahkan/ubah opsi di setiap produk:

```javascript
{
    id: 1,
    name: 'Nama Menu',
    description: 'Deskripsi menu',
    price: 25000,
    category: 'Makanan',
    image: 'url-gambar',
    options: [
        { name: 'Nama Varian', priceModifier: 0 },  // Harga tetap
        { name: 'Nama Varian', priceModifier: 5000 },  // +Rp5.000
        { name: 'Nama Varian', priceModifier: -2000 }  // -Rp2.000
    ]
}
```

**Penjelasan:**
- `name`: Nama varian yang tampil di tombol
- `priceModifier`: Selisih harga dari harga dasar
  - Positif = harga bertambah
  - Negatif = harga berkurang
  - 0 = harga tetap

## 🎨 Customization

### Menggunakan Gambar Sendiri

1. Buat folder `images/` di dalam folder website
2. Upload gambar menu ke folder tersebut
3. Ubah path gambar di `script.js`:

```javascript
image: 'images/ayam-geprek.jpg'  // Ganti dengan nama file gambar Anda
```

### Menambah Kategori Baru

1. Buka `index.html` dan tambahkan button filter:

```html
<button class="filter-btn" data-category="Jajanan">Jajanan</button>
```

2. Tambahkan menu dengan kategori tersebut di `script.js`:

```javascript
{
    id: 14,
    name: 'Nama Jajanan',
    description: 'Deskripsi',
    price: 5000,
    category: 'Jajanan',  // Pastikan sama dengan data-category di HTML
    image: 'url-gambar'
}
```

## 🔧 Fitur Teknis

### Cart System
- **State Management**: Cart disimpan di memory (JavaScript array)
- **Quantity Control**: Tambah/kurang jumlah item dengan tombol + dan -
- **Remove Item**: Hapus item dari cart dengan tombol X
- **Auto Calculation**: Total harga dihitung otomatis
- **Responsive UI**: Cart modal slide-in yang smooth
- **Empty State**: Pesan jika cart kosong

### WhatsApp Integration
- **URL Encoding**: Pesan otomatis di-encode untuk WhatsApp
- **All-in-One Message**: Semua pesanan dalam satu pesan
- **Formatted Message**: Format pesan yang rapi dan mudah dibaca
- **Total Display**: Total harga ditampilkan dengan jelas

### Performance
- **Lazy Loading**: Gambar dimuat saat diperlukan
- **Minimal Dependencies**: Hanya vanilla JavaScript
- **Fast Loading**: Tidak ada framework berat
- **Optimized Images**: Placeholder otomatis jika gambar gagal dimuat

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Catatan Penting

- Pastikan nomor WhatsApp aktif dan terdaftar di WhatsApp
- Format nomor: Gunakan kode negara tanpa `+` (contoh: `62` untuk Indonesia)
- Gambar placeholder dari `placehold.co` bisa diganti dengan gambar asli
- Website ini berjalan sepenuhnya di browser, tidak perlu hosting khusus
- Cart tidak disimpan (session only) - akan hilang jika halaman di-refresh

## 🆘 Troubleshooting

### Gambar tidak muncul
- Pastikan URL gambar benar
- Jika menggunakan file lokal, pastikan path benar
- Gambar placeholder akan otomatis muncul jika gambar gagal dimuat

### WhatsApp tidak terbuka
- Pastikan terkoneksi internet
- Cek format nomor WhatsApp (harus dimulai dengan kode negara, contoh: `62` untuk Indonesia)
- Pastikan pop-up tidak diblokir oleh browser

### Cart tidak berfungsi
- Pastikan file `script.js` ter-link dengan benar di `index.html`
- Refresh halaman dan coba lagi
- Cek browser console untuk error (F12 → Console)

### Tampilan tidak responsif
- Pastikan file `style.css` sudah ter-link dengan benar di `index.html`
- Cek viewport meta tag di `<head>` HTML

## 🔄 Perbedaan dengan Versi Lama

**Versi Lama:**
- ❌ Klik menu → Langsung ke WhatsApp (satu menu = satu pesan)
- ❌ Tidak bisa gabung pesanan dalam satu chat

**Versi Baru (Ini):**
- ✅ Klik menu → Masuk cart
- ✅ Bisa pilih beberapa menu
- ✅ Bisa atur jumlah setiap menu
- ✅ Semua pesanan terkirim dalam satu pesan WhatsApp
- ✅ Lihat total harga sebelum pesan

## 📄 Lisensi

Website ini gratis untuk digunakan oleh UMKM dan bisnis kecil. Silakan dimodifikasi sesuai kebutuhan.

## 👨‍💻 Dibuat dengan

- HTML5
- CSS3 (dengan Custom Properties)
- Vanilla JavaScript (ES6+)
- Google Fonts (Poppins)
- Icons (SVG inline)

---

**Selamat berjualan! 🎉**
