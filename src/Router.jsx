
// import { createBrowserRouter, Navigate, Outlet } from "react-router-dom"
// import { useSelector } from "react-redux"
// import RootLayout from "./_root/RootLayout"
// import LoginPage from "./_root/Pages/LoginPage"
// import DashBoardPage from "./_root/Pages/DashBoardPage"
// import GodsEyes from "./_root/Pages/GodsEyes"
// import RolesDetalies from "./component/AccessControl/RolesDetalies"
// import BannerItems from "./_root/Pages/BannerItems"
// import CreateBanner from "./component/BannerItems/CreateBanner"
// import CategoriesPage from "./_root/Pages/CategoriesPage"
// import Foods from "./_root/Pages/Foods"
// import FoodDetails from "./component/Food/FoodDetails"
// import GiftCards from "./_root/Pages/GiftCards"
// import GiftCardDetails from "./component/GiftCard/GiftCardDetails"
// import Payments from "./component/Payments/Payments"
// import CMSPages from "./_root/Pages/CMSPages"
// import CMSPageDetailes from "./component/CMSPages/CMSPageDetailes"
// import EmailTemplates from "./component/EmailTemplates/EmailTemplates"
// import DocumentPage from "./_root/Pages/DocumentPage"
// import CreateAdmin from "./component/AccessControl/CreateAdmin"
// import FoodAttribute from "./component/Attributes/FoodAttribute"
// import Attributes from "./component/Attributes/Attributes"
// import RestaurantPayOut from "./component/Payments/RestaurantPayOut"
// import DriverPayments from "./component/Payments/DriverPayments"
// import DriverPayOut from "./component/Payments/DriverPayOut"
// import WalletTransaction from "./component/Payments/WalletTransaction"
// import PayOutRequest from "./component/Payments/PayOutRequest"
// import Coupans from "./component/Coupon/Coupon/Coupans"
// import EditCoupans from "./component/Coupon/Coupon/EditCoupans"
// import SendNotifications from "./_root/Pages/SendNotifications"
// import UserCustomer from "./component/UserCustomer/UserCustomer"
// import AllVendors from "./_root/Pages/AllVendors"
// import { AlldriversData, user } from "./Utils/data"
// import DriversList from "./component/Drivers/DriversList"
// import PrientOrder from "./component/Orders/PrientOrder"
// import OrderEdit from "./component/Orders/OrderEdit"
// import UserDetailsForm from "./component/UserCustomer/UserDetailsForm"
// import UserDetails from "./_root/Pages/UserDetails"
// import BasicInfo from "./component/UserCustomer/BasicInfo"
// import UserOrders from "./component/UserCustomer/UserOrders"
// import UserWallat from "./component/UserCustomer/UserWallat"
// import Document from "./component/Vendors/Document"
// import DocumentForm from "./component/Vendors/DocumentForm"
// import GlobalSettings from "./component/Setting/GlobalSettings"
// import Currencies from "./component/Setting/Currencies/Currencies"
// import CreateCurrencies from "./component/Setting/Currencies/CreateCurrencies"
// import ParentPayment from "./component/Setting/PaymentMethod/ParentPayment"
// import AdminCommission from "./component/Setting/AdminCommission"
// import RadiousConfigration from "./component/Setting/RadiousConfigration"
// import DineInFeature from "./component/Setting/DineInFeature"
// import TaxSetting from "./component/Setting/TaxSetting/TaxSetting"
// import CreateTax from "./component/Setting/TaxSetting/CreateTax"
// import DeliveryCharges from "./component/Setting/DeliveryCharges"
// import DocumentVerification from "./component/Setting/DocumentVerification"
// import Languages from "./component/Setting/Languages/Languages"
// import SpecialOffer from "./component/Setting/SpecialOffer"
// import Stripe from "./component/Setting/PaymentMethod/Stripe"
// import COD from "./component/Setting/PaymentMethod/COD"
// import RazorPay from "./component/Setting/PaymentMethod/RazorPay"
// import Paypal from "./component/Setting/PaymentMethod/Paypal"
// import Paytm from "./component/Setting/PaymentMethod/Paytm"
// import PayFast from "./component/Setting/PaymentMethod/PayFast"
// import PayStack from "./component/Setting/PaymentMethod/PayStack"
// import FlutterWaves from "./component/Setting/PaymentMethod/FlutterWaves"
// import MercadoPago from "./component/Setting/PaymentMethod/MercadoPago"
// import OrdersPage from "./_root/Pages/OrdersPage"
// import ZonePage from "./_root/Pages/ZonePage"
// import CreateZone from "./component/Zone/CreateZone"
// import ApprovedVendors from "./_root/Pages/ApprovedVendors"
// import PendingVendors from "./_root/Pages/PendingVendors"
// import VendorForms from "./component/Vendors/Forms/VendorForms"
// import DriversProfile from "./component/Drivers/DriversProfile/DriversProfile"
// import DriverInfo from "./component/Drivers/DriversProfile/DriverInfo"
// import DriverOrders from "./component/Drivers/DriversProfile/DriverOrders"
// import DriverWallet from "./component/Drivers/DriversProfile/DriverWallet"
// import DriverPayout from "./component/Drivers/DriversProfile/DriverPayout"
// import DriverPayRequest from "./component/Drivers/DriversProfile/DriverPayRequest"
// import ReportsPage from "./_root/Pages/ReportsPage"
// import ReviewAttributes from "./component/Categories/ReviewAttributes"
// import CategoryDetail from "./component/Categories/CategoryDetail"
// import CategoryInformation from "./component/Categories/CategoryInformation"
// import EditForm from "./component/Attributes/EditForm"
// import CreateModel from "./component/Attributes/CreateModel"
// import CreateDocuments from "./component/Document/CreateDocuments"
// import CreateNotification from "./component/Notifiaction/CreateNotification"
// import AppNotification from "./component/Notifiaction/AppNotification"
// import EditNotification from "./component/Notifiaction/EditNotification"
// import Wallet from "./component/Setting/PaymentMethod/Wallet"
// import RestaurantPayOutDetails from "./component/Payments/RestaurantPayOutDetails"
// import DriverPayOutRequest from "./component/Payments/DriverPayOutRequest"
// import DriverPayOutDetailes from "./component/Payments/DriverPayOutDetailes"
// import EditTemplate from "./component/EmailTemplates/EditTemplate"
// import ZoneDetail from "./component/Zone/ZoneDetail"
// import AccessControl from "./component/AccessControl/AccessControl"
// import GoogleMapsGuide from "./component/GoogleMapsGuide/GoogleMapsGuide"
// import AdminUser from "./component/AccessControl/AdminUser"
// import Roles from "./component/AccessControl/Roles"
// import Restaurants from "./_root/Pages/Restaurants"
// import RestaurantsCreate from "./component/Restaurants/RestaurantsCreate"
// import RestaruantsProfile from "./component/Restaurants/ProfileRestaurants/RestaruantsProfile"
// import RestaurantsInfo from "./component/Restaurants/ProfileRestaurants/RestaurantsInfo"
// import RestaurantsFood from "./component/Restaurants/ProfileRestaurants/RestaurantsFood"
// import RestaurantsOrders from "./component/Restaurants/ProfileRestaurants/RestaurantsOrders"
// import RestaurantsWallet from "./component/Restaurants/ProfileRestaurants/RestaurantsWallet"
// import PayoutsRestaruants from "./component/Restaurants/ProfileRestaurants/PayoutsRestaruants"
// import RequestsRestaurantsPayouts from "./component/Restaurants/ProfileRestaurants/RequestsRestaurantsPayouts"
// import DineInFeatures from "./component/Restaurants/ProfileRestaurants/DineInFeatures"
// import Promos from "./component/Restaurants/ProfileRestaurants/Promos"
// import EditLanguages from "./component/Setting/Languages/EditLanguages"
// import CreateVendor from "./component/Vendors/CreateVendor"
// import VendorsList from "./component/Vendors/VendorsList"
// import VendorDetail from "./component/Vendors/VendorDetail"
// import OrderDetail from "./component/Orders/OrderDetail"
// import Orders from "./component/Orders/Orders"
// import ForgotPasswordPage from "./_root/Pages/ForgotPasswordPage"
// import FoodView from "./component/Food/FoodView"
// import DriverForm from "./component/Drivers/DriverForm"
// import DriverView from "./component/Drivers/DriverView"
// import { useState, useEffect } from "react"
// import { useDispatch } from "react-redux"
// import LoadingSpinner from "./component/common/LoadingSpinner"
// import NotificationSettings from "./component/Setting/NotificationSettings"
// import AppearanceSettings from "./component/Setting/AppearanceSettings"
// import AnalyticsSettings from "./component/Setting/AnalyticsSettings"
// import CreateGiftCard from "./component/GiftCard/CreateGiftCard"
// import GiftCardDashboard from "./component/GiftCard/GiftCardDashboard"

