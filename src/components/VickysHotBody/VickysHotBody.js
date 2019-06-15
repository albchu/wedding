import React from "react"
import CouplesCoffeeImage from "./CouplesCoffeeImage"
import SaveTheDate from "./SaveTheDate"
import "./VickysHotBody.css"

const Body = () => {
  return (
    <div className={"Body_container"}>
      <div className="Body_coffeeDate">
        <CouplesCoffeeImage />
      </div>

      <div className="Body_saveTheDate">
        <SaveTheDate />
      </div>
    </div>
  )
}

export default Body
