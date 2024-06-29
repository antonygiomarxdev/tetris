import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {BoardComponent} from "../../../game-engine-lib/src/lib/components/board/board.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'tetris';
}
