import React from 'react'

class MarkerComponent extends React.Component {
  constructor(props) {
    super(props)
    this.countryMarkers = []
  }
  componentDidUpdate() {
    if (this.props.selectedCountry) {
      this.addVenueMarkers()
    } else {
      this.addCountryMarkers()
    }
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
      return marker
      // this.addVenueClickListener(venueMarker, venue);
      // this.addVenueMouseOverListener(venueMarker, venue);
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

  render() {
    console.log("marker container rendered")
    return null
  }
}

export default MarkerComponent