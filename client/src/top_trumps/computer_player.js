var ComputerPlayer = function(){
  this.name = "CP";
  this.hand =[]
}

ComputerPlayer.prototype = {
  cardCount: function() {
    return this.hand.length;
  },
  addCard: function(card) {
    this.hand.push(card);
  },
  removeCard: function() {
    return this.hand.shift();
  },
}

module.exports = ComputerPlayer;