// import TitleHead from "../../component/Header/TitleHead"
// import SalesReport from "../../component/Reports/SalesReport"

// const ReportsPage = () => {
//   return (
//     <div>
//       <TitleHead title={"Sales Report"} desc={"Sales Report"} desc2={"> Reports "} link={"/reports"}/>
//       <div className="w-[90%] mx-auto" >
//         <SalesReport/>
//       </div>
//     </div>
//   )
// }

// export default ReportsPage


import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ReportDashboard from "../../component/Reports/ReportDashboard"
import SalesReport from "../../component/Reports/SalesReport"
import VendorReport from "../../component/Reports/VendorReport"
import DriverReport from "../../component/Reports/DriverReport"
import CustomerReport from "../../component/Reports/CustomerReport"
import FoodReport from "../../component/Reports/FoodReport"
import CategoryReport from "../../component/Reports/CategoryReport"
import UserReport from "../../component/Reports/UserReport"
import CustomReport from "../../component/Reports/CustomReport"
import PageHeader from "../../component/common/PageHeader"

const ReportsPage = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("dashboard")

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <ReportDashboard />
      case "sales":
        return <SalesReport />
      case "vendors":
        return <VendorReport />
      case "drivers":
        return <DriverReport />
      // case "customers":
      //   return <CustomerReport />
      case "foods":
        return <FoodReport />
      case "categories":
        return <CategoryReport />
      case "users":
        return <UserReport />
      case "custom":
        return <CustomReport />
      default:
        return <ReportDashboard />
    }
  }

  return (
    <div className="container-fluid px-4">
      <PageHeader title="Reports" />

      <div className="card mb-4">
        <div className="card-body p-0">
          <div className="border-b">
            <div className="flex flex-wrap">
              <button
                className={`px-4 py-3 text-sm font-medium ${
                  activeTab === "dashboard"
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-500 hover:text-primary"
                }`}
                onClick={() => handleTabChange("dashboard")}
              >
                Dashboard
              </button>
              <button
                className={`px-4 py-3 text-sm font-medium ${
                  activeTab === "sales" ? "text-primary border-b-2 border-primary" : "text-gray-500 hover:text-primary"
                }`}
                onClick={() => handleTabChange("sales")}
              >
                Sales
              </button>
              <button
                className={`px-4 py-3 text-sm font-medium ${
                  activeTab === "vendors"
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-500 hover:text-primary"
                }`}
                onClick={() => handleTabChange("vendors")}
              >
                Vendors
              </button>
              <button
                className={`px-4 py-3 text-sm font-medium ${
                  activeTab === "drivers"
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-500 hover:text-primary"
                }`}
                onClick={() => handleTabChange("drivers")}
              >
                Drivers
              </button>
              {/* <button
                className={`px-4 py-3 text-sm font-medium ${
                  activeTab === "customers"
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-500 hover:text-primary"
                }`}
                onClick={() => handleTabChange("customers")}
              >
                Customers
              </button> */}
              <button
                className={`px-4 py-3 text-sm font-medium ${
                  activeTab === "foods" ? "text-primary border-b-2 border-primary" : "text-gray-500 hover:text-primary"
                }`}
                onClick={() => handleTabChange("foods")}
              >
                Foods
              </button>
              <button
                className={`px-4 py-3 text-sm font-medium ${
                  activeTab === "categories"
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-500 hover:text-primary"
                }`}
                onClick={() => handleTabChange("categories")}
              >
                Categories
              </button>
              <button
                className={`px-4 py-3 text-sm font-medium ${
                  activeTab === "users" ? "text-primary border-b-2 border-primary" : "text-gray-500 hover:text-primary"
                }`}
                onClick={() => handleTabChange("users")}
              >
                Users
              </button>
              <button
                className={`px-4 py-3 text-sm font-medium ${
                  activeTab === "custom" ? "text-primary border-b-2 border-primary" : "text-gray-500 hover:text-primary"
                }`}
                onClick={() => handleTabChange("custom")}
              >
                Custom Report
              </button>
            </div>
          </div>

          <div className="p-4">{renderTabContent()}</div>
        </div>
      </div>
    </div>
  )
}

export default ReportsPage
