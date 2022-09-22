const prompt = require("prompt-sync")();

function segitiga(baris) {
  let hasil = "";
  for (let i = baris; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      (hasil += j), i;
    }
    hasil += "\n";
  }
  return hasil;
}

const printSegitiga = prompt("Masukan Angka : ");
function validasi(num) {
  let validasiAngka = /^[0-9]+$/;
  if (num.match(validasiAngka)) {
    return segitiga(num);
  } else {
    const printSegitiga = prompt("Angka Harus Bersifat Number : ");
    if (printSegitiga.match(validasiAngka)) {
      return segitiga(printSegitiga);
    }
    return "ERROR!! SILAHKAN JALANKAN ULANG PROGRAM!!!";
  }
}
console.log(validasi(printSegitiga));
