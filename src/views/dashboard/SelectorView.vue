<script setup lang="ts">
import { ref }                from 'vue';
import CharacterSelector      from '@/components/dashboard/CharacterSelector.vue'
import CardCharacterSelection from '@/components/dashboard/CardCharacterSelection.vue';
import CardMapSelection       from '@/components/dashboard/CardMapSelection.vue';
import type { CharacterType } from '@/types';

const selectedCharacter1     = ref<CharacterType | null>(null);
const selectedCharacter2     = ref<CharacterType | null>(null);
const selectingCharacter1    = ref<boolean>(true);
const selectingCharacter2    = ref<boolean>(false);

const handleCharacterSelection = ( 
   character: CharacterType 
) => {
   if (selectingCharacter1.value) {
      selectedCharacter1.value  = character;
      selectingCharacter1.value = false;
      selectingCharacter2.value = true; 
   } else if (selectingCharacter2.value) {
      selectedCharacter2.value  = character;
      selectingCharacter2.value = false;
   }
};


const sendCharacterToCardSelection = (
   character: CharacterType | null, 
   isSelected: boolean
) => {
   console.log(character)
   if( character === null  ) return;
   if( isSelected ){
      if(selectingCharacter1.value) {
         selectedCharacter1.value = character;
      } else if(selectingCharacter2.value) {
         selectedCharacter2.value = character;
      }
   }
}
</script>

<template>
   <main class="flex flex-col justify-around animate__animated animate__fadeIn">
      <h1 class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 text-center mt-4">
         Selección de personajes
      </h1>
      <section class="flex flex-row justify-around items-center px-16 mt-2">
         <div>
            <div class="mb-2 border border-orange-500 rounded-lg p-4 font-semibold">Jugador 1: </div>
            <CardCharacterSelection 
               :character="selectedCharacter1"
               @character-selected="handleCharacterSelection"
            />
         </div>

         <CardMapSelection />
         
         <div class="">
            <div class="mb-2 border border-orange-500 rounded-lg p-4 font-semibold">Jugador 2: </div>
            <CardCharacterSelection 
               :character="selectedCharacter2"
               @character-selected="handleCharacterSelection"
            
            />
         </div>
      </section>
      <section>
         <h1 class="text-xl text-center font-bold mb-3 mt-28">PERSONAJES</h1>
         <CharacterSelector
            @character-selected-by-user="sendCharacterToCardSelection($event, true)"
         />
      </section>
   </main>
</template>