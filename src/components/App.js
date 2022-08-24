import React from 'react'
import { AuthProvider } from '../contexts/AuthContext'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Dashboard from './account/Dashboard'
import Login from './account/Login'
import Signup from './account/Signup'
import PrivateRoute from './account/PrivateRoute'
import ForgotPassword from './account/ForgotPassword'
import UpdateProfile from './account/UpdateProfile'
import Home from './Home'
import Store from './Store'
import About from './About'

function App() {
	return (
		<AuthProvider>
			<Layout>
				<Routes>
					<Route element={<PrivateRoute />}>
						<Route
							path='/update-profile'
							element={<UpdateProfile />}
						/>
						<Route path='/dashboard' element={<Dashboard />} />
					</Route>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/store' element={<Store />} />

					<Route path='/signup' element={<Signup />} />
					<Route path='/login' element={<Login />} />
					<Route
						path='/forgot-password'
						element={<ForgotPassword />}
					/>
				</Routes>
			</Layout>
		</AuthProvider>
	)
}

export default App
