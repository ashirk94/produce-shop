import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
	return (
		<div>
			<h1>Welcome to the Produce Shop</h1>
			<div className='w-100 text-center'>
                <Link className='btn btn-primary' to='/dashboard'>Dashboard</Link>
			</div>
		</div>
	)
}
