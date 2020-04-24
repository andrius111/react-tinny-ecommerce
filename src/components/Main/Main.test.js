import React from 'react'
import { render } from '@testing-library/react'

import Main from './Main'

describe('Main component tests', () => {
  it('must render the component without errors', () => {
    const { getByText } = render(<Main />)
    const checkoutElement = getByText(/Checkout/i)
    expect(checkoutElement).toBeInTheDocument()
  })
})
