// // // import { useState } from "react";

// // // import { FaTrashAlt } from "react-icons/fa";
// // // import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";
// // // import { MdAdd, MdModeEdit } from "react-icons/md";
// // // import { TfiMenuAlt } from "react-icons/tfi";
// // // import { Link } from "react-router-dom";
// // // import HeadingCard from "../AllCards/HeadingCard";
// // // import DataTableInfo from "../Dashboard/DashboardCards/DataTableInfo";
// // // import TitleHead from "../Header/TitleHead";

// // // const initialRoles = [
// // //   {
// // //     img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2FAnniversary%20Voucher_1700569972819.png?alt=media&token=4aee1fa3-a096-4c45-be40-d602010140c0",
// // //     expireday: "30Day",
// // //     roles: "Admin",
// // //     publish: true,
// // //     name: "Anniversary gift",
// // //   },
// // //   {
// // //     img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2FValentine%20Voucher_1700569950496.png?alt=media&token=cef4e8be-6639-4cae-a07e-66dbc23db6fe",
// // //     expireday: "20Day",
// // //     roles: "Admin",
// // //     publish: true,
// // //     name: "Valentine Gift",
// // //   },
// // //   {
// // //     img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2FBirthday%20Voucher_1700569920594.png?alt=media&token=575c07c7-9c14-43b4-91f8-e7ca204e0c84",
// // //     expireday: "25Day",
// // //     roles: "Admin",
// // //     publish: true,
// // //     name: "Valentine Gift",
// // //   },
// // //   {
// // //     img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fcongratulations-baby-gift-card-baby-shower-greeting-invitation-cards-money-card-blue-pastel-colors-template-illustration-vector_1701327424029.jpg?alt=media&token=8f22ad38-fd67-4aa1-b80b-3d0dfd77a8f3",
// // //     expireday: "5Day",
// // //     roles: "Admin",
// // //     publish: true,
// // //     name: "BirthDay Gift",
// // //   },
// // // ];

// // // const GiftCard = () => {
// // //   const [roles, setRoles] = useState(initialRoles);
// // //   const [sortColumn, setSortColumn] = useState("name");
// // //   const [sortDirection, setSortDirection] = useState("asc");
// // //   const [currentPage, setCurrentPage] = useState(0);
// // //   const [selectedRoles, setSelectedRoles] = useState(new Set());
// // //   const rolesPerPage = 5;

// // //   const handleSort = () => {
// // //     const newDirection = sortDirection === "asc" ? "desc" : "asc";
// // //     const sortedRoles = [...roles].sort((a, b) => {
// // //       if (a.name < b.name) return newDirection === "asc" ? -1 : 1;
// // //       if (a.name > b.name) return newDirection === "asc" ? 1 : -1;
// // //       return 0;
// // //     });
// // //     setRoles(sortedRoles);
// // //     setSortDirection(newDirection);
// // //     setSortColumn("name");
// // //   };

// // //   const handleemail = () => {
// // //     const newDirection = sortDirection === "asc" ? "desc" : "asc";
// // //     const sortedRoles = [...roles].sort((a, b) => {
// // //       if (a.name < b.name) return newDirection === "asc" ? -1 : 1;
// // //       if (a.name > b.name) return newDirection === "asc" ? 1 : -1;
// // //       return 0;
// // //     });
// // //     setRoles(sortedRoles);
// // //     setSortDirection(newDirection);
// // //     setSortColumn("email");
// // //   };

// // //   const handleSelectAll = (e) => {
// // //     if (e.target.checked) {
// // //       const newSelectedRoles = new Set(roles.map((_, index) => index));
// // //       setSelectedRoles(newSelectedRoles);
// // //     } else {
// // //       setSelectedRoles(new Set());
// // //     }
// // //   };

// // //   const handleRoleSelection = (index) => {
// // //     const newSelectedRoles = new Set(selectedRoles);
// // //     if (newSelectedRoles.has(index)) {
// // //       newSelectedRoles.delete(index);
// // //     } else {
// // //       newSelectedRoles.add(index);
// // //     }
// // //     setSelectedRoles(newSelectedRoles);
// // //   };

// // //   const startIndex = currentPage * rolesPerPage;
// // //   const displayedRoles = roles.slice(startIndex, startIndex + rolesPerPage);

// // //   return (
// // //     <>
// // //       <TitleHead title={"Gift Cards"} desc={"Gift Cards"} />
// // //       <div className="mx-5 my-3 shadow-md hover:shadow-lg">
// // //         <div className="flex flex-wrap justify-center gap-2 bg-[#F7F7F7] px-4 py-2 rounded shadow-sm hover:shadow-md">
// // //           <button className="bg-primary-900 text-white py-2 px-3 md:px-4 lg:px-4 rounded flex items-center gap-2">
// // //             <TfiMenuAlt />
// // //             Gift Card List
// // //           </button>

// // //           <Link to="/gift-create">
// // //             <button className="bg-white hover:bg-primary-900 hover:text-white py-2 px-1 md:px-4 lg:px-4 rounded flex items-center">
// // //               <MdAdd className="text-xl font-bold" /> Create Gift Card
// // //             </button>
// // //           </Link>
// // //         </div>
// // //         <HeadingCard />
// // //         <div className="overflow-x-auto scrollbar-custom">
// // //           <table className="min-w-full bg-white">
// // //             <thead>
// // //               <tr className="text-[.7rem] md:text-[1rem]">
// // //                 <th className="px-4 py-2 border bg-[#F8FAFD]">
// // //                   <div className="flex items-center justify-center gap-1 ">
// // //                     <input
// // //                       type="checkbox"
// // //                       className="bg-slate-600 h-4 w-4 "
// // //                       onChange={handleSelectAll}
// // //                       checked={
// // //                         displayedRoles.length > 0 &&
// // //                         displayedRoles.every((_, index) =>
// // //                           selectedRoles.has(startIndex + index)
// // //                         )
// // //                       }
// // //                     />
// // //                     <FaTrashAlt className="text-primary-900" />
// // //                     <span className="font-semibold">All</span>
// // //                   </div>
// // //                 </th>
// // //                 <th className="px-4 py-2 border text-left bg-[#F8FAFD]">
// // //                   Image
// // //                 </th>
// // //                 <th className="px-4 py-2 border text-left">
// // //                   <button
// // //                     onClick={handleSort}
// // //                     className="flex items-center justify-between w-full gap-1"
// // //                   >
// // //                     <h1> Title </h1>
// // //                     <div className="flex flex-col">
// // //                       <TbTriangleFilled
// // //                         className={`transition-colors text-[.5rem] ${
// // //                           sortColumn === "name" && sortDirection === "asc"
// // //                             ? "text-gray-500"
// // //                             : "text-gray-300"
// // //                         }`}
// // //                       />
// // //                       <TbTriangleInvertedFilled
// // //                         className={`transition-colors text-[.5rem] ${
// // //                           sortColumn === "name" && sortDirection === "desc"
// // //                             ? "text-gray-500"
// // //                             : "text-gray-300"
// // //                         }`}
// // //                       />
// // //                     </div>
// // //                   </button>
// // //                 </th>
// // //                 <th className="px-4 py-2 border text-left">
// // //                   <button
// // //                     onClick={handleemail}
// // //                     className="flex items-center justify-between w-full gap-1"
// // //                   >
// // //                     <h1> Experies In </h1>
// // //                     <div className="flex flex-col">
// // //                       <TbTriangleFilled
// // //                         className={`transition-colors text-[.5rem] ${
// // //                           sortColumn === "email" && sortDirection === "asc"
// // //                             ? "text-gray-500"
// // //                             : "text-gray-300"
// // //                         }`}
// // //                       />
// // //                       <TbTriangleInvertedFilled
// // //                         className={`transition-colors text-[.5rem] ${
// // //                           sortColumn === "email" && sortDirection === "desc"
// // //                             ? "text-gray-500"
// // //                             : "text-gray-300"
// // //                         }`}
// // //                       />
// // //                     </div>
// // //                   </button>
// // //                 </th>

