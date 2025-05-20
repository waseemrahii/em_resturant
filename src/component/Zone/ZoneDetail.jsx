// // "use client"

// // import { useState, useEffect } from "react"
// // import { useParams, Link, useNavigate } from "react-router-dom"
// // import { FaMapMarkerAlt, FaStore, FaMotorcycle, FaUtensils, FaArrowLeft, FaEdit, FaTrashAlt } from "react-icons/fa"
// // import TitleHead from "../Header/TitleHead"

// // const ZoneDetail = () => {
// //   const { id } = useParams()
// //   const navigate = useNavigate()
// //   const [zone, setZone] = useState(null)
// //   const [loading, setLoading] = useState(true)
// //   const [stats, setStats] = useState({
// //     restaurants: Math.floor(Math.random() * 50) + 10,
// //     drivers: Math.floor(Math.random() * 100) + 20,
// //     orders: Math.floor(Math.random() * 1000) + 100,
// //   })

// //   useEffect(() => {
// //     // Simulate API call to fetch zone details
// //     const fetchZone = () => {
// //       setLoading(true)
// //       setTimeout(() => {
// //         const mockZone = {
// //           id: id,
// //           name: id === "1" ? "Islamabad" : id === "2" ? "Lahore" : "Karachi",
// //           status: id === "1" ? true : false,
// //           coordinates: [
// //             { lat: 33.6844, lng: 73.0479 },
// //             { lat: 33.7294, lng: 73.0931 },
// //             { lat: 33.6839, lng: 73.1376 },
// //             { lat: 33.6341, lng: 73.0723 },
// //           ],
// //           createdAt: "2023-05-15T10:30:00Z",
// //           updatedAt: "2023-08-22T14:45:00Z",
// //         }
// //         setZone(mockZone)
// //         setLoading(false)
// //       }, 800)
// //     }

// //     fetchZone()
// //   }, [id])

// //   const handleDelete = () => {
// //     if (window.confirm("Are you sure you want to delete this zone?")) {
// //       // Simulate delete API call
// //       setTimeout(() => {
// //         navigate("/zone")
// //       }, 500)
// //     }
// //   }

// //   if (loading) {
// //     return (
// //       <div className="p-8">
// //         <div className="animate-pulse">
// //           <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
// //           <div className="h-64 bg-gray-200 rounded mb-6"></div>
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //             <div className="h-24 bg-gray-200 rounded"></div>
// //             <div className="h-24 bg-gray-200 rounded"></div>
// //             <div className="h-24 bg-gray-200 rounded"></div>
// //           </div>
// //         </div>
// //       </div>
// //     )
// //   }

// //   return (
// //     <div className="p-4">
// //       <TitleHead title={"Zone Details"} desc={"zone details"} link={"/zone"} desc2={"> zone"} />

// //       <div className="bg-white rounded-lg shadow-lg overflow-hidden">
// //         {/* Header */}
// //         <div className="bg-gradient-to-r from-primary-900 to-primary-700 p-6 text-white">
// //           <div className="flex justify-between items-center">
// //             <div className="flex items-center">
// //               <FaMapMarkerAlt className="text-3xl mr-4" />
// //               <div>
// //                 <h1 className="text-2xl font-bold">{zone.name}</h1>
// //                 <p className="text-white/80">Zone ID: {zone.id}</p>
// //               </div>
// //             </div>
// //             <div className="flex space-x-3">
// //               <Link
// //                 to={`/zone/edit/${zone.id}`}
// //                 className="bg-white text-primary-900 px-4 py-2 rounded-md flex items-center hover:bg-gray-100 transition-colors"
// //               >
// //                 <FaEdit className="mr-2" /> Edit
// //               </Link>
// //               <button
// //                 onClick={handleDelete}
// //                 className="bg-red-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-red-700 transition-colors"
// //               >
// //                 <FaTrashAlt className="mr-2" /> Delete
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Status */}
// //         <div className="p-6 border-b">
// //           <div className="flex items-center">
// //             <span className="font-semibold mr-3">Status:</span>
// //             <span
// //               className={`px-3 py-1 rounded-full text-sm font-medium ${
// //                 zone.status ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
// //               }`}
// //             >
// //               {zone.status ? "Active" : "Inactive"}
// //             </span>
// //           </div>
// //         </div>

