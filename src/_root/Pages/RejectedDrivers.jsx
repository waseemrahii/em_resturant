import { useState, useEffect } from "react"
import DriversList from "../../component/Drivers/DriversList"
import { AlldriversData } from "../../Utils/data"
import TitleHead from "../../component/Header/TitleHead"

const RejectedDrivers = () => {
  const [driversData, setDriversData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call to fetch rejected drivers
    setTimeout(() => {
      const rejectedDrivers = AlldriversData.filter(driver => driver.status === "rejected")
      setDriversData(rejectedDrivers)
      setLoading(false)
    }, 500)
  }, [])

  return (
    <div className="p-4">
      <TitleHead title="Rejected Drivers" desc="Manage rejected drivers" />
      <DriversList driversData={driversData} loading={loading} />
    </div>
  )
}

export default RejectedDrivers
