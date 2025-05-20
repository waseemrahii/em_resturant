import { useState } from "react"
import { FaTrashAlt, FaEye, FaEdit, FaPlus, FaList } from "react-icons/fa"
import TableList from "../common/TableList"
import ExpandableRowContent from "../common/ExpandableRowContent"
import ActionButton from "../common/ActionButton"
import { useNavigate } from "react-router-dom"

const RestaurantsList = () => {
  const initialRestaurants = [
    {
      id: "rest1",
      name: "The Pizza Place",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      email: "pizza@example.com",
      phone: "+1 234-567-8901",
      address: "123 Main St, New York, NY",
      status: "Active",
      rating: 4.5,
      totalOrders: 156,
      totalRevenue: "$12,450",
      joinDate: "Jan 15, 2024",
      description: "Authentic Italian pizza and pasta",
    },
    {
      id: "rest2",
      name: "Burger King",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      email: "burger@example.com",
      phone: "+1 234-567-8902",
      address: "456 Oak St, Chicago, IL",
      status: "Active",
      rating: 4.2,
      totalOrders: 203,
      totalRevenue: "$18,320",
      joinDate: "Feb 3, 2024",
      description: "Juicy burgers and crispy fries",
    },
    {
      id: "rest3",
      name: "Sushi Express",
      image:
        "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      email: "sushi@example.com",
      phone: "+1 234-567-8903",
      address: "789 Pine St, San Francisco, CA",
      status: "Inactive",
      rating: 4.8,
      totalOrders: 98,
      totalRevenue: "$8,760",
      joinDate: "Mar 20, 2024",
      description: "Fresh and authentic Japanese cuisine",
    },
    {
      id: "rest4",
      name: "Taco Bell",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      email: "taco@example.com",
      phone: "+1 234-567-8904",
      address: "321 Elm St, Los Angeles, CA",
      status: "Active",
      rating: 3.9,
      totalOrders: 175,
      totalRevenue: "$14,230",
      joinDate: "Apr 5, 2024",
      description: "Authentic Mexican street food",
    },
    {
      id: "rest5",
      name: "Pasta Paradise",
      image:
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      email: "pasta@example.com",
      phone: "+1 234-567-8905",
      address: "654 Maple St, Boston, MA",
      status: "Active",
      rating: 4.6,
      totalOrders: 132,
      totalRevenue: "$11,870",
      joinDate: "May 12, 2024",
      description: "Homemade pasta and Italian specialties",
    },
    {
      id: "rest6",
      name: "Salad Station",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      email: "salad@example.com",
      phone: "+1 234-567-8906",
      address: "987 Cedar St, Seattle, WA",
      status: "Pending",
      rating: 4.3,
      totalOrders: 87,
      totalRevenue: "$6,540",
      joinDate: "Jun 8, 2024",
      description: "Fresh and healthy salads and bowls",
    },
  ]

  const [restaurants, setRestaurants] = useState(initialRestaurants)
  const navigate = useNavigate()

  // Define columns for the table
  const columns = [
    {
      key: "image",
      label: "Restaurant",
      sortable: false,
      isImage: true,
      render: (item) => (
        <div className="flex items-center">
          <img
            src={item.image || "/placeholder.svg"}
            alt={item.name}
            className="h-10 w-10 rounded-full mr-3 object-cover"
            onError={(e) => {
              e.target.src = "/placeholder.svg?height=40&width=40"
            }}
          />
          <div>
            <div className="font-medium text-gray-900">{item.name}</div>
            <div className="text-gray-500 text-sm">{item.email}</div>
          </div>
        </div>
      ),
    },
    {
      key: "address",
      label: "Address",
      sortable: true,
      render: (item) => <span className="text-gray-600 text-sm">{item.address}</span>,
    },
    {
      key: "status",
      label: "Status",
      sortable: true,
      render: (item) => {
        let statusClass = "bg-gray-100 text-gray-800"
        if (item.status === "Active") statusClass = "bg-green-100 text-green-800"
        if (item.status === "Inactive") statusClass = "bg-red-100 text-red-800"
        if (item.status === "Pending") statusClass = "bg-yellow-100 text-yellow-800"

        return <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusClass}`}>{item.status}</span>
      },
    },
    {
      key: "rating",
      label: "Rating",
      sortable: true,
      render: (item) => (
        <div className="flex items-center">
          <span className="text-yellow-500">★</span>
          <span className="ml-1">{item.rating}</span>
        </div>
      ),
    },
    {
      key: "totalOrders",
      label: "Orders",
      sortable: true,
    },
    {
      key: "totalRevenue",
      label: "Revenue",
      sortable: true,
      render: (item) => <span className="font-semibold text-green-600">{item.totalRevenue}</span>,
    },
    {
      key: "joinDate",
      label: "Joined",
      sortable: true,
    },
  ]

  const handleCreateRestaurant = () => {
    navigate("/restaurant/create")
  }

  // Handle delete restaurant
  const handleDeleteRestaurant = (restaurantId) => {
    if (window.confirm("Are you sure you want to delete this restaurant?")) {
      setRestaurants(restaurants.filter((restaurant) => restaurant.id !== restaurantId))
    }
  }

  // Define expandable row content
  const expandableRow = (restaurant) => {
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
        value: restaurant.phone,
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
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        ),
        label: "Email",
        value: restaurant.email,
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
        value: restaurant.description,
        iconBg: "purple-100",
      },
    ]

    const rightContent = [
      {
        label: "Total Orders",
        value: restaurant.totalOrders,
      },
      {
        label: "Total Revenue",
        value: restaurant.totalRevenue,
        valueClass: "text-green-600",
      },
      {
        label: "Rating",
        value: `${restaurant.rating} ★`,
        valueClass: "text-yellow-600",
      },
      {
        label: "Joined Date",
        value: restaurant.joinDate,
      },
    ]

    const actionButtons = (
      <>
        <ActionButton
          icon={<FaEye />}
          title="View Restaurant"
          variant="primary"
          to={`/restaurants/profile/info/${restaurant.id}`}
          showLabel={true}
          label="View"
        />
        <ActionButton
          icon={<FaEdit />}
          title="Edit Restaurant"
          variant="success"
          to={`/restaurants/edit/${restaurant.id}`}
          showLabel={true}
          label="Edit"
        />
        <ActionButton
          icon={<FaTrashAlt />}
          title="Delete Restaurant"
          variant="danger"
          onClick={() => handleDeleteRestaurant(restaurant.id)}
          showLabel={true}
          label="Delete"
        />
      </>
    )

    return (
      <ExpandableRowContent
        leftTitle="Restaurant Details"
        rightTitle="Business Statistics"
        leftContent={leftContent}
        rightContent={rightContent}
        actionButtons={actionButtons}
        leftTitleColor="primary-900"
        rightTitleColor="green-500"
        variant="gradient"
      />
    )
  }

  // Define filter options
  const filterOptions = [
    {
      label: "Active",
      value: "Active",
      activeClassName: "bg-green-500 text-white",
    },
    {
      label: "Inactive",
      value: "Inactive",
      activeClassName: "bg-red-500 text-white",
    },
    {
      label: "Pending",
      value: "Pending",
      activeClassName: "bg-yellow-500 text-white",
    },
  ]

  return (
    <div className="mx-5 my-3">

          {/* Header Section */}
            <div className="flex bg-[#F7F7F7] border-2 items-center justify-between mx-auto w-full h-auto min-h-20 rounded-t-lg px-4 py-3 md:px-6 flex-wrap md:flex-nowrap gap-2">
              <div className="flex items-center">
                <FaList className="mr-2 text-xl text-primary-900" />
                <h1 className="text-xl font-semibold text-gray-800">Restaurant Management</h1>
              </div>
              <button
                onClick={handleCreateRestaurant}
                className="bg-primary-900 text-white px-4 py-2 rounded-md flex items-center hover:bg-primary-800 transition-colors shadow-md w-full md:w-auto justify-center"
              >
                <FaPlus className="mr-2" />
                Create Restaurant
              </button>
            </div>
      <TableList
        data={restaurants}
        columns={columns}
        // title="Restaurants Management"
        description="View and manage all restaurants in your platform"
        searchPlaceholder="Search restaurants by name, email, address..."
        showSearch={true}
        showFilter={true}
        filterOptions={filterOptions}
        expandableRow={expandableRow}
        actionButtons={[
          {
            icon: <FaEye className="w-4 h-4" />,
            title: "View Restaurant",
            className: "p-1.5 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100",
            onClick: (restaurant) => {
              navigate(`/restaurant/${restaurant.id}`) // Use existing route
            },
          },
          {
            icon: <FaEdit className="w-4 h-4" />,
            title: "Edit Restaurant",
            className: "p-1.5 bg-green-50 text-green-600 rounded-full hover:bg-green-100",
            onClick: (restaurant) => {
              navigate(`/restaurant/edit/${restaurant.id}`) // Use existing route
            },
          },
          {
            icon: <FaTrashAlt className="w-4 h-4" />,
            title: "Delete Restaurant",
            className: "p-1.5 bg-red-50 text-red-600 rounded-full hover:bg-red-100",
            onClick: (restaurant) => handleDeleteRestaurant(restaurant.id),
          },
        ]}
        bulkActions={[
          {
            key: "delete",
            label: "Delete Selected",
            icon: <FaTrashAlt />,
            onClick: (selectedItems) => {
              if (window.confirm(`Are you sure you want to delete ${selectedItems.size} restaurants?`)) {
                setRestaurants(restaurants.filter((restaurant) => !selectedItems.has(restaurant.id)))
              }
            },
            clearSelectionAfter: true,
          },
        ]}
        emptyStateMessage="No restaurants found"
        routePrefix="/restaurants"
      />
    </div>
  )
}

export default RestaurantsList
