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

const luasPersegiPanjang = (p, l) => {
  console.log(p * l);
};

luasPersegiPanjang(x, y);

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

// 6. Object Product
let products = [
  {
    id: 1,
    name: "Baju",
    description: "Baju dengan kualitas terbaik dan harga yang murah!",
    stock: 5,
    price: 80000,
    discount: 0, //Percent
    image:
      "https://plus.unsplash.com/premium_photo-1668319915454-ee79c9f81f5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRocmlmdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    detail: {
      comments: [
        {
          name: "User 1",
          comment: "Ini barang bagus",
          date: "13-04-2023",
        },
        {
          name: "User 2",
          comment: "Ini barang bagus banget cuy",
          date: "23-04-2023",
        },
      ],
      rating: 4,
      sold: 23,
    },
  },
  {
    id: 2,
    name: "Celana",
    description: "Celana dengan kualitas terbaik dan harga yang murah!",
    stock: 5,
    price: 50000,
    discount: 10, //Percent
    image:
      "https://images.unsplash.com/photo-1619100653891-0d77b39a5751?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHRocmlmdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    detail: {
      comments: [
        {
          name: "User 1",
          comment: "Ini barang bagus",
          date: "13-04-2023",
        },
        {
          name: "User 2",
          comment: "Ini barang bagus banget cuy",
          date: "23-04-2023",
        },
      ],
      rating: 5,
      sold: 20,
    },
  },
  {
    id: 3,
    name: "Topi",
    description: "Topi dengan kualitas terbaik dan harga yang murah!",
    stock: 10,
    price: 20000,
    discount: 0, //Percent
    image:
      "https://images.unsplash.com/photo-1615206036726-b7eba69bfb4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHRocmlmdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    detail: {
      comments: [
        {
          name: "User 1",
          comment: "Ini barang bagus",
          date: "13-04-2023",
        },
      ],
      rating: 4.4,
      sold: 10,
    },
  },
  {
    id: 4,
    name: "Sweater",
    description: "Sweater dengan kualitas terbaik dan harga yang murah!",
    stock: 14,
    price: 120000,
    discount: 0, //Percent
    image:
      "https://images.unsplash.com/photo-1598137203988-80de6392fc1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHRocmlmdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    detail: {
      comments: [
        {
          name: "User 1",
          comment: "Ini barang bagus",
          date: "13-04-2023",
        },
        {
          name: "User 2",
          comment: "Ini barang bagus",
          date: "13-04-2023",
        },
      ],
      rating: 4.9,
      sold: 5,
    },
  },
  {
    id: 5,
    name: "Jaket",
    description: "Jaket dengan kualitas terbaik dan harga yang murah!",
    stock: 14,
    price: 200000,
    discount: 30, //Percent
    image:
      "https://images.unsplash.com/photo-1560095275-b6fe3ebb506d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRocmlmdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    detail: {
      comments: [
        {
          name: "User 1",
          comment: "Ini barang bagus",
          date: "13-04-2023",
        },
        {
          name: "User 2",
          comment: "Ini barang bagus bangettt",
          date: "13-04-2023",
        },
      ],
      rating: 5,
      sold: 24,
    },
  },
];
console.log(products);
