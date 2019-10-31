import React from "react"
import Fade from "react-reveal/Fade"
import Logo from "./logo"
import "./spash-page.scss"

const SplashPage = () => {
  console.log("rendered!")
  return (
    <div className="splashPage">
      <div className="splashPage__logo">
        <Fade delay={300}>
          <Logo color={"white"} />
        </Fade>
      </div>
    </div>
  )
}

export default SplashPage
