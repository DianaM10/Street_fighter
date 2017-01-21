class Game {
  constructor(deck, handSize, computerPlayer) {
  this.deck = deck
  this.handSize = handSize
  this.players = [computerPlayer]
  this.table = []
  this.currentPlayer
  this.isGameWon = false
  this.winningCard = null
  this.losingCard = null
  this.roundCount = 0
}
  playerCount() {
    return this.players.length
  }
  addPlayer(newPlayer) {
    this.players.unshift(newPlayer)
  }
  shuffleDeck() {
    this.deck.shuffleCards()
  }
  deal() {
    this.currentPlayer = this.players[0]
    let cardCount = 0
    while (cardCount < this.handSize) {
      for (let player of this.players) {
        player.addCard(this.deck.cards.shift())
      }
      cardCount++
    }
  }
  populateTable() {
    this.roundCount++
    this.table.unshift(this.currentPlayer.removeCard())
    this.updateTurn()
    this.table.unshift(this.currentPlayer.removeCard())
    this.updateTurn()
  }
  compareAbility(ability) {
    let firstCard = this.table[1].abilities[ability]
    let secondCard = this.table[0].abilities[ability]
    if(firstCard === secondCard ) {
      this.winningCard = null
      this.losingCard = null
    }
    else if (firstCard > secondCard ) {
      this.winningCard = this.table[1]
      this.losingCard = this.table[0]
      while (this.table.length > 0) {
        this.currentPlayer.addCard(this.table.pop())
      }
    } else {
      this.winningCard = this.table[0]
      this.losingCard = this.table[1]
      this.updateTurn()
        while (this.table.length > 0) {
          this.currentPlayer.addCard(this.table.pop())
        }
    }
    this.gameOverCheck()
  }
  playRound(ability) {
    this.table.unshift(this.currentPlayer.removeCard())
    this.updateTurn()
    this.table.unshift(this.currentPlayer.removeCard())
    let firstCard = this.table[1].abilities[ability]
    let secondCard = this.table[0].abilities[ability]
    if(firstCard === secondCard ) {
      this.winningCard = null
      this.losingCard = null
      return
    }
    else if (firstCard > secondCard) {
      this.winningCard = this.table[1]
      this.losingCard = this.table[0]
      this.updateTurn()
      while (this.table.length > 0) {
        this.currentPlayer.addCard(this.table.pop())
      }
    } else {
      this.winningCard = this.table[0]
      this.losingCard = this.table[1]
        while(this.table.length > 0) {
          this.currentPlayer.addCard(this.table.pop())
        }
    }
    this.gameOverCheck()
  }
  updateTurn() {
    if (this.currentPlayer === this.players[0]) {
      this.currentPlayer = this.players[1]
    } else {
      this.currentPlayer = this.players[0]
    }
  }
  roundWinner() {
    return this.currentPlayer
  }
  gameOverCheck() {
    if (this.players[0].hand.length === 0 || this.players[1].hand.length === 0) {
      this.isGameWon = true
    }
  }
}

export default Game
