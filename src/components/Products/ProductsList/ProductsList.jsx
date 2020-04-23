import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import Classes from './ProductsList.module.scss'

const ProductsList = () => {
  const products = [
    { id: 1, name: 'Lorem Ipsum', price: 'U$ 99,99' },
    { id: 2, name: 'Java Course', price: 'U$ 29,99' },
    { id: 3, name: 'Avengers Endgame', price: 'U$ 19,99' },
    { id: 4, name: 'Pizza', price: 'U$ 9,99' },
    { id: 5, name: 'Learn React', price: 'U$ 99,99' },
    { id: 6, name: 'iPhone XR', price: 'U$ 599,99' },
    { id: 7, name: 'iPad Pro', price: 'U$ 699,99' },
    { id: 8, name: 'MacBook air', price: 'U$ 899,99' },
  ]

  const handleBuy = (event, product) => {
    event.preventDefault()
  }

  return (
    products.map(product => 
      <Card
        key={ product.id }
        data-testid={ "card-" + product.id }
        className={ Classes.product_card }
      >
        <Card.Img 
          variant="top"
          src="https://via.placeholder.com/286x180"
        />

        <Card.Body className="text-center">
          <Card.Title className={ Classes.product_card_title }>
            { product.name }
          </Card.Title>
          
          <Card.Text>
            Lorem ipsum...
          </Card.Text>

          <Button
            variant="success"
            className={ Classes.product_card_button }
            onClick={ (event) => handleBuy(event, product) }
          >
            Buy ({ product.price })
          </Button>
        </Card.Body>
      </Card>  
    )
  )
}

export default ProductsList