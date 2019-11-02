import React, { useState } from 'react'

import { useInterval } from '../../hooks'
import Spinner from '../Spinner'

import './Card.css'

// Simulating a progress that takes 100ms for every update.
const DELAY = 100

const Card: React.FC = () => {
  const [isUploading, setIsUploading] = useState(false)
  const [progress, setProgress] = useState(0)

  // This useInterval is a hook found in the post https://overreacted.io/making-setinterval-declarative-with-react-hooks/
  useInterval(
    () => {
      // Simulating an update on the progress.
      const percentage = Math.floor(Math.random() * 5)
      const newValue = progress + percentage
      newValue >= 100 ? setProgress(100) : setProgress(newValue)
    },
    isUploading ? DELAY : null
  )

  function startUpload() {
    setIsUploading(true)
  }

  function stopUpload() {
    setIsUploading(false)
    setProgress(0)
  }

  return (
    <div className="card__container">
      <Spinner isUploading={isUploading} progress={progress} />
      {isUploading ? (
        <button className="card__button" onClick={stopUpload}>
          Stop
        </button>
      ) : (
        <button className="card__button" onClick={startUpload}>
          Start
        </button>
      )}
    </div>
  )
}

export default Card
