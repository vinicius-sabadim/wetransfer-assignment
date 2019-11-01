import React from 'react'

import './Spinner.css'

// Spinner inspired by this post https://css-tricks.com/building-progress-ring-quickly/

const Spinner: React.FC = () => {
  const stroke = 12
  const progress = 60

  const size = 160
  const radius = size / 2

  const normalizedRadius = radius - stroke * 2
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className="spinner__container">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#eee"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#42a1ff"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
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
