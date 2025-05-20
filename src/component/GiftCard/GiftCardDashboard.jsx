// import { useState, useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { Link } from "react-router-dom"
// import { FaGift, FaChartLine, FaCalendarAlt, FaMoneyBillWave, FaUserFriends } from "react-icons/fa"
// import { BiSolidBadgeCheck } from "react-icons/bi"
// import { fetchGiftCardStats } from "../../redux/slices/giftCardSlice"
// import TitleHead from "../Header/TitleHead"
// import LoadingSpinner from "../common/LoadingSpinner"

// const GiftCardDashboard = () => {
//   const dispatch = useDispatch()
//   const { stats, loading } = useSelector((state) => state.giftCards)
//   const [period, setPeriod] = useState("month") // month, quarter, year

//   useEffect(() => {
//     dispatch(fetchGiftCardStats())
//   }, [dispatch])

//   if (loading && !stats) {
//     return <LoadingSpinner />
//   }

//   if (!stats) {
//     return (
//       <div className="p-4">
//         <TitleHead
//           title={"Gift Card Dashboard"}
//           desc={"Gift Card Analytics"}
//           desc2={"> Gift Card"}
//           link={"/gift-cards"}
//         />
//         <div className="bg-white p-8 rounded-lg shadow-md text-center">
//           <h2 className="text-xl font-semibold text-gray-600">No data available</h2>
//           <p className="mt-2 text-gray-500">There is no gift card data to display.</p>
//           <Link to="/gift-create">
//             <button className="mt-4 px-4 py-2 bg-primary-900 text-white rounded hover:bg-primary-800 transition">
//               Create Your First Gift Card
//             </button>
//           </Link>
//         </div>
//       </div>
//     )
//   }

//   // Format monthly data for chart
//   const monthlyData = stats.monthly || []

//   return (
//     <div>
//       <TitleHead
//         title={"Gift Card Dashboard"}
//         desc={"Gift Card Analytics"}
//         desc2={"> Gift Card"}
//         link={"/gift-cards"}
//       />

//       <div className="mx-5 my-3">
//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//           <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg shadow-md p-4 text-white">
//             <div className="flex justify-between items-center">
//               <div>
//                 <p className="text-sm opacity-80">Total Gift Cards</p>
//                 <h3 className="text-2xl font-bold">{stats.total.totalGiftCards}</h3>
//               </div>
//               <div className="bg-white bg-opacity-30 p-3 rounded-full">
//                 <FaGift className="text-xl" />
//               </div>
//             </div>
//             <p className="text-xs mt-2">Total Value: ${stats.total.totalAmount}</p>
//           </div>

//           <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-lg shadow-md p-4 text-white">
//             <div className="flex justify-between items-center">
//               <div>
//                 <p className="text-sm opacity-80">Active Gift Cards</p>
//                 <h3 className="text-2xl font-bold">{stats.total.activeCount}</h3>
//               </div>
//               <div className="bg-white bg-opacity-30 p-3 rounded-full">
//                 <FaMoneyBillWave className="text-xl" />
//               </div>
//             </div>
//             <p className="text-xs mt-2">Available Value: ${stats.total.activeAmount}</p>
//           </div>

//           <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg shadow-md p-4 text-white">
//             <div className="flex justify-between items-center">
//               <div>
//                 <p className="text-sm opacity-80">Redeemed Gift Cards</p>
//                 <h3 className="text-2xl font-bold">{stats.total.redeemedCount}</h3>
//               </div>
//               <div className="bg-white bg-opacity-30 p-3 rounded-full">
//                 <BiSolidBadgeCheck className="text-xl" />
//               </div>
//             </div>
//             <p className="text-xs mt-2">Redeemed Value: ${stats.total.redeemedAmount}</p>
//           </div>

//           <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg shadow-md p-4 text-white">
//             <div className="flex justify-between items-center">
//               <div>
//                 <p className="text-sm opacity-80">Redemption Rate</p>
//                 <h3 className="text-2xl font-bold">{stats.total.redemptionRate.toFixed(1)}%</h3>
//               </div>
//               <div className="bg-white bg-opacity-30 p-3 rounded-full">
//                 <FaChartLine className="text-xl" />
//               </div>
//             </div>
//             <p className="text-xs mt-2">Based on {stats.total.totalGiftCards} total gift cards</p>
//           </div>
//         </div>

