import React from 'react'
import PropTypes from 'prop-types'
import { NavDropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSadTear } from '@fortawesome/free-solid-svg-icons'

import Classes from './CartItens.module.scss'

const CartItens = (props) => {
  const render = () => {
    if (props.products.length === 0) {
      return (
        <NavDropdown.Item
          href=""
          data-testid="cart-itens"
        >
          <FontAwesomeIcon 
            icon={ faSadTear } 
            className={ Classes.cart_itens_icon_padding_right }
          />
          Cart is empty
        </NavDropdown.Item>
      )
    }

    const cartItens = props.products.map(product => 
      <NavDropdown.Item
        href=""
        key={ product.id }
        data-testid={ 'cart-item-' + product.id }
      >
        { product.name } - { product.quantity } x { product.price }
      </NavDropdown.Item>
    )

    return cartItens
  }
  
  return render()
}

CartItens.propTypes = {
  products: PropTypes.array.isRequired
}

export default CartItens