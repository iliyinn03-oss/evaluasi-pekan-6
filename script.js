/*
  Nama: Illiyin Auro
  Tanggal: 17 Oktober 2026
  Tujuan: Membersihkan data formulir Kedai Senja, memproses transaksi,
  menghitung pembayaran, dan membuat laporan penjualan harian.
*/
 // BAGIAN 2: DATA DAN PEMBERSIHAN DATA
const kedai = {
  nama: "Kedai Senja",
  pemilik: "Illiyin Auro",
  kota: "Yogyakarta",
  tahunBerdiri: 2022,
  sedangBuka: true,
  nomorWhatsApp: "6281234567890",
  website: null,
  jamOperasional: {
    buka: "08:00",
    tutup: "22:00",
  },
};

const menu = [
  { nama: "Kopi Susu", kategori: "Minuman", harga: 18000, stok: 20 },
  { nama: "Es Teh", kategori: "Minuman", harga: 7500, stok: 30 },
  { nama: "Roti Bakar", kategori: "Makanan", harga: 15000, stok: 12 },
  { nama: "Nasi Goreng", kategori: "Makanan", harga: 22000, stok: 10 },
  { nama: "Jus Jeruk", kategori: "Minuman", harga: 12000, stok: 8 },
  { nama: "Kentang Goreng", kategori: "Camilan", harga: 14000, stok: 15 },
  { nama: "Pisang Goreng", kategori: "Camilan", harga: 10000, stok: 0 },
  { nama: "Teh Lemon", kategori: "Minuman", harga: 11000, stok: 9 },
];

const transaksiMentah = [
  {
    kode: "trx-001",
    pelanggan: " rINA   WULANDARI ",
    hari: " JUMAT ",
    uangBayar: "150.000",
    voucher: " diskon10 ",
    pesanan: [
      { menu: " kopi SUSU ", jumlah: "2" },
      { menu: "es teh", jumlah: "1" },
    ],
  },
  {
    kode: "trx-002",
    pelanggan: " budi santoso ",
    hari: "Sabtu",
    uangBayar: "50.000",
    voucher: "",
    pesanan: [
      { menu: "roti bakar", jumlah: "2" },
      { menu: "menu rahasia", jumlah: "1" },
    ],
  },
  {
    kode: "trx-003",
    pelanggan: "SARI   DEWI",
    hari: "Rabu",
    uangBayar: "100000",
    voucher: "DISKON15",
    pesanan: [{ menu: "nasi goreng", jumlah: "2" }],
  },
  {
    kode: "trx-004",
    pelanggan: " agus ",
    hari: "MINGGU",
    uangBayar: "10.000",
    voucher: "promo5",
    pesanan: [{ menu: "es teh", jumlah: "2" }],
  },
  {
    kode: "trx-005",
    pelanggan: "   ",
    hari: "Kamis",
    uangBayar: "50000",
    voucher: "diskon10",
    pesanan: [{ menu: "kopi susu", jumlah: "1" }],
  },
  {
    kode: "trx-006",
    pelanggan: "Maya Putri",
    hari: "Senin",
    uangBayar: "25000",
    voucher: "",
    pesanan: [],
  },
];

function bersihkanNama(teks) {
  return teks
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase()
    .replace(/\b\p{L}/gu, (huruf) => huruf.toUpperCase());
}

const ubahKeAngka = function (teks) {
  const angka = Number(teks.replaceAll(".", "").replaceAll(" ", ""));
  return Number.isFinite(angka) ? angka : 0;
};

const ambilPersenVoucher = (kode) => {
  const kodeBersih = kode.trim().toUpperCase();
  if (!kodeBersih.startsWith("DISKON")) {
    return 0;
  }
  const persen = Number(kodeBersih.slice("DISKON".length));
  return Number.isFinite(persen) ? persen : 0;
};

function formatRupiah(angka) {
  const nilaiBulat = Math.round(angka);
  const teksAngka = String(Math.abs(nilaiBulat));
  let hasil = "";

  for (let i = 0; i < teksAngka.length; i++) {
    if (i > 0 && (teksAngka.length - i) % 3 === 0) {
      hasil += ".";
    }
    hasil += teksAngka[i];
  }

  return `Rp ${nilaiBulat < 0 ? "-" : ""}${hasil}`;
}

console.log("Uji function pembersih (input → hasil):");
const ujiNama = ["  rina   WULANDARI ", "", "  kopi SUSU  "];
for (const input of ujiNama) {
  console.log(JSON.stringify(input), "→", JSON.stringify(bersihkanNama(input)));
}
const ujiAngka = ["150.000", "75000", "abc"];
for (const input of ujiAngka) {
  console.log(JSON.stringify(input), "→", ubahKeAngka(input));
}
const ujiVoucher = [" diskon10 ", "PROMO5", ""];
for (const input of ujiVoucher) {
  console.log(JSON.stringify(input), "→", ambilPersenVoucher(input));
}
for (const input of [1250000, 500, 0]) {
  console.log(input, "→", formatRupiah(input));
}

const transaksiBersih = [];
for (const transaksi of transaksiMentah) {
  const pesananBersih = [];
  for (const item of transaksi.pesanan) {
    pesananBersih.push({
      menu: bersihkanNama(item.menu),
      jumlah: ubahKeAngka(item.jumlah),
    });
  }

  transaksiBersih.push({
    kode: transaksi.kode.toUpperCase(),
    pelanggan: bersihkanNama(transaksi.pelanggan),
    hari: transaksi.hari.trim().replace(/\s+/g, " ").toLowerCase(),
    uangBayar: ubahKeAngka(transaksi.uangBayar),
    persenVoucher: ambilPersenVoucher(transaksi.voucher),
    pesanan: pesananBersih,
  });
}

console.log("\nTransaksi bersih:", transaksiBersih);

/*
  Jawaban bagian 2:
  - parseInt membaca bilangan bulat dari awal teks; parseFloat membaca bilangan
    desimal; Number mengubah seluruh teks menjadi angka dan menolak teks tambahan.
  - Titik pada "150.000" adalah pemisah ribuan, bukan tanda desimal. Titik harus
    dihapus dahulu agar Number menghasilkan 150000. parseInt("150.000") menghasilkan 150.
  - toFixed mengembalikan string. Contoh: typeof (12.3).toFixed(1) adalah "string".
    Karena itu "12.3" + 1 menghasilkan "12.31", bukan 13.3.
  - replace mengganti kecocokan pertama, sedangkan replaceAll mengganti semuanya.
    ubahKeAngka memakai replaceAll untuk membuang seluruh titik dan spasi.
  - toUpperCase menghasilkan string baru; string tidak berubah di tempat, jadi
    nilai asli kode tetap sama kecuali hasilnya disimpan kembali.
  - Declaration: bersihkanNama (dideklarasikan sebagai function dan cocok dipakai
    langsung sebagai helper bernama). Expression: ubahKeAngka (nilai function
    disimpan ke const). Arrow: ambilPersenVoucher (callback/proses pendek).
*/
