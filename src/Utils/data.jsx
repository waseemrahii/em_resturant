/////// import react 

import React from 'react'
import { AiOutlineExclamationCircle } from "react-icons/ai"
import { BiSolidCategory } from "react-icons/bi"
import { BsBank, BsBank2, BsFillPersonCheckFill } from "react-icons/bs"
import {
  FaBell,
  FaCar,
  FaClipboardList,
  FaDotCircle,
  FaFileArchive,
  FaGift,
  FaHome,
  FaLock,
  FaRegCheckCircle,
  FaRegClipboard,
  FaShoppingCart,
  FaUser,
  FaUserCog,
  FaUsers,
  FaUtensils,
} from "react-icons/fa"
import { FaComputer } from "react-icons/fa6"
import { IoMdCart, IoMdWallet } from "react-icons/io"
import { IoBagHandle, IoCheckmarkCircleSharp, IoCloseOutline, IoDocumentText, IoFastFoodOutline } from "react-icons/io5"
import { LuMonitorSmartphone } from "react-icons/lu"
import { MdEmail, MdLocalCarWash, MdShareLocation } from "react-icons/md"
import { RiHomeGearFill, RiMoneyDollarBoxLine } from "react-icons/ri"
import { TbReportSearch } from "react-icons/tb"
import { TfiWallet } from "react-icons/tfi"

export const cardData = [
  {
    title: "Total Earnings",
    value: "RS1922.23",
    link: "payments/restaurants",
    icon: <RiMoneyDollarBoxLine size={40} className="  p-1 font-bold rounded" />,
  },
  {
    title: "Total Restaurants",
    value: "53",
    link: "/restaurants",
    icon: <IoBagHandle size={40} className="  p-1 font-bold rounded" />,
  },
  {
    title: "Total Orders",
    value: "89",
    link: "/orders",
    icon: <FaShoppingCart size={40} className="  p-1 font-bold rounded" />,
  },
  {
    title: "Total Foods",
    value: "343",
    link: "/foods",
    icon: <FaUtensils size={40} className="  p-1 font-bold rounded" />,
  },
  {
    title: "Admin Commission",
    value: "$276.63",
    link: "payments/restaurants",
    icon: <TfiWallet size={40} className="  p-1 font-bold rounded" />,
  },
  {
    title: "Total Clients",
    value: "114",
    link: "/users",
    icon: <FaUser size={40} className="  p-1 font-bold rounded" />,
  },
  {
    title: "Total Drivers",
    value: "71",
    link: "/drivers/all",
    icon: <BsFillPersonCheckFill size={40} className="  p-1 font-bold rounded" />,
  },
]

export const cardData2 = [
  {
    title: "Order Placed",
    link: "/order",
    value: "56",
    icon: <FaComputer size={24} />,
  },
  {
    title: "Order Confirmed",
    value: "8",
    link: "/orders",
    icon: <IoCheckmarkCircleSharp size={24} />,
  },
  {
    title: "Order Shipped",
    value: "2",
    link: "/orders",
    icon: <FaRegClipboard size={24} />,
  },
  {
    title: "Order Completed",
    value: "18",
    link: "/orders",
    icon: <FaRegCheckCircle size={24} />,
  },
  {
    title: "Order Canceled",
    value: "3",
    link: "/orders",
    icon: <IoCloseOutline size={24} />,
  },
  {
    title: "Delivery Failed",
    value: "0",
    link: "/orders",
    icon: <AiOutlineExclamationCircle size={24} />,
  },
  {
    title: "Waiting for driver",
    value: "2",
    link: "/orders",
    icon: <MdLocalCarWash size={24} />,
  },
]

