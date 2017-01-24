import React from 'react'
import MapComponent from '../components/MapComponent'
import MarkerComponent from '../components/MarkerComponent'
import MapLogo from '../components/MapLogo'




class MapContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      selectedCountry: null,
      map: null,
      mapPosition:{lat: 40, lng: 20},
      mapZoom: 2
    }
    this.setMap = this.setMap.bind(this)
    this.updateMap = this.updateMap.bind(this)
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

  updateMap(coords, zoom, country) {
    this.setState({
      mapPosition: coords,
      mapZoom: zoom,
      selectedCountry: country
    })
  }

  render() {
    console.log("map container rendered")
    return (
      <div>
      <MapComponent  zoom={this.state.mapZoom} position={this.state.mapPosition} setMap={this.setMap} />
      <MarkerComponent selectedCountry={this.state.selectedCountry} countries={this.state.countries} map={this.state.map} updateMap={this.updateMap} setVenue={this.props.setVenue}/>
      <MapLogo updateMap={this.updateMap} map={this.state.map}/>
      </div>
      )
  }
}

export default MapContainer