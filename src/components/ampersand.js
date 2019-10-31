import React from "react"

import "./ampersand.scss"

const Ampersand = ({ color, size }) => {
  return (
    <div className="ampersand" style={{ color, fontSize: size }}>
      {"&"}
    </div>
  )
}

export default Ampersand
