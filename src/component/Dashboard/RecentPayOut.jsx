// import React, { useState } from "react";
// import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";
// import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";
// import MainCard from "./DashboardCards/TableHeader";
// import DataTableInfo from "./DashboardCards/DataTableInfo";
// import TableHeader from "./DashboardCards/TableHeader";

// const RecentPayOut = () => {
//   const Orders = [
//     {
//       description: "fajkfsjksfsdfbm",
//       name: "Hasa",
//       price: "$200",
//       date: "fri jun 2023",
//       time: "12:32:0 AM",
//       note: "tessting",
//     },
//     {
//       description: "fajkfsjksfsdfbmhvm",
//       name: "Hashga",
//       price: "$200",
//       date: "fri jun 2023",
//       time: "12:32:0 AM",
//       note: "test",
//     },
//     {
//       description: "fajkfsjksfsdfbmhvm",
//       name: "Hasa",
//       price: "$200",
//       date: "fri jun 2023",
//       time: "12:32:0 AM",
//       note: "againtesting",
//     },
//     {
//       description: "fajkfsjksfsdfbm",
//       name: "Hasa",
//       price: "$200",
//       date: "fri jun 2023",
//       time: "12:32:0 AM",
//       note: "test",
//     },

//     {
//       description: "fajkfsjksfsdfbm",
//       name: "Hasa",
//       price: "$200",
//       date: "fri jun 2023",
//       time: "12:32:0 AM",
//       note: "test",
//     },
//     {
//       description: "fajkfsjksfsdfbm",
//       name: "Hasa",
//       price: "$200",
//       date: "fri jun 2023",
//       time: "12:32:0 AM",
//       note: "test",
//     },
//     {
//       description: "fajkfsjksfsdfbmhvsbam",
//       name: "Hasa",
//       price: "$600",
//       date: "fri jun 2023",
//       time: "12:32:0 AM",
//       note: "test",
//     },
//     {
//       description: "fajkfsjksfsdfbmhvsbam",
//       name: "Hasa",
//       price: "$200",
//       date: "fri jun 2023",
//       time: "12:32:0 AM",
//       note: "test",
//     },
//     {
//       description: "fajkfsjksfsdfbmhvsbam",
//       name: "Hasa",
//       price: "$200",
//       date: "fri jun 2023",
//       time: "12:32:0 AM",
//       note: "test",
//     },
//     {
//       description: "fajkfsjksfsdfbmhvsbam",
//       name: "Hasa",
//       price: "$800",
//       date: "fri jun 2023",
//       time: "12:32:0 AM",
//       note: "test",
//     },
//     {
//       description: "fajkfsjksfsdfbmhvsbam",
//       name: "Hasa",
//       price: "$200",
//       date: "fri jun 2023",
//       time: "12:32:0 AM",
//       note: "test",
//     },
//     {
//       description: "fajkfsjksfsdfbmhvsbam",
//       name: "Hasa",
//       price: "$200",
//       date: "fri jun 2023",
//       time: "12:32:0 AM",
//       note: "test",
//     },
//     {
//       description: "fajkfsjksfsdfbmhvsbam",
//       name: "Hasa",
//       price: "$100",
//       date: "fri jun 2023",
//       time: "12:32:0 AM",
//       note: "test",
//     },
//     {
//       description: "fajkfsjksfsdfbmhvsbam",
//       name: "Hasa",
//       price: "$300",
//       date: "fri jun 2023",
//       time: "12:32:0 AM",
//       note: "test",
//     },
//     {
//       description: "fajkfsjksfsdfbmhvsbam",
//       name: "Hasa",
//       price: "$20",

//       date: "fri jun 2023",
//       time: "12:32:0 AM",
//       note: "test",
//     },
//     {
//       description: "fajkfsjksfsdfbmhvsbam",
//       name: "Hasa",
//       price: "$500",
//       date: "fri jun 2023",
//       time: "12:32:0 AM",
//       note: "test",
//     },
//     {
//       description: "fajkfsjksfsdfbmhvsbam",
//       name: "Hasa",
//       price: "$800",
//       date: "fri jun 2023",
//       time: "12:32:0 AM",
//       note: "test",
//     },
//     {
//       description: "fajkfsjksfsdfbmhvsbam",
//       name: "Hasa",
//       price: "$700",
//       date: "fri jun 2023",
//       time: "12:32:0 AM",
//       note: "test",
//     },
//     {
//       description: "fajkfsjksfsdfbmhvsbam",
//       name: "sa",
//       price: "$200",
//       date: "fri jun 2023",
//       time: "12:32:0 AM",
//       note: "test",
//     },
//     {
//       description: "fajkfsjksfsdfbmhvsbam",
//       name: "Hasa",
//       price: "$200",
//       date: "fri jun 2023",
//       time: "12:32:0 AM",
//       note: "test",
//     },
//     {
//       description: "fajkfsjksfsdfbmhvsbam",
//       name: "a",
//       price: "$200",
//       date: "fri jun 2023",
//       time: "12:32:0 AM",
//       note: "test",
//     },
//     {
//       description: "fajkfsjksfsdfbmhvsbam",
//       name: "Hasa",
//       price: "$200",
//       date: "fri jun 2023",
//       time: "12:32:0 AM",
//       note: "test",
//     },
//     {
//       description: "fajkfsjksfsdfbmhvsbam",
//       name: "Hasa",
//       price: "$100",
//       date: "fri jun 2023",
//       time: "12:32:0 AM",
//       note: "test",
//     },
//   ];