// // Protected Route Component
// const ProtectedRoute = () => {
//   const { isAuthenticated } = useSelector((state) => state.auth)
//   const dispatch = useDispatch()
//   const [isChecking, setIsChecking] = useState(true)

//   useEffect(() => {
//     // Check for stored token in localStorage
//     const token = localStorage.getItem("token")
//     if (token && !isAuthenticated) {
//       // If token exists but not authenticated in Redux state, restore the session
//       dispatch({ type: "auth/restoreSession", payload: { token } })
//     }
//     setIsChecking(false)
//   }, [dispatch, isAuthenticated])

//   if (isChecking) {
//     return <LoadingSpinner /> // Show loading while checking auth
//   }

//   if (!isAuthenticated && !localStorage.getItem("token")) {
//     return <Navigate to="/login" replace />
//   }

//   return <Outlet />
// }

// // Public Route Component (accessible only when not authenticated)
// const PublicRoute = () => {
//   const { isAuthenticated } = useSelector((state) => state.auth)

//   if (isAuthenticated) {
//     return <Navigate to="/" replace />
//   }

//   return <Outlet />
// }

// // Define the routes
// const router = createBrowserRouter([
//   // Public routes (login, forgot password, etc.)
//   {
//     element: <PublicRoute />,
//     children: [
//       { path: "/login", element: <LoginPage /> },
//       { path: "/forgot-password", element: <ForgotPasswordPage /> },
//     ],
//   },

