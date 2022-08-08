import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <h1>Home</h1>
        <div className="w-100 text-center mt-2">
            <Link to='/dashboard'>Dashboard</Link>
        </div>
    </div>
  )
}
