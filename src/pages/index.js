import React from "react"

import SEO from "../components/seo"
import "./index.css"
import VickysHotBody from "../components/VickysHotBody"
import Header from "../components/Header"
import Details from "../components/Details"

const Index = () => (
  <>
    <SEO title="Save the Date" />
    <div className="Index_container">
      <Header />
      <VickysHotBody />
      <Details />
    </div>
  </>
)

export default Index
