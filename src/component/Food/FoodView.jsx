"use client"

import { useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import {
  FaUtensils,
  FaStore,
  FaLeaf,
  FaArrowLeft,
  FaEdit,
  FaTrashAlt,
  FaTag,
  FaClock,
  FaStar,
  FaShoppingCart,
  FaExclamationTriangle,
  FaCheckCircle,
  FaTimesCircle,
  FaChartLine,
  FaCarrot,
  FaBreadSlice,
} from "react-icons/fa"
import { toast } from "react-toastify"
import {
  useGetFoodByIdQuery,
  useDeleteFoodMutation,
  useToggleFoodAvailabilityMutation,
} from "../../redux/services/foodService"
import PageHeader from "../common/PageHeader"
import ToggleSwitch from "../common/ToggleSwitch"

const FoodView = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  // Get food details
  const { data, isLoading, error, refetch } = useGetFoodByIdQuery(id)

  // Delete food mutation
  const [deleteFood, { isLoading: isDeleting }] = useDeleteFoodMutation()

  // Toggle food availability mutation
  const [toggleAvailability, { isLoading: isToggling }] = useToggleFoodAvailabilityMutation()

  // State for gallery image modal
  const [selectedImage, setSelectedImage] = useState(null)

  // State for active tab
  const [activeTab, setActiveTab] = useState("details")

  // Handle delete
  const handleDelete = async () => {
    if (window.confirm(`Are you sure you want to delete ${data?.data?.food?.name}?`)) {
      try {
        await deleteFood(id).unwrap()
        toast.success(`Food "${data?.data?.food?.name}" deleted successfully`)
        navigate("/foods")
      } catch (error) {
        toast.error(error?.data?.message || "Failed to delete food")
      }
    }
  }

  // Handle status toggle
  const handleStatusToggle = async () => {
    try {
      await toggleAvailability(id).unwrap()
      toast.success("Food availability updated successfully")
      refetch()
    } catch (error) {
      toast.error(error?.data?.message || "Failed to update food availability")
    }
  }

  // Handle edit
  const handleEdit = () => {
    navigate(`/food-details/${id}`)
  }

  // If loading
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  // If error
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <FaExclamationTriangle className="text-red-500 text-5xl mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Error Loading Food</h2>
        <p className="text-gray-600 mb-4">{error?.data?.message || "Failed to load food details"}</p>
        <Link
          to="/foods"
          className="bg-primary-900 text-white px-4 py-2 rounded-lg hover:bg-primary-800 transition-colors"
        >
          Back to Foods
        </Link>
      </div>
    )
  }

  // Get food data
  const food = data?.data?.food

  if (!food) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <FaExclamationTriangle className="text-yellow-500 text-5xl mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Food Not Found</h2>
        <p className="text-gray-600 mb-4">The food item you're looking for doesn't exist or has been removed.</p>
        <Link
          to="/foods"
          className="bg-primary-900 text-white px-4 py-2 rounded-lg hover:bg-primary-800 transition-colors"
        >
          Back to Foods
        </Link>
      </div>
    )
  }

  return (
    <div className="pb-12">
      <PageHeader
        title="Food Details"
        description={`Viewing details for ${food.name}`}
        actions={[
          {
            label: "Back to Foods",
            onClick: () => navigate("/foods"),
            variant: "outline",
            icon: <FaArrowLeft className="mr-2" />,
          },
          {
            label: "Edit Food",
            onClick: handleEdit,
            variant: "success",
            icon: <FaEdit className="mr-2" />,
          },
          {
            label: "Delete Food",
            onClick: handleDelete,
            variant: "danger",
            icon: <FaTrashAlt className="mr-2" />,
            disabled: isDeleting,
          },
        ]}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl overflow-hidden shadow-md mb-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/5 p-6">
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
              <img
                src={food.image || "/placeholder.svg?height=400&width=400"}
                alt={food.name}
                className="w-full h-full object-cover"
                onClick={() => setSelectedImage(food.image)}
              />
              {food.isFeatured && (
                <div className="absolute top-2 right-2 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                  Featured
                </div>
              )}
            </div>

            {/* Gallery Preview */}
            {food.gallery && food.gallery.length > 0 && (
              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Gallery</h3>
                <div className="flex flex-wrap gap-2">
                  {food.gallery.map((img, index) => (
                    <div
                      key={index}
                      className="w-16 h-16 rounded-md overflow-hidden cursor-pointer hover:opacity-80 transition-opacity border border-gray-200"
                      onClick={() => setSelectedImage(img)}
                    >
                      <img
                        src={img || "/placeholder.svg?height=64&width=64"}
                        alt={`${food.name} gallery ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="md:w-3/5 p-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{food.name}</h1>
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    <FaStore className="text-gray-500 mr-1" />
                    <span className="text-gray-700">
                      {food.vendor?.restaurantDetails?.name || "Unknown Restaurant"}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FaTag className="text-gray-500 mr-1" />
                    <span className="text-gray-700">{food.category?.name || "Uncategorized"}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <div className="flex items-center mb-2">
                  <span className="text-2xl font-bold text-green-600 mr-2">${food.price.toFixed(2)}</span>
                  {food.discountPrice && (
                    <span className="text-sm text-gray-500 line-through">${food.discountPrice.toFixed(2)}</span>
                  )}
                </div>
                <div className="flex items-center">
                  <span className="text-sm text-gray-600 mr-2">Availability:</span>
                  <ToggleSwitch
                    isOn={food.isAvailable}
                    onToggle={handleStatusToggle}
                    size="small"
                    showLabels={true}
                    disabled={isToggling}
                  />
                </div>
              </div>
            </div>

            {/* Dietary Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {food.isVegetarian && (
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium flex items-center">
                  <FaCarrot className="mr-1" /> Vegetarian
                </span>
              )}
              {food.isVegan && (
                <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm font-medium flex items-center">
                  <FaLeaf className="mr-1" /> Vegan
                </span>
              )}
              {food.isGlutenFree && (
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium flex items-center">
                  <FaBreadSlice className="mr-1" /> Gluten Free
                </span>
              )}
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium flex items-center">
                <FaClock className="mr-1" /> {food.preparationTime || 15} min
              </span>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
              <p className="text-gray-700">{food.description || "No description provided."}</p>
            </div>

            {/* Tags */}
            {food.tags && food.tags.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {food.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="bg-white p-3 rounded-lg shadow-sm text-center">
                <div className="text-amber-500 text-xl font-bold">{food.averageRating?.toFixed(1) || "0.0"}</div>
                <div className="text-xs text-gray-500 flex items-center justify-center">
                  <FaStar className="mr-1" /> Rating
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm text-center">
                <div className="text-blue-500 text-xl font-bold">{food.totalRatings || 0}</div>
                <div className="text-xs text-gray-500">Reviews</div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm text-center">
                <div className="text-green-500 text-xl font-bold">{food.stats?.orderCount || 0}</div>
                <div className="text-xs text-gray-500 flex items-center justify-center">
                  <FaShoppingCart className="mr-1" /> Orders
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm text-center">
                <div className="text-purple-500 text-xl font-bold">
                  ${food.stats?.totalRevenue?.toFixed(2) || "0.00"}
                </div>
                <div className="text-xs text-gray-500 flex items-center justify-center">
                  <FaChartLine className="mr-1" /> Revenue
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === "details"
                  ? "border-primary-900 text-primary-900"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("details")}
            >
              Details & Nutrition
            </button>
            <button
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === "variations"
                  ? "border-primary-900 text-primary-900"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("variations")}
            >
              Variations & Add-ons
            </button>
            <button
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === "ingredients"
                  ? "border-primary-900 text-primary-900"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("ingredients")}
            >
              Ingredients & Allergens
            </button>
            {food.relatedFoods && food.relatedFoods.length > 0 && (
              <button
                className={`py-4 px-6 font-medium text-sm border-b-2 ${
                  activeTab === "related"
                    ? "border-primary-900 text-primary-900"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("related")}
              >
                Related Foods
              </button>
            )}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-xl shadow-md p-6">
        {/* Details & Nutrition Tab */}
        {activeTab === "details" && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Nutrition Information</h2>

            {food.nutrition && Object.values(food.nutrition).some((val) => val) ? (
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
                {food.nutrition.calories !== undefined && (
                  <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-lg text-center shadow-sm">
                    <div className="text-2xl font-bold text-amber-700">{food.nutrition.calories}</div>
                    <div className="text-sm text-amber-600">Calories</div>
                  </div>
                )}
                {food.nutrition.protein !== undefined && (
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center shadow-sm">
                    <div className="text-2xl font-bold text-blue-700">{food.nutrition.protein}g</div>
                    <div className="text-sm text-blue-600">Protein</div>
                  </div>
                )}
                {food.nutrition.carbs !== undefined && (
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg text-center shadow-sm">
                    <div className="text-2xl font-bold text-purple-700">{food.nutrition.carbs}g</div>
                    <div className="text-sm text-purple-600">Carbs</div>
                  </div>
                )}
                {food.nutrition.fat !== undefined && (
                  <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-lg text-center shadow-sm">
                    <div className="text-2xl font-bold text-red-700">{food.nutrition.fat}g</div>
                    <div className="text-sm text-red-600">Fat</div>
                  </div>
                )}
                {food.nutrition.fiber !== undefined && (
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg text-center shadow-sm">
                    <div className="text-2xl font-bold text-green-700">{food.nutrition.fiber}g</div>
                    <div className="text-sm text-green-600">Fiber</div>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-gray-50 p-4 rounded-lg mb-8 text-center">
                <p className="text-gray-500">No nutrition information available</p>
              </div>
            )}

            {/* Restaurant Information */}
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Restaurant Information</h2>
            {food.vendor ? (
              <div className="flex items-start mb-8">
                {food.vendor.restaurantDetails?.logo && (
                  <img
                    src={food.vendor.restaurantDetails.logo || "/placeholder.svg"}
                    alt={food.vendor.restaurantDetails.name}
                    className="w-16 h-16 object-cover rounded-lg mr-4"
                  />
                )}
                <div>
                  <h3 className="text-lg font-medium text-gray-800">{food.vendor.restaurantDetails?.name}</h3>
                  <p className="text-gray-600">Owner: {food.vendor.ownerDetails?.name}</p>
                  <Link
                    to={`/restaurant/${food.vendor._id}`}
                    className="text-primary-900 hover:text-primary-800 text-sm font-medium mt-2 inline-block"
                  >
                    View Restaurant Details
                  </Link>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 p-4 rounded-lg mb-8 text-center">
                <p className="text-gray-500">Restaurant information not available</p>
              </div>
            )}

            {/* Additional Information */}
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Additional Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-600 mb-1">Created On</p>
                <p className="font-medium text-gray-800">{new Date(food.createdAt).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Last Updated</p>
                <p className="font-medium text-gray-800">{new Date(food.updatedAt).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Status</p>
                <p className="font-medium flex items-center">
                  {food.isAvailable ? (
                    <>
                      <FaCheckCircle className="text-green-500 mr-1" />
                      <span className="text-green-600">Available</span>
                    </>
                  ) : (
                    <>
                      <FaTimesCircle className="text-red-500 mr-1" />
                      <span className="text-red-600">Not Available</span>
                    </>
                  )}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Featured</p>
                <p className="font-medium flex items-center">
                  {food.isFeatured ? (
                    <>
                      <FaCheckCircle className="text-amber-500 mr-1" />
                      <span className="text-amber-600">Featured</span>
                    </>
                  ) : (
                    <>
                      <FaTimesCircle className="text-gray-500 mr-1" />
                      <span className="text-gray-600">Not Featured</span>
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Variations & Add-ons Tab */}
        {activeTab === "variations" && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Variations</h2>
            {food.variations && food.variations.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {food.variations.map((variation, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium text-gray-800">{variation.name}</h3>
                      <span className="font-bold text-green-600">${variation.price.toFixed(2)}</span>
                    </div>
                    <div className="mt-2 flex items-center">
                      <span className="text-sm text-gray-500 mr-2">Status:</span>
                      {variation.isAvailable ? (
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Available</span>
                      ) : (
                        <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">Unavailable</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-gray-50 p-4 rounded-lg mb-8 text-center">
                <p className="text-gray-500">No variations available</p>
              </div>
            )}

            <h2 className="text-xl font-semibold text-gray-800 mb-4">Add-ons</h2>
            {food.addons && food.addons.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {food.addons.map((addon, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium text-gray-800">{addon.name}</h3>
                      <span className="font-bold text-green-600">+${addon.price.toFixed(2)}</span>
                    </div>
                    <div className="mt-2 flex items-center">
                      <span className="text-sm text-gray-500 mr-2">Status:</span>
                      {addon.isAvailable ? (
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Available</span>
                      ) : (
                        <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">Unavailable</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-gray-500">No add-ons available</p>
              </div>
            )}
          </div>
        )}

        {/* Ingredients & Allergens Tab */}
        {activeTab === "ingredients" && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Ingredients</h2>
            {food.ingredients && food.ingredients.length > 0 ? (
              <div className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {food.ingredients.map((ingredient, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded-lg flex items-center">
                      <FaUtensils className="text-gray-400 mr-2" />
                      <span className="text-gray-800">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 p-4 rounded-lg mb-8 text-center">
                <p className="text-gray-500">No ingredients listed</p>
              </div>
            )}

            <h2 className="text-xl font-semibold text-gray-800 mb-4">Allergens</h2>
            {food.allergens && food.allergens.length > 0 ? (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {food.allergens.map((allergen, index) => (
                    <div key={index} className="bg-red-50 p-3 rounded-lg flex items-center">
                      <FaExclamationTriangle className="text-red-400 mr-2" />
                      <span className="text-red-800">{allergen}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <p className="text-sm text-yellow-800">
                    <FaExclamationTriangle className="inline mr-2" />
                    Allergen information is provided for awareness. Please advise customers to notify staff of any
                    allergies.
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-gray-500">No allergens listed</p>
              </div>
            )}
          </div>
        )}

        {/* Related Foods Tab */}
        {activeTab === "related" && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Related Foods</h2>
            {food.relatedFoods && food.relatedFoods.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {food.relatedFoods.map((relatedFood, index) => (
                  <Link
                    key={index}
                    to={`/foods/${relatedFood._id}`}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="aspect-video relative">
                      <img
                        src={relatedFood.image || "/placeholder.svg?height=200&width=300"}
                        alt={relatedFood.name}
                        className="w-full h-full object-cover"
                      />
                      {relatedFood.isFeatured && (
                        <div className="absolute top-2 right-2 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                          Featured
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-800 mb-1">{relatedFood.name}</h3>
                      <div className="flex justify-between items-center">
                        <span className="text-green-600 font-bold">${relatedFood.price.toFixed(2)}</span>
                        <div className="flex items-center">
                          <FaStar className="text-amber-400 mr-1" />
                          <span className="text-gray-600 text-sm">
                            {relatedFood.averageRating?.toFixed(1) || "0.0"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-gray-500">No related foods available</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-full">
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimesCircle className="text-xl" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default FoodView
