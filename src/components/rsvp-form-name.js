import React from 'react'
import TextField from '@material-ui/core/TextField';

export const RSVPFormName = ({ setFirstName,
  setLastName,
  firstName,
  lastName }) => {
  const handleChange = (event) => {
    console.log('ello9', event.target)
  }

  return (
    <div style={{ zIndex: 99 }}>
      <form noValidate autoComplete="off">
        <TextField
          label="Name"
          margin="normal"
          variant="outlined"
          onChange={handleChange}
          value={`${firstName} ${lastName}`}
        />
      </form>
    </div>
  )
}
