import React from "react"
import Logo from "../Logo"
import "./Header.css"

const Header = () => {
  return (
    <div className="Header_container">
      <div className="Header_logoContainer">
        <Logo />
      </div>
    </div>
  )
}

export default Header
