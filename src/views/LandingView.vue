<script setup lang="ts">
import Navbar    from "@/components/shared/Navbar.vue";
import heroImage from "/vue_taller-3/images/giphy.webp";
</script>

<template>
  <main>
    <section class="animate__animated animate__fadeIn">
      <div
        :style="{
          backgroundImage:    `url(${heroImage})`,
          backgroundPosition: 'center',
          backgroundRepeat:   'no-repeat',
          backgroundSize:     'cover',
        }"
      >
        <Navbar />
        <div class="hero h-screen overflow-y-hidden">
          <div class="hero-overlay bg-opacity-60"/>
          <div class="hero-content text-center">
            <div class="max-w-md">
              <h1
                class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 shadow-lg"
              >
                FIGHT GAME
              </h1>
              <p class="py-6 font-semibold from-bg-gray-200 to-black text-lg">
                ¡Únete a la batalla y demuestra tu valentía en el campo de
                combate!
              </p>
              <RouterLink
                to="/dashboard/selector"
                class="btn border-t-orange-600 w-[50%]"
              >
                JUGAR
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
