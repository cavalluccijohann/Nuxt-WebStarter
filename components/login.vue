<script setup lang="ts">
const openModal = ref(false);
const singUp = ref(false);
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
      <Transition mode="out-in" name="bounce">
        <form
            v-if="!singUp"
            id="form-login"
            :class="singUp ? 'hidden' : 'flex flex-col gap-4 w-3/4 mt-2'"
            class="flex flex-col gap-4 w-3/4 mt-2"
        >
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

        </form>
        <form
            v-else
            id="form-signup"
            :class="singUp ? 'flex flex-col gap-4 w-3/4 mt-2' : 'hidden'"
        >
          <div class="flex flex-row gap-2">
            <div class="flex flex-col gap-2 w-1/2">
              <label for="firstName" class="text-lg text-secondary">First Name</label>
              <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  class="w-full p-2 border-2 border-secondary rounded-md text-secondary"
              />
            </div>
            <div class="flex flex-col gap-2 w-1/2">
              <label for="lastName" class="text-lg text-secondary">Last Name</label>
              <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  class="w-full p-2 border-2 border-secondary rounded-md text-secondary"
              />
            </div>

          </div>
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
            <label for="phone" class="text-lg text-secondary">Phone</label>
            <input
                type="tel"
                id="phone"
                name="phone"
                class="w-full p-2 border-2 border-secondary rounded-md text-secondary"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label for="code" class="text-lg text-secondary">Code</label>
            <input
                type="text"
                id="code"
                name="code"
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
          <div class="flex flex-col gap-2">
            <label for="password" class="text-lg text-secondary">Confirm Password</label>
            <input
                type="password"
                id="password"
                name="password"
                class="w-full p-2 border-2 border-secondary rounded-md text-secondary"
            />
          </div>
        </form>
      </Transition>
    </template>
    <template #footer>
      <div class="flex w-3/4 justify-end mb-3 gap-3">
        <button
            v-if="!singUp"
            type="submit"
            form="form-login"
            class=" w-1/2 bg-accent text-main p-2 rounded-md hover:bg-accent/90 transition-all duration-300 px-5"
        >
          Login
        </button>
        <button
            v-if="singUp"
            @click="singUp = !singUp"
            form="form-login"
            class=" w-1/2 bg-accent text-main p-2 rounded-md hover:bg-accent/90 transition-all duration-300 px-5"
        >
          Login
        </button>
        <button
            v-if="!singUp"
            @click="singUp = !singUp"
            class="w-1/2 bg-main text-accent border-2 border-accent p-2 rounded-md hover:text-accent/90 hover:border-accent/90 transition-all duration-300 px-5"
        >
          Sign up
        </button>
        <button
            v-if="singUp"
            @click=""
            form="form-signup"
            class="w-1/2 bg-main text-accent border-2 border-accent p-2 rounded-md hover:text-accent/90 hover:border-accent/90 transition-all duration-300 px-5"
        >
          Sign up
        </button>
      </div>
    </template>
  </Modal>
</template>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.4s;
}

.bounce-leave-active {
  animation: bounce-in 0.4s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1);
  }
}
</style>