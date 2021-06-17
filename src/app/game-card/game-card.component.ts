import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SingleCard } from '../singleCard';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'],
})
export class GameCardComponent implements OnInit {
  @Input() card: SingleCard;

  @Output() clickedCard = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
