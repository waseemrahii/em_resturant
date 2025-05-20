// import TitleHead from "../../component/Header/TitleHead"
// import VendorsList from "../../component/Vendors/VendorsList"
// import { AllvendorsData} from "../../Utils/data"

// const AllVendors = () => {
//   return (
//     <>
//     <TitleHead title="All Vendors" desc="vendors"/>
//     <div className="p-4">
//      <VendorsList allVendorsData={AllvendorsData} />
//     </div>
//     </>
    
//   )
// }

// export default AllVendors
"use client"

import { useState, useEffect } from "react"
import VendorsList from "../../component/Vendors/VendorsList"
import TitleHead from "../../component/Header/TitleHead"

const AllVendors = () => {
  const [vendorsData, setVendorsData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate stable API call for vendors
    const timer = setTimeout(() => {
      // Mock data for all vendors
      const mockVendors = [
        {
          id: 1,
          name: "Pizza Palace",
          email: "contact@pizzapalace.com",
          phone: "+1 (555) 123-4567",
          date: "2023-05-15",
          image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&h=500&q=80",
          documents: true,
          active: true,
          selected: false,
          status: "approved",
          rating: 4.8,
          orders: 256,
          revenue: "$12,450",
          address: "123 Main St, New York, NY",
          cuisine: "Italian",
        },
        {
          id: 2,
          name: "Burger Barn",
          email: "info@burgerbarn.com",
          phone: "+1 (555) 234-5678",
          date: "2023-06-22",
          image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&h=500&q=80",
          documents: true,
          active: true,
          selected: false,
          status: "approved",
          rating: 4.5,
          orders: 189,
          revenue: "$9,870",
          address: "456 Oak Ave, Chicago, IL",
          cuisine: "American",
        },
        {
          id: 4,
          name: "Taco Time",
          email: "hola@tacotime.com",
          phone: "+1 (555) 456-7890",
          date: "2023-08-05",
          image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=500&h=500&q=80",
          documents: false,
          active: false,
          selected: false,
          status: "pending",
          rating: 0,
          orders: 0,
          revenue: "$0",
          address: "101 Maple Dr, Austin, TX",
          cuisine: "Mexican",
        },
        {
          id: 6,
          name: "Pasta Paradise",
          email: "ciao@pastaparadise.com",
          phone: "+1 (555) 678-9012",
          date: "2023-09-01",
          image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=500&h=500&q=80",
          documents: true,
          active: false,
          selected: false,
          status: "rejected",
          rating: 0,
          orders: 0,
          revenue: "$0",
          address: "303 Birch Rd, Boston, MA",
          cuisine: "Italian",
        },
      ]

      setVendorsData(mockVendors)
      setLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="p-4">
      <TitleHead title="All Vendors" desc="Manage all vendors" />
      <VendorsList vendorsData={vendorsData} loading={loading} />
    </div>
  )
}

export default AllVendors
