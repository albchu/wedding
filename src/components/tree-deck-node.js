import React, { useState } from 'react'
import Fade from '@material-ui/core/Fade';
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import RSVPFormHeader from "./rsvp-form-header"

/**
Input: 
component to render by variable 
left branch:component to render by variable
right branch
 */
const AFFIRM = 'affirm';
const DENY = 'deny';

const noop = () => { }

export const TreeDeckNode = ({
  id,
  affirmId,
  affirmLabel = "Yes",
  onAffirmClick = noop,
  denyId,
  denyLabel = "No",
  onDenyClick = noop,
  header,
  onChange
}) => {
  const [formValue, setFormValue] = useState('')

  const handleChange = (event) => {
    const isYes = event.target.value === AFFIRM

    if (isYes) {
      onChange(affirmId);
      onAffirmClick(event);
    }
    else {
      onChange(denyId);
      onDenyClick(event);
    }

    setFormValue(event.target.value)
  }


  // Yo you need another implementation for fallthroughs
  return (
    <div>
      <RSVPFormHeader>{header}</RSVPFormHeader>
      <RadioGroup
        aria-label="guest"
        name="guest"
        value={formValue}
        onChange={handleChange}
      >
        <FormControlLabel value={AFFIRM} control={<Radio />} label={affirmLabel} />
        <FormControlLabel value={DENY} control={<Radio />} label={denyLabel} />
      </RadioGroup>
    </div>
  )
}
