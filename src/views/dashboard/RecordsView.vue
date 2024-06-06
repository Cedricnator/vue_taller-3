<script setup lang="ts">
import '../../game/Record';
import { Fighter } from '@/game/Character';

let record1 = localStorage.getItem("recordP1")
let record2 = localStorage.getItem("recordP2")

</script>

<template>
    <div>
        <h1 class="mt-10 text-xl text-center font-semibold">
            Records Page
        </h1>
        <div class="container">
            <div class="records">
                <h3>Record Personaje 1</h3>
                <div>{{ record1 }}</div>

                <h3>Record Personaje 2</h3>
                <div>{{ record2 }}</div>
            </div>
        </div>
    </div>
</template>