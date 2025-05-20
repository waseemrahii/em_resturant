
// import { useState } from "react"
// import { FaTrashAlt, FaEdit, FaEye, FaPlus } from "react-icons/fa"
// import TableList from "../common/TableList"
// import ExpandableRowContent from "../common/ExpandableRowContent"
// import ActionButton from "../common/ActionButton"
// import ToggleSwitch from "../common/ToggleSwitch"
// import { Link, useNavigate } from "react-router-dom"

// const Categories = () => {
//   const initialCategories = [
//     {
//       id: 1,
//       name: "Foodtrator",
//       foods: 34,
//       img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
//       publish: false,
//       description: "Traditional food items from various cultures",
//       date: "Jun 12, 2024",
//     },
//     {
//       id: 2,
//       name: "Fast Food",
//       foods: 42,
//       img: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
//       publish: true,
//       description: "Quick service restaurant items like burgers and fries",
//       date: "Jun 10, 2024",
//     },
//     {
//       id: 3,
//       name: "Japanese",
//       foods: 28,
//       img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
//       publish: false,
//       description: "Authentic Japanese cuisine including sushi and ramen",
//       date: "Jun 8, 2024",
//     },
//     {
//       id: 4,
//       name: "Italian",
//       foods: 36,
//       img: "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
//       publish: true,
//       description: "Classic Italian dishes including pasta and pizza",
//       date: "Jun 5, 2024",
//     },
//     {
//       id: 5,
//       name: "Desserts",
//       foods: 22,
//       img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
//       publish: false,
//       description: "Sweet treats and desserts from around the world",
//       date: "Jun 3, 2024",
//     },
//     {
//       id: 6,
//       name: "Beverages",
//       foods: 18,
//       img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
//       publish: true,
//       description: "Refreshing drinks and specialty beverages",
//       date: "May 30, 2024",
//     },
//     {
//       id: 7,
//       name: "Vegetarian",
//       foods: 26,
//       img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
//       publish: false,
//       description: "Plant-based dishes and vegetarian options",
//       date: "May 28, 2024",
//     },
//     {
//       id: 8,
//       name: "Seafood",
//       foods: 30,
//       img: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
//       publish: true,
//       description: "Fresh seafood dishes from coastal regions",
//       date: "May 25, 2024",
//     },
//   ]

//   const [categories, setCategories] = useState(initialCategories)
//   const navigate = useNavigate()

//   // Define columns for the table
//   const columns = [
//     {
//       key: "img",
//       label: "Image",
//       sortable: false,
//       render: (category) => (
//         <div className="flex justify-center">
//           <img
//             src={
//               category.img ||
//               "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&h=500&q=80"
//             }
//             alt={category.name}
//             className="h-12 w-12 rounded-lg object-cover border-2 border-gray-200 shadow-sm"
//             onError={(e) => {
//               e.target.src =
//                 "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&h=500&q=80"
//             }}
//           />
//         </div>
//       ),
//     },
//     {
//       key: "name",
//       label: "Name",
//       sortable: true,
//       render: (category) => <span className="text-primary-900 font-medium hover:text-black">{category.name}</span>,
//     },
//     {
//       key: "foods",
//       label: "Foods",
//       sortable: true,
//       render: (category) => (
//         <div className="flex items-center">
//           <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
//             <span className="text-blue-600 font-medium">{category.foods}</span>
//           </div>
//           <span>items</span>
//         </div>
//       ),
//     },
//     {
//       key: "date",
//       label: "Created",
//       sortable: true,
//     },
//     {
//       key: "publish",
//       label: "Status",
//       sortable: false,
//       render: (category) => (
//         <div className="flex items-center justify-center">
//           <ToggleSwitch isOn={category.publish} onToggle={() => handleTogglePublish(category.id)} />
//         </div>
//       ),
//     },
//   ]

//   // Handle toggle publish
//   const handleTogglePublish = (categoryId) => {
//     setCategories(
//       categories.map((category) =>
//         category.id === categoryId ? { ...category, publish: !category.publish } : category,
//       ),
//     )
//   }

