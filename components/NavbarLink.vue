<template>
    <li>
        <NuxtLink :to="href" class="block py-2 px-3 rounded  md:p-0" :class="active ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'">
            {{ label }}
        </NuxtLink>
    </li>
</template>
<script setup>
defineProps({
    label: {
        type: String,
        required: true,
    },
    href: {
        type: String,
        required: true,
    },
    active: { 
        type: Boolean,
        default: false,
    }
})
</script>

<style scoped>

</style>