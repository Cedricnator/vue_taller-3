<script setup lang="ts">
import CharacterList from '@/components/CharacterList.vue';
</script>

<template>
    <h1 class="text-xl text-center font-semibold mb-3 mt-3">Personajes</h1>

    <section 
        class="grid grid-cols-4 h-[300px] w-[1200px] px-16 mx-auto overflow-y-auto overflow-x-auto"
    >
        <CharacterList />
    </section>

</template>