import React from "react"

import SEO from "../components/seo"
import "./index.css"
import VickysHotBody from "../components/VickysHotBody"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Index = () => (
  <div className="Index_container">
    <div className="Index_header">
      <Header />
    </div>
    <div className="Index_body">
      <VickysHotBody />
    </div>
    <div className="Index_footer">
      <Footer />
    </div>
  </div>
)

export default Index
