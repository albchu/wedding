import React, { useState } from "react";
import RSVPFormHeader from "./rsvp-form-header";
import { Button, TextField } from "@material-ui/core";
import { useCardStyles } from "./use-card-styles";

export const RestrictionsCard = ({ setNextCard, updateForm, previousId }) => {
  const classes = useCardStyles();
  const [restrictions, setRestrictions] = useState("");

  const handleRestrictionsChange = event => {
    setRestrictions(event.target.value);
  };

  const handleSubmit = () => {
    updateForm("dietaryRestrictions", restrictions);
    setNextCard("ThankYouCard");
  };

  const handlePreviousAction = () => {
    setNextCard(previousId);
  };

  return (
    <div>
      <RSVPFormHeader>
        Are there any dietary restrictions that we should be aware of?
      </RSVPFormHeader>
      <TextField
        className={classes.textfield}
        label="Restrictions"
        margin="normal"
        variant="outlined"
        onChange={handleRestrictionsChange}
        value={restrictions}
        fullWidth
        multiline
      />

      <Button onClick={handlePreviousAction} className={classes.prevButton}>
        Previous
      </Button>

      <Button onClick={handleSubmit} className={classes.actionButton}>
        Submit
      </Button>
    </div>
  );
};
