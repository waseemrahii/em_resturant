import { useState, useEffect } from "react"
import VendorsList from "../../component/Vendors/VendorsList"
import TitleHead from "../../component/Header/TitleHead"

const SuspendedVendors = () => {
  const [vendorsData, setVendorsData] = useState([])
  const [loading, setLoading] = useState(true)

  // Mock data for suspended vendors
  const mockSuspendedVendors = [
    {
      id: 7,
      name: "Dim Sum Delight",
      email: "hello@dimsumdelight.com",
      phone: "+1 (555) 789-0123",
      date: "2023-09-10",
      image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=1080&q=80",
      documents: true,
      active: false,
      selected: false,
      status: "suspended",
      rating: 4.2,
      orders: 87,
      revenue: "$4,350",
      address: "404 Elm St, Los Angeles, CA",
      cuisine: "Chinese",
    }
  ]

  useEffect(() => {
    // Simulate API call to fetch suspended vendors
    setTimeout(() => {
      setVendorsData(mockSuspendedVendors)
      setLoading(false)
    }, 500)
  }, [])

  return (
    <div className="p-4">
      <TitleHead title="Suspended Vendors" desc="Manage suspended vendors" />
      <VendorsList vendorsData={vendorsData} loading={loading} />
    </div>
  )
}

export default SuspendedVendors
