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
        </div>
        <div className="circleButtonRow">
          <div className="row">
            <div className="address">
              <p>
                Fairmont Palliser
              </p>
              <p>
                133 9 Ave SW
              </p>
              <p>
                Calgary, AB, Canada
              </p>
              <p>
                T2P-2M3
              </p>
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
      <div className="schedule">
        the scedule
    </div>
    </div>
  )
}

export default WhenAndWhereBody
