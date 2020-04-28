import React, { useState } from 'react'

import Menu from '../Menu/Menu'
import Products from '../Products/Products'
import Checkout from '../Checkout/Checkout'

const Main = () => {
  const [cart, setCart] = useState({ products: [] })
  const [showProducts, setShowProducts] = useState(true)
  const [showCheckout, setShowCheckout] = useState(false)
  const [total, setTotal] = useState('0,00')
  
  const addProduct = (product) => {
    const objCart = Object.assign({}, cart)
    
    let newProduct = true

    objCart.products.forEach((productInCart, index) => {
      if (productInCart.name === product.name) {
        objCart.products[index].quantity++
        newProduct = false
      }
    })

    if (newProduct) {
      objCart.products.push({
        id: product.id,
        name: product.name, 
        price: product.price,
        quantity: 1
      })
    }

    setCart(objCart)
  }

  const handleShowProducts = () => {
    setShowCheckout(false)
    setShowProducts(true)
  }

  const handleShowCheckout = (total) => {
    setShowCheckout(true)
    setShowProducts(false)
    setTotal(total)
  }

  return (
    <React.Fragment>
      <Menu 
        products={ cart.products }
        handleShowProducts={ handleShowProducts }
        handleShowCheckout={ handleShowCheckout }
      />

      <Products 
        visible={ showProducts }
        addProduct={ addProduct }
      />

      <Checkout />
    </React.Fragment>
  )
}

export default Main