
import { useState } from "react"
import { Line, Doughnut } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js"
import { FaChartLine, FaChartPie } from "react-icons/fa"

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement)

const StatisticGraph = ({ isLoading, monthlyChartData, serviceOverview, salesOverview }) => {
  const [chartType, setChartType] = useState("revenue")

  // Prepare data for monthly chart
  const monthlyData = {
    labels: monthlyChartData?.labels || [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ],
    datasets: [
      {
        label: "Revenue",
        data: monthlyChartData?.revenue || Array(12).fill(0),
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
        hidden: chartType !== "revenue",
      },
      {
        label: "Orders",
        data: monthlyChartData?.orders || Array(12).fill(0),
        borderColor: "rgb(255, 159, 64)",
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        tension: 0.4,
        hidden: chartType !== "orders",
      },
      {
        label: "Admin Commission",
        data: monthlyChartData?.adminCommission || Array(12).fill(0),
        borderColor: "rgb(153, 102, 255)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        tension: 0.4,
        hidden: chartType !== "commission",
      },
    ],
  }

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
          boxWidth: 6,
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
        callbacks: {
          label: (context) => {
            let label = context.dataset.label || ""
            if (label) {
              label += ": "
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(context.parsed.y)
            }
            return label
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => "$" + value,
        },
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
  }

  // Prepare data for service overview doughnut chart
  const serviceData = {
    labels: [ "Orders", "Foods", "Clients",],
    datasets: [
      {
        data: [
         
          serviceOverview?.totalOrders || 0,
          serviceOverview?.totalFoods || 0,
          serviceOverview?.totalClients || 0,
         
        ],
        backgroundColor: [
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 159, 64, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(153, 102, 255, 0.7)",
          "rgba(255, 205, 86, 0.7)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 205, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  }

  // Prepare data for sales overview doughnut chart
  const salesData = {
    labels: ["Total Earnings", "Admin Commission"],
    datasets: [
      {
        data: [
          (salesOverview?.totalEarnings || 0) - (salesOverview?.adminCommission || 0),
          salesOverview?.adminCommission || 0,
        ],
        backgroundColor: ["rgba(75, 192, 192, 0.7)", "rgba(153, 102, 255, 0.7)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)"],
        borderWidth: 1,
      },
    ],
  }

  // Doughnut chart options
  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        labels: {
          usePointStyle: true,
          boxWidth: 6,
          font: {
            size: 11,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            let label = context.label || ""
            if (label) {
              label += ": "
            }
            if (context.parsed !== null) {
              label += context.parsed
            }
            return label
          },
        },
      },
    },
  }

  // Skeleton loader for charts
  const ChartSkeleton = () => (
    <div className="animate-pulse">
      <div className="h-64 bg-gray-200 rounded"></div>
    </div>
  )

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Monthly Chart */}
      <div className="bg-white rounded-lg shadow-md p-4 lg:col-span-2 border border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center">
            <FaChartLine className="mr-2 text-primary-500" /> Monthly Overview
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={() => setChartType("revenue")}
              className={`px-3 py-1 text-xs rounded-full ${
                chartType === "revenue"
                  ? "bg-primary-100 text-primary-700 font-medium"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Revenue
            </button>
            <button
              onClick={() => setChartType("orders")}
              className={`px-3 py-1 text-xs rounded-full ${
                chartType === "orders"
                  ? "bg-amber-100 text-amber-700 font-medium"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Orders
            </button>
            <button
              onClick={() => setChartType("commission")}
              className={`px-3 py-1 text-xs rounded-full ${
                chartType === "commission"
                  ? "bg-purple-100 text-purple-700 font-medium"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Commission
            </button>
          </div>
        </div>
        <div className="h-64">{isLoading ? <ChartSkeleton /> : <Line data={monthlyData} options={options} />}</div>
      </div>

      {/* Doughnut Charts */}
      <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100">
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center">
            <FaChartPie className="mr-2 text-primary-500" /> Service Overview
          </h2>
          <div className="h-32 mt-2">
            {isLoading ? <ChartSkeleton /> : <Doughnut data={serviceData} options={doughnutOptions} />}
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center">
            <FaChartPie className="mr-2 text-primary-500" /> Sales Overview
          </h2>
          <div className="h-32 mt-2">
            {isLoading ? <ChartSkeleton /> : <Doughnut data={salesData} options={doughnutOptions} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatisticGraph
