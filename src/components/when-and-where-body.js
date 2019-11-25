import React from 'react'
import "./when-and-where-body.scss"

const WhenAndWhereBody = () => {
  return (
    <div className="whenWhereBody">
      <div className="addCalendarMap">
        <div className="circleButtonRow">
          <div className="circle">
            <div className="map" />
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
              Add to Calendar
            </div>
          </div>
          <div className="circle">
            <div className="date">
              <div className="date_month">
                July
              </div>
              <div className="date_day">
                25th
               </div>
              <div className="date_year">
                2020
              </div>
            </div>
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
