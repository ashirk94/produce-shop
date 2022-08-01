import Layout from './Layout'

import React from 'react'

import { AuthProvider } from '../contexts/AuthContext'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import Signup from './Signup'
import PrivateRoute from './PrivateRoute'

function App() {
	return (
		<AuthProvider>
			<Layout>
				<Routes>
					<Route element={<PrivateRoute />}>
						<Route path='/' element={<Dashboard />} />
					</Route>
					<Route path='/signup' element={<Signup />} />
					<Route path='/login' element={<Login />} />
				</Routes>
			</Layout>
		</AuthProvider>
	)
}

export default App
