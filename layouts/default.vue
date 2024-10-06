<template>
    <div>
        <Navbar :routes="routes"/>
        <NuxtPage />
    </div>
</template>
    
<script setup lang="ts">
import Navbar from "~/components/Navbar.vue";
import type Route from '~/types/route';
import { useStore } from 'vuex';
const store = useStore();
const routes: Route[] = reactive([
  { label: 'Home', href:'/', active:true },
  { label: 'Events', href:'/events', active: false },
  { label: 'Login', href:'login', active: false}
]);
  if(store.getters.getUserToken()){
    routes.splice(routes.findIndex((route)=>route.label === "Login"),1)
}

</script>

<style scoped>

</style>