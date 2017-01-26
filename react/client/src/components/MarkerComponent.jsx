import React from 'react'
import VenueMarkerComponent from '../components/VenueMarkerComponent'

class MarkerComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCountry: null
    }
    this.countryMarkers = []
  }

  // shouldComponentUpdate() {
  //   if (this.state.selectedCountry) {
  //     return false
  //   }
  //   return true
  // }

  componentWillUpdate() {
    for(let marker of this.countryMarkers) {
      marker.setMap(null)
    }
  }

  componentDidUpdate() {
    this.addCountryMarkers()
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
      this.setState({
        selectedCountry: marker.country
      })
      this.props.updateMap(countryCoords, 5, marker.country)
    })
  }

  clearMarkers() {
    for(const marker of this.countryMarkers) {
      marker.setMap(null)
    }
  }

  render() {
    console.log("marker render", this.state.selectedCountry)
    if (this.state.selectedCountry) {
      this.clearMarkers()
     return <VenueMarkerComponent country={this.state.selectedCountry} map={this.props.map} setVenue={this.props.setVenue}/> 
   } else {
     return null
   }
    
  }
}

export default MarkerComponent