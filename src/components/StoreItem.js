import React, { useContext } from 'react'
import { Card, Button } from 'react-bootstrap'
import ThemeContext from '../contexts/ThemeContext'
import { formatCurrency } from '../utilities/formatCurrency'

export default function StoreItem(props) {
	const { theme } = useContext(ThemeContext)
	const quantity = 0

	return (
		<Card className='h-100'>
			<Card.Img
				variant='top'
				src={props.imgUrl}
				alt='item'
				height='200px'
			/>
			<Card.Body className='d-flex flex-column' id={theme}>
				<Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
					<span className='fs-2'>{props.name}</span>
					<span className='ms-2 text-muted'>
						{formatCurrency(props.price)}
					</span>
				</Card.Title>
				<div className='mt-auto'>
					{quantity === 0 ? (
						<Button className='w-100'>+ Add To Cart</Button>
					) : (
						<div className='d-flex align-items-center flex-column btn-gap'>
							<div className='d-flex align-items-center justify-content-center btn-gap'>
                                <Button>-</Button>
                                <span className='fs-3'>{quantity}</span>
                                in Cart
                            </div>
                            <Button>+</Button>
						</div>
					)}
				</div>
			</Card.Body>
		</Card>
	)
}
