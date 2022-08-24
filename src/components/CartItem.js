import React from 'react'
import { useShoppingCart } from '../contexts/ShoppingCartContext'
import storeItems from '../data/items.json'
import { Stack, Button } from 'react-bootstrap'
import { formatCurrency } from '../utilities/formatCurrency'

export default function CartItem(props) {
	const { removeFromCart } = useShoppingCart()
	const item = storeItems.find((i) => i.id === props.id)
	if (item == null) return null

	return (
		<Stack direction='horizontal' gap={2}>
			<img className='cart-img' src={item.imgUrl} alt='foodItem' />
			<div className='me-auto'>
				<div>
					{item.name}{' '}
					{props.quantity > 1 && (
						<span className='text-muted'>x{props.quantity}</span>
					)}
				</div>
				<div className='text-muted'>{formatCurrency(item.price)}</div>
			</div>
			<div> {formatCurrency(item.price * props.quantity)}</div>
			<Button
				variant='outline-danger'
				size='sm'
				onClick={() => removeFromCart(item.id)}>
				&times;
			</Button>
		</Stack>
	)
}
