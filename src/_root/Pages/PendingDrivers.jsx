import { useState, useEffect } from "react"
import DriversList from "../../component/Drivers/DriversList"
import { AlldriversData } from "../../Utils/data"
import TitleHead from "../../component/Header/TitleHead"

const PendingDrivers = () => {
  const [driversData, setDriversData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call to fetch pending drivers
    setTimeout(() => {
      const pendingDrivers = AlldriversData.filter(driver => driver.status === "pending")
      setDriversData(pendingDrivers)
      setLoading(false)
    }, 500)
  }, [])

  return (
    <div className="p-4">
      <TitleHead title="Pending Drivers" desc="Manage pending drivers" />
      <DriversList driversData={driversData} loading={loading} />
    </div>
  )
}

export default PendingDrivers