// // //                 <th className="px-4 py-2 border text-left bg-[#F8FAFD]">
// // //                   Status
// // //                 </th>
// // //                 <th className="px-4 py-2 border text-left bg-[#F8FAFD]">
// // //                   Actions
// // //                 </th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               {displayedRoles.map((role, index) => (
// // //                 <tr key={index} className="hover:bg-gray-100">
// // //                   <td className="px-4 py-2 border w-10 text-center">
// // //                     <input
// // //                       type="checkbox"
// // //                       checked={selectedRoles.has(startIndex + index)}
// // //                       onChange={() => handleRoleSelection(startIndex + index)}
// // //                       className="w-4 h-4"
// // //                     />
// // //                   </td>
// // //                   <td className="px-4 py-2 border  text-center">
// // //                     <img
// // //                       src={role.img}
// // //                       alt=""
// // //                       className="rounded-md w-12
// // //                   h-12"
// // //                     />
// // //                   </td>
// // //                   <td className="px-4 py-2 border text-left text-primary-900 text-sm hover:text-black">
// // //                     <Link to="/gift-edit">{role.name}</Link>
// // //                   </td>
// // //                   <td className="px-4 py-2 border text-left text-gray-400 text-sm ">
// // //                     {role.expireday}
// // //                   </td>
// // //                   <td className="px-4 py-2 border text-left">
// // //                     <div className="flex items-center justify-center ">
// // //                       <div
// // //                         onClick={() => {
// // //                           const updatedRoles = [...roles];
// // //                           updatedRoles[startIndex + index].publish =
// // //                             !updatedRoles[startIndex + index].publish;
// // //                           setRoles(updatedRoles);
// // //                         }}
// // //                         className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer ${
// // //                           role.publish ? "bg-[#008000]" : "bg-primary-900"
// // //                         }`}
// // //                       >
// // //                         <div
// // //                           className={`bg-white w-4 h-4 rounded-full shadow-md transform ${
// // //                             role.publish ? "translate-x-5" : ""
// // //                           }`}
// // //                         ></div>
// // //                       </div>
// // //                     </div>
// // //                   </td>
// // //                   <td className="px-4 py-2 border space-x-2 text-center">
// // //                     <Link to="/gift-edit">
// // //                       <button>
// // //                         <MdModeEdit className="p-1 bg-[#008000] text-[1.6rem] rounded-full text-white" />
// // //                       </button>
// // //                     </Link>
// // //                     <button>
// // //                       <FaTrashAlt className="p-1 text-[1.6rem]  rounded-full text-white bg-primary-900" />
// // //                     </button>
// // //                   </td>
// // //                 </tr>
// // //               ))}
// // //             </tbody>
// // //           </table>
// // //         </div>
// // //         <DataTableInfo entries={roles.length} totalentries={roles.length} />
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default GiftCard;



// // // import { useState, useEffect } from "react"
// // // import { useDispatch, useSelector } from "react-redux"
// // // import { Link } from "react-router-dom"
// // // import { FaTrashAlt, FaGift, FaSearch, FaFileExport, FaEye } from "react-icons/fa"
// // // import { MdAdd, MdModeEdit, MdRefresh } from "react-icons/md"
// // // import { TfiMenuAlt } from "react-icons/tfi"
// // // import { BiSolidBadgeCheck } from "react-icons/bi"
// // // import { HiOutlineStatusOnline } from "react-icons/hi"
// // // import { BsCalendarDate, BsCreditCard2Front } from "react-icons/bs"
// // // import {
// // //   fetchGiftCards,
// // //   fetchGiftCardStats,
// // //   deleteGiftCard,
// // //   resetGiftCardState,
// // // } from "../../redux/slices/giftCardSlice"
// // // import TitleHead from "../Header/TitleHead"
// // // import LoadingSpinner from "../common/LoadingSpinner"
// // // import DeleteConfirmationModal from "../common/DeleteConfirmationModal"
// // // import NoDataFound from "../common/NoDataFound"

// // // const GiftCard = () => {
// // //   const dispatch = useDispatch()
// // //   const { giftCards, stats, pagination, loading, success, error } = useSelector((state) => state.giftCards)
// // //    console.log("gift card=====", giftCards)
// // //   const [currentPage, setCurrentPage] = useState(1)
// // //   const [selectedCards, setSelectedCards] = useState(new Set())
// // //   const [showDeleteModal, setShowDeleteModal] = useState(false)
// // //   const [cardToDelete, setCardToDelete] = useState(null)
// // //   const [expandedCard, setExpandedCard] = useState(null)
// // //   const [filters, setFilters] = useState({
// // //     status: "",
// // //     search: "",
// // //   })
// // //   const [searchInput, setSearchInput] = useState("")

// // //   useEffect(() => {
// // //     dispatch(fetchGiftCards({ page: currentPage, limit: 10 }))
// // //     dispatch(fetchGiftCardStats())
// // //   }, [dispatch, currentPage])

// // //   useEffect(() => {
// // //     if (success) {
// // //       dispatch(resetGiftCardState())
// // //     }
// // //   }, [success, dispatch])

// // //   const handlePageChange = (page) => {
// // //     setCurrentPage(page)
// // //   }

// // //   const handleSelectAll = (e) => {
// // //     if (e.target.checked) {
// // //       const newSelectedCards = new Set(giftCards.map((card) => card._id))
// // //       setSelectedCards(newSelectedCards)
// // //     } else {
// // //       setSelectedCards(new Set())
// // //     }
// // //   }

// // //   const handleCardSelection = (id) => {
// // //     const newSelectedCards = new Set(selectedCards)
// // //     if (newSelectedCards.has(id)) {
// // //       newSelectedCards.delete(id)
// // //     } else {
// // //       newSelectedCards.add(id)
// // //     }
// // //     setSelectedCards(newSelectedCards)
// // //   }

// // //   const handleDeleteClick = (id) => {
// // //     setCardToDelete(id)
// // //     setShowDeleteModal(true)
// // //   }

// // //   const confirmDelete = () => {
// // //     if (cardToDelete) {
// // //       dispatch(deleteGiftCard(cardToDelete))
// // //       setShowDeleteModal(false)
// // //       setCardToDelete(null)
// // //     }
// // //   }

// // //   const handleBulkDelete = () => {
// // //     // Implementation for bulk delete would go here
// // //     alert(`Bulk delete ${selectedCards.size} gift cards`)
// // //   }

// // //   const handleSearch = () => {
// // //     setFilters({ ...filters, search: searchInput })
// // //     dispatch(fetchGiftCards({ page: 1, limit: 10, filters: { ...filters, search: searchInput } }))
// // //     setCurrentPage(1)
// // //   }

