class ComputerPlayer {
  constructor(name) {
  this.name = "CP"
  this.hand =[]
  this.chosenAbility = ""
}
  cardCount() {
    return this.hand.length;
  }

  addCard(card) {
    this.hand.push(card);
  }

  removeCard() {
    this.selectHighestAbility()
    return this.hand.shift();
  }

  selectHighestAbility() {
     let abilities = this.hand[0].abilities
     let highestAbility = ""
     let highestValue = 0
     for (let ability in abilities) {
      if (abilities[ability] > highestValue) {
        highestValue = abilities[ability]
        highestAbility = ability
      }
     }
     this.chosenAbility = highestAbility
  }
}

module.exports = ComputerPlayer;