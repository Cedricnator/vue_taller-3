// import { ref, computed } from 'vue'
import { Users }       from '@/constants';
import type { User }   from '@/types';
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  let isAuthenticated: boolean = false;
  let isLoading:       boolean = false;

  const login = (name: string, password: string): User => {
    isLoading = true;
    for (const user of Users) {
      if (user.name === name && user.password === password) {
        user.authenticated = true
        isAuthenticated = true;
        isLoading = false;
        return user
      }
    }
    isAuthenticated = false;
    isLoading = false;
    throw new Error('User not found');
  }

  const logout = (id: number): void => {
    const user = Users.find(user => user.id === id)
    if (user) {
      user.authenticated = false
    }
    isAuthenticated = false;
  }

  return {
    // Properties 
    isAuthenticated, 
    isLoading, 
    Users, 

    // Methods
    login, 
    logout, 
  }
})
