

// import { useState } from "react"
// import { FaTrashAlt, FaEye, FaEdit, FaWallet } from "react-icons/fa"
// import TableList from "../common/TableList"
// import ExpandableRowContent from "../common/ExpandableRowContent"
// import ActionButton from "../common/ActionButton"
// import ToggleSwitch from "../common/ToggleSwitch"

// const UserCustomer = () => {
//   const initialUsers = [
//     {
//       id: 1,
//       name: "Adnan Attar",
//       email: "a**********@gmail.com",
//       date: "Wed Jun 12 2024 10:58:25 PM",
//       publish: false,
//       description: "Regular customer with multiple orders",
//       transaction: "$245.50",
//       image:
//         "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
//       phone: "+1 234-567-8901",
//       address: "123 Main St, New York, NY",
//       orders: 12,
//       lastOrder: "Jun 10, 2024",
//     },
//     {
//       id: 2,
//       name: "John Smith",
//       email: "j**********@gmail.com",
//       date: "Tue Jun 11 2024 09:45:12 PM",
//       publish: true,
//       description: "Regular customer with premium subscription",
//       transaction: "$387.25",
//       image:
//         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
//       phone: "+1 234-567-8902",
//       address: "456 Oak St, Chicago, IL",
//       orders: 24,
//       lastOrder: "Jun 11, 2024",
//     },
//     {
//       id: 3,
//       name: "Emily Johnson",
//       email: "e**********@gmail.com",
//       date: "Mon Jun 10 2024 08:30:45 PM",
//       publish: false,
//       description: "New user, first order placed",
//       transaction: "$45.75",
//       image:
//         "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
//       phone: "+1 234-567-8903",
//       address: "789 Pine St, San Francisco, CA",
//       orders: 1,
//       lastOrder: "Jun 9, 2024",
//     },
//     {
//       id: 4,
//       name: "Michael Brown",
//       email: "m**********@gmail.com",
//       date: "Sun Jun 09 2024 07:15:30 PM",
//       publish: true,
//       description: "Frequent customer, high order value",
//       transaction: "$652.80",
//       image:
//         "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
//       phone: "+1 234-567-8904",
//       address: "321 Elm St, Los Angeles, CA",
//       orders: 36,
//       lastOrder: "Jun 8, 2024",
//     },
//     {
//       id: 5,
//       name: "Sarah Williams",
//       email: "s**********@gmail.com",
//       date: "Sat Jun 08 2024 06:00:15 PM",
//       publish: true,
//       description: "Regular customer with family orders",
//       transaction: "$325.40",
//       image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
//       phone: "+1 234-567-8905",
//       address: "654 Maple St, Boston, MA",
//       orders: 18,
//       lastOrder: "Jun 7, 2024",
//     },
//     {
//       id: 6,
//       name: "David Jones",
//       email: "d**********@gmail.com",
//       date: "Fri Jun 07 2024 04:45:00 PM",
//       publish: false,
//       description: "Occasional customer with special dietary needs",
//       transaction: "$178.30",
//       image:
//         "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
//       phone: "+1 234-567-8906",
//       address: "987 Cedar St, Seattle, WA",
//       orders: 8,
//       lastOrder: "Jun 5, 2024",
//     },
//   ]

//   const [users, setUsers] = useState(initialUsers)

//   // Define columns for the table
//   const columns = [
//     {
//       key: "image",
//       label: "User",
//       sortable: false,
//       render: (user) => (
//         <div className="flex items-center">
//           <img
//             src={user.image || "/placeholder.svg"}
//             alt={user.name}
//             className="h-10 w-10 rounded-full mr-3 object-cover border-2 border-gray-200"
//             onError={(e) => {
//               e.target.src = "/placeholder.svg?height=40&width=40"
//             }}
//           />
//           <div>
//             <div className="font-medium text-gray-900">{user.name}</div>
//             <div className="text-gray-500 text-sm">{user.email}</div>
//           </div>
//         </div>
//       ),
//     },
//     {
//       key: "orders",
//       label: "Orders",
//       sortable: true,
//       render: (user) => (
//         <div className="flex items-center">
//           <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
//             <span className="text-blue-600 font-medium">{user.orders}</span>
//           </div>
//           <span>orders</span>
//         </div>
//       ),
//     },
//     {
//       key: "date",
//       label: "Joined",
//       sortable: true,
//     },
//     {
//       key: "lastOrder",
//       label: "Last Order",
//       sortable: true,
//     },
//     {
//       key: "transaction",
//       label: "Wallet",
//       sortable: true,
//       render: (user) => <span className="font-semibold text-green-600">{user.transaction}</span>,
//     },
//     {
//       key: "publish",
//       label: "Status",
//       sortable: false,
//       render: (user) => (
//         <div className="flex items-center justify-center">
//           <ToggleSwitch isOn={user.publish} onToggle={() => handleToggleActive(user.id)} />
//         </div>
//       ),
//     },
//   ]

