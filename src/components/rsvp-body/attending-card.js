import React, { useState } from 'react'
import { Button, RadioGroup, Radio, FormControlLabel } from "@material-ui/core"
import RSVPFormHeader from './rsvp-form-header'

export const AttendingCard = ({ setNextCard }) => {
  const [radioValue, setRadioValue] = useState('')

  const handleRadioClick = (event) => {
    setRadioValue(event.target.value)
  }

  let buttonToRender = null;
  if (radioValue === "yes") {
    buttonToRender =
      <Button onClick={() => setNextCard("GuestCard")}>
        Next
      </Button>
  } else if (radioValue === "no") {
    buttonToRender = <Button onClick={() => setNextCard("NotAttendingCard")}>
      Submit
  </Button>
  }

  return (
    <div>
      <RSVPFormHeader>
        Will you be joining us on July 25th?
      </RSVPFormHeader>
      <RadioGroup
        aria-label="guest"
        name="guest"
        value={radioValue}
        onChange={handleRadioClick}
      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes! A thousand times yes!" />
        <FormControlLabel value="no" control={<Radio />} label="Can't make it out" />
      </RadioGroup>
      {buttonToRender}
    </div>
  )
}
