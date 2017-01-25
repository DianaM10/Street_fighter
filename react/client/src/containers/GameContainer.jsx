import React from 'react'
import MapContainer from './MapContainer'
import BoardContainer from './BoardContainer'


class GameContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedVenue: null
    }
    this.setVenue = this.setVenue.bind(this)
  }
  
  setVenue(venue) {
    console.log("GameContainer, setVenue", venue)
      this.setState({
        selectedVenue: venue
      })
      console.log("GameContainer, setVenue", this.state.selectedVenue)
    }
    
   
  render() {
    if (this.state.selectedVenue) {
      return <BoardContainer venue={this.state.selectedVenue} />
    } else {
      return <MapContainer setVenue={this.setVenue}/>
    }
  }
}


  export default GameContainer