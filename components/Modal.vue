<script setup lang="ts">

defineProps({
  modelValue: Boolean,
});

</script>

<template>
  <Transition name="slide-fade">
    <div
        v-if="modelValue"
        class="fixed left-0 w-full height-menu bg-main/20 z-10 backdrop-blur-md flex items-center justify-center gap-6 sm:gap-10 p-2"
    >
      <div class="flex flex-col items-center justify-center w-full md:w-2/3 lg:w-1/3 rounded-2xl p-2 bg-main">
        <slot name="header"></slot>
        <div class="w-11/12 h-[1px] bg-secondary rounded-2xl"></div>
        <slot name="body"></slot>
        <slot name="footer"></slot>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.1s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}
</style>