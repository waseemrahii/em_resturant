
// import { useState } from "react"
// import Roles from "./Roles"
// import RolesDetalies from "./RolesDetalies"
// import AdminUser from "./AdminUser"
// import CreateAdmin from "./CreateAdmin"
// import { Routes, Route, useNavigate } from "react-router-dom"
// import { toast } from "react-toastify"

// const AccessControl = () => {
//   const [activeTab, setActiveTab] = useState("roles")
//   const navigate = useNavigate()

//   const handleTabChange = (tab) => {
//     setActiveTab(tab)
//     if (tab === "roles") {
//       navigate("/access-control/roles")
//       toast.info("Switched to Roles Management")
//     } else {
//       navigate("/access-control/admin-user")
//       toast.info("Switched to Admin User Management")
//     }
//   }

//   return (
//     <div>
//       <div className="mb-6 bg-white rounded-lg shadow-md p-4">
//         <div className="flex flex-wrap gap-2">
//           <button
//             onClick={() => handleTabChange("roles")}
//             className={`px-4 py-2 rounded-md transition-colors ${
//               activeTab === "roles" ? "bg-primary-900 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//             }`}
//           >
//             Roles Management
//           </button>
//           <button
//             onClick={() => handleTabChange("users")}
//             className={`px-4 py-2 rounded-md transition-colors ${
//               activeTab === "users" ? "bg-primary-900 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//             }`}
//           >
//             Admin Users
//           </button>
//         </div>
//       </div>

//       <Routes>
//         <Route path="/roles" element={<Roles />} />
//         <Route path="/roles-edit" element={<RolesDetalies />} />
//         <Route path="/roles-edit/:id" element={<RolesDetalies />} />
//         <Route path="/admin-user" element={<AdminUser />} />
//         <Route path="/edit-admin" element={<CreateAdmin />} />
//         <Route path="/edit-admin/:id" element={<CreateAdmin />} />
//       </Routes>
//     </div>
//   )
// }

// export default AccessControl

import { Routes, Route, Navigate } from "react-router-dom"
import AdminUser from "./AdminUser"
import Roles from "../AccessControl/Roles"
import RolesDetalies from "./RolesDetalies"

const AccessControl = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/access-control/admin-user" replace />} />
      <Route path="admin-user" element={<AdminUser />} />
      <Route path="roles" element={<Roles />} />
      <Route path="roles/create" element={<RolesDetalies />} />
      <Route path="roles/edit/:id" element={<RolesDetalies />} />
      <Route path="roles/view/:id" element={<RolesDetalies />} />
    </Routes>
  )
}

export default AccessControl
