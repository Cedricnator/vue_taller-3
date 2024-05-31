<script setup lang="ts">
import '../game/Main'
import '../assets/styless.css'
</script>

<template>
    <section id="seccion2" class="section" data-scroll-spy>
        <div class="characters-info">
            <div class="profile-with-health-bar">
                <img src="/images/character.png" alt="" width="105" height="155" id="characterimg">
                <div id="enemy-health-container">
                    <div id="character-hp"><span id="character-hp-value"></span></div>
                    <progress value="300" max="300" id="characterHealth"></progress>
                </div>
            </div>
    
            <div class="profile-with-health-bar">
                <div id="enemy-health-container">
                    <div id="enemy-hp"><span id="enemy-hp-value"></span></div>
                    <progress value="300" max="300" id="enemyHealth"></progress>
                </div>
                  <img src="/images/nemesis.png" alt="" width="105" height="155" id="nemesisimg">
            </div>
        </div>

        <article class="stage">
            <img class="ball"  id="ball"  src="/images/P1.png">
            <img class="ball2" id="ball2" src="/images/P2.png">
        </article>
    </section>
</template>