import React from 'react'
import VenuePreview from '../components/VenuePreview'

class MarkerComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedVenue: null
    }
    this.countryMarkers = []
    this.venueMarkers = []
  }


  componentDidMount() {

  }

  componentWillUpdate() {
    for(let marker of this.venueMarkers) {
      marker.setMap(null)
    }
  }

  componentDidUpdate() {
    if (this.props.selectedCountry) {
      this.addVenueMarkers()
    } else {
      this.addCountryMarkers()
    }
  }

  setSelectedVenue(venue) {
    this.setState({
      selectedVenue: venue
    })
  }

  addVenueMarkers() {
    const venues = this.props.selectedCountry.venues
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
      // this.addVenueMouseOverListener(marker, venue)
      // this.addVenueMouseOutListener(marker, venue)
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
      // this.addVenueMouseOutListener(marker, venue)
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

  addCountryMarkers() {
    console.log("markers are being set")
    this.countryMarkers = this.props.countries.map((country) => {  
      const marker = new google.maps.Marker({
        position: country.countryCoords,
        map: this.props.map,
        icon: {
          url: "/images/country_flags/" + country.flag,
          scaledSize: new google.maps.Size(50, 30)
        }
      })
      marker.country = country;
      this.addMarkerListener(marker, country.countryCoords)
      return marker
    })
  }

  addMarkerListener(marker, countryCoords) {
    marker.addListener('click', () => {
      console.log("markers", this.countryMarkers)
      for(let marker of this.countryMarkers) {
        marker.setMap(null)
      }
      this.props.updateMap(countryCoords, 5, marker.country)
    })
  }

  // shouldComponentUpdate(nextProps, nextState) {

  // }

  render() {
    console.log("marker container rendered") 
    return <VenuePreview venue={this.state.selectedVenue} setVenue={this.props.setVenue}/>
  }
}

export default MarkerComponent