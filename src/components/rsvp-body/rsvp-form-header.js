import React from "react"
import "./rsvp-form-header.scss"

import Typography from "@material-ui/core/Typography"

const RSVPFormHeader = ({ children }) => {
  return (
    <Typography variant="h6" className="rsvp_form_header">
      {children}
    </Typography>
  )
}

export default RSVPFormHeader
