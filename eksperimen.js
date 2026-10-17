// BAGIAN 7.1: TEBAK DAHULU, LALU BANDINGKAN DENGAN HASIL CONSOLE
// Potongan A, tebakan sesuai urutan console.log:
// 9, "KOPI", 3, "bonana", "bonono", 42, NaN, 3, "string", "0.30", "1010", true.
console.log("  Hai Kawan  ".trim().length);
console.log("Kopi Susu".toUpperCase().slice(0, 4));
console.log("a,b,c".split(",").length);
console.log("banana".replace("a", "o"));
console.log("banana".replaceAll("a", "o"));
console.log(parseInt("42px"));
console.log(Number("42px"));
console.log(parseInt("3.99"));
console.log(typeof (3.14159).toFixed(2));
console.log((0.1 + 0.2).toFixed(2));
console.log("10" + 5 * 2);
console.log(!0 && !"");
// Hasil asli Potongan A sama dengan semua tebakan di atas.

// Potongan B, tebakan sebelum dijalankan:
// [20, 30], [20, 30], [10, 40], 10, undefined, 2, true,
// lalu key toko: nama, stok, jual.
let angka = [10, 20, 30, 40];
let potongan = angka.slice(1, 3);
let hapus = angka.splice(1, 2);
console.log(potongan);
console.log(hapus);
console.log(angka);

function ganda(n) {
  return n * 2;
}
function cetak(n) {
  console.log(n * 2);
}
console.log(ganda(4) + ganda(1));
console.log(cetak(4));

const toko = {
  nama: "Senja",
  stok: 5,
  jual(n) {
    this.stok -= n;
    return this.stok;
  },
};
toko.jual(2);
console.log(toko.jual(1));
console.log("stok" in toko);
for (let k in toko) {
  console.log(k);
}
// Hasil asli: irisan [20, 30], elemen dihapus [20, 30], angka [10, 40],
// 10, lalu cetak(4) mencetak 8 dari dalam function dan undefined dari return.
// Saldo stok menjadi 2; property stok ada; key yang tercetak ialah nama, stok, jual.

// Potongan C, tebakan:
// hasil "134"; kali 6; x 5; lalu Aa, Bb, Cc.
let hasil = "";
for (let i = 1; i <= 6; i++) {
  if (i === 2) {
    continue;
  }
  if (i === 5) {
    break;
  }
  hasil += i;
}
console.log(hasil);

let n = 3;
let kali = 1;
while (n > 0) {
  kali *= n;
  n--;
}
console.log(kali);

let x = 0;
do {
  x += 5;
} while (x < 3);
console.log(x);

for (let huruf of "ABC") {
  console.log(huruf + huruf.toLowerCase());
}
// Hasil asli Potongan C sama dengan tebakan di atas.

