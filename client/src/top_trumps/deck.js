class Deck {
  constructor(card) {
    this.cards = cards
  }

  shuffleCards() {
    for(let i = this.cards.length - 1; i > 0; i--) {
      let rand = Math.floor(Math.random() * (i + 1))
      let tempCard = this.cards[i]
      this.cards[i] = this.cards[rand]
      this.cards[rand] = tempCard
    }
  }
}

export default Deck
