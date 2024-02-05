<script setup lang="ts">
import { defineProps, type PropType } from "vue";

defineProps({
  item: {
    type: Object as PropType<{
      name: string;
      path: string;
    }>,
    required: true,
  },
});
</script>

<template>
  <div>
    <NuxtLink
      :to="item.path"
      class="flex items-center justify-center cursor-pointer pt-2 pb-2 pl-4 pr-4 "
      :class="[
        $route.path === item.path
          ? 'text-accent font-bold rounded-full'
          : 'text-main font-medium hover:text-accent transition-all duration-300 border-none',
      ]"
      :aria-label="'Go to ' + item.name + ' profile'"
    >
      {{ item.name }}
    </NuxtLink>
  </div>
</template>

<style scoped></style>
