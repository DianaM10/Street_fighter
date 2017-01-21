import ComputerPlayer from '../computer_player'
import assert from 'assert'

let comp

describe('ComputerPlayer', () => {
  
  beforeEach(() => {
    comp = new ComputerPlayer() 
    
  })

  it('should be called CP', () =>{
    console.log("comp", comp)
    assert.equal("CP", comp.name)
  })

  it('should start with empty hand', () => {
    assert.equal(0, comp.cardCount())
  })

  it('should be able to add card to the hand', () => {
    let cardStub = {name: "M. Bison"}
    comp.addCard(cardStub)
    assert.equal(1, comp.cardCount())
  })

  it('should be able to remove top card on deck', () => {
    let cardStub1 = {name: "Dhalsim"}
    let cardStub2 = {name: "M. Bison"}
    let cardStub3 = {name: "Chun Li"}
    comp.addCard(cardStub1)
    comp.addCard(cardStub2)
    console.log("card count1", comp.cardCount)

    comp.addCard(cardStub3)
    console.log("card count", comp.cardCount())
    assert.equal( cardStub1, comp.removeCard())
  })

  it('should be able to pick highest ability of top card', () => {
    let cardStub1 = {
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
      }
    comp.addCard(cardStub1)
    comp.selectHighestAbility()
    assert.equal("resolve", comp.chosenAbility)
  })

})