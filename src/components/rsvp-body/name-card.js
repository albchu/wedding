import React from 'react'
import TextField from '@material-ui/core/TextField';

export const NameCard = ({ name, onNameChange }) => {
  return (
    <div>
      <TextField
        label="Name"
        margin="normal"
        variant="outlined"
        onChange={onNameChange}
        value={name}
      />
    </div>
  )
}
