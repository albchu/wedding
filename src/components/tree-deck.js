import React, { Children, useMemo, useEffect, useState, cloneElement } from 'react'
// import Fade from '@material-ui/core/Fade';
// import Fade from "react-reveal/Fade"

/**
 * Always renders one node component on top at a time
 * Fades between node components
 * Each node component navigates left and right by its own id and referencing others
 * Props:
 * onIdChange: (id) => {...}
 */
export const TreeDeck = ({ onIdChange, children, initialId }) => {
  const [currentId, setCurrentId] = useState(initialId)
  const currentComponent = useMemo(() => {
    const childToRender = Children.toArray(children).find(({ props }) => props.id === currentId)

    return (cloneElement(childToRender, { setCurrentId }))
  }, [currentId])

  return (
    <div>
      {currentComponent}
    </div >
  )
}


// How do you do transition?