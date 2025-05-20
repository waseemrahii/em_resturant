// // // import { useState } from "react";

// // // import { FaTrashAlt } from "react-icons/fa";
// // // import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";
// // // import { MdModeEdit } from "react-icons/md";

// // // import HeadingCard from "../AllCards/HeadingCard";
// // // import DataTableInfo from "../Dashboard/DashboardCards/DataTableInfo";
// // // import ButtonHead from "../Header/ButtonHead";
// // // import TitleHead from "../Header/TitleHead";
// // // import { Link } from "react-router-dom";

// // // const initialRoles = [
// // //   {
// // //     email: "kh@gmail.com",
// // //     roles: "Admin",
// // //     name: "Super Administrator",
// // //   },
// // //   {
// // //     email: "kh@gmail.com",
// // //     roles: "Admin",
// // //     name: "Administrator",
// // //   },
// // //   {
// // //     email: "kh@gmail.com",
// // //     roles: "Admin",
// // //     name: "User",
// // //   },
// // //   {
// // //     email: "kh@gmail.com",
// // //     roles: "Admin",
// // //     name: "Super Administrator",
// // //   },
// // //   {
// // //     email: "kh@gmail.com",
// // //     roles: "Admin",
// // //     name: "Administrator",
// // //   },
// // //   {
// // //     email: "kh@gmail.com",
// // //     roles: "Admin",
// // //     name: "User",
// // //   },
// // //   {
// // //     email: "kh@gmail.com",
// // //     roles: "Admin",
// // //     name: "Super Administrator",
// // //   },
// // //   {
// // //     email: "kh@gmail.com",
// // //     roles: "Admin",
// // //     name: "Administrator",
// // //   },
// // //   {
// // //     email: "kh@gmail.com",
// // //     roles: "Admin",
// // //     name: "User",
// // //   },
// // //   {
// // //     email: "kh@gmail.com",
// // //     roles: "Admin",
// // //     name: "Super Administrator",
// // //   },
// // //   {
// // //     email: "kh@gmail.com",
// // //     roles: "Admin",
// // //     name: "Administrator",
// // //   },
// // //   {
// // //     email: "kh@gmail.com",
// // //     roles: "Admin",
// // //     name: "User",
// // //   },
// // // ]; // Example roles

// // // const AdminUser = () => {
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
// // //   const handleroles = () => {
// // //     const newDirection = sortDirection === "asc" ? "desc" : "asc";
// // //     const sortedRoles = [...roles].sort((a, b) => {
// // //       if (a.name < b.name) return newDirection === "asc" ? -1 : 1;
// // //       if (a.name > b.name) return newDirection === "asc" ? 1 : -1;
// // //       return 0;
// // //     });
// // //     setRoles(sortedRoles);
// // //     setSortDirection(newDirection);
// // //     setSortColumn("roles");
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
// // //       <TitleHead title="Admin User" desc=" Admin User" />
// // //       <div className="mx-5 my-3 shadow-md hover:shadow-lg">
// // //         <ButtonHead tab1="Admin List" tab2="Create Admin" link="/edit-admin" />
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
// // //                     <FaTrashAlt className="text-primary-900 text-[.9rem]" />
// // //                     <span className="font-semibold">All</span>
// // //                   </div>
// // //                 </th>

// // //                 <th className="px-4 py-2 border text-left">
// // //                   <button
// // //                     onClick={handleSort}
// // //                     className="flex items-center justify-between w-full gap-1"
// // //                   >
// // //                     <h1> Name </h1>
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
// // //                     <h1> Email </h1>
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
// // //                 <th className="px-4 py-2 border text-left">
// // //                   <button
// // //                     onClick={handleroles}
// // //                     className="flex items-center justify-between w-full gap-1"
// // //                   >
// // //                     <h1> Roles </h1>
// // //                     <div className="flex flex-col">
// // //                       <TbTriangleFilled
// // //                         className={`transition-colors text-[.5rem] ${
// // //                           sortColumn === "roles" && sortDirection === "asc"
// // //                             ? "text-gray-500"
// // //                             : "text-gray-300"
// // //                         }`}
// // //                       />
// // //                       <TbTriangleInvertedFilled
// // //                         className={`transition-colors text-[.5rem] ${
// // //                           sortColumn === "roles" && sortDirection === "desc"
// // //                             ? "text-gray-500"
// // //                             : "text-gray-300"
// // //                         }`}
// // //                       />
// // //                     </div>
// // //                   </button>
// // //                 </th>
// // //                 <th className="px-4 py-2 border text-left bg-[#F8FAFD]">
// // //                   Actions
// // //                 </th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               {displayedRoles.map((role, index) => (
// // //                 <tr key={index} className="hover:bg-gray-200">
// // //                   <td className="px-4 py-2 border w-10 text-center">
// // //                     <input
// // //                       type="checkbox"
// // //                       checked={selectedRoles.has(startIndex + index)}
// // //                       onChange={() => handleRoleSelection(startIndex + index)}
// // //                       className="h-4 w-4"
// // //                     />
// // //                   </td>
// // //                   <td className="px-4 py-2 border text-left text-primary-900 text-md">
// // //                     {role.name}
// // //                   </td>
// // //                   <td className="px-4 py-2 border text-left text-primary-900 text-md">
// // //                     {role.email}
// // //                   </td>
// // //                   <td className="px-4 py-2 border text-left text-primary-900 text-md">
// // //                     {role.roles}
// // //                   </td>
// // //                   <td className="px-4 py-2 border text-left">
// // //                     <Link to="/edit-admin">
// // //                       <MdModeEdit className="p-1 bg-[#008000] text-[1.6rem] rounded-full text-white" />
// // //                     </Link>
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

