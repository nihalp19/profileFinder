import React from 'react'
import Navbar from '../components/Navbar'
import ProfileList from '../components/ProfileList'
import { useSelector } from 'react-redux'
function Layout() {
    
    return (
        <div className='w-full h-screen'>
            <Navbar />
            <div className='w-full flex justify-center'>
                <ProfileList />
            </div>

        </div>
    )
}

export default Layout