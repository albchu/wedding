import React, { useEffect } from "react";
import RSVPFormHeader from "./rsvp-form-header";
import capitalize from "lodash/capitalize";

export const NotAttendingCard = ({ form }) => {
  useEffect(() => {
    fetch("/api/rsvp", {
      method: "post",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, [form]);

  return (
    <>
      <RSVPFormHeader>
        {`No worries ${capitalize(form.name.split(" ")[0])}!`}
      </RSVPFormHeader>
      <RSVPFormHeader>Thanks for letting us know.</RSVPFormHeader>
    </>
  );
};
