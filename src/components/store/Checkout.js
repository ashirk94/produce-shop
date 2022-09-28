import { Stack, Form, Button } from 'react-bootstrap'
import React, { useState, useContext } from 'react'
import { useShoppingCart } from '../../contexts/ShoppingCartContext'
import CartItem from './CartItem'
import { formatCurrency } from '../../utilities/formatCurrency'
import storeItems from '../../data/items.js'
import { useNavigate } from 'react-router-dom'
import ThemeContext from '../../contexts/ThemeContext'

export default function Checkout() {
	const { cartItems, removeAllFromCart } = useShoppingCart()
    const { theme } = useContext(ThemeContext)

	const navigate = useNavigate()

	const [errorMessage, setErrorMessage] = useState('')
	const [validated, setValidated] = useState(false)

	const green = {
		color: 'green'
	}
	const red = {
		color: 'red'
	}
	const [color, setColor] = useState(red)

	function validateCreditCard(str) {
		// let regexp = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/

		// if (regexp.test(str)) {
		// 	setErrorMessage('Valid!')
		// 	setValidated(true)
		// 	setColor(green)
		// } else {
		// 	setErrorMessage('Invalid Card')
		// 	setValidated(false)
		// 	setColor(red)
		// }

		if (str === '3388') {
			setErrorMessage('Valid!')
			setValidated(true)
			setColor(green)
		} else {
			setErrorMessage('Invalid Card')
			setValidated(false)
			setColor(red)
		}
	}

	const handleSubmit = (event) => {
		if (validated === false) {
			event.preventDefault()
			event.stopPropagation()
		}

		if (validated) {
            event.preventDefault()
            removeAllFromCart()
			navigate('/success')
		}
	}

	return (
		<>
        <div className='container text-center mt-5'>
				<h2>Payment Method</h2>
				<p>
					This is an example payment, use the fake card number below.
					<br />
				</p>
				<h3 className='mb-5'>3388</h3>
				<Form>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Label>Card Number</Form.Label>
						<input
							type='text'
							onChange={(e) => validateCreditCard(e.target.value)}
							placeholder='0000-0000-0000-0000'
                            className='form-control card-input'
                            id={theme}
						/>
						{<span style={color}>{errorMessage}</span>}
					</Form.Group>
					<Button
						variant='primary'
						type='submit'
						onClick={handleSubmit}>
						Submit
					</Button>
				</Form>

        <div className='checkout'>
			<Stack gap={3} className='mt-3'>
				{cartItems != null &&
					cartItems.length > 0 &&
					cartItems.map((item) => (
						<CartItem key={item.id} {...item} />
					))}
				<div className='ms-auto fw-bold fs-S'>
					Total{' '}
					{cartItems != null &&
						cartItems.length > 0 &&
						formatCurrency(
							cartItems.reduce((total, cartItem) => {
								const item = storeItems.find(
									(i) => i.id === cartItem.id
								)
								return (
									total + item.price * cartItem.quantity || 0
								)
							}, 0)
						)}
				</div>
			</Stack>
            </div>
            </div>
		</>
	)
}
