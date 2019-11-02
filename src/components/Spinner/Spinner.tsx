import React from 'react'

import './Spinner.css'

interface SpinnerInterface {
  isActive: boolean
  stroke?: number
  progress: number
  size?: number
}

// Spinner inspired by this post https://css-tricks.com/building-progress-ring-quickly/
const Spinner: React.FC<SpinnerInterface> = ({
  isActive = false,
  stroke = 12,
  progress = 0,
  size = 160
}) => {
  const radius = size / 2
  const normalizedRadius = radius - stroke * 2
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className={`spinner__container ${isActive ? 'spinner--active' : ''}`}>
      <svg height={size} width={size} className="spinner__svg">
        <circle
          className="spinner__barBackground"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          className="spinner__bar"
          strokeWidth={stroke}
          r={normalizedRadius}
          style={{
            strokeDasharray: `${circumference} ${circumference}`,
            strokeDashoffset: strokeDashoffset
          }}
          cx={radius}
          cy={radius}
        />
      </svg>
      <span className="spinner__label">{progress}</span>
    </div>
  )
}

export default Spinner
