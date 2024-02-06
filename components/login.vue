<script setup lang="ts">
const openModal = ref(false);
</script>

<template>
  <span
      @click="openModal = !openModal"
      class="i-lucide-circle-user-round w-6 h-6 cursor-pointer select-none hover:text-accent transition-all duration-300"
      :class="openModal ? 'text-accent' : 'text-main'"
      :aria-label="'Login'"
  ></span>
  <Modal v-model="openModal">
    <template #header>
      <h1 class="text-2xl font-bold text-secondary my-3">Login</h1>
    </template>
    <template #body>
      <form class="flex flex-col gap-4 w-3/4 mt-2">
        <div class="flex flex-col gap-2">
          <label for="email" class="text-lg text-secondary">Email</label>
          <input
              type="email"
              id="email"
              name="email"
              class="w-full p-2 border-2 border-secondary rounded-md text-secondary"
          />
        </div>
        <div class="flex flex-col gap-2">
          <label for="password" class="text-lg text-secondary">Password</label>
          <input
              type="password"
              id="password"
              name="password"
              class="w-full p-2 border-2 border-secondary rounded-md text-secondary"
          />
        </div>

<!--        <a href="#" class="w-full text-accent hover:text-accent/90 transition-all duration-300">
          Forgot password?
        </a>-->

        <div class="flex justify-end mb-3 gap-3">
          <button
              type="submit"
              class=" w-1/2 bg-accent text-main p-2 rounded-md hover:bg-accent/90 transition-all duration-300 px-5"
          >
            Login
          </button>
          <button
              type="submit"
              class="w-1/2 bg-main text-accent border-2 border-accent p-2 rounded-md hover:text-accent/90 hover:border-accent/90 transition-all duration-300 px-5"
          >
            Sign up
          </button>
        </div>
      </form>
    </template>
  </Modal>
</template>

<style scoped>

</style>