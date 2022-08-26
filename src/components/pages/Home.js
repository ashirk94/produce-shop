import React, { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'

export default function Home() {
	const { theme } = useContext(ThemeContext)

	return (
		<div className='homepage d-flex justify-content-center align-items-center mt-3' id={theme}>
            <h1>Welcome to Alan's Produce Shop!</h1>			
		</div>
	)
}
