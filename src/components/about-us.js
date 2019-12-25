import React from "react"
import "./about-us.scss"

const AboutUs = () => {
  return (
    <div className="aboutUs_container">
      <div className="aboutUs">
        <div className="albertAvatar" />
        <div className="heart" />
        <div className="vickyAvatar" />
        <div className="albertName">Albert</div>
        <div className="vickyName">Vicky</div>
        <div className="vickyDescription">
            Smart girl with opinions.
          <p>Strong belief in the sanctity of nugs and
          naps. Enjoys doing dumb stuff with her fiancé and cuddling their dog.{" "}
          </p>
          </div>
          <div className="albertDescription">
          A tenacious lad.
          <p />
          <br />
          Likes video games and food. Enjoys spending time with
          his fiancée, and their dog.
        </div>
        <div className="padding" />
        {/* <div className="vickyDescription">
            Smart girl with opinions.
          <p>Strong belief in the sanctity of nugs and
          naps. Enjoys doing dumb stuff with her fiancé and cuddling their dog.{" "}
          </p>
        </div>
        <div className="padding" />
        <div className="vickyName">Vicky Lao</div>
        <div className="albertDescription">
          A tenacious lad.
          <p />
          Likes video games and food. Enjoys spending time with
          his fiancée, and their dog.
        </div>
        <div className="albertName">Albert Chu</div> */}
      </div>
    </div>
  )
}

export default AboutUs
