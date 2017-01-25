import React from 'react'


class GameVenue extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <section id="game-body">
        <img src={'/images/venues/'+this.props.venue.image}/>

      </section>
      )
  }
}

export default GameVenue
