import React, {useRef, useContext, useState } from 'react'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import ThemeContext from '../../contexts/ThemeContext'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

export default function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {theme} = useContext(ThemeContext)
    const {currentUser, changeEmail, changePassword} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    

    function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

    const promises = []
    setLoading(true)
    setError('')

    if (emailRef.current.value !== currentUser.email)
    {
        promises.push(changeEmail(emailRef.current.value))
    }
    if (passwordRef.current.value !== currentUser.password)
    {
        promises.push(changePassword(passwordRef.current.value))
    }

    Promise.all(promises).then(() => {
        navigate('/produce-shop/')      
    }).catch(() => {
        setError('Failed to update account')
    }).finally(() => {
        setLoading(false)      
    })


    }

  return (
    <div>
        <Card id={theme} className="signup-card">
            <Card.Body id={theme} className="signup-card">
                <h2 className="text-center mb-4">Update Profile</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required defaultValue={currentUser.email} />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} />
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} />
                        <label className="text-muted mt-2">Leave password fields blank to keep your old password.</label>
                    </Form.Group>
                    <Button disabled={loading} className="w-100 mt-2" type="submit">Update</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            <Link to='/produce-shop/dashboard'>Cancel</Link>
        </div>
    </div>
  )
}
