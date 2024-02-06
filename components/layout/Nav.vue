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
    <div class="flex fixed bg-main/10 w-full items-center justify-between py-3 px-4 blur-bg h-[--header-height]">
      <div class="hidden lg:flex flex-1 items-center">
        <ItemNavBar v-for="item in items" :key="item.name" :item="item" />
      </div>
      <div class="flex flex-1 items-center lg:hidden">
        <BurgerMenu />
      </div>
      <div class="flex">
        <NuxtLink to="/" class="flex flex-1 items-center gap-x-2">
          <img src="/assets/logo.png" class="w-8 h-8" />
          <span class="sr-only">go to the home</span>
        </NuxtLink>
      </div>
      <div class="flex flex-1 justify-end items-center gap-x-4">
        <ChangeColorMode />
        <Login />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
