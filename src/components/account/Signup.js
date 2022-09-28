import React, { useRef, useContext, useState, useEffect } from 'react'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import ThemeContext from '../../contexts/ThemeContext'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
	const emailRef = useRef()
	const passwordRef = useRef()
	const passwordConfirmRef = useRef()
	const { theme } = useContext(ThemeContext)
	const { currentUser, signup } = useAuth()
	const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

	const navigate = useNavigate()

	useEffect(() => {
		if (currentUser) {
			navigate('/produce-shop/')
		}
	}, [currentUser, navigate])

	async function handleSubmit(e) {
		e.preventDefault()
		setError('')

		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			setError('Passwords do not match')
		}

		try {
            setLoading(true)
			let signupStatus = await signup(
				emailRef.current.value,
				passwordRef.current.value
			)
			if (signupStatus) {
				navigate('/produce-shop/login')
			} else {
                setError(signupStatus)
            }
        } catch(e) {
            setError(e)
		} 
        setLoading(false)
	}

	return (
		<div>
			<Card className='signup-card' id={theme}>
				<Card.Body id={theme} className='signup-card'>
					<h2 className='text-center mb-4'>Sign Up</h2>
					{/* {currentUser && 'Current User: ' + currentUser.email} */}
					{error && <Alert variant='danger'>{error}</Alert>}
					<Form onSubmit={handleSubmit}>
						<Form.Group id='email'>
							<Form.Label>Email</Form.Label>
							<Form.Control
								type='email'
								ref={emailRef}
								required
							/>
						</Form.Group>
						<Form.Group id='password'>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type='password'
								ref={passwordRef}
								required
							/>
						</Form.Group>
						<Form.Group id='password-confirm'>
							<Form.Label>Password Confirmation</Form.Label>
							<Form.Control
								type='password'
								ref={passwordConfirmRef}
								required
							/>
						</Form.Group>
						<Button disabled={loading} className='w-100 mt-2' type='submit'>
							Sign Up
						</Button>
					</Form>
				</Card.Body>
			</Card>
			<div className='w-100 text-center mt-2'>
				Already have an account? <Link to='/produce-shop/login'>Log In</Link>
			</div>
		</div>
	)
}
