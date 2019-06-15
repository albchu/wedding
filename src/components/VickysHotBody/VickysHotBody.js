import React from "react"
import CouplesCoffeeImage from "./CouplesCoffeeImage"
import SaveTheDate from "./SaveTheDate"
import Details from "../Details"
import Fade from "react-reveal/Fade"
import "./VickysHotBody.css"

const Body = () => {
  return (
    <div>
      <div className="Body_saveTheDate_container">
        <div className="Body_coffeeDate_container">
          <Fade left>
            <div className="Body_coffeeDate">
              <CouplesCoffeeImage />
            </div>
          </Fade>
        </div>
        <div className="Body_saveTheDate">
          <Fade top delay={200}>
            <SaveTheDate />
          </Fade>
        </div>
      </div>

      <Details />
    </div>
  )
}

export default Body
