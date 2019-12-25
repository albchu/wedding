import React, { useState } from 'react'
import { Button, RadioGroup, Radio, FormControlLabel, TextField } from "@material-ui/core"
import RSVPFormHeader from './rsvp-form-header'

export const AttendingCard = ({ setNextCard, updateForm }) => {
  const [name, setName] = useState('')

  const [radioValue, setRadioValue] = useState('')

  const handleNameChange = event => {
    setName(event.target.value);
  }
  const handleRadioClick = (event) => {
    setRadioValue(event.target.value)
  }

  const handleNextAction = id => {
    updateForm('name', name);
    updateForm('attending', radioValue);
    setNextCard(id)
  }

  let buttonToRender = null;
  if (name && radioValue === "yes") {
    buttonToRender =
      <Button onClick={() => handleNextAction("GuestCard")}>
        Next
      </Button>
  } else if (name && radioValue === "no") {
    buttonToRender = <Button onClick={() => handleNextAction("NotAttendingCard")}>
      Submit
  </Button>
  }

  return (
    <div>
      <RSVPFormHeader>
        What is your name?
      </RSVPFormHeader>
      <TextField
        label="Name"
        margin="normal"
        variant="outlined"
        onChange={handleNameChange}
        value={name}
      />
      <br />
      <br />
      <RSVPFormHeader>
        Will you be joining us on July 25th?
        </RSVPFormHeader>
      <RadioGroup
        dwaria-label="guest"
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
