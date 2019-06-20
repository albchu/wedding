import React from "react"

import SEO from "../components/seo"
import "./index.css"
import Header from "../components/Header"
import Details from "../components/Details"
import CoffeeDate from "../components/CoffeeDate"
import SaveTheDate from "../components/SaveTheDate"
import { isMobile } from "../hooks/breakpoints"

const Index = () => (
  <>
    <SEO title="Save the Date" />
    <div className="Index_container">
      {isMobile() && <Header className="Index_header" />}
      <div className="Index_coffeeDate">
        <div className="Index_coffeeDate_internal">
          <CoffeeDate />
        </div>
      </div>
      <SaveTheDate className="Index_saveTheDate" />
      <div className="Index_spacer" />
      <Details className="Index_details" />
    </div>
  </>
)

export default Index
