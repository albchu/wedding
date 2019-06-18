import React from "react"
import FramedContainer from "../FramedContainer"
import SaveTheDateHeaderImage from "./SaveTheDateHeaderImage"
import "./SaveTheDate.css"

const SaveTheDateHeader = () => (
  <div className="SaveTheDateHeader_container">
    <SaveTheDateHeaderImage />
    <div className="SaveTheDate_underline" />
    <div className="SaveTheDate_dots" />
  </div>
)

const SaveTheDate = ({ className }) => {
  return (
    <FramedContainer className={className} HeaderComponent={SaveTheDateHeader}>
      <div className="SaveTheDate_container">
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
      </div>
    </FramedContainer>
  )
}

export default SaveTheDate
