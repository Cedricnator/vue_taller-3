<script setup lang="ts">
defineProps<{
    nameCharacter: string,
    imgCharacter: string,
}>()

const emit = defineEmits(['character-selected'])

const sendCharacter = (nameCharacter: string, imgCharacter: string) => {
    // console.log(nameCharacter, imgCharacter)
    emit('character-selected', { name: nameCharacter, image: imgCharacter })
}

</script>

<template>
    <div class="character-img flex flex-col w-[16rem] h-[12rem]">
        <img 
            :src="imgCharacter" 
            alt="" 
            class="h-full w-full bg-black" 
            width="auto" 
            height="auto"
        >
        <div class="bg-zinc-900 opacity-100 flex justify-start">
            <h4 class="text-gray-300 px-4 py-2 font-semibold">
                {{ nameCharacter }}
            </h4>
            <!-- <p>Descripción del personaje 3</p> -->
            <button 
                @click="sendCharacter(nameCharacter, imgCharacter)">
                Seleccionar
            </button> 
        </div>
    </div>
</template>

<style scoped></style>