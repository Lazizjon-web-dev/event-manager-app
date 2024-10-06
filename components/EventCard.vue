<template>
  <div
    class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <NuxtLink :to="`/events/${id}`" >
      <img class="rounded-t-lg" :src="thumbnail" :alt="title" />
    </NuxtLink>
    <div class="p-5">
      <NuxtLink :to="`/events/${id}`">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ title }}
        </h5>
      </NuxtLink>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ shortenDescription(description) }}
      </p>
      <NuxtLink :to="`/events/${id}`"   
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more
        <IconArrow />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconArrow from "./Icons/IconArrow.vue";
import { shortenDescription } from "~/utils/stringUtils";
defineProps({
  id: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>
