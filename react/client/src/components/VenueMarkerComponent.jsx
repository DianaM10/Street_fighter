import React from 'react'
import VenuePreview from '../components/VenuePreview'

class VenueMarkerComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedVenue: null
    }
  }

  componentDidUpdate() {
    console.log("venueMarker updated")
  }

  componentDidMount() {
    console.log("componentDidMount")
    console.log("country", this.props.country)
    this.addVenueMarkers()
  }

  setSelectedVenue(venue) {
    this.setState({
      selectedVenue: venue
    })
  }

  addVenueMarkers() {
    const venues = this.props.country.venues
    this.venueMarkers = venues.map((venue) => {
      const marker = new google.maps.Marker({
        position: venue.coords,
        map: this.props.map,
        icon: {
          url: "/images/fist_icon.ico",
          scaledSize: new google.maps.Size(50, 50)
        }
      })
      this.addVenueClickListener(marker, venue)
      this.addVenueMouseOverListener(marker, venue)
      this.addVenueMouseOutListener(marker, venue)
      return marker
    })
  }

  addVenueClickListener(marker, venue) {
    marker.addListener('click', (event) => {
      console.log('event is:', event)
      console.log('this is:', this)
      console.log('marker is:', marker)
      console.log('click listener fired')
      this.props.setVenue(venue)
    })
  }
  addVenueMouseOverListener(marker, venue) {
    marker.addListener('mouseover', (event) => {
      console.log('event is:', event)
      console.log('this is:', this)
      console.log('marker is:', marker)
      console.log("mouseOver listener fired")
      this.setSelectedVenue(venue)
    })
  }
  addVenueMouseOutListener(marker) {
    marker.addListener('mouseout', (event) => {
      console.log('event is:', event)
      console.log('this is:', this)
      console.log('marker is:', marker)
      console.log("mouseOut listener fired")
      this.setSelectedVenue(null)
    })
  }

  render() {
    console.log("VenueMarker container rendered") 
    return <VenuePreview venue={this.state.selectedVenue}/>
  }
}

export default VenueMarkerComponent