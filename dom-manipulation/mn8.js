// MANIPULASI NODE
// membuat elemen baru
const pBaru = document.createElement("p");
const tekspBaru = document.createTextNode("Paragraf Baru");

//simpan tulisan kedalam paragraf
pBaru.appendChild(tekspBaru);

//simpan pBaru diakhir section A
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

// ----------------------- //

// menambahkan item baru diantara item 1 dan 2
const liBaru = document.createElement("li");
const teksliBaru = document.createTextNode("item baru");
liBaru.appendChild(teksliBaru);

const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");

ul.insertBefore(liBaru, li2);

// ----------------------- //

// mengganti tulisan paragraf 4 menjadi "judul baru"
const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

const h2Baru = document.createElement("h2");
const teksH2Baru = document.createTextNode("Judul Baru !");

h2Baru.appendChild(teksH2Baru);
sectionB.replaceChild(h2Baru, p4);

// ----------------------- //

//meremove node
const link = document.getElementsByTagName("a")[0];
sectionA.removeChild(link);

// ----------------------- //

// semua element yang telah dirubah diganti semua backgroundnya menjadi warna salmon
pBaru.style.backgroundColor = "salmon";
h2Baru.style.backgroundColor = "salmon";
liBaru.style.backgroundColor = "salmon";
