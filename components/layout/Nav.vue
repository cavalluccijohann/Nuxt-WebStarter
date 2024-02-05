<script setup lang="ts">
const items = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

</script>

<template>
  <div>
    <div class="flex fixed bg-main/10 w-full items-center justify-between py-3 px-4 blur-bg">
      <div class="hidden lg:flex flex-1 items-center">
        <ItemNavBar v-for="item in items" :key="item.name" :item="item" />
      </div>
      <div class="flex flex-1 items-center lg:hidden">
        <BurgerMenu />
      </div>
      <div class="flex">
        <img src="/assets/logo.png" class="w-10 h-10 flex-1" />
      </div>
      <div class="flex flex-1 justify-end items-center gap-x-4">
        <ChangeColorMode />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
