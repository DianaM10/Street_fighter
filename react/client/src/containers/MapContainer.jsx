import React from 'react'
import MapComponent from '../components/MapComponent'
import MarkerComponent from '../components/MarkerComponent'

class MapContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      selectedVenue: null,
      map: null,
      mapPosition:{lat: 40, lng: 20},
      mapZoom: 2

    }
    this.setSelectedVenue = this.setSelectedVenue.bind(this)
    this.setMap = this.setMap.bind(this)
    this.updateMap = this.updateMap.bind(this)
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

  updateMap(coords, zoom) {
    this.setState({
      mapPosition: coords,
      mapZoom: zoom})
  }

  render() {
    console.log("map container rendered")
    return (
      <div>
      <MapComponent  zoom={this.state.mapZoom} position={this.state.mapPosition} setMap={this.setMap} />
      <MarkerComponent countries={this.state.countries} map={this.state.map} updateMap={this.updateMap}/>
      </div>
      )
  }
}

export default MapContainer