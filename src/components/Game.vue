<script setup lang="ts">
import "../game/Main";
import "../assets/styless.css";
import { useCharacterSelectedStore } from "../stores/characterSelection";
import { onBeforeMount } from "vue";
import type { CharacterType, User } from "@/types";
import { useUserStore } from "@/stores/user";

defineProps<{
  nameCharacter1?: string;
  imgCharacter1?: string;
  nameCharacter2?: string;
  imgCharacter2?: string;
}>();

const characterSelectedStore = useCharacterSelectedStore();
const userStore = useUserStore();

let user: User | null | undefined;
const getUser = () => {
  return userStore.getUserAuthenticated();
}

const getCharacterOnStore = () => {
  return characterSelectedStore.getSelectedCharactersU();
};

let characters: CharacterType[] = [];

onBeforeMount(() => {
  user = getUser();
  characters = getCharacterOnStore();
});
</script>

<template>
  <section
    id="seccion2"
    class="section animate__animated animate__fadeIn"
    data-scroll-spy
  >
    <div class="characters-info">
      <div class="profile-with-health-bar">
        <img
          :src="characters[0].image" 
          alt=""
          width="105"
          height="155"
          id="characterimg"
        />
        <div id="enemy-health-container flex flex-col">
          <div class="flex flex-col text-start">
            <div class="flex flex-row gap-2 text-bold text-white">
              <div class="">{{ user?.name }}</div>
              <div class="">{{ user?.lastname }}</div>
            </div>
            <div class="">{{ characters[0].name }}</div>
            <div class="">{{ characters[0].life }}</div>
          </div>
          <div id="character-hp">
            <span id="character-hp-value" />
          </div>
          <progress value="300" max="300" id="characterHealth"></progress>
        </div>
      </div>

      <div class="profile-with-health-bar">
        <div id="enemy-health-container flex flex-col">
          <div class="flex flex-col text-end ">
            <div class="text-bold text-white">Desconocido</div>
            <div class="">{{ characters[1].name }}</div>
            <div class="">{{ characters[1].life }}</div>
          </div>
          <div id="enemy-hp">
            <span id="enemy-hp-value" />
          </div>
          <progress value="300" max="300" id="enemyHealth"></progress>
        </div>
        <img
          :src="characters[1].image" 
          alt=""
          width="105"
          height="155"
          id="nemesisimg"
        />
      </div>
    </div>

    <article class="stage">
      <img class="ball" id="ball" :src="characters[0].image" />
      <img class="ball2" id="ball2" :src="characters[1].image" />
    </article>
  </section>
</template>

