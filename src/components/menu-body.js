import React from "react"
import SectionTitle from "./section-title"
import "./menu-body.scss"
import Ampersand from "./ampersand"

const MenuBody = () => {
  return (
    <div className="menu_body">
      <div className="menu_body_title">~ Soup ~</div>
      <div className="menu_body_title">~ Salad ~</div>
      <div className="menu_body_title">~ Entree ~</div>
      <div className="menu_body_select entree_sub">Your choice of:</div>
      <div />
      Filet Mignon
      <div />
      Lamb Rack
      <div />
      Salmon
      <div className="menu_body_title">~ Dessert ~</div>
      <p></p>
      <div className="menu_body_select">
        You will be able to select your entree and let us know any dietary
        restrictions below in the RSVP section.
      </div>
    </div>
  )
}

export default MenuBody
