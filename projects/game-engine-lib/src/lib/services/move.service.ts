import { Injectable } from "@angular/core";
import { IPiece } from "../components/piece/piece.component";
import { Key } from "../constants";
import { GameEngineLibService } from "./game-engine-lib.service";

export type Moves = Record<Key, Move>;

export type Move = (piece: IPiece) => IPiece;

@Injectable({
  providedIn: "root",
})
export class MoveService {
  public readonly move: Moves = {
    [Key.UP]: (piece: IPiece) => ({
      ...piece,
      y: piece.y - 1,
    }),
    [Key.DOWN]: (piece: IPiece) => ({
      ...piece,
      y: piece.y + 1,
    }),
    [Key.LEFT]: (piece: IPiece) => ({
      ...piece,
      x: piece.x - 1,
    }),
    [Key.RIGHT]: (piece: IPiece) => ({
      ...piece,
      x: piece.x + 1,
    }),
    [Key.SPACE]: (piece: IPiece) => ({
      ...piece,
      y: piece.y + 1,
    }),
    [Key.ESC]: (piece: IPiece) => piece,
  };

  constructor(private readonly gameEngineLibService: GameEngineLibService) {}

  public getMove(key: Key): (piece: IPiece) => IPiece {
    return this.move[key];
  }

  public getMoves(): Moves {
    return this.move;
  }

  public getGameEngineLibService(): GameEngineLibService {
    return this.gameEngineLibService;
  }
}
