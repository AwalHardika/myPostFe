import React from 'react'
import Navigation from './Navigation'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <main className='w-screen h-auto'>
        <div className='fixed w-full z-50 bottom-0'>
            {/* navigasi */}
            <Navigation/>
        </div>
        
        <div>
            {/* outlet */}
            <Outlet/>
        </div>
    </main>
  )
}

export default Layout