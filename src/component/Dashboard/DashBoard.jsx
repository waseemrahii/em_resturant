
import { useState, useEffect } from "react"
import { FaChartLine, FaStore, FaUtensils, FaShoppingBag, FaUsers, FaCarSide, FaMoneyBillWave } from "react-icons/fa"
import {
  MdDeliveryDining,
  MdCancel,
  MdCheckCircle,
  MdLocalShipping,
  MdAccessTimeFilled,
  MdPendingActions,
} from "react-icons/md"
import StatisticGraph from "./DashboardCards/StatisticGraph"
import RestaurantsSection from "./RestaurantsSection"
import RecentOrder from "./RecentOrder"
import TopOrderCard from "./TopOrderCard"
import RecentPayOut from "./RecentPayOut"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import {
  useGetDashboardStatsQuery,
  useGetRecentOrdersQuery,
  useGetTopRestaurantsQuery,
  useGetTopFoodsQuery,
  useGetTopDriversQuery,
  useGetRecentPayoutsQuery,
} from "../../redux/services/dashboardService"

const DashBoard = () => {
  // Use RTK Query hooks to fetch data
  const { data: statsData, isLoading: statsLoading, error: statsError } = useGetDashboardStatsQuery()

  const { data: recentOrdersData, isLoading: ordersLoading, error: ordersError } = useGetRecentOrdersQuery()

  const {
    // data: topRestaurantsData,
    isLoading: restaurantsLoading,
    error: restaurantsError,
  } = useGetTopRestaurantsQuery()

  const { data: topFoodsData, isLoading: foodsLoading, error: foodsError } = useGetTopFoodsQuery()

  const { data: topDriversData, isLoading: driversLoading, error: driversError } = useGetTopDriversQuery()

  const { data: recentPayoutsData, isLoading: payoutsLoading, error: payoutsError } = useGetRecentPayoutsQuery()

  // Determine overall loading state
  const isLoading =
    statsLoading || ordersLoading || restaurantsLoading || foodsLoading || driversLoading || payoutsLoading

  // Dashboard data state
  const [dashboardData, setDashboardData] = useState({
    totalEarnings: 0,
    totalRestaurants: 0,
    activeVendors: 0,
    totalVendors: 0,
    totalOrders: 0,
    totalFoods: 0,
    adminCommission: 0,
    totalClients: 0,
    totalDrivers: 0,
    ordersByStatus: {
      pending: 0,
      accepted: 0,
      preparing: 0,
      ready_for_pickup: 0,
      out_for_delivery: 0,
      delivered: 0,
      cancelled: 0,
      refunded: 0,
    },
    chartData: {
      labels: [],
      orders: [],
      revenue: [],
      adminCommission: [],
    },
    monthlyChartData: {
      labels: [],
      revenue: [],
      orders: [],
      adminCommission: [],
    },
    serviceOverview: {
      totalRestaurants: 0,
      totalOrders: 0,
      totalFoods: 0,
      totalClients: 0,
      totalDrivers: 0,
    },
    salesOverview: {
      totalEarnings: 0,
      adminCommission: 0,
    },
  })

  // Update dashboard data when stats data is received
  useEffect(() => {
    if (statsData?.success) {
      const data = statsData.data
      setDashboardData({
        totalEarnings: data.totalRevenue || 0,
        totalRestaurants: data.totalVendors || 0,
        activeVendors: data.activeVendors || 0,
        totalVendors: data.totalVendors || 0,
        totalOrders: data.totalOrders || 0,
        totalFoods: data.totalFoods || 0,
        adminCommission: data.adminCommission || 0,
        totalClients: data.totalCustomers || 0,
        totalDrivers: data.totalDrivers || 0,
        ordersByStatus: data.ordersByStatus || {},
        chartData: data.chartData || {},
        monthlyChartData: data.monthlyChartData || {},
        serviceOverview: data.serviceOverview || {},
        salesOverview: data.salesOverview || {},
      })
    }
  }, [statsData])

  // Show error toast if any API call fails
  useEffect(() => {
    if (statsError) {
      toast.error("Failed to load dashboard statistics")
    }
    if (ordersError) {
      toast.error("Failed to load recent orders")
    }
    if (restaurantsError) {
      toast.error("Failed to load top restaurants")
    }
    if (foodsError) {
      toast.error("Failed to load top foods")
    }
    if (driversError) {
      toast.error("Failed to load top drivers")
    }
    if (payoutsError) {
      toast.error("Failed to load recent payouts")
    }
  }, [statsError, ordersError, restaurantsError, foodsError, driversError, payoutsError])

  const cardData = [
    {
      title: "Total Revenue",
      value: `$${dashboardData.totalEarnings.toFixed(2)}`,
      icon: <FaChartLine />,
      link: "/payments",
      bgColor: "bg-gradient-to-r from-green-50 to-green-100",
      iconBg: "bg-gradient-to-r from-green-500 to-green-600",
      textColor: "text-green-700",
    },
    {
      title: "Total Vendors",
      value: dashboardData.totalVendors,
      icon: <FaStore />,
      link: "/restaurants",
      bgColor: "bg-gradient-to-r from-blue-50 to-blue-100",
      iconBg: "bg-gradient-to-r from-blue-500 to-blue-600",
      textColor: "text-blue-700",
    },
    {
      title: "Total Orders",
      value: dashboardData.totalOrders,
      icon: <FaShoppingBag />,
      link: "/orders",
      bgColor: "bg-gradient-to-r from-amber-50 to-amber-100",
      iconBg: "bg-gradient-to-r from-amber-500 to-amber-600",
      textColor: "text-amber-700",
    },
    {
      title: "Total Foods",
      value: dashboardData.totalFoods,
      icon: <FaUtensils />,
      link: "/foods",
      bgColor: "bg-gradient-to-r from-purple-50 to-purple-100",
      iconBg: "bg-gradient-to-r from-purple-500 to-purple-600",
      textColor: "text-purple-700",
    },
  ]

  const cardData2 = [
    {
      title: "Admin Commission",
      value: `$${dashboardData.adminCommission.toFixed(2)}`,
      icon: <FaMoneyBillWave />,
      bgColor: "bg-gradient-to-r from-pink-50 to-pink-100",
      iconBg: "bg-gradient-to-r from-pink-500 to-pink-600",
      textColor: "text-pink-700",
    },
    {
      title: "Total Clients",
      value: dashboardData.totalClients,
      icon: <FaUsers />,
      bgColor: "bg-gradient-to-r from-indigo-50 to-indigo-100",
      iconBg: "bg-gradient-to-r from-indigo-500 to-indigo-600",
      textColor: "text-indigo-700",
    },
    {
      title: "Total Drivers",
      value: dashboardData.totalDrivers,
      icon: <FaCarSide />,
      bgColor: "bg-gradient-to-r from-yellow-50 to-yellow-100",
      iconBg: "bg-gradient-to-r from-yellow-500 to-yellow-600",
      textColor: "text-yellow-700",
    },
  ]

  // Create order status cards from the ordersByStatus object
  const orderStatusCards = [
    {
      title: "Pending",
      value: dashboardData.ordersByStatus.pending || 0,
      icon: <MdPendingActions className="text-amber-500" />,
      bgColor: "bg-amber-50",
      textColor: "text-amber-700",
    },
    {
      title: "Accepted",
      value: dashboardData.ordersByStatus.accepted || 0,
      icon: <MdCheckCircle className="text-blue-500" />,
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
    },
    {
      title: "Preparing",
      value: dashboardData.ordersByStatus.preparing || 0,
      icon: <MdAccessTimeFilled className="text-indigo-500" />,
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-700",
    },
    {
      title: "Ready for Pickup",
      value: dashboardData.ordersByStatus.ready_for_pickup || 0,
      icon: <MdLocalShipping className="text-purple-500" />,
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
    },
    {
      title: "Out for Delivery",
      value: dashboardData.ordersByStatus.out_for_delivery || 0,
      icon: <MdDeliveryDining className="text-blue-500" />,
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
    },
    {
      title: "Delivered",
      value: dashboardData.ordersByStatus.delivered || 0,
      icon: <MdCheckCircle className="text-green-600" />,
      bgColor: "bg-green-50",
      textColor: "text-green-700",
    },
    {
      title: "Cancelled",
      value: dashboardData.ordersByStatus.cancelled || 0,
      icon: <MdCancel className="text-red-500" />,
      bgColor: "bg-red-50",
      textColor: "text-red-700",
    },
    {
      title: "Refunded",
      value: dashboardData.ordersByStatus.refunded || 0,
      icon: <MdCancel className="text-orange-500" />,
      bgColor: "bg-orange-50",
      textColor: "text-orange-700",
    },
  ]

  // Skeleton loader for cards
  const CardSkeleton = () => (
    <div className="animate-pulse rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center">
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
      </div>
      <div className="h-6 bg-gray-200 rounded w-1/4 mt-4"></div>
    </div>
  )

  return (
    <div className="w-full">
      {/* Welcome Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome to 6Amart Seller  Panel</h1>
            <p className="text-gray-600">Here's what's happening with your platform today.</p>
          </div>
          <div className="hidden md:flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-50 to-primary-100 rounded-full">
            <FaChartLine className="text-primary-500 text-3xl" />
          </div>
        </div>
      </div>

      {/* Business Analytics Section */}
      <div className="bg-white rounded-lg shadow-md mb-6 overflow-hidden border border-gray-100">
        <h2 className="text-lg font-semibold text-white p-4 bg-gradient-to-r from-primary-500 to-primary-600 flex items-center">
          <FaChartLine className="mr-2" /> Business Analytics
        </h2>

        {/* Main Stats Cards */}
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {isLoading
              ? Array(4)
                  .fill(0)
                  .map((_, index) => <CardSkeleton key={index} />)
              : cardData.map((card, index) => (
                  <Link to={card.link} key={index} className="transform transition-transform hover:scale-105">
                    <div className={`${card.bgColor} rounded-lg shadow-md p-4 border border-gray-100`}>
                      <div className="flex justify-between items-center">
                        <h3 className={`font-medium ${card.textColor}`}>{card.title}</h3>
                        <div className={`${card.iconBg} text-white p-2 rounded-full shadow-md`}>{card.icon}</div>
                      </div>
                      <p className={`text-2xl font-bold ${card.textColor} mt-2`}>{card.value}</p>
                    </div>
                  </Link>
                ))}
          </div>

          {/* Secondary Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {isLoading
              ? Array(3)
                  .fill(0)
                  .map((_, index) => <CardSkeleton key={index} />)
              : cardData2.map((card, index) => (
                  <div key={index} className={`${card.bgColor} rounded-lg shadow-md p-4 border border-gray-100`}>
                    <div className="flex justify-between items-center">
                      <h3 className={`font-medium ${card.textColor}`}>{card.title}</h3>
                      <div className={`${card.iconBg} text-white p-2 rounded-full shadow-md`}>{card.icon}</div>
                    </div>
                    <p className={`text-2xl font-bold ${card.textColor} mt-2`}>{card.value}</p>
                  </div>
                ))}
          </div>

          {/* Order Status Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
            {isLoading
              ? Array(4)
                  .fill(0)
                  .map((_, index) => (
                    <div key={index} className="animate-pulse rounded-lg shadow-md p-3">
                      <div className="flex items-center">
                        <div className="h-5 w-5 bg-gray-200 rounded-full mr-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                      </div>
                      <div className="h-5 bg-gray-200 rounded w-1/4 mt-2 ml-7"></div>
                    </div>
                  ))
              : orderStatusCards.map((card, index) => (
                  <Link to="/orders" key={index} className="transform transition-transform hover:scale-105">
                    <div
                      className={`${card.bgColor} rounded-lg shadow-md p-3 flex items-center border border-gray-100`}
                    >
                      <div className="mr-3">{card.icon}</div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-700">{card.title}</h3>
                        <p className={`text-lg font-bold ${card.textColor}`}>{card.value}</p>
                      </div>
                    </div>
                  </Link>
                ))}
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <StatisticGraph
        isLoading={isLoading}
        monthlyChartData={dashboardData.monthlyChartData}
        serviceOverview={dashboardData.serviceOverview}
        salesOverview={dashboardData.salesOverview}
      />

      {/* Bottom Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-white rounded-lg shadow-md border border-gray-100">
          <RestaurantsSection isLoading={restaurantsLoading} restaurants={topRestaurantsData?.data || []} />
        </div>
        <div className="bg-white rounded-lg shadow-md border border-gray-100">
          <RecentOrder isLoading={ordersLoading} orders={recentOrdersData?.data || []} />
        </div>
        <div className="bg-white rounded-lg shadow-md border border-gray-100">
          <TopOrderCard isLoading={foodsLoading} topFoods={topFoodsData?.data || []} />
        </div>
        <div className="bg-white rounded-lg shadow-md border border-gray-100">
          <RecentPayOut
            isLoading={payoutsLoading || driversLoading}
            payouts={recentPayoutsData?.data || []}
            topDrivers={topDriversData?.data || []}
          />
        </div>
      </div>
    </div>
  )
}

export default DashBoard
