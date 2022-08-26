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
import LayoutWrapper from './layout/LayoutWrapper'
import LayoutStoreWrapper from './layout/LayoutStoreWrapper'
import Checkout from './store/Checkout'
import PaymentSuccess from './store/PaymentSuccess'

function App() {
	return (
		<AuthProvider>
			<Routes>
				<Route element={<LayoutWrapper />}>
					<Route element={<PrivateRoute />}>
						<Route
							path='/update-profile'
							element={<UpdateProfile />}
						/>
						<Route path='/dashboard' element={<Dashboard />} />
						<Route path='/checkout' element={<Checkout />} />
					</Route>

					<Route path='/signup' element={<Signup />} />
					<Route path='/login' element={<Login />} />
					<Route
						path='/forgot-password'
						element={<ForgotPassword />}
					/>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/success' element={<PaymentSuccess />} />
				</Route>

				<Route element={<LayoutStoreWrapper />}>
					<Route path='/store' element={<Store />} />
				</Route>
			</Routes>
		</AuthProvider>
	)
}

export default App
