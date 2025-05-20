// import { useState, useEffect } from "react"
// import VendorsList from "../../component/Vendors/VendorsList"
// import TitleHead from "../../component/Header/TitleHead"

// const PendingVendors = () => {
//   const [vendorsData, setVendorsData] = useState([])
//   const [loading, setLoading] = useState(true)

//   // Mock data for pending vendors
//   const mockPendingVendors = [
//     {
//       id: 4,
//       name: "Taco Time",
//       email: "hola@tacotime.com",
//       phone: "+1 (555) 456-7890",
//       date: "2023-08-05",
//       image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1080&q=80",
//       documents: false,
//       active: false,
//       selected: false,
//       status: "pending",
//       rating: 0,
//       orders: 0,
//       revenue: "$0",
//       address: "101 Maple Dr, Austin, TX",
//       cuisine: "Mexican",
//     },
//     {
//       id: 5,
//       name: "Curry Corner",
//       email: "info@currycorner.com",
//       phone: "+1 (555) 567-8901",
//       date: "2023-08-15",
//       image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=1080&q=80",
//       documents: true,
//       active: false,
//       selected: false,
//       status: "pending",
//       rating: 0,
//       orders: 0,
//       revenue: "$0",
//       address: "202 Cedar Ln, Seattle, WA",
//       cuisine: "Indian",
//     },
//     {
//       id: 8,
//       name: "Falafel Factory",
//       email: "info@falafelfactory.com",
//       phone: "+1 (555) 890-1234",
//       date: "2023-09-20",
//       image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=1080&q=80",
//       documents: false,
//       active: false,
//       selected: false,
//       status: "pending",
//       rating: 0,
//       orders: 0,
//       revenue: "$0",
//       address: "505 Walnut Ave, Philadelphia, PA",
//       cuisine: "Mediterranean",
//     },
//   ]

//   useEffect(() => {
//     // Simulate API call to fetch pending vendors
//     setTimeout(() => {
//       setVendorsData(mockPendingVendors)
//       setLoading(false)
//     }, 500)
//   }, [])

//   return (
//     <div className="p-4">
//       <TitleHead title="Pending Vendors" desc="Manage pending vendors" />
//       <VendorsList vendorsData={vendorsData} loading={loading} />
//     </div>
//   )
// }

// export default PendingVendors



"use client"

import { useState, useEffect } from "react"
import VendorsList from "../../component/Vendors/VendorsList"
import TitleHead from "../../component/Header/TitleHead"

const PendingVendors = () => {
  const [vendorsData, setVendorsData] = useState([])
  const [loading, setLoading] = useState(true)

  // Mock data for pending vendors with reliable images
  const mockPendingVendors = [
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
      id: 5,
      name: "Curry Corner",
      email: "info@currycorner.com",
      phone: "+1 (555) 567-8901",
      date: "2023-08-15",
      image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=500&h=500&q=80",
      documents: true,
      active: false,
      selected: false,
      status: "pending",
      rating: 0,
      orders: 0,
      revenue: "$0",
      address: "202 Cedar Ln, Seattle, WA",
      cuisine: "Indian",
    },
    {
      id: 8,
      name: "Falafel Factory",
      email: "info@falafelfactory.com",
      phone: "+1 (555) 890-1234",
      date: "2023-09-20",
      image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=500&h=500&q=80",
      documents: false,
      active: false,
      selected: false,
      status: "pending",
      rating: 0,
      orders: 0,
      revenue: "$0",
      address: "505 Walnut Ave, Philadelphia, PA",
      cuisine: "Mediterranean",
    },
  ]

  useEffect(() => {
    // Stable data loading approach
    const timer = setTimeout(() => {
      setVendorsData(mockPendingVendors)
      setLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="p-4">
      <TitleHead title="Pending Vendors" desc="Manage vendors awaiting approval" />
      <VendorsList vendorsData={vendorsData} loading={loading} />
    </div>
  )
}

export default PendingVendors
