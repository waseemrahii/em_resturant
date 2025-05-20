// import React, { useState } from "react";
// import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";
// import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";
// import { FaTrashAlt } from "react-icons/fa";
// import { MdModeEdit } from "react-icons/md";
// import { Link } from "react-router-dom";
// import CardHeader from "../../AllCards/CardHeader";
// import HeadingCard from "../../AllCards/HeadingCard";
// import DataTableInfo from "../../Dashboard/DashboardCards/DataTableInfo";
// import TitleHead from "../../Header/TitleHead";
// import ButtonHead from "../../Header/ButtonHead";

// const Coupans = () => {
//   const Orders = [
//     {
//       code: "CRNI",

//       discount: "%25",
//       privacy: (
//         <div>
//           <h1 className="text-sm text-white font-semibold bg-[#008000] px-2 py-1 rounded-md border text-center">
//             Public
//           </h1>
//         </div>
//       ),
//       restaurant: "HSA",
//       expires: "Tue Sep 24 2024 11:29:59 AM",
//       publish: false,
//       description: " Buy 1 Get 1 Free on All Pastries!",
//     },
//     {
//       code: "CRNI",

//       discount: "%25",
//       privacy: (
//         <div>
//           <h1 className="text-sm text-white font-semibold bg-[#EF5350] px-2 py-1 rounded-md border text-center">
//             Private
//           </h1>
//         </div>
//       ),
//       restaurant: "HSA",
//       expires: "Tue Sep 24 2024 11:29:59 AM",
//       publish: true,
//       description: " Buy 1 Get 1 Free on All Pastries!",
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

//   const handlediscount = (column) => {
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

//   const handleprivacy = (column) => {
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

//   const handleexpires = (column) => {
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

//   const handlerestaurant = (column) => {
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
//   const handleSelectAll = (e) => {
//     if (e.target.checked) {
//       const newSelectedRoles = new Set(roles.map((_, index) => index));
//       setSelectedRoles(newSelectedRoles);
//     } else {
//       setSelectedRoles(new Set());
//     }
//   };

//   //   --------------------
//   const [roles, setRoles] = useState(Orders);

//   const [currentPage, setCurrentPage] = useState(0);
//   const [selectedRoles, setSelectedRoles] = useState(new Set());
//   const rolesPerPage = 5;

//   const handleRoleSelection = (index) => {
//     const newSelectedRoles = new Set(selectedRoles);
//     if (newSelectedRoles.has(index)) {
//       newSelectedRoles.delete(index);
//     } else {
//       newSelectedRoles.add(index);
//     }
//     setSelectedRoles(newSelectedRoles);
//   };

//   const startIndex = currentPage * rolesPerPage;
//   const displayedRoles = roles.slice(startIndex, startIndex + rolesPerPage);

//   return (
//     <>
//       <TitleHead title={"Coupons"} desc={"Coupons list"} />
//       <div className="shadow-sm shadow-primary-300 rounded">
//         {/* <CardHeader
//         createmenu="Create Coupans"
//         createlink={"/editcoupons"}
//         listmenu="Coupans List"
//       /> */}
//         <ButtonHead
//           tab1={"Coupons List"}
//           tab2={"Create Coupons"}
//           link={"/editcoupons"}
//         />
//         <HeadingCard />
//         <div className="overflow-x-auto scrollbar-custom">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead>
//               <tr className=" text-[.7rem] md:text-[1rem]">
//                 <th className="px-4 py-2 border bg-[#F8FAFD]">
//                   <div className="flex items-center justify-center gap-1 ">
//                     <input
//                       type="checkbox"
//                       className="bg-slate-600 h-4 w-4 "
//                       onChange={handleSelectAll}
//                       checked={
//                         displayedRoles.length > 0 &&
//                         displayedRoles.every((_, index) =>
//                           selectedRoles.has(startIndex + index)
//                         )
//                       }
//                     />
//                     <FaTrashAlt className="text-primary-900 text-[1rem]" />
//                     <span className="font-semibold">All</span>
//                   </div>
//                 </th>

