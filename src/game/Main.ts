import { checkGameStatus } from './GameLogic';
import { Fighter }         from './Character';
// import { startAudio }      from '../utils/AudioReproducer';
import { 
    updateBorderColor, 
    addAndRemoveClass, 
    updateHealth, 
} from '../utils/InterfaceHelper';
import { 
    attackIfClose, 
    moveBall, 
    moveBall2, 
} from './Keyboard';

// Inicialización de los personajes y variables
const character   = new Fighter({ name: "fighter", life: 300});
const nemesis     = new Fighter({ name: "nemesis", life: 300});
const audio       = new Audio('../public/Audio.mp3');
audio.loop        = true;
let audioStarted  = false;

// Constantes
const BALL_CLASS          = '.ball';
const STAGE_CLASS         = '.stage';
const BALL2_CLASS         = '.ball2';
const NEMESIS_IMG_ID      = 'nemesisimg';
const CHARACTER_IMG_ID    = 'characterimg';
const ENEMY_HEALTH_ID     = 'enemyHealth';
const CHARACTER_HEALTH_ID = 'characterHealth';



// Reproducir música
// startAudio(audio, audioStarted);

// Mover los personajes y atacar
const game = () => {
  let gameOver = false;



  // Se mueven los personajes
  document.addEventListener("keydown", (e) => {
    moveBall(BALL_CLASS, STAGE_CLASS);
    moveBall2(BALL2_CLASS, STAGE_CLASS);
  
    const isEnableToAtack = attackIfClose(BALL_CLASS, BALL2_CLASS);
  
    if (isEnableToAtack) {
      updateBorderColor(BALL_CLASS, 'red');
      updateBorderColor(BALL2_CLASS, 'red');
    } else {
      updateBorderColor(BALL_CLASS, 'gold');
      updateBorderColor(BALL2_CLASS, 'gold');
    }
  });
  
  // Solo ataca si está cerca
  document.addEventListener("keydown", function (event) {
    // El juego a terminado
    if(gameOver === true){ 
      return window.alert("¡El juego ha terminado! \n\nPara seguir jugando reinicia la página!");
    }
    const isEnableToAtack = attackIfClose(BALL_CLASS, BALL2_CLASS);
  
    if (isEnableToAtack && event.key === "x") {
      gameOver = checkGameStatus(gameOver, character, nemesis);
      character.atack( nemesis )
      addAndRemoveClass(NEMESIS_IMG_ID, 'atacked', 500);
      updateHealth(ENEMY_HEALTH_ID, nemesis.getHealth());
    } else if (isEnableToAtack && event.key === "n") {
      gameOver = checkGameStatus(gameOver, character, nemesis);
      nemesis.atack( character )
      addAndRemoveClass(CHARACTER_IMG_ID, 'atacked', 500);
      updateHealth(CHARACTER_HEALTH_ID, character.getHealth());
  }
  });
}

// Inicializa el juego
game();