export const sidebarItems = [
  { title: "Dashboard", icon: <FaHome />, path: "/" }, // 1. Dashboard
  // { title: "Live Tracking", icon: <RiHomeGearFill />, path: "/gods-eye" }, // 2. God's Eye
  { title: "Orders", icon: <FaFileArchive />, path: "/orders" }, // 13. Orders
  
  { title: "Zone", icon: <MdShareLocation />, path: "/zone" }, // 3. Zone

  // {
  //   title: "Owners / Vendors", // 6. Owners / Vendors
  //   icon: <FaUserCog />,
  //   subSections: [
  //     {
  //       title: "All Vendors", // 6.1. All Vendors
  //       icon: <FaDotCircle size={8} />,
  //       path: "/vendors/all",
  //     },
  //     {
  //       title: "Approved Vendors", // 6.2. Approved Vendors
  //       icon: <FaDotCircle size={8} />,
  //       path: "/vendors/approved",
  //     },
  //     {
  //       title: "Approval Pending Vendors", // 6.3. Approval Pending Vendors
  //       icon: <FaDotCircle size={8} />,
  //       path: "/vendors/pending",
  //     },
  //   ],
  // },
  // { title: "Drivers", icon: <FaClipboardList />, path: "/drivers/all" }, // 7. Restaurants
  
  // {
  //   title: "Drivers", // 8. Drivers
  //   icon: <FaCar />,
  //   subSections: [
  //     {
  //       title: "All Drivers", // 8.1. All Drivers
  //       icon: <FaDotCircle size={8} />,
  //       path: "/drivers/all",
  //     },
  //     {
  //       title: "Approved Drivers", // 8.2. Approved Drivers
  //       icon: <FaDotCircle size={8} />,
  //       path: "/drivers/approved",
  //     },
  //     {
  //       title: "Approval Pending Drivers", // 8.3. Approval Pending Drivers
  //       icon: <FaDotCircle size={8} />,
  //       path: "/drivers/pending",
  //     },
  //   ],
  // },

 
  // {
  //   title: "Reports", // 9. Reports
  //   icon: <TbReportSearch />,
  //   subSections: [
  //     {
  //       title: "Sales Report", // 9.1. Sales Report
  //       icon: <FaDotCircle size={8} />,
  //       path: "/reports/sales",
  //     },
  //   ],
  // },
  { title: "Categories", icon: <BiSolidCategory />, path: "/categories" }, // 10. Categories
  { title: "Foods", icon: <IoFastFoodOutline />, path: "/foods" }, // 11. Foods
  {
    title: "Attributes", // 12. Attributes
    icon: <IoDocumentText />,
    subSections: [
      {
        title: "Food Attributes", // 12.1. Food Attributes
        icon: <FaDotCircle size={8} />,
        path: "/attributes/food",
      },
      {
        title: "Review Attributes", // 12.2. Review Attributes
        icon: <FaDotCircle size={8} />,
        path: "/attributes/review",
      },
    ],
  },
    //  { title: "Analytics", icon: <FaClipboardList />, path: "/analytics" }, // 7. Restaurants
  // { title: "Reports", icon: <FaDotCircle />, path: "/reports/sales" }, // 7. Restaurants

  { title: "Gift Cards", icon: <FaGift />, path: "/gift-cards" }, // 14. Gift Cards
  { title: "Coupons", icon: <FaGift />, path: "/coupons" }, // 15. Coupons

  // {
  //   title: "Access Control", // 4. Access Control
  //   icon: <FaLock />,

  //   subSections: [
  //     {
  //       title: "Roles", // 4.1. Roles
  //       icon: <FaDotCircle size={8} />,
  //       path: "/access-control/roles",
  //     },
  //     {
  //       title: "Users", // 4.2. Admin Users
  //       icon: <FaDotCircle size={8} />,
  //       path: "/access-control/admin-user",
  //     },
  //   ],
  // },
  // { title: "Users / Customers", icon: <FaUsers />, path: "/users" }, // 5. Users / Customers
  // { title: "Documents", icon: <IoDocumentText />, path: "/documents" }, // 16. Documents
  {
    title: "Notifications", // 17. Notifications
    icon: <FaBell />,
    subSections: [
      {
        title: "Send Notifications", // 17.1. Send Notifications
        icon: <FaDotCircle size={8} />,
        path: "/notifications/send",
      },
      {
        title: "App Notifications", // 17.2. App Notifications
        icon: <FaDotCircle size={8} />,
        path: "/notifications/app",
      },
    ],
  },
  {
    title: "Payments", // 18. Payments
    icon: <BsBank />,
    subSections: [
      // {
      //   title: "Restaurants Payments", // 18.1. Restaurants Payments
      //   icon: <FaDotCircle size={8} />,
      //   path: "/payments/restaurants",
      // },
      // {
      //   title: "Restaurants Payouts", // 18.2. Restaurants Payouts
      //   icon: <FaDotCircle size={8} />,
      //   path: "/payouts/restaurants",
      // },
      // {
      //   title: "Drivers Payments", // 18.3. Drivers Payments
      //   icon: <FaDotCircle size={8} />,
      //   path: "/payments/drivers",
      // },
      // {
      //   title: "Drivers Payouts", // 18.4. Drivers Payouts
      //   icon: <FaDotCircle size={8} />,
      //   path: "/payouts/drivers",
      // },
      {
        title: "Wallet Transactions", // 18.5. Wallet Transactions
        icon: <FaDotCircle size={8} />,
        path: "/wallets/transactions",
      },
      {
        title: "Payout Requests", // 18.6. Payout Requests
        icon: <FaDotCircle size={8} />,
        path: "/payout/requests",
      },
    ],
  },
  { title: "Banners Items", icon: <MdEmail />, path: "/banners-items" }, // 19. Banners Items
  // { title: "CMS Pages", icon: <MdEmail />, path: "/cms/pages" }, // 20. CMS Pages
  // { title: "Email Templates", icon: <MdEmail />, path: "/email/templates" }, // 21. Email Templates
  {
    title: "Settings", // 22. Settings
    icon: <LuMonitorSmartphone />,
    subSections: [
      { title: "Global Settings", icon: <FaDotCircle size={8} />, path: "/settings/global" }, // 22.1. Global Settings
      { title: "Currencies", icon: <FaDotCircle size={8} />, path: "/settings/currencies" }, // 22.2. Currencies
      { title: "Payment Methods", icon: <FaDotCircle size={8} />, path: "/settings/payment-methods" }, // 22.3. Payment Methods
      { title: "Admin Commissions", icon: <FaDotCircle size={8} />, path: "/settings/commissions" }, // 22.4. Admin Commissions
      { title: "Radius Configurations", icon: <FaDotCircle size={8} />, path: "/settings/radius-config" }, // 22.5. Radius Configurations
      { title: "Dine-in Feature Settings", icon: <FaDotCircle size={8} />, path: "/settings/dine-in" }, // 22.6. Dine-in Feature Settings
      { title: "Tax Settings", icon: <FaDotCircle size={8} />, path: "/settings/tax" }, // 22.7. Tax Settings
      { title: "Delivery Charges", icon: <FaDotCircle size={8} />, path: "/settings/delivery-charges" }, // 22.8. Delivery Charges
      { title: "Document Verification", icon: <FaDotCircle size={8} />, path: "/settings/document-verification" }, // 22.9. Document Verification
      { title: "Languages", icon: <FaDotCircle size={8} />, path: "/settings/languages" }, // 22.10. Languages
      { title: "Special Offers", icon: <FaDotCircle size={8} />, path: "/settings/special-offers" }, // 22.11. Special Offers
      // { title: "Terms and Conditions", icon: <FaDotCircle size={8} />, path: "/settings/terms" },  // 22.12. Terms and Conditions
      // { title: "Privacy Policy", icon: <FaDotCircle size={8} />, path: "/settings/privacy" },  // 22.13. Privacy Policy
      // { title: "Landing Page Template", icon: <FaDotCircle size={8} />, path: "/settings/landing-page" },  // 22.14. Landing Page Template
      // { title: "Footer Template", icon: <FaDotCircle size={8} />, path: "/settings/footer" },  // 22.15. Footer Template
    ],
  },
]

