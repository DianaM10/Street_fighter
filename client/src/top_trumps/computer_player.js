var ComputerPlayer = function(){
  this.name = "CP"
  this.hand =[]
  this.chosenAbility = ""
}

ComputerPlayer.prototype = {
  cardCount: function() {
    return this.hand.length;
  },
  addCard: function(card) {
    this.hand.push(card);
  },
  removeCard: function() {
    this.selectHighestAbility()
    return this.hand.shift();
  },
  selectHighestAbility: function() {
     var abilities = this.hand[0].abilities
     var highestAbility = ""
     var highestValue = 0
     for (var ability in abilities) {
      if (abilities[ability] > highestValue) {
        highestValue = abilities[ability]
        highestAbility = ability
      }
     }
     this.chosenAbility = highestAbility
  }
}

module.exports = ComputerPlayer;