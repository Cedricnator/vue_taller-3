<script setup lang="ts">
import { Character } from '@/constants'; 
import CharacterItem from '@/components/CharacterItem.vue'
import { ref } from 'vue';
import type { CharacterType } from '../types';

let selectedCharacter = ref<CharacterType | null>(null);
const emit = defineEmits(['character-selected-by-user'])


const handleCharacterSelected = (character: CharacterType | null) => {
     if(character === null) return
     selectedCharacter.value = character;
     emit('character-selected-by-user', { name: character.name, image: character.image })
}
</script>

<template>
     <div class="grid grid-cols-4 h-[300px] w-[1200px] px-16 mx-auto overflow-y-auto overflow-x-auto animate__animated animate__slideInUp">
          <div v-for="(character, index) in Character" :key="index">
              <CharacterItem 
                    :nameCharacter="character.name" 
                    :imgCharacter="character.image" 
                    @character-selected="handleCharacterSelected"     
               />
           </div>
     </div>
 </template>