// // // export default AdminUser;



// // "use client"

// // import { useState, useEffect } from "react"
// // import { Link } from "react-router-dom"
// // import { FaTrashAlt, FaPlus, FaSearch, FaUserShield, FaEye } from "react-icons/fa"
// // import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb"
// // import { MdModeEdit } from "react-icons/md"

// // import HeadingCard from "../AllCards/HeadingCard"
// // import DataTableInfo from "../Dashboard/DashboardCards/DataTableInfo"
// // import TitleHead from "../Header/TitleHead"

// // const initialAdmins = [
// //   {
// //     id: 1,
// //     email: "admin@example.com",
// //     roles: "Super Administrator",
// //     name: "John Doe",
// //     lastLogin: "2023-08-15T10:30:00Z",
// //     status: true,
// //   },
// //   {
// //     id: 2,
// //     email: "manager@example.com",
// //     roles: "Administrator",
// //     name: "Jane Smith",
// //     lastLogin: "2023-08-14T08:45:00Z",
// //     status: true,
// //   },
// //   {
// //     id: 3,
// //     email: "support@example.com",
// //     roles: "Support",
// //     name: "Robert Johnson",
// //     lastLogin: "2023-08-10T14:20:00Z",
// //     status: false,
// //   },
// //   {
// //     id: 4,
// //     email: "content@example.com",
// //     roles: "Content Manager",
// //     name: "Emily Davis",
// //     lastLogin: "2023-08-12T09:15:00Z",
// //     status: true,
// //   },
// //   {
// //     id: 5,
// //     email: "finance@example.com",
// //     roles: "Finance Manager",
// //     name: "Michael Wilson",
// //     lastLogin: "2023-08-11T11:30:00Z",
// //     status: true,
// //   },
// // ]

// // const AdminUser = () => {
// //   const [admins, setAdmins] = useState([])
// //   const [loading, setLoading] = useState(true)
// //   const [sortColumn, setSortColumn] = useState("name")
// //   const [sortDirection, setSortDirection] = useState("asc")
// //   const [currentPage, setCurrentPage] = useState(0)
// //   const [selectedAdmins, setSelectedAdmins] = useState(new Set())
// //   const [searchTerm, setSearchTerm] = useState("")
// //   const adminsPerPage = 10

// //   useEffect(() => {
// //     // Simulate API call
// //     setLoading(true)
// //     setTimeout(() => {
// //       setAdmins(initialAdmins)
// //       setLoading(false)
// //     }, 800)
// //   }, [])

// //   const handleSort = (column) => {
// //     const newDirection = column === sortColumn && sortDirection === "asc" ? "desc" : "asc"
// //     const sortedAdmins = [...admins].sort((a, b) => {
// //       if (a[column] < b[column]) return newDirection === "asc" ? -1 : 1
// //       if (a[column] > b[column]) return newDirection === "asc" ? 1 : -1
// //       return 0
// //     })
// //     setAdmins(sortedAdmins)
// //     setSortDirection(newDirection)
// //     setSortColumn(column)
// //   }

// //   const handleSelectAll = (e) => {
// //     if (e.target.checked) {
// //       const newSelectedAdmins = new Set(filteredAdmins.map((admin) => admin.id))
// //       setSelectedAdmins(newSelectedAdmins)
// //     } else {
// //       setSelectedAdmins(new Set())
// //     }
// //   }

// //   const handleAdminSelection = (id) => {
// //     const newSelectedAdmins = new Set(selectedAdmins)
// //     if (newSelectedAdmins.has(id)) {
// //       newSelectedAdmins.delete(id)
// //     } else {
// //       newSelectedAdmins.add(id)
// //     }
// //     setSelectedAdmins(newSelectedAdmins)
// //   }

// //   const handleDeleteSelected = () => {
// //     if (selectedAdmins.size === 0) return

// //     if (window.confirm(`Are you sure you want to delete ${selectedAdmins.size} selected admin(s)?`)) {
// //       // Filter out selected admins
// //       const updatedAdmins = admins.filter((admin) => !selectedAdmins.has(admin.id))
// //       setAdmins(updatedAdmins)
// //       setSelectedAdmins(new Set())
// //     }
// //   }

// //   const handleSearch = (e) => {
// //     setSearchTerm(e.target.value)
// //     setCurrentPage(0) // Reset to first page when searching
// //   }

// //   // Filter admins based on search term
// //   const filteredAdmins = admins.filter(
// //     (admin) =>
// //       admin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //       admin.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //       admin.roles.toLowerCase().includes(searchTerm.toLowerCase()),
// //   )

// //   // Pagination
// //   const startIndex = currentPage * adminsPerPage
// //   const displayedAdmins = filteredAdmins.slice(startIndex, startIndex + adminsPerPage)
// //   const totalPages = Math.ceil(filteredAdmins.length / adminsPerPage)

// //   const handlePageChange = (page) => {
// //     setCurrentPage(page)
// //   }

// //   return (
// //     <div>
// //       <TitleHead title="Admin Users" desc="Manage admin users" />

// //       <div className="mx-5 my-3 bg-white rounded-lg shadow-md hover:shadow-lg">
// //         <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border-b">
// //           <h2 className="text-xl font-semibold text-primary-900 mb-3 md:mb-0">
// //             <FaUserShield className="inline-block mr-2" />
// //             Admin User Management
// //           </h2>

