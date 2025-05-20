// import React from "react";
// import { Link, NavLink } from "react-router-dom";
// import CardHeader from "../AllCards/CardHeader";

// const CategoryHead = () => {
//   const navLinks = [
//     { name: "Category Informations", path: "/categories/create/infomation" },
//     { name: "Review Atttributes", path: "/categories/create/review-attribute" },
//   ];
//   return (
//     <div>
//       <header className="border-b my-4">
//         <div className="">
//           <nav className="flex justify-center items-center space-x-4 ">
//             {navLinks.map((link, index) => (
//               <Link
//                 key={index}
//                 to={link.path}
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-white font-semibold px-2 py-1 rounded-t-md bg-primary-500 border-b-2 border-primary-900"
//                     : "text-white font-semibold px-2 py-1 rounded-t-md bg-primary-600 border-b-2 border-primary-900"
//                 }
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </nav>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default CategoryHead;


import { Link, useLocation } from "react-router-dom"
import { FaInfoCircle, FaStar } from "react-icons/fa"

const CategoryHead = () => {
  const location = useLocation()

  const navLinks = [
    {
      name: "Category Information",
      path: "/categories/create/infomation",
      icon: <FaInfoCircle className="mr-2" />,
    },
    {
      name: "Review Attributes",
      path: "/categories/create/review-attribute",
      icon: <FaStar className="mr-2" />,
    },
  ]

  return (
    <div className="mb-6">
      <div className="bg-white rounded-lg shadow-sm">
        <nav className="flex flex-wrap">
          {navLinks.map((link, index) => {
            const isActive = location.pathname === link.path

            return (
              <Link
                key={index}
                to={link.path}
                className={`flex items-center px-6 py-4 text-sm font-medium transition-colors ${
                  index === 0 ? "rounded-tl-lg rounded-bl-lg" : ""
                } ${index === navLinks.length - 1 ? "rounded-tr-lg rounded-br-lg" : ""} ${
                  isActive ? "bg-primary-600 text-white" : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {link.icon}
                {link.name}
                {isActive && <span className="ml-2 w-2 h-2 rounded-full bg-white"></span>}
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}

export default CategoryHead
