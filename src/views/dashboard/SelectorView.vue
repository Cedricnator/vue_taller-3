<script setup lang="ts">
import { ref } from 'vue';
import CharacterSelector      from '@/components/CharacterSelector.vue'
import CardCharacterSelection from '@/components/CardCharacterSelection.vue';
import CardMapSelection       from '@/components/CardMapSelection.vue';
import type { CharacterType } from '@/types';
const selectedCharacter1   = ref<CharacterType | null>(null);
const selectedCharacter2   = ref<CharacterType | null>(null);
const selectingCharacter1  = ref<boolean>(true);

const sendCharacter = (character: CharacterType | null, isSelected: boolean) => {
   if(character === null) return;
   if(isSelected){
      if(selectingCharacter1.value) {
         selectedCharacter1.value = character;
         selectingCharacter1.value = false;
      } else {
         selectedCharacter2.value = character;
         selectingCharacter1.value = true;
      }
   }

}
</script>

<template>
   <main class="flex flex-col justify-around animate__animated animate__fadeIn">
      <h1 class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 text-center mt-4">Selección de personajes</h1>
      <section class="flex flex-row justify-around items-center px-16 mt-2">
         <CardCharacterSelection 
            :nameCharacter="selectedCharacter1 && selectedCharacter1.name  ? selectedCharacter1.name  : ''"  
            :imgCharacter="selectedCharacter1  && selectedCharacter1.image ? selectedCharacter1.image : ''"
         />

         <CardMapSelection />

         <CardCharacterSelection 
            :nameCharacter="selectedCharacter2 && selectedCharacter2.name  ? selectedCharacter2.name  : ''"  
            :imgCharacter="selectedCharacter2  && selectedCharacter2.image ? selectedCharacter2.image : ''" 
         />
      </section>
      <section>
         <h1 class="text-xl text-center font-bold mb-3 mt-28">PERSONAJES</h1>
         <CharacterSelector
         @character-selected-by-user="sendCharacter($event, true)"
         />
      </section>
   </main>
</template>