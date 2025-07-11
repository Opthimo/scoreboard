import { Component } from '@angular/core';
import { ScoreboardPageComponent } from './scoreboard-page-component/scoreboard-page-component';

@Component({
  selector: 'app-root',
  imports: [ScoreboardPageComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'scoreboard';
}