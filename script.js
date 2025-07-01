// Ini komentar di JavaScript

// 1. Variabel
//let nama = "Oka Ginting";
//let profesi = "Frontend Developer Pemula";
//let tahun = 2025;
//let alasan = "karena ingin jadi Web Developer remote";

// 2. Operator
//let usia = tahun - 1988; // misal kamu lahir 1988

// 3. Output ke layar
//alert("Halo, saya " + nama + ". Usia saya " + usia + " tahun.");
//alert(alasan)://

// Minta nama dari user
//let namaUser = prompt("Halo! Siapa nama kamu?");

// Fungsi untuk menyapa
//function sapaUser(nama) {
//  alert("Senang bertemu denganmu, " + nama + "!");
//}

// Panggil fungsi
//sapaUser(namaUser);

// Ambil elemen dengan id 'sapaan'
//let teks = document.getElementById("sapaan");

// Ubah teksnya
//teks.innerText = "Halo! Selamat datang di website Oka Ginting.";
window.onload = function() {
  //let teks = document.getElementById("sapaan");
  //teks.innerText = "Halo! Selamat datang di website Oka Ginting.";
let tahunSekarang = new Date().getFullYear();
let umur = tahunSekarang - 1988;
document.getElementById("umur").innerText = "Umur saya: " + umur + " tahun";
}
function ubahSapaan() {
  document.getElementById("sapaan").innerText = "Selamat datang kembali, Oka!";
}
// Tunggu sampai semua elemen dimuat
window.onload = function () {
  const btnPendidikan = document.getElementById("togglePendidikan");
  const btnKeahlian = document.getElementById("toggleKeahlian");

  const sectionPendidikan = document.getElementById("pendidikanSection");
  const sectionKeahlian = document.getElementById("keahlianSection");

  // Awal: tampilkan semua
  sectionPendidikan.style.display = "block";
  sectionKeahlian.style.display = "block";

  // Fungsi toggle + ubah teks tombol
  btnPendidikan.addEventListener("click", function () {
    const visible = sectionPendidikan.style.display === "block";
    sectionPendidikan.style.display = visible ? "none" : "block";
    btnPendidikan.innerText = visible ? "Tampilkan Pendidikan" : "Sembunyikan Pendidikan";
  });

  btnKeahlian.addEventListener("click", function () {
    const visible = sectionKeahlian.style.display === "block";
    sectionKeahlian.style.display = visible ? "none" : "block";
    btnKeahlian.innerText = visible ? "Tampilkan Keahlian" : "Sembunyikan Keahlian";
  });

  // Inisialisasi teks tombol
  btnPendidikan.innerText = "Sembunyikan Pendidikan";
  btnKeahlian.innerText = "Sembunyikan Keahlian";
};

