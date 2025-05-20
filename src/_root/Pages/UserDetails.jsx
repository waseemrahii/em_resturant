import React from 'react'
import ProfileHeader from '../../component/UserCustomer/ProfileHeader'
import { Outlet } from 'react-router-dom'
import TitleHead from '../../component/Header/TitleHead'

const UserDetails = () => {
  return (
    <>
    <TitleHead title="User" desc=" Users"/>
    <div className='w-[90%] mx-auto'>
      <ProfileHeader/>
      <div>
        <Outlet/>
      </div>
    </div>
    </>
    
  )
}

export default UserDetails
