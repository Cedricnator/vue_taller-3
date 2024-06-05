<script setup lang="ts">
</script>

<template>
   <div class="card card-compact w-80 bg-base-100 shadow-xl">
      <figure>
         <img 
            src="/vue_taller-3/images/area.jpg" 
            alt="Shoes" 
         />
      </figure>
      <div class="card-body">
         <h2 class="font-semibold text-lg text-center">
            Desierto
         </h2>
         <div 
            class="card-actions justify-between">
            <!-- <button class="btn btn-primary">Cambiar mapa</button> -->
            <RouterLink to="/dashboard" class="btn w-full border-orange-500">
               Empezar Combate
            </RouterLink>
         </div>
      </div>
   </div>
</template>