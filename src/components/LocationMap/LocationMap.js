import React from "react"
import LocationMapImage from "./LocationMapImage"
import "./LocationMap.css"

const LocationMap = () => {
  return (
    <div className="LocationMap_container">
      <a href="https://www.google.com/maps/place/Fairmont+Palliser/@51.0443245,-114.0643548,17z/data=!4m5!3m4!1s0x0:0x49555d612c5cb685!8m2!3d51.0443337!4d-114.0649603">
        <div className="LocationMap_internal_container">
          <LocationMapImage />
        </div>
      </a>
    </div>
  )
}

export default LocationMap
