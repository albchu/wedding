import React from "react"
import "./rsvp.scss"
import SectionTitle from "./section-title"
import RSVPBody from "./rsvp-body"
import { Particles } from "@blackbox-vision/react-particles"

const RSVP = ({}) => {
  return (
    <div className="rsvp">
      <div className="rsvp_centered rsvp_contents">
        <SectionTitle title="RSVP" />
        <RSVPBody />
      </div>
      <div className="rsvp_centered">
        <Particles
          id="snow"
          width="auto"
          height="100vh"
          params={{
            particles: {
              number: {
                value: 80,
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

export default RSVP