export const tableData = [
  ["Photo", "Title", "Banner Position", "Publish"],
  [
    "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fbar_food_1715686767301.png?alt=media&token=9429a78b-4062-42bb-8274-3848f4df8626",
    "Role 1",
    "Category 1",
    true,
  ],
  [
    "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fbar_food_1715686767301.png?alt=media&token=9429a78b-4062-42bb-8274-3848f4df8626",
    "Role 2",
    "Category 2",
    false,
  ],
  // Additional rows...
]

export const initialRoles = [
  {
    img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fbar_food_1715686767301.png?alt=media&token=9429a78b-4062-42bb-8274-3848f4df8626",
    price: "$20",
    resturant: "Hsa",
    category: "Burger",
    name: "Super Administrator",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fbar_food_1715686767301.png?alt=media&token=9429a78b-4062-42bb-8274-3848f4df8626",
    price: "$20",
    resturant: "Hsa",
    category: "Burger",
    name: "Administrator",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fbar_food_1715686767301.png?alt=media&token=9429a78b-4062-42bb-8274-3848f4df8626",
    price: "$20",
    resturant: "Hsa",
    category: "Burger",
    name: "User",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fbar_food_1715686767301.png?alt=media&token=9429a78b-4062-42bb-8274-3848f4df8626",
    price: "$20",
    resturant: "Hsa",
    category: "Burger",
    name: "Super Administrator",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fbar_food_1715686767301.png?alt=media&token=9429a78b-4062-42bb-8274-3848f4df8626",
    price: "$20",
    resturant: "Hsa",
    category: "Burger",
    name: "Administrator",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fbar_food_1715686767301.png?alt=media&token=9429a78b-4062-42bb-8274-3848f4df8626",
    price: "$20",
    resturant: "Hsa",
    category: "Burger",
    name: "User",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fbar_food_1715686767301.png?alt=media&token=9429a78b-4062-42bb-8274-3848f4df8626",
    price: "$20",
    resturant: "Hsa",
    category: "Burger",
    name: "Super Administrator",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fbar_food_1715686767301.png?alt=media&token=9429a78b-4062-42bb-8274-3848f4df8626",
    price: "$20",
    resturant: "Hsa",
    category: "Burger",
    name: "Administrator",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fbar_food_1715686767301.png?alt=media&token=9429a78b-4062-42bb-8274-3848f4df8626",
    price: "$20",
    resturant: "Hsa",
    category: "Burger",
    name: "User",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fbar_food_1715686767301.png?alt=media&token=9429a78b-4062-42bb-8274-3848f4df8626",
    price: "$20",
    resturant: "Hsa",
    category: "Burger",
    name: "Super Administrator",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fbar_food_1715686767301.png?alt=media&token=9429a78b-4062-42bb-8274-3848f4df8626",
    price: "$20",
    resturant: "Hsa",
    category: "Burger",
    name: "Administrator",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fbar_food_1715686767301.png?alt=media&token=9429a78b-4062-42bb-8274-3848f4df8626",
    price: "$20",
    resturant: "Hsa",
    category: "Burger",
    name: "User",
  },
]

