
// Inicialización de variables
const d: Document = document;
let x:   number = 0, y:  number = 0;
let x2:  number = 0, y2: number = 0;
let keysPressed: {
    [ key: number ]: boolean 
};

window.addEventListener('keydown', function(event) {
    keysPressed[event.keyCode] = true;
});

window.addEventListener('keyup', function(event) {
    keysPressed[event.keyCode] = false;
});

// Mover el primer personaje
export function moveBall( ball: string, stage: string): void{

    const $ball:      HTMLElement | null    = d.querySelector(ball)
    const $stage:     HTMLElement | null    = d.querySelector(stage)
    const limitBall:  ClientRect  | DOMRect = $ball!.getBoundingClientRect();
    const limitStage: ClientRect  | DOMRect = $stage!.getBoundingClientRect(); 

    if (keysPressed[65] && limitBall.left > limitStage.left) {
        x--;
    }
    if (keysPressed[68] && limitBall.right < limitStage.right) {
        x++;
    }
    if (keysPressed[87] && limitBall.top > limitStage.top) {
        y--;
    }
    if (keysPressed[83] && limitBall.bottom < limitStage.bottom) {
        y++;
    }
    
    move($ball!, x, y);
}   

// Mover el segundo personaje
export const moveBall2 = ( ball2: string, stage: string): void => {
    const $ball2:      HTMLElement | null      = d.querySelector(ball2)
    const $stage:      HTMLElement | null     = d.querySelector(stage)
    const limitBall:   ClientRect  | DOMRect  = $ball2!.getBoundingClientRect();
    const limitStage:  ClientRect  | DOMRect = $stage!.getBoundingClientRect(); 
    
    if (keysPressed[38] && limitBall.top > limitStage.top) {
        y2--;
    }
    if (keysPressed[40] && limitBall.bottom < limitStage.bottom) {
        y2++;
    }
    if (keysPressed[37] && limitBall.left > limitStage.left) {
        x2--;
    }
    if (keysPressed[39] && limitBall.right < limitStage.right) {
        x2++;
    }

    move($ball2!, x2, y2);
}

// Boolean, true si se puede atacar en una distancia menor a 80
export function attackIfClose(ball1: string, ball2: string): boolean {
    const $ball1 = d.querySelector(ball1);
    const $ball2 = d.querySelector(ball2);
    const rect1 = $ball1!.getBoundingClientRect();
    const rect2 = $ball2!.getBoundingClientRect();

    const dx = rect1.left - rect2.left;
    const dy = rect1.top - rect2.top;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < 80
}

// Transicion de los elementos, movimiento.
const move = (ball: HTMLElement, x: number, y: number): void => {
    ball.style.transform = `translate(${ x * 10 }px, ${ y * 10 }px)`;
}
