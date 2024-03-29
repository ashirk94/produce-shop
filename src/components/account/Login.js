import React, { useRef, useContext, useState, useEffect } from 'react'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import ThemeContext from '../../contexts/ThemeContext'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
	const emailRef = useRef()
	const passwordRef = useRef()
	const { theme } = useContext(ThemeContext)
	const { currentUser, login } = useAuth()
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

		try {
            setLoading(true)
			let loginStatus = await login(
				emailRef.current.value,
				passwordRef.current.value
			)
			if (loginStatus) {
				navigate('/produce-shop')
			} else {
                setError(loginStatus)
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
					<h2 className='text-center mb-4'>Log In</h2>
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
                    <Button disabled={loading} className="w-100 mt-2" type="submit">Log In</Button>
					</Form>
					<div className='w-100 text-center mt-3'>
						<Link to='/forgot-password'>Forgot Password?</Link>
					</div>
				</Card.Body>
			</Card>
			<div className='w-100 text-center mt-2'>
				Need an account? <Link to='/produce-shop/signup'>Sign Up</Link>
			</div>
		</div>
	)
}
