import React from "react"
import LogoV2 from "../LogoV2"
import { isMobile } from "../../hooks/breakpoints"
import "./Header.css"

const Header = () => {
  return (
    <div className="Header_container">
      {isMobile() && (
        <div className="Header_logoContainer">
          <LogoV2 />
        </div>
      )}
    </div>
  )
}

export default Header
