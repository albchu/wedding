import React, { useState } from "react";
import RSVPFormHeader from "./rsvp-form-header";
import {
  Button,
  RadioGroup,
  Radio,
  FormControlLabel,
  TextField,
  Fade,
} from "@material-ui/core";
import { useCardStyles } from "./use-card-styles";

export const PlusOneCard = ({ setNextCard, updateForm, previousId, form }) => {
  const classes = useCardStyles();
  const [entree, setEntree] = useState(form.plusOneEntree);
  const [name, setName] = useState(form.plusOneName);

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
    setNextCard("GuestCard");
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

      <Fade in={name && entree}>
        <Button
          disabled={!name || !entree}
          onClick={handleNextAction}
          className={classes.actionButton}
        >
          Next
        </Button>
      </Fade>
    </div>
  );
};