//   const [visibleOrders, setVisibleOrders] = useState(Orders.slice(0, 10));
//   const [sortColumn, setSortColumn] = useState(null);
//   const [sortDirection, setSortDirection] = useState("asc");
//   const [showQuantity, setShowQuantity] = useState({});

//   const handleSort = (column) => {
//     const newSortDirection =
//       sortColumn === column && sortDirection === "asc" ? "desc" : "asc";
//     setSortColumn(column);
//     setSortDirection(newSortDirection);

//     const sortedOrders = [...Orders].sort((a, b) => {
//       if (a[column] < b[column]) return newSortDirection === "asc" ? -1 : 1;
//       if (a[column] > b[column]) return newSortDirection === "asc" ? 1 : -1;
//       return 0;
//     });

//     setVisibleOrders(sortedOrders.slice(0, 10));
//   };

//   const toggleQuantity = (index) => {
//     setShowQuantity((prev) => ({
//       ...prev,
//       [index]: !prev[index],
//     }));
//   };

//   return (
//     <div className="relative bg-primary-10 border rounded-lg border-primary-300 ">
//       <TableHeader title="Recent Payouts" path="/payouts" />
//       <div className=" shadow-md hover:shadow-lg ">
//         <table className="w-full bg-primary-10 ">
//           <thead>
//             <tr className="bg-primary-200 ">
//               <th className="px-4 py-2 ">
//                 <button
//                   onClick={() => handleSort("id")}
//                   className="flex text-primary-500 items-center justify-center gap-2 "
//                 >
//                   Restaurant
//                   <div>
//                     <TbTriangleFilled
//                       className={`transition-colors text-[.5rem] ${sortColumn === "id" && sortDirection === "asc"
//                           ? "text-primary-500"
//                           : "text-primary-300"
//                         }`}
//                     />
//                     <TbTriangleInvertedFilled
//                       className={`transition-colors text-[.5rem] ${sortColumn === "id" && sortDirection === "desc"
//                           ? "text-primary-500"
//                           : "text-primary-300"
//                         }`}
//                     />
//                   </div>
//                 </button>
//               </th>
//               <th className="px-4 py-2">
//                 <button
//                   onClick={() => handleSort("name")}
//                   className="flex text-primary-500 gap-2 "
//                 >
//                   Paid Amount
//                   <div>
//                     <TbTriangleFilled
//                       className={`transition-colors text-[.5rem] ${sortColumn === "name" && sortDirection === "asc"
//                           ? "text-primary-500"
//                           : "text-primary-300"
//                         }`}
//                     />
//                     <TbTriangleInvertedFilled
//                       className={`transition-colors text-[.5rem] ${sortColumn === "name" && sortDirection === "desc"
//                           ? "text-primary-500"
//                           : "text-primary-300"
//                         }`}
//                     />
//                   </div>
//                 </button>
//               </th>
//               <th className="px-4 py-2">
//                 <button
//                   onClick={() => handleSort("date")}
//                   className="flex text-primary-500 items-center gap-2"
//                 >
//                   Date
//                   <div>
//                     <TbTriangleFilled
//                       className={`transition-colors text-[.5rem] ${sortColumn === "date" && sortDirection === "asc"
//                           ? "text-primary-500"
//                           : "text-primary-300"
//                         }`}
//                     />
//                     <TbTriangleInvertedFilled
//                       className={`transition-colors text-[.5rem] ${sortColumn === "date" && sortDirection === "desc"
//                           ? "text-primary-500"
//                           : "text-primary-300"
//                         }`}
//                     />
//                   </div>
//                 </button>
//               </th>
//               <th className="px-4 py-2">
//                 <button
//                   onClick={() => handleSort("note")}
//                   className="flex text-primary-500 items-center gap-2"
//                 >
//                   Note
//                   <div>
//                     <TbTriangleFilled
//                       className={`transition-colors text-[.5rem] ${sortColumn === "note" && sortDirection === "asc"
//                           ? "text-primary-500"
//                           : "text-primary-300"
//                         }`}
//                     />
//                     <TbTriangleInvertedFilled
//                       className={`transition-colors text-[.5rem] ${sortColumn === "note" && sortDirection === "desc"
//                           ? "text-primary-500"
//                           : "text-primary-300"
//                         }`}
//                     />
//                   </div>
//                 </button>
//               </th>
//             </tr>
//           </thead>
//           <tbody className=" divide-y divide-primary-200">
//             {visibleOrders.map((order, index) => (
//               <React.Fragment key={index}>
//                 <tr
//                   className={`border-b border-primary-300 ${showQuantity[index] ? "border-primary-950" : ""
//                     }`}
//                 >
//                   <td className="px-4 py-2 flex items-center gap-4">
//                     {showQuantity[index] ? (
//                       <IoMdRemoveCircle
//                         className="text-primary-500 lg:hidden md:hidden text-xl border border-primary-400 rounded-full cursor-pointer"
//                         onClick={() => toggleQuantity(index)}
//                       />
//                     ) : (
//                       <IoMdAddCircle
//                         className="text-green1 lg:hidden md:hidden text-xl border border-primary-400 rounded-full cursor-pointer"
//                         onClick={() => toggleQuantity(index)}
//                       />
//                     )}
//                     <h1 className="text-primary-500 t hover:text-black truncate">
//                       {order.name}
//                     </h1>
//                   </td>
//                   <td className="px-4 py-2 text-primary-500 hover:text-black  md:table-cell lg:table-cell truncate">
//                     {order.price}
//                   </td>
//                   <td className="px-4 py-2  hidden md:table-cell lg:table-cell truncate">
//                     <div className="text-sm text-primary-500">
//                       <h1>{order.date}</h1>
//                       <h1> {order.time}</h1>
//                     </div>
//                   </td>
//                   <td className="px-4 py-2 text-primary-500 hover:text-black hidden md:table-cell lg:table-cell truncate">
//                     {order.note}
//                   </td>
//                 </tr>
//                 {showQuantity[index] && (
//                   <tr className="">
//                     <td colSpan="3" className="py-2">
//                       <div className="text-primary-500 font-semibold flex flex-col gap-2">
//                         <div className="md:hidden lg:hidden flex justify-center items-start  gap-5">
//                           <span>Date</span>
//                           <button className="flex flex-col items-start text-sm  gap-2">
//                             {" "}
//                             <h1>{order.date}</h1>
//                             <h1 className="flex gap-2 ">{order.time}</h1>
//                           </button>
//                         </div>
//                         <div className="md:hidden lg:hidden  flex justify-center items-center gap-5">
//                           <span>Note</span>
//                           <button className="flex items-center gap-2 text-sm">
//                             {" "}
//                             {order.note}
//                           </button>
//                         </div>
//                       </div>
//                     </td>
//                   </tr>
//                 )}
//               </React.Fragment>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div className="absolute bottom-0 w-full ">
//         <DataTableInfo entries={10} totalentries={10} />
//       </div>
//     </div>
//   );
// };

