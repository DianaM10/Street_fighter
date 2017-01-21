import Deck from '../deck'
import assert from 'assert'

describe("Deck", (cards) => {
  it("start with 2 cards", () => {
       const cards = [
        {name: "fighter1", strength: 15},
        {name: "fighter2", strength: 10}
      ]
      const deck = new Deck(cards)
      assert.equal(2, deck.cards.length)
  })
    
})
