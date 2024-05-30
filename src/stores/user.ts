import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface User {
    id:       number;
    name:     string;
    lastname: string;
    password: string;
}

export const useCounterStore = defineStore('user', () => {
   
    const login = () => {

    }

  return { login,  }
})
