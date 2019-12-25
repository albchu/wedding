import React from "react"
import "./rsvp-body.scss"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Button from "@material-ui/core/Button"
import RSVPFormHeader from "./rsvp-form-header"
import { useRSVPForm } from "../../hooks/use-rsvp-form"
import { TreeDeck } from "./tree-deck";
import { AttendingCard } from "./attending-card"
import { NotAttendingCard } from "./not-attending-card"
import { GuestCard } from "./guest-card"
import { PlusOneCard } from "./plus-one-card"
import { RestrictionsCard } from "./restrictions-card"
import { ThankYouCard } from "./thank-you-card"

const RSVPBody = ({ }) => {
  const {
    form,
    updateForm
  } = useRSVPForm()
  console.log('current form', form)

  return (
    <div className="rsvp_body">
      <TreeDeck initialId="AttendingCard" updateForm={updateForm}>
        <AttendingCard />
        <NotAttendingCard />
        <GuestCard />
        <PlusOneCard />
        <RestrictionsCard />
        <ThankYouCard form={form} />
      </TreeDeck>
    </div>
  )
}

export default RSVPBody
