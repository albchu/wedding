import React from "react"
import CouplesCoffeeImage from "./CouplesCoffeeImage"
import SaveTheDate from "./SaveTheDate"
import Fade from "react-reveal/Fade"
import "./VickysHotBody.css"

const Body = () => {
  return (
    <div className={"Body_container"}>
      <div className="Body_coffeeDateContainer">
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
  )
}

export default Body
