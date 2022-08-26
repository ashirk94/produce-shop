import React, { useContext } from 'react'
import { Card, Button } from 'react-bootstrap'
import ThemeContext from '../../contexts/ThemeContext'
import { formatCurrency } from '../../utilities/formatCurrency'
import { useShoppingCart } from '../../contexts/ShoppingCartContext'

export default function StoreItem(props) {
	const { theme } = useContext(ThemeContext)
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
	const quantity = getItemQuantity(props.id)

	return (
		<Card className='food-item mt-3' id={theme}>
			<Card.Img
				variant='top'
				src={props.imgUrl}
				alt='item'
				height='200px'
                id={theme}
			/>
			<Card.Body className='d-flex flex-column' id={theme}>
				<Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
					<span className='fs-2'>{props.name}</span>
					<span className='ms-2 text-muted'>
						{formatCurrency(props.price)}
					</span>
				</Card.Title>
				<div>
					{quantity === 0 ? (
						<Button className='w-100' onClick={() => increaseCartQuantity(props.id)}>+ Add To Cart</Button>
					) : (
						<div className='d-flex align-items-center flex-column btn-gap'>
							<div className='d-flex align-items-center justify-content-center btn-gap'>
                                <Button className='minus' size='sm' onClick={() => decreaseCartQuantity(props.id)}>-</Button>
                                <span className='fs-3'>{quantity}</span>
                                in Cart
                                <Button size='sm' onClick={() => increaseCartQuantity(props.id)}>+</Button>
                            </div>
                            <Button variant='danger' size='sm' onClick={() => removeFromCart(props.id)}>Remove</Button>
						</div>                      
					)}
				</div>
			</Card.Body>
		</Card>
	)
}
