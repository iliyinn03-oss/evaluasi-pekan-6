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

// BAGIAN 3: MESIN KASIR
const kasir = {
  menu: menu,
  saldoKas: 0,
  riwayat: [],
  pecahan: [50000, 20000, 10000, 5000, 2000, 1000],

  cariMenu(nama) {
    for (const item of this.menu) {
      if (item.nama.toLowerCase() === nama.toLowerCase()) {
        return item;
      }
    }
    return null;
  },

  hitungSubtotal(pesanan) {
    let subtotal = 0;
    const itemValid = [];
    const itemTidakValid = [];
    const jumlahDipesan = {};

    for (const pesananItem of pesanan) {
      const itemMenu = this.cariMenu(pesananItem.menu);
      if (!itemMenu) {
        itemTidakValid.push({ menu: pesananItem.menu, alasan: "Menu tidak ditemukan" });
        continue;
      }
      if (pesananItem.jumlah <= 0) {
        itemTidakValid.push({ menu: pesananItem.menu, alasan: "Jumlah harus lebih dari 0" });
        continue;
      }

      const sudahDiminta = jumlahDipesan[itemMenu.nama] || 0;
      if (sudahDiminta + pesananItem.jumlah > itemMenu.stok) {
        itemTidakValid.push({ menu: pesananItem.menu, alasan: "Stok tidak cukup" });
        continue;
      }

      jumlahDipesan[itemMenu.nama] = sudahDiminta + pesananItem.jumlah;
      itemValid.push({
        menu: itemMenu.nama,
        jumlah: pesananItem.jumlah,
        harga: itemMenu.harga,
      });
      subtotal += itemMenu.harga * pesananItem.jumlah;
    }

    return { subtotal, itemValid, itemTidakValid };
  },

  hitungPromoHari(hari) {
    let promo;
    switch (hari) {
      case "jumat":
        promo = 3000;
        break;
      case "sabtu":
      case "minggu":
        promo = 5000;
        break;
      default:
        promo = 0;
        break;
    }
    return promo;
  },

  hitungDiskon(subtotal, persenVoucher) {
    let persenSubtotal;
    if (subtotal >= 100000) {
      persenSubtotal = 15;
    } else if (subtotal >= 50000) {
      persenSubtotal = 10;
    } else if (subtotal >= 25000) {
      persenSubtotal = 5;
    } else {
      persenSubtotal = 0;
    }
    return Math.round(subtotal * Math.max(persenSubtotal, persenVoucher) / 100);
  },

  hitungPajak(nilai, tarif = 0.11) {
    return Math.round(nilai * tarif);
  },

  hitungKembalianPecahan(kembalian) {
    if (kembalian < 0) {
      return null;
    }

    let sisa = kembalian;
    const rincian = {};
    for (const pecahan of this.pecahan) {
      let jumlahLembar = 0;
      while (sisa >= pecahan) {
        sisa -= pecahan;
        jumlahLembar++;
      }
      if (jumlahLembar > 0) {
        rincian[pecahan] = jumlahLembar;
      }
    }
    rincian.sisa = sisa;
    return rincian;
  },

  prosesTransaksi(trx) {
    const tolak = (alasan) => {
      const hasilDitolak = {
        kode: trx.kode,
        pelanggan: trx.pelanggan,
        status: "DITOLAK",
        alasan,
      };
      this.riwayat.push(hasilDitolak);
      return hasilDitolak;
    };

    if (!trx.pelanggan) {
      return tolak("Nama pelanggan kosong");
    }
    if (!trx.pesanan.length) {
      return tolak("Pesanan kosong");
    }

    const { subtotal, itemValid, itemTidakValid } = this.hitungSubtotal(trx.pesanan);
    if (!itemValid.length) {
      return tolak("Tidak ada item valid");
    }

    const promoHari = this.hitungPromoHari(trx.hari);
    const diskon = this.hitungDiskon(subtotal, trx.persenVoucher);
    const nilaiSetelahDiskon = Math.max(0, subtotal - diskon - promoHari);
    const pajak = this.hitungPajak(nilaiSetelahDiskon);
    const total = nilaiSetelahDiskon + pajak;
    const kembalian = trx.uangBayar - total;
    const status = trx.uangBayar >= total ? "LUNAS" : "KURANG";
    let pecahanKembalian = null;

    if (status === "LUNAS") {
      for (const item of itemValid) {
        const itemMenu = this.cariMenu(item.menu);
        itemMenu.stok -= item.jumlah;
      }
      this.saldoKas += total;
      pecahanKembalian = this.hitungKembalianPecahan(kembalian);
    }

    const hasil = {
      kode: trx.kode,
      pelanggan: trx.pelanggan,
      status,
      subtotal,
      promoHari,
      diskon,
      pajak,
      total,
      uangBayar: trx.uangBayar,
      kembalian,
      pecahanKembalian,
      itemValid,
      itemTidakValid,
    };
    this.riwayat.push(hasil);
    return hasil;
  },

  cetakStruk(hasil) {
    console.log(`\n===== STRUK ${hasil.kode} =====`);
    console.log(`Pelanggan: ${hasil.pelanggan || "(kosong)"}`);
    if (hasil.status === "DITOLAK") {
      console.log(`Transaksi ditolak: ${hasil.alasan}`);
      console.log("===========================");
      return;
    }

    console.log("Item valid:");
    for (let i = 0; i < hasil.itemValid.length; i++) {
      const item = hasil.itemValid[i];
      console.log(`${i + 1}. ${item.menu} x${item.jumlah} @ ${formatRupiah(item.harga)}`);
    }
    if (hasil.itemTidakValid.length) {
      console.log("Item tidak valid:");
      for (const item of hasil.itemTidakValid) {
        console.log(`- ${item.menu}: ${item.alasan}`);
      }
    }
    console.log(`Subtotal: ${formatRupiah(hasil.subtotal)}`);
    console.log(`Promo hari: ${formatRupiah(hasil.promoHari)}`);
    console.log(`Diskon: ${formatRupiah(hasil.diskon)}`);
    console.log(`Pajak: ${formatRupiah(hasil.pajak)}`);
    console.log(`Total: ${formatRupiah(hasil.total)}`);
    console.log(`Uang bayar: ${formatRupiah(hasil.uangBayar)}`);
    console.log(`Kembalian: ${formatRupiah(hasil.kembalian)}`);
    console.log(`Status: ${hasil.status}`);
    if (hasil.pecahanKembalian) {
      console.log("Pecahan kembalian:", hasil.pecahanKembalian);
    }
    console.log("===========================");
  },
};

git 