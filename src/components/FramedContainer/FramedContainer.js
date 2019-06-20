import React from "react"
import LogoHeader from "../LogoHeader"
import clsx from "clsx"
import "./FramedContainer.css"

const Blank = () => <div>hello</div>
const Blank2 = () => <div>hello</div>

const FramedContainer = ({
  className,
  children,
  HeaderComponent = LogoHeader,
}) => {
  return (
    <div className={clsx(className, "FramedContainer_container")}>
      <div className="FramedContainer_border FramedContainer_border_top" />
      <div className="FramedContainer_header">
        <HeaderComponent />
      </div>
      {children}
      <div className="FramedContainer_border FramedContainer_border_bottom" />
    </div>
  )
}

export default FramedContainer
