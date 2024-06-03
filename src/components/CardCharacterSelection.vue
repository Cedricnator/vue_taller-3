<script setup lang="ts">
defineProps<{
   nameCharacter?: string,
   imgCharacter? : string,
}>()

// TODO: Crear una funcion que si el personaje esta selecionado, el boton diga "CAMBIAR" 
// TODO: y si no esta seleccionado diga "SELECCIONAR" 
</script>

<template>
   <div class="card w-80 bg-base-100 shadow-xl image-full">
      <figure>
         <img :src="imgCharacter" alt="Shoes" />
      </figure>
      <div class="card-body">
         <h2 class="card-title">{{ nameCharacter }}</h2>
         <p>If a dog chews shoes whose shoes does he choose?</p>
         <div class="card-actions justify-end">
            <button class="btn btn-primary">SELECT</button>
         </div>
      </div>
   </div>
</template>