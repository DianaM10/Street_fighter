class Player {
  constructor(name) {
    this.name = name
    this.hand = []
  }

  cardCount() {
    return this.hand.length 
  }

  addCard(card) {
    this.hand.push(card)
  }

  removeCard() {
    return this.hand.shift()
  }
}

module.exports = Player