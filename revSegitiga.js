const prompt = require("prompt-sync")();
const inputUser = prompt("Masukan Angka : ");

function cekValidasi(intval) {
  let validasiAngka = /^[0-9]+$/;
  if (intval.match(validasiAngka)) {
    let valid = true;
    return valid;
  } else {
    const inputUser = prompt("Angka Harus Bersifat Number : ");
    if (inputUser.match(validasiAngka)) {
      let valid = true;
      return valid;
    } else {
      let valid = false;
      return valid;
    }
  }
}

function segitiga(input) {
  let val = cekValidasi(input);
  let hasil = "";
  if (val === true) {
    for (let i = input; i >= 1; i--) {
      for (let j = 1; j <= i; j++) {
        (hasil += j), i;
      }
      hasil += "\n";
    }
    return hasil;
  } else if (val === false) {
    return "ERROR!! SILAHKAN JALANKAN ULANG PROGRAM!!!";
  }
}
console.log(segitiga(inputUser));
