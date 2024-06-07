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
        <div class="bg-zinc-800 opacity-100 flex justify-between px-4 py-2 rounded-lg border border-orange-800">
            <h4 class="text-gray-100 font-bold opacity-80">
                {{ nameCharacter }}
            </h4>
            <button 
                @click="sendCharacter(
                    idCharacter,
                    nameCharacter, 
                    imgCharacter,
                    descriptionCharacter,
                    damageCharacter,
                    lifeCharacter
                )"
                class="text-orange-600 hover:text-white">
                Seleccionar
            </button> 
        </div>
    </div>
</template>