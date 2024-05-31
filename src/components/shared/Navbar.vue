<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import { nextTick, ref, watchEffect, type Ref } from 'vue';


let nameUser: Ref<string> = ref('Invitado');
let imgUser: string | undefined = undefined;
const userStore = useUserStore();

watchEffect(() => {
    if(userStore.isAuthenticated) {
        const isUserAuthenticated = userStore.getUserAuthenticated();
        nameUser.value = isUserAuthenticated?.name ?? 'Invitado';
    } else {
        nameUser.value = 'Invitado';
    }
});
</script>

<template>
    <div class="navbar bg-base-100 w-full">
        <div class="navbar-start">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
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
                                <RouterLink to="/dashboard">
                                    Game
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/dashboard/wiki">
                                    Wiki
                                </RouterLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <a class="btn btn-ghost text-xl">{{nameUser}}</a>
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
                <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                  <div class="w-10 rounded-full">
                    <img
                        v-if="imgUser" 
                        alt="Tailwind CSS Navbar component" 
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" 
                    />
                    <div v-else class="avatar online placeholder w-full h-full">
                        <div class="bg-neutral text-neutral-content rounded-full w-16">
                            <span class="text-xl">IN</span>
                        </div>
                    </div>
                  </div>
                </div>
                <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                  <li>
                    <!-- <a class="justify-between">
                      Profile
                      <span class="badge">New</span>
                    </a> -->
                  </li>
                  <li><a>Settings</a></li>
                  <li><a>Logout</a></li>
                </ul>
              </div>
        </div>
    </div>
</template>