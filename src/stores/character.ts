import { Character } from '@/constants/character.const'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    Characters: Character,
  }),
  persist: {
    storage: localStorage,
    paths: ['characterState'],
  },
})