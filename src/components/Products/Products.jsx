import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Alert } from 'react-bootstrap'

import ProductsList from './ProductsList/ProductsList'

import Classes from './Products.module.scss'

const Products = (props) => {
  const [showMessage, setShowMessage] = useState(false)
  const [product, setProduct] = useState('')

  const visible = () => {
    return props.visible ? null : Classes.products_hidden
  }

  const displayMessage = (product) => {
    setShowMessage(true)
    setProduct(product.name)

    setTimeout(() => {
      setShowMessage(false)
    }, 3000)
  }

  return (
    <div className={ visible() }>
      <Alert
        variant="success"
        show={ showMessage }
        className={ Classes.products_alert }
      >
        <strong>{ product }</strong> has been added to the cart
      </Alert>

      <ProductsList 
        displayMessage={ displayMessage }
        addProduct={ props.addProduct }
      />
    </div>
  )
}

Products.propTypes = {
  visible: PropTypes.bool.isRequired,
  addProduct: PropTypes.func.isRequired
}

export default Products