<script setup lang="ts">
defineProps<{
    nameCharacter: string,
    imgCharacter: string,
}>()

</script>

<template>
    <div class="chacter-img flex flex-col w-[16rem] h-[12rem]">
        <img :src="imgCharacter" alt="" class="h-full w-full" width="auto" height="auto">
        <div class="bg-zinc-900 opacity-100 flex justify-start">
            <h4 class="text-gray-300 px-4 py-2 font-semibold">{{ nameCharacter }}</h4>
            <!-- <p>Descripción del personaje 3</p>
                <button>Seleccionar</button> -->
        </div>
    </div>
</template>

<style scoped></style>