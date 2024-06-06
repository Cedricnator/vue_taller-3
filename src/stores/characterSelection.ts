import type { CharacterType } from '@/types';
import { defineStore } from 'pinia'

export const useCharacterSelectedStore = defineStore({
   id: 'main',
   state: () => ({
     selectedCharacters: [] as CharacterType[],
   }),
   actions: {
      setSelectedCharacters(characters: CharacterType[]) {
         this.selectedCharacters = characters;
      },
      addCharacter(character: CharacterType) {
         this.selectedCharacters.push(character);
      },
      clearSelectedCharacters(){
         this.selectedCharacters = [];
      },
      getSelectedCharactersU(){
         return this.selectedCharacters;
      }
   }
});