export const vendorsData = [
  {
    id: 1,
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7",
    name: "iJul Store",
    email: "i********@yopmail.com",
    date: "Wed Jul 31 2024 9:33:01 AM",
    documents: true,
    active: true,
  },
  {
    id: 2,
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7",
    name: "Test te",
    email: "t********@test.com",
    date: "Wed Jul 31 2024 5:43:55 AM",
    documents: true,
    active: true,
  },
  {
    id: 3,
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2FIMG_20181015_093712_306-removebg-preview_1722250396169.png?alt=media&token=58b37ac0-10be-469b-9947-8400d7ba39ae",
    name: "Zuhoor uddin",
    email: "s********@test.com",
    date: "Wed Jul 31 2024 5:43:55 AM",
    documents: true,
    active: true,
  },
  {
    id: 4,
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7",
    name: "Zuhoor uddin",
    email: "s********@test.com",
    date: "Wed Jul 31 2024 5:43:55 AM",
    documents: true,
    active: true,
  },

  {
    id: 5,
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7",
    name: "Максуд Нишанов",
    email: "m********@test.com",
    date: "Wed Jul 31 2024 5:43:55 AM",
    documents: true,
    active: true,
  },

  {
    id: 6,
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7",
    name: "Juhi Bagam",
    email: "j********@test.com",
    date: "Wed Jul 31 2024 5:43:55 AM",
    documents: true,
    active: true,
  },

  {
    id: 7,
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7",
    name: "iJul Store",
    email: "i********@test.com",
    date: "Wed Jul 31 2024 5:43:55 AM",
    documents: true,
    active: true,
  },

  {
    id: 8,
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7",
    name: "sakshi n",
    email: "a********@test.com",
    date: "Wed Jul 31 2024 5:43:55 AM",
    documents: true,
    active: true,
  },
  {
    id: 9,
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7",
    name: "sakshi n",
    email: "a********@test.com",
    date: "Wed Jul 31 2024 5:43:55 AM",
    documents: true,
    active: true,
  },

  // Add more vendors as needed
]

export const AllvendorsData = [
  {
    id: 1,
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7",
    name: "iJul Store",
    email: "i********@yopmail.com",
    date: "Wed Jul 31 2024 9:33:01 AM",
    documents: true,
    active: true,
  },
  {
    id: 2,
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7",
    name: "Test te",
    email: "t********@test.com",
    date: "Wed Jul 31 2024 5:43:55 AM",
    documents: true,
    active: true,
  },
  {
    id: 3,
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2FIMG_20181015_093712_306-removebg-preview_1722250396169.png?alt=media&token=58b37ac0-10be-469b-9947-8400d7ba39ae",
    name: "Zuhoor uddin",
    email: "s********@test.com",
    date: "Wed Jul 31 2024 5:43:55 AM",
    documents: true,
    active: true,
  },
  {
    id: 4,
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7",
    name: "Zuhoor uddin",
    email: "s********@test.com",
    date: "Wed Jul 31 2024 5:43:55 AM",
    documents: true,
    active: true,
  },

  {
    id: 5,
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7",
    name: "Максуд Нишанов",
    email: "m********@test.com",
    date: "Wed Jul 31 2024 5:43:55 AM",
    documents: true,
    active: true,
  },

  {
    id: 6,
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7",
    name: "Juhi Bagam",
    email: "j********@test.com",
    date: "Wed Jul 31 2024 5:43:55 AM",
    documents: true,
    active: true,
  },

  {
    id: 7,
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7",
    name: "iJul Store",
    email: "i********@test.com",
    date: "Wed Jul 31 2024 5:43:55 AM",
    documents: true,
    active: true,
  },

  {
    id: 8,
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7",
    name: "sakshi n",
    email: "a********@test.com",
    date: "Wed Jul 31 2024 5:43:55 AM",
    documents: true,
    active: true,
  },
  {
    id: 9,
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7",
    name: "sakshi n",
    email: "a********@test.com",
    date: "Wed Jul 31 2024 5:43:55 AM",
    documents: true,
    active: true,
  },

  // Add more vendors as needed
]

