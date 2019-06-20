import React from "react"
import LogoImage from "../LogoV2"
import "./LogoHeader.css"

const LogoHeader = () => {
  return (
    <div className="LogoHeader_container">
      <div className="LogoHeader_fadeBG" />
      <LogoImage />
    </div>
  )
}

export default LogoHeader
