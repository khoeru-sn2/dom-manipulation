//contoh penggunaan set.attribute

const judul = document.getElementsByTagName("h1")[0];
const a = document.querySelector("section#a a");

// buka console ketikan
a.setAttribute("id", "link");
// hasilnya akan menampilkan kata undifined tp nilainya sudah tersimpan dimemori

// mengetahui isi attribute
a.getAttribute("href");
// hasilnya akan menampilkan link intagram pak sandika

judul.getAttribute("id");
// hasilnya akan menampilkan tulisan 'judul'
