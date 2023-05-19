<template>
  <section class="min-h-screen flex md:p-20 max-md:px-5 max-md:py-20 flex-wrap">
    <div class="h-full md:w-1/2 w-full">
      <img :src="products?.image" alt="" class="w-full h-full object-cover" />
    </div>
    <div class="p-10 md:w-1/2 w-full">
      <div>
        <p class="text-2xl font-semibold font-serif">{{ products.name }}</p>
        <p class="text-gray-600">{{ products.description }}</p>
        <p class="text-end mt-2 text-gray-700">
          <span
            >Stok: <b class="text-red-500">{{ products.stock }}</b></span
          >
          &nbsp; - &nbsp;
          <span class="text-sky-500">{{ products.detail?.sold }} Terjual</span>
          &nbsp; - &nbsp;
          <span>{{ products.detail?.rating }} ⭐</span>
        </p>
      </div>
      <div v-if="products.discount == 0" class="mt-5">
        <p>Tak ada diskon</p>
        <p class="text-3xl font-bold font-mono">Rp. {{ products.price }}</p>
      </div>
      <div v-if="products.discount != 0" class="mt-5">
        <p>Discount {{ products.discount }}%</p>
        <p class="text-3xl font-bold font-mono line-through">
          Rp. {{ products.price }}
        </p>
        <p class="text-3xl font-bold font-mono">
          Rp. {{ products.price - products.price * (products.discount / 100) }}
        </p>
      </div>
      <div class="mt-14">
        <p class="text-xl font-semibold">Komentar</p>
        <div v-for="comment in products.detail?.comments" class="mb-4 mt-2">
          <div class="flex justify-between">
            <p class="font-serif">{{ comment.name }}</p>
            <p class="text-gray-600">{{ comment.date }}</p>
          </div>
          <p class="text-gray-700">"{{ comment.comment }}"</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const route = useRoute();
const id = route.params.id;
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
products = products.find((product) => product.id == id);
console.log(products);
</script>
