import { Fighter } from "./Character";
import { defineStore } from "pinia";
type Record ={id: number, name: string, record: number, gameOver: boolean};


export const records = defineStore("record", {
    state:()=>({
        personajes:[] as Record[],
        id:0,
    }),

    actions:{

    addRecord(record: number, enemy: Fighter, hero: Fighter, gameOver: boolean){

        if (!enemy.isAlive()) {
            
            const nuevoRecord = {id: this.id++, name: "Personaje 2", record: 1000, gameOver: false}
            this.personajes.push(nuevoRecord)

        } else if(!hero.isAlive()){

            const nuevoRecord = {id: this.id++, name: "Personaje 1", record: 1000, gameOver: false}
            this.personajes.push(nuevoRecord)

        }

        return gameOver = true;

    }

    }

})
