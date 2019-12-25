import React from 'react'
import RSVPFormHeader from './rsvp-form-header'

export const ThankYouCard = ({ form }) => {
  return (
    <div>
      <RSVPFormHeader>
        {`Great! You're all set ${JSON.stringify(form)}`}
      </RSVPFormHeader>
    </div>
  )
}
