import React from "react"
import CouplesCoffeeImage from "./CouplesCoffeeImage"
import SaveTheDate from "../SaveTheDate"
import { isMobile } from "../../hooks/breakpoints"
import clsx from "clsx"
import "./VickysHotBody.css"

const Body = () => {
  return (
    <div
      className={clsx("Body_container", isMobile() && "Body_container_mobile")}
    >
      <CouplesCoffeeImage />

      <SaveTheDate />
    </div>
  )
}

export default Body
