import { render, fireEvent, screen } from '@testing-library/react'
import Counter from './Counter.js'

// This is the test block for the incrementing part of Counter
test('increments counter', () => {
  render(<Counter />)

  // Select the elements you want to interact with using the test-ids you defined before
  const counter = screen.getByTestId('counter')
  const incrementBtn = screen.getByTestId('increment')

  // Interact with those elements
  fireEvent.click(incrementBtn)

  // Define the expected test result - if your element has this value after
  // the test routine the test has been successful
  // This is also where jest comes in - if you want to check out where this is
  // made available, look at the import under setupTests.js
  expect(counter).toHaveTextContent('1')
})
