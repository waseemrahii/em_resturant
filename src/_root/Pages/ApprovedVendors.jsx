// import { useState, useEffect } from "react"
// import VendorsList from "../../component/Vendors/VendorsList"
// import TitleHead from "../../component/Header/TitleHead"

// const ApprovedVendors = () => {
//   const [vendorsData, setVendorsData] = useState([])
//   const [loading, setLoading] = useState(true)

//   // Mock data for approved vendors
//   const mockApprovedVendors = [
//     {
//       id: 1,
//       name: "Pizza Palace",
//       email: "contact@pizzapalace.com",
//       phone: "+1 (555) 123-4567",
//       date: "2023-05-15",
//       image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1470&q=80",
//       documents: true,
//       active: true,
//       selected: false,
//       status: "approved",
//       rating: 4.8,
//       orders: 256,
//       revenue: "$12,450",
//       address: "123 Main St, New York, NY",
//       cuisine: "Italian",
//     },
//     {
//       id: 2,
//       name: "Burger Barn",
//       email: "info@burgerbarn.com",
//       phone: "+1 (555) 234-5678",
//       date: "2023-06-22",
//       image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1599&q=80",
//       documents: true,
//       active: true,
//       selected: false,
//       status: "approved",
//       rating: 4.5,
//       orders: 189,
//       revenue: "$9,870",
//       address: "456 Oak Ave, Chicago, IL",
//       cuisine: "American",
//     },
//     {
//       id: 3,
//       name: "Sushi Supreme",
//       email: "hello@sushisupreme.com",
//       phone: "+1 (555) 345-6789",
//       date: "2023-07-10",
//       image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1470&q=80",
//       documents: true,
//       active: true,
//       selected: false,
//       status: "approved",
//       rating: 4.9,
//       orders: 312,
//       revenue: "$15,600",
//       address: "789 Pine St, San Francisco, CA",
//       cuisine: "Japanese",
//     },
//   ]

//   useEffect(() => {
//     // Simulate API call to fetch approved vendors
//     setTimeout(() => {
//       setVendorsData(mockApprovedVendors)
//       setLoading(false)
//     }, 500)
//   }, [])

//   return (
//     <div className="p-4">
//       <TitleHead title="Approved Vendors" desc="Manage approved vendors" />
//       <VendorsList vendorsData={vendorsData} loading={loading} />
//     </div>
//   )
// }

// export default ApprovedVendors



"use client"

import { useState, useEffect } from "react"
import VendorsList from "../../component/Vendors/VendorsList"
import TitleHead from "../../component/Header/TitleHead"

const ApprovedVendors = () => {
  const [vendorsData, setVendorsData] = useState([])
  const [loading, setLoading] = useState(true)

  // Mock data for approved vendors with reliable images
  const mockApprovedVendors = [
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
      id: 3,
      name: "Sushi Supreme",
      email: "hello@sushisupreme.com",
      phone: "+1 (555) 345-6789",
      date: "2023-07-10",
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=500&h=500&q=80",
      documents: true,
      active: true,
      selected: false,
      status: "approved",
      rating: 4.9,
      orders: 312,
      revenue: "$15,600",
      address: "789 Pine St, San Francisco, CA",
      cuisine: "Japanese",
    },
  ]

  useEffect(() => {
    // Stable data loading approach
    const timer = setTimeout(() => {
      setVendorsData(mockApprovedVendors)
      setLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="p-4">
      <TitleHead title="Approved Vendors" desc="Manage approved vendors" />
      <VendorsList vendorsData={vendorsData} loading={loading} />
    </div>
  )
}

export default ApprovedVendors
