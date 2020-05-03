import React, { useState } from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'
import { Formik } from 'formik'
import * as yup from 'yup'
import { 
  Form, 
  Row, 
  Col, 
  Button, 
  Modal, 
  Container
} from 'react-bootstrap'

import Classes from './Checkout.module.scss'
import 'react-datepicker/dist/react-datepicker.css'

const Checkout = (props) => {
  const [birthDate, setBirthDate] = useState(null)
  const [formIsSend, setFormIsSend] = useState(false)
  const [showModal, setShowModal] = useState(false)
  
  const schema = yup.object({
    email: yup.string().email().required(),
    fullName: yup.string().required().min(5),
    postalCode: yup.string().required(),
    address: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    promotionalEmails: yup.string().required()
  })

  const visible = () => {
    return props.visible ? '' : ' ' + Classes.checkout_hidden
  }

  const handleBirthDate = (date) => {
    setBirthDate(date)
  }

  const getDatePickerClass = () => {
    if (!formIsSend) {
      return "form-control"
    }

    if (birthDate) {
      return "form-control is-valid"
    }

    return "form-control is-invalid"
  }

  const handleContinue = () => {
    setFormIsSend(true)
    setShowModal(false)
    props.handleShowProducts()
  }

  const handleCheckout = (data) => {
    setShowModal(true)
    props.handleClearCart()
  }

  return (
    <Container className={ Classes.checkout_container + visible() }>
      <h3 className="text-center">Checkout</h3>

      <Formik
        onSubmit={ (values) => handleCheckout(values) }
        validationSchema={ schema }
        initialValues={{
          email: '',
          fullName: '',
          postalCode: '',
          address: '',
          city: '',
          state: '',
          promotionalEmails: 'Y'
        }}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          touched,
          errors
        }) => (
          <Form 
            noValidate
            className={ Classes.checkout_form }
            onSubmit={ handleSubmit }
          >
            <Form.Group as={ Row } controlId="email" >
              <Form.Label column sm={ 3 }>
                Email:
              </Form.Label>

              <Col sm={ 9 }>
                <Form.Control
                  type="email"
                  name="email"
                  data-testid="input-email"
                  value={ values.email }
                  onChange={ handleChange }
                  isValid={ touched.email && !errors.email }
                  isInvalid={ touched.email && !!errors.email }
                />

                <Form.Control.Feedback type="invalid">
                  Type a valid email
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={ Row } controlId="full-name" >
              <Form.Label column sm={ 3 }>
                Full Name:
              </Form.Label>

              <Col sm={ 9 }>
                <Form.Control
                  type="text"
                  name="fullName"
                  data-testid="input-full-name"
                  value={ values.fullName }
                  onChange={ handleChange }
                  isValid={ touched.fullName && !errors.fullName }
                  isInvalid={ touched.fullName && !!errors.fullName }
                />

                <Form.Control.Feedback type="invalid">
                  Type your full name (min. 5 characteres)
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={ Row } controlId="birth-date">
              <Form.Label column sm={ 3 }>
                Birth Date:
              </Form.Label>

              <Col sm={ 9 }>
                <DatePicker 
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                  dropdowMode="select"
                  withPortal
                  selected={ birthDate }
                  onChange={ handleBirthDate }
                  className={ getDatePickerClass() }
                />

                <Form.Control.Feedback type="invalid">
                  Type your full name (min. 5 characteres)
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={ Row } controlId="postal-code">
              <Form.Label column sm={ 3 }>
                Postal Code:
              </Form.Label>

              <Col sm={ 9 }>
                <Form.Control
                  type="text"
                  name="postalCode"
                  data-testid="input-postal-code"
                  values={ values.postalCode }
                  onChange={ handleChange }
                  isValid={ touched.postalCode && !errors.postalCode }
                  isInvalid={ touched.postalCode && !!errors.postalCode }
                />

                <Form.Control.Feedback type="invalid">
                  Type your Postal Code
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={ Row } controlId="address">
              <Form.Label column sm={ 3 }>
                Address:
              </Form.Label>

              <Col sm={ 9 }>
                <Form.Control
                  type="text"
                  name="address"
                  data-testid="input-address"
                  values={ values.address }
                  onChange={ handleChange }
                  isValid={ touched.address && !errors.address }
                  isInvalid={ touched.address && !!errors.address }
                />

                <Form.Control.Feedback type="invalid">
                  Type your Address
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={ Row } controlId="city">
              <Form.Label column sm={ 3 }>
                City:
              </Form.Label>

              <Col sm={ 9 }>
                <Form.Control
                  type="text"
                  name="city"
                  data-testid="input-city"
                  values={ values.city }
                  onChange={ handleChange }
                  isValid={ touched.city && !errors.city }
                  isInvalid={ touched.city && !!errors.city }
                />

                <Form.Control.Feedback type="invalid">
                  Type your City
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={ Row } controlId="state">
              <Form.Label column sm={ 3 }>
                State:
              </Form.Label>

              <Col sm={ 9 }>
                <Form.Control
                  type="text"
                  name="state"
                  data-testid="input-state"
                  values={ values.state }
                  onChange={ handleChange }
                  isValid={ touched.state && !errors.state }
                  isInvalid={ touched.state && !!errors.state }
                />

                <Form.Control.Feedback type="invalid">
                  Type your State
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={ Row } controlId="promotional-emails">
              <Form.Label column sm={ 12 }>
                Want to receive promotional emails?
              </Form.Label>

              <Form.Check 
                inline
                name="promotionalEmails"
                type="radio"
                id="radio-promotional-emails-yes"
                value="Y"
                label="Yes" 
                className={ Classes.checkout_promotional_emails }
                checked={ values.promotionalEmails === 'Y' }
                onChange={ handleChange }
              />

              <Form.Check 
                inline
                name="promotionalEmails"
                type="radio"
                id="radio-promotional-emails-no"
                value="N"
                label="No" 
                checked={ values.promotionalEmails === 'N' }
                onChange={ handleChange }
              />
            </Form.Group>

            <Form.Group as={ Row } controlId="finish-purchase">
              <Col className="text-center" sm={ 12 }>
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
        )}
      </Formik>

      <Modal
        show={ showModal }
        data-testid="susscessful-modal-checkout"
        onHide={ handleContinue }
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Successful purchase!
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          An email with the confirmation as send
        </Modal.Body>

        <Modal.Footer>
          <Button 
            variant="success" 
            onClick={ handleContinue }
          >
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

Checkout.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleShowProducts: PropTypes.func.isRequired,
  total: PropTypes.string.isRequired,
  products: PropTypes.object.isRequired,
  handleClearCart: PropTypes.func.isRequired
}

export default Checkout