//   // Protected routes (dashboard, admin panel, etc.)
//   {
//     element: <ProtectedRoute />,
//     children: [
//       {
//         path: "/",
//         element: <RootLayout />,
//         children: [
//           { path: "", element: <DashBoardPage /> }, // 1. Dashboard
//           { path: "gods-eye", element: <GodsEyes /> }, // 2. God's Eye
//           { path: "zone", element: <ZonePage /> }, // 3. Zone
//           { path: "create-zone", element: <CreateZone /> }, // 4.
//           {
//             path: "zone/:id",
//             element: <ZoneDetail />,
//           },
//           {
//             path: "zone/edit/:id",
//             element: <CreateZone />,
//           },
//           {
//             path: "google-maps-guide",
//             element: <GoogleMapsGuide />,
//           },
//           {
//             path: "access-control/*",
//             element: <AccessControl />,
//           },
//           // Update the roles routes
//           {
//             path: "access-control/roles",
//             element: <Roles />,
//           },
//           { path: "roles-edit", element: <RolesDetalies /> },
//           { path: "roles-edit/:id", element: <RolesDetalies /> },
//           { path: "roles-create", element: <RolesDetalies /> },

//           // Update the admin user routes
//           { path: "access-control/admin-user", element: <AdminUser /> },
//           { path: "edit-admin", element: <CreateAdmin /> },
//           { path: "edit-admin/:id", element: <CreateAdmin /> },
//           { path: "admin-view/:id", element: <CreateAdmin /> },
//           { path: "roles-edit", element: <RolesDetalies /> }, // Additional path for role details
//           { path: "roles-edit/:id", element: <RolesDetalies /> },
//           { path: "edit-admin", element: <CreateAdmin /> },
//           { path: "edit-admin/:id", element: <CreateAdmin /> },

//           // Vendors routes
//           { path: "vendors/all", element: <AllVendors /> }, // 6.1. All Vendors
//           { path: "vendors", element: <VendorsList /> }, // Main vendors list
//           { path: "vendors/approved", element: <ApprovedVendors /> }, // 6.2. Approved Vendors

//           { path: "vendors/pending", element: <PendingVendors /> }, // 6.3. Approval Pending Vendors
//           { path: "document-listt", element: <Document /> },
//           { path: "/document-form/:documentName", element: <DocumentForm /> },
//           { path: "document/edit", element: <VendorForms /> }, // 7. Orders
//           { path: "vendors/create", element: <CreateVendor /> },
//           { path: "vendors/edit/:id", element: <CreateVendor /> },
//           { path: "vendors/view/:id", element: <VendorDetail /> },

//           // Restaurant routes
//           { path: "restaurants", element: <Restaurants /> }, // Main restaurants list
//           { path: "restaurant/create", element: <RestaurantsCreate /> }, // Create new restaurant
//           { path: "restaurant/edit/:id", element: <RestaurantsCreate /> }, // Edit restaurant
//           {
//             path: "restaurant/:id",
//             element: <RestaruantsProfile />,
//             children: [
//               { path: "", element: <RestaurantsInfo /> }, // Default tab - Restaurant info
//               { path: "foods", element: <RestaurantsFood /> }, // Foods tab
//               { path: "orders", element: <RestaurantsOrders /> }, // Orders tab

//               { path: "wallet", element: <RestaurantsWallet /> }, // Wallet tab
//               { path: "payouts", element: <PayoutsRestaruants /> }, // Payouts tab
//               { path: "payout-requests", element: <RequestsRestaurantsPayouts /> }, // Payout requests tab
//               { path: "dine-in", element: <DineInFeatures /> }, // Dine-in features tab
//               { path: "promos", element: <Promos /> }, // Promotions tab
//             ],
//           },

