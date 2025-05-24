// server.js
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

const infoToko = {
    namaToko: "APbakery",
    tagline: "Rasakan kenikmatan roti premium dengan kualitas terbaik",
    alamat: "Jl. Contoh No. 123, Kota contoh",
    telepon: "08123contoh",
    nomorWhatsAppInternasional: "628777777777"
};

// MODIFIKASI DATA PRODUK DI SINI UNTUK MENAMBAHKAN BADGE
const produkRoti = [
    {
        id: "roticokelat",
        nama: 'Roti Cokelat Klasik',
        deskripsi: 'Nikmati roti lembut dengan isian cokelat Belgia premium yang lumer di setiap gigitan.',
        harga: 'Rp 15.000',
        gambar: '/images/roticokelat.jpg',
        aosDelay: "0",
        tag: "BEST SELLER" // <-- Badge ditambahkan di sini
    },
    {
        id: "rotikeju",
        nama: 'Roti Keju Krimi',
        deskripsi: 'Roti dengan keju pilihan yang lumer dan memberikan rasa gurih yang memanjakan lidah.',
        harga: 'Rp 18.000',
        gambar: '/images/rotikeju.jpg',
        aosDelay: "100"
        // Tidak ada tag, jadi tidak ada badge untuk produk ini
    },
    {
        id: "rotialmond",
        nama: 'Roti Almond Panggang',
        deskripsi: 'Roti lembut bertabur almond premium, memberikan tekstur renyah dan rasa kacang yang nikmat.',
        harga: 'Rp 20.000',
        gambar: '/images/rotialmond.jpg',
        aosDelay: "200",
        tag: "BARU" // <-- Badge ditambahkan di sini
    },
    {
        id: "rotigandum",
        nama: 'Roti Gandum Sehat',
        deskripsi: 'Pilihan sehat dan lezat dengan serat tinggi dari gandum utuh, cocok untuk gaya hidup sehat Anda.',
        harga: 'Rp 16.000',
        gambar: '/images/rotigandum.jpg',
        aosDelay: "300",
        tag: "REKOMENDASI" // <-- Badge ditambahkan di sini
    },
    {
        id: "croissant",
        nama: 'Croissant Mentega',
        deskripsi: 'Pastri klasik Prancis yang renyah di luar dan lembut di dalam, sempurna untuk teman kopi atau teh Anda.',
        harga: 'Rp 12.000',
        gambar: '/images/croissant.jpg',
        aosDelay: "400"
        
    }
];

const testimonials = [ // Data testimonials tetap sama
    {
        kutipan: "Roti terenak yang pernah saya coba! Lembut dan manisnya pas.",
        nama: "anonim",
        kota: "kota A (contoh)"
    },
    {
        kutipan: "Aromanya langsung bikin lapar, dan rasanya nggak pernah gagal",
        nama: "AP",
        kota: "kota B"
    }
];

app.get('/', (req, res) => {
    res.render('pages/index', {
        infoToko: infoToko,
        produk: produkRoti, // Menggunakan produkRoti yang sudah dimodifikasi
        testimonials: testimonials,
        judulHalaman: 'Selamat Datang'
    });
});

app.get('/katalog', (req, res) => {
    res.render('pages/katalog', {
        infoToko: infoToko,
        produk: produkRoti, // Menggunakan produkRoti yang sudah dimodifikasi
        judulHalaman: 'Katalog Produk'
    });
});

app.listen(port, () => {
  
    console.log(`Server ${infoToko.namaToko} berjalan di http://localhost:${port} (dan siap untuk deployment di port ${port})`);
});