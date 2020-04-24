import React from 'react'
import { render } from '@testing-library/react'

import Checkout from './Checkout'

describe('Checkout component tests', () => {
  it('must render the component without errors', () => {
    const { getByText } = render(<Checkout />)
    const checkoutElement = getByText(/Checkout/i)
    expect(checkoutElement).toBeInTheDocument()
  })
})
