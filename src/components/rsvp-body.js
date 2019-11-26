import React from "react"
import "./rsvp-body.scss"
import { makeStyles } from "@material-ui/core/styles"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormHelperText from "@material-ui/core/FormHelperText"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormControl from "@material-ui/core/FormControl"
import FormLabel from "@material-ui/core/FormLabel"

const RSVPBody = ({}) => {
  const [isAttending, setIsAttending] = React.useState()

  const handleChange = event => {
    setIsAttending(event.target.value)
  }

  return (
    <div className="rsvp_body">
      <FormLabel component="legend">Will you be attending?</FormLabel>
      <RadioGroup
        aria-label="attending"
        name="attending"
        value={isAttending}
        onChange={handleChange}
      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
      </RadioGroup>
    </div>
  )
}

export default RSVPBody
