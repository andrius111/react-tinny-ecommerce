import React from 'react'
import { render } from '@testing-library/react'

import ProductsList from './ProductsList'

describe('ProductsList component tests', () => {
  it('must show the products name in cards', () => {
    const { getByTestId } = render(
      <ProductsList 
        addProduct={ () => false }
        displayMessage={ () => false }
      />
    )

    expect(getByTestId('card-1')).toHaveTextContent('Lorem Ipsum')
  })

  it('must show the products description in cards', () => {
    const { getByTestId } = render(
      <ProductsList 
        addProduct={ () => false }
        displayMessage={ () => false }
      />
    )

    expect(getByTestId('card-1')).toHaveTextContent('Lorem ipsum...')
  })
})
