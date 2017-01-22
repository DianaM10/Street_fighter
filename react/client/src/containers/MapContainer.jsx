import React from 'react'

class MapContainer extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      venues: [],
      selectedVenue: null
    }
    this.setVenues = this.setVenues.bind(this)
    this.setSelectedVenue = this.setSelectedVenue.bind(this)
  }

  setVenues(venues) {
    this.setState({
      venues: venues
    })
  }

  setSelectedVenue(venue) {
    this.setState({
      selectedVenue: venue
    })
  }

  componentDidMount() {
    const map =new google.maps.Map(this.refs.map, {
      center:{lat: 40, lng: 20},
      zoom: 2
    })
    var url = "http://localhost:3000/venues"
    var request = new XMLHttpRequest()
    request.open("GET", url)
    request.onload = () => {
      if (request.status !== 200) return
      var data = JSON.parse(request.responseText)
      this.setVenues(data.venues)
    }
    request.send();
  }

  render() {
    const mapStyle = {
      width: 500,
      height: 300,
      border: '1px solid black'
    }
    return (
      <div ref="map" style={mapStyle}>Map</div>
      )
  }
}

export default MapContainer