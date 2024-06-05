
<script setup lang="ts">
import Game from '@/components/Game.vue'
defineProps<{
    nameCharacter1?: string,
    imgCharacter1? : string,
    nameCharacter2?: string,
    imgCharacter2? : string,
}>()
</script>

<template>
    <main>
        <Game />
    </main>
</template>

<style>

</style>