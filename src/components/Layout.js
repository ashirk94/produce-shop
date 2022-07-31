import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import ThemeContext from '../contexts/ThemeContext'
import Switch from 'react-switch'

export default function Layout({ children }) {
	const [theme, setTheme] = useState('light')

	const toggleTheme = () => {
		setTheme((cur) => (cur === 'light' ? 'dark' : 'light'))
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<div className='page' id={theme}>
				<Switch
					className='toggler'
					onColor='#000000'
					checked={theme === 'dark' ? true : false}
					onChange={toggleTheme}
				/>
				<Container>
					{children}
					<div className='d-flex align-items-center justify-content-center container'>
					</div>
				</Container>
			</div>
		</ThemeContext.Provider>
	)
}
