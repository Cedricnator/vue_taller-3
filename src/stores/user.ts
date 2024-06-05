import { ref } from 'vue';
// import { ref, computed } from 'vue'
import { Users }       from '@/constants';
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {

  let isAuthenticated = ref(false);
  let isLoading:       boolean = false;

  const login = (email: string, password: string): boolean => {
    isLoading = true;
    for (const user of Users) {
      if (user.email === email && user.password === password) {
        console.log({'User found:': user})
        user.authenticated = true
        isAuthenticated.value = true;
        isLoading = false;
        return isAuthenticated.value = true;
      }
    }
    isAuthenticated.value = false;
    isLoading = false;
    console.log({'User not found the email and password is': email, password})
    console.log({'Users are': Users})
    throw new Error('User not found');
  }

  const getUserAuthenticated = () => {
    for(const user of Users){
      if(user.authenticated){
        return user;
      } else {
        return null;
      }
    }
  }

  const logout = (id: number): void => {
    const user = Users.find(user => user.id === id)
    if (user) {
      user.authenticated = false
    }
    isAuthenticated.value = false;
  }

   
  return {
    // Properties 
    isAuthenticated, 
    isLoading, 
    Users, 

    // Methods
    login, 
    logout,
    getUserAuthenticated 
  }
}, {
  persist: {
    storage: sessionStorage,
    paths: ['userState']
  }
})
