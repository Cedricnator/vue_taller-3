import { ref } from 'vue';
import { Users } from '@/constants';
import { defineStore } from 'pinia'
import type { User } from '@/types'
export const useUserStore = defineStore('user', () => {
  let isAuthenticated = ref(false);
  let isLoading: boolean = false;
  let authenticatedUser = ref<User>(); // new state property

  const login = (email: string, password: string): boolean => {
    isLoading = true;
    for (const user of Users) {
      if (user.email === email && user.password === password) {
        console.log({'User found:': user})
        user.authenticated = true
        isAuthenticated.value = true;
        authenticatedUser.value = user;
        isLoading = false;
        return isAuthenticated.value = true;
      }
    }
    isAuthenticated.value = false;
    authenticatedUser.value = undefined;
    isLoading = false;
    console.log({'User not found the email and password is': email, password})
    console.log({'Users are': Users})
    throw new Error('User not found');
  }

  const getUserAuthenticated = () => {
    return authenticatedUser.value; // return the authenticated user from the state
  }

  const logout = (id: number): void => {
    const user = Users.find(user => user.id === id)
    if (user) {
      user.authenticated = false
    }
    isAuthenticated.value = false;
    authenticatedUser.value = undefined; // clear the authenticated user
  }

  return {
    // Properties 
    isAuthenticated, 
    isLoading, 
    Users, 
    authenticatedUser, // include the authenticated user in the store state

    // Methods
    login, 
    logout,
    getUserAuthenticated 
  }
}, {
  persist: {
    storage: localStorage,
    paths: ['useUserStore', 'authenticatedUser'] // persist the authenticated user
  }
})