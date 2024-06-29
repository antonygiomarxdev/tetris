import {Injectable} from '@angular/core';
import {IPiece} from "../components/piece/piece.component";

@Injectable({
  providedIn: 'root'
})
export class GameEngineLibService {

  constructor() {
  }

  rotate(p: IPiece): IPiece {
    const N = p.shape.length;
    // Clone with JSON for immutability
    const result = p.shape.map((row, i) =>
      row.map((val, j) => p.shape[N - j - 1][i])
    );
    return {...p, shape: result};
  }

  valid(p: IPiece, board: number[][]): boolean {
    return p.shape.every((row, dy) => {
      return row.every((value, dx) => {
        const x = p.x + dx;
        const y = p.y + dy;
        return (
          this.isEmpty(value) ||
          (this.isInsideWalls(x) && this.isAboveFloor(y) && this.isEmpty(board[y][x]))
        );
      });
    });
  }

  isEmpty(value: number): boolean {
    return value === 0;
  }

  isInsideWalls(x: number): boolean {
    return x >= 0 && x < 10;
  }

  isAboveFloor(y: number): boolean {
    return y >= 0;
  }

  getLinesClearedPoints(lines: number, level: number): number {
    const lineClearPoints =
      lines === 1
        ? 40
        : lines === 2
          ? 100
          : lines === 3
            ? 300
            : lines === 4
              ? 1200
              : 0;
    return (level + 1) * lineClearPoints;
  }
}
