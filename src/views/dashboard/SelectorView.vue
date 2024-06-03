<script setup lang="ts">
import CharacterSelector from '@/components/CharacterSelector.vue'
import CardCharacterSelection from '@/components/CardCharacterSelection.vue';
import CardMapSelection from '@/components/CardMapSelection.vue';
</script>

<template>
   <div class="flex flex-col justify-around">
      <div class="flex flex-row justify-between items-center px-16">

         <CardCharacterSelection nameCharacter="Goku" imgCharacter="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" />

         <CardMapSelection />

         <CardCharacterSelection nameCharacter="Goku" imgCharacter="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" />
      </div>
      <div>
         <CharacterSelector />
      </div>
   </div>
</template>

<style scoped></style>