//           // { path: "drivers/all", element: <DriversList /> }, // 8.1. All Drivers
//           // // { path: "drivers/create", element: <AddDriver /> },
//           // { path: "drivers/create", element: <DriverForm /> },
//           // { path: "driver/edit/:id", element: <DriverForm /> },
//           // { path: "driver/profile/:id", element: <DriverView /> },
//           // {
//           //   path: "drivers/approved",
//           //   element: <DriversList driversData={AlldriversData} initialAlertMessage="Alert" initialShow="10" />,
//           // }, // 8.2. Approved Drivers
//           // {
//           //   path: "drivers/pending",
//           //   element: <DriversList driversData={AlldriversData} initialAlertMessage="Alert" initialShow="10" />,
//           // }, // 8.3. Approval Pending Drivers
//           // {
//           //   path: "driver/profile",
//           //   element: <DriversProfile />,
//           //   children: [
//           //     { path: "", element: <DriverInfo user={user} /> },
//           //     { path: "order", element: <DriverOrders /> },
//           //     { path: "payout", element: <DriverPayout /> },
//           //     { path: "payout-request", element: <DriverPayRequest /> },
//           //     { path: "wallet", element: <DriverWallet /> },
//           //   ],
//           // },
//           { path: "reports/sales", element: <ReportsPage /> }, // 9.1. Sales Report
//           { path: "categories", element: <CategoriesPage /> }, // 10. Categories
//           {
//             path: "categories/create",
//             element: <CategoryDetail />,
//             children: [
//               {
//                 path: "infomation",
//                 element: <CategoryInformation />,
//               },
//               { path: "review-attribute", element: <ReviewAttributes /> },
//             ],
//           },
//           { path: "foods", element: <Foods /> }, // 11. Foods
//           { path: "foods/:id", element: <FoodView /> }, // Food details view
//           { path: "food-details", element: <FoodDetails /> }, // Create food
//           { path: "food-details/:id", element: <FoodDetails /> }, // Edit food
//           { path: "attributes/food", element: <FoodAttribute /> }, // 12.1. Food Attributes
//           {
//             path: "attributes/food/create",
//             element: <CreateModel title="Create food Attributes" />,
//           },
//           { path: "attributes/review", element: <Attributes /> }, // 12.2. Review Attributes
//           {
//             path: "attributes/review/create",
//             element: <EditForm title="Create Review Attributes" initialValues={"Name"} />,
//           },
//           { path: "orders", element: <Orders /> }, // 13. Orders
//           {
//             path: "orders/:id",
//             element: <OrderDetail />,
//           },
//           { path: "print-order", element: <PrientOrder /> },
//           { path: "edit-order", element: <OrderEdit /> }, // 13. Orders
//           { path: "gift-cards", element: <GiftCards /> }, // 14. Gift Cards
//           {
//             path: "/gift-dashboard",
//             element: <GiftCardDashboard />,
//           },
//           {
//             path: "/gift-create",
//             element: <CreateGiftCard />,
//           },
//           {
//             path: "/gift-edit/:id",
//             element: <GiftCardDetails />,
//           },
//           {
//             path: "gift-create",
//             element: <GiftCardDetails title={""} message={""} image={""} expiryDay={""} status={""} />,
//            },
//           // {
//           //   path: "gift-edit",
//           //   element: (
//           //     <GiftCardDetails
//           //       title={"faisal "}
//           //       msg={"i am faisal"}
//           //       expirydate={"21/12/2024"}
//           //       status={true}
//           //       image={"/logo-e.png"}
//           //     />
//           //   ),
//           // },
//           { path: "coupons", element: <Coupans /> }, // 15
//           { path: "users", element: <UserCustomer /> },
//           {
//             path: "users/edit",
//             element: <UserDetails />,
//             children: [
//               { path: "", element: <BasicInfo user={user} /> },
//               { path: "user-order", element: <UserOrders /> },
//               { path: "user-wallet", element: <UserWallat /> },
//             ],
//           },
//           { path: "create-user", element: <UserDetailsForm /> },
//           { path: "editcoupons", element: <EditCoupans /> }, // 16
//           { path: "documents", element: <DocumentPage /> }, // 16. Documents
//           { path: "document/create", element: <CreateDocuments /> },
//           { path: "notifications/send", element: <SendNotifications /> }, // 17.1. Send Notifications
//           { path: "notifications/create", element: <CreateNotification /> },
//           { path: "notifications/app", element: <AppNotification /> }, // 17.2. App Notifications
//           { path: "notifications/edit", element: <EditNotification /> },
//           { path: "payments/restaurants", element: <Payments /> }, // 18.1. Restaurants Payments
//           { path: "payouts/restaurants", element: <RestaurantPayOut /> }, // 18.2. Restaurants Payouts
//           {
//             path: "payouts/restaurants/create",
//             element: <RestaurantPayOutDetails />,
//           },
//           { path: "payments/drivers", element: <DriverPayments /> }, // 18.3. Drivers Payments
//           { path: "payouts/drivers", element: <DriverPayOut /> }, // 18.4. Drivers Payouts
//           { path: "payouts/drivers/create", element: <DriverPayOutDetailes /> },
//           { path: "wallets/transactions", element: <WalletTransaction /> }, // 18.5. Wallets Transactions
//           { path: "payout/requests", element: <PayOutRequest /> },
//           // 18.6. Payout Requests
//           { path: "payout/requests/drivers", element: <DriverPayOutRequest /> },
//           { path: "banners-items", element: <BannerItems /> }, // 19. Banners Items

//           { path: "/banner-items/create", element: <CreateBanner /> },
//           { path: "cms/pages", element: <CMSPages /> }, // 20. CMS Pages
//           { path: "cms/create", element: <CMSPageDetailes /> },
//           { path: "email/templates", element: <EmailTemplates /> }, //
//           { path: "email/templates/create", element: <EditTemplate /> },
//           { path: "settings/global", element: <GlobalSettings /> }, // 22.1. Global Settings
//           { path: "settings/currencies", element: <Currencies /> }, // 22.2. Currencies
//           { path: "/create-currencies", element: <CreateCurrencies /> },
//         {
//             path: "analytics",
//             element: <AnalyticsSettings />,
//           }, 
//           {
//             path: "settings/payment-methods",
//             element: <ParentPayment />,
//             children: [
//               { path: "stripe", element: <Stripe /> },
//               { path: "cod", element: <COD /> },
//               { path: "razorpay", element: <RazorPay /> },
//               { path: "paypal", element: <Paypal /> },
//               { path: "paytm", element: <Paytm /> },
//               { path: "wallet", element: <Wallet /> },
//               { path: "payfast", element: <PayFast /> },
//               { path: "paystack", element: <PayStack /> },
//               { path: "flutterwave", element: <FlutterWaves /> },
//               { path: "mercadopago", element: <MercadoPago /> },
//             ],
//           }, // 22.3. Payment Methods
//           { path: "settings/commissions", element: <AdminCommission /> }, // 22.4. Admin Commissions
//           { path: "settings/radius-config", element: <RadiousConfigration /> }, // 22.5. Radius Configurations
//           { path: "settings/dine-in", element: <DineInFeature /> }, // 22.6. Dine In Feature Settings
//           { path: "settings/tax", element: <TaxSetting /> },
//           // {
//           //   path: "settings/create-tax",
//           //   element: <CreateTax />,
//           // }, // 22.7. Tax Settings
//           {
//             path: "settings/create-tax",
//             element: <AppearanceSettings />,
//           }, // 22.7. Tax Settings
//           { path: "settings/delivery-charges", element: <DeliveryCharges /> }, // 22.8. Delivery Charges
//           {
//             path: "settings/document-verification",
//             element: <DocumentVerification />,
//           }, // 22.9. Document Verification
//           // 22.9. Document Verification
//           { path: "settings/languages", element: <NotificationSettings /> }, // 22.10. Languages
//           { path: "settingd/edit-languages", element: <NotificationSettings /> },
//           { path: "settings/special-offers", element: <SpecialOffer /> }, // 22.11. Special Offers
//         ],
//       },
//     ],
//   },

