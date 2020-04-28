import React from 'react'
import { render } from '@testing-library/react'

import CartItens from './CartItens'

describe('CartItens tests', () => {
  it('must render the empty cart', () => {
    const { getByTestId } = render(
      <CartItens  products={ [] } />
    )

    expect(getByTestId('cart-itens')).toHaveTextContent('Cart is empty')
  })

  it('must render the cart with 1 product', () => {
    const products = [{
      id: 1,
      name: 'Learn react',
      price: 'U$ 50,99',
      quantity: 1
    }]

    const { getByTestId } = render(
      <CartItens products={ products } />
    )

    expect(getByTestId('cart-item-' + products[0].id)).toHaveTextContent('Learn react - 1 x U$ 50,99')
  })
})