<script setup lang="ts">
const rotate180 = ref(false);
const toggleColorMode = () => {
  useColorMode().preference = useColorMode().preference === "light" ? "dark" : "light";
  rotate180.value = !rotate180.value;
};
</script>

<template>
    <SvgoLightDark
        @click="toggleColorMode"
        class="hidden md:block w-7 h-7 cursor-pointer mr-7 text-primary-color select-none text-main hover:text-accent transition-all duration-300"
        :class="{
          'animate-rotate180': $colorMode.preference === 'dark',
          'animate-rotate0': $colorMode.preference === 'light',
        }"
        :fontControlled="false"
        :alt="'Light/Dark mode'"
        :aria-label="'Light/Dark mode'"
    />
</template>

<style scoped>
@keyframes rotate180 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
}

@keyframes rotate0 {
  0% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.animate-rotate180 {
  animation: rotate180 0.3s ease-out forwards;
}
.animate-rotate0 {
  animation: rotate0 0.3s ease-out forwards;
}
</style>