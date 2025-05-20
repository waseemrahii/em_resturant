
// import { useState } from "react"
// import { Link, Outlet, useLocation } from "react-router-dom"
// import {
//   FaCog,
//   FaGlobe,
//   FaMoneyBillWave,
//   FaPercentage,
//   FaMapMarkerAlt,
//   FaFileAlt,
//   FaUtensils,
//   FaTag,
//   FaCreditCard,
//   FaLanguage,
// } from "react-icons/fa"

// const Settings = () => {
//   const location = useLocation()
//   const [activeTab, setActiveTab] = useState(getActiveTabFromPath(location.pathname))

//   function getActiveTabFromPath(path) {
//     if (path.includes("admin-commission")) return "admin-commission"
//     if (path.includes("delivery-charges")) return "delivery-charges"
//     if (path.includes("radius-configuration")) return "radius-configuration"
//     if (path.includes("document-verification")) return "document-verification"
//     if (path.includes("dine-in-feature")) return "dine-in-feature"
//     if (path.includes("tax-setting")) return "tax-setting"
//     if (path.includes("payment-method")) return "payment-method"
//     if (path.includes("languages")) return "languages"
//     if (path.includes("special-offer")) return "special-offer"
//     if (path.includes("currencies")) return "currencies"
//     return "general"
//   }

//   const settingsTabs = [
//     {
//       id: "general",
//       name: "General Settings",
//       icon: <FaCog className="text-lg" />,
//       path: "/settings/general",
//     },
//     {
//       id: "admin-commission",
//       name: "Admin Commission",
//       icon: <FaPercentage className="text-lg" />,
//       path: "/settings/admin-commission",
//     },
//     {
//       id: "delivery-charges",
//       name: "Delivery Charges",
//       icon: <FaMoneyBillWave className="text-lg" />,
//       path: "/settings/delivery-charges",
//     },
//     {
//       id: "radius-configuration",
//       name: "Radius Configuration",
//       icon: <FaMapMarkerAlt className="text-lg" />,
//       path: "/settings/radius-configuration",
//     },
//     {
//       id: "document-verification",
//       name: "Document Verification",
//       icon: <FaFileAlt className="text-lg" />,
//       path: "/settings/document-verification",
//     },
//     {
//       id: "dine-in-feature",
//       name: "Dine-in Feature",
//       icon: <FaUtensils className="text-lg" />,
//       path: "/settings/dine-in-feature",
//     },
//     {
//       id: "tax-setting",
//       name: "Tax Settings",
//       icon: <FaPercentage className="text-lg" />,
//       path: "/settings/tax-setting",
//     },
//     {
//       id: "payment-method",
//       name: "Payment Methods",
//       icon: <FaCreditCard className="text-lg" />,
//       path: "/settings/payment-method",
//     },
//     {
//       id: "languages",
//       name: "Languages",
//       icon: <FaLanguage className="text-lg" />,
//       path: "/settings/languages",
//     },
//     {
//       id: "special-offer",
//       name: "Special Offers",
//       icon: <FaTag className="text-lg" />,
//       path: "/settings/special-offer",
//     },
//     {
//       id: "currencies",
//       name: "Currencies",
//       icon: <FaGlobe className="text-lg" />,
//       path: "/settings/currencies",
//     },
//   ]

//   return (
//     <div className="container mx-auto px-4 py-6">
//       <div className="flex flex-col md:flex-row gap-6">
//         {/* Sidebar */}
//         <div className="w-full md:w-1/4 bg-white rounded-lg shadow-md p-4">
//           <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
//             <FaCog className="mr-2" /> Settings
//           </h2>
//           <nav className="space-y-1">
//             {settingsTabs.map((tab) => (
//               <Link
//                 key={tab.id}
//                 to={tab.path}
//                 className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
//                   activeTab === tab.id
//                     ? "bg-primary-900 text-white"
//                     : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                 }`}
//                 onClick={() => setActiveTab(tab.id)}
//               >
//                 <span className="mr-3">{tab.icon}</span>
//                 {tab.name}
//               </Link>
//             ))}
//           </nav>
//         </div>

//         {/* Main Content */}
//         <div className="w-full md:w-3/4 bg-white rounded-lg shadow-md p-4">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Settings
