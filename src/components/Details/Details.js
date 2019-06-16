import React from "react"
import { isMobile } from "../../hooks/breakpoints"
import "./Details.css"

const Details = () => {
  return (
    <div className="Details_container">
      <div className="Details_border">
        <div className="Details_internal_container">
          <div className="Details_internal_container_title">the wedding</div>
          <div className="Details_internal_container_info Details_when">
            <span className="Details_internal_container_header">When</span>
            <div>July 25 2020</div>
            <div>ceremony: 2:00pm</div>
            <div>reception: 6:00pm</div>
            <div />
          </div>
          {!isMobile() && (
            <div className="Details_internal_container_divider" />
          )}
          <div className="Details_internal_container_info Details_where">
            <span className="Details_internal_container_header">Where</span>
            <div>Fairmont Palliser</div>
            <div>133 9 Ave SW</div>
            <div>Calgary AB</div>
            <div>Canada T2P 2M3</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
