<script setup lang="ts">
import { Character } from '@/constants'; 
import CharacterItem from '@/components/dashboard/CharacterItem.vue'
import { ref } from 'vue';
import type { CharacterType } from '../../types';

let selectedCharacter = ref<CharacterType | null>(null);
const emit = defineEmits([
     'character-selected-by-user'
])

const handleCharacterSelected = (character: CharacterType | null) => {
     if(character === null) return
     selectedCharacter.value = character;
     emit('character-selected-by-user', { 
          id: character.id, 
          name: character.name, 
          image: character.image,
          description: character.description,
          damage: character.damage,
          life: character.life
     })
}
</script>

<template>
     <div class="grid grid-cols-4 h-[300px] w-[1200px] px-16 mx-auto overflow-y-auto overflow-x-auto animate__animated animate__slideInUp">
          <div 
               v-for="(character, index) in Character" 
               :key="index"
          >
              <CharacterItem 
                    :id-character="character.id"
                    :nameCharacter="character.name" 
                    :imgCharacter="character.image"
                    :description-character="character.description"
                    :damage-character="character.damage"
                    :life-character="character.life"
                    @character-selected="handleCharacterSelected"     
               />
           </div>
     </div>
 </template>