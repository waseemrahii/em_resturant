
// import { useState, useEffect } from "react"
// import { Link, useNavigate } from "react-router-dom"
// import { FaTrashAlt, FaPlus, FaEye, FaEdit, FaUsersCog, FaUserShield, FaUsers } from "react-icons/fa"
// import { toast } from "react-toastify"
// import TableList from "../common/TableList"
// import ToggleSwitch from "../common/ToggleSwitch"
// import ActionButton from "../common/ActionButton"

// const initialRoles = [
//   {
//     id: 1,
//     name: "Super Administrator",
//     permissions: 45,
//     users: 2,
//     createdAt: "2023-05-15T10:30:00Z",
//     status: true,
//   },
//   {
//     id: 2,
//     name: "Administrator",
//     permissions: 35,
//     users: 3,
//     createdAt: "2023-04-10T08:15:00Z",
//     status: true,
//   },
//   {
//     id: 3,
//     name: "Support",
//     permissions: 20,
//     users: 5,
//     createdAt: "2023-03-22T14:45:00Z",
//     status: true,
//   },
//   {
//     id: 4,
//     name: "Content Manager",
//     permissions: 15,
//     users: 4,
//     createdAt: "2023-06-05T09:20:00Z",
//     status: false,
//   },
//   {
//     id: 5,
//     name: "Finance Manager",
//     permissions: 12,
//     users: 2,
//     createdAt: "2023-07-12T11:10:00Z",
//     status: true,
//   },
// ]

// const Roles = () => {
//   const [roles, setRoles] = useState([])
//   const [loading, setLoading] = useState(true)
//   const navigate = useNavigate()

//   useEffect(() => {
//     // Simulate API call
//     setLoading(true)
//     setTimeout(() => {
//       setRoles(initialRoles)
//       setLoading(false)
//       toast.success("Roles loaded successfully")
//     }, 800)
//   }, [])

//   const handleStatusToggle = (id) => {
//     const updatedRoles = roles.map((role) => (role.id === id ? { ...role, status: !role.status } : role))
//     setRoles(updatedRoles)
//     const role = roles.find((r) => r.id === id)
//     toast.info(`Role "${role.name}" status changed to ${!role.status ? "Active" : "Inactive"}`)
//   }

//   const handleDelete = (item) => {
//     if (window.confirm(`Are you sure you want to delete ${item.name}?`)) {
//       setRoles(roles.filter((r) => r.id !== item.id))
//       toast.success(`Role "${item.name}" deleted successfully`)
//     }
//   }

//   const handleBulkDelete = (selectedItems) => {
//     if (window.confirm(`Are you sure you want to delete ${selectedItems.size} selected role(s)?`)) {
//       setRoles(roles.filter((role) => !selectedItems.has(role.id)))
//       toast.success(`${selectedItems.size} role(s) deleted successfully`)
//     }
//   }

//   const columns = [
//     {
//       key: "name",
//       label: "Role Name",
//       sortable: true,
//       render: (item) => <span className="font-medium text-primary-900">{item.name}</span>,
//     },
//     {
//       key: "status",
//       label: "Status",
//       sortable: true,
//       render: (item) => (
//         <div className="flex justify-center">
//           <ToggleSwitch
//             isOn={item.status}
//             onToggle={() => handleStatusToggle(item.id)}
//             size="small"
//             showLabels={false}
//           />
//         </div>
//       ),
//     },
//     {
//       key: "permissions",
//       label: "Permissions",
//       sortable: true,
//       render: (item) => (
//         <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
//           {item.permissions} permissions
//         </span>
//       ),
//     },
//     {
//       key: "users",
//       label: "Users",
//       sortable: true,
//       render: (item) => (
//         <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
//           {item.users} users
//         </span>
//       ),
//     },
//   ]

