import React from 'react'
import BasicInfo from '../../UserCustomer/BasicInfo'
import { user } from '../../../Utils/data'
import CarDetails from '../AddDriver/CarDetails'
import BankInfo from './BankInfo'

const DriverInfo = () => {
  return (
    <div>
      <BasicInfo user={user}/>
      <CarDetails/>
      <BankInfo/>
    </div>
  )
}

export default DriverInfo
