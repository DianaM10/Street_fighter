import React from 'react'

const VenuePreview = (props) => {

  if (props.venue) {
    const imageSrc = '/images/venues/' + props.venue.image
    return (
      <div id="venue-container">
      <h2>Stage: {props.venue.name}</h2>
      <img src={imageSrc} />
      </div>
    )
  } else {
    return <div></div>
  }
}

export default VenuePreview