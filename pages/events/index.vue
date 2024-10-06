<template>
    <div class="grid grid-cols-3">
        <EventCard v-for="event in events" 
            :key="event.id"
            :id="event.id"
            :thumbnail="event.thumbnail"
            :title="event.title"
            :description="event.description"
            />
    </div>
</template>

<script setup lang="ts">
import EventCard from '~/components/EventCard.vue';
import { useStore } from 'vuex';
const store = useStore();
const events = computed(()=>store.state.events);
</script>

<style scoped>

</style>