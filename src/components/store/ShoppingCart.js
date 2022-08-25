import { Offcanvas, Stack } from 'react-bootstrap'
import React, { useContext } from 'react'
import { useShoppingCart } from '../../contexts/ShoppingCartContext'
import CartItem from './CartItem'
import { formatCurrency } from '../../utilities/formatCurrency'
import storeItems from '../../data/items.json'
import ThemeContext from '../../contexts/ThemeContext'

export default function ShoppingCart({ isOpen }) {
	const { closeCart, cartItems } = useShoppingCart()
	const { theme } = useContext(ThemeContext)
	return (
		<Offcanvas show={isOpen} placement='end' onHide={closeCart} id={theme}>
			<Offcanvas.Header closeButton>
				<Offcanvas.Title>Cart</Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body>
				<Stack gap={3}>
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
										total + item.price ||
										0 * cartItem.quantity
									)
								}, 0)
							)}
					</div>
				</Stack>
			</Offcanvas.Body>
		</Offcanvas>
	)
}
