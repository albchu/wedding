import React from "react"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import RSVPFormHeader from "./rsvp-form-header"

const RSVPFormAttending = ({ isAttending, handleIsAttending }) => {
  return (
    <div>
      <RSVPFormHeader>Will you be attending?</RSVPFormHeader>
      <RadioGroup
        aria-label="attending"
        name="attending"
        value={isAttending}
        onChange={handleIsAttending}
      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
      </RadioGroup>
    </div>
  )
}

export default RSVPFormAttending
