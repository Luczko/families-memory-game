import { Component, OnInit } from '@angular/core';
import { SingleCard } from './singleCard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'memory-game';

  cardImages = ['img1', 'img2', 'img3', 'img4', 'img5'];

  cards: SingleCard[] = [];
  turnedCards: SingleCard[] = [];

  ngOnInit(): void {
    this.setupGame();
  }

  shuffleDeck(deck: any[]): any[] {
    return deck
      .map((a) => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map((a) => a[1]);
  }

  setupGame(): void {
    this.cards = [];
    this.cardImages.forEach((img) => {
      const card: SingleCard = {
        image: img,
        state: 'back',
      };
      this.cards.push({ ...card });
      this.cards.push({ ...card });
    });

    this.cards = this.shuffleDeck(this.cards);
  }

  clickedCard(index: number): void {
    const selectedCard = this.cards[index];

    if (selectedCard.state === 'back' && this.turnedCards.length < 2) {
      selectedCard.state = 'front';
      this.turnedCards.push(selectedCard);

      if (this.turnedCards.length === 2) {
        this.checkIfMatching();
      }
    } else if (selectedCard.state === 'front') {
      selectedCard.state = 'back';
      this.turnedCards.pop();
    }
  }

  checkIfMatching(): void {
    setTimeout(() => {
      const cardOne = this.turnedCards[0];
      const cardTwo = this.turnedCards[1];
      const nextState = cardOne.image === cardTwo.image ? 'matched' : 'back';
      cardOne.state = cardTwo.state = nextState;

      this.turnedCards = [];
    }, 500);
  }
}
