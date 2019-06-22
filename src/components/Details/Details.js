import React from "react"
import { isMobile } from "../../hooks/breakpoints"
import CalendarMenu from "../CalendarMenu"
import LocationMap from "../LocationMap"
import FramedContainer from "../FramedContainer"
import Fade from "react-reveal/Fade"
import "./Details.css"

const Details = ({ className }) => {
  const mobile = isMobile()
  return (
    <FramedContainer
      className={className}
      topBorderWidth={mobile ? "71.3%" : "30%"}
    >
      <div className="Details_internal_container">
        <Fade delay={100}>
          <div className="Details_internal_container_title">the wedding</div>
        </Fade>

        <div className="Details_internal_container_info Details_when">
          <Fade left delay={200}>
            <div className="Details_internal_container_header_container">
              <span className="Details_internal_container_header">When</span>
            </div>
            <div>July 25 2020</div>
            <div>ceremony: 2:00pm</div>
            <div>reception: 6:00pm</div>
            <div className="Details_calendarMenu">
              <CalendarMenu />
            </div>
            <div />
          </Fade>
        </div>
        {!mobile && <div className="Details_internal_container_divider" />}
        <div className="Details_internal_container_info Details_where">
          <Fade right delay={200}>
            <div className="Details_internal_container_header_container">
              <span className="Details_internal_container_header">Where</span>
            </div>
            <div>Fairmont Palliser</div>
            <div>133 9 Ave SW</div>
            <div>Calgary AB</div>
            <div>Canada T2P 2M3</div>
            <Fade delay={400}>
              <LocationMap />
            </Fade>
          </Fade>
        </div>
      </div>
    </FramedContainer>
  )
}

export default Details
