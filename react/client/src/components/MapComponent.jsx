import React from 'react'
import getStyles from '../views/map_styles'

class MapComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log("map is being set or some shit")
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
    this.props.setMap(map)
  }

  componentDidUpdate() {
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
    // this.addMarkerListener(marker, country.countryCoords);
    })

  }

  render() {
    console.log("map Componentß rendered")
    return (
      <div id="map-container" ref="map"></div>
      )
  }




}

export default MapComponent