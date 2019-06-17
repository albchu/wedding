import React from "react"
import AddToCalendar from "react-add-to-calendar"
import "./CalendarMenu.css"

const calendarEvent = {
  title: "Vicky & Albert's Wedding!",
  description:
    "Party it dup with Vicky and Albert on their friggin wedding day!",
  location: "Fairmont Palliser, 133 9 Ave SW, Calgary, AB T2P 2M3, Canada",
  startTime: "2020-07-25T14:00:00-07:00",
  endTime: "2020-07-25T23:59:00-07:00",
}

const items = [
  { google: "Google" },
  { apple: "Apple Calendar" },
  { yahoo: "Yahoo" },
  { outlook: "Outlook" },
  { outlookcom: "Outlook.com" },
]

const CalendarMenu = () => {
  return (
    <div className="CalendarMenu_container">
      <AddToCalendar
        event={calendarEvent}
        buttonLabel="Add to Calendar"
        listItems={items}
      />
    </div>
  )
}

export default CalendarMenu
