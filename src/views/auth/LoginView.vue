<script setup lang="ts">
import LoginForm  from "@/components/auth/LoginForm.vue";
</script>
<template>
    <main class="flex flex-col justify-center items-center mt-44 animate__animated animate__fadeIn">
        <div class="w-[50%] mx-auto">
            <section class="flex flex-col">
                <div class="text-left">
                    <h1 class="text-3xl font-bold px-0 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 shadow-lg">INICIO DE SESIÓN</h1>
                    <h3 class="text-lg font-semibold">Por favor ingresa tus credenciales personales</h3>
                </div>
                <LoginForm />
            </section>
        </div>
    </main>    
</template>

<style></style>