// // //   const handleFilterChange = (e) => {
// // //     const newFilters = { ...filters, status: e.target.value }
// // //     setFilters(newFilters)
// // //     dispatch(fetchGiftCards({ page: 1, limit: 10, filters: newFilters }))
// // //     setCurrentPage(1)
// // //   }

// // //   const handleRefresh = () => {
// // //     dispatch(fetchGiftCards({ page: currentPage, limit: 10, filters }))
// // //     dispatch(fetchGiftCardStats())
// // //   }

// // //   const formatDate = (dateString) => {
// // //     const date = new Date(dateString)
// // //     return date.toLocaleDateString("en-US", {
// // //       year: "numeric",
// // //       month: "short",
// // //       day: "numeric",
// // //     })
// // //   }

// // //   const getStatusColor = (status) => {
// // //     switch (status) {
// // //       case "Active":
// // //         return "bg-green-100 text-green-800"
// // //       case "Redeemed":
// // //         return "bg-blue-100 text-blue-800"
// // //       case "Expired":
// // //         return "bg-red-100 text-red-800"
// // //       default:
// // //         return "bg-gray-100 text-gray-800"
// // //     }
// // //   }

// // //   const getDaysRemaining = (expiryDate) => {
// // //     const today = new Date()
// // //     const expiry = new Date(expiryDate)
// // //     const diffTime = expiry - today
// // //     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
// // //     return diffDays
// // //   }

// // //   if (loading && !giftCards.length) {
// // //     return <LoadingSpinner />
// // //   }

// // //   return (
// // //     <>
// // //       <TitleHead title={"Gift Cards"} desc={"Manage gift cards"} />

// // //       {/* Stats Cards */}
// // //       {stats && (
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-5 mb-6">
// // //           <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg shadow-md p-4 text-white">
// // //             <div className="flex justify-between items-center">
// // //               <div>
// // //                 <p className="text-sm opacity-80">Total Gift Cards</p>
// // //                 <h3 className="text-2xl font-bold">{stats.total.totalGiftCards}</h3>
// // //               </div>
// // //               <div className="bg-white bg-opacity-30 p-3 rounded-full">
// // //                 <FaGift className="text-xl" />
// // //               </div>
// // //             </div>
// // //             <p className="text-xs mt-2">Total Value: ${stats.total.totalAmount}</p>
// // //           </div>

// // //           <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-lg shadow-md p-4 text-white">
// // //             <div className="flex justify-between items-center">
// // //               <div>
// // //                 <p className="text-sm opacity-80">Active Gift Cards</p>
// // //                 <h3 className="text-2xl font-bold">{stats.total.activeCount}</h3>
// // //               </div>
// // //               <div className="bg-white bg-opacity-30 p-3 rounded-full">
// // //                 <HiOutlineStatusOnline className="text-xl" />
// // //               </div>
// // //             </div>
// // //             <p className="text-xs mt-2">Available Value: ${stats.total.activeAmount}</p>
// // //           </div>

// // //           <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg shadow-md p-4 text-white">
// // //             <div className="flex justify-between items-center">
// // //               <div>
// // //                 <p className="text-sm opacity-80">Redeemed Gift Cards</p>
// // //                 <h3 className="text-2xl font-bold">{stats.total.redeemedCount}</h3>
// // //               </div>
// // //               <div className="bg-white bg-opacity-30 p-3 rounded-full">
// // //                 <BiSolidBadgeCheck className="text-xl" />
// // //               </div>
// // //             </div>
// // //             <p className="text-xs mt-2">Redeemed Value: ${stats.total.redeemedAmount}</p>
// // //           </div>

// // //           <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg shadow-md p-4 text-white">
// // //             <div className="flex justify-between items-center">
// // //               <div>
// // //                 <p className="text-sm opacity-80">Redemption Rate</p>
// // //                 <h3 className="text-2xl font-bold">{stats.total.redemptionRate.toFixed(1)}%</h3>
// // //               </div>
// // //               <div className="bg-white bg-opacity-30 p-3 rounded-full">
// // //                 <BsCreditCard2Front className="text-xl" />
// // //               </div>
// // //             </div>
// // //             <p className="text-xs mt-2">Based on {stats.total.totalGiftCards} total gift cards</p>
// // //           </div>
// // //         </div>
// // //       )}

// // //       <div className="mx-5 my-3 bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden">
// // //         {/* Action Buttons */}
// // //         <div className="flex flex-wrap justify-between items-center gap-2 bg-[#F7F7F7] px-4 py-3 border-b">
// // //           <div className="flex flex-wrap items-center gap-2">
// // //             <button className="bg-primary-900 text-white py-2 px-3 md:px-4 rounded flex items-center gap-2 transition hover:bg-primary-800">
// // //               <TfiMenuAlt />
// // //               Gift Card List
// // //             </button>

// // //             <Link to="/gift-create">
// // //               <button className="bg-white hover:bg-primary-900 hover:text-white py-2 px-3 md:px-4 rounded flex items-center gap-2 border border-gray-300 transition">
// // //                 <MdAdd className="text-xl" /> Create Gift Card
// // //               </button>
// // //             </Link>

// // //             {selectedCards.size > 0 && (
// // //               <button
// // //                 onClick={handleBulkDelete}
// // //                 className="bg-red-600 text-white py-2 px-3 md:px-4 rounded flex items-center gap-2 transition hover:bg-red-700"
// // //               >
// // //                 <FaTrashAlt /> Delete Selected ({selectedCards.size})
// // //               </button>
// // //             )}
// // //           </div>

// // //           <div className="flex flex-wrap items-center gap-2">
// // //             <div className="relative">
// // //               <input
// // //                 type="text"
// // //                 placeholder="Search gift cards..."
// // //                 className="py-2 px-3 pr-10 border border-gray-300 rounded"
// // //                 value={searchInput}
// // //                 onChange={(e) => setSearchInput(e.target.value)}
// // //                 onKeyPress={(e) => e.key === "Enter" && handleSearch()}
// // //               />
// // //               <button
// // //                 onClick={handleSearch}
// // //                 className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary-900"
// // //               >
// // //                 <FaSearch />
// // //               </button>
// // //             </div>

// // //             <select
// // //               className="py-2 px-3 border border-gray-300 rounded"
// // //               value={filters.status}
// // //               onChange={handleFilterChange}
// // //             >
// // //               <option value="">All Status</option>
// // //               <option value="Active">Active</option>
// // //               <option value="Redeemed">Redeemed</option>
// // //               <option value="Expired">Expired</option>
// // //             </select>

// // //             <button
// // //               onClick={handleRefresh}
// // //               className="bg-gray-100 p-2 rounded hover:bg-gray-200 transition"
// // //               title="Refresh"
// // //             >
// // //               <MdRefresh className="text-xl" />
// // //             </button>

// // //             <button className="bg-gray-100 p-2 rounded hover:bg-gray-200 transition" title="Export">
// // //               <FaFileExport />
// // //             </button>
// // //           </div>
// // //         </div>

