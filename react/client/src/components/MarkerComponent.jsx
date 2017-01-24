import React from 'react'

class MarkerComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      markers: []
    }
  }
  componentDidUpdate() {
    console.log("markers are being set")
    console.log('countries', this.props.countries)
    const markers = this.props.countries.map((country) => {  
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
    })
    
  }
  addMarkerListener(marker, countryCoords) {
    marker.addListener('click', () => {
      this.props.updateMap(countryCoords, 5)
      // var venues = marker.country.venues
      // for(venue of venues) {
      //   var venueMarker = new google.maps.Marker({
      //     position: venue.coords,
      //     map: this.map,
      //     icon: {
      //       url: "/images/fist_icon.ico",
      //       scaledSize: new google.maps.Size(50, 50)
      //     }
      //   })
      //   this.venueMarkers.push(venueMarker);
      //   this.addVenueClickListener(venueMarker, venue);
      //   this.addVenueMouseOverListener(venueMarker, venue);
      // }
    })
  }

  render() {
    console.log("marker container rendered")
    return null
  }
}

export default MarkerComponent