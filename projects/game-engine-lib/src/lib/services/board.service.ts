import { Injectable } from "@angular/core";
import { IPiece } from "../components/piece/piece.component";

@Injectable({
  providedIn: "root",
})
export class BoardService {
  constructor() {}

  public freezeBoard(board: number[][], piece: IPiece) {
    piece.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          board[y + piece.y][x + piece.x] = value;
        }
      });
    });
  }
}