//   // Update action buttons to use valid routes
//   const actionButtons = [
//     {
//       icon: <FaEye />,
//       title: "View Role",
//       onClick: (item) => {
//         navigate("/roles-edit") // Use existing route
//       },
//       variant: "info",
//     },
//     {
//       icon: <FaEdit />,
//       title: "Edit Role",
//       onClick: (item) => {
//         navigate("/roles-edit") // Use existing route
//       },
//       variant: "success",
//     },
//     {
//       icon: <FaTrashAlt />,
//       title: "Delete Role",
//       onClick: handleDelete,
//       variant: "danger",
//     },
//   ]

//   const bulkActions = [
//     {
//       key: "delete",
//       label: "Delete Selected",
//       icon: <FaTrashAlt />,
//       onClick: handleBulkDelete,
//     },
//   ]

//   // Sample permission categories for the expandable row
//   const permissionCategories = [
//     { name: "Dashboard", count: 3 },
//     { name: "Users", count: 5 },
//     { name: "Restaurants", count: 8 },
//     { name: "Orders", count: 6 },
//     { name: "Payments", count: 4 },
//     { name: "Settings", count: 10 },
//   ]

//   const expandableRow = (item) => (
//     <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg m-2">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div className="bg-white p-4 rounded-lg shadow-sm">
//           <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
//             <FaUserShield className="mr-2 text-purple-500" /> Role Details
//           </h3>
//           <div className="space-y-2">
//             <p className="text-sm text-gray-600">
//               <span className="font-medium">ID:</span> {item.id}
//             </p>
//             <p className="text-sm text-gray-600">
//               <span className="font-medium">Created:</span> {new Date(item.createdAt).toLocaleDateString()}
//             </p>
//             <p className="text-sm text-gray-600">
//               <span className="font-medium">Status:</span>{" "}
//               <span className={item.status ? "text-green-600" : "text-red-600"}>
//                 {item.status ? "Active" : "Inactive"}
//               </span>
//             </p>
//           </div>
//         </div>

//         <div className="bg-white p-4 rounded-lg shadow-sm">
//           <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
//             <FaUsersCog className="mr-2 text-purple-500" /> Permission Categories
//           </h3>
//           <div className="space-y-2">
//             {permissionCategories.map((category, index) => (
//               <div key={index} className="flex justify-between items-center">
//                 <span className="text-sm text-gray-600">{category.name}:</span>
//                 <span className="font-medium text-purple-600">{category.count}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="bg-white p-4 rounded-lg shadow-sm">
//           <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
//             <FaUsers className="mr-2 text-purple-500" /> Assigned Users
//           </h3>
//           <div className="space-y-2">
//             <div className="flex justify-between items-center">
//               <span className="text-sm text-gray-600">Total Users:</span>
//               <span className="font-medium text-purple-600">{item.users}</span>
//             </div>
//             <div className="flex justify-between items-center">
//               <span className="text-sm text-gray-600">Active Users:</span>
//               <span className="font-medium text-green-600">{Math.floor(item.users * 0.8)}</span>
//             </div>
//             <div className="flex justify-between items-center">
//               <span className="text-sm text-gray-600">Inactive Users:</span>
//               <span className="font-medium text-red-600">{Math.floor(item.users * 0.2)}</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="mt-4 flex justify-end space-x-2">
//         <ActionButton
//           icon={<FaEdit />}
//           label="Edit Role"
//           showLabel={true}
//           variant="success"
//           onClick={() => console.log("Edit", item)}
//         />
//         <ActionButton
//           icon={<FaEye />}
//           label="View Permissions"
//           showLabel={true}
//           variant="primary"
//           onClick={() => console.log("View Permissions", item)}
//         />
//       </div>
//     </div>
//   )

//   return (
//     <div>
//       <div className="mb-4 flex justify-end">
//         <Link
//           to="/roles-create"
//           className="bg-primary-900 text-white px-4 py-2 rounded-lg hover:bg-primary-800 transition-colors flex items-center justify-center"
//         >
//           <FaPlus className="mr-2" /> Add Role
//         </Link>
//       </div>

