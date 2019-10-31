import React from "react"
import "./about-us.scss"

const AboutUs = () => {
  return (
    <div className="aboutUs_container">
      <div className="aboutUs">
        <div className="albertAvatar" />
        <div className="vickyAvatar" />
        <div className="vickyDescription">
          Smart girl with opinions. Strong belief in the sanctity of nugs and
          naps. Enjoys doing dumb stuff with her fiancée and cuddling their dog.{" "}
        </div>
        <div className="vickyName">Vicky Lao</div>
        <div className="albertDescription">
          A tenacious lad. Likes video games and food. Enjoys spending time with
          his fiancée, and their dog.
        </div>
        <div className="albertName">Albert Chu</div>
      </div>
    </div>
  )
}

export default AboutUs
