<script setup lang="ts">
import { RouterView, useRoute, useRouter } from 'vue-router'
import Navbar from './components/shared/Navbar.vue';
const route = useRoute();
</script>

<template>
    <Navbar v-if="route.path !== '/'" />
    <RouterView />
</template>

<style scoped></style>
