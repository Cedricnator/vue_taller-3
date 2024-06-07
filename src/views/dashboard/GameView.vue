
<script setup lang="ts">
import Game from '@/components/Game.vue'
import audioGame from '/vue_taller-3/Audio.mp3';
import { onUnmounted, onMounted } from 'vue';
const audio = new Audio(audioGame);
audio.loop = true;

onMounted(() => {
    audio.play();
});

onUnmounted(() => {
    audio.pause();
});
</script>

<template>
    <main>
        <Game />
    </main>
</template>

<style>

</style>