// // //         {/* Gift Cards Table */}
// // //         <div className="overflow-x-auto scrollbar-custom">
// // //           {giftCards.length > 0 ? (
// // //             <table className="min-w-full bg-white">
// // //               <thead>
// // //                 <tr className="text-sm text-gray-700 bg-gray-50">
// // //                   <th className="px-4 py-3 border-b">
// // //                     <div className="flex items-center justify-center gap-1">
// // //                       <input
// // //                         type="checkbox"
// // //                         className="h-4 w-4"
// // //                         onChange={handleSelectAll}
// // //                         checked={giftCards.length > 0 && giftCards.every((card) => selectedCards.has(card._id))}
// // //                       />
// // //                     </div>
// // //                   </th>
// // //                   <th className="px-4 py-3 border-b text-left">Code</th>
// // //                   <th className="px-4 py-3 border-b text-left">Amount</th>
// // //                   <th className="px-4 py-3 border-b text-left">Recipient</th>
// // //                   <th className="px-4 py-3 border-b text-left">Expiry Date</th>
// // //                   <th className="px-4 py-3 border-b text-left">Status</th>
// // //                   <th className="px-4 py-3 border-b text-center">Actions</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody>
// // //                 {giftCards.map((card) => (
// // //                   <>
// // //                     <tr key={card._id} className={`hover:bg-gray-50 ${expandedCard === card._id ? "bg-gray-50" : ""}`}>
// // //                       <td className="px-4 py-3 border-b w-10 text-center">
// // //                         <input
// // //                           type="checkbox"
// // //                           checked={selectedCards.has(card._id)}
// // //                           onChange={() => handleCardSelection(card._id)}
// // //                           className="w-4 h-4"
// // //                         />
// // //                       </td>
// // //                       <td className="px-4 py-3 border-b font-medium">
// // //                         <div className="flex items-center">
// // //                           <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded font-mono text-xs">
// // //                             {card.code}
// // //                           </span>
// // //                         </div>
// // //                       </td>
// // //                       <td className="px-4 py-3 border-b">
// // //                         <span className="font-semibold">${card.amount.toFixed(2)}</span>
// // //                       </td>
// // //                       <td className="px-4 py-3 border-b">
// // //                         {card.recipient ? (
// // //                           <div className="flex flex-col">
// // //                             <span>{card.recipient.name}</span>
// // //                             <span className="text-xs text-gray-500">{card.recipientEmail}</span>
// // //                           </div>
// // //                         ) : (
// // //                           <div className="flex flex-col">
// // //                             <span className="text-gray-500">Not claimed</span>
// // //                             <span className="text-xs text-gray-500">{card.recipientEmail}</span>
// // //                           </div>
// // //                         )}
// // //                       </td>
// // //                       <td className="px-4 py-3 border-b">
// // //                         <div className="flex flex-col">
// // //                           <span>{formatDate(card.expiryDate)}</span>
// // //                           {!card.isExpired && !card.redeemed && (
// // //                             <span
// // //                               className={`text-xs ${getDaysRemaining(card.expiryDate) < 7 ? "text-orange-600" : "text-green-600"}`}
// // //                             >
// // //                               {getDaysRemaining(card.expiryDate)} days left
// // //                             </span>
// // //                           )}
// // //                         </div>
// // //                       </td>
// // //                       <td className="px-4 py-3 border-b">
// // //                         <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(card.status)}`}>
// // //                           {card.status}
// // //                         </span>
// // //                       </td>
// // //                       <td className="px-4 py-3 border-b text-center">
// // //                         <div className="flex items-center justify-center space-x-2">
// // //                           <button
// // //                             onClick={() => setExpandedCard(expandedCard === card._id ? null : card._id)}
// // //                             className="p-1 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200"
// // //                             title="View Details"
// // //                           >
// // //                             <FaEye className="text-lg" />
// // //                           </button>
// // //                           <Link to={`/gift-edit/${card._id}`}>
// // //                             <button
// // //                               className="p-1 bg-green-100 text-green-600 rounded-full hover:bg-green-200"
// // //                               title="Edit"
// // //                             >
// // //                               <MdModeEdit className="text-lg" />
// // //                             </button>
// // //                           </Link>
// // //                           <button
// // //                             onClick={() => handleDeleteClick(card._id)}
// // //                             className="p-1 bg-red-100 text-red-600 rounded-full hover:bg-red-200"
// // //                             title="Delete"
// // //                           >
// // //                             <FaTrashAlt className="text-lg" />
// // //                           </button>
// // //                         </div>
// // //                       </td>
// // //                     </tr>
// // //                     {expandedCard === card._id && (
// // //                       <tr>
// // //                         <td colSpan="7" className="px-4 py-3 bg-gray-50 border-b">
// // //                           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-3">
// // //                             <div className="bg-white p-3 rounded shadow-sm">
// // //                               <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
// // //                                 <FaGift className="text-primary-900" /> Gift Card Details
// // //                               </h4>
// // //                               <div className="space-y-1 text-sm">
// // //                                 <p>
// // //                                   <span className="font-medium">Code:</span> {card.code}
// // //                                 </p>
// // //                                 <p>
// // //                                   <span className="font-medium">Amount:</span> ${card.amount.toFixed(2)}
// // //                                 </p>
// // //                                 <p>
// // //                                   <span className="font-medium">Created:</span> {formatDate(card.createdAt)}
// // //                                 </p>
// // //                                 <p>
// // //                                   <span className="font-medium">Message:</span> "{card.message || "No message"}"
// // //                                 </p>
// // //                               </div>
// // //                             </div>

// // //                             <div className="bg-white p-3 rounded shadow-sm">
// // //                               <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
// // //                                 <BsCalendarDate className="text-primary-900" /> Status Information
// // //                               </h4>
// // //                               <div className="space-y-1 text-sm">
// // //                                 <p>
// // //                                   <span className="font-medium">Status:</span>
// // //                                   <span
// // //                                     className={`ml-1 px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(card.status)}`}
// // //                                   >
// // //                                     {card.status}
// // //                                   </span>
// // //                                 </p>
// // //                                 <p>
// // //                                   <span className="font-medium">Active:</span> {card.active ? "Yes" : "No"}
// // //                                 </p>
// // //                                 <p>
// // //                                   <span className="font-medium">Redeemed:</span> {card.redeemed ? "Yes" : "No"}
// // //                                 </p>
// // //                                 {card.redeemed && card.redeemedAt && (
// // //                                   <p>
// // //                                     <span className="font-medium">Redeemed At:</span> {formatDate(card.redeemedAt)}
// // //                                   </p>
// // //                                 )}
// // //                                 <p>
// // //                                   <span className="font-medium">Expires:</span> {formatDate(card.expiryDate)}
// // //                                 </p>
// // //                               </div>
// // //                             </div>

