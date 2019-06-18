import React from "react"
import Fade from "react-reveal/Fade"
import { isMobile } from "../../hooks/breakpoints"
import CouplesCoffeeImage from "./CouplesCoffeeImage"
import "./CoffeeDate.css"

const CoffeeDate = () => {
  const mobileRes = isMobile()
  return (
    <div className="CoffeeDate_container">
      <Fade left={!mobileRes} delay={100}>
        <CouplesCoffeeImage />
      </Fade>
    </div>
  )
}

export default CoffeeDate