//       <TableList
//         data={roles}
//         columns={columns}
//         title="Role Management"
//         description="View and manage all user roles"
//         searchPlaceholder="Search roles..."
//         loading={loading}
//         actionButtons={actionButtons}
//         bulkActions={bulkActions}
//         expandableRow={expandableRow}
//         emptyStateMessage="No roles found"
//         emptyStateIcon={<FaUsersCog className="w-16 h-16 text-gray-300" />}
//       />
//     </div>
//   )
// }

// export default Roles


"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FaTrashAlt, FaPlus, FaEye, FaEdit, FaUsersCog, FaUserShield } from "react-icons/fa"
import { toast } from "react-toastify"
import TableList from "../common/TableList"
import ToggleSwitch from "../common/ToggleSwitch"
import ActionButton from "../common/ActionButton"
import { useGetAllRolesQuery, useDeleteRoleMutation, useUpdateRoleMutation } from "../../redux/services/roleService"

const Roles = () => {
  const navigate = useNavigate()
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortField, setSortField] = useState("name")
  const [sortDirection, setSortDirection] = useState("asc")

  // Fetch roles data
  const {
    data: rolesData,
    isLoading,
    refetch,
  } = useGetAllRolesQuery({
    page,
    limit,
    search: searchTerm,
    sort: `${sortDirection === "desc" ? "-" : ""}${sortField}`,
  })

  // Delete role mutation
  const [deleteRole, { isLoading: isDeleting }] = useDeleteRoleMutation()

  // Update role mutation (for status toggle)
  const [updateRole, { isLoading: isUpdating }] = useUpdateRoleMutation()

  // Extract roles and pagination from the response
  const roles = rolesData?.data || []
  const pagination = rolesData?.pagination || { page: 1, limit: 10, total: 0, pages: 0 }

  const handleStatusToggle = async (id) => {
    const role = roles.find((r) => r._id === id)
    if (!role) return

    try {
      await updateRole({
        id,
        isActive: !role.isActive,
      }).unwrap()

      toast.success(`Role "${role.name}" status changed to ${!role.isActive ? "Active" : "Inactive"}`)
      refetch()
    } catch (error) {
      console.error("Failed to update role status:", error)
      toast.error("Failed to update role status")
    }
  }

  const handleDelete = async (item) => {
    if (window.confirm(`Are you sure you want to delete ${item.name}?`)) {
      try {
        await deleteRole(item._id).unwrap()
        toast.success(`Role "${item.name}" deleted successfully`)
        refetch()
      } catch (error) {
        console.error("Failed to delete role:", error)
        toast.error(error.data?.message || "Failed to delete role")
      }
    }
  }

  const handleBulkDelete = async (selectedItems) => {
    if (window.confirm(`Are you sure you want to delete ${selectedItems.size} selected role(s)?`)) {
      try {
        const deletePromises = Array.from(selectedItems).map((id) => deleteRole(id).unwrap())
        await Promise.all(deletePromises)
        toast.success(`${selectedItems.size} role(s) deleted successfully`)
        refetch()
      } catch (error) {
        console.error("Failed to delete roles:", error)
        toast.error("Failed to delete one or more roles")
      }
    }
  }

  const handleSort = (field) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  const handlePageChange = (newPage) => {
    setPage(newPage)
  }

  const handleLimitChange = (newLimit) => {
    setLimit(newLimit)
    setPage(1) // Reset to first page when changing limit
  }

  const handleSearch = (term) => {
    setSearchTerm(term)
    setPage(1) // Reset to first page when searching
  }

  const columns = [
    {
      key: "name",
      label: "Role Name",
      sortable: true,
      render: (item) => <span className="font-medium text-primary-900">{item.name}</span>,
    },
    {
      key: "description",
      label: "Description",
      sortable: true,
      render: (item) => <span className="text-gray-600">{item.description || "No description"}</span>,
    },
    {
      key: "isActive",
      label: "Status",
      sortable: true,
      render: (item) => (
        <div className="flex justify-center">
          <ToggleSwitch
            isOn={item.isActive}
            onToggle={() => handleStatusToggle(item._id)}
            size="small"
            showLabels={false}
            disabled={isUpdating}
          />
        </div>
      ),
    },
    {
      key: "permissions",
      label: "Permissions",
      sortable: false,
      render: (item) => (
        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
          {item.permissions?.length || 0} permissions
        </span>
      ),
    },
    {
      key: "createdAt",
      label: "Created",
      sortable: true,
      render: (item) => <span className="text-gray-600">{new Date(item.createdAt).toLocaleDateString()}</span>,
    },
  ]

  // Action buttons for each row
  const actionButtons = [
    {
      icon: <FaEye />,
      title: "View Role",
      onClick: (item) => {
        navigate(`/access-control/roles/${item._id}`)
      },
      variant: "info",
    },
    {
      icon: <FaEdit />,
      title: "Edit Role",
      onClick: (item) => {
        navigate(`/access-control/roles/edit/${item._id}`)
      },
      variant: "success",
    },
    {
      icon: <FaTrashAlt />,
      title: "Delete Role",
      onClick: handleDelete,
      variant: "danger",
      disabled: isDeleting,
    },
  ]

  // Bulk actions
  const bulkActions = [
    {
      key: "delete",
      label: "Delete Selected",
      icon: <FaTrashAlt />,
      onClick: handleBulkDelete,
      disabled: isDeleting,
    },
  ]

  // Expandable row content
  const expandableRow = (item) => {
    // Group permissions by resource
    const permissionsByResource = {}

    item.permissions?.forEach((permission) => {
      permissionsByResource[permission.resource] = permission.actions
    })

    return (
      <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg m-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
              <FaUserShield className="mr-2 text-purple-500" /> Role Details
            </h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                <span className="font-medium">ID:</span> {item._id}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Created:</span> {new Date(item.createdAt).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Status:</span>{" "}
                <span className={item.isActive ? "text-green-600" : "text-red-600"}>
                  {item.isActive ? "Active" : "Inactive"}
                </span>
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm col-span-2">
            <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
              <FaUsersCog className="mr-2 text-purple-500" /> Permissions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {Object.entries(permissionsByResource).map(([resource, actions]) => (
                <div key={resource} className="border rounded-md p-2">
                  <div className="font-medium text-purple-700 capitalize mb-1">{resource}</div>
                  <div className="flex flex-wrap gap-1">
                    {actions.map((action) => (
                      <span
                        key={`${resource}-${action}`}
                        className="px-2 py-0.5 bg-purple-100 text-purple-800 rounded text-xs capitalize"
                      >
                        {action}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-end space-x-2">
          <ActionButton
            icon={<FaEdit />}
            label="Edit Role"
            showLabel={true}
            variant="success"
            onClick={() => navigate(`/access-control/roles/edit/${item._id}`)}
          />
          <ActionButton
            icon={<FaEye />}
            label="View Permissions"
            showLabel={true}
            variant="primary"
            onClick={() => navigate(`/access-control/roles/${item._id}`)}
          />
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-4 flex justify-end">
        <Link
          to="/access-control/roles/create"
          className="bg-primary-900 text-white px-4 py-2 rounded-lg hover:bg-primary-800 transition-colors flex items-center justify-center"
        >
          <FaPlus className="mr-2" /> Add Role
        </Link>
      </div>

      <TableList
        data={roles}
        columns={columns}
        title="Role Management"
        description="View and manage all user roles"
        searchPlaceholder="Search roles..."
        loading={isLoading}
        actionButtons={actionButtons}
        bulkActions={bulkActions}
        expandableRow={expandableRow}
        emptyStateMessage="No roles found"
        emptyStateIcon={<FaUsersCog className="w-16 h-16 text-gray-300" />}
        onSort={handleSort}
        sortField={sortField}
        sortDirection={sortDirection}
        onSearch={handleSearch}
        pagination={{
          page: pagination.page,
          pageSize: pagination.limit,
          total: pagination.total,
          onPageChange: handlePageChange,
          onPageSizeChange: handleLimitChange,
        }}
      />
    </div>
  )
}

export default Roles