// // //                             <div className="bg-white p-3 rounded shadow-sm">
// // //                               <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
// // //                                 <BsCreditCard2Front className="text-primary-900" /> Sender & Recipient
// // //                               </h4>
// // //                               <div className="space-y-1 text-sm">
// // //                                 <p>
// // //                                   <span className="font-medium">Sender:</span> {card.sender?.name || "N/A"}
// // //                                 </p>
// // //                                 <p>
// // //                                   <span className="font-medium">Sender Email:</span> {card.sender?.email || "N/A"}
// // //                                 </p>
// // //                                 <p>
// // //                                   <span className="font-medium">Recipient:</span>{" "}
// // //                                   {card.recipient?.name || "Not claimed"}
// // //                                 </p>
// // //                                 <p>
// // //                                   <span className="font-medium">Recipient Email:</span> {card.recipientEmail}
// // //                                 </p>
// // //                                 {card.redeemedBy && (
// // //                                   <p>
// // //                                     <span className="font-medium">Redeemed By:</span> {card.redeemedBy.name || "N/A"}
// // //                                   </p>
// // //                                 )}
// // //                               </div>
// // //                             </div>
// // //                           </div>
// // //                         </td>
// // //                       </tr>
// // //                     )}
// // //                   </>
// // //                 ))}
// // //               </tbody>
// // //             </table>
// // //           ) : (
// // //             <NoDataFound message="No gift cards found" />
// // //           )}
// // //         </div>

// // //         {/* Pagination */}
// // //         {pagination && pagination.pages > 1 && (
// // //           <div className="flex justify-between items-center px-4 py-3 bg-gray-50 border-t">
// // //             <div className="text-sm text-gray-700">
// // //               Showing <span className="font-medium">{(pagination.page - 1) * pagination.limit + 1}</span> to{" "}
// // //               <span className="font-medium">{Math.min(pagination.page * pagination.limit, pagination.total)}</span> of{" "}
// // //               <span className="font-medium">{pagination.total}</span> gift cards
// // //             </div>
// // //             <div className="flex space-x-1">
// // //               <button
// // //                 onClick={() => handlePageChange(pagination.page - 1)}
// // //                 disabled={pagination.page === 1}
// // //                 className={`px-3 py-1 rounded ${
// // //                   pagination.page === 1
// // //                     ? "bg-gray-200 text-gray-500 cursor-not-allowed"
// // //                     : "bg-white text-primary-900 hover:bg-primary-50 border"
// // //                 }`}
// // //               >
// // //                 Previous
// // //               </button>
// // //               {[...Array(pagination.pages)].map((_, i) => (
// // //                 <button
// // //                   key={i}
// // //                   onClick={() => handlePageChange(i + 1)}
// // //                   className={`px-3 py-1 rounded ${
// // //                     pagination.page === i + 1
// // //                       ? "bg-primary-900 text-white"
// // //                       : "bg-white text-primary-900 hover:bg-primary-50 border"
// // //                   }`}
// // //                 >
// // //                   {i + 1}
// // //                 </button>
// // //               ))}
// // //               <button
// // //                 onClick={() => handlePageChange(pagination.page + 1)}
// // //                 disabled={pagination.page === pagination.pages}
// // //                 className={`px-3 py-1 rounded ${
// // //                   pagination.page === pagination.pages
// // //                     ? "bg-gray-200 text-gray-500 cursor-not-allowed"
// // //                     : "bg-white text-primary-900 hover:bg-primary-50 border"
// // //                 }`}
// // //               >
// // //                 Next
// // //               </button>
// // //             </div>
// // //           </div>
// // //         )}
// // //       </div>

// // //       {/* Delete Confirmation Modal */}
// // //       {showDeleteModal && (
// // //         <DeleteConfirmationModal
// // //           title="Delete Gift Card"
// // //           message="Are you sure you want to delete this gift card? This action cannot be undone."
// // //           onConfirm={confirmDelete}
// // //           onCancel={() => setShowDeleteModal(false)}
// // //         />
// // //       )}
// // //     </>
// // //   )
// // // }

// // // export default GiftCard


// // "use client"

// // import { useState, useEffect } from "react"
// // import { useGetGiftCardsQuery, useDeleteGiftCardMutation } from "../../redux/services/giftCardService"
// // import { useNavigate } from "react-router-dom"
// // import { FaEdit, FaTrash, FaEye, FaPlus } from "react-icons/fa"
// // import LoadingSpinner from "../common/LoadingSpinner"
// // import NoDataFound from "../common/NoDataFound"
// // import TablePagination from "../common/TablePagination"
// // import DeleteConfirmationModal from "../common/DeleteConfirmationModal"
// // import PageHeader from "../common/PageHeader"
// // import TableHeader from "../common/TableHeader"

// // const GiftCard = () => {
// //   const navigate = useNavigate()
// //   const [currentPage, setCurrentPage] = useState(1)
// //   const [limit] = useState(10)
// //   const [searchTerm, setSearchTerm] = useState("")
// //   const [showDeleteModal, setShowDeleteModal] = useState(false)
// //   const [selectedGiftCard, setSelectedGiftCard] = useState(null)
// //   const [filteredGiftCards, setFilteredGiftCards] = useState([])

// //   // Fetch gift cards
// //   const {
// //     data: giftCardsData,
// //     isLoading,
// //     refetch,
// //   } = useGetGiftCardsQuery({
// //     page: currentPage,
// //     limit,
// //   })

// //   // Delete gift card mutation
// //   const [deleteGiftCard, { isLoading: isDeleting }] = useDeleteGiftCardMutation()

// //   // Set filtered gift cards when data changes or search term changes
// //   useEffect(() => {
// //     if (giftCardsData?.data) {
// //       if (searchTerm) {
// //         const filtered = giftCardsData.data.filter(
// //           (card) =>
// //             card.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //             card.recipientEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //             (card.sender?.name && card.sender.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
// //             (card.recipient?.name && card.recipient.name.toLowerCase().includes(searchTerm.toLowerCase())),
// //         )
// //         setFilteredGiftCards(filtered)
// //       } else {
// //         setFilteredGiftCards(giftCardsData.data)
// //       }
// //     }
// //   }, [giftCardsData, searchTerm])

// //   // Handle page change
// //   const handlePageChange = (page) => {
// //     setCurrentPage(page)
// //   }

// //   // Handle search
// //   const handleSearch = (e) => {
// //     setSearchTerm(e.target.value)
// //   }

// //   // Handle view gift card
// //   const handleViewGiftCard = (id) => {
// //     navigate(`/gift-cards/${id}`)
// //   }

// //   // Handle edit gift card
// //   const handleEditGiftCard = (id) => {
// //     navigate(`/gift-cards/edit/${id}`)
// //   }

// //   // Handle delete gift card
// //   const handleDeleteClick = (giftCard) => {
// //     setSelectedGiftCard(giftCard)
// //     setShowDeleteModal(true)
// //   }

// //   // Confirm delete gift card
// //   const confirmDelete = async () => {
// //     if (selectedGiftCard) {
// //       try {
// //         await deleteGiftCard(selectedGiftCard._id).unwrap()
// //         refetch()
// //         setShowDeleteModal(false)
// //         setSelectedGiftCard(null)
// //       } catch (error) {
// //         console.error("Failed to delete gift card:", error)
// //       }
// //     }
// //   }

// //   // Format date
// //   const formatDate = (dateString) => {
// //     const date = new Date(dateString)
// //     return date.toLocaleDateString("en-US", {
// //       year: "numeric",
// //       month: "short",
// //       day: "numeric",
// //     })
// //   }

// //   // Get status badge class
// //   const getStatusBadgeClass = (status) => {
// //     switch (status) {
// //       case "Active":
// //         return "bg-green-100 text-green-800"
// //       case "Redeemed":
// //         return "bg-blue-100 text-blue-800"
// //       case "Expired":
// //         return "bg-red-100 text-red-800"
// //       default:
// //         return "bg-gray-100 text-gray-800"
// //     }
// //   }

