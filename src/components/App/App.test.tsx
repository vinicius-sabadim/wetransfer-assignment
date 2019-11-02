import React from 'react'
import { render, fireEvent, wait } from '@testing-library/react'

import App from './App'

test('should start the timer', async () => {
  jest.useFakeTimers()

  const { getByTestId, getByText } = render(<App />)
  fireEvent.click(getByText(/start/i))
  await wait(() => {
    jest.advanceTimersByTime(1000)
  })
  const progressValue = getByTestId('spinner-progress')

  expect(progressValue.textContent).not.toBe('0')
})

test('should stop the timer and reset progress to 0', async () => {
  jest.useFakeTimers()

  const { getByTestId, getByText } = render(<App />)
  fireEvent.click(getByText(/start/i))
  await wait(() => {
    jest.advanceTimersByTime(1000)
    fireEvent.click(getByText(/stop/i))
  })
  const progressValue = getByTestId('spinner-progress')

  expect(progressValue.textContent).toEqual('0')
})
