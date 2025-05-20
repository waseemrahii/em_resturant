// import React, { useState } from "react";
// import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";
// import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";
// import { FaCartShopping } from "react-icons/fa6";
// import MainCard from "./DashboardCards/TableHeader";
// import DataTableInfo from "./DashboardCards/DataTableInfo";
// import TableHeader from "./DashboardCards/TableHeader";

// const RecentOrder = () => {
//   const Orders = [
//     {
//       description: ` ${Math.floor(Math.random() * 10000)}`,
//       name: "Cheeseburger",
//       price: "$8.99",
//       quantity: 1,
//     },
//     {
//       description: ` ${Math.floor(Math.random() * 10000)}`,
//       name: "Orange Juice",
//       price: "$3.50",
//       quantity: 2,
//     },
//     {
//       description: ` ${Math.floor(Math.random() * 10000)}`,
//       name: "Spaghetti Marinara",
//       price: "$12.00",
//       quantity: 1,
//     },
//     {
//       description: ` ${Math.floor(Math.random() * 10000)}`,
//       name: "Garden Salad",
//       price: "$7.50",
//       quantity: 3,
//     },
//     {
//       description: ` ${Math.floor(Math.random() * 10000)}`,
//       name: "Chocolate Cake",
//       price: "$5.00",
//       quantity: 2,
//     },
//     {
//       description: ` ${Math.floor(Math.random() * 10000)}`,
//       name: "Cheeseburger",
//       price: "$8.99",
//       quantity: 1,
//     },
//     {
//       description: ` ${Math.floor(Math.random() * 10000)}`,
//       name: "Orange Juice",
//       price: "$3.50",
//       quantity: 2,
//     },
//     {
//       description: ` ${Math.floor(Math.random() * 10000)}`,
//       name: "Spaghetti Marinara",
//       price: "$12.00",
//       quantity: 1,
//     },
//     {
//       description: ` ${Math.floor(Math.random() * 10000)}`,
//       name: "Garden Salad",
//       price: "$7.50",
//       quantity: 3,
//     },
//     {
//       description: ` ${Math.floor(Math.random() * 10000)}`,
//       name: "Chocolate Cake",
//       price: "$5.00",
//       quantity: 2,
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
//     <div className="relative bg-primary-10 border rounded-lg border-primary-300">
//       <TableHeader title="Recent Orders" path="/orders" />
//       <table className=" w-full rounded-lg">
//         <thead>
//           <tr className="bg-primary-500 text-white">
//             <th className="px-4 py-2">
//               <button
//                 onClick={() => handleSort("id")}
//                 className="flex items-center  gap-2"
//               >
//                 Order ID
//                 <div>
//                   <TbTriangleFilled
//                     className={`transition-colors text-[.5rem] ${sortColumn === "id" && sortDirection === "asc"
//                       ? "text-primary-500"
//                       : "text-primary-300"
//                       }`}
//                   />
//                   <TbTriangleInvertedFilled
//                     className={`transition-colors text-[.5rem] ${sortColumn === "id" && sortDirection === "desc"
//                       ? "text-primary-500"
//                       : "text-primary-300"
//                       }`}
//                   />
//                 </div>
//               </button>
//             </th>
//             <th className="px-4 py-2">
//               <button
//                 onClick={() => handleSort("name")}
//                 className="flex items-center gap-2"
//               >
//                 Restaurant
//                 <div>
//                   <TbTriangleFilled
//                     className={`transition-colors text-[.5rem] ${sortColumn === "name" && sortDirection === "asc"
//                       ? "text-primary-500"
//                       : "text-primary-300"
//                       }`}
//                   />
//                   <TbTriangleInvertedFilled
//                     className={`transition-colors text-[.5rem] ${sortColumn === "name" && sortDirection === "desc"
//                       ? "text-primary-500"
//                       : "text-primary-300"
//                       }`}
//                   />
//                 </div>
//               </button>
//             </th>
//             <th className="px-4 py-2 sm:hidden lg:table-cell">
//               <button
//                 onClick={() => handleSort("price")}
//                 className="flex items-center gap-2"
//               >
//                 Total Amount
//                 <div>
//                   <TbTriangleFilled
//                     className={`transition-colors text-[.5rem] ${sortColumn === "price" && sortDirection === "asc"
//                       ? "text-primary-500"
//                       : "text-primary-300"
//                       }`}
//                   />
//                   <TbTriangleInvertedFilled
//                     className={`transition-colors text-[.5rem] ${sortColumn === "price" && sortDirection === "desc"
//                       ? "text-primary-500"
//                       : "text-primary-300"
//                       }`}
//                   />
//                 </div>
//               </button>
//             </th>
//             <th className="px-4 py-2 sm:hidden lg:table-cell">
//               <button
//                 onClick={() => handleSort("price")}
//                 className="flex items-center gap-2"
//               >
//                 Quantity
//                 <div>
//                   <TbTriangleFilled
//                     className={`transition-colors text-[.5rem] ${sortColumn === "price" && sortDirection === "asc"
//                       ? "text-primary-500"
//                       : "text-primary-300"
//                       }`}
//                   />
//                   <TbTriangleInvertedFilled
//                     className={`transition-colors text-[.5rem] ${sortColumn === "price" && sortDirection === "desc"
//                       ? "text-primary-500"
//                       : "text-primary-300"
//                       }`}
//                   />
//                 </div>
//               </button>
//             </th>
//           </tr>
//         </thead>
//         <tbody className="mb-10 rounded-lg">
//           {visibleOrders.map((order, index) => (
//             <React.Fragment key={index}>
//               <tr
//                 className={`border-b border-primary-300 ${showQuantity[index] ? "border-black" : ""
//                   }`}
//               >
//                 <td className="px-4 py-2 flex items-center gap-4">
//                   <div className="lg:hidden block">
//                     {showQuantity[index] ? (
//                       <IoMdRemoveCircle
//                         className="text-primary-500 text-xl border border-primary-400 rounded-full cursor-pointer"
//                         onClick={() => toggleQuantity(index)}
//                       />
//                     ) : (
//                       <IoMdAddCircle
//                         className="text-green1 text-xl border border-primary-400 rounded-full cursor-pointer"
//                         onClick={() => toggleQuantity(index)}
//                       />
//                     )}
//                   </div>
//                   <h1 className="text-primary-500 hover:text-black truncate whitespace-nowrap">
//                     {order.description}
//                   </h1>
//                 </td>
//                 <td className="px-4 py-2 text-primary-500 hover:text-black  md:table-cell lg:table-cell truncate">
//                   {order.name}
//                 </td>
//                 <td className="px-4 py-2 text-primary-500 hover:text-black lg:block hidden md:table-cell lg:table-cell truncate">
//                   {order.price}
//                 </td>
//                 <td className="px-4 py-2 text-primary-500 hover:text-black lg:block hidden md:table-cell lg:table-cell truncate ">
//                   <div className="flex items-center">
//                     <FaCartShopping className="text-primary-500 mr-2" />
//                     <span>{order.quantity}</span>
//                   </div>
//                 </td>
//               </tr>
//               {showQuantity[index] && (
//                 <tr className="">
//                   <td colSpan="3" className="py-2">
//                     <div className="text-primary-500 font-semibold flex justify-evenly gap-2">
//                       <div className="md:hidden lg:hidden  flex justify-center items-center gap-5">
//                         <span>Total Amount:</span>
//                         <button
//                           onClick={() => handleSort("price")}
//                           className="flex items-center gap-2"
//                         >
//                           {" "}
//                           {order.price}
//                         </button>
//                       </div>
//                       <div className="flex justify-center items-center py-2 ">
//                         <button className="text-primary-500 font-semibold flex items-center gap-2">
//                           Quantity:{" "}
//                           <FaCartShopping className="text-primary-500" />
//                           {order.quantity}
//                         </button>
//                       </div>
//                     </div>
//                   </td>
//                 </tr>
//               )}
//             </React.Fragment>
//           ))}
//         </tbody>
//       </table>
//       <div className="absolute bottom-0 w-full rounded-b-lg ">
//         <DataTableInfo entries={10} totalentries={10} />
//       </div>
//     </div>
//   );
// };

