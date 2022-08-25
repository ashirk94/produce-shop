import React from 'react'
import { AuthProvider } from '../contexts/AuthContext'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './account/Dashboard'
import Login from './account/Login'
import Signup from './account/Signup'
import PrivateRoute from './account/PrivateRoute'
import ForgotPassword from './account/ForgotPassword'
import UpdateProfile from './account/UpdateProfile'
import Home from './Home'
import Store from './store/Store'
import About from './About'
import LayoutWrapper from './LayoutWrapper'
//import LayoutWrapperHome from './LayoutWrapperHome'

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
					</Route>
					<Route path='/store' element={<Store />} />

					<Route path='/signup' element={<Signup />} />
					<Route path='/login' element={<Login />} />
					<Route
						path='/forgot-password'
						element={<ForgotPassword />}
					/>
				</Route>
				<Route element={<LayoutWrapper />}>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
				</Route>
			</Routes>
		</AuthProvider>
	)
}

export default App
