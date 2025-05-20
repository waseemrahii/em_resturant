import { useState, useEffect } from "react"
import DriversList from "../../component/Drivers/DriversList"
import { AlldriversData } from "../../Utils/data"
import TitleHead from "../../component/Header/TitleHead"

const ApprovedDrivers = () => {
  const [driversData, setDriversData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call to fetch approved drivers
    setTimeout(() => {
      const approvedDrivers = AlldriversData.filter(driver => driver.status === "approved")
      setDriversData(approvedDrivers)
      setLoading(false)
    }, 500)
  }, [])

  return (
    <div className="p-4">
      <TitleHead title="Approved Drivers" desc="Manage approved drivers" />
      <DriversList driversData={driversData} loading={loading} />
    </div>
  )
}

export default ApprovedDrivers