//   // Catch-all route - redirect to login if not authenticated, otherwise to 404
//   {
//     path: "*",
//     element: <Navigate to="/login" replace />,
//   },
// ])

// export default router
"use client"

import { createBrowserRouter, Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import RootLayout from "./_root/RootLayout"
import LoginPage from "./_root/Pages/LoginPage"
import DashBoardPage from "./_root/Pages/DashBoardPage"
import GodsEyes from "./_root/Pages/GodsEyes"
import RolesDetalies from "./component/AccessControl/RolesDetalies"
import BannerItems from "./_root/Pages/BannerItems"
import CreateBanner from "./component/BannerItems/CreateBanner"
import CategoriesPage from "./_root/Pages/CategoriesPage"
import Foods from "./_root/Pages/Foods"
import FoodDetails from "./component/Food/FoodDetails"
import GiftCards from "./_root/Pages/GiftCards"
import GiftCardDetails from "./component/GiftCard/GiftCardDetails"
import Payments from "./component/Payments/Payments"
import CMSPages from "./_root/Pages/CMSPages"
import CMSPageDetailes from "./component/CMSPages/CMSPageDetailes"
import EmailTemplates from "./component/EmailTemplates/EmailTemplates"
import DocumentPage from "./_root/Pages/DocumentPage"
import CreateAdmin from "./component/AccessControl/CreateAdmin"
import FoodAttribute from "./component/Attributes/FoodAttribute"
import Attributes from "./component/Attributes/Attributes"
import RestaurantPayOut from "./component/Payments/RestaurantPayOut"
import DriverPayments from "./component/Payments/DriverPayments"
import DriverPayOut from "./component/Payments/DriverPayOut"
import WalletTransaction from "./component/Payments/WalletTransaction"
import PayOutRequest from "./component/Payments/PayOutRequest"
import Coupans from "./component/Coupon/Coupon/Coupans"
import EditCoupans from "./component/Coupon/Coupon/EditCoupans"
import SendNotifications from "./_root/Pages/SendNotifications"
import UserCustomer from "./component/UserCustomer/UserCustomer"
import AllVendors from "./_root/Pages/AllVendors"
import { AlldriversData, user } from "./Utils/data"
import DriversList from "./component/Drivers/DriversList"
import PrientOrder from "./component/Orders/PrientOrder"
import OrderEdit from "./component/Orders/OrderEdit"
import UserDetailsForm from "./component/UserCustomer/UserDetailsForm"
import UserDetails from "./_root/Pages/UserDetails"
import BasicInfo from "./component/UserCustomer/BasicInfo"
import UserOrders from "./component/UserCustomer/UserOrders"
import UserWallat from "./component/UserCustomer/UserWallat"
import Document from "./component/Vendors/Document"
import DocumentForm from "./component/Vendors/DocumentForm"
import GlobalSettings from "./component/Setting/GlobalSettings"
import Currencies from "./component/Setting/Currencies/Currencies"
import CreateCurrencies from "./component/Setting/Currencies/CreateCurrencies"
import ParentPayment from "./component/Setting/PaymentMethod/ParentPayment"
import AdminCommission from "./component/Setting/AdminCommission"
import RadiousConfigration from "./component/Setting/RadiousConfigration"
import DineInFeature from "./component/Setting/DineInFeature"
import TaxSetting from "./component/Setting/TaxSetting/TaxSetting"
import DeliveryCharges from "./component/Setting/DeliveryCharges"
import DocumentVerification from "./component/Setting/DocumentVerification"
import Languages from "./component/Setting/Languages/Languages"
import SpecialOffer from "./component/Setting/SpecialOffer"
import Stripe from "./component/Setting/PaymentMethod/Stripe"
import COD from "./component/Setting/PaymentMethod/COD"
import RazorPay from "./component/Setting/PaymentMethod/RazorPay"
import Paypal from "./component/Setting/PaymentMethod/Paypal"
import Paytm from "./component/Setting/PaymentMethod/Paytm"
import PayFast from "./component/Setting/PaymentMethod/PayFast"
import PayStack from "./component/Setting/PaymentMethod/PayStack"
import FlutterWaves from "./component/Setting/PaymentMethod/FlutterWaves"
import MercadoPago from "./component/Setting/PaymentMethod/MercadoPago"
import ZonePage from "./_root/Pages/ZonePage"
import CreateZone from "./component/Zone/CreateZone"
import ApprovedVendors from "./_root/Pages/ApprovedVendors"
import PendingVendors from "./_root/Pages/PendingVendors"
import VendorForms from "./component/Vendors/Forms/VendorForms"
import DriversProfile from "./component/Drivers/DriversProfile/DriversProfile"
import DriverInfo from "./component/Drivers/DriversProfile/DriverInfo"
import DriverOrders from "./component/Drivers/DriversProfile/DriverOrders"
import DriverWallet from "./component/Drivers/DriversProfile/DriverWallet"
import DriverPayout from "./component/Drivers/DriversProfile/DriverPayout"
import DriverPayRequest from "./component/Drivers/DriversProfile/DriverPayRequest"
import ReportsPage from "./_root/Pages/ReportsPage"
import ReviewAttributes from "./component/Categories/ReviewAttributes"
import CategoryDetail from "./component/Categories/CategoryDetail"
import CategoryInformation from "./component/Categories/CategoryInformation"
import EditForm from "./component/Attributes/EditForm"
import CreateModel from "./component/Attributes/CreateModel"
import CreateDocuments from "./component/Document/CreateDocuments"
import CreateNotification from "./component/Notifiaction/CreateNotification"
import AppNotification from "./component/Notifiaction/AppNotification"
import EditNotification from "./component/Notifiaction/EditNotification"
import Wallet from "./component/Setting/PaymentMethod/Wallet"
import RestaurantPayOutDetails from "./component/Payments/RestaurantPayOutDetails"
import DriverPayOutRequest from "./component/Payments/DriverPayOutRequest"
import DriverPayOutDetailes from "./component/Payments/DriverPayOutDetailes"
import EditTemplate from "./component/EmailTemplates/EditTemplate"
import ZoneDetail from "./component/Zone/ZoneDetail"
import AccessControl from "./component/AccessControl/AccessControl"
import GoogleMapsGuide from "./component/GoogleMapsGuide/GoogleMapsGuide"
import AdminUser from "./component/AccessControl/AdminUser"
import Roles from "./component/AccessControl/Roles"
import Restaurants from "./_root/Pages/Restaurants"
import RestaurantsCreate from "./component/Restaurants/RestaurantsCreate"
import RestaruantsProfile from "./component/Restaurants/ProfileRestaurants/RestaruantsProfile"
import RestaurantsInfo from "./component/Restaurants/ProfileRestaurants/RestaurantsInfo"
import RestaurantsFood from "./component/Restaurants/ProfileRestaurants/RestaurantsFood"
import RestaurantsOrders from "./component/Restaurants/ProfileRestaurants/RestaurantsOrders"
import RestaurantsWallet from "./component/Restaurants/ProfileRestaurants/RestaurantsWallet"
import PayoutsRestaruants from "./component/Restaurants/ProfileRestaurants/PayoutsRestaruants"
import RequestsRestaurantsPayouts from "./component/Restaurants/ProfileRestaurants/RequestsRestaurantsPayouts"
import DineInFeatures from "./component/Restaurants/ProfileRestaurants/DineInFeatures"
import Promos from "./component/Restaurants/ProfileRestaurants/Promos"
import EditLanguages from "./component/Setting/Languages/EditLanguages"
import CreateVendor from "./component/Vendors/CreateVendor"
import VendorsList from "./component/Vendors/VendorsList"
import VendorDetail from "./component/Vendors/VendorDetail"
import OrderDetail from "./component/Orders/OrderDetail"
import Orders from "./component/Orders/Orders"
import ForgotPasswordPage from "./_root/Pages/ForgotPasswordPage"
import FoodView from "./component/Food/FoodView"
import DriverForm from "./component/Drivers/DriverForm"
import DriverView from "./component/Drivers/DriverView"
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import LoadingSpinner from "./component/common/LoadingSpinner"
import AppearanceSettings from "./component/Setting/AppearanceSettings"
import AnalyticsSettings from "./component/Setting/AnalyticsSettings"
import CreateGiftCard from "./component/GiftCard/CreateGiftCard"
import GiftCardDashboard from "./component/GiftCard/GiftCardDashboard"

// New imports for cloud kitchen features
import KitchenDepot from "./component/Food/KitchenDepot"
import KitchenDepotForm from "./component/Food/KitchenDepotForm"
import FoodVerification from "./component/Food/FoodVerification"
import ProductCombos from "./component/Food/ProductCombos"
import ProductComboForm from "./component/Food/ProductComboForm"
import POSInterface from "./component/POS/POSInterface"
import ChatInterface from "./component/Chat/ChatInterface"

// Protected Route Component
const ProtectedRoute = () => {
  const { isAuthenticated } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {
    // Check for stored token in localStorage
    const token = localStorage.getItem("token")
    if (token && !isAuthenticated) {
      // If token exists but not authenticated in Redux state, restore the session
      dispatch({ type: "auth/restoreSession", payload: { token } })
    }
    setIsChecking(false)
  }, [dispatch, isAuthenticated])

  if (isChecking) {
    return <LoadingSpinner /> // Show loading while checking auth
  }

  if (!isAuthenticated && !localStorage.getItem("token")) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}

