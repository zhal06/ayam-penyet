# Folder Images

Di folder ini Anda bisa menaruh gambar-gambar menu makanan Anda.

## Cara Menambah Gambar

1. Siapkan gambar menu (disarankan ukuran 400x300 px, format JPG atau PNG)
2. Rename gambar dengan nama yang mudah diingat (contoh: ayam-geprek.jpg)
3. Upload gambar ke folder ini
4. Update data menu di file `script.js`:

```javascript
{
    id: 1,
    name: 'Ayam Geprek',
    description: 'Ayam goreng crispy dengan sambal bawang pedas nampol',
    price: 25000,
    category: 'Makanan',
    image: 'images/ayam-geprek.jpg'  // Ganti dengan nama file gambar Anda
}
```

## Tips untuk Gambar

- **Ukuran optimal**: 400x300 px (4:3 aspect ratio)
- **Format**: JPG atau PNG
- **Ukuran file**: Di bawah 500 KB untuk loading lebih cepat
- **Pencahayaan**: Pastikan gambar terang dan jelas
- **Background**: Gunakan background yang bersih atau natural

## Jika Belum Ada Gambar

Saat ini website menggunakan placeholder dari `placehold.co`. Gambar-gambar ini akan otomatis muncul dan Anda bisa menggantinya kapan saja dengan gambar asli menu Anda.

Nama gambar bisa diganti sesuai nama menu Anda:

- ayam-geprek.jpg
- nasi-goreng.jpg
- mie-goreng.jpg
- es-teh.jpg
- dll.
