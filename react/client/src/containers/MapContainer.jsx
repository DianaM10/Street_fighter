import React from 'react'
import MapComponent from '../components/MapComponent'
import MarkerComponent from '../components/MarkerComponent'

class MapContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      selectedVenue: null,
      map: null
    }
    this.setSelectedVenue = this.setSelectedVenue.bind(this)
    this.setMap = this.setMap.bind(this)
  }

  setSelectedVenue(venue) {
    this.setState({
      selectedVenue: venue
    })
  }

  componentDidMount() {
    var url = "http://localhost:3000/venues"
    var request = new XMLHttpRequest()
    request.open("GET", url)
    request.onload = () => {
      if (request.status !== 200) return
      var data = JSON.parse(request.responseText)
      this.setState({countries: data.countries})
    }
    request.send();
  }

  setMap(map) {
    console.log("map is set")
    
    this.setState({map: map})
  }

  render() {
    console.log("map container rendered")
    return (
      <div>
      <MapComponent countries={this.state.countries} setMap={this.setMap} map={this.state.map}/>
      </div>
      )
  }
}

export default MapContainer