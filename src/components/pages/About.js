import React from 'react'

export default function About() {
	return (
		<div className='about'>
			<h2 className='about-title'>What's the purpose of this site?</h2>
			<p className='about-text'>
				This is an example E-Commerce project built in React with a modern UI including a dark mode toggle. It features authentication through Firebase Auth API. This site enables a user to add produce items to a shopping cart, remove them, and checkout and "pay" with a fake credit card number. Checkout is only available to users who are currently logged in, to simulate a real e-commerce store.
			</p>
		</div>
	)
}
