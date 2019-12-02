import React from "react"
import SplashPage from "./spash-page"
import "./app.scss"
import AboutUs from "./about-us"
import Announcement from "./announcement"
import WhenAndWhere from "./when-and-where";
import Menu from "./menu";
import WhenAndWhereBody from "./when-and-where-body";
import MenuBody from "./menu-body";
import RSVP from "./rsvp";
import TravelAndAcommodation from "./travel-and-acommodation";
import Registry from "./registry";

const App = () => {
  return (
    <div className="app">
      <RSVP />
      {/* <SplashPage />
      <Announcement />
      <AboutUs />
      <WhenAndWhere />
      <WhenAndWhereBody />
      <Menu />
      <MenuBody />
      <TravelAndAcommodation />
      <Registry /> */}
    </div>
  )
}

export default App
