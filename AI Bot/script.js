function getResponse() {
  var input = document.getElementById("input").value;
  var output = document.getElementById("output");
  var provinceImage = document.getElementById("provinceImage");

  // Menyembunyikan gambar sebelumnya
  provinceImage.innerHTML = "";

  // Aturan-aturan sederhana berdasarkan input pengguna
  if (input.toLowerCase().indexOf("hai") !== -1) {
      output.innerHTML = "Halo! Apa kabar?";
  } else if (input.toLowerCase().indexOf("siapa nama kamu") !== -1) {
      output.innerHTML = "Nama saya Muhammad Choerul Akbar.";
  } else if (input.toLowerCase().indexOf("apa yang bisa kamu lakukan") !== -1|| input.toLowerCase().indexOf("kamu bisa apa?") !== -1) {
      output.innerHTML = "Saya adalah Program Kecerdasan Buatan Sederhana dan Bisa Memberikan Respon Berdasarkan Input Anda.";
  } else if (input.toLowerCase().indexOf("apakah kamu memiliki kelemahan?") !== -1) {
      output.innerHTML = "Saya Memiliki Kelemahan yakni tidak bisa menganalisa data.";
  } else if (input.toLowerCase().indexOf("sampai jumpa") !== -1) {
      output.innerHTML = "Sampai jumpa! Semoga Harimu Menyenangkan.";
  } else if (input.toLowerCase().indexOf("jakarta") !== -1 || input.toLowerCase().indexOf("dki") !== -1) {
      output.innerHTML = "Kerak telor, Soto Betawi.";
      // Menampilkan gambar Jakarta (dengan .png)
      provinceImage.innerHTML = "<img src='jakarta.png' alt='Jakarta' style='width:100%; border-radius:8px;'>";
  } else if (input.toLowerCase().indexOf("jawa barat") !== -1 || input.toLowerCase().indexOf("bandung") !== -1) {
      output.innerHTML = "Seblak,batagor.";
      // Menampilkan gambar Jawa Barat (dengan .png)
      provinceImage.innerHTML = "<img src='bandung.png' alt='Bandung' style='width:100%; border-radius:8px;'>";
  } else if (input.toLowerCase().indexOf("jawa tengah") !== -1 || input.toLowerCase().indexOf("semarang") !== -1) {
      output.innerHTML = "Lumpia Semarang, Tahu Gimbal.";
      // Menampilkan gambar Jawa Tengah (dengan .png)
      provinceImage.innerHTML = "<img src='semarang.png' alt='Semarang' style='width:100%; border-radius:8px;'>";
  } else if (input.toLowerCase().indexOf("yogyakarta") !== -1 || input.toLowerCase().indexOf("jogja") !== -1) {
      output.innerHTML = "Gudeg, Bakpia.";
      // Menampilkan gambar Yogyakarta (dengan .png)
      provinceImage.innerHTML = "<img src='jogja.png' alt='Yogyakarta' style='width:100%; border-radius:8px;'>";
  } else if (input.toLowerCase().indexOf("jawa timur") !== -1 || input.toLowerCase().indexOf("surabaya") !== -1) {
      output.innerHTML = "Rujak Cingur, Rawon.";
      // Menampilkan gambar Jawa Timur (dengan .png)
      provinceImage.innerHTML = "<img src='surabaya.png' alt='Surabaya' style='width:100%; border-radius:8px;'>";
  } else {
      output.innerHTML = "Maaf, saya tidak mengerti apa yang Anda maksud.";
  }

  // Mengosongkan input setelah submit
  document.getElementById("input").value = "";
}

// Event listener untuk enter
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
      e.preventDefault();
      getResponse();
  });
});
