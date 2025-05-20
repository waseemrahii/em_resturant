"use client"

import { useState, useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js"
import {
  FaChartLine,
  FaChartBar,
  FaChartPie,
  FaUsers,
  FaMotorcycle,
  FaUtensils,
  FaStore,
  FaMoneyBillWave,
} from "react-icons/fa"
import { MdDashboard, MdRefresh, MdTrendingUp, MdTrendingDown } from "react-icons/md"
import { toast } from "react-toastify"
import LoadingSpinner from "../common/LoadingSpinner"
import NoDataFound from "../common/NoDataFound"
import {
  useGetBusinessOverviewQuery,
  useGetSalesAnalyticsQuery,
  useGetVendorPerformanceQuery,
  useGetFoodItemAnalyticsQuery,
  useGetCustomerAnalyticsQuery,
  useGetDriverAnalyticsQuery,
} from "../../redux/services/analyticsService"

// Register all Chart.js components
Chart.register(...registerables)

const AnalyticsSettings = () => {
  const [activeTab, setActiveTab] = useState("overview")
  const [period, setPeriod] = useState("month")
  const [compareWith, setCompareWith] = useState("previous")
  const [refreshKey, setRefreshKey] = useState(0)

  // Refresh data
  const handleRefresh = () => {
    setRefreshKey((prev) => prev + 1)
    toast.info("Refreshing analytics data...")
  }

  return (
    <div className="bg-white rounded-lg shadow-md">
      {/* Analytics Header */}
      <div className="bg-primary-900  text-white p-6 rounded-t-lg">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
            <p className="text-primary-100 mt-1">Comprehensive insights for your food delivery platform</p>
          </div>
          <button
            onClick={handleRefresh}
            className="bg-white text-primary-900 px-4 py-2 rounded-lg flex items-center hover:bg-primary-50 transition-colors"
          >
            <MdRefresh className="mr-2" /> Refresh Data
          </button>
        </div>
      </div>

      {/* Analytics Navigation */}
      <div className="border-b border-gray-200 px-6">
        <nav className="flex overflow-x-auto scrollbar-hide py-3 space-x-4">
          <button
            onClick={() => setActiveTab("overview")}
            className={`flex items-center px-3 py-2 text-sm font-medium rounded-md whitespace-nowrap ${
              activeTab === "overview"
                ? "bg-primary-100 text-primary-900"
                : "text-gray-600 hover:text-primary-900 hover:bg-primary-50"
            }`}
          >
            <MdDashboard className="mr-2" /> Business Overview
          </button>
          <button
            onClick={() => setActiveTab("sales")}
            className={`flex items-center px-3 py-2 text-sm font-medium rounded-md whitespace-nowrap ${
              activeTab === "sales"
                ? "bg-primary-100 text-primary-900"
                : "text-gray-600 hover:text-primary-900 hover:bg-primary-50"
            }`}
          >
            <FaChartLine className="mr-2" /> Sales Analytics
          </button>
          <button
            onClick={() => setActiveTab("vendors")}
            className={`flex items-center px-3 py-2 text-sm font-medium rounded-md whitespace-nowrap ${
              activeTab === "vendors"
                ? "bg-primary-100 text-primary-900"
                : "text-gray-600 hover:text-primary-900 hover:bg-primary-50"
            }`}
          >
            <FaStore className="mr-2" /> Vendor Performance
          </button>
          <button
            onClick={() => setActiveTab("food")}
            className={`flex items-center px-3 py-2 text-sm font-medium rounded-md whitespace-nowrap ${
              activeTab === "food"
                ? "bg-primary-100 text-primary-900"
                : "text-gray-600 hover:text-primary-900 hover:bg-primary-50"
            }`}
          >
            <FaUtensils className="mr-2" /> Food Items
          </button>
          <button
            onClick={() => setActiveTab("customers")}
            className={`flex items-center px-3 py-2 text-sm font-medium rounded-md whitespace-nowrap ${
              activeTab === "customers"
                ? "bg-primary-100 text-primary-900"
                : "text-gray-600 hover:text-primary-900 hover:bg-primary-50"
            }`}
          >
            <FaUsers className="mr-2" /> Customer Analytics
          </button>
          <button
            onClick={() => setActiveTab("drivers")}
            className={`flex items-center px-3 py-2 text-sm font-medium rounded-md whitespace-nowrap ${
              activeTab === "drivers"
                ? "bg-primary-100 text-primary-900"
                : "text-gray-600 hover:text-primary-900 hover:bg-primary-50"
            }`}
          >
            <FaMotorcycle className="mr-2" /> Driver Analytics
          </button>
        </nav>
      </div>

      {/* Period Selector */}
      <div className="flex justify-between items-center px-6 py-4 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <label className="text-sm font-medium text-gray-700">Time Period:</label>
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
          >
            <option value="day">Today</option>
            <option value="week">Last 7 days</option>
            <option value="month">Last 30 days</option>
            <option value="quarter">Last 3 months</option>
            <option value="year">Last 12 months</option>
          </select>
        </div>
        {activeTab === "sales" && (
          <div className="flex items-center space-x-4">
            <label className="text-sm font-medium text-gray-700">Compare With:</label>
            <select
              value={compareWith}
              onChange={(e) => setCompareWith(e.target.value)}
              className="bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            >
              <option value="previous">Previous Period</option>
              <option value="none">No Comparison</option>
            </select>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-6">
        {activeTab === "overview" && <BusinessOverview key={refreshKey} />}
        {activeTab === "sales" && <SalesAnalytics key={refreshKey} period={period} compareWith={compareWith} />}
        {activeTab === "vendors" && <VendorPerformance key={refreshKey} period={period} />}
        {activeTab === "food" && <FoodItemAnalytics key={refreshKey} period={period} />}
        {activeTab === "customers" && <CustomerAnalytics key={refreshKey} period={period} />}
        {activeTab === "drivers" && <DriverAnalytics key={refreshKey} period={period} />}
      </div>
    </div>
  )
}

// Business Overview Component
const BusinessOverview = () => {
  const { data, isLoading, isError } = useGetBusinessOverviewQuery()
  const overviewChartRef = useRef(null)
  const vendorGrowthChartRef = useRef(null)
  const categoryChartRef = useRef(null)
  const overviewChart = useRef(null)
  const vendorGrowthChart = useRef(null)
  const categoryChart = useRef(null)

  useEffect(() => {
    if (data && overviewChartRef.current) {
      if (overviewChart.current) {
        overviewChart.current.destroy()
      }

      const ctx = overviewChartRef.current.getContext("2d")
      const monthlyData = data.trends.monthly || []

      overviewChart.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: monthlyData.map((item) => `${item.month}/${item.year}`),
          datasets: [
            {
              label: "Orders",
              data: monthlyData.map((item) => item.orders),
              backgroundColor: "rgba(59, 130, 246, 0.5)",
              borderColor: "rgb(59, 130, 246)",
              borderWidth: 1,
              yAxisID: "y",
            },
            {
              label: "Revenue",
              data: monthlyData.map((item) => item.revenue),
              backgroundColor: "rgba(16, 185, 129, 0.5)",
              borderColor: "rgb(16, 185, 129)",
              borderWidth: 1,
              type: "line",
              yAxisID: "y1",
            },
          ],
        },
        options: {
          responsive: true,
          interaction: {
            mode: "index",
            intersect: false,
          },
          plugins: {
            title: {
              display: true,
              text: "Monthly Revenue & Orders",
              font: {
                size: 16,
              },
            },
            legend: {
              position: "top",
            },
          },
          scales: {
            y: {
              type: "linear",
              display: true,
              position: "left",
              title: {
                display: true,
                text: "Orders",
              },
            },
            y1: {
              type: "linear",
              display: true,
              position: "right",
              title: {
                display: true,
                text: "Revenue ($)",
              },
              grid: {
                drawOnChartArea: false,
              },
            },
          },
        },
      })
    }

    if (data && vendorGrowthChartRef.current) {
      if (vendorGrowthChart.current) {
        vendorGrowthChart.current.destroy()
      }

      const ctx = vendorGrowthChartRef.current.getContext("2d")
      const vendorData = data.trends.vendorGrowth || []

      vendorGrowthChart.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: vendorData.map((item) => `${item.month}/${item.year}`),
          datasets: [
            {
              label: "New Vendors",
              data: vendorData.map((item) => item.count),
              backgroundColor: "rgba(245, 158, 11, 0.5)",
              borderColor: "rgb(245, 158, 11)",
              borderWidth: 2,
              tension: 0.3,
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Vendor Growth",
              font: {
                size: 16,
              },
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "New Vendors",
              },
            },
          },
        },
      })
    }

    if (data && categoryChartRef.current) {
      if (categoryChart.current) {
        categoryChart.current.destroy()
      }

      const ctx = categoryChartRef.current.getContext("2d")
      const categoryData = data.revenueByCategory || []

      categoryChart.current = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: categoryData.map((item) => item.name),
          datasets: [
            {
              data: categoryData.map((item) => item.revenue),
              backgroundColor: [
                "rgba(59, 130, 246, 0.7)",
                "rgba(16, 185, 129, 0.7)",
                "rgba(245, 158, 11, 0.7)",
                "rgba(239, 68, 68, 0.7)",
                "rgba(139, 92, 246, 0.7)",
                "rgba(236, 72, 153, 0.7)",
                "rgba(14, 165, 233, 0.7)",
                "rgba(168, 85, 247, 0.7)",
                "rgba(249, 115, 22, 0.7)",
                "rgba(234, 179, 8, 0.7)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Revenue by Category",
              font: {
                size: 16,
              },
            },
            legend: {
              position: "right",
            },
          },
        },
      })
    }
  }, [data])

  if (isLoading) return <LoadingSpinner />
  if (isError) return <div className="text-red-500">Error loading business overview data</div>
  if (!data) return <NoDataFound message="No business overview data available" />

  return (
    <div>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-sm border border-blue-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-blue-700 text-sm font-medium">Total Orders</p>
              <h3 className="text-3xl font-bold text-blue-900 mt-1">{data.counts.orders.toLocaleString()}</h3>
            </div>
            <div className="bg-blue-500 p-3 rounded-full text-white">
              <FaChartBar className="text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg shadow-sm border border-green-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-green-700 text-sm font-medium">Total Revenue</p>
              <h3 className="text-3xl font-bold text-green-900 mt-1">
                $
                {data.financials.totalRevenue.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </h3>
            </div>
            <div className="bg-green-500 p-3 rounded-full text-white">
              <FaMoneyBillWave className="text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg shadow-sm border border-purple-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-purple-700 text-sm font-medium">Total Commission</p>
              <h3 className="text-3xl font-bold text-purple-900 mt-1">
                $
                {data.financials.totalCommission.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </h3>
            </div>
            <div className="bg-purple-500 p-3 rounded-full text-white">
              <FaChartPie className="text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Entity Counts */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
              <FaUsers className="text-lg" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Customers</p>
              <h4 className="text-xl font-semibold">{data.counts.customers.toLocaleString()}</h4>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="bg-amber-100 p-3 rounded-full text-amber-600 mr-4">
              <FaStore className="text-lg" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Vendors</p>
              <h4 className="text-xl font-semibold">{data.counts.vendors.toLocaleString()}</h4>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-full text-green-600 mr-4">
              <FaMotorcycle className="text-lg" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Drivers</p>
              <h4 className="text-xl font-semibold">{data.counts.drivers.toLocaleString()}</h4>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="bg-red-100 p-3 rounded-full text-red-600 mr-4">
              <FaUtensils className="text-lg" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Food Items</p>
              <h4 className="text-xl font-semibold">{data.counts.foods.toLocaleString()}</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="h-80">
            <canvas ref={overviewChartRef}></canvas>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="h-80">
            <canvas ref={vendorGrowthChartRef}></canvas>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="h-80">
            <canvas ref={categoryChartRef}></canvas>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Top Categories by Revenue</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Revenue
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.revenueByCategory.map((category, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{category.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                      $
                      {category.revenue.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

// Sales Analytics Component
const SalesAnalytics = ({ period, compareWith }) => {
  const { data, isLoading, isError } = useGetSalesAnalyticsQuery({ period, compareWith })
  const salesChartRef = useRef(null)
  const paymentMethodChartRef = useRef(null)
  const salesChart = useRef(null)
  const paymentMethodChart = useRef(null)

  useEffect(() => {
    if (data && salesChartRef.current) {
      if (salesChart.current) {
        salesChart.current.destroy()
      }

      const ctx = salesChartRef.current.getContext("2d")
      const timeSeriesData = data.timeSeries || []

      // Prepare datasets
      const datasets = [
        {
          label: "Revenue",
          data: timeSeriesData.map((item) => item.revenue),
          backgroundColor: "rgba(16, 185, 129, 0.5)",
          borderColor: "rgb(16, 185, 129)",
          borderWidth: 2,
          tension: 0.3,
          yAxisID: "y",
        },
        {
          label: "Orders",
          data: timeSeriesData.map((item) => item.orders),
          backgroundColor: "rgba(59, 130, 246, 0.5)",
          borderColor: "rgb(59, 130, 246)",
          borderWidth: 2,
          tension: 0.3,
          yAxisID: "y1",
        },
      ]

      // Add comparison data if available
      if (data.comparison && data.comparison.timeSeries) {
        datasets.push({
          label: "Previous Revenue",
          data: data.comparison.timeSeries.map((item) => item.revenue),
          backgroundColor: "rgba(16, 185, 129, 0.2)",
          borderColor: "rgb(16, 185, 129)",
          borderWidth: 1,
          borderDash: [5, 5],
          tension: 0.3,
          yAxisID: "y",
        })

        datasets.push({
          label: "Previous Orders",
          data: data.comparison.timeSeries.map((item) => item.orders),
          backgroundColor: "rgba(59, 130, 246, 0.2)",
          borderColor: "rgb(59, 130, 246)",
          borderWidth: 1,
          borderDash: [5, 5],
          tension: 0.3,
          yAxisID: "y1",
        })
      }

      salesChart.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: timeSeriesData.map((item) => item._id),
          datasets,
        },
        options: {
          responsive: true,
          interaction: {
            mode: "index",
            intersect: false,
          },
          plugins: {
            title: {
              display: true,
              text: "Sales Performance",
              font: {
                size: 16,
              },
            },
            legend: {
              position: "top",
            },
          },
          scales: {
            y: {
              type: "linear",
              display: true,
              position: "left",
              title: {
                display: true,
                text: "Revenue ($)",
              },
            },
            y1: {
              type: "linear",
              display: true,
              position: "right",
              title: {
                display: true,
                text: "Orders",
              },
              grid: {
                drawOnChartArea: false,
              },
            },
          },
        },
      })
    }

    if (data && paymentMethodChartRef.current) {
      if (paymentMethodChart.current) {
        paymentMethodChart.current.destroy()
      }

      const ctx = paymentMethodChartRef.current.getContext("2d")
      const paymentMethods = data.paymentMethods || []

      paymentMethodChart.current = new Chart(ctx, {
        type: "pie",
        data: {
          labels: paymentMethods.map((item) => item.method),
          datasets: [
            {
              data: paymentMethods.map((item) => item.total),
              backgroundColor: [
                "rgba(59, 130, 246, 0.7)",
                "rgba(16, 185, 129, 0.7)",
                "rgba(245, 158, 11, 0.7)",
                "rgba(239, 68, 68, 0.7)",
                "rgba(139, 92, 246, 0.7)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Payment Methods",
              font: {
                size: 16,
              },
            },
            legend: {
              position: "right",
            },
            tooltip: {
              callbacks: {
                label: (context) => {
                  const label = context.label || ""
                  const value = context.raw || 0
                  const percentage = paymentMethods[context.dataIndex].percentage.toFixed(1)
                  return `${label}: $${value.toLocaleString()} (${percentage}%)`
                },
              },
            },
          },
        },
      })
    }
  }, [data])

  if (isLoading) return <LoadingSpinner />
  if (isError) return <div className="text-red-500">Error loading sales analytics data</div>
  if (!data) return <NoDataFound message="No sales analytics data available" />

  // Calculate growth indicators
  const revenueGrowth = data.comparison ? data.comparison.growth.revenue : 0
  const orderGrowth = data.comparison ? data.comparison.growth.orders : 0

  return (
    <div>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">Total Revenue</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">
                $
                {data.summary.totalRevenue.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </h3>
              {data.comparison && (
                <div
                  className={`flex items-center mt-2 text-sm ${revenueGrowth >= 0 ? "text-green-600" : "text-red-600"}`}
                >
                  {revenueGrowth >= 0 ? <MdTrendingUp className="mr-1" /> : <MdTrendingDown className="mr-1" />}
                  {Math.abs(revenueGrowth).toFixed(1)}% vs previous
                </div>
              )}
            </div>
            <div className="bg-blue-100 p-3 rounded-full text-blue-600">
              <FaMoneyBillWave className="text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">Total Orders</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">{data.summary.totalOrders.toLocaleString()}</h3>
              {data.comparison && (
                <div
                  className={`flex items-center mt-2 text-sm ${orderGrowth >= 0 ? "text-green-600" : "text-red-600"}`}
                >
                  {orderGrowth >= 0 ? <MdTrendingUp className="mr-1" /> : <MdTrendingDown className="mr-1" />}
                  {Math.abs(orderGrowth).toFixed(1)}% vs previous
                </div>
              )}
            </div>
            <div className="bg-green-100 p-3 rounded-full text-green-600">
              <FaChartBar className="text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">Avg Order Value</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">
                $
                {data.summary.avgOrderValue.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </h3>
              {data.comparison && (
                <div
                  className={`flex items-center mt-2 text-sm ${
                    data.summary.avgOrderValue >= data.comparison.summary.avgOrderValue
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {data.summary.avgOrderValue >= data.comparison.summary.avgOrderValue ? (
                    <MdTrendingUp className="mr-1" />
                  ) : (
                    <MdTrendingDown className="mr-1" />
                  )}
                  {Math.abs(
                    ((data.summary.avgOrderValue - data.comparison.summary.avgOrderValue) /
                      data.comparison.summary.avgOrderValue) *
                      100,
                  ).toFixed(1)}
                  % vs previous
                </div>
              )}
            </div>
            <div className="bg-purple-100 p-3 rounded-full text-purple-600">
              <FaChartLine className="text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">Commission</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">
                $
                {data.summary.totalCommission.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </h3>
              {data.comparison && (
                <div
                  className={`flex items-center mt-2 text-sm ${
                    data.comparison.growth.commission >= 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {data.comparison.growth.commission >= 0 ? (
                    <MdTrendingUp className="mr-1" />
                  ) : (
                    <MdTrendingDown className="mr-1" />
                  )}
                  {Math.abs(data.comparison.growth.commission).toFixed(1)}% vs previous
                </div>
              )}
            </div>
            <div className="bg-amber-100 p-3 rounded-full text-amber-600">
              <FaChartPie className="text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="h-80">
            <canvas ref={salesChartRef}></canvas>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="h-80">
            <canvas ref={paymentMethodChartRef}></canvas>
          </div>
        </div>
      </div>
    </div>
  )
}

// Vendor Performance Component
const VendorPerformance = ({ period }) => {
  const { data, isLoading, isError } = useGetVendorPerformanceQuery({ period, limit: 10, sortBy: "revenue" })

  if (isLoading) return <LoadingSpinner />
  if (isError) return <div className="text-red-500">Error loading vendor performance data</div>
  if (!data) return <NoDataFound message="No vendor performance data available" />

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Top Performing Vendors</h2>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Vendor
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Orders
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Revenue
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Avg Order
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Commission
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Growth
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((vendor, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        {vendor.vendor.logo ? (
                          <img
                            className="h-10 w-10 rounded-full object-cover"
                            src={vendor.vendor.logo || "/placeholder.svg"}
                            alt=""
                          />
                        ) : (
                          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                            <FaStore />
                          </div>
                        )}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{vendor.vendor.name}</div>
                        <div className="text-sm text-gray-500">
                          {vendor.vendor.cuisineType && vendor.vendor.cuisineType.join(", ")}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">
                    {vendor.metrics.orderCount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-gray-900">
                    $
                    {vendor.metrics.revenue.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">
                    $
                    {vendor.metrics.avgOrderValue.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">
                    $
                    {vendor.metrics.adminCommission.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <div
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        vendor.metrics.growth.revenue >= 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {vendor.metrics.growth.revenue >= 0 ? (
                        <MdTrendingUp className="mr-1" />
                      ) : (
                        <MdTrendingDown className="mr-1" />
                      )}
                      {Math.abs(vendor.metrics.growth.revenue).toFixed(1)}%
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// Food Item Analytics Component
const FoodItemAnalytics = ({ period }) => {
  const { data, isLoading, isError } = useGetFoodItemAnalyticsQuery({ period })
  const categoryChartRef = useRef(null)
  const categoryChart = useRef(null)

  useEffect(() => {
    if (data && categoryChartRef.current) {
      if (categoryChart.current) {
        categoryChart.current.destroy()
      }

      const ctx = categoryChartRef.current.getContext("2d")
      const categoryData = data.categoryBreakdown.data || []

      categoryChart.current = new Chart(ctx, {
        type: "pie",
        data: {
          labels: categoryData.map((item) => item.category.name),
          datasets: [
            {
              data: categoryData.map((item) => item.totalRevenue),
              backgroundColor: [
                "rgba(59, 130, 246, 0.7)",
                "rgba(16, 185, 129, 0.7)",
                "rgba(245, 158, 11, 0.7)",
                "rgba(239, 68, 68, 0.7)",
                "rgba(139, 92, 246, 0.7)",
                "rgba(236, 72, 153, 0.7)",
                "rgba(14, 165, 233, 0.7)",
                "rgba(168, 85, 247, 0.7)",
                "rgba(249, 115, 22, 0.7)",
                "rgba(234, 179, 8, 0.7)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Revenue by Category",
              font: {
                size: 16,
              },
            },
            legend: {
              position: "right",
            },
            tooltip: {
              callbacks: {
                label: (context) => {
                  const label = context.label || ""
                  const value = context.raw || 0
                  const percentage = categoryData[context.dataIndex].percentage.toFixed(1)
                  return `${label}: $${value.toLocaleString()} (${percentage}%)`
                },
              },
            },
          },
        },
      })
    }
  }, [data])

  if (isLoading) return <LoadingSpinner />
  if (isError) return <div className="text-red-500">Error loading food item analytics data</div>
  if (!data) return <NoDataFound message="No food item analytics data available" />

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="h-80">
            <canvas ref={categoryChartRef}></canvas>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Category Breakdown</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Items Sold
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Revenue
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    % of Total
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.categoryBreakdown.data.map((category, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {category.category.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                      {category.totalQuantity}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right font-medium">
                      $
                      {category.totalRevenue.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="flex items-center justify-end">
                        <span className="text-sm text-gray-500">{category.percentage.toFixed(1)}%</span>
                        <div className="ml-2 w-16 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${category.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <h3 className="text-lg font-semibold p-4 border-b border-gray-200">Top Selling Food Items</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Food Item
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Vendor
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity Sold
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Revenue
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Avg Price
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.topItems.data.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        {item.food.image ? (
                          <img
                            className="h-10 w-10 rounded object-cover"
                            src={item.food.image || "/placeholder.svg"}
                            alt=""
                          />
                        ) : (
                          <div className="h-10 w-10 rounded bg-gray-200 flex items-center justify-center text-gray-500">
                            <FaUtensils />
                          </div>
                        )}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{item.food.name}</div>
                        <div className="text-sm text-gray-500">${item.food.price.toFixed(2)}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.food.category.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.food.vendor.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                    {item.metrics.totalQuantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium text-right">
                    $
                    {item.metrics.totalRevenue.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                    $
                    {item.metrics.averagePrice.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// Customer Analytics Component
const CustomerAnalytics = ({ period }) => {
  const { data, isLoading, isError } = useGetCustomerAnalyticsQuery({ period })

  if (isLoading) return <LoadingSpinner />
  if (isError) return <div className="text-red-500">Error loading customer analytics data</div>
  if (!data) return <NoDataFound message="No customer analytics data available" />

  return (
    <div>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">New Customers</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">{data.summary.newCustomers}</h3>
              <div
                className={`flex items-center mt-2 text-sm ${
                  data.summary.customerGrowthRate >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {data.summary.customerGrowthRate >= 0 ? (
                  <MdTrendingUp className="mr-1" />
                ) : (
                  <MdTrendingDown className="mr-1" />
                )}
                {Math.abs(data.summary.customerGrowthRate).toFixed(1)}% growth
              </div>
            </div>
            <div className="bg-blue-100 p-3 rounded-full text-blue-600">
              <FaUsers className="text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">Retention Rate</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">{data.summary.retentionRate.toFixed(1)}%</h3>
              <p className="text-sm text-gray-500 mt-2">
                {data.retention.repeatCustomers} repeat customers out of {data.retention.totalCustomers}
              </p>
            </div>
            <div className="bg-green-100 p-3 rounded-full text-green-600">
              <FaChartLine className="text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">Avg Customer Value</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">
                $
                {data.summary.avgCustomerValue.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                {data.summary.avgOrderFrequency.toFixed(1)} orders per customer
              </p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full text-purple-600">
              <FaMoneyBillWave className="text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Customer Acquisition Chart */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-8">
        <h3 className="text-lg font-semibold mb-4">Customer Acquisition</h3>
        {data.acquisition.timeSeries.length > 0 ? (
          <div className="h-64">
            <div className="flex h-full items-end">
              {data.acquisition.timeSeries.map((item, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-full max-w-[40px] bg-blue-500 rounded-t"
                    style={{
                      height: `${(item.count / Math.max(...data.acquisition.timeSeries.map((i) => i.count))) * 100}%`,
                    }}
                  ></div>
                  <div className="text-xs text-gray-500 mt-2 truncate w-full text-center">{item._id}</div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <NoDataFound message="No customer acquisition data available" />
        )}
      </div>

      {/* Top Customers */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <h3 className="text-lg font-semibold p-4 border-b border-gray-200">Top Customers by Spending</h3>
        {data.topCustomers && data.topCustomers.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Orders
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Spent
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Avg Order Value
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.topCustomers.map((customer, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                          <FaUsers />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{customer.customer.name}</div>
                          <div className="text-sm text-gray-500">{customer.customer.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                      {customer.metrics.orderCount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium text-right">
                      $
                      {customer.metrics.totalSpent.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                      $
                      {customer.metrics.avgOrderValue.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-4">
            <NoDataFound message="No top customer data available" />
          </div>
        )}
      </div>
    </div>
  )
}

// Driver Analytics Component
const DriverAnalytics = ({ period }) => {
  const { data, isLoading, isError } = useGetDriverAnalyticsQuery({ period })
  const activityChartRef = useRef(null)
  const ratingsChartRef = useRef(null)
  const activityChart = useRef(null)
  const ratingsChart = useRef(null)

  useEffect(() => {
    if (data && activityChartRef.current) {
      if (activityChart.current) {
        activityChart.current.destroy()
      }

      const ctx = activityChartRef.current.getContext("2d")
      const activityData = data.activityByHour || []

      activityChart.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: activityData.map((item) => `${item.hour}:00`),
          datasets: [
            {
              label: "Deliveries",
              data: activityData.map((item) => item.deliveries),
              backgroundColor: "rgba(59, 130, 246, 0.5)",
              borderColor: "rgb(59, 130, 246)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Driver Activity by Hour",
              font: {
                size: 16,
              },
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Number of Deliveries",
              },
            },
            x: {
              title: {
                display: true,
                text: "Hour of Day",
              },
            },
          },
        },
      })
    }

    if (data && ratingsChartRef.current) {
      if (ratingsChart.current) {
        ratingsChart.current.destroy()
      }

      const ctx = ratingsChartRef.current.getContext("2d")
      const ratingsData = data.ratingsDistribution || []

      ratingsChart.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ratingsData.map((item) => `${item.rating} Star`),
          datasets: [
            {
              label: "Drivers",
              data: ratingsData.map((item) => item.count),
              backgroundColor: [
                "rgba(239, 68, 68, 0.7)",
                "rgba(249, 115, 22, 0.7)",
                "rgba(234, 179, 8, 0.7)",
                "rgba(16, 185, 129, 0.7)",
                "rgba(59, 130, 246, 0.7)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Driver Ratings Distribution",
              font: {
                size: 16,
              },
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Number of Drivers",
              },
            },
          },
        },
      })
    }
  }, [data])

  if (isLoading) return <LoadingSpinner />
  if (isError) return <div className="text-red-500">Error loading driver analytics data</div>
  if (!data) return <NoDataFound message="No driver analytics data available" />

  return (
    <div>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">Total Deliveries</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">{data.summary.totalDeliveries}</h3>
            </div>
            <div className="bg-blue-100 p-3 rounded-full text-blue-600">
              <FaMotorcycle className="text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">Total Earnings</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">
                $
                {data.summary.totalEarnings.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </h3>
            </div>
            <div className="bg-green-100 p-3 rounded-full text-green-600">
              <FaMoneyBillWave className="text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">Avg Delivery Time</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">
                {data.summary.avgDeliveryTime ? `${data.summary.avgDeliveryTime.toFixed(1)} min` : "N/A"}
              </h3>
            </div>
            <div className="bg-purple-100 p-3 rounded-full text-purple-600">
              <FaChartLine className="text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">Active Drivers</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">{data.summary.totalDrivers}</h3>
            </div>
            <div className="bg-amber-100 p-3 rounded-full text-amber-600">
              <FaUsers className="text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="h-80">
            <canvas ref={activityChartRef}></canvas>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="h-80">
            <canvas ref={ratingsChartRef}></canvas>
          </div>
        </div>
      </div>

      {/* Efficiency Metrics */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
        <h3 className="text-lg font-semibold mb-4">Delivery Efficiency</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-700 text-sm font-medium">Avg Pickup Time</p>
            <h4 className="text-2xl font-bold text-blue-900 mt-1">
              {data.efficiency.avgPickupTime ? `${data.efficiency.avgPickupTime.toFixed(1)} min` : "N/A"}
            </h4>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-green-700 text-sm font-medium">Avg Delivery Time</p>
            <h4 className="text-2xl font-bold text-green-900 mt-1">
              {data.efficiency.avgDeliveryTime ? `${data.efficiency.avgDeliveryTime.toFixed(1)} min` : "N/A"}
            </h4>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="text-purple-700 text-sm font-medium">Avg Total Time</p>
            <h4 className="text-2xl font-bold text-purple-900 mt-1">
              {data.efficiency.avgTotalTime ? `${data.efficiency.avgTotalTime.toFixed(1)} min` : "N/A"}
            </h4>
          </div>
        </div>
      </div>

      {/* Top Drivers */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <h3 className="text-lg font-semibold p-4 border-b border-gray-200">Top Performing Drivers</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Driver
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Deliveries
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Earnings
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Avg Time
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.topDrivers.map((driver, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                        <FaMotorcycle />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{driver.driver.name}</div>
                        <div className="text-sm text-gray-500">{driver.driver.phone}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                    {driver.metrics.deliveries}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium text-right">
                    $
                    {driver.metrics.totalEarnings.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                    {driver.metrics.avgDeliveryTime ? `${driver.metrics.avgDeliveryTime.toFixed(1)} min` : "N/A"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        driver.driver.isOnline ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {driver.driver.isOnline ? "Online" : "Offline"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AnalyticsSettings
