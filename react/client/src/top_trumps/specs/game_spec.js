import assert from "assert"
import Game from "../game"
import Deck from "../deck"
import Player from '../player'
import ComputerPlayer from '../computer_player'

let game
let game2
let deck
let player1
let compPlayer


describe("Game", () => {
  beforeEach(() => {
    let stubDeck = [1, 2, 3, 4, 5, 6]
    compPlayer = new ComputerPlayer()
    game = new Game(stubDeck, 3, compPlayer)
    player1 = new Player("Paul")
    deck = new Deck([{
    id: 5,
    name: "Blanka",
    homeCountry: "Brazil",
    fightingStyle: "Electricity, feral maneuvers",
    quote: "Seeing you in action is a joke!",
    abilities: {
                strength: 12,
                agility:  13,
                defense:  14,
                intelligence: 10,
                charm: 6,
                resolve: 15,
                range: 11
              }
  },
  {
    id: 6,
    name: "Cammy",
    homeCountry: "UK",
    fightingStyle: "Shadaloo",
    quote: "You must enjoy being beat. Let me remodel your face one more time.",
    abilities:{
                strength: 12,
                agility:  15,
                defense:  11,
                intelligence: 10,
                charm: 10,
                resolve: 12,
                range: 10
              }
  },
  {
    id: 7,
    name: "Chun Li",
    homeCountry: "China",
    fightingStyle: "Chinese martial arts",
    quote: "Want to see my Kung-Fu? I'll show you",
    abilities:{
                strength: 14,
                agility:  17,
                defense:  12,
                intelligence: 13,
                charm: 14,
                resolve: 16,
                range: 12
              }
  },
  {
    id: 8,
    name: "Cody",
    homeCountry: "USA",
    fightingStyle: "Underworld brawling",
    quote: "Well now, let's see if we can't do somethin' about my boredom.",
    abilities:{
                strength: 12,
                agility:  11,
                defense:  10,
                intelligence: 9,
                charm: 11,
                resolve: 7,
                range: 13,
              }
  }])
    game2 = new Game(deck, 1, compPlayer)
    game2.addPlayer(player1)
  })

  it("should start with a computer player", () => {
    assert.equal(1, game.playerCount())
  })

  it("should start with a deck", () => {
    assert.equal(true, game.deck.length > 0)
  })

  it("should be able add a player", () => {
    let player1Stub = {name: "Diana", hand: []}
    game.addPlayer(player1Stub)
    assert.equal(2, game.playerCount())
  })

  it("should have a hand size", () => {
    assert.equal(3, game.handSize)
  })

  it("should be able to deal cards to each player", () => {
    game2.deal()
    assert.equal(1, player1.cardCount())
    assert.equal(1, compPlayer.cardCount())
  })

  it("should be able to play a round", () => {
    game2.deal()
    game2.playRound("resolve")
    assert.equal(2, player1.cardCount())
    assert.equal(0, compPlayer.cardCount())
  })

  it("should be able to populate and display table", () =>{
    game2.deal()
    game2.populateTable()
    assert.equal(2, game2.table.length)
  })

  it("should be able to compare abilities when one is selected", () => {
    game2.deal()
    game2.populateTable()
    game2.compareAbility("defense")
    assert.equal(0, compPlayer.cardCount())
    assert.equal(2, player1.cardCount())
  })

  it("should be able to determine round winner", () => {
    game2.deal()
    game2.populateTable()
    game2.compareAbility("defense")
    assert.equal(player1, game2.roundWinner())

  })

  it("should be able to determine draw", () => {
    game2.deal()
    game2.populateTable()
    game2.compareAbility("intelligence")
    assert.equal(0, player1.cardCount())
    assert.equal(2, game2.table.length)
  })

  it("should be able to check if game has been won", () => {
    game2.deal()
    game2.populateTable()
    game2.compareAbility("defense")
    assert.equal(0, compPlayer.cardCount())
    assert.equal(2, player1.cardCount())
    assert.equal(true, game2.isGameWon)
  })

  it("should be able to show winning card", () => {
    game2.deal()
    game2.populateTable()
    game2.compareAbility("defense")
    assert.equal(0, compPlayer.cardCount())
    assert.equal(2, player1.cardCount())
    assert.equal(true, game2.isGameWon)
    assert.equal("Blanka", game2.winningCard.name)
  })

  it("should be able to count rounds", () => {
    game2.deal()
    game2.populateTable()
    game2.compareAbility("defense")
    assert.equal(1, game2.roundCount)
  })

})