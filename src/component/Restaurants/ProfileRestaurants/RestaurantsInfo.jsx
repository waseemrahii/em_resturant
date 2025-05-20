// import React from 'react'
// import ViewCard from './ViewCard'
// import { viewCardData } from '../../../Utils/data'
// import RestaurantsViewDetail from './RestaurantsViewDetail'
// import GalleryView from './GalleryView'
// import VendorsDetail from './VendorsDetail'
// import WorkingHourDetail from './WorkingHourDetail'
// import ServicesDetail from './ServicesDetail'

// const RestaurantsInfo = () => {
  

//   return (
//     <div>
//       <ViewCard cardData={viewCardData}/>
//       <RestaurantsViewDetail/>
//       <GalleryView/>
//       <VendorsDetail/>
//       <WorkingHourDetail/>
//       <ServicesDetail/>
//       <div className="flex justify-center mt-4">
//         <button 
//           // onClick={handleBackClick} 
//           className="bg-blue-500 text-white py-2 px-4 rounded"
//         >
//           Back
//         </button>
//       </div>
//     </div>
//   )
// }

// export default RestaurantsInfo



"use client"

import { useState } from "react"
import {
  FaEdit,
  FaStore,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUtensils,
  FaWallet,
  FaTag,
} from "react-icons/fa"

