import React from 'react'
import { render } from '@testing-library/react'

import Menu from './Menu'

describe('Menu component tests', () => {
  it('must render the component without errors', () => {
    const { getByText } = render(
      <Menu 
        products={ [] }
        handleShowProducts={ () => false }
        handleShowCheckout={ () => false }
      />
    )

    const menuElement = getByText(/Tinny Ecommerce/i)
    expect(menuElement).toBeInTheDocument()
  })
})
