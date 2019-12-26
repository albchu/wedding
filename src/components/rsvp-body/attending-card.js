import React, { useState } from "react";
import {
  Button,
  RadioGroup,
  Radio,
  FormControlLabel,
  TextField,
} from "@material-ui/core";
import RSVPFormHeader from "./rsvp-form-header";
import { useCardStyles } from "./use-card-styles";

export const AttendingCard = ({ setNextCard, updateForm }) => {
  const classes = useCardStyles();
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

  return (
    <div>
      <RSVPFormHeader>What is your full name?</RSVPFormHeader>
      <TextField
        className={classes.textfield}
        label="Name"
        margin="normal"
        variant="outlined"
        onChange={handleNameChange}
        value={name}
      />
      <br />
      <br />
      <RSVPFormHeader>What is your email address?</RSVPFormHeader>
      <TextField
        className={classes.textfield}
        helperText=" We will only reach out if we absolutely need to contact you"
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
          className={classes.text}
          value="yes"
          control={<Radio />}
          label="Yes! A thousand times yes!"
        />
        <FormControlLabel
          className={classes.text}
          value="no"
          control={<Radio />}
          label="Can't make it out"
        />
      </RadioGroup>
      <Button
        disabled={!name || !radioValue}
        onClick={() =>
          handleNextAction(
            radioValue === "no" ? "NotAttendingCard" : "GuestCard"
          )
        }
        className={classes.actionButton}
      >
        {radioValue === "no" ? "Submit" : "Next"}
      </Button>
    </div>
  );
};
