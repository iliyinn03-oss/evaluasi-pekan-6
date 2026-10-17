const TARIF_PAJAK = 0.11;
const harga = { kopi: 20000, teh: 7500, roti: 15000 };
let keranjang = ["kopi", "teh", "roti", "teh"];
let jumlahMember = "5";

const pelanggan = {
  nama: "rina",
  saldo: 100000,
  bayar(jumlah) {
    // FIX: 1. saldo adalah property pelanggan, sehingga harus diakses melalui this.
    this.saldo -= jumlah;
    return this.saldo;
  },
};

let subtotal = 0;
// FIX: 2. Batas loop harus < length, bukan <= length.
for (let i = 0; i < keranjang.length; i++) {
  // FIX: 3. Loop yang benar mencegah pembacaan indeks di luar array (undefined).
  subtotal += harga[keranjang[i]];
}

let persen;
// FIX: 4. Ambang yang lebih tinggi harus diperiksa lebih dahulu agar diskon 10% tercapai.
if (subtotal >= 50000) {
  persen = 10;
} else if (subtotal >= 25000) {
  persen = 5;
} else {
  persen = 0;
}
let diskon = (subtotal * persen) / 100;

let hari = "jumat";
let promo;
switch (hari) {
  case "jumat":
    promo = 3000;
    // FIX: 5. break mencegah promo Jumat jatuh ke case Sabtu/Minggu.
    break;
  case "sabtu":
  case "minggu":
    promo = 5000;
    break;
  default:
    promo = 0;
}

// FIX: 6. Seluruh nilai setelah diskon/promo dikenai pajak, jadi perkalian harus dikelompokkan.
let pajak = (subtotal - diskon - promo) * TARIF_PAJAK;
let total = subtotal - diskon - promo + pajak;

let uangBayarTeks = "100.000";
// FIX: 7. Hapus titik ribuan sebelum konversi angka.
let uangBayar = Number(uangBayarTeks.replaceAll(".", ""));
let kembalian = uangBayar - total;

let status;
// FIX: 8. Perbandingan >= tidak mengubah uangBayar dan memeriksa kecukupan pembayaran.
if (uangBayar >= total) {
  status = "Lunas";
} else {
  status = "Kurang";
}

// FIX: 9. slice(1) mengambil karakter setelah huruf pertama untuk kapitalisasi awal.
let namaRapi = pelanggan.nama.slice(0, 1).toUpperCase() + pelanggan.nama.slice(1);

// FIX: 10. splice menghapus "teh" pertama dari array asli; slice hanya membuat irisan.
keranjang.splice(1, 1);
// FIX: 11. push menambahkan "air" di akhir array.
keranjang.push("air");

// FIX: 12. jumlahMember berupa teks, jadi ubah dahulu menjadi angka agar penjumlahan aritmetika.
let jumlahMemberBaru = Number(jumlahMember) + 1;

// FIX: 13. toFixed menghasilkan string, jadi Number diperlukan sebelum menambahkan angka 10.
let rataRata = Number((total / 4).toFixed(2));
let rataRataTotal = rataRata + 10;

function formatRupiah(angka) {
  // FIX: 14. return mengirim teks format kepada pemanggil function.
  return "Rp " + angka;
}

console.log(subtotal, diskon, promo, pajak, total);
console.log(uangBayar, kembalian, status);
console.log(namaRapi);
console.log(keranjang);
console.log(jumlahMemberBaru);
console.log(rataRataTotal);
console.log(formatRupiah(kembalian));
console.log(pelanggan.bayar(30000));
// FIX: 15. Object harga bukan iterable; for...in menelusuri nama property-nya.
for (let kunci in harga) {
  console.log(kunci + ": " + harga[kunci]);
}

/*
  Catatan Bug:
  1. Menghentikan program dengan ReferenceError: saldo tanpa this merujuk variabel yang tidak ada
     (saat method dipanggil akan menjadi ReferenceError; program berhenti).
  2. Tidak error tetapi hasil salah: <= menjalankan satu putaran tambahan.
  3. Tidak error tetapi hasil salah: putaran tambahan membaca keranjang[length] yang undefined.
  4. Tidak error tetapi hasil salah: syarat >=25000 menangkap subtotal 50000 lebih dahulu.
  5. Tidak error tetapi hasil salah: fall-through membuat promo Jumat tertimpa 5000.
  6. Tidak error tetapi hasil salah: tanpa tanda kurung pajak hanya dikenakan pada promo.
  7. Tidak error tetapi hasil salah: parseInt("100.000") membaca prefix 100.
  8. Tidak error tetapi hasil salah: = menetapkan total ke uangBayar dan mengecek truthy,
     bukan membandingkan apakah uangBayar mencukupi total.
  9. Tidak error tetapi hasil salah: slice(0) menambahkan nama dari karakter pertama lagi.
  10. Tidak error tetapi hasil salah: slice tidak mengubah array keranjang.
  11. Tidak error tetapi hasil salah: unshift menambahkan "air" di awal, bukan di akhir.
  12. Tidak error tetapi hasil salah: string "5" + angka 1 menghasilkan "51".
  13. Tidak error tetapi hasil salah: string hasil toFixed digabung dengan 10, bukan dijumlahkan.
  14. Tidak error tetapi hasil salah: function selesai dengan nilai undefined karena return hilang.
  15. Menghentikan program dengan TypeError: object harga bukan iterable untuk for...of.

  Lima belas perbaikan menandai setiap perilaku salah yang tampak, termasuk dua akibat
  berbeda dari loop berlebih: iterasi ekstra dan pembacaan keranjang[length].

  if (uangBayar = total) tidak error karena assignment adalah ekspresi JavaScript yang
  menghasilkan nilai yang ditetapkan; uangBayar akan berubah menjadi total. parseInt
  membaca bilangan bulat dari awal teks dan berhenti pada titik, sehingga "100.000"
  dibaca sebagai 100; titik ribuan harus dihapus sebelum konversi.
*/
