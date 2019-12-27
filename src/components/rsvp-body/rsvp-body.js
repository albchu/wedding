import React from "react";
import { useRSVPForm } from "./use-rsvp-form";
import { TreeDeck } from "./tree-deck";
import { AttendingCard } from "./attending-card";
import { NotAttendingCard } from "./not-attending-card";
import { GuestCard } from "./guest-card";
import { PlusOneCard } from "./plus-one-card";
import { RestrictionsCard } from "./restrictions-card";
import { ThankYouCard } from "./thank-you-card";
import { PasswordCard } from "./password-card";

const RSVPBody = ({}) => {
  const { form, updateForm } = useRSVPForm();

  return (
    <div className="rsvp_body">
      <TreeDeck initialId="PasswordCard" updateForm={updateForm} form={form}>
        <PasswordCard id="PasswordCard" />
        <AttendingCard id="AttendingCard" />
        <NotAttendingCard id="NotAttendingCard" />
        <GuestCard id="GuestCard" />
        <PlusOneCard id="PlusOneCard" />
        <RestrictionsCard id="RestrictionsCard" />
        <ThankYouCard id="ThankYouCard" />
      </TreeDeck>
    </div>
  );
};

export default RSVPBody;