//         {/* Monthly Trends */}
//         <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
//           <div className="bg-gray-50 px-6 py-4 border-b flex justify-between items-center">
//             <h3 className="text-lg font-medium text-gray-900 flex items-center">
//               <FaCalendarAlt className="mr-2 text-indigo-600" /> Gift Card Trends
//             </h3>
//             <div className="flex space-x-2">
//               <button
//                 onClick={() => setPeriod("month")}
//                 className={`px-3 py-1 rounded text-sm ${
//                   period === "month" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                 }`}
//               >
//                 Month
//               </button>
//               <button
//                 onClick={() => setPeriod("quarter")}
//                 className={`px-3 py-1 rounded text-sm ${
//                   period === "quarter" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                 }`}
//               >
//                 Quarter
//               </button>
//               <button
//                 onClick={() => setPeriod("year")}
//                 className={`px-3 py-1 rounded text-sm ${
//                   period === "year" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                 }`}
//               >
//                 Year
//               </button>
//             </div>
//           </div>

//           <div className="p-6">
//             {monthlyData.length > 0 ? (
//               <div className="h-64">
//                 {/* This would be a chart component in a real implementation */}
//                 <div className="bg-gray-50 h-full rounded-lg flex items-center justify-center">
//                   <div className="text-center">
//                     <FaChartLine className="text-4xl text-indigo-300 mx-auto mb-2" />
//                     <p className="text-gray-500">Monthly trend data would be visualized here</p>
//                     <p className="text-sm text-gray-400 mt-1">
//                       {monthlyData.length} data points available for the selected period
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <div className="bg-gray-50 h-64 rounded-lg flex items-center justify-center">
//                 <div className="text-center">
//                   <FaChartLine className="text-4xl text-gray-300 mx-auto mb-2" />
//                   <p className="text-gray-500">No trend data available for the selected period</p>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Gift Card Usage */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//           <div className="bg-white rounded-lg shadow-md overflow-hidden">
//             <div className="bg-gray-50 px-6 py-4 border-b">
//               <h3 className="text-lg font-medium text-gray-900 flex items-center">
//                 <FaUserFriends className="mr-2 text-indigo-600" /> Top Recipients
//               </h3>
//             </div>

//             <div className="p-6">
//               <div className="bg-gray-50 h-48 rounded-lg flex items-center justify-center">
//                 <div className="text-center">
//                   <FaUserFriends className="text-4xl text-gray-300 mx-auto mb-2" />
//                   <p className="text-gray-500">Recipient data would be displayed here</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-lg shadow-md overflow-hidden">
//             <div className="bg-gray-50 px-6 py-4 border-b">
//               <h3 className="text-lg font-medium text-gray-900 flex items-center">
//                 <FaMoneyBillWave className="mr-2 text-indigo-600" /> Gift Card Amounts
//               </h3>
//             </div>

//             <div className="p-6">
//               <div className="bg-gray-50 h-48 rounded-lg flex items-center justify-center">
//                 <div className="text-center">
//                   <FaMoneyBillWave className="text-4xl text-gray-300 mx-auto mb-2" />
//                   <p className="text-gray-500">Amount distribution would be displayed here</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Quick Actions */}
//         <div className="bg-white rounded-lg shadow-md overflow-hidden">
//           <div className="bg-gray-50 px-6 py-4 border-b">
//             <h3 className="text-lg font-medium text-gray-900">Quick Actions</h3>
//           </div>

//           <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
//             <Link to="/gift-create" className="block">
//               <div className="bg-indigo-50 hover:bg-indigo-100 transition rounded-lg p-4 text-center">
//                 <FaGift className="text-2xl text-indigo-600 mx-auto mb-2" />
//                 <h4 className="font-medium text-indigo-900">Create Gift Card</h4>
//                 <p className="text-sm text-indigo-700 mt-1">Issue a new gift card</p>
//               </div>
//             </Link>

//             <Link to="/gift-cards" className="block">
//               <div className="bg-green-50 hover:bg-green-100 transition rounded-lg p-4 text-center">
//                 <FaMoneyBillWave className="text-2xl text-green-600 mx-auto mb-2" />
//                 <h4 className="font-medium text-green-900">Manage Gift Cards</h4>
//                 <p className="text-sm text-green-700 mt-1">View and edit existing cards</p>
//               </div>
//             </Link>

