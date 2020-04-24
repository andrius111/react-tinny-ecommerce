import React from 'react'
import { render } from '@testing-library/react'

import Products from './Products'

describe('Products component tests', () => {
  it('must render the component when visible', () => {
    const { getAllByText } = render(
      <Products 
        visible={ true }
        addProduct={ () => false }
      />
    )

    const buttons = getAllByText(/buy/i)
    expect(buttons).toBeTruthy()
  })
})
