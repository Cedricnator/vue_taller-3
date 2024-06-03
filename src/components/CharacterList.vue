<script setup lang="ts">
import { Character } from '@/constants'; 
import CharacterItem from '@/components/CharacterItem.vue'
</script>

<template>
     <div v-for="(character, index) in Character" :key="index">
         <CharacterItem :nameCharacter="character.name" :imgCharacter="character.image" />
      </div>
 </template>