// //         {/* Map Placeholder */}
// //         <div className="p-6 border-b">
// //           <h2 className="text-lg font-semibold mb-4">Zone Coverage Area</h2>
// //           <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
// //             <div className="text-center">
// //               <FaMapMarkerAlt className="text-4xl text-primary-900 mx-auto mb-2" />
// //               <p className="text-gray-500">Map view would be displayed here</p>
// //               <p className="text-sm text-gray-400">
// //                 (Requires Google Maps API integration with coordinates: {zone.coordinates.length} points)
// //               </p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Stats */}
// //         <div className="p-6">
// //           <h2 className="text-lg font-semibold mb-4">Zone Statistics</h2>
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //             <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
// //               <div className="flex items-center">
// //                 <div className="bg-blue-500 p-3 rounded-full text-white mr-4">
// //                   <FaStore />
// //                 </div>
// //                 <div>
// //                   <p className="text-sm text-blue-500">Restaurants</p>
// //                   <p className="text-2xl font-bold">{stats.restaurants}</p>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="bg-green-50 p-4 rounded-lg border border-green-100">
// //               <div className="flex items-center">
// //                 <div className="bg-green-500 p-3 rounded-full text-white mr-4">
// //                   <FaMotorcycle />
// //                 </div>
// //                 <div>
// //                   <p className="text-sm text-green-500">Drivers</p>
// //                   <p className="text-2xl font-bold">{stats.drivers}</p>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
// //               <div className="flex items-center">
// //                 <div className="bg-purple-500 p-3 rounded-full text-white mr-4">
// //                   <FaUtensils />
// //                 </div>
// //                 <div>
// //                   <p className="text-sm text-purple-500">Orders</p>
// //                   <p className="text-2xl font-bold">{stats.orders}</p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Timestamps */}
// //         <div className="p-6 bg-gray-50 text-sm text-gray-500">
// //           <div className="flex flex-col md:flex-row md:justify-between">
// //             <p>Created: {new Date(zone.createdAt).toLocaleString()}</p>
// //             <p>Last Updated: {new Date(zone.updatedAt).toLocaleString()}</p>
// //           </div>
// //         </div>

// //         {/* Back Button */}
// //         <div className="p-6 border-t">
// //           <Link
// //             to="/zone"
// //             className="inline-flex items-center text-primary-900 hover:text-primary-700 transition-colors"
// //           >
// //             <FaArrowLeft className="mr-2" /> Back to Zone List
// //           </Link>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default ZoneDetail



// "use client"

// import { useState, useEffect } from "react"
// import { useParams, Link, useNavigate } from "react-router-dom"
// import { FaMapMarkerAlt, FaStore, FaMotorcycle, FaUtensils, FaArrowLeft, FaEdit, FaTrashAlt } from "react-icons/fa"
// import TitleHead from "../Header/TitleHead"
// import GoogleMapComponent from "./GoogleMapComponent"

// const ZoneDetail = () => {
//   const { id } = useParams()
//   const navigate = useNavigate()
//   const [zone, setZone] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const [stats, setStats] = useState({
//     restaurants: Math.floor(Math.random() * 50) + 10,
//     drivers: Math.floor(Math.random() * 100) + 20,
//     orders: Math.floor(Math.random() * 1000) + 100,
//   })

//   useEffect(() => {
//     // Simulate API call to fetch zone details
//     const fetchZone = () => {
//       setLoading(true)
//       setTimeout(() => {
//         const mockZone = {
//           id: id,
//           name: id === "1" ? "Islamabad" : id === "2" ? "Lahore" : "Karachi",
//           status: id === "1" ? true : false,
//           coordinates: [
//             { lat: 33.6844, lng: 73.0479 },
//             { lat: 33.7294, lng: 73.0931 },
//             { lat: 33.6839, lng: 73.1376 },
//             { lat: 33.6341, lng: 73.0723 },
//           ],
//           createdAt: "2023-05-15T10:30:00Z",
//           updatedAt: "2023-08-22T14:45:00Z",
//         }
//         setZone(mockZone)
//         setLoading(false)
//       }, 800)
//     }

//     fetchZone()
//   }, [id])

//   const handleDelete = () => {
//     if (window.confirm("Are you sure you want to delete this zone?")) {
//       // Simulate delete API call
//       setTimeout(() => {
//         navigate("/zone")
//       }, 500)
//     }
//   }

