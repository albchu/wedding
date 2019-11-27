import React from "react"
import SectionTitle from "./section-title"
import "./when-and-where.scss"
import Ampersand from "./ampersand"
import Particles from "react-particles-js"

const WhenAndWhere = () => {
  return (
    <div className="whenAndWhere">
      <div className="whenAndWhere_title">
        <div className="when">
          <SectionTitle title="When" />
        </div>
        <div className="and">
          <Ampersand color="inherit" size="1.8em" />
        </div>
        <div className="where">
          <SectionTitle title="Where" />
        </div>
      </div>
      <div className="whenAndWhere_snow">
        <Particles
          width="auto"
          height="40vh"
          params={{
            particles: {
              number: {
                value: 20,
                density: {
                  enable: false,
                },
              },
              size: {
                value: 2,
                random: true,
              },
              move: {
                direction: "bottom",
                out_mode: "out",
                speed: 1,
              },
              line_linked: {
                enable: false,
              },
            },
          }}
        />
      </div>
    </div>
  )
}

export default WhenAndWhere
