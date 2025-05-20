
import { useState } from "react"
import { FaTrashAlt,  FaEye, FaEdit } from "react-icons/fa"
import ActionButton from "../common/ActionButton"
import ExpandableRowContent from "../common/ExpandableRowContent"
import TableList from "../common/TableList"


const RefoundRequests = () => {


  // Define columns for the table
  const columns = [
    {
        SlNo: "Sl No",
        key: "slno",
        label: "Sl No",
        sortable: true,
        render: (item, index) => <span className="text-primary-900 font-medium">{index + 1}</span>,
    },
    
    {
      key: "id",
      label: "Order ID",
      sortable: true,
      render: (item) => <span className="text-primary-900 font-medium">{item.id}</span>,
    },
    {
        Orderdate: "Order date",
        key: "orderdate",
        label: "Order date",
        sortable: true,
        render: (item) => <span className="text-primary-900 font-medium">{new Date(item.date).toLocaleDateString()}</span>,
    }, 
{
    Customerinformation: "Customer information",
    key: "customerinformation",
    label: "Customer information",
    sortable: true,
    render: (item) => (
        <div className="flex items-center">
          <img
            src={item.clientImage || "/placeholder.svg"}
            alt={item.client}
            className="h-8 w-8 rounded-full mr-3 object-cover border-2 border-gray-200"
            onError={(e) => {
              e.target.src = "/placeholder.svg?height=32&width=32"
            }}
          />
          <span>{item.client}</span>
        </div>
      ), },
    {
      key: "restaurant",
      label: "Restaurant",
      sortable: true,
      render: (item) => (
        <div className="flex items-center">
          <img
            src={item.restaurantImage || "/placeholder.svg"}
            alt={item.restaurant}
            className="h-8 w-8 rounded-full mr-3 object-cover border-2 border-gray-200"
            onError={(e) => {
              e.target.src = "/placeholder.svg?height=32&width=32"
            }}
          />
          <span className="font-medium">{item.restaurant}</span>
        </div>
      ),
    },

    {
        ItemQuantity : "Item Quantity",
        key: "itemquantity",
        label: "Item Quantity",
        sortable: true,
        render: (item) => <span className="text-primary-900 font-medium">{item.itemquantity}</span>,
    
    },

{
    TotalAmount : "Total Amount",
    key: "totalamount",
    label: "Total Amount",
    sortable: true,
    render: (item) => <span className="text-primary-900 font-medium">{item.totalamount}</span>,
},
{
    key: "orderstatus",
    label: "Status",
    sortable: true,
    render: (item) => {
      let statusClass = "bg-gray-100 text-gray-800"
      if (item.orderstatus === "Order Placed") statusClass = "bg-yellow-100 text-yellow-800"
      if (item.orderstatus === "Preparing") statusClass = "bg-blue-100 text-blue-800"
      if (item.orderstatus === "In Transit") statusClass = "bg-purple-100 text-purple-800"
      if (item.orderstatus === "Delivered") statusClass = "bg-green-100 text-green-800"
      if (item.orderstatus === "Ready for Pickup") statusClass = "bg-indigo-100 text-indigo-800"

      return <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusClass}`}>{item.orderstatus}</span>
    },
  },

{
    Action : "Action",
    key: "action",
    label: "Action",
    sortable: true,
    render: (item) => (
      <div className="flex items-center space-x-2">
        <ActionButton
          icon={<FaEye />}
          title="View Order"
          className="p-1.5 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100"
          onClick={() => {
            window.location.href = `/orders/${item.id}`
          }}
        />
        <ActionButton
          icon={<FaEdit />}
          title="Edit Order"
          className="p-1.5 bg-green-50 text-green-600 rounded-full hover:bg-green-100"
          onClick={() => {
            window.location.href = `/edit-order/${item.id}`
          }}
        />
        <ActionButton
          icon={<FaTrashAlt />}
          title="Delete Order"
          className="p-1.5 bg-red-50 text-red-600 rounded-full hover:bg-red-100"
          onClick={() => handleDeleteOrder(item.id)}
        />
      </div>
    ),

}

 
  ]

  // Handle delete order
//   const handleDeleteOrder = (orderId) => {
//     if (window.confirm("Are you sure you want to delete this order?")) {
//       setOrders(orders.filter((order) => order.id !== orderId))
//     }
//   }

  // Define expandable row content with improved design
  const expandableRow = (order) => {
    const leftContent = [
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-blue-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
              clipRule="evenodd"
            />
          </svg>
        ),
        label: "Order Type",
        value: order.ordertype,
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
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clipRule="evenodd"
            />
          </svg>
        ),
        label: "Status",
        value: order.orderstatus,
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
        value: order.description,
        iconBg: "purple-100",
      },
    ]

    const rightContent = [
      {
        label: "Subtotal",
        value: order.amount,
      },
      {
        label: "Delivery Fee",
        value: "$5.00",
      },
      {
        label: "Tax",
        value: "$3.50",
      },
      {
        label: "Total",
        value: order.amount,
        valueClass: "text-green-600 font-bold",
      },
    ]

    const actionButtons = (
      <>
        {/* <ActionButton
          icon={<FaPrint />}
          title="Print Order"
          variant="primary"
          className= "p-1.5 bg-blue-50 text-primary-600 rounded-full hover:bg-blue-100"
          to={`/print-order`}
          showLabel={true}
          label="Print"
        /> */}
        <ActionButton
          icon={<FaEdit />}
          title="Edit Order"
          className= "p-1.5 bg-green-50 text-primary-600 rounded-full hover:bg-blue-100"

          variant="success"
          to={`/edit-order`}
          showLabel={true}
          label="Edit"
        />
        {/* <ActionButton
          icon={<FaTrashAlt />}
          title="Delete Order"
          variant="danger"
          onClick={() => handleDeleteOrder(order.id)}
          showLabel={true}
          label="Delete"
        /> */}
      </>
    )

    return (
      <ExpandableRowContent
        leftTitle="Order Details"
        rightTitle="Payment Information"
        leftContent={leftContent}
        rightContent={rightContent}
        actionButtons={actionButtons}
        leftTitleColor="primary-900"
        rightTitleColor="green-500"
        variant="card"
      />
    )
  }


  return (
    <div className="mx-5 my-3">
      <TableList
        // data={orders}
        columns={columns}
        title="Refound Requests"
        description="View and manage all Refound  Request"
        searchPlaceholder="Search orders by ID, restaurant, client..."
        showSearch={true}
        showFilter={true}
        // filterOptions={filterOptions}
        expandableRow={expandableRow}
        actionButtons={[
          {
            icon: <FaEye className="w-4 h-4" />,
            title: "View Order",
            className: "p-1.5 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100",
            onClick: (order) => {
              window.location.href = `/orders/${order.id}`
            },
          },
          {
            icon: <FaEdit className="w-4 h-4" />,
            title: "Edit Order",
            className: "p-1.5 bg-green-50 text-green-600 rounded-full hover:bg-green-100",
            // onClick: (order) => {
            //   window.location.href = `/edit-order`
            // },
          },
          // {
          //   icon: <FaPrint className="w-4 h-4" />,
          //   title: "Print Order",
          //   className: "p-1.5 bg-green-50 text-green-600 rounded-full hover:bg-green-100",
          //   onClick: (order) => {
          //     window.location.href = `/print-order`
          //   },
          // },
          {
            icon: <FaTrashAlt className="w-4 h-4" />,
            title: "Delete Order",
            className: "p-1.5 bg-red-50 text-red-600 rounded-full hover:bg-red-100",
            // onClick: (order) => handleDeleteOrder(order.id),
          },
        ]}
        bulkActions={[
          {
            key: "delete",
            label: "Delete Selected",
            icon: <FaTrashAlt />,
            onClick: (selectedItems) => {
              if (window.confirm(`Are you sure you want to delete ${selectedItems.size} orders?`)) {
                // setOrders(orders.filter((order) => !selectedItems.has(order.id)))
              }
            },
            clearSelectionAfter: true,
          },
        ]}
        emptyStateMessage="No orders found"
        routePrefix="/orders"
      />
    </div>
  )
}

export default RefoundRequests
