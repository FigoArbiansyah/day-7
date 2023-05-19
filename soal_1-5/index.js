// 1. Variabel Static
const x = 5;
const y = 2;

// result 7
console.log(x + y);

// 2. Variable dinamic
let name = "Figo";
name = name + " Arbiansyah";
console.log(name);

// 3. Proses Variable
console.log(
  "Nama saya " + name + ", dan saya berumur " + (x + y + 11) + " Tahun"
);

// 4. Mengisi Variable dan Proses
var a;
var b;

a = 1;
b = 2;
console.log(a);
console.log(b);

console.log(a != b ? "Wahh a nya bukan b" : "a adalah b");

// 5. Manipulasi array
const namaKu = "figo";
const namaKuKebalik = namaKu.split("").reverse().join("");

// result "ogif"
console.log(namaKuKebalik);
