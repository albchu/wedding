import React from 'react'
import "./image-container.scss"

const ImageContainer = ({ imgPath, height, children }) => {
  return (
    <div className="imageContainer__wrap">
      <img height={height} className="imageContainer__img" src={imgPath} />
      <div className="imageContainer__content">
        {children}
      </div>
    </div>
  )
}

export default ImageContainer
