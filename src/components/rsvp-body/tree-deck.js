import React, { Children, useEffect, useState, cloneElement } from 'react'
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

  const getCurrentComponent = () => {
    const childToRender = Children.toArray(children).find(({ type }) => type.name === currentId)
    return childToRender ? cloneElement(childToRender, { setNextCard, updateForm }) : null
  }

  return (
    <div>
      <div className="treeDeck_container">
        <div className='treeDeck_card'>
          {getCurrentComponent()}
        </div>
      </div>
    </div >
  )
}
