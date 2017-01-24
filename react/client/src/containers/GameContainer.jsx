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
      this.setState = {
        selectedVenue: venue
      }
    }
   
  render() {
    if (this.state.selectedVenue) {
      return <BoardContainer />
    } else {
      return <MapContainer setVenue={this.setVenue}/>
    }
  }
}


  export default GameContainer