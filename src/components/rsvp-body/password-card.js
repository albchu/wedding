import React, { useState } from "react";
import RSVPFormHeader from "./rsvp-form-header";
import { TextField, Button, Fade } from "@material-ui/core";
import { useCardStyles } from "./use-card-styles";

export const PasswordCard = ({ setNextCard }) => {
  const classes = useCardStyles();
  const [password, setPassword] = useState("");
  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };
  const handleNextAction = () => {
    setNextCard("AttendingCard");
  };

  const showNextButton = password === "vwkatl";

  return (
    <div>
      <RSVPFormHeader>Enter your invite code</RSVPFormHeader>
      <br />
      <TextField
        fullWidth
        className={classes.textfield}
        label="Invite Code"
        type="password"
        variant="outlined"
        value={password}
        onChange={handlePasswordChange}
      />
      <Fade in={showNextButton}>
        <Button onClick={handleNextAction} className={classes.actionButton}>
          Next
        </Button>
      </Fade>
    </div>
  );
};
