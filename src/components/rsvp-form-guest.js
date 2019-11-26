import React, { useState } from "react"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import RSVPFormHeader from "./rsvp-form-header"

const RSVPFormGuest = ({ handleGuest }) => {
  const [hasGuest, setHasGuest] = useState("")
  const [plusOneName, setPlusOneName] = useState("")

  const handleHasGuest = event => {
    const answer = event.target.value
    console.log("handlehas guesttt", answer)
    setHasGuest(answer)

    if (answer === "no") {
      // Only report back if answer is no already
      handleGuest()
    }
  }

  return (
    <div>
      <RSVPFormHeader>Would you like to bring a guest?</RSVPFormHeader>
      <RadioGroup
        aria-label="guest"
        name="guest"
        value={hasGuest}
        onChange={handleHasGuest}
      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
      </RadioGroup>

      {hasGuest === "yes" && <div> thats cute for you</div>}
    </div>
  )
}

export default RSVPFormGuest
