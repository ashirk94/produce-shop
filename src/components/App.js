import React from 'react'
import { AuthProvider } from '../contexts/AuthContext'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './account/Dashboard'
import Login from './account/Login'
import Signup from './account/Signup'
import PrivateRoute from './account/PrivateRoute'
import ForgotPassword from './account/ForgotPassword'
import UpdateProfile from './account/UpdateProfile'
import Home from './pages/Home'
import Store from './store/Store'
import About from './pages/About'
import Layout from './layout/Layout'
import Checkout from './store/Checkout'
import PaymentSuccess from './store/PaymentSuccess'

function App() {
	return (
		<AuthProvider>
			<Layout>
				<Routes>
					<Route element={<PrivateRoute />}>
						<Route
							path='/produce-shop/update-profile'
							element={<UpdateProfile />}
						/>
						<Route path='/produce-shop/dashboard' element={<Dashboard />} />
						<Route path='/produce-shop/checkout' element={<Checkout />} />
					</Route>

					<Route path='/produce-shop/signup' element={<Signup />} />
					<Route path='/produce-shop/login' element={<Login />} />
					<Route
						path='/produce-shop/forgot-password'
						element={<ForgotPassword />}
					/>

					<Route path='/produce-shop/success' element={<PaymentSuccess />} />

					<Route path='/produce-shop' element={<Home />} />
					<Route path='/produce-shop/about' element={<About />} />
					<Route path='/produce-shop/store' element={<Store />} />
				</Routes>
			</Layout>
		</AuthProvider>
	)
}

export default App
