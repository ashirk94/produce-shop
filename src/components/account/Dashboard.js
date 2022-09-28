import React, { useState, useContext } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import ThemeContext from '../../contexts/ThemeContext'
import { useShoppingCart } from '../../contexts/ShoppingCartContext'

export default function Dashboard() {
    const [error, setError] = useState('')
    const { currentUser, logout } = useAuth()
    const navigate = useNavigate()
    const {theme} = useContext(ThemeContext)
    const { removeAllFromCart } = useShoppingCart()

    async function handleLogout() {
        setError('')

        try {
            await logout()
            removeAllFromCart()
            window.localStorage.clear()
            navigate('/produce-shop')
        } 
        catch (e) {
            console.error(e)
            setError(e)
        }
    }
  return (
    <div>
        <Card id={theme} className="signup-card">
            <Card.Body id={theme} className="signup-card">
            <h2 className="text-center mb-4">Account Info</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email: </strong> {currentUser && currentUser.email}
            <Link to='/update-profile' className='btn btn-primary w-100 mt-3'>Update Email/Password</Link>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            <Button variant="link" onClick={handleLogout}>Log Out</Button>
        </div>
    </div>
  )
}
