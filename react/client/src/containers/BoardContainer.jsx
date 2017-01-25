import React from 'react'
import PlayerBar from '../components/PlayerBar'
import GameVenue from '../components/GameVenue'
import Card from '../components/Card'
import MessageBox from '../components/MessageBox'

class BoardContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  // display() {
  //   var map = document.getElementById('map-view');
  //   var game = document.getElementById('game');
  //   map.style.display = "none";
  //   game.style.display = "flex";
  //   var gameBody = document.getElementById('gameBody');
  //   gameBody.style.backgroundImage = "url('/images/venues/" + this.venue.image + "')";
  //   gameBody.style.backgroundSize = "100% 100%";
  //   var playerDetails = document.getElementById('playerDetails');

  //   this.buildControlButton();
   
  render() {
    return (
      <div>
        <PlayerBar />
        <GameVenue venue={this.props.venue}/>
        <Card />
        <MessageBox />
      </div>
      )
  }
}


export default BoardContainer