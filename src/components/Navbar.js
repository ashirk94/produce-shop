import React, {useContext} from 'react'
import { Nav, Button, Navbar as BootNav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {NavLink} from 'react-router-dom'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import ThemeContext from '../contexts/ThemeContext'

export default function Navbar() {
    const {theme} = useContext(ThemeContext)
  return (
    <BootNav className='shadow-sm mb-3' id={theme}>
            <Nav className='me-auto'>
                <Nav.Link to={'/'} as={NavLink}>Home</Nav.Link>
                <Nav.Link to={'/store'} as={NavLink}>Store</Nav.Link>
                <Nav.Link to={'/about'} as={NavLink}>About</Nav.Link>
            </Nav>
            <Button>
            <FontAwesomeIcon icon={faCartShopping} />
            </Button>
    </BootNav>
  )
}