//   // Handle toggle active
//   const handleToggleActive = (userId) => {
//     setUsers(users.map((user) => (user.id === userId ? { ...user, publish: !user.publish } : user)))
//   }

//   // Handle delete user
//   const handleDeleteUser = (userId) => {
//     if (window.confirm("Are you sure you want to delete this user?")) {
//       setUsers(users.filter((user) => user.id !== userId))
//     }
//   }

//   // Define expandable row content with improved design
//   const expandableRow = (user) => {
//     const leftContent = [
//       {
//         icon: (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5 text-blue-600"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//           >
//             <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
//           </svg>
//         ),
//         label: "Phone",
//         value: user.phone,
//         iconBg: "blue-100",
//       },
//       {
//         icon: (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5 text-green-600"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//           >
//             <path
//               fillRule="evenodd"
//               d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
//               clipRule="evenodd"
//             />
//           </svg>
//         ),
//         label: "Address",
//         value: user.address,
//         iconBg: "green-100",
//       },
//       {
//         icon: (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5 text-purple-600"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//           >
//             <path
//               fillRule="evenodd"
//               d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
//               clipRule="evenodd"
//             />
//           </svg>
//         ),
//         label: "Description",
//         value: user.description,
//         iconBg: "purple-100",
//       },
//     ]

//     const rightContent = [
//       {
//         label: "Total Orders",
//         value: user.orders,
//       },
//       {
//         label: "Last Order",
//         value: user.lastOrder,
//       },
//       {
//         label: "Wallet Balance",
//         value: user.transaction,
//         valueClass: "text-green-600",
//       },
//       {
//         label: "Status",
//         value: user.publish ? "Active" : "Inactive",
//         valueClass: user.publish ? "text-green-600" : "text-red-600",
//       },
//     ]

//     const actionButtons = (
//       <>
//         <ActionButton
//           icon={<FaEye />}
//           title="View User"
//           variant="primary"
//           to={`/users/view/${user.id}`}
//           showLabel={true}
//           label="View"
//         />
//         <ActionButton
//           icon={<FaEdit />}
//           title="Edit User"
//           variant="success"
//           to={`/users/edit/${user.id}`}
//           showLabel={true}
//           label="Edit"
//         />
//         <ActionButton
//           icon={<FaWallet />}
//           title="Wallet"
//           variant="info"
//           to={`/users/wallet/${user.id}`}
//           showLabel={true}
//           label="Wallet"
//         />
//         <ActionButton
//           icon={<FaTrashAlt />}
//           title="Delete User"
//           variant="danger"
//           onClick={() => handleDeleteUser(user.id)}
//           showLabel={true}
//           label="Delete"
//         />
//       </>
//     )

//     return (
//       <ExpandableRowContent
//         leftTitle="User Details"
//         rightTitle="Order Statistics"
//         leftContent={leftContent}
//         rightContent={rightContent}
//         actionButtons={actionButtons}
//         leftTitleColor="primary-900"
//         rightTitleColor="green-500"
//         variant="gradient"
//       />
//     )
//   }

//   return (
//     <div className="mx-5 my-3">
//       <TableList
//         data={users}
//         columns={columns}
//         title="User Management"
//         description="View and manage all users in your platform"
//         searchPlaceholder="Search users by name, email..."
//         showSearch={true}
//         expandableRow={expandableRow}
//         actionButtons={[
//           {
//             icon: <FaEye className="w-4 h-4" />,
//             title: "View User",
//             className: "p-1.5 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100",
//             onClick: (user) => {
//               window.location.href = `/users/view/${user.id}`
//             },
//           },
//           {
//             icon: <FaEdit className="w-4 h-4" />,
//             title: "Edit User",
//             className: "p-1.5 bg-green-50 text-green-600 rounded-full hover:bg-green-100",
//             onClick: (user) => {
//               window.location.href = `/users/edit/${user.id}`
//             },
//           },
//           {
//             icon: <FaWallet className="w-4 h-4" />,
//             title: "Wallet",
//             className: "p-1.5 bg-purple-50 text-purple-600 rounded-full hover:bg-purple-100",
//             onClick: (user) => {
//               window.location.href = `/users/wallet/${user.id}`
//             },
//           },
//           {
//             icon: <FaTrashAlt className="w-4 h-4" />,
//             title: "Delete User",
//             className: "p-1.5 bg-red-50 text-red-600 rounded-full hover:bg-red-100",
//             onClick: (user) => handleDeleteUser(user.id),
//           },
//         ]}
//         bulkActions={[
//           {
//             key: "delete",
//             label: "Delete Selected",
//             icon: <FaTrashAlt />,
//             onClick: (selectedItems) => {
//               if (window.confirm(`Are you sure you want to delete ${selectedItems.size} users?`)) {
//                 setUsers(users.filter((user) => !selectedItems.has(user.id)))
//               }
//             },
//             clearSelectionAfter: true,
//           },
//         ]}
//         emptyStateMessage="No users found"
//         routePrefix="/users"
//       />
//     </div>
//   )
// }

