import React from 'react'
import getStyles from '../views/map_styles'

class MapComponent extends React.Component {
  constructor(props) {
    super(props)
    this.map = null
  }

  componentDidMount() {
    console.log("map is being set or some shit")
    this.map = new google.maps.Map(this.refs.map, {
      center: this.props.position,
      zoom: this.props.zoom,
      disableDefaultUI: true,
      draggable: false,
      zoomControl: false,
      scaleControl: false,
      scrollwheel: false,
      styles: getStyles()
    })
    this.props.setMap(this.map)
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.position === nextProps.position && this.props.zoom === nextProps.zoom) {
      return false
    }
    return true
  }

  componentDidUpdate() {
    console.log("zoom", this.props.zoom)
    this.map.setZoom(this.props.zoom)
    this.map.setCenter(this.props.position)
    
  }

 

  render() {
    console.log("map Componentß rendered")
    return (
      <div><img src="/images/logo-sf.png" styles={{width: "300px"}}/>
      <div id="map-container" ref="map">
      </div>
      </div>
      )
  }




}

export default MapComponent