//                 <th className="px-4 py-2 border text-left">
//                   <button
//                     onClick={() => handleSort("name")}
//                     className="flex items-center justify-between w-full gap-1"
//                   >
//                     <h1> Code </h1>
//                     <div className="flex flex-col">
//                       <TbTriangleFilled
//                         className={`transition-colors text-[.5rem] ${
//                           sortColumn === "name" && sortDirection === "asc"
//                             ? "text-gray-500"
//                             : "text-gray-300"
//                         }`}
//                       />
//                       <TbTriangleInvertedFilled
//                         className={`transition-colors text-[.5rem] ${
//                           sortColumn === "name" && sortDirection === "desc"
//                             ? "text-gray-500"
//                             : "text-gray-300"
//                         }`}
//                       />
//                     </div>
//                   </button>
//                 </th>
//                 <th className="px-4 py-2 border text-left">
//                   <button
//                     onClick={() => handlediscount("discount")}
//                     className="flex items-center justify-between w-full gap-1"
//                   >
//                     <h1> DisCount </h1>
//                     <div className="flex flex-col">
//                       <TbTriangleFilled
//                         className={`transition-colors text-[.5rem] ${
//                           sortColumn === "discount" && sortDirection === "asc"
//                             ? "text-gray-500"
//                             : "text-gray-300"
//                         }`}
//                       />
//                       <TbTriangleInvertedFilled
//                         className={`transition-colors text-[.5rem] ${
//                           sortColumn === "discount" && sortDirection === "desc"
//                             ? "text-gray-500"
//                             : "text-gray-300"
//                         }`}
//                       />
//                     </div>
//                   </button>
//                 </th>
//                 <th className="px-4 py-2 border text-left">
//                   <button
//                     onClick={() => handleprivacy("privacy")}
//                     className="flex items-center justify-between w-full gap-1"
//                   >
//                     <h1> Privacy </h1>
//                     <div className="flex flex-col">
//                       <TbTriangleFilled
//                         className={`transition-colors text-[.5rem] ${
//                           sortColumn === "privacy" && sortDirection === "asc"
//                             ? "text-gray-500"
//                             : "text-gray-300"
//                         }`}
//                       />
//                       <TbTriangleInvertedFilled
//                         className={`transition-colors text-[.5rem] ${
//                           sortColumn === "privacy" && sortDirection === "desc"
//                             ? "text-gray-500"
//                             : "text-gray-300"
//                         }`}
//                       />
//                     </div>
//                   </button>
//                 </th>
//                 <th className="px-4 py-2 border text-left">
//                   <button
//                     onClick={() => handlerestaurant("restaurant")}
//                     className="flex items-center justify-between w-full gap-1"
//                   >
//                     <h1> Restaurant </h1>
//                     <div className="flex flex-col">
//                       <TbTriangleFilled
//                         className={`transition-colors text-[.5rem] ${
//                           sortColumn === "restaurant" && sortDirection === "asc"
//                             ? "text-gray-500"
//                             : "text-gray-300"
//                         }`}
//                       />
//                       <TbTriangleInvertedFilled
//                         className={`transition-colors text-[.5rem] ${
//                           sortColumn === "restaurant" &&
//                           sortDirection === "desc"
//                             ? "text-gray-500"
//                             : "text-gray-300"
//                         }`}
//                       />
//                     </div>
//                   </button>
//                 </th>
//                 <th className="px-4 py-2 border text-left">
//                   <button
//                     onClick={() => handleexpires("expires")}
//                     className="flex items-center justify-between w-full gap-1"
//                   >
//                     <h1> Expiers At </h1>
//                     <div className="flex flex-col">
//                       <TbTriangleFilled
//                         className={`transition-colors text-[.5rem] ${
//                           sortColumn === "expires" && sortDirection === "asc"
//                             ? "text-gray-500"
//                             : "text-gray-300"
//                         }`}
//                       />
//                       <TbTriangleInvertedFilled
//                         className={`transition-colors text-[.5rem] ${
//                           sortColumn === "expires" && sortDirection === "desc"
//                             ? "text-gray-500"
//                             : "text-gray-300"
//                         }`}
//                       />
//                     </div>
//                   </button>
//                 </th>
//                 <th className="px-4 py-2 border text-left bg-[#F8FAFD]">
//                   Enabled
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200 scrollbar-custom">
//               {visibleOrders.map((order, index) => (
//                 <React.Fragment key={index}>
//                   <tr
//                     className={`border-b border-gray-300 hover:bg-gray-100 ${
//                       showQuantity[index] ? "border-black" : ""
//                     }`}
//                   >
//                     <td className=" px-4 py-2 border text-left text-gray-400 text-sm">
//                       <div className="flex items-center gap-2">
//                         <div className="">
//                           {showQuantity[index] ? (
//                             <IoMdRemoveCircle
//                               className="text-primary-900 text-xl border border-gray-400 rounded-full cursor-pointer"
//                               onClick={() => toggleQuantity(index)}
//                             />
//                           ) : (
//                             <IoMdAddCircle
//                               className="text-[#008000] text-xl border border-gray-400 rounded-full cursor-pointer"
//                               onClick={() => toggleQuantity(index)}
//                             />
//                           )}
//                         </div>
//                         <div>
//                           <input
//                             type="checkbox"
//                             checked={selectedRoles.has(startIndex + index)}
//                             onChange={() =>
//                               handleRoleSelection(startIndex + index)
//                             }
//                             className="h-4 w-4"
//                           />
//                         </div>
//                       </div>
//                     </td>{" "}
//                     <td className="px-4 py-2 border text-left text-gray-400 text-sm">
//                       <h1 className="text-primary-900 hover:text-black truncate">
//                         {order.code}
//                       </h1>
//                     </td>
//                     <td className="px-4 py-2 border text-left text-gray-400 text-sm">
//                       {order.discount}
//                     </td>
//                     <td className="px-4 py-2 border text-left text-gray-400 text-sm">
//                       {order.privacy}
//                     </td>
//                     <td className="px-4 py-2 border text-left text-primary-900 text-sm  ">
//                       {order.restaurant}
//                     </td>
//                     <td className="px-4 py-2 border text-left text-gray-400 text-sm  ">
//                       {order.expires}
//                     </td>
//                     <td className="px-4 py-2 border text-left text-gray-400 text-sm">
//                       <div className="flex items-center justify-center ">
//                         <div
//                           onClick={() => {
//                             const updatedRoles = [...roles];
//                             updatedRoles[startIndex + index].publish =
//                               !updatedRoles[startIndex + index].publish;
//                             setRoles(updatedRoles);
//                           }}
//                           className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${
//                             order.publish ? "bg-[#008000]" : "bg-primary-900"
//                           }`}
//                         >
//                           <div
//                             className={`bg-white w-5 h-5 rounded-full shadow-md transform ${
//                               order.publish ? "translate-x-6" : ""
//                             }`}
//                           ></div>
//                         </div>
//                       </div>
//                     </td>
//                   </tr>
//                   {showQuantity[index] && (
//                     <tr className="">
//                       <td colSpan="6" className="py-2">
//                         <div className="text-gray-500 font-semibold flex flex-col gap-2">
//                           <div className=" flex justify-center items-center gap-8 ">
//                             <button className="text-gray-500 font-semibold flex justify-between items-center">
//                               <h1>Description:</h1>
//                               <p>{order.description}</p>
//                             </button>
//                           </div>
//                           <div className="flex justify-center items-center gap-8">
//                             Actions:
//                             <Link to="/editcoupans">
//                               <MdModeEdit className="p-1 bg-green1 text-[1.6rem] rounded-full text-white" />
//                             </Link>
//                             <button>
//                               <FaTrashAlt className="p-1 text-[1.6rem] bg-red1 text-white rounded-full" />
//                             </button>
//                           </div>
//                         </div>
//                       </td>
//                     </tr>
//                   )}
//                 </React.Fragment>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <DataTableInfo entries={10} totalentries={10} />
//       </div>
//     </>
//   );
// };

