import { Component } from '@angular/core';
import { Player } from '../models/player';

@Component({
  selector: 'app-scoreboard-page',
  imports: [],
  templateUrl: './scoreboard-page-component.html',
  styleUrl: './scoreboard-page-component.css'
})
export class ScoreboardPageComponent {
players: Player[] = [
    { id: 1, name: 'Alice', score: 10 },
    { id: 2, name: 'Bob', score: 15 },
    { id: 3, name: 'Charlie', score: 5 },
    { id: 4, name: 'Diana', score: 20 }
  ];

trackByPlayerId(index: number, player: Player): number {
  return player.id;
}
}
