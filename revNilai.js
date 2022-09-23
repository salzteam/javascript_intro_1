function rata(a, b, c, d) {
  if (
    typeof a == "number" &&
    typeof b == "number" &&
    typeof c == "number" &&
    typeof d == "number"
  ) {
    if (a >= 0 && b >= 0 && c >= 0 && d >= 0) {
      const nilai = a + b + c + d;
      const hasil = nilai / 4;
      let grade = "";
      if (hasil >= 90) grade = "A";
      else if (hasil >= 80) grade = "B";
      else if (hasil >= 70) grade = "C";
      else if (hasil >= 60) grade = "D";
      else if (hasil <= 59) grade = "E";
      return `Rata - Rata : ${hasil}
          Grade = ${grade}`;
    } else {
      return "Data Tidak Boleh Minus!!!";
    }
  } else {
    return "Data Harus Number!!!";
  }
}
console.log(rata(100, 100, 100, 100));
