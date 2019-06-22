import React from "react"
import { withSize } from "react-sizeme"
import { isMobile } from "../../hooks/breakpoints"
import "./DotBar.css"

const Dot = ({ size }) => (
  <div className="Dot" style={{ width: size, height: size }} />
)

const MIN_GAP_WIDTH_MOBILE = 11
const DOT_SIZE_MOBILE = 6
const MIN_GAP_WIDTH = 18
const DOT_SIZE = 9

const DotBar = ({ size, minGap, dotSize }) => {
  const mobileRes = isMobile()

  const minGapToUse = minGap || mobileRes ? MIN_GAP_WIDTH_MOBILE : MIN_GAP_WIDTH
  const dotSizeToUse = dotSize || mobileRes ? DOT_SIZE_MOBILE : DOT_SIZE
  const { width } = size
  const numDots = parseInt(width / (minGapToUse + dotSizeToUse))

  return (
    // Nesting div is necessary because of react-sizeme size detection element
    <div>
      <div className="DotBar_container">
        {[...Array(numDots)].map(() => (
          <Dot size={dotSizeToUse} />
        ))}
      </div>
    </div>
  )
}

export default withSize()(DotBar)
