import Layout from './Layout'
import ThemeContext from '../contexts/ThemeContext'
import React, { useState } from 'react'
import Switch from 'react-switch'
import { AuthProvider } from '../contexts/AuthContext'

function App() {
	const [theme, setTheme] = useState('dark')

	const toggleTheme = () => {
		setTheme((cur) => (cur === 'light' ? 'dark' : 'light'))
	}

	return (
		<AuthProvider>
			<ThemeContext.Provider value={{ theme, toggleTheme }}>
				<Layout>
					<Switch
						className='toggler'
						onColor='#000000'
						checked={theme === 'dark' ? true : false}
						onChange={toggleTheme}
					/>
				</Layout>
			</ThemeContext.Provider>
		</AuthProvider>
	)
}

export default App
