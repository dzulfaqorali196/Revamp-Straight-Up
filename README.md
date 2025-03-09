# StraightUp Digital Agency Website

Website untuk StraightUp Digital Agency, sebuah agensi digital marketing yang fokus pada pertumbuhan brand dengan layanan digital marketing.

## Struktur Proyek

Proyek ini menggunakan struktur modular untuk memudahkan pengembangan dan pemeliharaan:

```
Revamp-Straight-Up/
├── src/
│   ├── css/
│   │   ├── components/
│   │   │   ├── header.css
│   │   │   ├── hero.css
│   │   │   └── ...
│   │   ├── utils/
│   │   │   ├── variables.css
│   │   │   ├── reset.css
│   │   │   └── ...
│   │   └── main.css
│   ├── js/
│   │   ├── components/
│   │   │   ├── header.js
│   │   │   ├── animations.js
│   │   │   ├── forms.js
│   │   │   └── ...
│   │   ├── utils/
│   │   │   ├── helpers.js
│   │   │   └── ...
│   │   └── main.js
│   ├── pages/
│   │   ├── index.html
│   │   ├── contact.html
│   │   └── ...
│   └── assets/
│       ├── img/
│       │   └── ...
│       └── ...
├── config.js
├── index.html (lama)
├── contact.html (lama)
├── style.css (lama)
├── index.js (lama)
└── README.md
```

## Fitur

- Halaman beranda dengan hero section
- Bagian tentang perusahaan (about)
- Bagian layanan (services)
- Testimoni klien
- Tim perusahaan
- Galeri klien/brand
- Form kontak
- Form newsletter
- Tombol WhatsApp dan scroll-to-top

## Teknologi yang Digunakan

- HTML5
- CSS3 dengan variabel CSS
- JavaScript ES6+ dengan pendekatan modular
- Font Awesome untuk ikon
- ScrollReveal untuk animasi scroll
- Web3Forms untuk handling form

## Cara Menjalankan

1. Clone repositori ini
2. Buka file `src/pages/index.html` di browser Anda

## Pengembangan

Proyek ini menggunakan pendekatan modular untuk memudahkan pengembangan dan pemeliharaan:

- **CSS**: Setiap komponen memiliki file CSS sendiri di folder `src/css/components/`
- **JavaScript**: Setiap komponen memiliki file JavaScript sendiri di folder `src/js/components/`
- **HTML**: Halaman-halaman terpisah di folder `src/pages/`

## Kontribusi

1. Fork repositori
2. Buat branch fitur (`git checkout -b feature/fitur-baru`)
3. Commit perubahan Anda (`git commit -m 'Menambahkan fitur baru'`)
4. Push ke branch (`git push origin feature/fitur-baru`)
5. Buat Pull Request

## Lisensi

Hak Cipta © 2023 StraightUp Digital Agency. Semua hak dilindungi undang-undang. 