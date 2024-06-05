<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
   nameCharacter?: string,
   imgCharacter? : string,
}>()

let selected = ref<boolean>(false)
const emit = defineEmits(['character-selected'])

const handleSelection = () => {
   selected.value = !selected.value
   if(selected.value) {
      console.log('Personaje seleccionado')
   } else {
      console.log('Personaje no seleccionado')
   }
}

</script>

<template>
   <div class="card w-80 bg-base-100 shadow-xl image-full">
      <figure>
         <img :src="imgCharacter || '/vue_taller-3/images/favicon.png'" alt="Shoes" />
      </figure>
      <div class="card-body">
      <h2 class="card-title">
         <span v-if="nameCharacter">{{ nameCharacter }}</span>
         <span v-else>Personaje</span>
      </h2>
         <div class="card-actions justify-end">
            <button class="btn btn-primary" @click="handleSelection">SELECT</button>
         </div>
      </div>
   </div>
</template>