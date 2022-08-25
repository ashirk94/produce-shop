import React from 'react'
import { Outlet } from 'react-router-dom'
import Layout from './Layout'

export default function LayoutWrapper({ component: Component, ...rest }) {
	return (
		<>
			<Layout>
				<Outlet />
			</Layout>
		</>
	)
}
