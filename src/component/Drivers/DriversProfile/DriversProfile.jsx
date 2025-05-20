import { Outlet } from 'react-router-dom'
import TitleHead from '../../Header/TitleHead'
import ProfileHeader from './ProfileHeader'
import { driverNavLinks } from '../../../Utils/data'

const DriversProfile = () => {
  return (
    <>
    <TitleHead title="Drivers" desc=" Driver"/>
    <div className='w-[90%] mx-auto'>
      <ProfileHeader profileNavLinks={driverNavLinks}/>
      <div>
        <Outlet/>
      </div>
    </div>
    </>
    
  )
}

export default DriversProfile
