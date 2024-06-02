<script setup lang="ts">
import Navbar from '@/components/shared/Navbar.vue';
import TheWelcome from '../components/TheWelcome.vue'


</script>

<template>
  <main>
    <div>
      <div style="background-image: url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg);">
        <Navbar />
        <div class="hero min-h-[40rem]">
          <div class="hero-overlay bg-opacity-60"></div>
          <div class="hero-content text-center">
            <div class="max-w-md">
              <h1 class="text-5xl font-bold">Hello there</h1>
              <p class="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
              </p>
              <button class="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <TheWelcome /> -->
  </main>
</template>