//             <div className="bg-amber-50 hover:bg-amber-100 transition rounded-lg p-4 text-center cursor-pointer">
//               <FaChartLine className="text-2xl text-amber-600 mx-auto mb-2" />
//               <h4 className="font-medium text-amber-900">Export Reports</h4>
//               <p className="text-sm text-amber-700 mt-1">Download gift card reports</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default GiftCardDashboard


"use client"
import { useGetGiftCardStatsQuery } from "../../redux/services/giftCardService"
import { FaGift, FaCheckCircle, FaExclamationTriangle, FaChartLine } from "react-icons/fa"
import LoadingSpinner from "../common/LoadingSpinner"
import { useNavigate } from "react-router-dom"

const GiftCardDashboard = () => {
  const navigate = useNavigate()
  const { data: statsData, isLoading } = useGetGiftCardStatsQuery()

  if (isLoading) {
    return <LoadingSpinner />
  }

  const stats = statsData?.data?.total || {
    totalGiftCards: 0,
    totalAmount: 0,
    redeemedCount: 0,
    redeemedAmount: 0,
    activeCount: 0,
    activeAmount: 0,
    redemptionRate: 0,
  }

  const monthlyData = statsData?.data?.monthly || []

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount)
  }

  // Format percentage
  const formatPercentage = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "percent",
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format(value / 100)
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Gift Card Dashboard</h2>
        <button
          onClick={() => navigate("/gift-cards")}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          View All Gift Cards
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-md p-6 text-white">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Total Gift Cards</h3>
            <FaGift size={24} />
          </div>
          <p className="text-3xl font-bold">{stats.totalGiftCards}</p>
          <p className="mt-2 text-blue-100">Total Value: {formatCurrency(stats.totalAmount)}</p>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg shadow-md p-6 text-white">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Active Gift Cards</h3>
            <FaGift size={24} />
          </div>
          <p className="text-3xl font-bold">{stats.activeCount}</p>
          <p className="mt-2 text-green-100">Total Value: {formatCurrency(stats.activeAmount)}</p>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg shadow-md p-6 text-white">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Redeemed Gift Cards</h3>
            <FaCheckCircle size={24} />
          </div>
          <p className="text-3xl font-bold">{stats.redeemedCount}</p>
          <p className="mt-2 text-purple-100">Total Value: {formatCurrency(stats.redeemedAmount)}</p>
        </div>

        <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg shadow-md p-6 text-white">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Redemption Rate</h3>
            <FaChartLine size={24} />
          </div>
          <p className="text-3xl font-bold">{formatPercentage(stats.redemptionRate)}</p>
          <p className="mt-2 text-amber-100">
            {stats.redeemedCount} of {stats.totalGiftCards} redeemed
          </p>
        </div>
      </div>

      {/* Monthly Trends */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center mb-4">
          <FaChartLine className="text-blue-600 mr-2" />
          <h3 className="text-xl font-medium">Monthly Trends</h3>
        </div>

        {monthlyData.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Month
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Gift Cards Created
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Redeemed Count
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Redeemed Amount
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {monthlyData.map((month) => {
                  const [year, monthNum] = month._id.split("-")
                  const date = new Date(Number.parseInt(year), Number.parseInt(monthNum) - 1)
                  const monthName = date.toLocaleString("default", { month: "long" })

                  return (
                    <tr key={month._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {`${monthName} ${year}`}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{month.count}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatCurrency(month.amount)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{month.redeemedCount}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatCurrency(month.redeemedAmount)}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            <FaExclamationTriangle className="mx-auto mb-2 text-yellow-500" size={24} />
            <p>No monthly data available</p>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-medium mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => navigate("/gift-cards/create")}
            className="flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <FaGift className="mr-2" /> Create New Gift Card
          </button>
          <button
            onClick={() => navigate("/gift-cards")}
            className="flex items-center justify-center px-4 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700"
          >
            <FaGift className="mr-2" /> Manage Gift Cards
          </button>
          <button
            onClick={() => navigate("/settings")}
            className="flex items-center justify-center px-4 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700"
          >
            <FaGift className="mr-2" /> Gift Card Settings
          </button>
        </div>
      </div>
    </div>
  )
}

export default GiftCardDashboard
