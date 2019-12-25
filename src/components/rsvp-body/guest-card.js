import React, { useState } from 'react'
import RSVPFormHeader from './rsvp-form-header'
import { Button, RadioGroup, Radio, FormControlLabel } from "@material-ui/core"

export const GuestCard = () => {
  const [radioValue, setRadioValue] = useState('')

  const handleRadioClick = (event) => {
    setRadioValue(event.target.value)
  }


  return (
    <div>
      <RSVPFormHeader>
        Will you be bringing a guest?
      </RSVPFormHeader>
      <RadioGroup
        aria-label="guest"
        name="guest"
        value={radioValue}
        onChange={handleRadioClick}
      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
      </RadioGroup>
    </div>
  )
}
