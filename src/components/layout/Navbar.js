import React, { useContext } from 'react'
import { Nav, Button, Navbar as BootNav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink, useLocation } from 'react-router-dom'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import ThemeContext from '../../contexts/ThemeContext'
import { useShoppingCart } from '../../contexts/ShoppingCartContext'
import { useAuth } from '../../contexts/AuthContext'

export default function NavbarStore() {
	const { theme } = useContext(ThemeContext)
	const { openCart, cartQuantity } = useShoppingCart()
    const { currentUser } = useAuth()
    const location = useLocation()
    const cart = (cartQuantity > 0) && ((location.pathname === '/produce-shop/store') || (location.pathname === '/produce-shop') || (location.pathname === '/produce-shop/about'))

	return (
		<BootNav className='shadow-sm mb-3' id={theme}>
			<Nav className='me-auto'>
				<Nav.Link to={'/produce-shop'} as={NavLink}>
					Home
				</Nav.Link>
				<Nav.Link to={'/produce-shop/store'} as={NavLink}>
					Store
				</Nav.Link>
				<Nav.Link to={'/produce-shop/about'} as={NavLink}>
					About
				</Nav.Link>
                {currentUser && <Nav.Link to={'/produce-shop/dashboard'} as={NavLink}>
					MyAccount
				</Nav.Link>}
                {!currentUser && <Nav.Link to={'/produce-shop/login'} as={NavLink}>Login
				</Nav.Link>}
                {!currentUser && <Nav.Link to={'/produce-shop/signup'} as={NavLink}>Sign Up
				</Nav.Link>}
			</Nav>
			{cart && (
				<Button onClick={openCart}>
					<FontAwesomeIcon icon={faCartShopping} />
					<div className='rounded-circle bg-danger d-flex justify-content-center align-items-center cart-quantity'>
						{cartQuantity}
					</div>
				</Button>
			)}
		</BootNav>
	)
}
