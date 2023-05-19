<template>
  <nav
    class="flex justify-between items-center py-3 md:px-20 px-5 fixed top-0 w-full text-white transition-all ease duration-300 z-50"
  >
    <div>
      <NuxtLink to="/" class="text-3xl">🥼</NuxtLink>
    </div>
    <div>
      <ul class="flex gap-x-5">
        <li>
          <a href="#products" class="">Products</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script setup>
function navNimate() {
  const nav = document.querySelector("nav");
  if (
    document.documentElement.scrollTop > 100 ||
    document.body.scrollTop > 100
  ) {
    nav.classList.add("bg-white");
    nav.classList.remove("text-white");
    nav.classList.add("text-black");
    nav.classList.remove("py-3");
    nav.classList.add("py-2");
  } else {
    nav.classList.remove("bg-white");
    nav.classList.remove("text-black");
    nav.classList.add("text-white");
    nav.classList.remove("py-2");
    nav.classList.add("py-3");
  }

  window.addEventListener("scroll", navNimate);
}

onMounted(() => {
  navNimate();
});
</script>