// //           <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
// //             <div className="relative flex-grow">
// //               <input
// //                 type="text"
// //                 placeholder="Search users..."
// //                 value={searchTerm}
// //                 onChange={handleSearch}
// //                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 pl-10"
// //               />
// //               <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
// //             </div>

// //             <Link
// //               to="/edit-admin"
// //               className="bg-primary-900 text-white px-4 py-2 rounded-lg hover:bg-primary-800 transition-colors flex items-center justify-center"
// //             >
// //               <FaPlus className="mr-2" /> Add Admin
// //             </Link>
// //           </div>
// //         </div>

// //         <HeadingCard />

// //         {loading ? (
// //           <div className="p-8">
// //             <div className="animate-pulse space-y-4">
// //               {[...Array(5)].map((_, i) => (
// //                 <div key={i} className="h-12 bg-gray-200 rounded"></div>
// //               ))}
// //             </div>
// //           </div>
// //         ) : (
// //           <>
// //             <div className="overflow-x-auto scrollbar-custom">
// //               <table className="min-w-full bg-white">
// //                 <thead>
// //                   <tr className="text-[.7rem] md:text-[1rem]">
// //                     <th className="px-4 py-2 border bg-[#F8FAFD]">
// //                       <div className="flex items-center justify-center gap-1">
// //                         <input
// //                           type="checkbox"
// //                           className="h-4 w-4"
// //                           onChange={handleSelectAll}
// //                           checked={
// //                             displayedAdmins.length > 0 && displayedAdmins.every((admin) => selectedAdmins.has(admin.id))
// //                           }
// //                         />
// //                         <button
// //                           onClick={handleDeleteSelected}
// //                           disabled={selectedAdmins.size === 0}
// //                           className={`text-primary-900 ${
// //                             selectedAdmins.size === 0 ? "opacity-50 cursor-not-allowed" : "hover:text-red-600"
// //                           }`}
// //                         >
// //                           <FaTrashAlt />
// //                         </button>
// //                       </div>
// //                     </th>

// //                     <th className="px-4 py-2 border text-left">
// //                       <button
// //                         onClick={() => handleSort("name")}
// //                         className="flex items-center justify-between w-full gap-1"
// //                       >
// //                         <h1>Name</h1>
// //                         <div className="flex flex-col">
// //                           <TbTriangleFilled
// //                             className={`transition-colors text-[.5rem] ${
// //                               sortColumn === "name" && sortDirection === "asc" ? "text-gray-500" : "text-gray-300"
// //                             }`}
// //                           />
// //                           <TbTriangleInvertedFilled
// //                             className={`transition-colors text-[.5rem] ${
// //                               sortColumn === "name" && sortDirection === "desc" ? "text-gray-500" : "text-gray-300"
// //                             }`}
// //                           />
// //                         </div>
// //                       </button>
// //                     </th>

// //                     <th className="px-4 py-2 border text-left">
// //                       <button
// //                         onClick={() => handleSort("email")}
// //                         className="flex items-center justify-between w-full gap-1"
// //                       >
// //                         <h1>Email</h1>
// //                         <div className="flex flex-col">
// //                           <TbTriangleFilled
// //                             className={`transition-colors text-[.5rem] ${
// //                               sortColumn === "email" && sortDirection === "asc" ? "text-gray-500" : "text-gray-300"
// //                             }`}
// //                           />
// //                           <TbTriangleInvertedFilled
// //                             className={`transition-colors text-[.5rem] ${
// //                               sortColumn === "email" && sortDirection === "desc" ? "text-gray-500" : "text-gray-300"
// //                             }`}
// //                           />
// //                         </div>
// //                       </button>
// //                     </th>

// //                     <th className="px-4 py-2 border text-left">
// //                       <button
// //                         onClick={() => handleSort("roles")}
// //                         className="flex items-center justify-between w-full gap-1"
// //                       >
// //                         <h1>Role</h1>
// //                         <div className="flex flex-col">
// //                           <TbTriangleFilled
// //                             className={`transition-colors text-[.5rem] ${
// //                               sortColumn === "roles" && sortDirection === "asc" ? "text-gray-500" : "text-gray-300"
// //                             }`}
// //                           />
// //                           <TbTriangleInvertedFilled
// //                             className={`transition-colors text-[.5rem] ${
// //                               sortColumn === "roles" && sortDirection === "desc" ? "text-gray-500" : "text-gray-300"
// //                             }`}
// //                           />
// //                         </div>
// //                       </button>
// //                     </th>

// //                     <th className="px-4 py-2 border text-left">
// //                       <button
// //                         onClick={() => handleSort("status")}
// //                         className="flex items-center justify-between w-full gap-1"
// //                       >
// //                         <h1>Status</h1>
// //                         <div className="flex flex-col">
// //                           <TbTriangleFilled
// //                             className={`transition-colors text-[.5rem] ${
// //                               sortColumn === "status" && sortDirection === "asc" ? "text-gray-500" : "text-gray-300"
// //                             }`}
// //                           />
// //                           <TbTriangleInvertedFilled
// //                             className={`transition-colors text-[.5rem] ${
// //                               sortColumn === "status" && sortDirection === "desc" ? "text-gray-500" : "text-gray-300"
// //                             }`}
// //                           />
// //                         </div>
// //                       </button>
// //                     </th>

