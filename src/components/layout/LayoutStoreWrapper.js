import React from 'react'
import {Outlet} from 'react-router-dom'
import LayoutStore from './LayoutStore'

export default function LayoutWrapper() {
  return (
    <LayoutStore>
        <Outlet/>
    </LayoutStore>
  )
}
