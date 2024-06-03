// Clase que representa a los jugadores
interface Options {
    name: string;
    life: number;
}

export class Fighter {
    private id:     string;
    private name:   string;
    private life:   number;

    constructor( options: Options ){
        const { name, life } = options
        this.name = name;
        this.life = life;
        this.id   = "";
    }

    // Si no esta vivo, el juego acaba
    isAlive(): boolean {
        return this.life > 0;
    }

    // Atacar al enemigo, reducir vida
    atack(target: Fighter): void {
        const damage = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
        console.log(`${this.name} deals ${damage} DMG to ${target.name}`);
        target.life -= damage;
    }

    // Al recibir daño
    getHealth(): number {
        return this.life;
    }
}