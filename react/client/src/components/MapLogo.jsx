import React from 'react'

const MapLogo = (props) => {
  const handleClick = () => {
    props.updateMap({lat: 40, lng: 20}, 2, null)
  }

  return (
    <div id="map-logo">
      <img src="/images/logo-sf.png" onClick={handleClick}/>
    </div>
  )
}

export default MapLogo