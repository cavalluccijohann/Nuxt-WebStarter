<script setup lang="ts">
const open = ref(false);

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
    <div
        @click="open = !open"
        class="flex flex-col justify-between w-6 h-5 cursor-pointer"
    >
      <div
          class="w-full h-1 bg-main rounded-full"
          :class="open ? 'animate-rotate-left' : 'animate-rotate-left-reset'"
      ></div>
      <div
          class="w-full h-1 bg-main rounded-full"
          :class="open ? 'animate-erase' : 'animate-display'"

      ></div>
      <div
          class="w-full h-1 bg-main rounded-full"
          :class="open ? 'animate-rotate-right' : 'animate-rotate-right-reset'"
      ></div>
    </div>
    <Transition name="slide-fade">
      <div
          v-if="open"
          class="fixed left-0 w-full bg-main/20 z-10 height-menu blur-bg"
      >
        <div class="flex flex-col items-center justify-center gap-6 sm:gap-10 p-2">
          <ItemNavBar v-for="item in items" :key="item.name" :item="item" />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>

@keyframes rotateLeft {
  0% {
    transform: rotate(0deg) translateY(0);
    width: 100%;
  }
  100% {
    transform: rotate(45deg) translateY(8px) translateX(3px);
    width: 100%;
  }
}
@keyframes rotateRight {
  0% {
    transform: rotate(0deg) translateY(0);
    width: 100%;
  }
  100% {
    transform: rotate(-45deg) translateY(-9px) translateX(3px);
    width: 100%;
  }
}
@keyframes rotateRightReset {
  0% {
    transform: rotate(-45deg) translateY(-14px) translateX(3px);
  }
  100% {
    transform: rotate(0deg) translateY(0) translateX(0);
  }
}
@keyframes rotateLeftReset {
  0% {
    transform: rotate(45deg) translateY(14px) translateX(3px);
  }
  100% {
    transform: rotate(0deg) translateY(0) translateX(0)
  }
}
@keyframes displaynone {
  0% {
    opacity: 100%;
  }
  100% {
    opacity: 0%;
  }
}
@keyframes display {
  0% {
    opacity: 0%;
  }
  100% {
    opacity: 100%;
  }
}

.animate-rotate-left-reset {
  animation: rotateLeftReset 0.3s ease-out forwards;
}
.animate-rotate-right-reset {
  animation: rotateRightReset 0.3s ease-out forwards;
}
.animate-erase {
  animation: displaynone 0.3s ease-out forwards;
}
.animate-display {
  animation: display 0.3s ease-out forwards;
}
.animate-rotate-left {
  animation: rotateLeft 0.3s ease-out forwards;
}
.animate-rotate-right {
  animation: rotateRight 0.3s ease-out forwards;
}

.height-menu {
  height: calc(100vh - 3.5rem);
  transition: height 0.3s ease-out;
  top: 3.5rem;
}

.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}

</style>