// //   return (
// //     <div className="p-4">
// //       <PageHeader
// //         title="Gift Cards"
// //         buttonText="Create Gift Card"
// //         buttonIcon={<FaPlus />}
// //         onButtonClick={() => navigate("/gift-cards/create")}
// //       />

// //       <div className="bg-white rounded-lg shadow-md p-6 mt-6">
// //         <div className="flex flex-col md:flex-row justify-between items-center mb-6">
// //           <div className="w-full md:w-1/3 mb-4 md:mb-0">
// //             <input
// //               type="text"
// //               placeholder="Search by code, email, or name..."
// //               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// //               value={searchTerm}
// //               onChange={handleSearch}
// //             />
// //           </div>
// //         </div>

// //         {isLoading ? (
// //           <LoadingSpinner />
// //         ) : filteredGiftCards?.length > 0 ? (
// //           <div className="overflow-x-auto">
// //             <table className="min-w-full bg-white">
// //               <TableHeader
// //                 headers={["Code", "Amount", "Recipient", "Sender", "Created Date", "Expiry Date", "Status", "Actions"]}
// //               />
// //               <tbody className="divide-y divide-gray-200">
// //                 {filteredGiftCards.map((giftCard) => (
// //                   <tr key={giftCard._id} className="hover:bg-gray-50">
// //                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{giftCard.code}</td>
// //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${giftCard.amount}</td>
// //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// //                       {giftCard.recipient?.name || giftCard.recipientEmail}
// //                     </td>
// //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// //                       {giftCard.sender?.name || "N/A"}
// //                     </td>
// //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// //                       {formatDate(giftCard.createdAt)}
// //                     </td>
// //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// //                       {formatDate(giftCard.expiryDate)}
// //                     </td>
// //                     <td className="px-6 py-4 whitespace-nowrap">
// //                       <span
// //                         className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(
// //                           giftCard.status,
// //                         )}`}
// //                       >
// //                         {giftCard.status}
// //                       </span>
// //                     </td>
// //                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
// //                       <div className="flex space-x-2">
// //                         <button
// //                           onClick={() => handleViewGiftCard(giftCard._id)}
// //                           className="text-indigo-600 hover:text-indigo-900"
// //                           title="View"
// //                         >
// //                           <FaEye />
// //                         </button>
// //                         <button
// //                           onClick={() => handleEditGiftCard(giftCard._id)}
// //                           className="text-blue-600 hover:text-blue-900"
// //                           title="Edit"
// //                           disabled={giftCard.status === "Redeemed" || giftCard.status === "Expired"}
// //                         >
// //                           <FaEdit />
// //                         </button>
// //                         <button
// //                           onClick={() => handleDeleteClick(giftCard)}
// //                           className="text-red-600 hover:text-red-900"
// //                           title="Delete"
// //                         >
// //                           <FaTrash />
// //                         </button>
// //                       </div>
// //                     </td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //         ) : (
// //           <NoDataFound message="No gift cards found" />
// //         )}

// //         {giftCardsData?.pagination && giftCardsData.pagination.total > 0 && (
// //           <TablePagination
// //             currentPage={currentPage}
// //             totalPages={giftCardsData.pagination.pages}
// //             onPageChange={handlePageChange}
// //           />
// //         )}
// //       </div>

// //       {/* Delete Confirmation Modal */}
// //       <DeleteConfirmationModal
// //         isOpen={showDeleteModal}
// //         onClose={() => setShowDeleteModal(false)}
// //         onConfirm={confirmDelete}
// //         title="Delete Gift Card"
// //         message={`Are you sure you want to delete the gift card with code ${selectedGiftCard?.code}?`}
// //         isLoading={isDeleting}
// //       />
// //     </div>
// //   )
// // }

// // export default GiftCard


// "use client"

// import { useState, useEffect } from "react"
// import { useGetGiftCardsQuery, useDeleteGiftCardMutation } from "../../redux/services/giftCardService"
// import { useNavigate } from "react-router-dom"
// import { FaEdit, FaTrash, FaEye, FaPlus } from "react-icons/fa"
// import LoadingSpinner from "../common/LoadingSpinner"
// import NoDataFound from "../common/NoDataFound"
// import TablePagination from "../common/TablePagination"
// import DeleteConfirmationModal from "../common/DeleteConfirmationModal"
// import PageHeader from "../common/PageHeader"
// import TableHeader from "../common/TableHeader"

// const GiftCard = () => {
//   const navigate = useNavigate()
//   const [currentPage, setCurrentPage] = useState(1)
//   const [limit] = useState(10)
//   const [searchTerm, setSearchTerm] = useState("")
//   const [showDeleteModal, setShowDeleteModal] = useState(false)
//   const [selectedGiftCard, setSelectedGiftCard] = useState(null)
//   const [filteredGiftCards, setFilteredGiftCards] = useState([])

//   // Fetch gift cards
//   const {
//     data: giftCardsData,
//     isLoading,
//     refetch,
//   } = useGetGiftCardsQuery({
//     page: currentPage,
//     limit,
//   })

//   // Delete gift card mutation
//   const [deleteGiftCard, { isLoading: isDeleting }] = useDeleteGiftCardMutation()

//   // Set filtered gift cards when data changes or search term changes
//   useEffect(() => {
//     if (giftCardsData?.data) {
//       if (searchTerm) {
//         const filtered = giftCardsData.data.filter(
//           (card) =>
//             card.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             card.recipientEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             (card.sender?.name && card.sender.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
//             (card.recipient?.name && card.recipient.name.toLowerCase().includes(searchTerm.toLowerCase())),
//         )
//         setFilteredGiftCards(filtered)
//       } else {
//         setFilteredGiftCards(giftCardsData.data)
//       }
//     }
//   }, [giftCardsData, searchTerm])

//   // Handle page change
//   const handlePageChange = (page) => {
//     setCurrentPage(page)
//   }

//   // Handle search
//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value)
//   }

//   // Handle view gift card
//   const handleViewGiftCard = (id) => {
//     navigate(`/gift-cards/${id}`)
//   }

//   // Handle edit gift card
//   const handleEditGiftCard = (id) => {
//     navigate(`/gift-cards/edit/${id}`)
//   }

//   // Handle delete gift card
//   const handleDeleteClick = (giftCard) => {
//     setSelectedGiftCard(giftCard)
//     setShowDeleteModal(true)
//   }

//   // Confirm delete gift card
//   const confirmDelete = async () => {
//     if (selectedGiftCard) {
//       try {
//         await deleteGiftCard(selectedGiftCard._id).unwrap()
//         refetch()
//         setShowDeleteModal(true)
//         setSelectedGiftCard(null)
//       } catch (error) {
//         console.error("Failed to delete gift card:", error)
//       }
//     }
//   }

//   // Format date
//   const formatDate = (dateString) => {
//     const date = new Date(dateString)
//     return date.toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//     })
//   }

//   // Get status badge class
//   const getStatusBadgeClass = (status) => {
//     switch (status) {
//       case "Active":
//         return "bg-green-100 text-green-800"
//       case "Redeemed":
//         return "bg-blue-100 text-blue-800"
//       case "Expired":
//         return "bg-red-100 text-red-800"
//       default:
//         return "bg-gray-100 text-gray-800"
//     }
//   }

