import React from "react"
import SplashPage from "./spash-page"
import "./app.scss"
import AboutUs from "./about-us"
import Announcement from "./announcement"
import WhenAndWhere from "./when-and-where";
import Menu from "./menu";

const App = () => {
  return (
    <div className="app">
      <SplashPage />
      <Announcement />
      <AboutUs />
      <WhenAndWhere />
      <Menu />
    </div>
  )
}

export default App
