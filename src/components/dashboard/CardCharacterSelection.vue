<script setup lang="ts">
import { ref } from "vue";
import { useCharacterSelectedStore } from "@/stores/characterSelection";
import { defaultCharacter } from "@/constants/characterDefault.const";
import type { CharacterType } from "@/types";

const props = defineProps<{
  character?: CharacterType | null;
}>();

let selected = ref<boolean>(false);

const emit = defineEmits(["character-selected"]);

const characterSelectedStore = useCharacterSelectedStore();

const handleSelection = () => {
  if (!selected.value) {
    let character = props.character || defaultCharacter;
    console.log("Personaje seleccionado");
    characterSelectedStore.addCharacter(character);
    selected.value = !selected.value;
    select();
  }
};

const select = () => {
  emit("character-selected", props.character);
};
</script>

<template>
  <div class="card w-80 bg-base-100 shadow-xl image-full">
    <figure>
      <img
        :src="character?.image || '/vue_taller-3/images/favicon.png'"
        alt="Shoes"
        class="h-min-[200px] h-max-[200px] transform scale-105 transition-all p-5"
        height="150"
        width="150"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        <span v-if="character?.name">{{ character.name }}</span>
        <span v-else>Personaje</span>
      </h2>
      <div class="card-actions justify-end">
        <button
          class="btn border-orange-500 hover:text-orange-500"
          @click="handleSelection"
        >
          SELECT
        </button>
      </div>
    </div>
  </div>
</template>

