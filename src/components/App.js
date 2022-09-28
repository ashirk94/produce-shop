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
                            exact
						/>
						<Route path='/produce-shop/dashboard' exact element={<Dashboard />} />
						<Route path='/produce-shop/checkout' exact element={<Checkout />} />
					</Route>

					<Route path='/produce-shop/signup' exact element={<Signup />} />
					<Route path='/produce-shop/login' exact element={<Login />} />
					<Route
						path='/produce-shop/forgot-password'
						element={<ForgotPassword />}
					/>

					<Route path='/produce-shop/success' exact element={<PaymentSuccess />} />

					<Route path='/produce-shop' exact element={<Home />} />
					<Route path='/produce-shop/about' exact element={<About />} />
					<Route path='/produce-shop/store' exact element={<Store />} />
				</Routes>
			</Layout>
		</AuthProvider>
	)
}

export default App
