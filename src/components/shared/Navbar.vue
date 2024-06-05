<script setup lang="ts">
import { useUserStore }         from '@/stores/user';
import { RouterLink, useRoute } from 'vue-router';
import { 
    computed, 
    ref, 
    watchEffect, 
    type Ref 
} from 'vue';

let nameUser: Ref<string> = ref('Invitado');
let imgUser:  string | undefined = undefined;
const userStore = useUserStore();

defineProps<{
    className?: string;
}>();

watchEffect(() => {
    if(userStore.isAuthenticated) {
        const isUserAuthenticated = userStore.getUserAuthenticated();
        nameUser.value = isUserAuthenticated?.name ?? 'Invitado';
        
    } else {
        nameUser.value = 'Invitado';
    }
});

const route = useRoute();
const isHome = computed(
    () => route.path === '/'
);
</script>

<template>
    <div :class="{'navbar bg-base-100 w-full': true, 'navbar w-full': isHome}">
        <div class="navbar-start">
            <div class="dropdown">
                <div 
                    tabindex="0" 
                    role="button" 
                    class="btn btn-ghost lg:hidden"
                >
                    <img 
                        src="/vue_taller-3/svg/menu-icon.svg" 
                        alt="" 
                        class="text-white"
                    >
                </div>
                <ul tabindex="0"
                    class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <RouterLink to="/">
                        Home
                        </RouterLink>
                    </li>
                    <li>
                        <div>Menu</div>
                        <ul class="p-2">
                            <li>
                                <RouterLink 
                                    to="/dashboard/selector"
                                >
                                    Game
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink 
                                    to="/dashboard/wiki"
                                >
                                    Wiki
                                </RouterLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <RouterLink 
                to="/" 
                class="btn btn-ghost text-xl"
            >
                {{nameUser}}
            </RouterLink>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
                <li>
                    <RouterLink to="/dashboard/wiki">
                        Wiki
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/dashboard">
                        Game
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/dashboard/records">
                        Records
                    </RouterLink>
                </li>
            </ul>
        </div>
        <div class="navbar-end">
            <div class="dropdown dropdown-end">
                <div 
                    tabindex="0" 
                    role="button" 
                    class="btn btn-ghost btn-circle avatar"
                >
                  <div class="w-10 rounded-full">
                    <img
                        v-if="imgUser" 
                        alt="Tailwind CSS Navbar component" 
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" 
                    />
                    <div 
                        v-else 
                        class="avatar online placeholder w-full h-full"
                    >
                        <div class="bg-neutral text-neutral-content rounded-full w-16">
                            <span class="text-xl">
                                IN
                            </span>
                        </div>
                    </div>
                  </div>
                </div>
                <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                  <li><a>Logout</a></li>
                </ul>
              </div>
        </div>
    </div>
</template>computed, import { useRoute } from 'vue-router';
