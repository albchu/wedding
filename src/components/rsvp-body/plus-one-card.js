import React, { useState } from "react";
import RSVPFormHeader from "./rsvp-form-header";
import {
  Button,
  RadioGroup,
  Radio,
  FormControlLabel,
  TextField,
} from "@material-ui/core";

export const PlusOneCard = ({ setNextCard, updateForm }) => {
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

  return (
    <div>
      <RSVPFormHeader>What is the name of your guest?</RSVPFormHeader>
      <TextField
        label="Name"
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
          value="filetMignon"
          control={<Radio />}
          label="Filet Mignon"
        />
        <FormControlLabel
          value="lambRack"
          control={<Radio />}
          label="Lamb Rack"
        />
        <FormControlLabel value="salmon" control={<Radio />} label="Salmon" />
      </RadioGroup>
      <Button disabled={!name || !entree} onClick={handleNextAction}>
        Next
      </Button>
    </div>
  );
};
