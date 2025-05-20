// import React from "react";
// import TitleHead from "../Header/TitleHead";
// import VendorsList from "./VendorsList";
// import { AllvendorsData } from "../../Utils/data";

// const ApprovedVendors = () => {
//   return (
//     <div>
//       <TitleHead
//         title={"Pending Vendors"}
//         desc2={"> Vendors "}
//         link={"/vendors"}
//         desc={"Pending Vendors"}
//       />
//       <div className="w-[90%] mx-auto">
//         <VendorsList allVendorsData={AllvendorsData} />
//       </div>
//     </div>
//   );
// };

// export default ApprovedVendors;


"use client"

import { useState, useEffect } from "react"
import TitleHead from "../../component/Header/TitleHead"
import VendorsList from "../../component/Vendors/VendorsList"
import { AllvendorsData } from "../../Utils/data"

const ApprovedVendors = () => {
  const [approvedVendors, setApprovedVendors] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Filter vendors to get only approved ones
    const filteredVendors = AllvendorsData.filter(
      (vendor) => vendor.status === "approved" || vendor.isApproved === true,
    )

    setApprovedVendors(filteredVendors)
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <div className="p-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="h-12 bg-gray-200 rounded mb-4"></div>
          <div className="h-12 bg-gray-200 rounded mb-4"></div>
        </div>
      </div>
    )
  }

  return (
    <>
      <TitleHead title="Approved Vendors" desc="Approved Vendors" />
      <div className="p-4">
        {approvedVendors.length > 0 ? (
          <VendorsList allVendorsData={approvedVendors} />
        ) : (
          <div className="bg-white p-8 rounded-lg shadow text-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">No Approved Vendors</h2>
            <p className="text-gray-500">There are currently no approved vendors in the system.</p>
          </div>
        )}
      </div>
    </>
  )
}

export default ApprovedVendors
