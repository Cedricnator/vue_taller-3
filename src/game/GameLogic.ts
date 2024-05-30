import type { Fighter } from "./Character";


export const checkGameStatus = (gameOver: boolean, enemy: Fighter, hero: Fighter) => {
    if (!enemy.isAlive()) {
        alert("The CHARACTER2 won! Game Over!");
        return true;
    } else if(!hero.isAlive()) {
        alert("The CHARACTER1 won! Game Over!");
        return true;
    }
    return gameOver;
}
