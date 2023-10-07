function jalankanProgram() {
  // Penggunaan if, else, dan nested if
  var nilai = prompt("Masukan Nilai");
  if (nilai >= 80) {
    document.write("<br></br>");
    document.write("Selamat! Anda lulus dengan nilai A");
  } else if (nilai >= 70) {
    document.write("<br></br>");
    document.write("Anda lulus dengan nilai B");
    document.write("<br></br>");
  } else {
    document.write("Anda perlu belajar lebih keras. Anda mendapatkan nilai C");
  }

  // Penggunaan switch case
  var hari = prompt("Masukan Hari");
  switch (hari) {
    case "Senin":
      document.write("<br></br>");
      document.write("Hari ini adalah hari kerja.");
      break;
    case "Sabtu":
    case "Minggu":
      document.write("<br></br>");
      document.write("Hari ini adalah hari libur.");
      break;
    default:
      document.write("<br></br>");
      document.write("Hari ini adalah hari kerja.");
  }

  // Penggunaan for statement
  document.write("<br></br>");
  document.write("Perulangan dengan for:");
  for (var i = 1; i <= 5; i++) {
    document.write("<br></br>");
    document.write("Iterasi ke-" + i);
  }

  // Penggunaan while
  document.write("<br></br>");
  document.write("Perulangan dengan while:");
  var count = 0;
  while (count < 5) {
    document.write("<br></br>");
    document.write("Iterasi ke-" + count);
    count++;
  }

  // Penggunaan do while
  document.write("<br></br>");
  document.write("Perulangan dengan do while:");
  var angka = 1;
  do {
    document.write("<br></br>");
    document.write("Angka ke-" + angka);
    angka++;
  } while (angka <= 5);

  // Penggunaan function
  function tambah(a, b) {
    return a + b;
  }
  var hasil = tambah(3, 5);
  document.write("<br></br>");
  document.write("Hasil penambahan: " + hasil);
}