// Public Route Component (accessible only when not authenticated)
const PublicRoute = () => {
  const { isAuthenticated } = useSelector((state) => state.auth)

  if (isAuthenticated) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}

// Define the routes
const router = createBrowserRouter([
  // Public routes (login, forgot password, etc.)
  {
    element: <PublicRoute />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/forgot-password", element: <ForgotPasswordPage /> },
    ],
  },

  // Protected routes (dashboard, admin panel, etc.)
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <RootLayout />,
        children: [
          { path: "", element: <DashBoardPage /> }, // 1. Dashboard
          { path: "gods-eye", element: <GodsEyes /> }, // 2. God's Eye
          { path: "zone", element: <ZonePage /> }, // 3. Zone
          { path: "create-zone", element: <CreateZone /> }, // 4.
          {
            path: "zone/:id",
            element: <ZoneDetail />,
          },
          {
            path: "zone/edit/:id",
            element: <CreateZone />,
          },
          {
            path: "google-maps-guide",
            element: <GoogleMapsGuide />,
          },
          {
            path: "access-control/*",
            element: <AccessControl />,
          },
          // Update the roles routes
          {
            path: "access-control/roles",
            element: <Roles />,
          },
          { path: "roles-edit", element: <RolesDetalies /> },
          { path: "roles-edit/:id", element: <RolesDetalies /> },
          { path: "roles-create", element: <RolesDetalies /> },

          // Update the admin user routes
          { path: "access-control/admin-user", element: <AdminUser /> },
          { path: "edit-admin", element: <CreateAdmin /> },
          { path: "edit-admin/:id", element: <CreateAdmin /> },
          { path: "admin-view/:id", element: <CreateAdmin /> },
          { path: "roles-edit", element: <RolesDetalies /> }, // Additional path for role details
          { path: "roles-edit/:id", element: <RolesDetalies /> },
          { path: "edit-admin", element: <CreateAdmin /> },
          { path: "edit-admin/:id", element: <CreateAdmin /> },

          // Vendors routes
          { path: "vendors/all", element: <AllVendors /> }, // 6.1. All Vendors
          { path: "vendors", element: <VendorsList /> }, // Main vendors list
          { path: "vendors/approved", element: <ApprovedVendors /> }, // 6.2. Approved Vendors

          { path: "vendors/pending", element: <PendingVendors /> }, // 6.3. Approval Pending Vendors
          { path: "document-listt", element: <Document /> },
          { path: "/document-form/:documentName", element: <DocumentForm /> },
          { path: "document/edit", element: <VendorForms /> }, // 7. Orders
          { path: "vendors/create", element: <CreateVendor /> },
          { path: "vendors/edit/:id", element: <CreateVendor /> },
          { path: "vendors/view/:id", element: <VendorDetail /> },

          // Restaurant routes
          { path: "restaurants", element: <Restaurants /> }, // Main restaurants list
          { path: "restaurant/create", element: <RestaurantsCreate /> }, // Create new restaurant
          { path: "restaurant/edit/:id", element: <RestaurantsCreate /> }, // Edit restaurant
          {
            path: "restaurant/:id",
            element: <RestaruantsProfile />,
            children: [
              { path: "", element: <RestaurantsInfo /> }, // Default tab - Restaurant info
              { path: "foods", element: <RestaurantsFood /> }, // Foods tab
              { path: "orders", element: <RestaurantsOrders /> }, // Orders tab

              { path: "wallet", element: <RestaurantsWallet /> }, // Wallet tab
              { path: "payouts", element: <PayoutsRestaruants /> }, // Payouts tab
              { path: "payout-requests", element: <RequestsRestaurantsPayouts /> }, // Payout requests tab
              { path: "dine-in", element: <DineInFeatures /> }, // Dine-in features tab
              { path: "promos", element: <Promos /> }, // Promotions tab
            ],
          },

          // Driver routes
          { path: "drivers/all", element: <DriversList /> }, // 8.1. All Drivers
          { path: "drivers/create", element: <DriverForm /> },
          { path: "driver/edit/:id", element: <DriverForm /> },
          { path: "driver/profile/:id", element: <DriverView /> },
          {
            path: "drivers/approved",
            element: <DriversList driversData={AlldriversData} initialAlertMessage="Alert" initialShow="10" />,
          }, // 8.2. Approved Drivers
          {
            path: "drivers/pending",
            element: <DriversList driversData={AlldriversData} initialAlertMessage="Alert" initialShow="10" />,
          }, // 8.3. Approval Pending Drivers
          {
            path: "driver/profile",
            element: <DriversProfile />,
            children: [
              { path: "", element: <DriverInfo user={user} /> },
              { path: "order", element: <DriverOrders /> },
              { path: "payout", element: <DriverPayout /> },
              { path: "payout-request", element: <DriverPayRequest /> },
              { path: "wallet", element: <DriverWallet /> },
            ],
          },

          { path: "reports/sales", element: <ReportsPage /> }, // 9.1. Sales Report
          { path: "categories", element: <CategoriesPage /> }, // 10. Categories
          {
            path: "categories/create",
            element: <CategoryDetail />,
            children: [
              {
                path: "infomation",
                element: <CategoryInformation />,
              },
              { path: "review-attribute", element: <ReviewAttributes /> },
            ],
          },

          // Food routes
          { path: "foods", element: <Foods /> }, // 11. Foods
          { path: "foods/:id", element: <FoodView /> }, // Food details view
          { path: "food-details", element: <FoodDetails /> }, // Create food
          { path: "food-details/:id", element: <FoodDetails /> }, // Edit food

          // New Cloud Kitchen routes
          { path: "kitchen-depot", element: <KitchenDepot /> }, // Kitchen Depot
          { path: "kitchen-depot/create", element: <KitchenDepotForm /> }, // Create Kitchen Depot item
          { path: "kitchen-depot/edit/:id", element: <KitchenDepotForm /> }, // Edit Kitchen Depot item
          { path: "food-verification", element: <FoodVerification /> }, // Food Verification
          { path: "combos", element: <ProductCombos /> }, // Product Combos
          { path: "combos/create", element: <ProductComboForm /> }, // Create Product Combo
          { path: "combos/edit/:id", element: <ProductComboForm /> }, // Edit Product Combo
          { path: "pos", element: <POSInterface /> }, // POS Interface
          { path: "chat", element: <ChatInterface /> }, // Chat Interface

          { path: "attributes/food", element: <FoodAttribute /> }, // 12.1. Food Attributes
          {
            path: "attributes/food/create",
            element: <CreateModel title="Create food Attributes" />,
          },
          { path: "attributes/review", element: <Attributes /> }, // 12.2. Review Attributes
          {
            path: "attributes/review/create",
            element: <EditForm title="Create Review Attributes" initialValues={"Name"} />,
          },
          { path: "orders", element: <Orders /> }, // 13. Orders
          {
            path: "orders/:id",
            element: <OrderDetail />,
          },
          { path: "print-order", element: <PrientOrder /> },
          { path: "edit-order", element: <OrderEdit /> }, // 13. Orders
          { path: "gift-cards", element: <GiftCards /> }, // 14. Gift Cards
          {
            path: "/gift-dashboard",
            element: <GiftCardDashboard />,
          },
          {
            path: "/gift-create",
            element: <CreateGiftCard />,
          },
          {
            path: "/gift-edit/:id",
            element: <GiftCardDetails />,
          },
          {
            path: "gift-create",
            element: <GiftCardDetails title={""} message={""} image={""} expiryDay={""} status={""} />,
          },
          { path: "coupons", element: <Coupans /> }, // 15
          { path: "users", element: <UserCustomer /> },
          {
            path: "users/edit",
            element: <UserDetails />,
            children: [
              { path: "", element: <BasicInfo user={user} /> },
              { path: "user-order", element: <UserOrders /> },
              { path: "user-wallet", element: <UserWallat /> },
            ],
          },
          { path: "create-user", element: <UserDetailsForm /> },
          { path: "editcoupons", element: <EditCoupans /> }, // 16
          { path: "documents", element: <DocumentPage /> }, // 16. Documents
          { path: "document/create", element: <CreateDocuments /> },
          { path: "notifications/send", element: <SendNotifications /> }, // 17.1. Send Notifications
          { path: "notifications/create", element: <CreateNotification /> },
          { path: "notifications/app", element: <AppNotification /> }, // 17.2. App Notifications
          { path: "notifications/edit", element: <EditNotification /> },
          { path: "payments/restaurants", element: <Payments /> }, // 18.1. Restaurants Payments
          { path: "payouts/restaurants", element: <RestaurantPayOut /> }, // 18.2. Restaurants Payouts
          {
            path: "payouts/restaurants/create",
            element: <RestaurantPayOutDetails />,
          },
          { path: "payments/drivers", element: <DriverPayments /> }, // 18.3. Drivers Payments
          { path: "payouts/drivers", element: <DriverPayOut /> }, // 18.4. Drivers Payouts
          { path: "payouts/drivers/create", element: <DriverPayOutDetailes /> },
          { path: "wallets/transactions", element: <WalletTransaction /> }, // 18.5. Wallets Transactions
          { path: "payout/requests", element: <PayOutRequest /> },
          // 18.6. Payout Requests
          { path: "payout/requests/drivers", element: <DriverPayOutRequest /> },
          { path: "banners-items", element: <BannerItems /> }, // 19. Banners Items

          { path: "/banner-items/create", element: <CreateBanner /> },
          { path: "cms/pages", element: <CMSPages /> }, // 20. CMS Pages
          { path: "cms/create", element: <CMSPageDetailes /> },
          { path: "email/templates", element: <EmailTemplates /> }, //
          { path: "email/templates/create", element: <EditTemplate /> },
          { path: "settings/global", element: <GlobalSettings /> }, // 22.1. Global Settings
          { path: "settings/currencies", element: <Currencies /> }, // 22.2. Currencies
          { path: "/create-currencies", element: <CreateCurrencies /> },
          {
            path: "analytics",
            element: <AnalyticsSettings />,
          },
          {
            path: "settings/payment-methods",
            element: <ParentPayment />,
            children: [
              { path: "stripe", element: <Stripe /> },
              { path: "cod", element: <COD /> },
              { path: "razorpay", element: <RazorPay /> },
              { path: "paypal", element: <Paypal /> },
              { path: "paytm", element: <Paytm /> },
              { path: "wallet", element: <Wallet /> },
              { path: "payfast", element: <PayFast /> },
              { path: "paystack", element: <PayStack /> },
              { path: "flutterwave", element: <FlutterWaves /> },
              { path: "mercadopago", element: <MercadoPago /> },
            ],
          }, // 22.3. Payment Methods
          { path: "settings/commissions", element: <AdminCommission /> }, // 22.4. Admin Commissions
          { path: "settings/radius-config", element: <RadiousConfigration /> }, // 22.5. Radius Configurations
          { path: "settings/dine-in", element: <DineInFeature /> }, // 22.6. Dine In Feature Settings
          { path: "settings/tax", element: <TaxSetting /> },
          // {
          //   path: "settings/create-tax",
          //   element: <CreateTax />,
          // }, // 22.7. Tax Settings
          {
            path: "settings/create-tax",
            element: <AppearanceSettings />,
          }, // 22.7. Tax Settings
          { path: "settings/delivery-charges", element: <DeliveryCharges /> }, // 22.8. Delivery Charges
          {
            path: "settings/document-verification",
            element: <DocumentVerification />,
          }, // 22.9. Document Verification
          // 22.9. Document Verification
          { path: "settings/languages", element: <Languages /> }, // 22.10. Languages
          { path: "settings/edit-languages", element: <EditLanguages /> },
          { path: "settings/special-offers", element: <SpecialOffer /> }, // 22.11. Special Offers
        ],
      },
    ],
  },

  // Catch-all route - redirect to login if not authenticated, otherwise to 404
  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
])

export default router
