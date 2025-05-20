import { useState, useEffect } from "react"
import VendorsList from "../../component/Vendors/VendorsList"
import TitleHead from "../../component/Header/TitleHead"

const RejectedVendors = () => {
  const [vendorsData, setVendorsData] = useState([])
  const [loading, setLoading] = useState(true)

  // Mock data for rejected vendors
  const mockRejectedVendors = [
    {
      id: 6,
      name: "Pasta Paradise",
      email: "ciao@pastaparadise.com",
      phone: "+1 (555) 678-9012",
      date: "2023-09-01",
      image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1080&q=80",
      documents: true,
      active: false,
      selected: false,
      status: "rejected",
      rating: 0,
      orders: 0,
      revenue: "$0",
      address: "303 Birch Rd, Boston, MA",
      cuisine: "Italian",
    }
  ]

  useEffect(() => {
    // Simulate API call to fetch rejected vendors
    setTimeout(() => {
      setVendorsData(mockRejectedVendors)
      setLoading(false)
    }, 500)
  }, [])

  return (
    <div className="p-4">
      <TitleHead title="Rejected Vendors" desc="Manage rejected vendors" />
      <VendorsList vendorsData={vendorsData} loading={loading} />
    </div>
  )
}

export default RejectedVendors
