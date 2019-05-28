import React from "react"
import CouplesCoffeeImage from "./CouplesCoffeeImage"
import "./Body.css"

const Body = () => {
  return (
    <div className="Body_container">
      <div className="Body_title">Save The Date</div>
      <div className="Body_date">July 25, 2020</div>
      <div className="Body_imageContainer">
        <CouplesCoffeeImage />
      </div>
    </div>
  )
}

export default Body
