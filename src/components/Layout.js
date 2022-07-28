import React, { useContext } from 'react'
import Signup from './Signup'
import { Container } from 'react-bootstrap'
import ThemeContext from '../contexts/ThemeContext'

export default function Layout({children}) {

	const { theme } = useContext(ThemeContext)
    
	return (
		<div className='page' id={theme}>
			<Container>
            {children}
                <div className='d-flex align-items-center justify-content-center container'>
                <Signup className='signup'/>
                </div>				
			</Container>
		</div>
	)
}
