import { GameLevel } from "./GameLevel";

export default class Save {
    private lives: number;
    private level: number;
    private gameLevel: GameLevel;

    constructor(lives: number, level: number, gameLevel: GameLevel) {
        this.lives = lives;
        this.level = level;
        this.gameLevel = gameLevel;
    }

    public getLives(): number {
        return this.lives;
    }

    public getLevel(): number {
        return this.level;
    }

    public getGameLeveL(): GameLevel {
        return this.gameLevel;
    }
}
