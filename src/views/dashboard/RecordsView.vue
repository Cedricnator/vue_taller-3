<script setup lang="ts">
// import { useRecordStore } from '@/stores/record';
// import '../../game/Record';

// import { onMounted } from 'vue';
// const recordStore = useRecordStore();
// let character: any;

// const getAllRecords = () => {
//     recordStore.getAllRecord();
// }

// onMounted(() => {
//     getAllRecords();
// })
</script>

<template>
    <div>
        <h1 class="mt-10 text-xl text-center font-semibold">
            Records Page
        </h1>
        <div class="container">
            <div class="Records Personajes">
                <div class="px-12">
                    <div class="text-xl">Personajes</div>
                    <!-- <div>{{ character.name }}</div> -->
                    <div class="py-4">
                        <div class="flex flex-col mb-2">
                            <div class="text-orange-400">SuperWarrior</div>
                            <div>Veces que a ganado: 1</div>
                        </div>
                        <img src="/vue_taller-3/images/sprite1_nobg.png" alt="">
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>