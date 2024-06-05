<script setup lang="ts">
import { ref }          from 'vue';
import { useUserStore } from '../../stores/user';
import { useRouter }    from 'vue-router';

const router    = useRouter();
const userStore = useUserStore();
const email     = ref( '' );
const password  = ref( '' );

const loginUser = (): void => {
    try {
        if( !userStore.login( email.value, password.value ) ){
            console.log( "Usuario no encontrado" )
            return;
        }
        router.push( '/dashboard' );
    } catch (error) {
        console.error(error);
    }
}
</script>

<template>
    <form class="mt-5 w-[50%] flex flex-col gap-4">
        <label class="input input-bordered flex items-center gap-4">
            <img 
                src="/vue_taller-3/svg/email-icon.svg" 
                alt=""
                width="15"
                height="15"
            >
            <input
                id="Email" 
                type="text" 
                aria-label="email-input"
                class="grow" 
                placeholder="Email"
                v-model="email" 
            />
        </label>
        <label class="input input-bordered flex items-center gap-4">
            <img 
                src="/vue_taller-3/svg/password-icon.svg" 
                alt="icon-password"
                width="15"
                height="15"
                class=""
            >
            <input 
                id="Password"
                type="password" 
                class="grow" 
                aria-label="password-input"
                placeholder="password" 
                v-model="password"
            />
        </label>
        <button 
            class="btn btn-primary mt-5 w-full"
            type="submit"
            @click.prevent="loginUser"
            >
            Login
        </button>
    </form>
</template>