export const AllapprovelsData = [
  {
    id: 1,
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fthe%20(1)_1722933925273.png?alt=media&token=1d658dea-cc2e-474a-89d8-2665cafd76cc",
    name: "Updated iJul Store",

    phone: "123-456-7890", // New field
    date: "Wed Aug 6 2024 9:33:01 AM",

    walletHistory: "wallet history",
    foods: 0,
    orders: 0,
  },
  {
    id: 2,
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7",
    name: "Updated iJul Store",

    phone: "123-456-7890", // New field
    date: "Wed Aug 6 2024 9:33:01 AM",

    walletHistory: "wallet history",
    foods: 0,
    orders: 0,
  },
  {
    id: 3,
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fpexels-quark-studio-1159039-3201922_1720528647260.jpg?alt=media&token=203ba7d0-940a-41a9-a785-c541bd8d1c31",
    name: "Updated iJul Store",

    phone: "123-456-7890", // New field
    date: "Wed Aug 6 2024 9:33:01 AM",

    walletHistory: "wallet history",
    foods: 0,
    orders: 0,
  },
  {
    id: 4,
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Frest3_1720594218388.jfif?alt=media&token=05caaf9c-fa07-4ff1-a3a8-e930407dbb48",
    name: "Updated iJul Store",

    phone: "123-456-7890", // New field
    date: "Wed Aug 6 2024 9:33:01 AM",

    walletHistory: "wallet history",
    foods: 0,
    orders: 0,
  },
  {
    id: 5,
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2F71rlyQ2X6nL_1720529337154._AC_UF1000%2C1000_QL80_?alt=media&token=c8046932-61fd-4f97-9d9b-889476b867d1",
    name: "Updated iJul Store",

    phone: "123-456-7890", // New field
    date: "Wed Aug 6 2024 9:33:01 AM",

    walletHistory: "wallet history",
    foods: 0,
    orders: 0,
  },
  {
    id: 6,
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fdownload%20(13)_1718795790642.jfif?alt=media&token=f6f148d3-bebf-4e97-b006-bd9147b1279d",
    name: "Updated iJul Store",

    phone: "123-456-7890", // New field
    date: "Wed Aug 6 2024 9:33:01 AM",

    walletHistory: "wallet history",
    foods: 0,
    orders: 0,
  },
]

export const AlldriversData = [
  {
    id: 1,
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7",
    name: "iJul Store",
    email: "i********@yopmail.com",
    date: "Wed Jul 31 2024 9:33:01 AM",
    documents: true,
    active: true,
    walletHistory: "wallet history",
    totalorders: 0,
  },
  {
    id: 2,
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7",
    name: "Test te",
    email: "t********@test.com",
    date: "Wed Jul 31 2024 5:43:55 AM",
    documents: true,
    active: true,
    walletHistory: "wallet history",
    totalorders: 0,
  },
  {
    id: 3,
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2FIMG_20181015_093712_306-removebg-preview_1722250396169.png?alt=media&token=58b37ac0-10be-469b-9947-8400d7ba39ae",
    name: "Zuhoor uddin",
    email: "s********@test.com",
    date: "Wed Jul 31 2024 5:43:55 AM",
    documents: true,
    active: true,
    walletHistory: "wallet history",
    totalorders: 0,
  },
  {
    id: 4,
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7",
    name: "Zuhoor uddin",
    email: "s********@test.com",
    date: "Wed Jul 31 2024 5:43:55 AM",
    documents: true,
    active: true,
    walletHistory: "wallet history",
    totalorders: 0,
  },

  {
    id: 5,
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7",
    name: "Максуд Нишанов",
    email: "m********@test.com",
    date: "Wed Jul 31 2024 5:43:55 AM",
    documents: true,
    active: true,
    walletHistory: "wallet history",
    totalorders: 0,
  },

  {
    id: 6,
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7",
    name: "Juhi Bagam",
    email: "j********@test.com",
    date: "Wed Jul 31 2024 5:43:55 AM",
    documents: true,
    active: true,
    walletHistory: "wallet history",
    totalorders: 0,
  },

  {
    id: 7,
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7",
    name: "iJul Store",
    email: "i********@test.com",
    date: "Wed Jul 31 2024 5:43:55 AM",
    documents: true,
    active: true,
    walletHistory: "wallet history",
    totalorders: 0,
  },

  {
    id: 8,
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7",
    name: "sakshi n",
    email: "a********@test.com",
    date: "Wed Jul 31 2024 5:43:55 AM",
    documents: true,
    active: true,
    walletHistory: "wallet history",
    totalorders: 0,
  },
  {
    id: 9,
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7",
    name: "sakshi n",
    email: "a********@test.com",
    date: "Wed Jul 31 2024 5:43:55 AM",
    documents: true,
    active: true,
    walletHistory: "wallet history",
    totalorders: 0,
  },

  // Add more vendors as needed
]

