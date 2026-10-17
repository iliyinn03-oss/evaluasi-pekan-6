function hitungFaktorial(n) {
  if (n < 0) {
    return null;
  }
  let hasil = 1;
  for (let i = 2; i <= n; i++) {
    hasil *= i;
  }
  return hasil;
}

function cekPalindrom(teks) {
  const bersih = teks.trim().toLowerCase();
  if (!bersih) {
    return false;
  }
  for (let kiri = 0, kanan = bersih.length - 1; kiri < kanan; kiri++, kanan--) {
    if (bersih[kiri] !== bersih[kanan]) {
      return false;
    }
  }
  return true;
}

function hitungVokal(teks) {
  let jumlah = 0;
  for (const huruf of teks.toLowerCase()) {
    if ("aiueo".includes(huruf)) {
      jumlah++;
    }
  }
  return jumlah;
}

function cariTerbesar(daftar) {
  if (daftar.length === 0) {
    return null;
  }
  let nilaiTerbesar = daftar[0];
  let indeksTerbesar = 0;
  for (let i = 1; i < daftar.length; i++) {
    if (daftar[i] > nilaiTerbesar) {
      nilaiTerbesar = daftar[i];
      indeksTerbesar = i;
    }
  }
  return { nilai: nilaiTerbesar, indeks: indeksTerbesar };
}

function hapusDuplikat(daftar) {
  const hasil = [];
  for (const nilai of daftar) {
    if (!hasil.includes(nilai)) {
      hasil.push(nilai);
    }
  }
  return hasil;
}

function cekBilanganPrima(n) {
  if (n < 2) {
    return false;
  }
  for (let pembagi = 2; pembagi <= Math.sqrt(n); pembagi++) {
    if (n % pembagi === 0) {
      return false;
    }
  }
  return true;
}

console.log("hitungFaktorial:", [5, 0, 1, -3].map((n) => [n, hitungFaktorial(n)]));
console.log("cekPalindrom:", ["Katak", " Malam ", "Kopi", ""].map((teks) => [teks, cekPalindrom(teks)]));
console.log("hitungVokal:", ["Kedai Senja", "RHYTHM", "Aiueo"].map((teks) => [teks, hitungVokal(teks)]));
for (const daftar of [[12, 45, 7, 45, 30], [3], []]) {
  console.log("cariTerbesar:", daftar, "→", cariTerbesar(daftar));
}

const daftarAsliAngka = [1, 2, 2, 3, 1];
console.log("hapusDuplikat:", hapusDuplikat(daftarAsliAngka), "| array asli:", daftarAsliAngka);
console.log("hapusDuplikat:", hapusDuplikat(["a", "b", "a"]));
console.log("hapusDuplikat:", hapusDuplikat([]));
for (const n of [2, 17, 15, 1, 0]) {
  console.log("cekBilanganPrima:", n, "→", cekBilanganPrima(n));
}


/*
  Langkah demi langkah hitungFaktorial(5):
  hasil mulai 1; i=2 menghasilkan 2; i=3 menghasilkan 6; i=4 menghasilkan 24;
  i=5 menghasilkan 120; loop berhenti ketika i menjadi 6 dan function mengembalikan 120.
  hapusDuplikat membaca array asli saja dan menambahkan nilai baru ke array hasil.
  includes dipilih karena langsung menjawab apakah nilai sudah pernah ditambahkan.
  cekBilanganPrima memakai break? Tidak, return false langsung mengakhiri function
  ketika ditemukan pembagi. Tanpa penghentian awal, jawaban tetap benar tetapi loop
  akan terus menguji pembagi yang tidak diperlukan.
  cariTerbesar([]) mengembalikan null karena tidak ada nilai/indeks terbesar; 0 akan
  salah memberi kesan bahwa ada nilai nol di array.
  hitungFaktorial memakai for karena batas putaran diketahui; hitungVokal memakai
  for...of karena ingin memeriksa tiap karakter tanpa mengelola indeks.
*/