// //                     <th className="px-4 py-2 border text-left bg-[#F8FAFD]">Actions</th>
// //                   </tr>
// //                 </thead>

// //                 <tbody>
// //                   {displayedAdmins.map((admin) => (
// //                     <tr key={admin.id} className="hover:bg-gray-100 transition-colors">
// //                       <td className="px-4 py-2 border w-10 text-center">
// //                         <input
// //                           type="checkbox"
// //                           checked={selectedAdmins.has(admin.id)}
// //                           onChange={() => handleAdminSelection(admin.id)}
// //                           className="h-4 w-4"
// //                         />
// //                       </td>

// //                       <td className="px-4 py-2 border text-left font-medium text-primary-900">{admin.name}</td>

// //                       <td className="px-4 py-2 border text-left">{admin.email}</td>

// //                       <td className="px-4 py-2 border text-left">
// //                         <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
// //                           {admin.roles}
// //                         </span>
// //                       </td>

// //                       <td className="px-4 py-2 border text-left">
// //                         <span
// //                           className={`px-2 py-1 rounded-full text-xs font-medium ${
// //                             admin.status ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
// //                           }`}
// //                         >
// //                           {admin.status ? "Active" : "Inactive"}
// //                         </span>
// //                       </td>

// //                       <td className="px-4 py-2 border text-left">
// //                         <div className="flex space-x-2">
// //                           <Link
// //                             to={`/admin-view/${admin.id}`}
// //                             className="p-1 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
// //                             title="View Admin"
// //                           >
// //                             <FaEye />
// //                           </Link>

// //                           <Link
// //                             to={`/edit-admin/${admin.id}`}
// //                             className="p-1 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
// //                             title="Edit Admin"
// //                           >
// //                             <MdModeEdit />
// //                           </Link>

// //                           <button
// //                             onClick={() => {
// //                               if (window.confirm("Are you sure you want to delete this admin?")) {
// //                                 setAdmins(admins.filter((a) => a.id !== admin.id))
// //                               }
// //                             }}
// //                             className="p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
// //                             title="Delete Admin"
// //                           >
// //                             <FaTrashAlt />
// //                           </button>
// //                         </div>
// //                       </td>
// //                     </tr>
// //                   ))}

// //                   {displayedAdmins.length === 0 && (
// //                     <tr>
// //                       <td colSpan="6" className="px-4 py-8 text-center text-gray-500">
// //                         {searchTerm ? "No admins found matching your search." : "No admins available."}
// //                       </td>
// //                     </tr>
// //                   )}
// //                 </tbody>
// //               </table>
// //             </div>

// //             <DataTableInfo
// //               entries={displayedAdmins.length}
// //               totalentries={filteredAdmins.length}
// //               currentPage={currentPage + 1}
// //               totalPages={totalPages}
// //               onPageChange={handlePageChange}
// //             />
// //           </>
// //         )}
// //       </div>
// //     </div>
// //   )
// // }

// // export default AdminUser




// import { useState, useEffect } from "react"
// import { Link } from "react-router-dom"
// import { FaTrashAlt, FaPlus, FaSearch, FaUserShield, FaEye } from "react-icons/fa"
// import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb"
// import { MdModeEdit } from "react-icons/md"
// import { toast } from "react-toastify"

// import HeadingCard from "../AllCards/HeadingCard"
// import DataTableInfo from "../Dashboard/DashboardCards/DataTableInfo"
// import TitleHead from "../Header/TitleHead"

// const initialAdmins = [
//   {
//     id: 1,
//     email: "admin@example.com",
//     roles: "Super Administrator",
//     name: "John Doe",
//     lastLogin: "2023-08-15T10:30:00Z",
//     status: true,
//   },
//   {
//     id: 2,
//     email: "manager@example.com",
//     roles: "Administrator",
//     name: "Jane Smith",
//     lastLogin: "2023-08-14T08:45:00Z",
//     status: true,
//   },
//   {
//     id: 3,
//     email: "support@example.com",
//     roles: "Support",
//     name: "Robert Johnson",
//     lastLogin: "2023-08-10T14:20:00Z",
//     status: false,
//   },
//   {
//     id: 4,
//     email: "content@example.com",
//     roles: "Content Manager",
//     name: "Emily Davis",
//     lastLogin: "2023-08-12T09:15:00Z",
//     status: true,
//   },
//   {
//     id: 5,
//     email: "finance@example.com",
//     roles: "Finance Manager",
//     name: "Michael Wilson",
//     lastLogin: "2023-08-11T11:30:00Z",
//     status: true,
//   },
// ]

// const AdminUser = () => {
//   const [admins, setAdmins] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [sortColumn, setSortColumn] = useState("name")
//   const [sortDirection, setSortDirection] = useState("asc")
//   const [currentPage, setCurrentPage] = useState(0)
//   const [selectedAdmins, setSelectedAdmins] = useState(new Set())
//   const [searchTerm, setSearchTerm] = useState("")
//   const adminsPerPage = 10

//   useEffect(() => {
//     // Simulate API call
//     setLoading(true)
//     setTimeout(() => {
//       setAdmins(initialAdmins)
//       setLoading(false)
//       toast.success("Admin users loaded successfully")
//     }, 800)
//   }, [])

//   const handleSort = (column) => {
//     const newDirection = column === sortColumn && sortDirection === "asc" ? "desc" : "asc"
//     const sortedAdmins = [...admins].sort((a, b) => {
//       if (a[column] < b[column]) return newDirection === "asc" ? -1 : 1
//       if (a[column] > b[column]) return newDirection === "asc" ? 1 : -1
//       return 0
//     })
//     setAdmins(sortedAdmins)
//     setSortDirection(newDirection)
//     setSortColumn(column)
//   }

