import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

export default function PrivateRoute({ component: Component, ...rest }) {
	const { currentUser } = useAuth()
	const navigate = useNavigate()

	useEffect(() => {
		if (!currentUser) {
			navigate('/produce-shop/login', { replace: true })
		}
	}, [navigate, currentUser])

	return (
		<>
			<Outlet />
		</>
	)
}