//   // Handle delete category
//   const handleDeleteCategory = (categoryId) => {
//     if (window.confirm("Are you sure you want to delete this category?")) {
//       setCategories(categories.filter((category) => category.id !== categoryId))
//     }
//   }

//   // Define expandable row content with improved design
//   const expandableRow = (category) => {
//     const leftContent = [
//       {
//         icon: (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5 text-blue-600"
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
//         value: category.description,
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
//             <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
//           </svg>
//         ),
//         label: "Status",
//         value: category.publish ? "Published" : "Draft",
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
//               d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
//               clipRule="evenodd"
//             />
//           </svg>
//         ),
//         label: "Created Date",
//         value: category.date,
//         iconBg: "purple-100",
//       },
//     ]

//     const rightContent = [
//       {
//         label: "Total Foods",
//         value: category.foods,
//       },
//       {
//         label: "Active Foods",
//         value: Math.floor(category.foods * 0.8),
//       },
//       {
//         label: "Inactive Foods",
//         value: Math.ceil(category.foods * 0.2),
//       },
//     ]

//     const actionButtons = (
//       <>
//         {/* <ActionButton
//           icon={<FaEye />}
//           title="View Category"
//           variant="primary"
//           to={`/categories/view/${category.id}`}
//           showLabel={true}
//           label="View"
//         /> */}
//         <ActionButton
//           icon={<FaEdit />}
//           title="Edit Category"
//           variant="success"
//           to={`/categories/edit/${category.id}`}
//           showLabel={true}
//           label="Edit"
//         />
//         <ActionButton
//           icon={<FaTrashAlt />}
//           title="Delete Category"
//           variant="danger"
//           onClick={() => handleDeleteCategory(category.id)}
//           showLabel={true}
//           label="Delete"
//         />
//       </>
//     )
    
//     return (
//       <ExpandableRowContent
//         leftTitle="Category Details"
//         rightTitle="Food Items"
//         leftContent={leftContent}
//         rightContent={rightContent}
//         actionButtons={actionButtons}
//         leftTitleColor="primary-900"
//         rightTitleColor="green-500"
//         variant="minimal"
//       />
//     )
//   }

//   return (
//     <div className="mx-5 my-3">
//        <div className="mb-4 flex justify-end">
//               <Link
//                 to="/categories/create/infomation"
//                 className="bg-primary-900 text-white px-4 py-2 rounded-lg hover:bg-primary-800 transition-colors flex items-center justify-center"
//               >
//                 <FaPlus className="mr-2" /> Add Category
//               </Link>
//             </div>
//       <TableList
//         data={categories}
//         columns={columns}
//         title="Categories Management"
//         description="View and manage food categories in your platform"
//         searchPlaceholder="Search categories by name..."
//         showSearch={true}
//         expandableRow={expandableRow}
//         actionButtons={[
//           {
//             icon: <FaEye className="w-4 h-4" />,
//             title: "View Category",
//             className: "p-1.5 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100",
//             onClick: (category) => {
//               navigate("/categories/create/infomation") // Use an existing valid route
//             },
//           },
//           {
//             icon: <FaEdit className="w-4 h-4" />,
//             title: "Edit Category",
//             className: "p-1.5 bg-green-50 text-green-600 rounded-full hover:bg-green-100",
//             onClick: (category) => {
//               navigate("/categories/create/infomation") // Use an existing valid route
//             },
//           },
//           {
//             icon: <FaTrashAlt className="w-4 h-4" />,
//             title: "Delete Category",
//             className: "p-1.5 bg-red-50 text-red-600 rounded-full hover:bg-red-100",
//             onClick: handleDeleteCategory,
//           },
//         ]}
//         bulkActions={[
//           {
//             key: "delete",
//             label: "Delete Selected",
//             icon: <FaTrashAlt />,
//             onClick: (selectedItems) => {
//               if (window.confirm(`Are you sure you want to delete ${selectedItems.size} categories?`)) {
//                 setCategories(categories.filter((category) => !selectedItems.has(category.id)))
//               }
//             },
//             clearSelectionAfter: true,
//           },
//         ]}
//         emptyStateMessage="No categories found"
//         routePrefix="/categories"
//       />
//     </div>
//   )
// }

