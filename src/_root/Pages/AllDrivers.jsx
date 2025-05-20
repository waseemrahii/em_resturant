// import DriversList from "../../component/Drivers/DriversList"
// import { AlldriversData } from "../../Utils/data"

// const AllDrivers = () => {
//   return (
//     <div>
//     <DriversList
//         driversData={AlldriversData}
//         initialAlertMessage="Alert"
//         initialShow="10"
//       />
//     </div>
//   )
// }

// export default AllDrivers


"use client"

import { useState, useEffect } from "react"
import DriversList from "../../component/Drivers/DriversList"
import { AlldriversData } from "../../Utils/data"
import TitleHead from "../../component/Header/TitleHead"

const AllDrivers = () => {
  const [driversData, setDriversData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Use consistent loading approach
    const timer = setTimeout(() => {
      // Ensure we have data
      if (AlldriversData && AlldriversData.length > 0) {
        setDriversData(AlldriversData)
      } else {
        // Fallback data if needed
        setDriversData([
          {
            id: 1,
            name: "John Smith",
            email: "john.smith@example.com",
            phone: "+1 (555) 123-4567",
            date: "2023-05-15",
            image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=500&h=500&q=80",
            documents: true,
            online: true,
            active: true,
            status: "approved",
            rating: 4.8,
            orders: 256,
            revenue: "$12,450",
            address: "123 Main St, New York, NY",
            vehicle: "Motorcycle",
            licenseNumber: "DL-12345678",
          },
          // Additional driver entries if needed
        ])
      }
      setLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="p-4">
      <TitleHead title="All Drivers" desc="Manage all drivers" />
      <DriversList driversData={driversData} loading={loading} />
    </div>
  )
}

export default AllDrivers
