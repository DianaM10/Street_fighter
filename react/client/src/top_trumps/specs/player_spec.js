import Player from '../player'
import assert from 'assert'

describe('Player', function() {

  let player1

  beforeEach(function() {
    player1 = new Player("Paul")
  })

  it('should have a name', function(){
    assert.equal("Paul", player1.name)
  })

  it('should start with empty hand', function() {
    assert.equal(0, player1.cardCount())
  })

  it('should be able to add card to the hand', function() {
    const cardStub = {name: "M. Bison"}
    player1.addCard(cardStub)
    assert.equal(1, player1.cardCount())
  })

  it('should be able to remove top card on deck', function() {
    const cardStub1 = {name: "Dhalsim"}
    const cardStub2 = {name: "M. Bison"}
    const cardStub3 = {name: "Chun Li"}
    player1.addCard(cardStub1)
    player1.addCard(cardStub2)
    player1.addCard(cardStub3)
    assert.equal( cardStub1, player1.removeCard())
  })

})