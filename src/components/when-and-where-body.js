import React from 'react'
import "./when-and-where-body.scss"

const WhenAndWhereBody = () => {
  return (
    <div className="whenWhereBody">
      <div className="addCalendarMap">
        <div className="circleButtonRow">
          <div className="circle">
          <a href={"https://goo.gl/maps/HRmshh33jHLiiVN29"}><div className="map" /></a>
          </div>
          <div className="address">
              <p>
                Fairmont Palliser 
              </p>
              <p>
              Oak Room
              </p>
              <p>
                133 9 Ave SW
              </p>
              <p>
                Calgary, AB
              </p>
              <p>
              Canada T2P 2M3
              </p>
            </div>
        </div>
        <div className="circleButtonRow">
          <div className="row">
            <div className="save_date">
              <p>
                July 25, 2020
              </p>
              <p>
                Add to Calendar
              </p>
            </div>
          </div>
          <div className="circle">
          <a href={"https://calendar.google.com/calendar/render?action=TEMPLATE&tmeid=NzQxcHBkYmdsYXBwZmQ1bGcxOGwydTlkbWUgMWhlcGUzczJxZG81ODJxM245amk4aGJlcm9AZw&tmsrc=1hepe3s2qdo582q3n9ji8hbero%40group.calendar.google.com"}><div className="date" /></a>
              <div className="date_day" />
          </div>

        </div>
      </div>
      <div className="schedule_title">
        Schedule
        <p/>
        </div>
        <div className="schedule">
        💘 2:00pm: Ceremony
        <p/>
        🍸 5:30pm: Cocktail Hour
        <p/> 
        🍽️ 6:30pm: Dinner
        <p/> 
        🍰 8:30pm: Cake Cutting
        <p/>
        🌮 11:00pm: TACO TIME!
        <p/>  
        </div>
    </div>

  )
}

export default WhenAndWhereBody
