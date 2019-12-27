import React from "react";
import "./travel-and-acommodation.scss";
import SectionTitle from "./section-title";
import Ampersand from "./ampersand";
import TravelAndAcommodationBody from "./tna-body";

const TravelAndAcommodation = () => {
  return (
    <div className="tna">
      <div className="tna-title">
        <div className="travelAnd">
          <div className="travel">
            <SectionTitle title="Travel" />
          </div>
          <div className="and">
            <Ampersand color="inherit" size="1.8em" />
          </div>
        </div>
        <div className="acommodation">
          <SectionTitle title="Acommodation" />
        </div>
      </div>
      <TravelAndAcommodationBody />
    </div>
  );
};

export default TravelAndAcommodation;