// export default Coupans;



"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FaTrashAlt, FaPlus, FaEdit, FaGift, FaCalendarAlt, FaStore } from "react-icons/fa"
import { toast } from "react-toastify"
import TableList from "../../common/TableList"
import ToggleSwitch from "../../common/ToggleSwitch"
import ActionButton from "../../common/ActionButton"
import TitleHead from "../../Header/TitleHead"

const initialCoupons = [
  {
    id: 1,
    code: "SUMMER25",
    discount: "25%",
    privacy: "Public",
    restaurant: "All Restaurants",
    expires: "2024-09-24T11:29:59",
    status: true,
    description: "Get 25% off on all summer menu items!",
    minOrder: "$20",
    maxDiscount: "$50",
    usageLimit: 1,
    usageCount: 156,
    createdAt: "2023-05-15T10:30:00Z",
  },
  {
    id: 2,
    code: "WELCOME10",
    discount: "10%",
    privacy: "Public",
    restaurant: "All Restaurants",
    expires: "2024-10-15T23:59:59",
    status: true,
    description: "10% off on your first order!",
    minOrder: "$15",
    maxDiscount: "$30",
    usageLimit: 1,
    usageCount: 243,
    createdAt: "2023-04-10T08:15:00Z",
  },
  {
    id: 3,
    code: "PIZZA50",
    discount: "50%",
    privacy: "Private",
    restaurant: "Pizza Heaven",
    expires: "2024-08-30T23:59:59",
    status: false,
    description: "50% off on all pizzas!",
    minOrder: "$25",
    maxDiscount: "$40",
    usageLimit: 1,
    usageCount: 89,
    createdAt: "2023-03-22T14:45:00Z",
  },
  {
    id: 4,
    code: "FREESHIP",
    discount: "Free Shipping",
    privacy: "Public",
    restaurant: "All Restaurants",
    expires: "2024-12-31T23:59:59",
    status: true,
    description: "Free shipping on all orders!",
    minOrder: "$30",
    maxDiscount: "N/A",
    usageLimit: 3,
    usageCount: 412,
    createdAt: "2023-06-05T09:20:00Z",
  },
  {
    id: 5,
    code: "BURGER15",
    discount: "15%",
    privacy: "Private",
    restaurant: "Burger Palace",
    expires: "2024-11-15T23:59:59",
    status: true,
    description: "15% off on all burgers!",
    minOrder: "$20",
    maxDiscount: "$35",
    usageLimit: 2,
    usageCount: 67,
    createdAt: "2023-07-12T11:10:00Z",
  },
]

