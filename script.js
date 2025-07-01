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
  let teks = document.getElementById("sapaan");
  teks.innerText = "Halo! Selamat datang di website Oka Ginting.";
let tahunSekarang = new Date().getFullYear();
let umur = tahunSekarang - 1988;
document.getElementById("umur").innerText = "Umur saya: " + umur + " tahun";
