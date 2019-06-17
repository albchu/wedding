import React from "react"
import LogoHeader from "../LogoHeader"
import "./FramedContainer.css"

const Blank = () => <div>hello</div>
const Blank2 = () => <div>hello</div>

const FramedContainer = ({ children, HeaderComponent = LogoHeader }) => {
  return (
    <div className="FramedContainer_container">
      <div className="FramedContainer_border FramedContainer_border_top" />
      <div className="FramedContainer_header_container">
        <HeaderComponent />
      </div>
      {children}
      <div className="FramedContainer_border FramedContainer_border_bottom" />
    </div>
  )
}

export default FramedContainer
