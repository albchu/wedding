import React from "react"
import SplashPage from "./spash-page"
import "./app.scss"
import AboutUs from "./about-us"

const App = () => {
  return (
    <div className="app">
      <SplashPage />
      <AboutUs />
      {/* <SplashPage /> */}
    </div>
  )
}

export default App
