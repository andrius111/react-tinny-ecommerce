import React, { useState } from 'react'

import Menu from '../Menu/Menu'
import Products from '../Products/Products'
import Checkout from '../Checkout/Checkout'

const Main = () => {
  const [cart, setCart] = useState({ products: [] })
  const [showProducts, setShowProducts] = useState(true)
  const [showCheckout, setShowCheckout] = useState(false)
  const [total, setTotal] = useState('0,00')
  
  return (
    <React.Fragment>
      <Menu />
      <Products />
      <Checkout />
    </React.Fragment>
  )
}

export default Main