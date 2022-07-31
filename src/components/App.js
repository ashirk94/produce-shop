import Layout from './Layout'

import React from 'react'

import { AuthProvider } from '../contexts/AuthContext'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import Signup from './Signup'

function App() {
	return (
		<AuthProvider>
			<Layout>
				<Routes>
					<Route exact path='/' element={<Dashboard />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/login' element={<Login />} />
				</Routes>
			</Layout>
		</AuthProvider>
	)
}

export default App
