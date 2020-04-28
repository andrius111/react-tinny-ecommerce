import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { 
  Form, 
  Row, 
  Col, 
  Button, 
  Jumbotron,
  Modal, 
  Container
} from 'react-bootstrap'

import Classes from './Checkout.module.scss'

const Checkout = (props) => {
  return (
    <Container className={ Classes.checkout_container }>
      <h3 className="text-center">Checkout</h3>

      <Form 
        noValidate
        className={ Classes.checkout_form }
      >
        <Form.Group 
          as={ Row } 
          controlId="email" 
        >
          <Form.Label 
            column 
            sm={ 3 }
          >
            Email:
          </Form.Label>

          <Col sm={ 9 }>
            <Form.Control
              type="email"
              name="email"
              data-testid="input-email"
            />

            <Form.Control.Feedback type="invalid">
              Type a valid email
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group 
          as={ Row } 
          controlId="full-name" 
        >
          <Form.Label 
            column 
            sm={ 3 }
          >
            Full Name:
          </Form.Label>

          <Col sm={ 9 }>
            <Form.Control
              type="text"
              name="full-name"
              data-testid="input-full-name"
            />

            <Form.Control.Feedback type="invalid">
              Type your full name (min. 5 characteres)
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group 
          as={ Row } 
          controlId="birth-date" 
        >
          <Form.Label 
            column 
            sm={ 3 }
          >
            Birth Date:
          </Form.Label>

          <Col sm={ 9 }>
            <DatePicker 
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdowMode="select"
              withPortal
            />

            <Form.Control.Feedback type="invalid">
              Type your full name (min. 5 characteres)
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group 
          as={ Row } 
          controlId="postal-code" 
        >
          <Form.Label 
            column 
            sm={ 3 }
          >
            Postal Code:
          </Form.Label>

          <Col sm={ 9 }>
            <Form.Control
              type="text"
              name="postal-code"
              data-testid="input-postal-code"
            />

            <Form.Control.Feedback type="invalid">
              Type your Postal Code
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group 
          as={ Row } 
          controlId="address" 
        >
          <Form.Label 
            column 
            sm={ 3 }
          >
            Address:
          </Form.Label>

          <Col sm={ 9 }>
            <Form.Control
              type="text"
              name="address"
              data-testid="input-address"
            />

            <Form.Control.Feedback type="invalid">
              Type your Address
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group 
          as={ Row } 
          controlId="city" 
        >
          <Form.Label 
            column 
            sm={ 3 }
          >
            City:
          </Form.Label>

          <Col sm={ 9 }>
            <Form.Control
              type="text"
              name="city"
              data-testid="input-city"
            />

            <Form.Control.Feedback type="invalid">
              Type your City
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group 
          as={ Row } 
          controlId="state" 
        >
          <Form.Label 
            column 
            sm={ 3 }
          >
            State:
          </Form.Label>

          <Col sm={ 9 }>
            <Form.Control
              type="text"
              name="state"
              data-testid="input-state"
            />

            <Form.Control.Feedback type="invalid">
              Type your State
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group 
          as={ Row } 
          controlId="promotional-emails" 
        >
          <Form.Label 
            column 
            sm={ 12 }
          >
            Want to receive promotional emails?
          </Form.Label>

          <Form.Check 
            inline
            name="radio-promotional-emails"
            type="radio"
            id="radio-promotional-emails-yes"
            value="Y"
            label="Yes" 
            className={ Classes.checkout_promotional_emails }
          />

          <Form.Check 
            inline
            name="radio-promotional-emails"
            type="radio"
            id="radio-promotional-emails-no"
            value="N"
            label="No" 
          />
        </Form.Group>

        <Form.Group 
          as={ Row } 
          controlId="finish-purchase"
        >
          <Col 
            className="text-center" 
            sm={ 12 }
          >
            <Button
              type="submit"
              variant="success"
              data-testid="finish-purchase"
            >
              Finish Purchase
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  )
}

Checkout.propTypes = {

}

export default Checkout