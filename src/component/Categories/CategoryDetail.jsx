// import React from 'react'
// import ProfileHeader from '../../component/UserCustomer/ProfileHeader'
// import { Outlet } from 'react-router-dom'
// import TitleHead from '../../component/Header/TitleHead'
// import CategoryHead from './CategoryHead'

// const CategoryDetail = () => {
//   return (
//     <>
//     <TitleHead title="Categories" desc=" Category"/>
//     <div className='w-[90%] mx-auto'>
//       <CategoryHead/>
//       <div>
//         <Outlet/>
//       </div>
//     </div>
//     </>
    
//   )
// }

// export default CategoryDetail


import { Outlet } from "react-router-dom"
import TitleHead from "../../component/Header/TitleHead"
import CategoryHead from "./CategoryHead"

const CategoryDetail = () => {
  return (
    <>
      <TitleHead title="Categories" desc="Manage Food Categories" />
      <div className="w-[95%] mx-auto">
        <CategoryHead />
        <div className="bg-gray-50 p-4 rounded-lg">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default CategoryDetail
