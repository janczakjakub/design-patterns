import { GameLevel } from "./GameLevel";
import Save from "./Save";

export default class GameState {
    private lives: number;
    private level: number;
    private gameLevel: GameLevel;

    constructor(lives: number, level: number, gameLevel: GameLevel) {
        this.lives = lives;
        this.level = level;
        this.gameLevel = gameLevel;
    }

    public changeGameLevel(gameLevel: GameLevel): void {
        this.gameLevel = gameLevel;
    }

    public loseLive(): void {
        this.lives = --this.lives;
    }

    public goNextLevel(): void {
        this.level = ++this.level;
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

    public showGameState(): void {
        console.log(
            `Game level: ${this.getGameLeveL()} | Lives: ${this.getLives()} | Level: ${this.getLevel()}|`
        );
    }

    public saveGameState(): Save {
        return new Save(this.lives, this.level, this.gameLevel);
    }

    public restoreGameState(saveObj: Save): void {
        this.lives = saveObj.getLives();
        this.level = saveObj.getLevel();
        this.gameLevel = saveObj.getGameLeveL();
    }
}
