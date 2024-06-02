import type { Fighter } from "./Character";

const recordP1: number = 0;
const recordP2: number = 0;


export const recordCharacter = (gameOver: boolean, enemy: Fighter, hero: Fighter) => {

    if (!enemy.isAlive()) {
        
        return recordP2 == 1000;

    }else if (!hero.isAlive()) {
        
        return recordP1 == 1000;
    }

    return gameOver;
}