//   const handleSelectAll = (e) => {
//     if (e.target.checked) {
//       const newSelectedAdmins = new Set(filteredAdmins.map((admin) => admin.id))
//       setSelectedAdmins(newSelectedAdmins)
//     } else {
//       setSelectedAdmins(new Set())
//     }
//   }

//   const handleAdminSelection = (id) => {
//     const newSelectedAdmins = new Set(selectedAdmins)
//     if (newSelectedAdmins.has(id)) {
//       newSelectedAdmins.delete(id)
//     } else {
//       newSelectedAdmins.add(id)
//     }
//     setSelectedAdmins(newSelectedAdmins)
//   }

//   const handleDeleteSelected = () => {
//     if (selectedAdmins.size === 0) return

//     if (window.confirm(`Are you sure you want to delete ${selectedAdmins.size} selected admin(s)?`)) {
//       // Filter out selected admins
//       const updatedAdmins = admins.filter((admin) => !selectedAdmins.has(admin.id))
//       setAdmins(updatedAdmins)
//       setSelectedAdmins(new Set())
//       toast.success(`${selectedAdmins.size} admin user(s) deleted successfully`)
//     }
//   }

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value)
//     setCurrentPage(0) // Reset to first page when searching
//   }

//   const handleStatusToggle = (id) => {
//     const updatedAdmins = admins.map((admin) => (admin.id === id ? { ...admin, status: !admin.status } : admin))
//     setAdmins(updatedAdmins)
//     const admin = admins.find((a) => a.id === id)
//     toast.info(`Admin "${admin.name}" status changed to ${!admin.status ? "Active" : "Inactive"}`)
//   }

//   // Filter admins based on search term
//   const filteredAdmins = admins.filter(
//     (admin) =>
//       admin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       admin.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       admin.roles.toLowerCase().includes(searchTerm.toLowerCase()),
//   )

//   // Pagination
//   const startIndex = currentPage * adminsPerPage
//   const displayedAdmins = filteredAdmins.slice(startIndex, startIndex + adminsPerPage)
//   const totalPages = Math.ceil(filteredAdmins.length / adminsPerPage)

//   const handlePageChange = (page) => {
//     setCurrentPage(page)
//   }

//   return (
//     <div>
//       <TitleHead title="Admin Users" desc="Manage admin users" />

//       <div className="mx-5 my-3 bg-white rounded-lg shadow-md hover:shadow-lg">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border-b">
//           <h2 className="text-xl font-semibold text-primary-900 mb-3 md:mb-0">
//             <FaUserShield className="inline-block mr-2" />
//             Admin User Management
//           </h2>

//           <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
//             <div className="relative flex-grow">
//               <input
//                 type="text"
//                 placeholder="Search users..."
//                 value={searchTerm}
//                 onChange={handleSearch}
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 pl-10"
//               />
//               <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             </div>

//             <Link
//               to="/edit-admin"
//               className="bg-primary-900 text-white px-4 py-2 rounded-lg hover:bg-primary-800 transition-colors flex items-center justify-center"
//             >
//               <FaPlus className="mr-2" /> Add Admin
//             </Link>
//           </div>
//         </div>

//         <HeadingCard />

//         {loading ? (
//           <div className="p-8">
//             <div className="animate-pulse space-y-4">
//               {[...Array(5)].map((_, i) => (
//                 <div key={i} className="h-12 bg-gray-200 rounded"></div>
//               ))}
//             </div>
//           </div>
//         ) : (
//           <>
//             <div className="overflow-x-auto scrollbar-custom">
//               <table className="min-w-full bg-white">
//                 <thead>
//                   <tr className="text-[.7rem] md:text-[1rem]">
//                     <th className="px-4 py-2 border bg-[#F8FAFD]">
//                       <div className="flex items-center justify-center gap-1">
//                         <input
//                           type="checkbox"
//                           className="h-4 w-4"
//                           onChange={handleSelectAll}
//                           checked={
//                             displayedAdmins.length > 0 && displayedAdmins.every((admin) => selectedAdmins.has(admin.id))
//                           }
//                         />
//                         <button
//                           onClick={handleDeleteSelected}
//                           disabled={selectedAdmins.size === 0}
//                           className={`text-primary-900 ${
//                             selectedAdmins.size === 0 ? "opacity-50 cursor-not-allowed" : "hover:text-red-600"
//                           }`}
//                         >
//                           <FaTrashAlt />
//                         </button>
//                       </div>
//                     </th>

//                     <th className="px-4 py-2 border text-left">
//                       <button
//                         onClick={() => handleSort("name")}
//                         className="flex items-center justify-between w-full gap-1"
//                       >
//                         <h1>Name</h1>
//                         <div className="flex flex-col">
//                           <TbTriangleFilled
//                             className={`transition-colors text-[.5rem] ${
//                               sortColumn === "name" && sortDirection === "asc" ? "text-gray-500" : "text-gray-300"
//                             }`}
//                           />
//                           <TbTriangleInvertedFilled
//                             className={`transition-colors text-[.5rem] ${
//                               sortColumn === "name" && sortDirection === "desc" ? "text-gray-500" : "text-gray-300"
//                             }`}
//                           />
//                         </div>
//                       </button>
//                     </th>