const Coupans = () => {
  const [coupons, setCoupons] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    setLoading(true)
    setTimeout(() => {
      setCoupons(initialCoupons)
      setLoading(false)
      toast.success("Coupons loaded successfully")
    }, 800)
  }, [])

  const handleStatusToggle = (id) => {
    const updatedCoupons = coupons.map((coupon) => (coupon.id === id ? { ...coupon, status: !coupon.status } : coupon))
    setCoupons(updatedCoupons)
    const coupon = coupons.find((c) => c.id === id)
    toast.info(`Coupon "${coupon.code}" status changed to ${!coupon.status ? "Active" : "Inactive"}`)
  }

  const handleDelete = (item) => {
    if (window.confirm(`Are you sure you want to delete coupon ${item.code}?`)) {
      setCoupons(coupons.filter((c) => c.id !== item.id))
      toast.success(`Coupon "${item.code}" deleted successfully`)
    }
  }

  const handleBulkDelete = (selectedItems) => {
    if (window.confirm(`Are you sure you want to delete ${selectedItems.size} selected coupon(s)?`)) {
      setCoupons(coupons.filter((coupon) => !selectedItems.has(coupon.id)))
      toast.success(`${selectedItems.size} coupon(s) deleted successfully`)
    }
  }

  const columns = [
    {
      key: "code",
      label: "Code",
      sortable: true,
      render: (item) => <span className="font-medium text-primary-900">{item.code}</span>,
    },
    {
      key: "discount",
      label: "Discount",
      sortable: true,
      render: (item) => <span className="font-medium text-green-600">{item.discount}</span>,
    },
    {
      key: "privacy",
      label: "Privacy",
      sortable: true,
      render: (item) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium text-white ${
            item.privacy === "Public" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {item.privacy}
        </span>
      ),
    },
    {
      key: "restaurant",
      label: "Restaurant",
      sortable: true,
    },
    {
      key: "expires",
      label: "Expires At",
      sortable: true,
      render: (item) => {
        const expiryDate = new Date(item.expires)
        const now = new Date()
        const isExpired = expiryDate < now

        return (
          <span className={`text-sm ${isExpired ? "text-red-600" : "text-gray-600"}`}>
            {expiryDate.toLocaleDateString()}{" "}
            {expiryDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            {isExpired && <span className="ml-1 text-xs font-medium text-red-600">(Expired)</span>}
          </span>
        )
      },
    },
    {
      key: "status",
      label: "Status",
      sortable: true,
      render: (item) => (
        <div className="flex justify-center">
          <ToggleSwitch
            isOn={item.status}
            onToggle={() => handleStatusToggle(item.id)}
            size="small"
            showLabels={false}
          />
        </div>
      ),
    },
  ]

  const actionButtons = [
    {
      icon: <FaEdit />,
      title: "Edit Coupon",
      onClick: (item) => {
        // Navigate to edit page
        console.log("Edit", item)
      },
      variant: "success",
    },
    {
      icon: <FaTrashAlt />,
      title: "Delete Coupon",
      onClick: handleDelete,
      variant: "danger",
    },
  ]

  const bulkActions = [
    {
      key: "delete",
      label: "Delete Selected",
      icon: <FaTrashAlt />,
      onClick: handleBulkDelete,
    },
  ]

  const expandableRow = (item) => (
    <div className="p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg m-2">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
            <FaGift className="mr-2 text-pink-500" /> Coupon Details
          </h3>
          <div className="space-y-2">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Code:</span> {item.code}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Discount:</span> {item.discount}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Privacy:</span>{" "}
              <span className={item.privacy === "Public" ? "text-green-600" : "text-red-600"}>{item.privacy}</span>
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Description:</span> {item.description}
            </p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
            <FaCalendarAlt className="mr-2 text-pink-500" /> Usage & Limits
          </h3>
          <div className="space-y-2">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Created:</span> {new Date(item.createdAt).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Expires:</span>{" "}
              <span className={new Date(item.expires) < new Date() ? "text-red-600" : "text-gray-600"}>
                {new Date(item.expires).toLocaleDateString()}{" "}
                {new Date(item.expires).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </span>
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Min Order:</span> {item.minOrder}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Max Discount:</span> {item.maxDiscount}
            </p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
            <FaStore className="mr-2 text-pink-500" /> Usage Statistics
          </h3>
          <div className="space-y-2">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Restaurant:</span> {item.restaurant}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Usage Limit:</span> {item.usageLimit} per user
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Total Usage:</span> {item.usageCount} times
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Status:</span>{" "}
              <span className={item.status ? "text-green-600" : "text-red-600"}>
                {item.status ? "Active" : "Inactive"}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-end space-x-2">
        <ActionButton
          icon={<FaEdit />}
          label="Edit Coupon"
          showLabel={true}
          variant="success"
          onClick={() => console.log("Edit", item)}
        />
        <ActionButton
          icon={<FaTrashAlt />}
          label="Delete"
          showLabel={true}
          variant="danger"
          onClick={() => handleDelete(item)}
        />
      </div>
    </div>
  )

  return (
    <div>

      <div className="mb-4 flex justify-end">
        <Link
          to="/editcoupons"
          className="bg-primary-900 text-white px-4 py-2 rounded-lg hover:bg-primary-800 transition-colors flex items-center justify-center"
        >
          <FaPlus className="mr-2" /> Add Coupon
        </Link>
      </div>

      <TableList
        data={coupons}
        columns={columns}
        title="Coupon Management"
        description="View and manage all discount coupons"
        searchPlaceholder="Search coupons..."
        loading={loading}
        actionButtons={actionButtons}
        bulkActions={bulkActions}
        expandableRow={expandableRow}
        emptyStateMessage="No coupons found"
        emptyStateIcon={<FaGift className="w-16 h-16 text-gray-300" />}
      />
    </div>
  )
}

export default Coupans