//   return (
//     <div className="p-4">
//       <PageHeader
//         title="Gift Cards"
//         buttonText="Create Gift Card"
//         buttonIcon={<FaPlus />}
//         onButtonClick={() => navigate("/gift-cards/create")}
//       />

//       <div className="bg-white rounded-lg shadow-md p-6 mt-6">
//         <div className="flex flex-col md:flex-row justify-between items-center mb-6">
//           <div className="w-full md:w-1/3 mb-4 md:mb-0">
//             <input
//               type="text"
//               placeholder="Search by code, email, or name..."
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={searchTerm}
//               onChange={handleSearch}
//             />
//           </div>
//         </div>

//         {isLoading ? (
//           <LoadingSpinner />
//         ) : filteredGiftCards?.length > 0 ? (
//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-white">
//               <TableHeader
//                 headers={["Code", "Amount", "Recipient", "Sender", "Created Date", "Expiry Date", "Status", "Actions"]}
//               />
//               <tbody className="divide-y divide-gray-200">
//                 {filteredGiftCards.map((giftCard) => (
//                   <tr key={giftCard._id} className="hover:bg-gray-50">
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{giftCard.code}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${giftCard.amount}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                       {giftCard.recipient?.name || giftCard.recipientEmail}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                       {giftCard.sender?.name || "N/A"}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                       {formatDate(giftCard.createdAt)}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                       {formatDate(giftCard.expiryDate)}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <span
//                         className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(
//                           giftCard.status,
//                         )}`}
//                       >
//                         {giftCard.status}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                       <div className="flex space-x-2">
//                         <button
//                           onClick={() => handleViewGiftCard(giftCard._id)}
//                           className="text-indigo-600 hover:text-indigo-900"
//                           title="View"
//                         >
//                           <FaEye />
//                         </button>
//                         <button
//                           onClick={() => handleEditGiftCard(giftCard._id)}
//                           className="text-blue-600 hover:text-blue-900"
//                           title="Edit"
//                           disabled={giftCard.status === "Redeemed" || giftCard.status === "Expired"}
//                         >
//                           <FaEdit />
//                         </button>
//                         <button
//                           onClick={() => handleDeleteClick(giftCard)}
//                           className="text-red-600 hover:text-red-900"
//                           title="Delete"
//                         >
//                           <FaTrash />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         ) : (
//           <NoDataFound message="No gift cards found" />
//         )}

//         {giftCardsData?.pagination && giftCardsData.pagination.total > 0 && (
//           <TablePagination
//             currentPage={currentPage}
//             totalPages={giftCardsData.pagination.pages}
//             onPageChange={handlePageChange}
//           />
//         )}
//       </div>

//       {/* Delete Confirmation Modal */}
//       <DeleteConfirmationModal
//         isOpen={showDeleteModal}
//         onClose={() => setShowDeleteModal(false)}
//         onConfirm={confirmDelete}
//         title="Delete Gift Card"
//         message={`Are you sure you want to delete the gift card with code ${selectedGiftCard?.code}?`}
//         isLoading={isDeleting}
//       />
//     </div>
//   )
// }

// export default GiftCard


"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaTrashAlt, FaSearch, FaFileExport, FaEye } from "react-icons/fa"
import { MdAdd, MdModeEdit, MdRefresh } from "react-icons/md"
import { TfiMenuAlt } from "react-icons/tfi"
import { useGetGiftCardsQuery, useDeleteGiftCardMutation } from "../../redux/services/giftCardService"
import TitleHead from "../Header/TitleHead"
import LoadingSpinner from "../common/LoadingSpinner"
import DeleteConfirmationModal from "../common/DeleteConfirmationModal"
import NoDataFound from "../common/NoDataFound"

