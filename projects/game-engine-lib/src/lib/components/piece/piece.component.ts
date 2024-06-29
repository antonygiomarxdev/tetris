import {Component} from '@angular/core';

export interface IPiece {
  x: number;
  y: number;
  color: string;
  shape: number[][];

}

@Component({
  selector: 'lib-piece',
  standalone: true,
  imports: [],
  templateUrl: './piece.component.html',
  styleUrl: './piece.component.css'
})
export class PieceComponent {

  x: number;
  y: number;
  color: string;
  shape: number[][];
  ctx: CanvasRenderingContext2D;

  constructor(
    ctx: CanvasRenderingContext2D
  ) {
    this.x = 0;
    this.y = 0;
    this.color = '';
    this.shape = [];
    this.ctx = ctx;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        // this.x & this.y = position on the board
        // x & y position of the shape
        // value to draw
        if (value > 0) {
          this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
        }
      });
    });
  }

  move(p: IPiece) {
    this.x = p.x;
    this.y = p.y;
    this.shape = p.shape;
  }

  rotate() {
    const N = this.shape.length;
    // Clone with JSON for immutability
    const result = this.shape.map((row, i) =>
      row.map((val, j) => this.shape[N - j - 1][i])
    );
    return result;
  }


  drawNext(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = this.color;
    this.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          ctx.fillRect(x, y, 1, 1);
        }
      });
    });
  }
}
