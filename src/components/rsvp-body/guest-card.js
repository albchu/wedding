import React, { useState } from "react";
import RSVPFormHeader from "./rsvp-form-header";
import { Button, RadioGroup, Radio, FormControlLabel } from "@material-ui/core";
import { useCardStyles } from "./use-card-styles";

export const GuestCard = ({ setNextCard, updateForm, previousId, form }) => {
  const classes = useCardStyles();
  const [entree, setEntree] = useState(form.entree);
  const [radioValue, setRadioValue] = useState(form.plusOne);

  const handleEntreeClick = event => {
    setEntree(event.target.value);
  };

  const handleRadioClick = event => {
    setRadioValue(event.target.value);
  };

  const handleNextAction = () => {
    updateForm("entree", entree);
    updateForm("plusOne", radioValue);
    setNextCard(radioValue === "yes" ? "PlusOneCard" : "RestrictionsCard");
  };

  const handlePreviousAction = () => {
    setNextCard("AttendingCard");
  };

  return (
    <div>
      <RSVPFormHeader>Please Choose an Entree</RSVPFormHeader>
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
      <br />
      <br />
      <RSVPFormHeader>Will you be bringing a guest?</RSVPFormHeader>
      <RadioGroup value={radioValue} onChange={handleRadioClick}>
        <FormControlLabel
          className={classes.text}
          value="yes"
          control={<Radio />}
          label="Yes"
        />
        <FormControlLabel
          className={classes.text}
          value="no"
          control={<Radio />}
          label="No"
        />
      </RadioGroup>

      <Button onClick={handlePreviousAction} className={classes.prevButton}>
        Previous
      </Button>

      <Button
        disabled={!entree || !radioValue}
        onClick={handleNextAction}
        className={classes.actionButton}
      >
        Next
      </Button>
    </div>
  );
};