//                     <th className="px-4 py-2 border text-left">
//                       <button
//                         onClick={() => handleSort("email")}
//                         className="flex items-center justify-between w-full gap-1"
//                       >
//                         <h1>Email</h1>
//                         <div className="flex flex-col">
//                           <TbTriangleFilled
//                             className={`transition-colors text-[.5rem] ${
//                               sortColumn === "email" && sortDirection === "asc" ? "text-gray-500" : "text-gray-300"
//                             }`}
//                           />
//                           <TbTriangleInvertedFilled
//                             className={`transition-colors text-[.5rem] ${
//                               sortColumn === "email" && sortDirection === "desc" ? "text-gray-500" : "text-gray-300"
//                             }`}
//                           />
//                         </div>
//                       </button>
//                     </th>

//                     <th className="px-4 py-2 border text-left">
//                       <button
//                         onClick={() => handleSort("roles")}
//                         className="flex items-center justify-between w-full gap-1"
//                       >
//                         <h1>Role</h1>
//                         <div className="flex flex-col">
//                           <TbTriangleFilled
//                             className={`transition-colors text-[.5rem] ${
//                               sortColumn === "roles" && sortDirection === "asc" ? "text-gray-500" : "text-gray-300"
//                             }`}
//                           />
//                           <TbTriangleInvertedFilled
//                             className={`transition-colors text-[.5rem] ${
//                               sortColumn === "roles" && sortDirection === "desc" ? "text-gray-500" : "text-gray-300"
//                             }`}
//                           />
//                         </div>
//                       </button>
//                     </th>

//                     <th className="px-4 py-2 border text-left">
//                       <button
//                         onClick={() => handleSort("status")}
//                         className="flex items-center justify-between w-full gap-1"
//                       >
//                         <h1>Status</h1>
//                         <div className="flex flex-col">
//                           <TbTriangleFilled
//                             className={`transition-colors text-[.5rem] ${
//                               sortColumn === "status" && sortDirection === "asc" ? "text-gray-500" : "text-gray-300"
//                             }`}
//                           />
//                           <TbTriangleInvertedFilled
//                             className={`transition-colors text-[.5rem] ${
//                               sortColumn === "status" && sortDirection === "desc" ? "text-gray-500" : "text-gray-300"
//                             }`}
//                           />
//                         </div>
//                       </button>
//                     </th>

//                     <th className="px-4 py-2 border text-left bg-[#F8FAFD]">Actions</th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {displayedAdmins.map((admin) => (
//                     <tr key={admin.id} className="hover:bg-gray-100 transition-colors">
//                       <td className="px-4 py-2 border w-10 text-center">
//                         <input
//                           type="checkbox"
//                           checked={selectedAdmins.has(admin.id)}
//                           onChange={() => handleAdminSelection(admin.id)}
//                           className="h-4 w-4"
//                         />
//                       </td>

//                       <td className="px-4 py-2 border text-left font-medium text-primary-900">{admin.name}</td>

//                       <td className="px-4 py-2 border text-left">{admin.email}</td>

//                       <td className="px-4 py-2 border text-left">
//                         <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
//                           {admin.roles}
//                         </span>
//                       </td>

//                       <td className="px-4 py-2 border text-left">
//                         <div className="flex items-center justify-center">
//                           <div
//                             onClick={() => handleStatusToggle(admin.id)}
//                             className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer ${
//                               admin.status ? "bg-green-500" : "bg-gray-400"
//                             }`}
//                           >
//                             <div
//                               className={`bg-white w-4 h-4 rounded-full shadow-md transform ${
//                                 admin.status ? "translate-x-5" : ""
//                               } transition-transform duration-300`}
//                             ></div>
//                           </div>
//                         </div>
//                       </td>

//                       <td className="px-4 py-2 border text-left">
//                         <div className="flex space-x-2">
//                           <Link
//                             to={`/admin-view/${admin.id}`}
//                             className="p-1 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
//                             title="View Admin"
//                           >
//                             <FaEye />
//                           </Link>

//                           <Link
//                             to={`/edit-admin/${admin.id}`}
//                             className="p-1 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
//                             title="Edit Admin"
//                           >
//                             <MdModeEdit />
//                           </Link>

//                           <button
//                             onClick={() => {
//                               if (window.confirm("Are you sure you want to delete this admin?")) {
//                                 setAdmins(admins.filter((a) => a.id !== admin.id))
//                                 toast.success(`Admin "${admin.name}" deleted successfully`)
//                               }
//                             }}
//                             className="p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
//                             title="Delete Admin"
//                           >
//                             <FaTrashAlt />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}

//                   {displayedAdmins.length === 0 && (
//                     <tr>
//                       <td colSpan="6" className="px-4 py-8 text-center text-gray-500">
//                         {searchTerm ? "No admins found matching your search." : "No admins available."}
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>

//             <DataTableInfo
//               entries={displayedAdmins.length}
//               totalentries={filteredAdmins.length}
//               currentPage={currentPage + 1}
//               totalPages={totalPages}
//               onPageChange={handlePageChange}
//             />
//           </>
//         )}
//       </div>
//     </div>
//   )
// }

// export default AdminUser


"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FaTrashAlt, FaPlus, FaSearch, FaUserShield, FaEye } from "react-icons/fa"
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb"
import { MdModeEdit } from "react-icons/md"
import { toast } from "react-toastify"

import HeadingCard from "../AllCards/HeadingCard"
import DataTableInfo from "../Dashboard/DashboardCards/DataTableInfo"
import TitleHead from "../Header/TitleHead"

