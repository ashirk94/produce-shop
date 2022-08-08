import Layout from './Layout'

import React from 'react'

import { AuthProvider } from '../contexts/AuthContext'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import Signup from './Signup'
import PrivateRoute from './PrivateRoute'
import ForgotPassword from './ForgotPassword'
import UpdateProfile from './UpdateProfile'
import Home from './Home'

function App() {
	return (
		<AuthProvider>
			<Layout>
				<Routes>
					<Route element={<PrivateRoute />}>
						<Route path='/' element={<Home />} />
					</Route>
					<Route path='/signup' element={<Signup />} />
					<Route path='/login' element={<Login />} />
                    <Route path='/forgot-password' element={<ForgotPassword />} />
                    <Route path='/update-profile' element={<UpdateProfile />} />
                    <Route path='/dashboard' element={<Dashboard />} />
				</Routes>
			</Layout>
		</AuthProvider>
	)
}

export default App
