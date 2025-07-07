module.exports = {
  darkMode: 'class', // atau 'media' jika ingin pakai preferensi sistem
  // ...
}

document.getElementById("darkModeToggle").addEventListener("click", function() {
  document.documentElement.classList.toggle("dark");
});
