"use client"

import { useState, useEffect } from "react"
import {
  FaPlus,
  FaMinus,
  FaTrash,
  FaReceipt,
  FaUtensils,
  FaCreditCard,
  FaMoneyBill,
  FaWallet,
  FaSearch,
} from "react-icons/fa"
import { toast } from "react-toastify"
import TitleHead from "../Header/TitleHead"

const POSInterface = () => {
  // State for categories, products, and cart
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [cart, setCart] = useState([])
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  })
  const [orderType, setOrderType] = useState("dine-in") // dine-in, takeaway, delivery, drive-through
  const [paymentMethod, setPaymentMethod] = useState("cash") // cash, card, wallet
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [amountReceived, setAmountReceived] = useState("")
  const [tableNumber, setTableNumber] = useState("")
  const [note, setNote] = useState("")

  // Mock data for categories
  const mockCategories = [
    { id: "all", name: "All Items" },
    { id: "cat1", name: "Main Course" },
    { id: "cat2", name: "Appetizers" },
    { id: "cat3", name: "Beverages" },
    { id: "cat4", name: "Desserts" },
    { id: "cat5", name: "Combos" },
  ]

  // Mock data for products
  const mockProducts = [
    {
      id: "p1",
      name: "Chicken Biryani",
      category: "cat1",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=100&h=100&fit=crop",
      available: true,
    },
    {
      id: "p2",
      name: "Butter Naan",
      category: "cat1",
      price: 2.99,
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=100&h=100&fit=crop",
      available: true,
    },
    {
      id: "p3",
      name: "Mango Lassi",
      category: "cat3",
      price: 3.99,
      image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=100&h=100&fit=crop",
      available: true,
    },
    {
      id: "p4",
      name: "Gulab Jamun",
      category: "cat4",
      price: 4.99,
      image: "https://images.unsplash.com/photo-1601303516361-2d8a3d3a8e4a?w=100&h=100&fit=crop",
      available: true,
    },
    {
      id: "p5",
      name: "Chicken Tikka",
      category: "cat2",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=100&h=100&fit=crop",
      available: true,
    },
    {
      id: "p6",
      name: "Vegetable Samosa",
      category: "cat2",
      price: 5.99,
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=100&h=100&fit=crop",
      available: true,
    },
    {
      id: "p7",
      name: "Family Feast",
      category: "cat5",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36?w=100&h=100&fit=crop",
      available: true,
      isCombo: true,
      comboItems: ["Chicken Biryani", "Butter Naan x2", "Gulab Jamun"],
    },
  ]

  // Load data on component mount
  useEffect(() => {
    // Simulate API call
    setLoading(true)
    setTimeout(() => {
      setCategories(mockCategories)
      setProducts(mockProducts)
      setFilteredProducts(mockProducts)
      setLoading(false)
    }, 1000)
  }, [])

  // Filter products when category or search term changes
  useEffect(() => {
    let filtered = [...products]

    // Apply category filter
    if (activeCategory !== "all") {
      filtered = filtered.filter((product) => product.category === activeCategory)
    }

    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter((product) => product.name.toLowerCase().includes(term))
    }

    setFilteredProducts(filtered)
  }, [activeCategory, searchTerm, products])

  // Handle category change
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId)
  }

  // Handle search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  // Add product to cart
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id)

    if (existingItem) {
      // Update quantity if product already in cart
      const updatedCart = cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      setCart(updatedCart)
    } else {
      // Add new product to cart
      setCart([...cart, { ...product, quantity: 1 }])
    }

    toast.success(`${product.name} added to cart`)
  }

  // Update cart item quantity
  const updateCartItemQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      // Remove item if quantity is less than 1
      removeFromCart(itemId)
      return
    }

    const updatedCart = cart.map((item) => (item.id === itemId ? { ...item, quantity: newQuantity } : item))
    setCart(updatedCart)
  }

  // Remove item from cart
  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId)
    setCart(updatedCart)
  }

  // Clear cart
  const clearCart = () => {
    if (cart.length === 0) return

    if (window.confirm("Are you sure you want to clear the cart?")) {
      setCart([])
      toast.info("Cart cleared")
    }
  }

  // Calculate subtotal
  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  // Calculate tax (assuming 10% tax rate)
  const calculateTax = () => {
    return calculateSubtotal() * 0.1
  }

  // Calculate total
  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax()
  }

  // Handle payment
  const handlePayment = () => {
    if (cart.length === 0) {
      toast.error("Cart is empty")
      return
    }

    // For dine-in, check if table number is provided
    if (orderType === "dine-in" && !tableNumber) {
      toast.error("Please enter a table number")
      return
    }

    // For delivery, check if customer info is provided
    if (orderType === "delivery" && (!customerInfo.name || !customerInfo.phone || !customerInfo.address)) {
      toast.error("Please enter customer name, phone, and address for delivery")
      return
    }

    setShowPaymentModal(true)
  }

  // Process payment
  const processPayment = () => {
    // Validate payment amount for cash payments
    if (paymentMethod === "cash") {
      const received = Number.parseFloat(amountReceived)
      if (isNaN(received) || received < calculateTotal()) {
        toast.error("Invalid amount received")
        return
      }
    }

    // In a real app, this would call your payment processing API
    toast.success("Payment processed successfully")

    // Generate receipt or order
    const order = {
      items: cart,
      subtotal: calculateSubtotal(),
      tax: calculateTax(),
      total: calculateTotal(),
      orderType,
      paymentMethod,
      customerInfo,
      tableNumber: orderType === "dine-in" ? tableNumber : null,
      note,
      timestamp: new Date().toISOString(),
    }

    console.log("Order created:", order)

    // Clear form and cart
    setCart([])
    setCustomerInfo({
      name: "",
      phone: "",
      email: "",
      address: "",
    })
    setTableNumber("")
    setNote("")
    setAmountReceived("")
    setShowPaymentModal(false)

    // In a real app, you would redirect to a receipt page or print the receipt
  }

  // Calculate change
  const calculateChange = () => {
    const received = Number.parseFloat(amountReceived)
    if (isNaN(received)) return 0
    return Math.max(0, received - calculateTotal())
  }

  return (
    <div className="p-4">
      <TitleHead title="Point of Sale" desc="Process orders and payments" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Products */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg p-4">
            {/* Search and Categories */}
            <div className="mb-4">
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>

              <div className="flex overflow-x-auto pb-2 scrollbar-custom">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`px-4 py-2 rounded-full mr-2 whitespace-nowrap ${
                      activeCategory === category.id
                        ? "bg-primary-900 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Products Grid */}
            {loading ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {[...Array(8)].map((_, index) => (
                  <div key={index} className="animate-pulse">
                    <div className="bg-gray-200 h-32 rounded-lg mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => addToCart(product)}
                      className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <div className="h-32 overflow-hidden">
                        <img
                          src={product.image || "/placeholder.svg?height=128&width=128"}
                          alt={product.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = "/placeholder.svg?height=128&width=128"
                          }}
                        />
                      </div>
                      <div className="p-2">
                        <h3 className="font-medium text-gray-800 truncate">{product.name}</h3>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-green-600 font-medium">${product.price.toFixed(2)}</span>
                          {product.isCombo && (
                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Combo</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full py-8 text-center text-gray-500">No products found</div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Cart */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg h-full flex flex-col">
            {/* Order Type Selection */}
            <div className="p-4 border-b">
              <h2 className="font-bold text-gray-800 mb-2">Order Type</h2>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setOrderType("dine-in")}
                  className={`p-2 rounded-lg flex items-center justify-center ${
                    orderType === "dine-in"
                      ? "bg-primary-900 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <FaUtensils className="mr-2" /> Dine-in
                </button>
                <button
                  onClick={() => setOrderType("takeaway")}
                  className={`p-2 rounded-lg flex items-center justify-center ${
                    orderType === "takeaway"
                      ? "bg-primary-900 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <FaReceipt className="mr-2" /> Takeaway
                </button>
                <button
                  onClick={() => setOrderType("delivery")}
                  className={`p-2 rounded-lg flex items-center justify-center ${
                    orderType === "delivery"
                      ? "bg-primary-900 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <FaReceipt className="mr-2" /> Delivery
                </button>
                <button
                  onClick={() => setOrderType("drive-through")}
                  className={`p-2 rounded-lg flex items-center justify-center ${
                    orderType === "drive-through"
                      ? "bg-primary-900 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <FaReceipt className="mr-2" /> Drive-through
                </button>
              </div>
            </div>

            {/* Customer Info (for delivery) */}
            {orderType === "delivery" && (
              <div className="p-4 border-b">
                <h2 className="font-bold text-gray-800 mb-2">Customer Information</h2>
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Customer Name*"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                    className="w-full p-2 border rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number*"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                    className="w-full p-2 border rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                    className="w-full p-2 border rounded-lg"
                  />
                  <textarea
                    placeholder="Delivery Address*"
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                    className="w-full p-2 border rounded-lg"
                    rows="2"
                  ></textarea>
                </div>
              </div>
            )}

            {/* Table Number (for dine-in) */}
            {orderType === "dine-in" && (
              <div className="p-4 border-b">
                <h2 className="font-bold text-gray-800 mb-2">Table Number</h2>
                <input
                  type="text"
                  placeholder="Enter Table Number"
                  value={tableNumber}
                  onChange={(e) => setTableNumber(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                />
              </div>
            )}

            {/* Cart Items */}
            <div className="flex-grow overflow-y-auto p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-gray-800">Cart Items</h2>
                <button
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-800 text-sm"
                  disabled={cart.length === 0}
                >
                  Clear All
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-8 text-gray-500">Cart is empty</div>
              ) : (
                <div className="space-y-3">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center border-b pb-2">
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-800">{item.name}</h3>
                        <p className="text-sm text-gray-500">
                          ${item.price.toFixed(2)} x {item.quantity}
                        </p>
                        {item.isCombo && (
                          <div className="text-xs text-gray-500 mt-1">
                            {item.comboItems.map((comboItem, index) => (
                              <div key={index}>{comboItem}</div>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="flex items-center">
                        <button
                          onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)}
                          className="p-1 text-gray-600 hover:text-gray-800"
                        >
                          <FaMinus size={12} />
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                          onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}
                          className="p-1 text-gray-600 hover:text-gray-800"
                        >
                          <FaPlus size={12} />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-2 p-1 text-red-600 hover:text-red-800"
                        >
                          <FaTrash size={12} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Order Note */}
            <div className="p-4 border-t">
              <h2 className="font-bold text-gray-800 mb-2">Order Note</h2>
              <textarea
                placeholder="Add note to order"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full p-2 border rounded-lg"
                rows="2"
              ></textarea>
            </div>

            {/* Order Summary */}
            <div className="p-4 border-t bg-gray-50">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-medium">${calculateSubtotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Tax (10%):</span>
                <span className="font-medium">${calculateTax().toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-gray-800 font-bold">Total:</span>
                <span className="text-primary-900 font-bold">${calculateTotal().toFixed(2)}</span>
              </div>

              <button
                onClick={handlePayment}
                disabled={cart.length === 0}
                className={`w-full py-3 rounded-lg flex items-center justify-center ${
                  cart.length === 0
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-primary-900 text-white hover:bg-primary-800"
                }`}
              >
                <FaCreditCard className="mr-2" /> Process Payment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Payment</h2>

            {/* Payment Method Selection */}
            <div className="mb-4">
              <h3 className="font-medium text-gray-700 mb-2">Payment Method</h3>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setPaymentMethod("cash")}
                  className={`p-2 rounded-lg flex flex-col items-center justify-center ${
                    paymentMethod === "cash"
                      ? "bg-primary-900 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <FaMoneyBill className="mb-1" />
                  <span className="text-sm">Cash</span>
                </button>
                <button
                  onClick={() => setPaymentMethod("card")}
                  className={`p-2 rounded-lg flex flex-col items-center justify-center ${
                    paymentMethod === "card"
                      ? "bg-primary-900 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <FaCreditCard className="mb-1" />
                  <span className="text-sm">Card</span>
                </button>
                <button
                  onClick={() => setPaymentMethod("wallet")}
                  className={`p-2 rounded-lg flex flex-col items-center justify-center ${
                    paymentMethod === "wallet"
                      ? "bg-primary-900 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <FaWallet className="mb-1" />
                  <span className="text-sm">Wallet</span>
                </button>
              </div>
            </div>

            {/* Amount Received (for cash payments) */}
            {paymentMethod === "cash" && (
              <div className="mb-4">
                <h3 className="font-medium text-gray-700 mb-2">Amount Received</h3>
                <input
                  type="number"
                  placeholder="Enter amount"
                  value={amountReceived}
                  onChange={(e) => setAmountReceived(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                />
                {amountReceived && !isNaN(Number.parseFloat(amountReceived)) && (
                  <div className="mt-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total:</span>
                      <span className="font-medium">${calculateTotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Received:</span>
                      <span className="font-medium">${Number.parseFloat(amountReceived).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-800 font-bold">Change:</span>
                      <span className="text-green-600 font-bold">${calculateChange().toFixed(2)}</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Order Summary */}
            <div className="mb-4 p-3 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-700 mb-2">Order Summary</h3>
              <div className="flex justify-between mb-1">
                <span className="text-gray-600">Items:</span>
                <span className="font-medium">{cart.reduce((total, item) => total + item.quantity, 0)}</span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-medium">${calculateSubtotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-600">Tax:</span>
                <span className="font-medium">${calculateTax().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-800 font-bold">Total:</span>
                <span className="text-primary-900 font-bold">${calculateTotal().toFixed(2)}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowPaymentModal(false)}
                className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={processPayment}
                className="px-4 py-2 bg-primary-900 text-white rounded-lg hover:bg-primary-800"
              >
                Complete Payment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default POSInterface
