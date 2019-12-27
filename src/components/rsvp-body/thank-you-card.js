import React, { useEffect } from "react";
import RSVPFormHeader from "./rsvp-form-header";
import capitalize from "lodash/capitalize";
import map from "lodash/map";
import random from "lodash/random";
import { Typography } from "@material-ui/core";
import { useCardStyles } from "./use-card-styles";

const INTRO_MESSAGES = guestName => [
  `Fantastic! You're confirmed ${guestName}. Thanks for RSVPing.`,
  `Great, you're all set ${guestName}!`,
  `Perfect, you're all set ${guestName}. Thank you for confirming your reservation.`,
  `Wonderful. We have received your confirmation ${guestName}.`,
  `Yes! Your RSVP has been confirmed ${guestName}.`,
  `${guestName}, you absolute rockstar. You're confirmed to be joining us!`,
  `Frick yeah ${guestName}! Thank you for confirming your RSVP`,
];

const getRandomIntro = formName => {
  const guestName = capitalize(formName.split(" ")[0]);
  const messages = INTRO_MESSAGES(guestName);
  const randIndex = random(0, messages.length - 1);
  return messages[randIndex];
};

const getThanks = formPlusOneName => {
  return `We can't wait to celebrate with you${
    formPlusOneName ? ` and ${capitalize(formPlusOneName.split(" ")[0])}` : ""
  } at the Fairmont Palliser on July 25th 2020.`;
};

export const ThankYouCard = ({ form }) => {
  useEffect(() => {
    fetch("/api/rsvp", {
      method: "post",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, [form]);
  const classes = useCardStyles();

  return (
    <div>
      <RSVPFormHeader>{getRandomIntro(form.name)}</RSVPFormHeader>
      <br />
      <RSVPFormHeader>{getThanks(form.plusOneName)}</RSVPFormHeader>
      <br />
      <Typography className={classes.text}>
        If you have any questions, please don't hesitate to reach out to us
        directly or through email at albertchu539@gmail.com or
        vickywklao@gmail.com
      </Typography>
    </div>
  );
};
