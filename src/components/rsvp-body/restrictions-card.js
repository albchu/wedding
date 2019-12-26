import React, { useState } from "react";
import RSVPFormHeader from "./rsvp-form-header";
import { Button, TextField } from "@material-ui/core";
import { useCardStyles } from "./use-card-styles";

export const RestrictionsCard = ({ setNextCard, updateForm }) => {
  const classes = useCardStyles();
  const [restrictions, setRestrictions] = useState("");

  const handleRestrictionsChange = event => {
    setRestrictions(event.target.value);
  };

  const handleSubmit = () => {
    updateForm("dietaryRestrictions", restrictions);
    setNextCard("ThankYouCard");
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
      <Button onClick={handleSubmit} className={classes.actionButton}>
        Submit
      </Button>
    </div>
  );
};