// export default RecentPayOut;



"use client"
import { useState } from "react"
import { Link } from "react-router-dom"
import { FaEye, FaStar, FaCarSide, FaMotorcycle, FaBicycle, FaWalking } from "react-icons/fa"
import { format } from "date-fns"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"

const RecentPayOut = ({ isLoading, payouts = [], topDrivers = [] }) => {
  const [tabIndex, setTabIndex] = useState(0)

  // Get vehicle icon based on type
  const getVehicleIcon = (type) => {
    switch (type?.toLowerCase()) {
      case "car":
        return <FaCarSide className="text-blue-500" />
      case "motorcycle":
        return <FaMotorcycle className="text-red-500" />
      case "bicycle":
        return <FaBicycle className="text-green-500" />
      default:
        return <FaWalking className="text-gray-500" />
    }
  }

  // Skeleton loader for items
  const ItemSkeleton = () => (
    <div className="animate-pulse flex items-center p-3 border-b border-gray-100">
      <div className="h-12 w-12 bg-gray-200 rounded-full mr-3"></div>
      <div className="flex-1">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
      </div>
      <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
    </div>
  )

  return (
    <div className="h-full">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className="h-full flex flex-col">
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <TabList className="flex space-x-4 border-0">
            <Tab
              className="text-gray-600 hover:text-primary-600 cursor-pointer pb-2 px-1 focus:outline-none"
              selectedClassName="text-primary-600 border-b-2 border-primary-500 font-medium"
            >
              Top Drivers
            </Tab>
            <Tab
              className="text-gray-600 hover:text-primary-600 cursor-pointer pb-2 px-1 focus:outline-none"
              selectedClassName="text-primary-600 border-b-2 border-primary-500 font-medium"
            >
              Recent Payouts
            </Tab>
          </TabList>
          <Link
            to={tabIndex === 0 ? "/drivers" : "/payments"}
            className="text-primary-600 hover:text-primary-700 text-sm font-medium"
          >
            View All
          </Link>
        </div>

        <div className="flex-1 overflow-hidden">
          <TabPanel className="h-full overflow-y-auto">
            <div className="overflow-y-auto max-h-[400px]">
              {isLoading ? (
                // Show skeleton loaders while loading
                Array(5)
                  .fill(0)
                  .map((_, index) => <ItemSkeleton key={index} />)
              ) : topDrivers.length > 0 ? (
                // Show drivers if available
                topDrivers.map((driver) => (
                  <div
                    key={driver._id}
                    className="flex items-center p-3 border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-shrink-0 mr-3">
                      <img
                        src={driver.driver?.profileImage || "/placeholder.svg?height=48&width=48"}
                        alt={driver.driver?.firstName || "Driver"}
                        className="h-12 w-12 rounded-full object-cover border border-gray-200 shadow-sm"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800">
                        {driver.name || `${driver.driver?.firstName || ""} ${driver.driver?.lastName || ""}`}
                        {!driver.name && !driver.driver?.firstName && !driver.driver?.lastName && "Unknown Driver"}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500">
                        {getVehicleIcon(driver.driver?.vehicleDetails?.type || driver.vehicle)}
                        <span className="ml-1">
                          {driver.driver?.vehicleDetails?.type
                            ? `${driver.driver.vehicleDetails.type.charAt(0).toUpperCase() + driver.driver.vehicleDetails.type.slice(1)}`
                            : driver.vehicle || "Driver"}
                          {driver.driver?.vehicleDetails?.model && ` • ${driver.driver.vehicleDetails.model}`}
                        </span>
                      </div>
                      <div className="flex items-center mt-1">
                        <span className="text-sm font-medium text-gray-700">Orders: {driver.totalOrders || 0}</span>
                        <span className="mx-2 text-gray-300">|</span>
                        <span className="text-sm font-medium text-green-600">
                          ${(driver.totalEarnings || 0).toFixed(2)}
                        </span>
                        {(driver.driver?.rating > 0 || driver.rating > 0) && (
                          <>
                            <span className="mx-2 text-gray-300">|</span>
                            <span className="flex items-center text-sm text-amber-500">
                              <FaStar className="mr-1" /> {(driver.driver?.rating || driver.rating || 0).toFixed(1)}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                    <Link
                      to={`/drivers/${driver._id}`}
                      className="p-2 text-gray-500 hover:text-primary-600 hover:bg-primary-50 rounded-full transition-colors"
                    >
                      <FaEye className="w-5 h-5" />
                    </Link>
                  </div>
                ))
              ) : (
                // Show message if no drivers
                <div className="p-4 text-center text-gray-500">No top drivers found</div>
              )}
            </div>
          </TabPanel>

          <TabPanel className="h-full overflow-y-auto">
            <div className="overflow-y-auto max-h-[400px]">
              {isLoading ? (
                // Show skeleton loaders while loading
                Array(5)
                  .fill(0)
                  .map((_, index) => <ItemSkeleton key={index} />)
              ) : payouts.length > 0 ? (
                // Show payouts if available
                payouts.map((payout) => (
                  <div
                    key={payout._id}
                    className="flex items-center p-3 border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-shrink-0 mr-3">
                      <img
                        src={payout.recipient?.profileImage || "/placeholder.svg?height=48&width=48"}
                        alt={payout.recipient?.name || "Recipient"}
                        className="h-12 w-12 rounded-full object-cover border border-gray-200 shadow-sm"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800">{payout.recipient?.name || "Unknown Recipient"}</h3>
                      <p className="text-sm text-gray-500">
                        {payout.recipientType || "Vendor"} •
                        {payout.createdAt ? format(new Date(payout.createdAt), " MMM d, yyyy") : " No date"}
                      </p>
                      <div className="flex items-center mt-1">
                        <span className="text-sm font-medium text-green-600">${(payout.amount || 0).toFixed(2)}</span>
                        <span className="mx-2 text-gray-300">|</span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            payout.status === "completed"
                              ? "bg-green-100 text-green-800"
                              : payout.status === "pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {payout.status ? payout.status.charAt(0).toUpperCase() + payout.status.slice(1) : "Pending"}
                        </span>
                      </div>
                    </div>
                    <Link
                      to={`/payments/payouts/${payout._id}`}
                      className="p-2 text-gray-500 hover:text-primary-600 hover:bg-primary-50 rounded-full transition-colors"
                    >
                      <FaEye className="w-5 h-5" />
                    </Link>
                  </div>
                ))
              ) : (
                // Show message if no payouts
                <div className="p-4 text-center text-gray-500">No recent payouts found</div>
              )}
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  )
}

export default RecentPayOut