//   if (loading) {
//     return (
//       <div className="p-8">
//         <div className="animate-pulse">
//           <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
//           <div className="h-64 bg-gray-200 rounded mb-6"></div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div className="h-24 bg-gray-200 rounded"></div>
//             <div className="h-24 bg-gray-200 rounded"></div>
//             <div className="h-24 bg-gray-200 rounded"></div>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="p-4">
//       <TitleHead title={"Zone Details"} desc={"zone details"} link={"/zone"} desc2={"> zone"} />

//       <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//         {/* Header */}
//         <div className="bg-gradient-to-r from-primary-900 to-primary-700 p-6 text-white">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center">
//               <FaMapMarkerAlt className="text-3xl mr-4" />
//               <div>
//                 <h1 className="text-2xl font-bold">{zone.name}</h1>
//                 <p className="text-white/80">Zone ID: {zone.id}</p>
//               </div>
//             </div>
//             <div className="flex space-x-3">
//               <Link
//                 to={`/zone/edit/${zone.id}`}
//                 className="bg-white text-primary-900 px-4 py-2 rounded-md flex items-center hover:bg-gray-100 transition-colors"
//               >
//                 <FaEdit className="mr-2" /> Edit
//               </Link>
//               <button
//                 onClick={handleDelete}
//                 className="bg-red-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-red-700 transition-colors"
//               >
//                 <FaTrashAlt className="mr-2" /> Delete
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Status */}
//         <div className="p-6 border-b">
//           <div className="flex items-center">
//             <span className="font-semibold mr-3">Status:</span>
//             <span
//               className={`px-3 py-1 rounded-full text-sm font-medium ${
//                 zone.status ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
//               }`}
//             >
//               {zone.status ? "Active" : "Inactive"}
//             </span>
//           </div>
//         </div>

//         {/* Map */}
//         <div className="p-6 border-b">
//           <h2 className="text-lg font-semibold mb-4">Zone Coverage Area</h2>
//           <GoogleMapComponent initialCoordinates={zone.coordinates} readOnly={true} />
//         </div>

//         {/* Stats */}
//         <div className="p-6">
//           <h2 className="text-lg font-semibold mb-4">Zone Statistics</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
//               <div className="flex items-center">
//                 <div className="bg-blue-500 p-3 rounded-full text-white mr-4">
//                   <FaStore />
//                 </div>
//                 <div>
//                   <p className="text-sm text-blue-500">Restaurants</p>
//                   <p className="text-2xl font-bold">{stats.restaurants}</p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-green-50 p-4 rounded-lg border border-green-100">
//               <div className="flex items-center">
//                 <div className="bg-green-500 p-3 rounded-full text-white mr-4">
//                   <FaMotorcycle />
//                 </div>
//                 <div>
//                   <p className="text-sm text-green-500">Drivers</p>
//                   <p className="text-2xl font-bold">{stats.drivers}</p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
//               <div className="flex items-center">
//                 <div className="bg-purple-500 p-3 rounded-full text-white mr-4">
//                   <FaUtensils />
//                 </div>
//                 <div>
//                   <p className="text-sm text-purple-500">Orders</p>
//                   <p className="text-2xl font-bold">{stats.orders}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Timestamps */}
//         <div className="p-6 bg-gray-50 text-sm text-gray-500">
//           <div className="flex flex-col md:flex-row md:justify-between">
//             <p>Created: {new Date(zone.createdAt).toLocaleString()}</p>
//             <p>Last Updated: {new Date(zone.updatedAt).toLocaleString()}</p>
//           </div>
//         </div>

//         {/* Back Button */}
//         <div className="p-6 border-t">
//           <Link
//             to="/zone"
//             className="inline-flex items-center text-primary-900 hover:text-primary-700 transition-colors"
//           >
//             <FaArrowLeft className="mr-2" /> Back to Zone List
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ZoneDetail

"use client"

import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { FaMapMarkerAlt, FaStore, FaMotorcycle, FaUtensils, FaArrowLeft, FaEdit, FaTrashAlt } from "react-icons/fa"
import { toast } from "react-toastify"
import TitleHead from "../Header/TitleHead"
import GoogleMapComponent from "./GoogleMapComponent"

const ZoneDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [zone, setZone] = useState(null)
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({
    restaurants: Math.floor(Math.random() * 50) + 10,
    drivers: Math.floor(Math.random() * 100) + 20,
    orders: Math.floor(Math.random() * 1000) + 100,
  })

  useEffect(() => {
    // Simulate API call to fetch zone details
    const fetchZone = () => {
      setLoading(true)
      setTimeout(() => {
        const mockZone = {
          id: id,
          name: id === "1" ? "Islamabad" : id === "2" ? "Lahore" : "Karachi",
          status: id === "1" ? true : false,
          coordinates: [
            { lat: 33.6844, lng: 73.0479 },
            { lat: 33.7294, lng: 73.0931 },
            { lat: 33.6839, lng: 73.1376 },
            { lat: 33.6341, lng: 73.0723 },
          ],
          createdAt: "2023-05-15T10:30:00Z",
          updatedAt: "2023-08-22T14:45:00Z",
        }
        setZone(mockZone)
        setLoading(false)
        toast.info(`Viewing zone: ${mockZone.name}`)
      }, 800)
    }

    fetchZone()
  }, [id])

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this zone?")) {
      // Simulate delete API call
      toast.info("Deleting zone...")
      setTimeout(() => {
        toast.success("Zone deleted successfully!")
        navigate("/zone")
      }, 500)
    }
  }

  if (loading) {
    return (
      <div className="p-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="h-64 bg-gray-200 rounded mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="h-24 bg-gray-200 rounded"></div>
            <div className="h-24 bg-gray-200 rounded"></div>
            <div className="h-24 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-4">
      <TitleHead title={"Zone Details"} desc={"zone details"} link={"/zone"} desc2={"> zone"} />

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-900 to-primary-700 p-6 text-white">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-3xl mr-4" />
              <div>
                <h1 className="text-2xl font-bold">{zone.name}</h1>
                <p className="text-white/80">Zone ID: {zone.id}</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <Link
                to={`/zone/edit/${zone.id}`}
                className="bg-white text-primary-900 px-4 py-2 rounded-md flex items-center hover:bg-gray-100 transition-colors"
              >
                <FaEdit className="mr-2" /> Edit
              </Link>
              <button
                onClick={handleDelete}
                className="bg-red-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-red-700 transition-colors"
              >
                <FaTrashAlt className="mr-2" /> Delete
              </button>
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="p-6 border-b">
          <div className="flex items-center">
            <span className="font-semibold mr-3">Status:</span>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                zone.status ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              }`}
            >
              {zone.status ? "Active" : "Inactive"}
            </span>
          </div>
        </div>

        {/* Map */}
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold mb-4">Zone Coverage Area</h2>
          <GoogleMapComponent initialCoordinates={zone.coordinates} readOnly={true} />
        </div>

        {/* Stats */}
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Zone Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <div className="flex items-center">
                <div className="bg-blue-500 p-3 rounded-full text-white mr-4">
                  <FaStore />
                </div>
                <div>
                  <p className="text-sm text-blue-500">Restaurants</p>
                  <p className="text-2xl font-bold">{stats.restaurants}</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <div className="flex items-center">
                <div className="bg-green-500 p-3 rounded-full text-white mr-4">
                  <FaMotorcycle />
                </div>
                <div>
                  <p className="text-sm text-green-500">Drivers</p>
                  <p className="text-2xl font-bold">{stats.drivers}</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
              <div className="flex items-center">
                <div className="bg-purple-500 p-3 rounded-full text-white mr-4">
                  <FaUtensils />
                </div>
                <div>
                  <p className="text-sm text-purple-500">Orders</p>
                  <p className="text-2xl font-bold">{stats.orders}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timestamps */}
        <div className="p-6 bg-gray-50 text-sm text-gray-500">
          <div className="flex flex-col md:flex-row md:justify-between">
            <p>Created: {new Date(zone.createdAt).toLocaleString()}</p>
            <p>Last Updated: {new Date(zone.updatedAt).toLocaleString()}</p>
          </div>
        </div>

        {/* Back Button */}
        <div className="p-6 border-t">
          <Link
            to="/zone"
            className="inline-flex items-center text-primary-900 hover:text-primary-700 transition-colors"
          >
            <FaArrowLeft className="mr-2" /> Back to Zone List
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ZoneDetail
