import React from "react"
import SplashPage from "./spash-page"
import "./app.scss"
import AboutUs from "./about-us"
import Announcement from "./announcement"

const App = () => {
  return (
    <div className="app">
      <SplashPage />
      <Announcement />
      <AboutUs />
    </div>
  )
}

export default App
