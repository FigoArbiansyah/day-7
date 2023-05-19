<template>
  <section class="bg-[url(~/assets/img/bg.jpg)] bg-cover bg-center">
    <div
      class="min-h-screen flex items-center justify-center bg-slate-800 bg-opacity-60 flex-col"
    >
      <h2 class="text-6xl font-bold font-serif italic text-white">Gothrift!</h2>
      <span class="w-10 h-1 border-t border-white"></span>
    </div>
  </section>
  <section class="pt-24 md:px-20 px-4 min-h-screen" id="products">
    <div>
      <h2 class="text-2xl font-semibold">Our Products</h2>
      <p class="text-gray-700">
        Gothrift provides a variety of clothes with good quality and guaranteed!
      </p>
    </div>
    <div class="my-10 flex max-md:flex-col flex-wrap">
      <NuxtLink
        v-for="product in products"
        :to="`/${product.id}`"
        class="md:w-3/12 w-full px-1 mt-5"
        :key="product.id"
      >
        <div class="group overflow-hidden">
          <img
            :src="product.image"
            alt=""
            class="w-full object-cover group-hover:scale-110 transition-all ease duration-500 aspect-square"
          />
        </div>
        <div class="flex justify-between items-end mt-3 px-3">
          <div>
            <p class="text-slate-600">{{ product.name }}</p>
            <p class="text-xl font-semibold font-mono">
              Rp. {{ product.price }}
            </p>
          </div>
          <div>
            <p>{{ product?.detail?.rating }} ⭐</p>
          </div>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      products: [
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
      ],
    };
  },
};
</script>
