import React from 'react'
import { Nav, Button, Navbar as BootNav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {NavLink} from 'react-router-dom'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <BootNav className='bg-white shadow-sm mb-3'>
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
