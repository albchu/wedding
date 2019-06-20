import React from "react"
import FramedContainer from "../FramedContainer"
import SaveTheDateHeaderImage from "./SaveTheDateHeaderImage"
import SaveTheDateBodyImage from "./SaveTheDateBodyImage"
import Fade from "react-reveal/Fade"
import "./SaveTheDate.css"

const SaveTheDateHeader = () => (
  <div className="SaveTheDateHeader_container">
    <Fade delay={200}>
      <SaveTheDateHeaderImage />
    </Fade>
    <div className="SaveTheDateHeader_underline_container">
      <div className="SaveTheDateHeader_underline_borderLeft" />
      <div className="SaveTheDateHeader_underline_borderRight" />
      <Fade delay={300}>
        <div className="SaveTheDate_underline" />
      </Fade>
      <Fade delay={400}>
        <div className="SaveTheDate_dots" />
      </Fade>
    </div>
  </div>
)

const SaveTheDate = ({ className }) => {
  return (
    <FramedContainer className={className} HeaderComponent={SaveTheDateHeader}>
      <div className="SaveTheDate_container">
        <Fade delay={600}>
          <SaveTheDateBodyImage />
        </Fade>
      </div>
    </FramedContainer>
  )
}

export default SaveTheDate