export const FoodData = [
  {
    id: 1,
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7",
    name: "iJul Store",
    price: "$2500",
    category: "burger",

    publish: true,
  },
  {
    id: 2,
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7",
    name: "Test te",
    price: "3400",
    category: "burger",

    publish: true,
  },
  {
    id: 3,
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2FIMG_20181015_093712_306-removebg-preview_1722250396169.png?alt=media&token=58b37ac0-10be-469b-9947-8400d7ba39ae",
    name: "Zuhoor uddin",
    price: "2600",
    category: "burger",

    publish: true,
  },
  {
    id: 4,
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7",
    name: "Zuhoor uddin",
    price: "2500",
    category: "burger",

    publish: true,
  },

  {
    id: 5,
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7",
    name: "Максуд Нишанов",
    price: "2500",
    category: "burger",

    publish: true,
  },

  {
    id: 6,
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7",
    name: "Juhi Bagam",
    price: "2500",
    category: "burger",

    publish: true,
  },

  {
    id: 7,
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7",
    name: "iJul Store",
    price: "2500",
    category: "burger",

    publish: true,
  },

  {
    id: 8,
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7",
    name: "sakshi n",
    price: "2500",
    category: "burger",

    publish: true,
  },
  {
    id: 9,
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7",
    name: "sakshi n",
    price: "2500",
    category: "burger",

    publish: true,
  },

  // Add more vendors as needed
]