// export default UserCustomer



"use client"

import { useState } from "react"
import { FaTrashAlt, FaEye, FaEdit, FaWallet, FaPlus, FaList } from "react-icons/fa"
import TableList from "../common/TableList"
import ExpandableRowContent from "../common/ExpandableRowContent"
import ActionButton from "../common/ActionButton"
import ToggleSwitch from "../common/ToggleSwitch"
import { useNavigate } from "react-router-dom"
import PageHeader from "../common/PageHeader"

const UserCustomer = () => {
  const initialUsers = [
    {
      id: 1,
      name: "Adnan Attar",
      email: "a**********@gmail.com",
      date: "Wed Jun 12 2024 10:58:25 PM",
      publish: false,
      description: "Regular customer with multiple orders",
      transaction: "$245.50",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&h=500&q=80",
      phone: "+1 234-567-8901",
      address: "123 Main St, New York, NY",
      orders: 12,
      lastOrder: "Jun 10, 2024",
    },
    {
      id: 2,
      name: "John Smith",
      email: "j**********@gmail.com",
      date: "Tue Jun 11 2024 09:45:12 PM",
      publish: true,
      description: "Regular customer with premium subscription",
      transaction: "$387.25",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      phone: "+1 234-567-8902",
      address: "456 Oak St, Chicago, IL",
      orders: 24,
      lastOrder: "Jun 11, 2024",
    },
    {
      id: 3,
      name: "Emily Johnson",
      email: "e**********@gmail.com",
      date: "Mon Jun 10 2024 08:30:45 PM",
      publish: false,
      description: "New user, first order placed",
      transaction: "$45.75",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      phone: "+1 234-567-8903",
      address: "789 Pine St, San Francisco, CA",
      orders: 1,
      lastOrder: "Jun 9, 2024",
    },
    {
      id: 4,
      name: "Michael Brown",
      email: "m**********@gmail.com",
      date: "Sun Jun 09 2024 07:15:30 PM",
      publish: true,
      description: "Frequent customer, high order value",
      transaction: "$652.80",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      phone: "+1 234-567-8904",
      address: "321 Elm St, Los Angeles, CA",
      orders: 36,
      lastOrder: "Jun 8, 2024",
    },
    {
      id: 5,
      name: "Sarah Williams",
      email: "s**********@gmail.com",
      date: "Sat Jun 08 2024 06:00:15 PM",
      publish: true,
      description: "Regular customer with family orders",
      transaction: "$325.40",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      phone: "+1 234-567-8905",
      address: "654 Maple St, Boston, MA",
      orders: 18,
      lastOrder: "Jun 7, 2024",
    },
    {
      id: 6,
      name: "David Jones",
      email: "d**********@gmail.com",
      date: "Fri Jun 07 2024 04:45:00 PM",
      publish: false,
      description: "Occasional customer with special dietary needs",
      transaction: "$178.30",
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      phone: "+1 234-567-8906",
      address: "987 Cedar St, Seattle, WA",
      orders: 8,
      lastOrder: "Jun 5, 2024",
    },
  ]

  const [users, setUsers] = useState(initialUsers)
  const navigate = useNavigate()

  // Define columns for the table
  const columns = [
    {
      key: "image",
      label: "User",
      sortable: false,
      render: (user) => (
        <div className="flex items-center">
          <img
            src={user.image || "/placeholder.svg"}
            alt={user.name}
            className="h-10 w-10 rounded-full mr-3 object-cover border-2 border-gray-200"
            onError={(e) => {
              e.target.src = "/placeholder.svg?height=40&width=40"
            }}
          />
          <div>
            <div className="font-medium text-gray-900">{user.name}</div>
            <div className="text-gray-500 text-sm">{user.email}</div>
          </div>
        </div>
      ),
    },
    {
      key: "orders",
      label: "Orders",
      sortable: true,
      render: (user) => (
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
            <span className="text-blue-600 font-medium">{user.orders}</span>
          </div>
          <span>orders</span>
        </div>
      ),
    },
    {
      key: "date",
      label: "Joined",
      sortable: true,
    },
    {
      key: "lastOrder",
      label: "Last Order",
      sortable: true,
    },
    {
      key: "transaction",
      label: "Wallet",
      sortable: true,
      render: (user) => <span className="font-semibold text-green-600">{user.transaction}</span>,
    },
    {
      key: "publish",
      label: "Status",
      sortable: false,
      render: (user) => (
        <div className="flex items-center justify-center">
          <ToggleSwitch isOn={user.publish} onToggle={() => handleToggleActive(user.id)} />
        </div>
      ),
    },
  ]

  // Handle toggle active
  const handleToggleActive = (userId) => {
    setUsers(users.map((user) => (user.id === userId ? { ...user, publish: !user.publish } : user)))
  }
  const handleExport = (format) => {
    alert(`Exporting user as ${format}`)
  }
  // Handle delete user
  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== userId))
    }
  }

  // Define expandable row content with improved design
  const expandableRow = (user) => {
    const leftContent = [
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-blue-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
        ),
        label: "Phone",
        value: user.phone,
        iconBg: "blue-100",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-green-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
        ),
        label: "Address",
        value: user.address,
        iconBg: "green-100",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-purple-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
        ),
        label: "Description",
        value: user.description,
        iconBg: "purple-100",
      },
    ]

    const rightContent = [
      {
        label: "Total Orders",
        value: user.orders,
      },
      {
        label: "Last Order",
        value: user.lastOrder,
      },
      {
        label: "Wallet Balance",
        value: user.transaction,
        valueClass: "text-green-600",
      },
      {
        label: "Status",
        value: user.publish ? "Active" : "Inactive",
        valueClass: user.publish ? "text-green-600" : "text-red-600",
      },
    ]

    const actionButtons = (
      <>
        <ActionButton
          icon={<FaEye />}
          title="View User"
          variant="primary"
          to={`/users/view/${user.id}`}
          showLabel={true}
          label="View"
        />
        <ActionButton
          icon={<FaEdit />}
          title="Edit User"
          variant="success"
          to={`/users/edit/${user.id}`}
          showLabel={true}
          label="Edit"
        />
        <ActionButton
          icon={<FaWallet />}
          title="Wallet"
          variant="info"
          to={`/users/wallet/${user.id}`}
          showLabel={true}
          label="Wallet"
        />
        <ActionButton
          icon={<FaTrashAlt />}
          title="Delete User"
          variant="danger"
          onClick={() => handleDeleteUser(user.id)}
          showLabel={true}
          label="Delete"
        />
      </>
    )

    return (
      <ExpandableRowContent
        leftTitle="User Details"
        rightTitle="Order Statistics"
        leftContent={leftContent}
        rightContent={rightContent}
        actionButtons={actionButtons}
        leftTitleColor="primary-900"
        rightTitleColor="green-500"
        variant="gradient"
      />
    )
  }
 

  const handleCreateVendor = () => {
    navigate("/create-user")
  }

  return (
    <div className="mx-5 my-3">
        {/* Header Section */}
            <PageHeader
                   title="Users Management"
                   description="View and manage all  users in your platform"
                   showExport={true}
                   onExport={handleExport}
                   actions={[
                     {
                       label: "Create User",
                       onClick: handleCreateVendor,
                       icon: <FaPlus className="mr-2" />,
                     },
                   ]}
                 />
      <TableList
        data={users}
        columns={columns}
        title="User Management"
        description="View and manage all users in your platform"
        searchPlaceholder="Search users by name, email..."
        showSearch={true}
        expandableRow={expandableRow}
        actionButtons={[
          {
            icon: <FaEye className="w-4 h-4" />,
            title: "View User",
            className: "p-1.5 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100",
            onClick: (user) => {
              navigate("/users/edit") // Use existing route that works
            },
          },
          {
            icon: <FaEdit className="w-4 h-4" />,
            title: "Edit User",
            className: "p-1.5 bg-green-50 text-green-600 rounded-full hover:bg-green-100",
            onClick: (user) => {
              navigate("/users/edit") // Use existing route that works
            },
          },
          {
            icon: <FaWallet className="w-4 h-4" />,
            title: "Wallet",
            className: "p-1.5 bg-purple-50 text-purple-600 rounded-full hover:bg-purple-100",
            onClick: (user) => {
              navigate("/users/edit/user-wallet") // Use existing route that works
            },
          },
          {
            icon: <FaTrashAlt className="w-4 h-4" />,
            title: "Delete User",
            className: "p-1.5 bg-red-50 text-red-600 rounded-full hover:bg-red-100",
            onClick: handleDeleteUser,
          },
        ]}
        bulkActions={[
          {
            key: "delete",
            label: "Delete Selected",
            icon: <FaTrashAlt />,
            onClick: (selectedItems) => {
              if (window.confirm(`Are you sure you want to delete ${selectedItems.size} users?`)) {
                setUsers(users.filter((user) => !selectedItems.has(user.id)))
              }
            },
            clearSelectionAfter: true,
          },
        ]}
        emptyStateMessage="No users found"
        routePrefix="/users"
      />
    </div>
  )
}

export default UserCustomer
