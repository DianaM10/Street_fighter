var ComputerPlayer = require('../computer_player');
var assert = require('assert');

describe('ComputerPlayer', function() {

  var comp;


  beforeEach(function() {
    comp = new ComputerPlayer();
    

  });

  it('should be called CP', function(){
    assert.equal("CP", comp.name);
  });

  it('should start with empty hand', function() {
    assert.equal(0, comp.cardCount());
  });

  it('should be able to add card to the hand', function() {
    var cardStub = {name: "M. Bison"};
    comp.addCard(cardStub);
    assert.equal(1, comp.cardCount());
  });

  it('should be able to remove top card on deck', function() {
    var cardStub1 = {name: "Dhalsim"};
    var cardStub2 = {name: "M. Bison"};
    var cardStub3 = {name: "Chun Li"};
    comp.addCard(cardStub1);
    comp.addCard(cardStub2);
    comp.addCard(cardStub3);
    assert.equal( cardStub1, comp.removeCard());
  });

  it('should be able to pick highest ability of top card', function() {
    var cardStub1 = {
      name: "Dhalsim", 
      abilities: {
          strength: 12,
          agility:  13,
          defense:  14,
          intelligence: 10,
          charm: 6,
          resolve: 15,
          range: 11
        }
      };
    comp.addCard(cardStub1);
    comp.selectHighestAbility()
    assert.equal("resolve", comp.chosenAbility)
  })

})