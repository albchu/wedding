import React, { useState } from "react";
import {
  Button,
  RadioGroup,
  Radio,
  FormControlLabel,
  TextField,
  Typography,
} from "@material-ui/core";
import RSVPFormHeader from "./rsvp-form-header";

export const AttendingCard = ({ setNextCard, updateForm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [radioValue, setRadioValue] = useState("");

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };
  const handleNameChange = event => {
    setName(event.target.value);
  };
  const handleRadioClick = event => {
    setRadioValue(event.target.value);
  };

  const handleNextAction = id => {
    updateForm("name", name);
    updateForm("email", email);
    updateForm("attending", radioValue);
    setNextCard(id);
  };

  let buttonToRender = null;
  if (name && radioValue === "yes") {
    buttonToRender = (
      <Button onClick={() => handleNextAction("GuestCard")}>Next</Button>
    );
  } else if (name && radioValue === "no") {
    buttonToRender = (
      <Button onClick={() => handleNextAction("NotAttendingCard")}>
        Submit
      </Button>
    );
  }

  return (
    <div>
      <RSVPFormHeader>What is your full name?</RSVPFormHeader>
      <TextField
        label="Full Name"
        margin="normal"
        variant="outlined"
        onChange={handleNameChange}
        value={name}
      />
      <br />
      <br />
      <RSVPFormHeader>What is your email address?</RSVPFormHeader>
      <TextField
        helperText=" We will only reach out to you if we absolutely need to"
        label="Email"
        margin="normal"
        variant="outlined"
        onChange={handleEmailChange}
        value={email}
      />
      <br />
      <br />
      <RSVPFormHeader>Will you be joining us on July 25th?</RSVPFormHeader>
      <RadioGroup
        aria-label="attending"
        name="attending"
        value={radioValue}
        onChange={handleRadioClick}
      >
        <FormControlLabel
          value="yes"
          control={<Radio />}
          label="Yes! A thousand times yes!"
        />
        <FormControlLabel
          value="no"
          control={<Radio />}
          label="Can't make it out"
        />
      </RadioGroup>
      {buttonToRender}
    </div>
  );
};
