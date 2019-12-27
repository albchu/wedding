import React from "react";
import "./tna-body.scss";

const TravelAndAcommodation = () => {
  return (
    <div className="tna-body">
      <div className="flight-Title">
        <div className="flight-Circle" />
        <div className="tna-Title">Flights</div>
      </div>
      <div className="tna-Text">
        <p>
          If you are traveling from elsewhere, we suggest you come by flight and
          land at the Calgary Int'l Airport (YYC).{" "}
        </p>
      </div>
      <div className="tna-padding"></div>
      <div className="hotel-Title">
        <div className="hotel-Circle" />
        <div className="tna-Title">Hotel</div>
      </div>
      <div className="tna-Text">
        <p>
          For your comfort and convenience, we have made an arrangement with the
          hotel to reserve a limited number of rooms at a special rate for this
          occasion. These rates are available for rooms staying from July 24th
          to 26th by mentioning the LAO-CHU wedding. For room booking, please
          visit our link below:{" "}
        </p>
        <div className="tna-padding"></div>
        <a href={"https://book.passkey.com/go/LAOCHU0230"}>
          <div className="tna-Link2">Click Here</div>
        </a>
      </div>
      <div className="sightsee-Title">
        <div className="sightsee-Circle" />
        <div className="tna-Title">Sightseeing</div>
      </div>
      <div className="tna-Text">
        <p>
          We highly recommend you visiting Banff while you are in Calgary. We
          have put together a sample itinerary for your visit with Banff hotel
          suggestions and car rental discount code:
        </p>
        <div className="tna-padding"></div>
        <a
          href={
            "https://docs.google.com/spreadsheets/d/1vZ_-HG4DxodcUXp7cW7415PqLHFW9Zt4iUI2e_1NLbU/edit?usp=sharing"
          }
        >
          <div className="tna-Link2">Click Here</div>
        </a>
      </div>
    </div>
  );
};

export default TravelAndAcommodation;
