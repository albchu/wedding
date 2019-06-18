import React from "react"
import LogoV2 from "../LogoV2"
import Fade from "react-reveal/Fade"
import clsx from "clsx"

const Header = ({ className }) => {
  return (
    <div className={clsx(className, "Header_container")}>
      <Fade>
        <div className="Header_logoContainer">
          <LogoV2 />
        </div>
      </Fade>
    </div>
  )
}

export default Header
