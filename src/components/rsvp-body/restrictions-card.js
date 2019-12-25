import React, { useState } from 'react'
import RSVPFormHeader from './rsvp-form-header'
import { Button, TextField } from "@material-ui/core"

export const RestrictionsCard = ({ setNextCard, updateForm }) => {
  const [restrictions, setRestrictions] = useState('')

  const handleRestrictionsChange = (event) => {
    setRestrictions(event.target.value)
  }

  const handleSubmit = () => {
    updateForm('dietaryRestrictions', restrictions)
    setNextCard("ThankYouCard")
  }

  return (
    <div>
      <RSVPFormHeader>
        Are there any dietary restrictions that we should be aware of?
      </RSVPFormHeader>
      <TextField
        label="Restrictions"
        margin="normal"
        variant="outlined"
        onChange={handleRestrictionsChange}
        value={restrictions}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  )
}
