import React from "react"
import "./rsvp-body.scss"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Button from "@material-ui/core/Button"
import RSVPFormHeader from "./rsvp-form-header"
import { useRSVPForm } from "../hooks/use-rsvp-form"
import RSVPFormAttending from "./rsvp-form-attending"
import RSVPFormGuest from "./rsvp-form-guest"
import { RSVPFormName } from "./rsvp-form-name";
import { TreeDeck } from "./tree-deck";
import { AttendingCard } from "./attending-card"
import { NotAttendingCard } from "./not-attending-card"
import { GuestCard } from "./guest-card"

const RSVPBody = ({ }) => {
  const {
    handleReset,
    handleSubmit,
    handleIsAttending,
    handleGuest,
    isAttending,
    sliderRef,
    setFirstName,
    setLastName,
    firstName,
    lastName
  } = useRSVPForm()

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: 0,
    fade: 1,
  }

  return (
    <div className="rsvp_body">
      <TreeDeck initialId="AttendingCard">
        <AttendingCard />
        <NotAttendingCard />
        <GuestCard />
      </TreeDeck>
      {/* <RSVPFormName
        firstName={firstName}
        lastName={lastName}
        setFirstName={setFirstName}
        setLastName={setLastName} />
      <Slider {...settings} ref={sliderRef}>
        <RSVPFormAttending
          isAttending={isAttending}
          handleIsAttending={handleIsAttending}
        />

        <RSVPFormHeader>It's alright, no worries!</RSVPFormHeader>

        <RSVPFormGuest handleGuest={handleGuest} />

        <h3>Are there any dietary restrictions we should know about?</h3>

        <div>
          <h3>5</h3>
        </div>

        <div>
          <h3>6</h3>
        </div>
      </Slider>
      <br />
      <br />
      <br />
      <Button variant="outlined" onClick={handleSubmit}>
        Submit
      </Button>
      <Button onClick={handleReset}>Reset</Button> */}
    </div>
  )
}

export default RSVPBody
