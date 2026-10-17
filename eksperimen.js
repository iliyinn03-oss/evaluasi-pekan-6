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

// BAGIAN 7.2: EKSPERIMEN
console.log("Declaration sebelum definisi:", deklarasiBisaDiangkat());
function deklarasiBisaDiangkat() {
  return "function declaration";
}

const functionExpression = function () {
  return "function expression";
};
console.log("Function expression setelah inisialisasi:", functionExpression());
// Jika dipindah sebelum deklarasi const, pesan: ReferenceError:
// Cannot access 'functionExpression' before initialization.
// console.log(functionExpression());

const arrayPercobaan = [1, 2, 3, 4];
const hasilSlice = arrayPercobaan.slice(1, 3);
console.log("slice:", hasilSlice, "| asli:", arrayPercobaan);
const hasilSplice = arrayPercobaan.splice(1, 2);
console.log("splice:", hasilSplice, "| array sesudah splice:", arrayPercobaan);

const hurufArray = ["a", "b", "c"];
for (const indeks in hurufArray) {
  console.log("for...in indeks (teks):", indeks, typeof indeks);
}
for (const nilai of hurufArray) {
  console.log("for...of nilai:", nilai);
}

const gabunganToFixed = (5).toFixed(1) + 1;
console.log("(5).toFixed(1):", (5).toFixed(1), typeof (5).toFixed(1));
console.log("(5).toFixed(1) + 1:", gabunganToFixed);

const nilaiFalsy = [false, 0, "", null, undefined, NaN];
for (const nilai of nilaiFalsy) {
  if (nilai) {
    console.log("Falsy masuk if:", nilai);
  } else {
    console.log("Falsy tidak masuk if:", String(nilai));
  }
}
const nilaiTruthy = ["0", [], {}];
for (const nilai of nilaiTruthy) {
  if (nilai) {
    console.log("Truthy masuk if:", nilai);
  }
}

/*
  BAGIAN 7.3: JELASKAN
  - Dalam "10" + 5 * 2, perkalian dikerjakan lebih dahulu: 5 * 2 menjadi 10.
    Kemudian + bertemu string, maka angka 10 dikonversi ke teks dan digabung menjadi "1010".
  - slice menghasilkan array baru tanpa mengubah angka; splice menghapus elemen dari
    array asli dan sekaligus mengembalikan elemen yang terhapus. Karena dipanggil setelah
    slice, kedua hasil berisi [20, 30], tetapi angka akhirnya [10, 40].
  - cetak(4) menjalankan console.log internal yang mencetak 8. Function tidak punya
    return, jadi hasil pemanggilan adalah undefined dan console.log luar mencetaknya.
  - Pada Potongan C: i=1 ditambahkan; i=2 dilewati oleh continue; i=3 ditambahkan;
    i=4 ditambahkan; i=5 menghentikan loop dengan break sebelum ditambahkan; i=6 tak
    pernah dijalankan. Maka hasilnya "134".
  - do...while menjalankan blok dahulu, baru memeriksa kondisi. x berubah dari 0 ke 5,
    lalu x < 3 false sehingga loop berhenti setelah satu putaran.
*/
