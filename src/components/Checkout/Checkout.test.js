import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Checkout from './Checkout'

describe('Checkout component tests', () => {
  const checkoutData = {
    email: 'lorem@ipsum.com',
    fullName: 'lorem ipsum name',
    postalCode: '123456',
    address: 'lorem ipsum address',
    city: 'lorem ipsum city',
    state: 'lorem ipsum state',
    promotionalEmails: 'Y',
    products: '{}',
    total: 'U$ 10,00'
  }
  
  it('should render the component without errors', () => {
    const { getByText } = render(
      <Checkout 
        visible={ true }
        handleShowProducts={ false }
        total={ '10,00' }
        products={ {} }
        handleClearCart={ () => false }
      />
    )

    const checkoutElement = getByText(/Checkout/i)
    expect(checkoutElement).toBeInTheDocument()
  })

  it('should finish the purchase successfuly', async () => {
    const { findByTestId, getByTestId } = render(
      <Checkout 
        visible={ true }
        handleShowProducts={ false }
        total={ '10,00' }
        products={ {} }
        handleClearCart={ () => false }
      />
    )

    fireEvent.change(getByTestId('input-email'), { target: { value: checkoutData.email } })
    fireEvent.change(getByTestId('input-full-name'), { target: { value: checkoutData.fullName } })
    fireEvent.change(getByTestId('input-postal-code'), { target: { value: checkoutData.postalCode } })
    fireEvent.change(getByTestId('input-address'), { target: { value: checkoutData.address } })
    fireEvent.change(getByTestId('input-city'), { target: { value: checkoutData.city } })
    fireEvent.change(getByTestId('input-state'), { target: { value: checkoutData.state } })
    fireEvent.click(getByTestId('finish-purchase'))

    const modal = await findByTestId('susscessful-modal-checkout')
    expect(modal).toHaveTextContent('Successful purchase!')
  })
})
