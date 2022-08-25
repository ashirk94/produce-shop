import React, { useContext } from 'react'
import { Nav, Button, Navbar as BootNav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import ThemeContext from '../../contexts/ThemeContext'
import { useShoppingCart } from '../../contexts/ShoppingCartContext'
import { useAuth } from '../../contexts/AuthContext'

export default function Navbar() {
	const { theme } = useContext(ThemeContext)
	const { openCart, cartQuantity } = useShoppingCart()
    const { currentUser } = useAuth()
	return (
		<BootNav className='shadow-sm mb-3' id={theme}>
			<Nav className='me-auto'>
				<Nav.Link to={'/'} as={NavLink}>
					Home
				</Nav.Link>
				<Nav.Link to={'/store'} as={NavLink}>
					Store
				</Nav.Link>
				<Nav.Link to={'/about'} as={NavLink}>
					About
				</Nav.Link>
                {currentUser && <Nav.Link to={'/dashboard'} as={NavLink}>
					{currentUser.email}
				</Nav.Link>}
                {!currentUser && <Nav.Link to={'/login'} as={NavLink}>Login
				</Nav.Link>}
			</Nav>
			{cartQuantity > 0 && (
				<Button onClick={openCart}>
					<FontAwesomeIcon icon={faCartShopping} />
					<div className='rounded-circle bg-danger d-flex justify-content-center alight-items-center cart-quantity'>
						{cartQuantity}
					</div>
				</Button>
			)}
		</BootNav>
	)
}
