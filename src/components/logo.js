import React from "react"
import Ampersand from "./ampersand"
import "./logo.scss"

const Logo = ({ color }) => {
  return (
    <div className="logo__container">
      <div className="logo__initial" style={{ color }}>
        V
      </div>
      <Ampersand color={color} size=".6em" />
      <div className="logo__initial" style={{ color }}>
        A
      </div>
    </div>
  )
}

export default Logo
