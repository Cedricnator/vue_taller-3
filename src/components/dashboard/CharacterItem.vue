<script setup lang="ts">
defineProps<{
    idCharacter:          number,
    nameCharacter:        string,
    imgCharacter:         string,
    descriptionCharacter: string,
    damageCharacter:      number,
    lifeCharacter:        number,
}>()

const emit = defineEmits([
    'character-selected'
])

const sendCharacter = (
    idCharacter:          number,
    nameCharacter:        string, 
    imgCharacter:         string,
    descriptionCharacter: string,
    damageCharacter:      number,
    lifeCharacter:        number,
) => {
    emit('character-selected', { 
        id:          idCharacter,
        name:        nameCharacter, 
        image:       imgCharacter,
        description: descriptionCharacter,
        damage:      damageCharacter,
        life:        lifeCharacter,
    })
}

</script>

<template>
    <div class="character-img flex flex-col w-[16rem] h-[12rem] drop-shadow-2xl">
        <img 
            :src="imgCharacter" 
            alt="" 
            class="h-full w-full bg-zinc-900 rounded-lg p-8" 
            width="auto" 
            height="auto"
        >
        <div class="bg-zinc-800 opacity-100 flex justify-between px-4 py-2 rounded-lg">
            <h4 class="text-gray-300font-semibold">
                {{ nameCharacter }}
            </h4>
            <!-- <p>Descripción del personaje 3</p> -->
            <button 
                @click="sendCharacter(
                    idCharacter,
                    nameCharacter, 
                    imgCharacter,
                    descriptionCharacter,
                    damageCharacter,
                    lifeCharacter
                )">
                Seleccionar
            </button> 
        </div>
    </div>
</template>

<style scoped></style>