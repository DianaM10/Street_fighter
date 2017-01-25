import React from 'react'


class Card extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div>
      <section id="player1Card">
        Fighter Card 1
      </section>
      <section id="player2Card">
        Fighter Card 2
      </section>
      </div>
      )
  }
}

export default Card