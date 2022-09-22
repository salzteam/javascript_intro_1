const mtk = 80;
const bahasaindonesia = 88;
const bahasainggris = 87;
const ipa = 94;

function rata(a, b, c, d) {
  nilai = a + b + c + d;
  hasil = nilai / 4;
  return hasil;
}

function grade(nilai) {
  if (nilai >= 90) return "A";
  if (nilai >= 80) return "B";
  if (nilai >= 70) return "C";
  if (nilai >= 60) return "D";
  if (nilai <= 59) return "E";
}

const hasilrat = rata(mtk, bahasaindonesia, bahasainggris, ipa);
const hasilgrade = grade(hasilrat);
console.log(`Rata - Rata = ${hasilrat}
Grade = ${hasilgrade}`);
