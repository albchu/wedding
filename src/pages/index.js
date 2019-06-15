import React from "react"

import SEO from "../components/seo"
import "./index.css"
import VickysHotBody from "../components/VickysHotBody"
import Header from "../components/Header"
// import Footer from "../components/Footer"

const Index = () => (
  <>
    <SEO title="Save the Date" />
    <div className="Index_container">
      <Header />
      <VickysHotBody />
      {/* <Footer /> */}
    </div>
  </>
)

export default Index
