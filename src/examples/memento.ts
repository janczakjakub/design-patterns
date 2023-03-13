import * as lib from "../index";

let gameStateObj = new lib.memento.GameState(10, 0, lib.memento.GameLevel.MEDIUM);

gameStateObj.goNextLevel();
gameStateObj.goNextLevel();
gameStateObj.loseLive();
gameStateObj.showGameState();
const saveState1 = gameStateObj.saveGameState();

gameStateObj.changeGameLevel(lib.memento.GameLevel.HARD);
gameStateObj.loseLive();
gameStateObj.loseLive();
gameStateObj.loseLive();
gameStateObj.loseLive();
gameStateObj.goNextLevel();
gameStateObj.loseLive();
gameStateObj.loseLive();
gameStateObj.showGameState();
const saveState2 = gameStateObj.saveGameState();

gameStateObj.restoreGameState(saveState1);
gameStateObj.showGameState();
