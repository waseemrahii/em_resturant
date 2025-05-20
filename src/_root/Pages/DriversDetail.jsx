import React from 'react'
import TitleHead from '../../component/Header/TitleHead'
import ProfileHeader from '../../component/UserCustomer/ProfileHeader'
import { Outlet } from 'react-router-dom'

const DriversDetail = () => {
  return (
    <div>
    <TitleHead title="User" desc="> Users"/>
    <div className='w-[80%] mx-auto'>
      <ProfileHeader/>
      <div>
        <Outlet/>
      </div>
    </div>
    </div>
  )
}

export default DriversDetail
