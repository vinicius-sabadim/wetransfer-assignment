import React from 'react'

import Spinner from '../Spinner'

import './Card.css'

const Card: React.FC = () => {
  return (
    <div className="card__container">
      <Spinner />
      <button>Start</button>
    </div>
  )
}

export default Card
