import React from 'react'
import PlayerBar from '../components/PlayerBar'
import GameVenue from '../components/GameVenue'
import Card from '../components/Card'
import MessageBox from '../components/MessageBox'

class BoardContainer extends React.Component {
  constructor(props) {
    super(props)
  }
   
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