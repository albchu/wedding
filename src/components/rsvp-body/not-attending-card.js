import React from "react";
import RSVPFormHeader from "./rsvp-form-header";
import capitalize from "lodash/capitalize";
import { usePostRsvp } from "./use-post-rsvp";

export const NotAttendingCard = ({ form }) => {
  usePostRsvp(form);

  return (
    <>
      <RSVPFormHeader>
        {`No worries ${capitalize(form.name.split(" ")[0])}!`}
      </RSVPFormHeader>
      <RSVPFormHeader>Thanks for letting us know.</RSVPFormHeader>
    </>
  );
};
