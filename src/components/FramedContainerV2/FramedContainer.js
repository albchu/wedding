import React from "react"
import LogoHeader from "../LogoHeader"
import clsx from "clsx"
import "./FramedContainer.css"
import DotBar from "../DotBar"

const FramedContainer = ({
  className,
  children,
  topBorderWidth,
  HeaderComponent = LogoHeader,
}) => {
  return (
    <div className={clsx(className, "FramedContainer_container")}>
      <div
        className="FramedContainer_border FramedContainer_border_top"
        style={{ width: topBorderWidth }}
      >
        <DotBar />
      </div>
      <div className="FramedContainer_header">
        <HeaderComponent />
      </div>
      {children}
      <div className="FramedContainer_border FramedContainer_border_bottom">
        <DotBar />
      </div>
    </div>
  )
}

export default FramedContainer