export const initialFormState = {
  name: "",
  allPermissions: false,
  permissions: {
    godsEye: { view: false },
    zone: { list: false, create: false, edit: false, delete: false },
    roles: {
      list: false,
      create: true, // Set to true as specified
      store: false,
      edit: false,
      update: false,
      delete: false,
    },
    adminUser: {
      list: false,
      create: false,
      store: false,
      edit: false,
      update: false,
      delete: false,
    },
    usersCustomer: {
      list: false,
      create: false,
      edit: false,
      view: false,
      delete: false,
    },
    ownersVendors: {
      list: false,
      delete: false,
    },
    approvedVendors: {
      list: false,
      delete: false,
    },
    approvalPendingVendors: {
      list: false,
      delete: false,
    },
    vendorDocuments: {
      list: false,
      edit: false,
    },
    restaurants: {
      list: false,
      create: false,
      edit: false,
      view: false,
      delete: false,
    },
    drivers: {
      list: false,
      create: false,
      edit: false,
      view: false,
      delete: false,
    },
    approvedDrivers: {
      list: false,
      delete: false,
    },
    approvalPendingDrivers: {
      list: false,
      delete: false,
    },
    driverDocuments: {
      list: false,
      delete: false,
    },
    salesReport: {
      delete: false,
    },
    categories: {
      list: false,
      create: false,
      edit: false,
      delete: false,
    },
    foods: {
      list: false,
      create: false,
      edit: false,
      delete: false,
    },
    foodAttribute: {
      list: false,
      create: false,
      edit: false,
      delete: false,
    },
    reviewAttributes: {
      list: false,
      create: false,
      edit: false,
      delete: false,
    },
    orders: {
      list: false,
      print: false,
      edit: false,
      delete: false,
    },
    dineInOrders: {
      list: false,
      edit: false,
    },
    giftCards: {
      list: false,
      create: false,
      edit: false,
      delete: false,
    },
    coupons: {
      list: false,
      create: false,
      edit: false,
      delete: false,
    },
    documents: {
      list: false,
      create: false,
      edit: false,
      delete: false,
    },
    sendNotification: {
      list: false,
      create: false,
      delete: false,
    },
    appNotification: {
      list: false,
      edit: false,
    },
    payments: {
      list: false,
    },
    restaurantsPayouts: {
      list: false,
      create: false,
    },
    driversPayments: {
      list: false,
      delete: false,
    },
    driversPayouts: {
      list: false,
      create: false,
    },
    walletTransaction: {
      list: false,
    },
    payoutRequests: {
      driverList: false,
      restaurantList: false,
    },
    bannerItems: {
      list: false,
      create: false,
      edit: false,
      delete: false,
    },
    cmsPages: {
      list: false,
      create: false,
      edit: false,
      delete: false,
    },
    emailTemplates: {
      list: false,
      edit: false,
    },
    globalSettings: {
      update: false,
    },
    currencies: {
      list: false,
      create: false,
      edit: false,
      delete: false,
    },
    paymentMethods: {
      update: false,
    },
    adminCommission: {
      update: false,
    },
    radiusConfiguration: {
      update: false,
    },
    dineInFeatureSetting: {
      update: false,
    },
    taxSetting: {
      list: false,
      create: false,
      edit: false,
      delete: false,
    },
    deliveryCharge: {
      update: false,
    },
    documentVerification: {
      update: false,
    },
    languages: {
      list: false,
      create: false,
      edit: false,
      delete: false,
    },
    specialOffer: {
      update: false,
    },
    termsAndConditions: {
      update: false,
    },
    privacyPolicy: {
      update: false,
    },
    landingPageTemplate: {
      update: false,
    },
    footerTemplate: {
      update: false,
    },
  },
  permissionConfig: [
    { menu: "God's Eye", permissions: ["view"], key: "godsEye" },
    {
      menu: "Zone",
      permissions: ["list", "create", "edit", "delete"],
      key: "zone",
    },
    {
      menu: "Roles",
      permissions: ["list", "create", "store", "edit", "update", "delete"],
      key: "roles",
    },
    {
      menu: "Admin User",
      permissions: ["list", "create", "store", "edit", "update", "delete"],
      key: "adminUser",
    },
    {
      menu: "Users / Customer",
      permissions: ["list", "create", "edit", "view", "delete"],
      key: "usersCustomer",
    },
    {
      menu: "Owners / Vendors",
      permissions: ["list", "delete"],
      key: "ownersVendors",
    },
    {
      menu: "Approved Vendors",
      permissions: ["list", "delete"],
      key: "approvedVendors",
    },
    {
      menu: "Approval Pending Vendors",
      permissions: ["list", "delete"],
      key: "approvalPendingVendors",
    },
    {
      menu: "Vendor Documents",
      permissions: ["list", "edit"],
      key: "vendorDocuments",
    },
    {
      menu: "Restaurants",
      permissions: ["list", "create", "edit", "view", "delete"],
      key: "restaurants",
    },
    {
      menu: "Drivers",
      permissions: ["list", "create", "edit", "view", "delete"],
      key: "drivers",
    },
    {
      menu: "Approved Drivers",
      permissions: ["list", "delete"],
      key: "approvedDrivers",
    },
    {
      menu: "Approval Pending Drivers",
      permissions: ["list", "delete"],
      key: "approvalPendingDrivers",
    },
    {
      menu: "Driver Documents",
      permissions: ["list", "delete"],
      key: "driverDocuments",
    },
    {
      menu: "Sales Report",
      permissions: ["delete"],
      key: "salesReport",
    },
    {
      menu: "Categories",
      permissions: ["list", "create", "edit", "delete"],
      key: "categories",
    },
    {
      menu: "Foods",
      permissions: ["list", "create", "edit", "delete"],
      key: "foods",
    },
    {
      menu: "Food Attribute",
      permissions: ["list", "create", "edit", "delete"],
      key: "foodAttribute",
    },
    {
      menu: "Review Attributes",
      permissions: ["list", "create", "edit", "delete"],
      key: "reviewAttributes",
    },
    {
      menu: "Orders",
      permissions: ["list", "print", "edit", "delete"],
      key: "orders",
    },
    {
      menu: "Dine In Orders",
      permissions: ["list", "edit"],
      key: "dineInOrders",
    },
    {
      menu: "Gift Cards",
      permissions: ["list", "create", "edit", "delete"],
      key: "giftCards",
    },
    {
      menu: "Coupons",
      permissions: ["list", "create", "edit", "delete"],
      key: "coupons",
    },
    {
      menu: "Documents",
      permissions: ["list", "create", "edit", "delete"],
      key: "documents",
    },
    {
      menu: "Send Notification",
      permissions: ["list", "create", "delete"],
      key: "sendNotification",
    },
    {
      menu: "App Notification",
      permissions: ["list", "edit"],
      key: "appNotification",
    },
    {
      menu: "Payments",
      permissions: ["list"],
      key: "payments",
    },
    {
      menu: "Restaurants Payouts",
      permissions: ["list", "create"],
      key: "restaurantsPayouts",
    },
    {
      menu: "Drivers Payments",
      permissions: ["list", "delete"],
      key: "driversPayments",
    },
    {
      menu: "Drivers Payouts",
      permissions: ["list", "create"],
      key: "driversPayouts",
    },
    {
      menu: "Wallet Transaction",
      permissions: ["list"],
      key: "walletTransaction",
    },
    {
      menu: "Payout Requests",
      permissions: ["driverList", "restaurantList"],
      key: "payoutRequests",
    },
    {
      menu: "Banner Items",
      permissions: ["list", "create", "edit", "delete"],
      key: "bannerItems",
    },
    {
      menu: "CMS Pages",
      permissions: ["list", "create", "edit", "delete"],
      key: "cmsPages",
    },
    {
      menu: "Email Templates",
      permissions: ["list", "edit"],
      key: "emailTemplates",
    },
    {
      menu: "Global Settings",
      permissions: ["update"],
      key: "globalSettings",
    },
    {
      menu: "Currencies",
      permissions: ["list", "create", "edit", "delete"],
      key: "currencies",
    },
    {
      menu: "Payment Methods",
      permissions: ["update"],
      key: "paymentMethods",
    },
    {
      menu: "Admin Commission",
      permissions: ["update"],
      key: "adminCommission",
    },
    {
      menu: "Radius Configuration",
      permissions: ["update"],
      key: "radiusConfiguration",
    },
    {
      menu: "Dine In Feature Setting",
      permissions: ["update"],
      key: "dineInFeatureSetting",
    },
    {
      menu: "Tax Setting",
      permissions: ["list", "create", "edit", "delete"],
      key: "taxSetting",
    },
    {
      menu: "Delivery Charge",
      permissions: ["update"],
      key: "deliveryCharge",
    },
    {
      menu: "Document Verification",
      permissions: ["update"],
      key: "documentVerification",
    },
    {
      menu: "Languages",
      permissions: ["list", "create", "edit", "delete"],
      key: "languages",
    },
    {
      menu: "Special Offer",
      permissions: ["update"],
      key: "specialOffer",
    },
    {
      menu: "Terms And Conditions",
      permissions: ["update"],
      key: "termsAndConditions",
    },
    {
      menu: "Privacy Policy",
      permissions: ["update"],
      key: "privacyPolicy",
    },
    {
      menu: "Landing Page Template",
      permissions: ["update"],
      key: "landingPageTemplate",
    },
    {
      menu: "Footer Template",
      permissions: ["update"],
      key: "footerTemplate",
    },
  ],
}

