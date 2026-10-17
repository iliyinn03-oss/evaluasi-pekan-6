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


