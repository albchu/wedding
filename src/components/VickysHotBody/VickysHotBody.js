import React from "react"
import CouplesCoffeeImage from "./CouplesCoffeeImage"
// import SaveTheDate from "./SaveTheDate"
import SaveTheDate from "../SaveTheDate"
import Fade from "react-reveal/Fade"
import { isMobile } from "../../hooks/breakpoints"
import "./VickysHotBody.css"

const Body = () => {
  const mobileRes = isMobile()

  return (
    <div className="Body_container">
      <div className="Body_coffeeDate_container">
        <Fade left={!mobileRes} delay={100}>
          <div className="Body_coffeeDate">
            <CouplesCoffeeImage />
          </div>
        </Fade>
      </div>

      <div className="Body_saveTheDate">
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>
          <SaveTheDate />
          {/* <Fade top delay={200}> */}
          {/* </Fade> */}
        </div>
      </div>
    </div>
  )
}

export default Body
