<template>
    <div v-if="event" class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-4">{{ event.title }}</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img :src="event.thumbnail" :alt="event.title" class="w-full rounded-lg shadow-lg mb-4">
          <p class="text-gray-600 mb-4">{{ event.description }}</p>
          <div class="flex items-center mb-4">
            <span class="font-semibold mr-2">Price:</span>
            <span class="text-green-600">${{ event.price }}</span>
          </div>
          <div class="flex items-center mb-4">
            <span class="font-semibold mr-2">Available Places:</span>
            <span>{{ event.availablePlaces }}</span>
          </div>
          <div class="flex items-center mb-4">
            <span class="font-semibold mr-2">Deadline:</span>
            <span>{{ formatDate(event.deadline) }}</span>
          </div>
          <div class="flex items-center mb-4">
            <span class="font-semibold mr-2">Event Date:</span>
            <span>{{ formatDate(event.schedule) }}</span>
          </div>
        </div>
        <div>
          <div class="bg-gray-100 p-4 rounded-lg mb-4">
            <h2 class="text-xl font-semibold mb-2">Organized by</h2>
            <p>{{ event.author.name }}</p>
          </div>
          <div class="bg-gray-100 p-4 rounded-lg mb-4">
            <h2 class="text-xl font-semibold mb-2">Likes</h2>
            <div class="flex items-center">
              <span class="text-2xl mr-2">{{ event.likes }}</span>
              <button @click="toggleLike" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                {{ isLiked ? 'Unlike' : 'Like' }}
              </button>
            </div>
          </div>
          <div>
            <h2 class="text-xl font-semibold mb-2">Likers</h2>
            <ul class="list-disc list-inside">
              <li v-for="liker in event.likers" :key="liker.id" class="mb-1">
                {{ liker.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="container mx-auto px-4 py-8 text-center">
      <p class="text-xl">Loading event...</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import type Event from '~/types/event';
  import { useStore } from 'vuex';
  const store = useStore();
  const route = useRoute()
  const event = ref<Event | null>(null)
  const isLiked = ref(false)
  
  onMounted(async () => {
    // In a real application, you would fetch the event data from an API
    // For this example, we'll simulate an API call with setTimeout
      event.value = store.getters.getEventById(route.params.id as string)
  })
  
  const formatDate = (date: Date): string => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
  
  const toggleLike = () => {
    if (event.value) {
      isLiked.value = !isLiked.value
      event.value.likes += isLiked.value ? 1 : -1
      // In a real application, you would send this update to your backend
    }
  }
  </script>