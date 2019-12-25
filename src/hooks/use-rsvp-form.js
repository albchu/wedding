import React, { useState, useRef } from "react"

export const useRSVPForm = () => {
  const [form, setFormState] = useState({})

  // const [lastName, setLastName] = useState("")
  // const [isAttending, setIsAttending] = useState("")
  // const [guestName, setGuestName] = useState("")

  const updateForm = (key, value) => {
    setFormState(state =>
      ({ ...state, [key]: value })
    )
  }
  return {
    form,
    updateForm
    // name,
    // onNameChange
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
