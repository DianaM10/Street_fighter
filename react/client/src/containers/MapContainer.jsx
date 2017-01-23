import React from 'react'
import getStyles from '../views/map_styles'

class MapContainer extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      countries: [],
      selectedVenue: null,
      map: null
    }
    this.setSelectedVenue = this.setSelectedVenue.bind(this)
  }

  setSelectedVenue(venue) {
    this.setState({
      selectedVenue: venue
    })
  }

  componentDidMount() {
    this.getMap()
    this.getCountries()
  }

  getMap() {
    const map =new google.maps.Map(this.refs.map, {
      center:{lat: 40, lng: 20},
      zoom: 2,
      disableDefaultUI: true,
      draggable: false,
      zoomControl: false,
      scaleControl: false,
      scrollwheel: false,
      styles: getStyles()
    })
    this.setState({ map: map})
  }

  getCountries() {
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

  render() {
    return (
      <div id="map-container" ref="map">Map</div>
      )
  }
}

export default MapContainer