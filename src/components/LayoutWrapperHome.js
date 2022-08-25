import React from 'react'
import { Outlet } from 'react-router-dom'
import HomeLayout from './HomeLayout'

export default function LayoutWrapperHome({ component: Component, ...rest }) {
	return (
		<>
			<HomeLayout>
				<Outlet />
			</HomeLayout>
		</>
	)
}
