import React, { useState, useRef } from "react"

export const useRSVPForm = () => {
  const [name, setName] = useState("")
  const onNameChange = event => {
    setName(event.target.value);
  }
  // const [lastName, setLastName] = useState("")
  // const [isAttending, setIsAttending] = useState("")
  // const [guestName, setGuestName] = useState("")

  return {
    name,
    onNameChange
    // handleReset,
    // handleSubmit,
    // handleIsAttending,
    // handleGuest,
    // isAttending,
    // sliderRef,
    // setFirstName,
    // setLastName,
    // firstName,
    // lastName
  }
}
