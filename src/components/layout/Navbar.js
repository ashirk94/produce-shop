import React, { useContext } from 'react'
import { Nav, Navbar as BootNav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import ThemeContext from '../../contexts/ThemeContext'
import { useAuth } from '../../contexts/AuthContext'

export default function Navbar() {
	const { theme } = useContext(ThemeContext)
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
                {!currentUser && <Nav.Link to={'/signup'} as={NavLink}>Sign Up
				</Nav.Link>}
			</Nav>
		</BootNav>
	)
}