// export default RecentOrder;



import React from "react"
import { Link } from "react-router-dom"
import { FaEye } from "react-icons/fa"
import { format } from "date-fns"

const RecentOrder = ({ isLoading, orders = [] }) => {
  // Function to get status badge color
  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      case "processing":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  // Skeleton loader for orders
  const OrderSkeleton = () => (
    <div className="animate-pulse flex items-center p-3 border-b border-gray-100">
      <div className="flex-1">
        <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
        <div className="h-3 bg-gray-200 rounded w-1/3"></div>
      </div>
      <div className="h-6 w-16 bg-gray-200 rounded mr-2"></div>
      <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
    </div>
  )

  return (
    <div className="h-full">
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold">Recent Orders</h2>
        <Link to="/orders" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
          View All
        </Link>
      </div>

      <div className="overflow-y-auto max-h-[400px]">
        {isLoading ? (
          // Show skeleton loaders while loading
          Array(5)
            .fill(0)
            .map((_, index) => <OrderSkeleton key={index} />)
        ) : orders.length > 0 ? (
          // Show orders if available
          orders.map((order) => (
            <div key={order._id} className="flex items-center p-3 border-b border-gray-100 hover:bg-gray-50">
              <div className="flex-1">
                <h3 className="font-medium text-gray-800">Order #{order.orderNumber || order._id.slice(-6)}</h3>
                <p className="text-sm text-gray-500">
                  {order.customer?.name || "Customer"} • 
                  {order.createdAt ? format(new Date(order.createdAt), " MMM d, yyyy") : " No date"}
                </p>
                <p className="text-sm font-medium text-green-600">${order.totalAmount?.toFixed(2) || "0.00"}</p>
              </div>
              <div className="mr-3">
                <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(order.status)}`}>
                  {order.status || "Processing"}
                </span>
              </div>
              <Link
                to={`/orders/${order._id}`}
                className="p-2 text-gray-500 hover:text-primary-600 hover:bg-primary-50 rounded-full"
              >
                <FaEye className="w-5 h-5" />
              </Link>
            </div>
          ))
        ) : (
          // Show message if no orders
          <div className="p-4 text-center text-gray-500">No recent orders found</div>
        )}
      </div>
    </div>
  )
}

export default RecentOrder
