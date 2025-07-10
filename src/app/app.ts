import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScoreboardPageComponent } from './scoreboard-page-component/scoreboard-page-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ScoreboardPageComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'scoreboard';
}