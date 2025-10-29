import React from 'react'

function PlaceTree({ id, placesById }) {
    const place = placesById[id];
    const childPlace = place.childIds;
    console.log(childPlace);
    
    
  return (
    <div>PlaceTree</div>
  )
}

export default PlaceTree