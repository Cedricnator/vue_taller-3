import type { Fighter } from "./Character";

let recordP1: number = 0;
let recordP2: number = 0;


export const recordCharacter = (gameOver: boolean, enemy: Fighter, hero: Fighter) => {

    if (!enemy.isAlive()) {

        localStorage.setItem("recordP2", "" + recordP2 + 1000)

    }else if (!hero.isAlive()) {

        localStorage.setItem("recordP1", "" + recordP1 + 1000)
        
    }

    return gameOver;
}