const initialAdmins = [
  {
    id: 1,
    email: "admin@example.com",
    roles: "Super Administrator",
    name: "John Doe",
    lastLogin: "2023-08-15T10:30:00Z",
    status: true,
  },
  {
    id: 2,
    email: "manager@example.com",
    roles: "Administrator",
    name: "Jane Smith",
    lastLogin: "2023-08-14T08:45:00Z",
    status: true,
  },
  {
    id: 3,
    email: "support@example.com",
    roles: "Support",
    name: "Robert Johnson",
    lastLogin: "2023-08-10T14:20:00Z",
    status: false,
  },
  {
    id: 4,
    email: "content@example.com",
    roles: "Content Manager",
    name: "Emily Davis",
    lastLogin: "2023-08-12T09:15:00Z",
    status: true,
  },
  {
    id: 5,
    email: "finance@example.com",
    roles: "Finance Manager",
    name: "Michael Wilson",
    lastLogin: "2023-08-11T11:30:00Z",
    status: true,
  },
]

const AdminUser = () => {
  const [admins, setAdmins] = useState([])
  const [loading, setLoading] = useState(true)
  const [sortColumn, setSortColumn] = useState("name")
  const [sortDirection, setSortDirection] = useState("asc")
  const [currentPage, setCurrentPage] = useState(0)
  const [selectedAdmins, setSelectedAdmins] = useState(new Set())
  const [searchTerm, setSearchTerm] = useState("")
  const adminsPerPage = 10

  useEffect(() => {
    // Simulate API call
    setLoading(true)
    setTimeout(() => {
      setAdmins(initialAdmins)
      setLoading(false)
      toast.success("Admin users loaded successfully")
    }, 800)
  }, [])

  const handleSort = (column) => {
    const newDirection = column === sortColumn && sortDirection === "asc" ? "desc" : "asc"
    const sortedAdmins = [...admins].sort((a, b) => {
      if (a[column] < b[column]) return newDirection === "asc" ? -1 : 1
      if (a[column] > b[column]) return newDirection === "asc" ? 1 : -1
      return 0
    })
    setAdmins(sortedAdmins)
    setSortDirection(newDirection)
    setSortColumn(column)
  }

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const newSelectedAdmins = new Set(filteredAdmins.map((admin) => admin.id))
      setSelectedAdmins(newSelectedAdmins)
    } else {
      setSelectedAdmins(new Set())
    }
  }

  const handleAdminSelection = (id) => {
    const newSelectedAdmins = new Set(selectedAdmins)
    if (newSelectedAdmins.has(id)) {
      newSelectedAdmins.delete(id)
    } else {
      newSelectedAdmins.add(id)
    }
    setSelectedAdmins(newSelectedAdmins)
  }

  const handleDeleteSelected = () => {
    if (selectedAdmins.size === 0) return

    if (window.confirm(`Are you sure you want to delete ${selectedAdmins.size} selected admin(s)?`)) {
      // Filter out selected admins
      const updatedAdmins = admins.filter((admin) => !selectedAdmins.has(admin.id))
      setAdmins(updatedAdmins)
      setSelectedAdmins(new Set())
      toast.success(`${selectedAdmins.size} admin user(s) deleted successfully`)
    }
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
    setCurrentPage(0) // Reset to first page when searching
  }

  const handleStatusToggle = (id) => {
    const updatedAdmins = admins.map((admin) => (admin.id === id ? { ...admin, status: !admin.status } : admin))
    setAdmins(updatedAdmins)
    const admin = admins.find((a) => a.id === id)
    toast.info(`Admin "${admin.name}" status changed to ${!admin.status ? "Active" : "Inactive"}`)
  }

  // Filter admins based on search term
  const filteredAdmins = admins.filter(
    (admin) =>
      admin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admin.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admin.roles.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Pagination
  const startIndex = currentPage * adminsPerPage
  const displayedAdmins = filteredAdmins.slice(startIndex, startIndex + adminsPerPage)
  const totalPages = Math.ceil(filteredAdmins.length / adminsPerPage)

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <div>
      <TitleHead title="Admin Users" desc="Manage admin users" />

      <div className="mx-5 my-3 bg-white rounded-lg shadow-md hover:shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-primary-900 mb-3 md:mb-0">
            <FaUserShield className="inline-block mr-2" />
            Admin User Management
          </h2>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 pl-10"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            <Link
              to="/edit-admin"
              className="bg-primary-900 text-white px-4 py-2 rounded-lg hover:bg-primary-800 transition-colors flex items-center justify-center"
            >
              <FaPlus className="mr-2" /> Add Admin
            </Link>
          </div>
        </div>

        <HeadingCard />

        {loading ? (
          <div className="p-8">
            <div className="animate-pulse space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-12 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto scrollbar-custom">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="text-[.7rem] md:text-[1rem]">
                    <th className="px-4 py-2 border bg-[#F8FAFD]">
                      <div className="flex items-center justify-center gap-1">
                        <input
                          type="checkbox"
                          className="h-4 w-4"
                          onChange={handleSelectAll}
                          checked={
                            displayedAdmins.length > 0 && displayedAdmins.every((admin) => selectedAdmins.has(admin.id))
                          }
                        />
                        <button
                          onClick={handleDeleteSelected}
                          disabled={selectedAdmins.size === 0}
                          className={`text-primary-900 ${
                            selectedAdmins.size === 0 ? "opacity-50 cursor-not-allowed" : "hover:text-red-600"
                          }`}
                        >
                          <FaTrashAlt />
                        </button>
                      </div>
                    </th>

                    <th className="px-4 py-2 border text-left">
                      <button
                        onClick={() => handleSort("name")}
                        className="flex items-center justify-between w-full gap-1"
                      >
                        <h1>Name</h1>
                        <div className="flex flex-col">
                          <TbTriangleFilled
                            className={`transition-colors text-[.5rem] ${
                              sortColumn === "name" && sortDirection === "asc" ? "text-gray-500" : "text-gray-300"
                            }`}
                          />
                          <TbTriangleInvertedFilled
                            className={`transition-colors text-[.5rem] ${
                              sortColumn === "name" && sortDirection === "desc" ? "text-gray-500" : "text-gray-300"
                            }`}
                          />
                        </div>
                      </button>
                    </th>

                    <th className="px-4 py-2 border text-left">
                      <button
                        onClick={() => handleSort("email")}
                        className="flex items-center justify-between w-full gap-1"
                      >
                        <h1>Email</h1>
                        <div className="flex flex-col">
                          <TbTriangleFilled
                            className={`transition-colors text-[.5rem] ${
                              sortColumn === "email" && sortDirection === "asc" ? "text-gray-500" : "text-gray-300"
                            }`}
                          />
                          <TbTriangleInvertedFilled
                            className={`transition-colors text-[.5rem] ${
                              sortColumn === "email" && sortDirection === "desc" ? "text-gray-500" : "text-gray-300"
                            }`}
                          />
                        </div>
                      </button>
                    </th>

                    <th className="px-4 py-2 border text-left">
                      <button
                        onClick={() => handleSort("roles")}
                        className="flex items-center justify-between w-full gap-1"
                      >
                        <h1>Role</h1>
                        <div className="flex flex-col">
                          <TbTriangleFilled
                            className={`transition-colors text-[.5rem] ${
                              sortColumn === "roles" && sortDirection === "asc" ? "text-gray-500" : "text-gray-300"
                            }`}
                          />
                          <TbTriangleInvertedFilled
                            className={`transition-colors text-[.5rem] ${
                              sortColumn === "roles" && sortDirection === "desc" ? "text-gray-500" : "text-gray-300"
                            }`}
                          />
                        </div>
                      </button>
                    </th>

                    <th className="px-4 py-2 border text-left">
                      <button
                        onClick={() => handleSort("status")}
                        className="flex items-center justify-between w-full gap-1"
                      >
                        <h1>Status</h1>
                        <div className="flex flex-col">
                          <TbTriangleFilled
                            className={`transition-colors text-[.5rem] ${
                              sortColumn === "status" && sortDirection === "asc" ? "text-gray-500" : "text-gray-300"
                            }`}
                          />
                          <TbTriangleInvertedFilled
                            className={`transition-colors text-[.5rem] ${
                              sortColumn === "status" && sortDirection === "desc" ? "text-gray-500" : "text-gray-300"
                            }`}
                          />
                        </div>
                      </button>
                    </th>

                    <th className="px-4 py-2 border text-left bg-[#F8FAFD]">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {displayedAdmins.map((admin) => (
                    <tr key={admin.id} className="hover:bg-gray-100 transition-colors">
                      <td className="px-4 py-2 border w-10 text-center">
                        <input
                          type="checkbox"
                          checked={selectedAdmins.has(admin.id)}
                          onChange={() => handleAdminSelection(admin.id)}
                          className="h-4 w-4"
                        />
                      </td>

                      <td className="px-4 py-2 border text-left font-medium text-primary-900">{admin.name}</td>

                      <td className="px-4 py-2 border text-left">{admin.email}</td>

                      <td className="px-4 py-2 border text-left">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                          {admin.roles}
                        </span>
                      </td>

                      <td className="px-4 py-2 border text-left">
                        <div className="flex items-center justify-center">
                          <div
                            onClick={() => handleStatusToggle(admin.id)}
                            className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer ${
                              admin.status ? "bg-green-500" : "bg-gray-400"
                            }`}
                          >
                            <div
                              className={`bg-white w-4 h-4 rounded-full shadow-md transform ${
                                admin.status ? "translate-x-5" : ""
                              } transition-transform duration-300`}
                            ></div>
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-2 border text-left">
                        <div className="flex space-x-2">
                          <Link
                            to={`/admin-view/${admin.id}`}
                            className="p-1 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                            title="View Admin"
                          >
                            <FaEye />
                          </Link>

                          <Link
                            to={`/edit-admin/${admin.id}`}
                            className="p-1 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
                            title="Edit Admin"
                          >
                            <MdModeEdit />
                          </Link>

                          <button
                            onClick={() => {
                              if (window.confirm("Are you sure you want to delete this admin?")) {
                                setAdmins(admins.filter((a) => a.id !== admin.id))
                                toast.success(`Admin "${admin.name}" deleted successfully`)
                              }
                            }}
                            className="p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                            title="Delete Admin"
                          >
                            <FaTrashAlt />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}

                  {displayedAdmins.length === 0 && (
                    <tr>
                      <td colSpan="6" className="px-4 py-8 text-center text-gray-500">
                        {searchTerm ? "No admins found matching your search." : "No admins available."}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <DataTableInfo
              entries={displayedAdmins.length}
              totalentries={filteredAdmins.length}
              currentPage={currentPage + 1}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default AdminUser
