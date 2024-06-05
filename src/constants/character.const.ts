import type { CharacterType } from "@/types";

export const Character: CharacterType[] = [
    { 
        id: 1,
        name: 'Goku', 
        description: 'The main character of the Dragon Ball series', 
        life: 100, 
        damage: 10, 
        image: '/vue_taller-3/images/sprite1_nobg.png' 
    },
    { 
        id: 2,
        name: 'Vegeta', 
        description: 'The prince of the Saiyans', 
        life: 80, 
        damage: 15, 
        image: '/vue_taller-3/images/sprite2.nobg.png' 
    },
    {
        id: 3,
        name: 'Piccolo',
        description: 'The Namekian warrior',
        life: 70,
        damage: 20,
        image: '/vue_taller-3/images/sprite3.nobg.png'
    },
    {
        id: 4,
        name: 'Gohan',
        description: 'The first son of Goku',
        life: 60,
        damage: 25,
        image: '/vue_taller-3/images/sprite4.nobg.png'
    }
]