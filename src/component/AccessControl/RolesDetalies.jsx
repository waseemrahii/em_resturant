// //done validation

// import React, { useState } from "react";
// import { FaFileInvoice } from "react-icons/fa";
// import { FaArrowRotateLeft } from "react-icons/fa6";
// import { useForm } from "react-hook-form";
// import BottomButton from "../AllCards/BottomButton";
// import TitleHead from "../Header/TitleHead";

// const RolesDetalies = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//     // Handle form submission logic
//   };
//   const [formState, setFormState] = useState({
//     name: "",
//     allPermissions: false,
//     permissions: {
//       godsEye: { view: false },
//       zone: { list: false, create: false, edit: false, delete: false },
//       roles: {
//         list: false,
//         create: true, // Set to true as specified
//         store: false,
//         edit: false,
//         update: false,
//         delete: false,
//       },
//       adminUser: {
//         list: false,
//         create: false,
//         store: false,
//         edit: false,
//         update: false,
//         delete: false,
//       },
//       usersCustomer: {
//         list: false,
//         create: false,
//         edit: false,
//         view: false,
//         delete: false,
//       },
//       ownersVendors: {
//         list: false,
//         delete: false,
//       },
//       approvedVendors: {
//         list: false,
//         delete: false,
//       },
//       approvalPendingVendors: {
//         list: false,
//         delete: false,
//       },
//       vendorDocuments: {
//         list: false,
//         edit: false,
//       },
//       restaurants: {
//         list: false,
//         create: false,
//         edit: false,
//         view: false,
//         delete: false,
//       },
//       drivers: {
//         list: false,
//         create: false,
//         edit: false,
//         view: false,
//         delete: false,
//       },
//       approvedDrivers: {
//         list: false,
//         delete: false,
//       },
//       approvalPendingDrivers: {
//         list: false,
//         delete: false,
//       },
//       driverDocuments: {
//         list: false,
//         delete: false,
//       },
//       salesReport: {
//         delete: false,
//       },
//       categories: {
//         list: false,
//         create: false,
//         edit: false,
//         delete: false,
//       },
//       foods: {
//         list: false,
//         create: false,
//         edit: false,
//         delete: false,
//       },
//       foodAttribute: {
//         list: false,
//         create: false,
//         edit: false,
//         delete: false,
//       },
//       reviewAttributes: {
//         list: false,
//         create: false,
//         edit: false,
//         delete: false,
//       },
//       orders: {
//         list: false,
//         print: false,
//         edit: false,
//         delete: false,
//       },
//       dineInOrders: {
//         list: false,
//         edit: false,
//       },
//       giftCards: {
//         list: false,
//         create: false,
//         edit: false,
//         delete: false,
//       },
//       coupons: {
//         list: false,
//         create: false,
//         edit: false,
//         delete: false,
//       },
//       documents: {
//         list: false,
//         create: false,
//         edit: false,
//         delete: false,
//       },
//       sendNotification: {
//         list: false,
//         create: false,
//         delete: false,
//       },
//       appNotification: {
//         list: false,
//         edit: false,
//       },
//       payments: {
//         list: false,
//       },
//       restaurantsPayouts: {
//         list: false,
//         create: false,
//       },
//       driversPayments: {
//         list: false,
//         delete: false,
//       },
//       driversPayouts: {
//         list: false,
//         create: false,
//       },
//       walletTransaction: {
//         list: false,
//       },
//       payoutRequests: {
//         driverList: false,
//         restaurantList: false,
//       },
//       bannerItems: {
//         list: false,
//         create: false,
//         edit: false,
//         delete: false,
//       },
//       cmsPages: {
//         list: false,
//         create: false,
//         edit: false,
//         delete: false,
//       },
//       emailTemplates: {
//         list: false,
//         edit: false,
//       },
//       globalSettings: {
//         update: false,
//       },
//       currencies: {
//         list: false,
//         create: false,
//         edit: false,
//         delete: false,
//       },
//       paymentMethods: {
//         update: false,
//       },
//       adminCommission: {
//         update: false,
//       },
//       radiusConfiguration: {
//         update: false,
//       },
//       dineInFeatureSetting: {
//         update: false,
//       },
//       taxSetting: {
//         list: false,
//         create: false,
//         edit: false,
//         delete: false,
//       },
//       deliveryCharge: {
//         update: false,
//       },
//       documentVerification: {
//         update: false,
//       },
//       languages: {
//         list: false,
//         create: false,
//         edit: false,
//         delete: false,
//       },
//       specialOffer: {
//         update: false,
//       },
//       termsAndConditions: {
//         update: false,
//       },
//       privacyPolicy: {
//         update: false,
//       },
//       landingPageTemplate: {
//         update: false,
//       },
//       footerTemplate: {
//         update: false,
//       },
//     },
//   });

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (name === "allPermissions") {
//       const newPermissions = Object.keys(formState.permissions).reduce(
//         (acc, key) => {
//           const permissionSet = formState.permissions[key];
//           const updatedPermissions = Object.keys(permissionSet).reduce(
//             (pAcc, perm) => ({ ...pAcc, [perm]: checked }),
//             {}
//           );
//           return { ...acc, [key]: updatedPermissions };
//         },
//         {}
//       );
//       setFormState((prevState) => ({
//         ...prevState,
//         allPermissions: checked,
//         permissions: newPermissions,
//       }));
//     } else {
//       setFormState((prevState) => ({
//         ...prevState,
//         [name]: type === "checkbox" ? checked : value,
//       }));
//     }
//   };

//   const handlePermissionChange = (menu, permission) => {
//     setFormState((prevState) => {
//       const newPermissions = {
//         ...prevState.permissions,
//         [menu]: {
//           ...prevState.permissions[menu],
//           [permission]: !prevState.permissions[menu][permission],
//         },
//       };
//       const allPermissions = Object.keys(newPermissions).every((key) =>
//         Object.values(newPermissions[key]).every(Boolean)
//       );
//       return {
//         ...prevState,
//         permissions: newPermissions,
//         allPermissions,
//       };
//     });
//   };

//   const permissionConfig = [
//     { menu: "God's Eye", permissions: ["view"], key: "godsEye" },
//     {
//       menu: "Zone",
//       permissions: ["list", "create", "edit", "delete"],
//       key: "zone",
//     },
//     {
//       menu: "Roles",
//       permissions: ["list", "create", "store", "edit", "update", "delete"],
//       key: "roles",
//     },
//     {
//       menu: "Admin User",
//       permissions: ["list", "create", "store", "edit", "update", "delete"],
//       key: "adminUser",
//     },
//     {
//       menu: "Users / Customer",
//       permissions: ["list", "create", "edit", "view", "delete"],
//       key: "usersCustomer",
//     },
//     {
//       menu: "Owners / Vendors",
//       permissions: ["list", "delete"],
//       key: "ownersVendors",
//     },
//     {
//       menu: "Approved Vendors",
//       permissions: ["list", "delete"],
//       key: "approvedVendors",
//     },
//     {
//       menu: "Approval Pending Vendors",
//       permissions: ["list", "delete"],
//       key: "approvalPendingVendors",
//     },
//     {
//       menu: "Vendor Documents",
//       permissions: ["list", "edit"],
//       key: "vendorDocuments",
//     },
//     {
//       menu: "Restaurants",
//       permissions: ["list", "create", "edit", "view", "delete"],
//       key: "restaurants",
//     },
//     {
//       menu: "Drivers",
//       permissions: ["list", "create", "edit", "view", "delete"],
//       key: "drivers",
//     },
//     {
//       menu: "Approved Drivers",
//       permissions: ["list", "delete"],
//       key: "approvedDrivers",
//     },
//     {
//       menu: "Approval Pending Drivers",
//       permissions: ["list", "delete"],
//       key: "approvalPendingDrivers",
//     },
//     {
//       menu: "Driver Documents",
//       permissions: ["list", "delete"],
//       key: "driverDocuments",
//     },
//     {
//       menu: "Sales Report",
//       permissions: ["delete"],
//       key: "salesReport",
//     },
//     {
//       menu: "Categories",
//       permissions: ["list", "create", "edit", "delete"],
//       key: "categories",
//     },
//     {
//       menu: "Foods",
//       permissions: ["list", "create", "edit", "delete"],
//       key: "foods",
//     },
//     {
//       menu: "Food Attribute",
//       permissions: ["list", "create", "edit", "delete"],
//       key: "foodAttribute",
//     },
//     {
//       menu: "Review Attributes",
//       permissions: ["list", "create", "edit", "delete"],
//       key: "reviewAttributes",
//     },
//     {
//       menu: "Orders",
//       permissions: ["list", "print", "edit", "delete"],
//       key: "orders",
//     },
//     {
//       menu: "Dine In Orders",
//       permissions: ["list", "edit"],
//       key: "dineInOrders",
//     },
//     {
//       menu: "Gift Cards",
//       permissions: ["list", "create", "edit", "delete"],
//       key: "giftCards",
//     },
//     {
//       menu: "Coupons",
//       permissions: ["list", "create", "edit", "delete"],
//       key: "coupons",
//     },
//     {
//       menu: "Documents",
//       permissions: ["list", "create", "edit", "delete"],
//       key: "documents",
//     },
//     {
//       menu: "Send Notification",
//       permissions: ["list", "create", "delete"],
//       key: "sendNotification",
//     },
//     {
//       menu: "App Notification",
//       permissions: ["list", "edit"],
//       key: "appNotification",
//     },
//     {
//       menu: "Payments",
//       permissions: ["list"],
//       key: "payments",
//     },
//     {
//       menu: "Restaurants Payouts",
//       permissions: ["list", "create"],
//       key: "restaurantsPayouts",
//     },
//     {
//       menu: "Drivers Payments",
//       permissions: ["list", "delete"],
//       key: "driversPayments",
//     },
//     {
//       menu: "Drivers Payouts",
//       permissions: ["list", "create"],
//       key: "driversPayouts",
//     },
//     {
//       menu: "Wallet Transaction",
//       permissions: ["list"],
//       key: "walletTransaction",
//     },
//     {
//       menu: "Payout Requests",
//       permissions: ["driverList", "restaurantList"],
//       key: "payoutRequests",
//     },
//     {
//       menu: "Banner Items",
//       permissions: ["list", "create", "edit", "delete"],
//       key: "bannerItems",
//     },
//     {
//       menu: "CMS Pages",
//       permissions: ["list", "create", "edit", "delete"],
//       key: "cmsPages",
//     },
//     {
//       menu: "Email Templates",
//       permissions: ["list", "edit"],
//       key: "emailTemplates",
//     },
//     {
//       menu: "Global Settings",
//       permissions: ["update"],
//       key: "globalSettings",
//     },
//     {
//       menu: "Currencies",
//       permissions: ["list", "create", "edit", "delete"],
//       key: "currencies",
//     },
//     {
//       menu: "Payment Methods",
//       permissions: ["update"],
//       key: "paymentMethods",
//     },
//     {
//       menu: "Admin Commission",
//       permissions: ["update"],
//       key: "adminCommission",
//     },
//     {
//       menu: "Radius Configuration",
//       permissions: ["update"],
//       key: "radiusConfiguration",
//     },
//     {
//       menu: "Dine In Feature Setting",
//       permissions: ["update"],
//       key: "dineInFeatureSetting",
//     },
//     {
//       menu: "Tax Setting",
//       permissions: ["list", "create", "edit", "delete"],
//       key: "taxSetting",
//     },
//     {
//       menu: "Delivery Charge",
//       permissions: ["update"],
//       key: "deliveryCharge",
//     },
//     {
//       menu: "Document Verification",
//       permissions: ["update"],
//       key: "documentVerification",
//     },
//     {
//       menu: "Languages",
//       permissions: ["list", "create", "edit", "delete"],
//       key: "languages",
//     },
//     {
//       menu: "Special Offer",
//       permissions: ["update"],
//       key: "specialOffer",
//     },
//     {
//       menu: "Terms and Conditions",
//       permissions: ["update"],
//       key: "termsAndConditions",
//     },
//     {
//       menu: "Privacy Policy",
//       permissions: ["update"],
//       key: "privacyPolicy",
//     },
//     {
//       menu: "Landing Page Template",
//       permissions: ["update"],
//       key: "landingPageTemplate",
//     },
//     {
//       menu: "Footer Template",
//       permissions: ["update"],
//       key: "footerTemplate",
//     },
//   ];

//   return (
//     <>
//       <TitleHead
//         title={"Create Roles"}
//         desc2={" > Roles"}
//         desc={"Create Roles"}
//         link={"/access-control/roles"}
//       />
//       <div className="p-4">
//         <fieldset className="max-w-2xl mx-auto p-4 bg-white shadow-md border rounded-md w-full lg:w-[70%] md:w-[80%] border-gray-300 px-6 py-5">
//           <legend className="text-md font-semibold bg-primary-900 text-white px-2 py-1 rounded">
//             Roles Details
//           </legend>
//           <div className="flex flex-col md:flex-row lg:flex-row  md:justify-between lg:justify-between md:items-center lg:items-center mb-4">
//             <div className="mb-4 lg:mb-0">
//               <label
//                 className="block text-gray-700 text-md font-semibold mb-2"
//                 htmlFor="name"
//               >
//                 Name
//               </label>
//               <input
//                 id="name"
//                 name="name"
//                 type="text"
//                 value={formState.name}
//                 onChange={handleInputChange}
//                 className="shadow appearance-none border rounded sm:w-full md:w-60 lg:w-80 bg-[#F5F5F5] py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline"
//               />
//             </div>
//             <div className=" flex md:flex-col lg:flex-col  gap-2 items-center text-gray-400 text-[1rem] font-semibold mb-4 lg:mb-0">
//               <h1 className="mr-2">Assign Permission</h1>
//               <div>
//                 <input
//                   id="all-permissions"
//                   name="allPermissions"
//                   type="checkbox"
//                   checked={formState.allPermissions}
//                   onChange={handleInputChange}
//                   className="mr-2 leading-tight"
//                 />
//                 <label
//                   className="text-gray-700 text-md"
//                   htmlFor="all-permissions"
//                 >
//                   All Permission
//                 </label>
//               </div>
//             </div>
//           </div>
//           <table className="min-w-full bg-[#F8FAFD]">
//             <thead>
//               <tr>
//                 <th className="py-2 text-[.8rem]">Menu</th>
//                 <th className="py-2 text-start text-[.8rem]">Permission</th>
//               </tr>
//             </thead>
//             <tbody>
//               {permissionConfig.map((item) => (
//                 <tr key={item.key} className="bg-white border-b text-[.8rem]">
//                   <td className="py-2 px-4">{item.menu}</td>
//                   <td className="py-2 px-4">
//                     {item.permissions.map((perm) => (
//                       <label
//                         key={perm}
//                         className="flex lg:inline-flex md:inline-flex mr-2"
//                       >
//                         <input
//                           type="checkbox"
//                           className="form-checkbox h-3 w-3 text-gray-600"
//                           checked={
//                             formState.permissions[item.key]?.[perm] || false
//                           }
//                           onChange={() =>
//                             handlePermissionChange(item.key, perm)
//                           }
//                         />
//                         <span className="ml-2 ">
//                           {perm.charAt(0).toUpperCase() + perm.slice(1)}
//                         </span>
//                       </label>
//                     ))}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <BottomButton />
//         </fieldset>
//       </div>
//     </>
//     // <div className="p-4">
//     //   <form onSubmit={handleSubmit(onSubmit)}>
//     //     <fieldset className="max-w-2xl mx-auto p-4 bg-white shadow-md border rounded-md w-full lg:w-[70%] md:w-[80%] border-gray-300 px-6 py-5">
//     //       <legend className="text-[1rrem] font-semibold bg-primary-900 text-white px-2 py-1 rounded">
//     //         Roles Details
//     //       </legend>
//     //       <div className="flex flex-col md:flex-row lg:flex-row  md:justify-between lg:justify-between md:items-center lg:items-center mb-4">
//     //         <div className="mb-4 lg:mb-0">
//     //           <label
//     //             className="block text-gray-700 text-md font-semibold mb-2"
//     //             htmlFor="name"
//     //           >
//     //             Name
//     //           </label>
//     //           <input
//     //             id="name"
//     //             name="name"
//     //             type="text"
//     //             {...register("name", {
//     //               required: "Name is required",
//     //               minLength: {
//     //                 value: 3,
//     //                 message: "Name must be at least 3 characters",
//     //               },
//     //             })}
//     //             className="shadow appearance-none border rounded sm:w-full md:w-60 lg:w-80 bg-[#F5F5F5] py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline"
//     //           />
//     //           {errors.name && (
//     //             <p className="text-red-500 text-xs mt-1">
//     //               {errors.name.message}
//     //             </p>
//     //           )}
//     //         </div>
//     //         <div className=" flex md:flex-col lg:flex-col gap-2 items-center text-gray-400 text-sm mb-4 lg:mb-0">
//     //           <h1 className="mr-2">Assign Permission</h1>
//     //           <div>
//     //             <input
//     //               id="all-permissions"
//     //               name="allPermissions"
//     //               type="checkbox"
//     //               {...register("allPermissions")}
//     //               className="mr-2 leading-tight"
//     //             />
//     //             <label
//     //               className="text-gray-700 text-md"
//     //               htmlFor="all-permissions"
//     //             >
//     //               All Permission
//     //             </label>
//     //           </div>
//     //         </div>
//     //       </div>
//     //       <table className="min-w-full bg-[#F8FAFD]">
//     //         <thead>
//     //           <tr>
//     //             <th className="py-2 text-[.8rem]">Menu</th>
//     //             <th className="py-2 text-start text-[.8rem]">Permission</th>
//     //           </tr>
//     //         </thead>
//     //         <tbody>
//     //           {permissionConfig.map((item) => (
//     //             <tr key={item.key} className="bg-white border-b text-[.8rem]">
//     //               <td className="py-2 px-4">{item.menu}</td>
//     //               <td className="py-2 px-4">
//     //                 {item.permissions.map((perm) => (
//     //                   <label
//     //                     key={perm}
//     //                     className="flex lg:inline-flex md:inline-flex mr-2"
//     //                   >
//     //                     <input
//     //                       type="checkbox"
//     //                       className="form-checkbox h-3 w-3 text-gray-600"
//     //                       {...register(`permissions.${item.key}.${perm}`)}
//     //                     />
//     //                     <span className="ml-2 ">
//     //                       {perm.charAt(0).toUpperCase() + perm.slice(1)}
//     //                     </span>
//     //                   </label>
//     //                 ))}
//     //               </td>
//     //             </tr>
//     //           ))}
//     //         </tbody>
//     //       </table>
//     //       <div className="flex items-center justify-center gap-4 py-4">
//     //         <button
//     //           type="submit"
//     //           className="flex items-center gap-2 bg-primary-900 rounded text-white px-4 py-2"
//     //         >
//     //           <FaFileInvoice /> Save
//     //         </button>
//     //         <button
//     //           type="button"
//     //           className="flex items-center gap-2 rounded bg-gray-400 text-white px-4 py-2"
//     //           onClick={() => /* handle back logic */ {}}
//     //         >
//     //           <FaArrowRotateLeft /> Back
//     //         </button>
//     //       </div>
//     //     </fieldset>
//     //   </form>
//     // </div>
//   );
// };

// export default RolesDetalies;



"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { FaFileInvoice, FaArrowRotateLeft } from "react-icons/fa6"
import { useNavigate, useParams } from "react-router-dom"
import TitleHead from "../Header/TitleHead"
import { useCreateRoleMutation, useGetRoleByIdQuery, useUpdateRoleMutation } from "../../redux/services/roleService"
import LoadingSpinner from "../common/LoadingSpinner"

const RolesDetalies = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const isEditMode = !!id

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm()

  // Fetch role data if in edit mode
  const { data: roleData, isLoading: isLoadingRole } = useGetRoleByIdQuery(id, { skip: !isEditMode })

  // Mutations for creating/updating roles
  const [createRole, { isLoading: isCreating }] = useCreateRoleMutation()
  const [updateRole, { isLoading: isUpdating }] = useUpdateRoleMutation()

  const isLoading = isLoadingRole || isCreating || isUpdating

  // Available resources and actions
  const resources = [
    "users",
    "roles",
    "vendors",
    "drivers",
    "customers",
    "foods",
    "categories",
    "orders",
    "payments",
    "reports",
    "settings",
    "zones",
    "banners",
    "coupons",
    "notifications",
    "cms",
  ]

  const actions = ["create", "read", "update", "delete"]

  // State to track selected permissions
  const [selectedPermissions, setSelectedPermissions] = useState({})
  const [allPermissions, setAllPermissions] = useState(false)

  // Initialize form with role data when available
  useEffect(() => {
    if (roleData) {
      reset({
        name: roleData.name,
        description: roleData.description,
      })

      // Initialize permissions
      const permissionsMap = {}
      roleData.permissions.forEach((permission) => {
        permissionsMap[permission.resource] = {}
        permission.actions.forEach((action) => {
          permissionsMap[permission.resource][action] = true
        })
      })

      setSelectedPermissions(permissionsMap)

      // Check if all permissions are selected
      const allSelected = resources.every((resource) => actions.every((action) => permissionsMap[resource]?.[action]))
      setAllPermissions(allSelected)
    }
  }, [roleData, reset])

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      // Format permissions for API
      const permissions = []

      Object.entries(selectedPermissions).forEach(([resource, actionMap]) => {
        const selectedActions = Object.entries(actionMap)
          .filter(([_, selected]) => selected)
          .map(([action]) => action)

        if (selectedActions.length > 0) {
          permissions.push({
            resource,
            actions: selectedActions,
          })
        }
      })

      const roleData = {
        name: data.name,
        description: data.description,
        permissions,
      }

      if (isEditMode) {
        await updateRole({ id, ...roleData }).unwrap()
      } else {
        await createRole(roleData).unwrap()
      }

      navigate("/access-control/roles")
    } catch (error) {
      console.error("Failed to save role:", error)
      // Handle error (could add toast notification here)
    }
  }

  // Toggle all permissions
  const handleToggleAllPermissions = () => {
    const newAllPermissions = !allPermissions
    setAllPermissions(newAllPermissions)

    const newPermissions = {}
    resources.forEach((resource) => {
      newPermissions[resource] = {}
      actions.forEach((action) => {
        newPermissions[resource][action] = newAllPermissions
      })
    })

    setSelectedPermissions(newPermissions)
  }

  // Toggle a specific permission
  const handleTogglePermission = (resource, action) => {
    setSelectedPermissions((prev) => ({
      ...prev,
      [resource]: {
        ...(prev[resource] || {}),
        [action]: !(prev[resource]?.[action] || false),
      },
    }))

    // Check if all permissions are now selected
    setTimeout(() => {
      const allSelected = resources.every((res) => actions.every((act) => selectedPermissions[res]?.[act]))
      setAllPermissions(allSelected)
    }, 0)
  }

  if (isLoadingRole) {
    return <LoadingSpinner />
  }

  return (
    <>
      <TitleHead
        title={isEditMode ? "Edit Role" : "Create Role"}
        desc={isEditMode ? "Edit Role" : "Create Role"}
        desc2={" > Roles"}
        link={"/access-control/roles"}
      />
      <div className="p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="max-w-2xl mx-auto p-4 bg-white shadow-md border rounded-md w-full lg:w-[70%] md:w-[80%] border-gray-300 px-6 py-5">
            <legend className="text-md font-semibold bg-primary-900 text-white px-2 py-1 rounded">Role Details</legend>
            <div className="flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between md:items-start lg:items-start mb-4">
              <div className="mb-4 lg:mb-0">
                <label className="block text-gray-700 text-md font-semibold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  {...register("name", {
                    required: "Name is required",
                    minLength: { value: 3, message: "Name must be at least 3 characters" },
                  })}
                  className="shadow appearance-none border rounded sm:w-full md:w-60 lg:w-80 bg-[#F5F5F5] py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>
              <div className="mb-4 lg:mb-0">
                <label className="block text-gray-700 text-md font-semibold mb-2" htmlFor="description">
                  Description
                </label>
                <textarea
                  id="description"
                  {...register("description")}
                  className="shadow appearance-none border rounded sm:w-full md:w-60 lg:w-80 bg-[#F5F5F5] py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline"
                  rows="2"
                />
              </div>
            </div>

            <div className="flex justify-between items-center mb-4 mt-6">
              <h2 className="text-lg font-semibold">Assign Permissions</h2>
              <div className="flex items-center">
                <input
                  id="all-permissions"
                  type="checkbox"
                  checked={allPermissions}
                  onChange={handleToggleAllPermissions}
                  className="mr-2 h-4 w-4 rounded border-gray-300 text-primary-900 focus:ring-primary-900"
                />
                <label className="text-gray-700 text-md" htmlFor="all-permissions">
                  All Permissions
                </label>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-[#F8FAFD] border">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 text-left text-sm font-semibold">Resource</th>
                    <th className="py-2 px-4 text-left text-sm font-semibold">Permissions</th>
                  </tr>
                </thead>
                <tbody>
                  {resources.map((resource) => (
                    <tr key={resource} className="bg-white border-b text-[.8rem]">
                      <td className="py-2 px-4 capitalize">{resource}</td>
                      <td className="py-2 px-4">
                        {actions.map((action) => (
                          <label key={`${resource}-${action}`} className="inline-flex items-center mr-4">
                            <input
                              type="checkbox"
                              className="form-checkbox h-4 w-4 text-primary-900 rounded border-gray-300 focus:ring-primary-900"
                              checked={selectedPermissions[resource]?.[action] || false}
                              onChange={() => handleTogglePermission(resource, action)}
                            />
                            <span className="ml-2 capitalize">{action}</span>
                          </label>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-center gap-4 py-4 mt-6">
              <button
                type="submit"
                disabled={isLoading}
                className="flex items-center gap-2 bg-primary-900 rounded text-white px-4 py-2 hover:bg-primary-800 transition-colors"
              >
                {isLoading ? (
                  <>
                    <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></span>
                    <span>Saving...</span>
                  </>
                ) : (
                  <>
                    <FaFileInvoice /> Save
                  </>
                )}
              </button>
              <button
                type="button"
                className="flex items-center gap-2 rounded bg-gray-400 text-white px-4 py-2 hover:bg-gray-500 transition-colors"
                onClick={() => navigate("/access-control/roles")}
              >
                <FaArrowRotateLeft /> Back
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  )
}

export default RolesDetalies
