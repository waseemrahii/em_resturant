// import AttributeCard from "../AllCards/AttributeCard";

// const Attributes = () => {
//   const attribute = [
//     { id: 1, name: "Texture " },
//     { id: 2, name: "Onine Food" },
//     { id: 3, name: "Polite B" },
//     { id: 4, name: "Food" },
//     { id: 5, name: "Mango" },
//     { id: 6, name: "Size" },
//     { id: 7, name: "Taste " },
//     { id: 8, name: "Banana" },
//     { id: 9, name: "Freshness" },
//     { id: 10, name: "Timeliness" },
//     { id: 11, name: "Responsiveness" },
//   ];
//   return (
//     <>
//       <AttributeCard attributes={attribute} name="Review" />
//       {/* <AttributeButtonCard name="Review" /> */}
//     </>
//   );
// };

// export default Attributes;



"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FaTrashAlt, FaPlus, FaEdit, FaListAlt, FaCheck, FaTimes } from "react-icons/fa"
import { toast } from "react-toastify"
import TableList from "../common/TableList"
import ToggleSwitch from "../common/ToggleSwitch"
import ActionButton from "../common/ActionButton"
import TitleHead from "../Header/TitleHead"

const initialAttributes = [
  {
    id: 1,
    name: "Texture",
    type: "Review",
    values: ["Crispy", "Soft", "Crunchy", "Smooth"],
    status: true,
    createdAt: "2023-05-15T10:30:00Z",
    usedIn: 24,
  },
  {
    id: 2,
    name: "Size",
    type: "Food",
    values: ["Small", "Medium", "Large", "Extra Large"],
    status: true,
    createdAt: "2023-04-10T08:15:00Z",
    usedIn: 36,
  },
  {
    id: 3,
    name: "Spice Level",
    type: "Food",
    values: ["Mild", "Medium", "Hot", "Extra Hot"],
    status: true,
    createdAt: "2023-03-22T14:45:00Z",
    usedIn: 18,
  },
  {
    id: 4,
    name: "Freshness",
    type: "Review",
    values: ["Very Fresh", "Fresh", "Not Fresh"],
    status: false,
    createdAt: "2023-06-05T09:20:00Z",
    usedIn: 12,
  },
  {
    id: 5,
    name: "Taste",
    type: "Review",
    values: ["Excellent", "Good", "Average", "Poor"],
    status: true,
    createdAt: "2023-07-12T11:10:00Z",
    usedIn: 42,
  },
  {
    id: 6,
    name: "Toppings",
    type: "Food",
    values: ["Cheese", "Pepperoni", "Mushrooms", "Olives", "Onions"],
    status: true,
    createdAt: "2023-08-18T13:25:00Z",
    usedIn: 28,
  },
]

const Attributes = () => {
  const [attributes, setAttributes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    setLoading(true)
    setTimeout(() => {
      setAttributes(initialAttributes)
      setLoading(false)
      toast.success("Attributes loaded successfully")
    }, 800)
  }, [])

  const handleStatusToggle = (id) => {
    const updatedAttributes = attributes.map((attr) => (attr.id === id ? { ...attr, status: !attr.status } : attr))
    setAttributes(updatedAttributes)
    const attr = attributes.find((a) => a.id === id)
    toast.info(`Attribute "${attr.name}" status changed to ${!attr.status ? "Active" : "Inactive"}`)
  }

  const handleDelete = (item) => {
    if (window.confirm(`Are you sure you want to delete ${item.name}?`)) {
      setAttributes(attributes.filter((a) => a.id !== item.id))
      toast.success(`Attribute "${item.name}" deleted successfully`)
    }
  }

  const handleBulkDelete = (selectedItems) => {
    if (window.confirm(`Are you sure you want to delete ${selectedItems.size} selected attribute(s)?`)) {
      setAttributes(attributes.filter((attr) => !selectedItems.has(attr.id)))
      toast.success(`${selectedItems.size} attribute(s) deleted successfully`)
    }
  }

  const columns = [
    {
      key: "name",
      label: "Name",
      sortable: true,
      render: (item) => <span className="font-medium text-primary-900">{item.name}</span>,
    },
    {
      key: "type",
      label: "Type",
      sortable: true,
      render: (item) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            item.type === "Food" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
          }`}
        >
          {item.type}
        </span>
      ),
    },
    {
      key: "values",
      label: "Values",
      sortable: false,
      render: (item) => (
        <div className="flex flex-wrap gap-1">
          {item.values.slice(0, 3).map((value, index) => (
            <span key={index} className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs">
              {value}
            </span>
          ))}
          {item.values.length > 3 && (
            <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs">
              +{item.values.length - 3} more
            </span>
          )}
        </div>
      ),
    },
    {
      key: "usedIn",
      label: "Used In",
      sortable: true,
      render: (item) => (
        <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
          {item.usedIn} items
        </span>
      ),
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
      title: "Edit Attribute",
      onClick: (item) => {
        // Navigate to edit page
        console.log("Edit", item)
      },
      variant: "success",
    },
    {
      icon: <FaTrashAlt />,
      title: "Delete Attribute",
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
    <div className="p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg m-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
            <FaListAlt className="mr-2 text-teal-500" /> Attribute Details
          </h3>
          <div className="space-y-2">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Name:</span> {item.name}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Type:</span> {item.type}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Created:</span> {new Date(item.createdAt).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Status:</span>{" "}
              <span className={item.status ? "text-green-600" : "text-red-600"}>
                {item.status ? "Active" : "Inactive"}
              </span>
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Used In:</span> {item.usedIn} items
            </p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
            <FaCheck className="mr-2 text-teal-500" /> Attribute Values
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {item.values.map((value, index) => (
              <div key={index} className="flex items-center p-2 bg-gray-50 rounded">
                <span className="w-6 h-6 flex items-center justify-center bg-teal-100 text-teal-700 rounded-full mr-2">
                  {index + 1}
                </span>
                <span className="text-sm text-gray-700">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-end space-x-2">
        <ActionButton
          icon={<FaEdit />}
          label="Edit Attribute"
          showLabel={true}
          variant="success"
          onClick={() => console.log("Edit", item)}
        />
        <ActionButton
          icon={<FaTimes />}
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
          to="/attributes/create"
          className="bg-primary-900 text-white px-4 py-2 rounded-lg hover:bg-primary-800 transition-colors flex items-center justify-center"
        >
          <FaPlus className="mr-2" /> Add Attribute
        </Link>
      </div>

      <TableList
        data={attributes}
        columns={columns}
        title="Attribute Management"
        description="View and manage all food and review attributes"
        searchPlaceholder="Search attributes..."
        loading={loading}
        actionButtons={actionButtons}
        bulkActions={bulkActions}
        expandableRow={expandableRow}
        emptyStateMessage="No attributes found"
        emptyStateIcon={<FaListAlt className="w-16 h-16 text-gray-300" />}
      />
    </div>
  )
}

export default Attributes
