import React, { useState } from "react";
import RSVPFormHeader from "./rsvp-form-header";
import {
  Button,
  RadioGroup,
  Radio,
  FormControlLabel,
  TextField,
} from "@material-ui/core";
import { useCardStyles } from "./use-card-styles";

export const PlusOneCard = ({ setNextCard, updateForm, previousId }) => {
  const classes = useCardStyles();
  const [entree, setEntree] = useState("");
  const [name, setName] = useState("");

  const handleNameChange = event => {
    setName(event.target.value);
  };
  const handleEntreeClick = event => {
    setEntree(event.target.value);
  };

  const handleNextAction = () => {
    updateForm("plusOneEntree", entree);
    updateForm("plusOneName", name);
    setNextCard("RestrictionsCard");
  };

  const handlePreviousAction = () => {
    setNextCard(previousId);
  };

  return (
    <div>
      <RSVPFormHeader>What is the full name of your guest?</RSVPFormHeader>
      <TextField
        className={classes.textfield}
        label="Guest Full Name"
        margin="normal"
        variant="outlined"
        onChange={handleNameChange}
        value={name}
      />
      <br />
      <br />
      <RSVPFormHeader>Please choose your guest's entree</RSVPFormHeader>
      <RadioGroup value={entree} onChange={handleEntreeClick}>
        <FormControlLabel
          className={classes.text}
          value="filetMignon"
          control={<Radio />}
          label="Filet Mignon"
        />
        <FormControlLabel
          className={classes.text}
          value="lambRack"
          control={<Radio />}
          label="Lamb Rack"
        />
        <FormControlLabel
          className={classes.text}
          value="salmon"
          control={<Radio />}
          label="Salmon"
        />
      </RadioGroup>

      <Button onClick={handlePreviousAction} className={classes.prevButton}>
        Previous
      </Button>

      <Button
        disabled={!name || !entree}
        onClick={handleNextAction}
        className={classes.actionButton}
      >
        Next
      </Button>
    </div>
  );
};
