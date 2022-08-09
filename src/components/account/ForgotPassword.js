import React, {useRef, useContext, useState, useEffect} from 'react'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import ThemeContext from '../../contexts/ThemeContext'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

export default function ForgotPassword() {
    const emailRef = useRef()
    //const passwordRef = useRef()
    const {theme} = useContext(ThemeContext)
    const {currentUser, resetPassword} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        if(currentUser) {
            navigate('/')
        }
    }, [currentUser, navigate])

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further instructions')
        } catch {
            setError('Failed to sign in')
        }
        setLoading(false)

    }

  return (
    <div>
        <Card>
            <Card.Body id={theme} className="signup-card">
                <h2 className="text-center mb-4">Password Reset</h2>
                {message && <Alert variant="success">{message}</Alert>}
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Button disabled={loading} className="w-100 mt-2" type="submit">Reset Password</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            <Link to='/signup'>Log In</Link>
        </div>
    </div>
  )
}
