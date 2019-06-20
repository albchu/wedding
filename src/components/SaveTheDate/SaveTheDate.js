import React from "react"
import FramedContainer from "../FramedContainer"
import SaveTheDateHeaderImage from "./SaveTheDateHeaderImage"
import SaveTheDateBodyImage from "./SaveTheDateBodyImage"
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
        <SaveTheDateBodyImage />
      </div>
    </FramedContainer>
  )
}

export default SaveTheDate
