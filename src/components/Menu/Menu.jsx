import React from 'react'
import PropTypes from 'prop-types'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faShoppingBasket, 
  faCashRegister, 
  faShoppingCart 
} from '@fortawesome/free-solid-svg-icons'

import Classes from './Menu.module.scss'

import CartItens from './CartItens/CartItens'

const Menu = (props) => {
  const calculateTotal = () => {
    if (props.products.length === 0) {
      return '0,00'
    }

    let total = 0

    props.products.forEach(product => {
      let price = product.price.replace(',', '.').replace('U$ ', '')
      total += parseFloat(price) * product.quantity
    })

    return total.toFixed(2).toString().replace('.', ',')
  }
  
  return (
    <Navbar
      bg="dark"
      variant="dark"
    >
      <Navbar.Brand>Tinny Ecommerce</Navbar.Brand>

      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <NavDropdown
            drop="left"
            title={
              <div className={ Classes.menu_navdropdown_title }>
                <FontAwesomeIcon 
                  icon={ faShoppingCart } 
                  className={ Classes.menu_navdropdown_icon_padding_right }
                />
                Carrinho
              </div>
            }
          >
            <NavDropdown.Item
              href=""
              onClick={ props.handleShowProducts }
            >
              <FontAwesomeIcon 
                icon={ faShoppingBasket } 
                className={ Classes.menu_navdropdown_icon_padding_right } 
              />
              <strong>Produtos</strong>
            </NavDropdown.Item>

            <NavDropdown.Divider />

            <CartItens  products={ props.products } />

            <NavDropdown.Divider />

            <NavDropdown.Item
              href=""
              data-testid="total-cart"
            >
              Total U$ { calculateTotal() }
            </NavDropdown.Item>

            <span className={ props.products.length === 0 ? Classes.products_hidden : null }>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href=""
                className={ Classes.menu_navdropdown_color_green }
                onClick={ () => props.handleShowCheckout(calculateTotal()) }
              >
                <FontAwesomeIcon 
                  icon={ faCashRegister } 
                  className={ Classes.menu_navdropdown_icon_padding_right } 
                />
                <strong>Go to checkout</strong>
              </NavDropdown.Item>
            </span>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

Menu.propTypes = {
  products: PropTypes.array.isRequired,
  handleShowProducts: PropTypes.func.isRequired,
  handleShowCheckout: PropTypes.func.isRequired
}

export default Menu