const GiftCard = () => {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)
  const [limit] = useState(10)
  const [searchTerm, setSearchTerm] = useState("")
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [selectedGiftCard, setSelectedGiftCard] = useState(null)
  const [selectedCards, setSelectedCards] = useState(new Set())
  const [filters, setFilters] = useState({
    status: "",
    search: "",
  })
  const [searchInput, setSearchInput] = useState("")

  // Fetch gift cards
  const {
    data: giftCardsData,
    isLoading,
    refetch,
  } = useGetGiftCardsQuery({
    page: currentPage,
    limit,
  })

  // Delete gift card mutation
  const [deleteGiftCard, { isLoading: isDeleting }] = useDeleteGiftCardMutation()

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  // Handle search
  const handleSearch = () => {
    setFilters({ ...filters, search: searchInput })
    setCurrentPage(1)
  }

  // Handle filter change
  const handleFilterChange = (e) => {
    const newFilters = { ...filters, status: e.target.value }
    setFilters(newFilters)
    setCurrentPage(1)
  }

  // Handle refresh
  const handleRefresh = () => {
    refetch()
  }

  // Handle select all
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const cards = giftCardsData?.data || []
      const newSelectedCards = new Set(cards.map((card) => card._id))
      setSelectedCards(newSelectedCards)
    } else {
      setSelectedCards(new Set())
    }
  }

  // Handle card selection
  const handleCardSelection = (id) => {
    const newSelectedCards = new Set(selectedCards)
    if (newSelectedCards.has(id)) {
      newSelectedCards.delete(id)
    } else {
      newSelectedCards.add(id)
    }
    setSelectedCards(newSelectedCards)
  }

  // Handle view gift card
  const handleViewGiftCard = (id) => {
    navigate(`/gift-edit/${id}`)
  }

  // Handle edit gift card
  const handleEditGiftCard = (id) => {
    navigate(`/gift-edit/${id}`)
  }

  // // Handle delete gift card
  // const handleDeleteClick = (giftCard) => {
  //   setSelectedGiftCard(giftCard)
  //   setShowDeleteModal(true)
  // }

  // Handle bulk delete
  const handleBulkDelete = () => {
    // Implementation for bulk delete would go here
    alert(`Bulk delete ${selectedCards.size} gift cards`)
  }

  // Confirm delete gift card
  const confirmDelete = async () => {
    if (selectedGiftCard) {
      try {
        await deleteGiftCard(selectedGiftCard._id).unwrap()
        refetch()
        setShowDeleteModal(false) // This was incorrectly set to true, causing the modal to show on page load
        setSelectedGiftCard(null)
      } catch (error) {
        console.error("Failed to delete gift card:", error)
      }
    }
  }

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800"
      case "Redeemed":
        return "bg-blue-100 text-blue-800"
      case "Expired":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  // Get days remaining
  const getDaysRemaining = (expiryDate) => {
    const today = new Date()
    const expiry = new Date(expiryDate)
    const diffTime = expiry - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  return (
    <>
      <TitleHead title={"Gift Cards"} desc={"Manage gift cards"} />

      <div className="mx-5 my-3 bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden">
        {/* Action Buttons */}
        <div className="flex flex-wrap justify-between items-center gap-2 bg-[#F7F7F7] px-4 py-3 border-b">
          <div className="flex flex-wrap items-center gap-2">
            <button className="bg-primary-900 text-white py-2 px-3 md:px-4 rounded flex items-center gap-2 transition hover:bg-primary-800">
              <TfiMenuAlt />
              Gift Card List
            </button>

            <button
              onClick={() => navigate("/gift-create")}
              className="bg-white hover:bg-primary-900 hover:text-white py-2 px-3 md:px-4 rounded flex items-center gap-2 border border-gray-300 transition"
            >
              <MdAdd className="text-xl" /> Create Gift Card
            </button>

            <button
              onClick={() => navigate("/gift-dashboard")}
              className="bg-white hover:bg-primary-900 hover:text-white py-2 px-3 md:px-4 rounded flex items-center gap-2 border border-gray-300 transition"
            >
              <FaEye className="text-sm" /> Dashboard
            </button>

            {selectedCards.size > 0 && (
              <button
                onClick={handleBulkDelete}
                className="bg-red-600 text-white py-2 px-3 md:px-4 rounded flex items-center gap-2 transition hover:bg-red-700"
              >
                <FaTrashAlt /> Delete Selected ({selectedCards.size})
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search gift cards..."
                className="py-2 px-3 pr-10 border border-gray-300 rounded"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              />
              <button
                onClick={handleSearch}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary-900"
              >
                <FaSearch />
              </button>
            </div>

            <select
              className="py-2 px-3 border border-gray-300 rounded"
              value={filters.status}
              onChange={handleFilterChange}
            >
              <option value="">All Status</option>
              <option value="Active">Active</option>
              <option value="Redeemed">Redeemed</option>
              <option value="Expired">Expired</option>
            </select>

            <button
              onClick={handleRefresh}
              className="bg-gray-100 p-2 rounded hover:bg-gray-200 transition"
              title="Refresh"
            >
              <MdRefresh className="text-xl" />
            </button>

            <button className="bg-gray-100 p-2 rounded hover:bg-gray-200 transition" title="Export">
              <FaFileExport />
            </button>
          </div>
        </div>

        {/* Gift Cards Table */}
        <div className="overflow-x-auto scrollbar-custom">
          {isLoading ? (
            <LoadingSpinner />
          ) : giftCardsData?.data?.length > 0 ? (
            <table className="min-w-full bg-white">
              <thead>
                <tr className="text-sm text-gray-700 bg-gray-50">
                  <th className="px-4 py-3 border-b">
                    <div className="flex items-center justify-center gap-1">
                      <input
                        type="checkbox"
                        className="h-4 w-4"
                        onChange={handleSelectAll}
                        checked={
                          giftCardsData.data.length > 0 &&
                          giftCardsData.data.every((card) => selectedCards.has(card._id))
                        }
                      />
                    </div>
                  </th>
                  <th className="px-4 py-3 border-b text-left">Code</th>
                  <th className="px-4 py-3 border-b text-left">Amount</th>
                  <th className="px-4 py-3 border-b text-left">Recipient</th>
                  <th className="px-4 py-3 border-b text-left">Sender</th>
                  <th className="px-4 py-3 border-b text-left">Created Date</th>
                  <th className="px-4 py-3 border-b text-left">Expiry Date</th>
                  <th className="px-4 py-3 border-b text-left">Status</th>
                  <th className="px-4 py-3 border-b text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {giftCardsData.data.map((giftCard) => (
                  <tr key={giftCard._id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 border-b w-10 text-center">
                      <input
                        type="checkbox"
                        checked={selectedCards.has(giftCard._id)}
                        onChange={() => handleCardSelection(giftCard._id)}
                        className="w-4 h-4"
                      />
                    </td>
                    <td className="px-4 py-3 border-b font-medium">
                      <div className="flex items-center">
                        <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded font-mono text-xs">
                          {giftCard.code}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3 border-b">
                      <span className="font-semibold">${giftCard.amount.toFixed(2)}</span>
                    </td>
                    <td className="px-4 py-3 border-b">
                      {giftCard.recipient ? (
                        <div className="flex flex-col">
                          <span>{giftCard.recipient.name}</span>
                          <span className="text-xs text-gray-500">{giftCard.recipientEmail}</span>
                        </div>
                      ) : (
                        <div className="flex flex-col">
                          <span className="text-gray-500">Not claimed</span>
                          <span className="text-xs text-gray-500">{giftCard.recipientEmail}</span>
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3 border-b">
                      {giftCard.sender ? (
                        <div className="flex flex-col">
                          <span>{giftCard.sender.name}</span>
                          <span className="text-xs text-gray-500">{giftCard.sender.email}</span>
                        </div>
                      ) : (
                        <span className="text-gray-500">N/A</span>
                      )}
                    </td>
                    <td className="px-4 py-3 border-b">{formatDate(giftCard.createdAt)}</td>
                    <td className="px-4 py-3 border-b">
                      <div className="flex flex-col">
                        <span>{formatDate(giftCard.expiryDate)}</span>
                        {!giftCard.isExpired && !giftCard.redeemed && (
                          <span
                            className={`text-xs ${
                              getDaysRemaining(giftCard.expiryDate) < 7 ? "text-orange-600" : "text-green-600"
                            }`}
                          >
                            {getDaysRemaining(giftCard.expiryDate)} days left
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3 border-b">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(giftCard.status)}`}>
                        {giftCard.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 border-b text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <button
                          onClick={() => handleViewGiftCard(giftCard._id)}
                          className="p-1 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200"
                          title="View Details"
                        >
                          <FaEye className="text-lg" />
                        </button>
                        <button
                          onClick={() => handleEditGiftCard(giftCard._id)}
                          className="p-1 bg-green-100 text-green-600 rounded-full hover:bg-green-200"
                          title="Edit"
                          disabled={giftCard.status === "Redeemed" || giftCard.status === "Expired"}
                        >
                          <MdModeEdit className="text-lg" />
                        </button>
                        {/* <button
                          onClick={() => handleDeleteClick(giftCard)}
                          className="p-1 bg-red-100 text-red-600 rounded-full hover:bg-red-200"
                          title="Delete"
                        >
                          <FaTrashAlt className="text-lg" />
                        </button> */}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <NoDataFound message="No gift cards found" />
          )}
        </div>

        {/* Pagination */}
        {giftCardsData?.pagination && giftCardsData.pagination.total > 0 && (
          <div className="flex justify-between items-center px-4 py-3 bg-gray-50 border-t">
            <div className="text-sm text-gray-700">
              Showing <span className="font-medium">{(currentPage - 1) * limit + 1}</span> to{" "}
              <span className="font-medium">{Math.min(currentPage * limit, giftCardsData.pagination.total)}</span> of{" "}
              <span className="font-medium">{giftCardsData.pagination.total}</span> gift cards
            </div>
            <div className="flex space-x-1">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded ${
                  currentPage === 1
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-white text-primary-900 hover:bg-primary-50 border"
                }`}
              >
                Previous
              </button>
              {[...Array(giftCardsData.pagination.pages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`px-3 py-1 rounded ${
                    currentPage === i + 1
                      ? "bg-primary-900 text-white"
                      : "bg-white text-primary-900 hover:bg-primary-50 border"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === giftCardsData.pagination.pages}
                className={`px-3 py-1 rounded ${
                  currentPage === giftCardsData.pagination.pages
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-white text-primary-900 hover:bg-primary-50 border"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {/* <DeleteConfirmationModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={confirmDelete}
        title="Delete Gift Card"
        message={`Are you sure you want to delete the gift card with code ${selectedGiftCard?.code}?`}
        isLoading={isDeleting}
      /> */}
    </>
  )
}

export default GiftCard
