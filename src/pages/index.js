import React from "react"

import Logo from "../components/Logo"
import SEO from "../components/seo"
import "./index.css"
import Background from "../components/Background"

const Index = () => (
  <Background>
    <div className="Index_container">
      <SEO title="Home" />
      <div className="Index_logoContainer">
        <Logo />
      </div>
      <h1>Vicky and Albert</h1>
      <h1>July 25, 2020</h1>
      <p>Rest of the site coming soon</p>
    </div>
  </Background>
)

export default Index