export const user = {
  firstName: "iAug User",
  email: "a*******@yopmail.com",
  phone: "+9************",
  walletBalance: "€0",
  profileImage: "/logo-e.png", // Update this path
  address: "",
}

export const driverNavLinks = [
  { name: "Basic", path: "/driver/profile/info" },
  { name: "Orders", path: "/driver/profile/order" },
  { name: "Payout", path: "/driver/profile/payout" },
  { name: "Payout Request", path: "/driver/profile/payout-request" },
  { name: "Wallet Transaction", path: "/driver/profile/wallet" },
]

export const RestaurantsNavLinks = [
  { name: "Basic", path: "/restaurants/profile/info" },
  { name: "Foods", path: "/restaurants/profile/foods" },
  { name: "Orders", path: "/restaurants/profile/order" },
  { name: "Promos", path: "/restaurants/profile/promos" },
  { name: "Payouts", path: "/restaurants/profile/payouts" },
  { name: "Payout Requests", path: "/restaurants/profile/payout-request" },
  { name: "Dine In Features", path: "/restaurants/profile/dine-in" },
  { name: "Wallet Transaction", path: "/restaurants/profile/wallet" },
]

export const viewCardData = [
  { icon: <IoMdCart className="text-5xl text-white" />, value: "0", label: "Total Orders" },
  { icon: <BsBank2 className="text-5xl text-white" />, value: "$0.00", label: "Total Earning" },
  { icon: <IoMdWallet className="text-5xl text-white" />, value: "0", label: "Total Payment" },
  { icon: <IoMdWallet className="text-5xl text-white" />, value: "0", label: "Total Payment" }, // Adjust this if needed
]

export const placeholderUserImage = "/placeholder-user.jpg"


