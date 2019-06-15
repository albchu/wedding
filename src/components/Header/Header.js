import React from "react"
import LogoV2 from "../LogoV2"
import { isMobile } from "../../hooks/breakpoints"
import Fade from "react-reveal/Fade"
import "./Header.css"

const Header = () => {
  return (
    <div className="Header_container">
      <Fade>
        {isMobile() && (
          <Fade>
            <div className="Header_logoContainer">
              <LogoV2 />
            </div>
          </Fade>
        )}
      </Fade>
    </div>
  )
}

export default Header