// export default Categories



"use client"

import { useState, useEffect } from "react"
import { FaTrashAlt, FaEdit, FaPlus } from "react-icons/fa"
import TableList from "../common/TableList"
import ExpandableRowContent from "../common/ExpandableRowContent"
import ActionButton from "../common/ActionButton"
import ToggleSwitch from "../common/ToggleSwitch"
import { Link, useNavigate } from "react-router-dom"
import {
  useGetAllCategoriesQuery,
  useUpdateCategoryStatusMutation,
  useDeleteCategoryMutation,
} from "../../redux/services/categoryService"
import { toast } from "react-toastify"

const Categories = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [sortField, setSortField] = useState("name")
  const [sortDirection, setSortDirection] = useState("asc")

  const navigate = useNavigate()

  // Fetch categories from API
  const {
    data: categoriesData,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetAllCategoriesQuery({
    page: currentPage,
    limit: pageSize,
    search: searchTerm,
    sort: sortDirection === "asc" ? sortField : `-${sortField}`,
  })

  const [updateCategoryStatus] = useUpdateCategoryStatusMutation()
  const [deleteCategory] = useDeleteCategoryMutation()

  const [categories, setCategories] = useState([])

  useEffect(() => {
    if (categoriesData?.categories) {
      const formattedCategories = categoriesData.categories.map((category) => ({
        id: category._id,
        name: category.name,
        foods: category.stats?.totalFoodCount || 0,
        img:
          category.image ||
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&h=500&q=80",
        publish: category.isActive,
        description: category.description,
        date: new Date(category.createdAt).toLocaleDateString(),
        stats: category.stats || {
          foodCount: 0,
          childFoodCount: 0,
          totalFoodCount: 0,
          orderCount: 0,
          itemCount: 0,
          revenue: 0,
        },
      }))
      setCategories(formattedCategories)
    }
  }, [categoriesData])

  // Handle toggle publish
  const handleTogglePublish = async (categoryId) => {
    try {
      const category = categories.find((c) => c.id === categoryId)
      await updateCategoryStatus({
        id: categoryId,
        isActive: !category.publish,
      }).unwrap()

      setCategories(
        categories.map((category) =>
          category.id === categoryId ? { ...category, publish: !category.publish } : category,
        ),
      )

      toast.success(`Category status updated successfully`)
    } catch (err) {
      toast.error(`Failed to update category status: ${err.message || "Unknown error"}`)
    }
  }

  // Handle delete category
  const handleDeleteCategory = async (categoryId) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        await deleteCategory(categoryId).unwrap()
        setCategories(categories.filter((category) => category.id !== categoryId))
        toast.success("Category deleted successfully")
      } catch (err) {
        toast.error(`Failed to delete category: ${err.message || "Unknown error"}`)
      }
    }
  }

  // Define columns for the table
  const columns = [
    {
      key: "img",
      label: "Image",
      sortable: false,
      render: (category) => (
        <div className="flex justify-center">
          <img
            src={
              category.img ||
              "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&h=500&q=80" ||
              "/placeholder.svg"
            }
            alt={category.name}
            className="h-12 w-12 rounded-lg object-cover border-2 border-gray-200 shadow-sm"
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&h=500&q=80"
            }}
          />
        </div>
      ),
    },
    {
      key: "name",
      label: "Name",
      sortable: true,
      render: (category) => <span className="text-primary-900 font-medium hover:text-black">{category.name}</span>,
    },
    {
      key: "foods",
      label: "Foods",
      sortable: true,
      render: (category) => (
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
            <span className="text-blue-600 font-medium">{category.foods}</span>
          </div>
          <span>items</span>
        </div>
      ),
    },
    {
      key: "date",
      label: "Created",
      sortable: true,
    },
    {
      key: "publish",
      label: "Status",
      sortable: false,
      render: (category) => (
        <div className="flex items-center justify-center">
          <ToggleSwitch isOn={category.publish} onToggle={() => handleTogglePublish(category.id)} />
        </div>
      ),
    },
  ]

  // Define expandable row content with improved design
  const expandableRow = (category) => {
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
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
        ),
        label: "Description",
        value: category.description,
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
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
          </svg>
        ),
        label: "Status",
        value: category.publish ? "Published" : "Draft",
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
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            />
          </svg>
        ),
        label: "Created Date",
        value: category.date,
        iconBg: "purple-100",
      },
    ]

    const rightContent = [
      {
        label: "Total Foods",
        value: category.foods,
      },
      {
        label: "Orders",
        value: category.stats?.orderCount || 0,
      },
      {
        label: "Revenue",
        value: `$${(category.stats?.revenue || 0).toFixed(2)}`,
      },
    ]

    const actionButtons = (
      <>
        <ActionButton
          icon={<FaEdit />}
          title="Edit Category"
          variant="success"
          to={`/categories/edit/${category.id}`}
          showLabel={true}
          label="Edit"
        />
        <ActionButton
          icon={<FaTrashAlt />}
          title="Delete Category"
          variant="danger"
          onClick={() => handleDeleteCategory(category.id)}
          showLabel={true}
          label="Delete"
        />
      </>
    )

    return (
      <ExpandableRowContent
        leftTitle="Category Details"
        rightTitle="Food Items"
        leftContent={leftContent}
        rightContent={rightContent}
        actionButtons={actionButtons}
        leftTitleColor="primary-900"
        rightTitleColor="green-500"
        variant="minimal"
      />
    )
  }

  // Handle bulk delete
  const handleBulkDelete = async (selectedItems) => {
    if (window.confirm(`Are you sure you want to delete ${selectedItems.size} categories?`)) {
      try {
        const deletePromises = Array.from(selectedItems).map((id) => deleteCategory(id).unwrap())
        await Promise.all(deletePromises)

        setCategories(categories.filter((category) => !selectedItems.has(category.id)))
        toast.success(`${selectedItems.size} categories deleted successfully`)
      } catch (err) {
        toast.error(`Failed to delete categories: ${err.message || "Unknown error"}`)
      }
    }
  }

  // Handle search
  const handleSearch = (term) => {
    setSearchTerm(term)
    setCurrentPage(1) // Reset to first page on new search
  }

  // Handle pagination
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  // Handle sort
  const handleSort = (field, direction) => {
    setSortField(field)
    setSortDirection(direction)
  }

  return (
    <div className="mx-5 my-3">
      <div className="mb-4 flex justify-end">
        <Link
          to="/categories/create/infomation"
          className="bg-primary-900 text-white px-4 py-2 rounded-lg hover:bg-primary-800 transition-colors flex items-center justify-center"
        >
          <FaPlus className="mr-2" /> Add Category
        </Link>
      </div>
      <TableList
        data={categories}
        columns={columns}
        title="Categories Management"
        description="View and manage food categories in your platform"
        searchPlaceholder="Search categories by name..."
        showSearch={true}
        expandableRow={expandableRow}
        actionButtons={[
          {
            icon: <FaEdit className="w-4 h-4" />,
            title: "Edit Category",
            className: "p-1.5 bg-green-50 text-green-600 rounded-full hover:bg-green-100",
            onClick: (category) => {
              navigate(`/categories/edit/${category.id}`)
            },
          },
          {
            icon: <FaTrashAlt className="w-4 h-4" />,
            title: "Delete Category",
            className: "p-1.5 bg-red-50 text-red-600 rounded-full hover:bg-red-100",
            onClick: (category) => handleDeleteCategory(category.id),
          },
        ]}
        bulkActions={[
          {
            key: "delete",
            label: "Delete Selected",
            icon: <FaTrashAlt />,
            onClick: handleBulkDelete,
            clearSelectionAfter: true,
          },
        ]}
        emptyStateMessage="No categories found"
        routePrefix="/categories"
        loading={isLoading}
        error={isError ? error?.message || "Failed to load categories" : null}
        onSearch={handleSearch}
        onPageChange={handlePageChange}
        onSort={handleSort}
        pagination={
          categoriesData?.pagination || {
            total: 0,
            page: 1,
            pages: 1,
            limit: 10,
          }
        }
        onRefresh={refetch}
      />
    </div>
  )
}

export default Categories
