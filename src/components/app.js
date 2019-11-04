import React from "react"
import SplashPage from "./spash-page"
import "./app.scss"
import AboutUs from "./about-us"
import Announcement from "./announcement"
import WhenAndWhere from "./when-and-where";
import Menu from "./menu";
import WhenAndWhereBody from "./when-and-where-body";

const App = () => {
  return (
    <div className="app">
      <SplashPage />
      <Announcement />
      <AboutUs />
      <WhenAndWhere />
      <WhenAndWhereBody />
      <Menu />
    </div>
  )
}

export default App
