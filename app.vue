<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout />
  </div>
</template>
<script lang="ts" setup>
import { useLocalStorage } from '@vueuse/core';
import { useStore } from 'vuex';
const store = useStore();
const storedToken = useLocalStorage('userToken', '');
if (storedToken.value) {
  store.commit('setUserToken',storedToken)
}
</script>

