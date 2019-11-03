import React from "react"
import SplashPage from "./spash-page"
import "./app.scss"
import AboutUs from "./about-us"
import Announcement from "./announcement"
import WhenAndWhere from "./when-and-where";

const App = () => {
  return (
    <div className="app">
      <SplashPage />
      <Announcement />
      <AboutUs />
      <WhenAndWhere />
    </div>
  )
}

export default App
