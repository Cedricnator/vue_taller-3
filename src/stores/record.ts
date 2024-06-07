import type { CharacterType } from '@/types';
import { defineStore } from 'pinia'

export const useRecordStore = defineStore({
   id: 'main',
   state: () => ({
     charactersWinners: [] as CharacterType[],
   }),
   actions: {
      setCharacterToRecord(characters: CharacterType[]) {
         this.charactersWinners = characters;
      },
      addCharacterToRecord(character: CharacterType) {
         this.charactersWinners.push(character);
      },
      clearCharactersRecord(){
         this.charactersWinners = [];
      },
      getAllRecord(){
         return this.charactersWinners;
      }
   }
});