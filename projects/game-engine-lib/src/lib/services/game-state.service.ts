import { Injectable } from "@angular/core";

export interface GameState {
  score: number;
  level: number;
  lines: number;
  levelLines: number;
}

@Injectable({
  providedIn: "root",
})
export class GameStateService {
  public gameState: GameState = {
    score: 0,
    level: 1,
    lines: 0,
    levelLines: 0,
  };

  constructor() {}

  public resetGameState() {
    this.gameState = {
      score: 0,
      level: 1,
      lines: 0,
      levelLines: 0,
    };
  }

  public updateScore(score: number) {
    this.gameState.score += score;
  }

  public updateLevel(level: number) {
    this.gameState.level = level;
  }

  public updateLines(lines: number) {
    this.gameState.lines += lines;
  }

  public updateLevelLines(lines: number) {
    this.gameState.levelLines += lines;
  }

  public getGameState() {
    return this.gameState;
  }

  public setGameState(gameState: GameState) {
    this.gameState = gameState;
  }

  public getScore() {
    return this.gameState.score;
  }

  public getLevel() {
    return this.gameState.level;
  }

  public getLines() {
    return this.gameState.lines;
  }

  public getLevelLines() {
    return this.gameState.levelLines;
  }

  public resetScore() {
    this.gameState.score = 0;
  }

  public resetLevel() {
    this.gameState.level = 1;
  }

  public resetLines() {
    this.gameState.lines = 0;
  }

  public resetLevelLines() {
    this.gameState.levelLines = 0;
  }

  public resetScoreAndLines() {
    this.resetScore();
    this.resetLines();
  }

  public resetScoreAndLevel() {
    this.resetScore();
    this.resetLevel();
  }

  public resetScoreAndLevelAndLines() {
    this.resetScore();
    this.resetLevel();
    this.resetLines();
  }
}
