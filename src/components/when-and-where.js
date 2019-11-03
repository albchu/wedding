import React from "react"
import SectionTitle from "./section-title"
import "./when-and-where.scss"
import Ampersand from "./ampersand";

const WhenAndWhere = () => {
  return (
    <div className="whenAndWhere">
      <div className="whenAndWhere_title">
        <div className="when">
          <SectionTitle title="When" />
        </div>
        <div className="and">
          <Ampersand color="inherit" size="1.8em" />
        </div>
        <div className="where">
          <SectionTitle title="Where" />
        </div>
      </div>
    </div>
  )
}

export default WhenAndWhere