const RestaurantsInfo = () => {
  const [restaurant, setRestaurant] = useState({
    id: 1,
    name: "Flames",
    email: "contact@flames.com",
    phone: "77********",
    address: "Bull's Bridge, London Borough of Ealing, London, Greater London, England, United Kingdom",
    description: "Nice",
    cuisine: "Italian, Fast Food",
    status: "Closed",
    rating: 4.5,
    totalOrders: 0,
    totalEarnings: "$0.00",
    totalWithdrawal: 0,
    pendingWithdrawal: "$0.00",
    walletBalance: "$0.00",
    subscriptionPlan: "Commission Base Plan",
    subscriptionExpiry: "Unlimited",
    subscriptionDays: "Unlimited",
    totalPrice: "$0.00",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1zwCgD2LGIKp7Af6hcbdgTR79My0Xx.png",
    coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1zwCgD2LGIKp7Af6hcbdgTR79My0Xx.png",
    dineInFeature: "OFF",
    adminCommission: "10%",
    zone: "World Wide",
  })

  return (
    <div className="p-4">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-50 rounded-lg p-4 flex items-center justify-between shadow-sm">
          <div>
            <p className="text-sm text-gray-500">Total Orders</p>
            <h3 className="text-2xl font-bold text-gray-800">{restaurant.totalOrders}</h3>
          </div>
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1zwCgD2LGIKp7Af6hcbdgTR79My0Xx.png"
              alt="Orders"
              className="w-8 h-8"
            />
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-4 flex items-center justify-between shadow-sm">
          <div>
            <p className="text-sm text-gray-500">Total Earnings</p>
            <h3 className="text-2xl font-bold text-gray-800">{restaurant.totalEarnings}</h3>
          </div>
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1zwCgD2LGIKp7Af6hcbdgTR79My0Xx.png"
              alt="Earnings"
              className="w-8 h-8"
            />
          </div>
        </div>

        <div className="bg-red-50 rounded-lg p-4 flex items-center justify-between shadow-sm">
          <div>
            <p className="text-sm text-gray-500">Total Withdrawal</p>
            <h3 className="text-2xl font-bold text-gray-800">{restaurant.totalWithdrawal}</h3>
          </div>
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1zwCgD2LGIKp7Af6hcbdgTR79My0Xx.png"
              alt="Withdrawal"
              className="w-8 h-8"
            />
          </div>
        </div>

        <div className="bg-purple-50 rounded-lg p-4 flex items-center justify-between shadow-sm">
          <div>
            <p className="text-sm text-gray-500">Pending Withdrawal</p>
            <h3 className="text-2xl font-bold text-gray-800">{restaurant.pendingWithdrawal}</h3>
          </div>
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1zwCgD2LGIKp7Af6hcbdgTR79My0Xx.png"
              alt="Pending"
              className="w-8 h-8"
            />
          </div>
        </div>
      </div>

      {/* Subscription Details */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Subscription Details</h2>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary-900 text-white rounded-lg hover:bg-primary-800 transition-colors">
            <FaEdit className="text-sm" />
            <span>Change Subscription Plan</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-blue-50 rounded-lg p-4 flex items-center justify-between shadow-sm">
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <h3 className="text-lg font-semibold text-gray-800">{restaurant.subscriptionPlan}</h3>
            </div>
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1zwCgD2LGIKp7Af6hcbdgTR79My0Xx.png"
                alt="Plan"
                className="w-6 h-6"
              />
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-4 flex items-center justify-between shadow-sm">
            <div>
              <p className="text-sm text-gray-500">Number of Days</p>
              <h3 className="text-lg font-semibold text-gray-800">{restaurant.subscriptionDays}</h3>
            </div>
            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1zwCgD2LGIKp7Af6hcbdgTR79My0Xx.png"
                alt="Days"
                className="w-6 h-6"
              />
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-4 flex items-center justify-between shadow-sm">
            <div>
              <p className="text-sm text-gray-500">Expiry Date</p>
              <h3 className="text-lg font-semibold text-gray-800">{restaurant.subscriptionExpiry}</h3>
            </div>
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1zwCgD2LGIKp7Af6hcbdgTR79My0Xx.png"
                alt="Expiry"
                className="w-6 h-6"
              />
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-4 flex items-center justify-between shadow-sm">
            <div>
              <p className="text-sm text-gray-500">Total Price</p>
              <h3 className="text-lg font-semibold text-gray-800">{restaurant.totalPrice}</h3>
            </div>
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1zwCgD2LGIKp7Af6hcbdgTR79My0Xx.png"
                alt="Price"
                className="w-6 h-6"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Restaurant Details */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-3">Restaurant Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <FaStore className="text-primary-900" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-medium text-gray-800">{restaurant.name}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <FaPhone className="text-primary-900" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium text-gray-800">{restaurant.phone}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <FaEnvelope className="text-primary-900" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-gray-800">{restaurant.email}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <FaUtensils className="text-primary-900" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Restaurant Status (Open/Closed)</p>
                  <p className="font-medium text-red-600">{restaurant.status}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <FaTag className="text-primary-900" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">DINE IN feature</p>
                  <p className="font-medium text-gray-800">{restaurant.dineInFeature}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <FaWallet className="text-primary-900" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Admin Commission</p>
                  <p className="font-medium text-gray-800">{restaurant.adminCommission}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-3">Gallery</h3>
              <div className="border border-gray-200 rounded-lg p-4">
                <img
                  src={
                    restaurant.image ||
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1zwCgD2LGIKp7Af6hcbdgTR79My0Xx.png"
                  }
                  alt={restaurant.name}
                  className="w-32 h-32 object-cover rounded-lg"
                  onError={(e) => {
                    e.target.src =
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1zwCgD2LGIKp7Af6hcbdgTR79My0Xx.png"
                  }}
                />
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
                <FaMapMarkerAlt className="text-primary-900" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Zone Management</p>
                <p className="font-medium text-gray-800">{restaurant.zone}</p>
              </div>
            </div>

            <div className="flex items-start mt-4">
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
                <FaMapMarkerAlt className="text-primary-900" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Address</p>
                <p className="font-medium text-gray-800">{restaurant.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Working Hours */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-3">Working Hours</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                <FaCalendarAlt className="text-primary-900" />
              </div>
              <h3 className="font-medium text-gray-800">Monday</h3>
            </div>
            <p className="text-sm text-gray-600">9:00 AM - 10:00 PM</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                <FaCalendarAlt className="text-primary-900" />
              </div>
              <h3 className="font-medium text-gray-800">Tuesday</h3>
            </div>
            <p className="text-sm text-gray-600">9:00 AM - 10:00 PM</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                <FaCalendarAlt className="text-primary-900" />
              </div>
              <h3 className="font-medium text-gray-800">Wednesday</h3>
            </div>
            <p className="text-sm text-gray-600">9:00 AM - 10:00 PM</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                <FaCalendarAlt className="text-primary-900" />
              </div>
              <h3 className="font-medium text-gray-800">Thursday</h3>
            </div>
            <p className="text-sm text-gray-600">9:00 AM - 10:00 PM</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                <FaCalendarAlt className="text-primary-900" />
              </div>
              <h3 className="font-medium text-gray-800">Friday</h3>
            </div>
            <p className="text-sm text-gray-600">9:00 AM - 10:00 PM</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                <FaCalendarAlt className="text-primary-900" />
              </div>
              <h3 className="font-medium text-gray-800">Saturday</h3>
            </div>
            <p className="text-sm text-gray-600">9:00 AM - 10:00 PM</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                <FaCalendarAlt className="text-primary-900" />
              </div>
              <h3 className="font-medium text-gray-800">Sunday</h3>
            </div>
            <p className="text-sm text-gray-600">9:00 AM - 10:00 PM</p>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-3">Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center p-3 border border-gray-200 rounded-lg">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <svg
                className="w-4 h-4 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <span className="text-sm text-gray-700">Good for Lunch</span>
          </div>

          <div className="flex items-center p-3 border border-gray-200 rounded-lg">
            <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3">
              <svg
                className="w-4 h-4 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <span className="text-sm text-gray-700">Good for Breakfast</span>
          </div>

          <div className="flex items-center p-3 border border-gray-200 rounded-lg">
            <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3">
              <svg
                className="w-4 h-4 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <span className="text-sm text-gray-700">Free Wi-Fi</span>
          </div>

          <div className="flex items-center p-3 border border-gray-200 rounded-lg">
            <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3">
              <svg
                className="w-4 h-4 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <span className="text-sm text-gray-700">Live Music</span>
          </div>

          <div className="flex items-center p-3 border border-gray-200 rounded-lg">
            <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3">
              <svg
                className="w-4 h-4 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <span className="text-sm text-gray-700">Table Reservations</span>
          </div>

          <div className="flex items-center p-3 border border-gray-200 rounded-lg">
            <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3">
              <svg
                className="w-4 h-4 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <span className="text-sm text-gray-700">Outdoor Seating</span>
          </div>

          <div className="flex items-center p-3 border border-gray-200 rounded-lg">
            <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3">
              <svg
                className="w-4 h-4 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <span className="text-sm text-gray-700">Good for Dinner</span>
          </div>

          <div className="flex items-center p-3 border border-gray-200 rounded-lg">
            <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3">
              <svg
                className="w-4 h-4 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <span className="text-sm text-gray-700">Vegetarian Friendly</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestaurantsInfo
