import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import BackgroundImage from "gatsby-background-image"

/**
 * In this functional component a <BackgroundImage />  is compared to an <Img />.
 * @param className   string    className(s) from styled-components.
 * @param children    nodes     Child-components from index.js / page-2.js.
 * @return {*}
 * @constructor
 */
const BackgroundSection = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(
          relativePath: { eq: "ivory-off-white-paper-brightened.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      // Extract imageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage Tag="section" className={className} fluid={imageData}>
          {children}
        </BackgroundImage>
      )
    }}
  />
)

export default BackgroundSection
