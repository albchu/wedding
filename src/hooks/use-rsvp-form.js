import React, { useState, useRef } from "react"

export const useRSVPForm = () => {
  const [isAttending, setIsAttending] = useState("")
  const [guestName, setGuestName] = useState("")
  console.log("isAttending", isAttending)
  const sliderRef = useRef()

  const handleGuest = name => {
    console.log("HANDLING")
    const { slickGoTo } = sliderRef.current
    setGuestName(name)
    slickGoTo(4)
    // Move to appropriate tab
  }

  const handleIsAttending = event => {
    const { slickGoTo } = sliderRef.current
    const answer = event.target.value
    setIsAttending(answer)
    console.log("answer", answer)
    if (answer === "no") {
      slickGoTo(1)
    } else {
      slickGoTo(2)
    }
  }

  const handleReset = () => {
    const { slickGoTo } = sliderRef.current
    slickGoTo(0)
    setIsAttending("")
  }

  const handleSubmit = () => {
    const { slickGoTo } = sliderRef.current
    slickGoTo(3)
  }

  return {
    handleReset,
    handleSubmit,
    handleIsAttending,
    handleGuest,
    isAttending,
    sliderRef,
  }
}
