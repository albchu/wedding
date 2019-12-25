import React, { Children, useMemo, useEffect, useState, cloneElement } from 'react'
import { useSpring, animated, useTransition } from 'react-spring'
import { Button, Fade } from "@material-ui/core"
import "./tree-deck.scss"
/**
 * Always renders one node component on top at a time
 * Fades between node components
 * Each node component navigates left and right by its own id and referencing others
 * Props:
 * onIdChange: (id) => {...}
 */
export const TreeDeck = ({ onIdChange, children, initialId, updateForm }) => {
  const [currentId, setCurrentId] = useState(initialId)
  const [previousId, setPreviousId] = useState(null);
  const setNextCard = (newId) => {
    setPreviousId(currentId);
    setCurrentId(newId);
  }

  const currentComponent = useMemo(() => {
    const childToRender = Children.toArray(children).find(({ type }) => type.displayName === currentId)

    return (cloneElement(childToRender, { setNextCard, updateForm }))
  }, [currentId])

  // const previousComponent = useMemo(() => {
  //   const childToRender = Children.toArray(children).find(({ type }) => type.displayName === previousId)

  //   return (cloneElement(childToRender, { setNextCard }))
  // }, [previousId])

  const contentProps = useSpring({
    opacity: 0,
    delay: 800,
    from: { opacity: 1 },
    config: { duration: 600 }
  });

  return (
    <div>
      <div className="treeDeck_container">
        <div className='treeDeck_card'>
          {currentComponent}
        </div>
      </div>
    </div >
  )
}
