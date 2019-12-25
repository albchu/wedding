import React from "react"
import "./rsvp-body.scss"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Button from "@material-ui/core/Button"
import RSVPFormHeader from "./rsvp-form-header"
import { useRSVPForm } from "../../hooks/use-rsvp-form"
import { TreeDeck } from "../tree-deck";
import { AttendingCard } from "./attending-card"
import { NotAttendingCard } from "./not-attending-card"
import { GuestCard } from "./guest-card"
import { NameCard } from "./name-card"

const RSVPBody = ({ }) => {
  const {
    name,
    onNameChange
  } = useRSVPForm()

  return (
    <div className="rsvp_body">
      <TreeDeck initialId="NameCard">
        <NameCard
          name={name}
          onNameChange={onNameChange}
        />
        <AttendingCard />
        <NotAttendingCard />
        <GuestCard />
      </TreeDeck>
    </div>
  )
}

export default RSVPBody
