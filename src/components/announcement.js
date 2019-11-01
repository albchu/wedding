import React from "react"
import SectionTitle from "./section-title"
import "./announcement.scss"

const Announcement = () => {
  return (
    <div className="announcement">
      <div className="title">
        <SectionTitle title="We're getting married!" />
      </div>
    </div>
  )
}

export default Announcement
