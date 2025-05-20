// import { useState } from "react";
// import { FaCheckDouble } from "react-icons/fa";
// import { IoIosSettings } from "react-icons/io";
// import { SketchPicker } from "react-color";
// import { AiOutlineClose } from "react-icons/ai";
// import { MdPermContactCalendar } from "react-icons/md";
// import { GrCurrency } from "react-icons/gr";
// import { IoArrowRedo, IoBagHandle } from "react-icons/io5";
// import { BiSolidMessageError } from "react-icons/bi";
// import { DiAndroid } from "react-icons/di";
// import BottomButton from "../AllCards/BottomButton";
// import TitleHead from "../Header/TitleHead";

// const GlobalSettings = () => {
//   const [appColor, setAppColor] = useState("#ff0000");
//   const [adminColor, setAdminColor] = useState("#00ff00");
//   const [storeColor, setStoreColor] = useState("#0000ff");

//   const [activePicker, setActivePicker] = useState(null);

//   const togglePicker = (picker) => {
//     setActivePicker((prevPicker) => (prevPicker === picker ? null : picker));
//   };

//   const [selectedTheme, setSelectedTheme] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false);

//   const themes = [
//     {
//       id: 1,
//       thumbnail: "https://foodie.siswebapp.com/images/app_homepage_theme_1.png", // Placeholder URL
//       largeImage:
//         "https://foodie.siswebapp.com/images/app_homepage_theme_1.png", // Placeholder URL
//     },
//     {
//       id: 2,
//       thumbnail: "https://foodie.siswebapp.com/images/app_homepage_theme_2.png", // Placeholder URL
//       largeImage:
//         "https://foodie.siswebapp.com/images/app_homepage_theme_2.png", // Placeholder URL
//     },
//     // Add more themes here as needed
//   ];

//   const handleThemeSelect = (theme) => {
//     setSelectedTheme(theme.id);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   const handleOutsideClick = (e) => {
//     if (e.target.id === "modal-overlay") {
//       closeModal();
//     }
//   };

//   return (
//     <>
//       <TitleHead title={"Global Settings"} desc={"Global Settings"} />
//       <div className="p-4 rounded shadow-md hover:shadow-lg flex flex-col items-center">
//         <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 px-4 py-5">
//           <legend className="text-[1rem] font-semibold bg-primary-900 text-white px-2 py-1 rounded">
//             <div className="flex items-center gap-1">
//               <IoIosSettings className="text-md" />
//               <h1 className="uppercase">Global Settings</h1>
//             </div>
//           </legend>
//           <div className="grid grid-cols-2 gap-5">
//             <div className="col-span-2">
//               <label
//                 className="block text-gray-700 text-[1rem] font-semibold mb-2"
//                 htmlFor="name"
//               >
//                 Application Name
//               </label>
//               <input
//                 id="name"
//                 name="name"
//                 defaultValue={"Foodie"}
//                 type="text"
//                 className="shadow appearance-none border rounded w-full bg-[#F5F5F5] py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline mb-2"
//               />
//               <h1 className="text-[.8rem] text-gray-400">
//                 The application name appear in title
//               </h1>
//             </div>

//             <div className="col-span-2">
//               <label
//                 className="block text-gray-700 text-[1rem] font-semibold mb-2"
//                 htmlFor="title"
//               >
//                 Meta Title
//               </label>
//               <input
//                 id="title"
//                 name="title"
//                 defaultValue={"Foodie - Your Food Delivery Partner"}
//                 type="text"
//                 className="shadow appearance-none border rounded w-full bg-[#F5F5F5] py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline mb-2"
//               />
//               <h1 className="text-[.8rem] text-gray-400">
//                 The Meta Title appear in meta tag
//               </h1>
//             </div>

//             <div className="col-span-2 md:col-span-1">
//               <label
//                 htmlFor="img"
//                 className="block text-gray-700 text-[1rem] font-semibold mb-2"
//               >
//                 Admin Panel Logo
//               </label>
//               <input type="file" name="img" className="mb-2" />
//               <img
//                 src="https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Flogo_web_1701326914104.png?alt=media&token=b5e387ac-ad53-4f81-b8eb-ef1b37aa9998"
//                 className="h-5 w-16"
//                 alt="img"
//               />
//             </div>

//             <div className="col-span-2 md:col-span-1">
//               <label
//                 htmlFor="img"
//                 className="block text-gray-700 text-[1rem] font-semibold mb-2"
//               >
//                 Default Placeholder Image
//               </label>
//               <input type="file" name="img" className="mb-2" />
//               <img
//                 src="https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7"
//                 className="h-12 w-12 rounded-sm"
//                 alt="img"
//               />
//             </div>

//             <div className="col-span-2 md:col-span-1">
//               <label
//                 htmlFor="img"
//                 className="block text-gray-700 text-[1rem] font-semibold mb-2"
//               >
//                 Favicon Icon
//               </label>
//               <input type="file" name="img" className="mb-2" />
//               <img
//                 src="https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_fav_logo_1697010347136.png?alt=media&token=a79e6a32-40b5-46f4-b19c-e596c40998e1"
//                 className="h-12 w-12 rounded-sm"
//                 alt="img"
//               />
//             </div>

//             <div className="col-span-2 md:col-span-1 relative">
//               <h2 className="block text-gray-700 text-[1rem] font-semibold mb-2">
//                 App/Web Color
//               </h2>
//               <div>
//                 <div
//                   className="w-12 h-6 rounded border  border-black px-2 py-1 cursor-pointer"
//                   style={{ backgroundColor: appColor }}
//                   onClick={() => togglePicker("app")}
//                 ></div>
//                 {activePicker === "app" && (
//                   <div className="absolute z-10 mt-2  ">
//                     <SketchPicker
//                       color={appColor}
//                       className=""
//                       onChangeComplete={(color) => setAppColor(color.hex)}
//                     />
//                   </div>
//                 )}
//               </div>
//             </div>

//             <div className="col-span-2 md:col-span-1 relative">
//               <h2 className="block text-gray-700 text-[1rem] font-semibold mb-2">
//                 Admin Panel Color
//               </h2>
//               <div>
//                 <div
//                   className="w-12 h-6 rounded border cursor-pointer"
//                   style={{ backgroundColor: adminColor }}
//                   onClick={() => togglePicker("admin")}
//                 ></div>
//                 {activePicker === "admin" && (
//                   <div className="absolute z-10 mt-2">
//                     <SketchPicker
//                       color={adminColor}
//                       onChangeComplete={(color) => setAdminColor(color.hex)}
//                     />
//                   </div>
//                 )}
//               </div>
//             </div>

//             <div className="col-span-2 md:col-span-1 relative">
//               <h2 className="block text-gray-700 text-[1rem] font-semibold mb-2">
//                 Store Panel Color
//               </h2>
//               <div>
//                 <div
//                   className="w-12 h-6 rounded border cursor-pointer"
//                   style={{ backgroundColor: storeColor }}
//                   onClick={() => togglePicker("store")}
//                 ></div>
//                 {activePicker === "store" && (
//                   <div className="absolute z-10 mt-2">
//                     <SketchPicker
//                       color={storeColor}
//                       onChangeComplete={(color) => setStoreColor(color.hex)}
//                     />
//                   </div>
//                 )}
//               </div>
//             </div>
//             <div className="col-span-2 ">
//               <h2 className="block text-gray-700 text-[1rem] font-semibold mb-2">
//                 Homepage Theme (App Usage)
//               </h2>
//               <div className="flex gap-4 ">
//                 {themes.map((theme) => (
//                   <div
//                     key={theme.id}
//                     className={`relative border-2  border-[#E1E1E1] rounded-md cursor-pointer ${
//                       selectedTheme === theme.id
//                         ? "border-[#FF683A]"
//                         : "border-[#E1E1E1]"
//                     }`}
//                     onClick={() => handleThemeSelect(theme)}
//                   >
//                     <img
//                       src={theme.thumbnail}
//                       alt={`Theme ${theme.id}`}
//                       className=" h-48 w-28 rounded-md object-cover"
//                     />
//                     {selectedTheme === theme.id && (
//                       <FaCheckDouble className="absolute top-0 right-0 text-[#FF683A] text-lg" />
//                     )}
//                   </div>
//                 ))}
//               </div>

//               {/* Modal */}
//               {modalOpen && (
//                 <div
//                   id="modal-overlay"
//                   className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//                   onClick={handleOutsideClick}
//                 >
//                   <div className="bg-white p-4 rounded shadow-md relative max-w-full md:max-w-3xl w-full max-h-screen overflow-y-auto">
//                     <button
//                       onClick={closeModal}
//                       className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//                     >
//                       <AiOutlineClose size={24} />
//                     </button>
//                     {themes.map(
//                       (theme) =>
//                         selectedTheme === theme.id && (
//                           <img
//                             key={theme.id}
//                             src={theme.largeImage}
//                             alt={`Theme ${theme.id} Large`}
//                             className="rounded-md max-w-full max-h-full"
//                           />
//                         )
//                     )}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </fieldset>

//         <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 px-4 py-5 my-3">
//           <legend className="text-sm font-semibold bg-primary-900 text-white px-2 py-1 rounded">
//             <div className="flex items-center gap-1 ">
//               {/* <IoIosSettings className="text-md" /> */}
//               <h1 className="uppercase">Google Map API Key (App Usage)</h1>
//             </div>
//           </legend>
//           <div className="grid grid-cols-2 gap-5 my-3">
//             <div className="col-span-2">
//               <label
//                 className="block text-gray-700 text-[1rem] font-semibold mb-2"
//                 htmlFor="apiKey"
//               >
//                 Google Map API Key
//               </label>
//               <input
//                 id="apiKey"
//                 name="apiKey"
//                 autoComplete="off"
//                 defaultValue={" appearance"}
//                 type="password"
//                 className="shadow appearance-none border rounded w-full bg-[#F5F5F5] py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline mb-2"
//               />
//             </div>
//           </div>
//         </fieldset>

//         <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 px-4 py-5">
//           <legend className="text-sm font-semibold bg-primary-900 text-white px-2 py-1 rounded">
//             <div className="flex items-center gap-1">
//               <MdPermContactCalendar className="text-md" />
//               <h1 className="uppercase">Contact Us</h1>
//             </div>
//           </legend>
//           <div className="grid grid-cols-2 gap-5">
//             <div className="col-span-2 md:col-span-1">
//               <label
//                 className="block text-gray-700 text-[1rem] font-semibold mb-2"
//                 htmlFor="name"
//               >
//                 Address
//               </label>
//               <input
//                 id="name"
//                 name="name"
//                 defaultValue={
//                   "Siddhi Infosoft \nC-407, Ganesh meridian, Opp. Amiraj Farm, Ahmedabad - 380013, INDIA"
//                 }
//                 type="text"
//                 className="shadow appearance-none border rounded w-full bg-[#F5F5F5] py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline mb-2"
//               />
//               <h1 className="text-[.8rem] text-gray-400">
//                 Insert Address (Use \n for new line)
//               </h1>
//             </div>

//             <div className="col-span-2 md:col-span-1">
//               <label
//                 className="block text-gray-700 text-[1rem] font-semibold mb-2"
//                 htmlFor="title"
//               >
//                 Email
//               </label>
//               <input
//                 id="title"
//                 name="title"
//                 defaultValue={"info@gmail.com"}
//                 type="email"
//                 className="shadow appearance-none border rounded w-full bg-[#F5F5F5] py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline mb-2"
//               />
//               <h1 className="text-[.8rem] text-gray-400">Insert Email</h1>
//             </div>
//             <div className="col-span-2 md:col-span-1">
//               <label
//                 className="block text-gray-700 text-[1rem] font-semibold mb-2"
//                 htmlFor="title"
//               >
//                 Phone
//               </label>
//               <input
//                 id="number"
//                 name="number"
//                 defaultValue={923232343}
//                 type="number"
//                 className="shadow appearance-none border rounded w-full bg-[#F5F5F5] py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline mb-2"
//               />

//               <h1 className="text-[.8rem] text-gray-400">Insert Phone</h1>
//             </div>
//           </div>
//         </fieldset>

//         <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 px-4 py-5 my-3">
//           <legend className="text-sm font-semibold bg-primary-900 text-white px-2 py-1 rounded">
//             <div className="flex items-center gap-1">
//               {/* <MdPermContactCalendar className="text-md" /> */}
//               <h1 className="uppercase">Map Tracking Options</h1>
//             </div>
//           </legend>
//           <div className="grid grid-cols-2 gap-5">
//             <div className="col-span-2 ">
//               <label
//                 className="block text-gray-700 text-[1rem] font-semibold mb-2"
//                 htmlFor="name"
//               >
//                 Select your map tracking option
//               </label>
//               <select
//                 id="name"
//                 name="name"
//                 defaultValue={"Select Type"}
//                 type="text"
//                 className="shadow appearance-none border rounded w-full bg-[#F5F5F5] py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline mb-2"
//               >
//                 <option value="name">Select Type</option>
//                 <option value="name">GoogleGo Map</option>
//                 <option value="name">Wazo Map</option>
//                 <option value="name"> Map With Me</option>
//                 <option value="name">Vandex Map</option>
//               </select>
//             </div>

//             <div className="col-span-2 ">
//               <label
//                 className="block text-gray-700 text-[1rem] font-semibold mb-2"
//                 htmlFor="title"
//               >
//                 Driver Location Update (meter)
//               </label>
//               <input
//                 id="location"
//                 //   name="location"
//                 //   defaultValue="30"
//                 placeholder="30"
//                 type="number"
//                 className="shadow appearance-none border rounded w-full bg-[#F5F5F5] py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline mb-2"
//               />
//             </div>
//             <div className="flex items-center gap-4  col-span-2 md:col-span-1">
//               <input type="checkbox" name="" id="offer" className="h-5 w-5" />
//               <label htmlFor="offer">
//                 Driver Can Recived Only Single Order
//               </label>
//             </div>
//             {/* <div className="flex items-center gap-4  col-span-2 md:col-span-1">
//             <input type="checkbox" name="" id="offer" className="h-5 w-5" />
//             <label htmlFor="offer">Is RTL (Right To Left)</label>
//           </div> */}
//           </div>
//         </fieldset>

//         <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 px-4 py-5">
//           <legend className="text-sm font-semibold bg-primary-900 text-white px-2 py-1 rounded">
//             <div className="flex items-center gap-1">
//               <GrCurrency className="text-md" />
//               <h1 className="uppercase">Wallet Settings (For Driver)</h1>
//             </div>
//           </legend>
//           <div className="grid grid-cols-2 gap-5">
//             <div className="col-span-2 ">
//               <label
//                 className="block text-gray-700 text-[1rem] font-semibold mb-2"
//                 htmlFor="name"
//               >
//                 Minimum wallet amount to receiving order (For Driver)
//               </label>
//               <input
//                 id="wallet"
//                 name="wallet"
//                 defaultValue={0}
//                 type="number"
//                 className="shadow appearance-none border rounded w-full bg-[#F5F5F5] py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline mb-2"
//               />
//             </div>

//             <div className="col-span-2 ">
//               <label
//                 className="block text-gray-700 text-[1rem] font-semibold mb-2"
//                 htmlFor="name"
//               >
//                 Minimum wallet amount to withdrawal (For Driver)
//               </label>
//               <input
//                 id="wallet"
//                 name="wallet"
//                 defaultValue={1}
//                 type="number"
//                 className="shadow appearance-none border rounded w-full bg-[#F5F5F5] py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline mb-2"
//               />
//             </div>
//           </div>
//         </fieldset>

//         <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 px-4 py-5 my-3">
//           <legend className="text-sm font-semibold bg-primary-900 text-white px-2 py-1 rounded">
//             <div className="flex items-center gap-1">
//               <IoArrowRedo className="text-md" />
//               <h1 className="uppercase">Wallet Settings (For Driver)</h1>
//             </div>
//           </legend>
//           <div className="grid grid-cols-2 gap-5">
//             <div className="col-span-2 ">
//               <label
//                 className="block text-gray-700 text-[1rem] font-semibold mb-2"
//                 htmlFor="name"
//               >
//                 Referral Settings
//               </label>
//               <input
//                 id="wallet"
//                 name="wallet"
//                 defaultValue={36}
//                 type="number"
//                 className="shadow appearance-none border rounded w-full bg-[#F5F5F5] py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline mb-2"
//               />
//               <h1 className="text-[.8rem] text-gray-400">
//                 Note : Customer will get refer earnings after the first order is
//                 successfully delivered.
//               </h1>
//             </div>
//           </div>
//         </fieldset>

//         <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 px-4 py-5 ">
//           <legend className="text-sm font-semibold bg-primary-900 text-white px-2 py-1 rounded">
//             <div className="flex items-center gap-1">
//               <IoBagHandle className="text-md" />
//               <h1 className="uppercase">Restaurant Settings</h1>
//             </div>
//           </legend>
//           <div className="grid grid-cols-2 gap-5 my-3">
//             <div className="col-span-2  md:col-span-2 md:w-96 ">
//               <div className="flex items-center gap-4 ">
//                 <input type="checkbox" name="" id="story" className="h-5 w-5" />
//                 <label
//                   htmlFor="story"
//                   className="block text-gray-700 text-[1rem] font-semibold mb-2"
//                 >
//                   Restaurant Can Update There Story?
//                 </label>
//               </div>
//               <div className="flex items-center gap-4  my-3">
//                 <input
//                   type="checkbox"
//                   name=""
//                   id="approve"
//                   className="h-5 w-5"
//                 />
//                 <label
//                   htmlFor="approve"
//                   className="block text-gray-700 text-[1rem] font-semibold mb-2"
//                 >
//                   Auto Approve restaurant on Sign Up page
//                 </label>
//               </div>
//             </div>
//             <div className="col-span-2 md:col-span-1">
//               <label
//                 className="block text-gray-700 text-[1rem] font-semibold mb-2"
//                 htmlFor="name"
//               >
//                 Story length(seconds)
//               </label>
//               <input
//                 id="wallet"
//                 name="wallet"
//                 defaultValue={30}
//                 type="number"
//                 className="shadow appearance-none border rounded w-full bg-[#F5F5F5] py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline mb-2"
//               />
//               <h1 className="text-[.8rem] text-gray-400">
//                 Maximum length of story to upload
//               </h1>
//             </div>
//           </div>
//         </fieldset>

//         <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 px-4 py-5 my-3">
//           <legend className="text-sm font-semibold bg-primary-900 text-white px-2 py-1 rounded">
//             <div className="flex items-center gap-1">
//               {/* <MdPermContactCalendar className="text-md" /> */}
//               <h1 className="uppercase">Email Setting</h1>
//             </div>
//           </legend>
//           <div className="grid grid-cols-2 gap-5">
//             <div className="col-span-2 md:col-span-1">
//               <label
//                 className="block text-gray-700 text-[1rem] font-semibold mb-2"
//                 htmlFor="name"
//               >
//                 SMTP From Name
//               </label>
//               <input
//                 id="name"
//                 name="name"
//                 defaultValue={"******************"}
//                 type="text"
//                 className="shadow appearance-none border rounded w-full bg-[#F5F5F5] py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline mb-2"
//               />
//             </div>

//             <div className="col-span-2 md:col-span-1">
//               <label
//                 className="block text-gray-700 text-[1rem] font-semibold mb-2"
//                 htmlFor="name"
//               >
//                 SMTP Host
//               </label>
//               <input
//                 id="name"
//                 name="name"
//                 defaultValue={"******************"}
//                 type="text"
//                 className="shadow appearance-none border rounded w-full bg-[#F5F5F5] py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline mb-2"
//               />
//             </div>
//             <div className="col-span-2 md:col-span-1">
//               <label
//                 className="block text-gray-700 text-[1rem] font-semibold mb-2"
//                 htmlFor="name"
//               >
//                 SMTP Port
//               </label>
//               <input
//                 id="name"
//                 name="name"
//                 defaultValue={"******************"}
//                 type="text"
//                 className="shadow appearance-none border rounded w-full bg-[#F5F5F5] py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline mb-2"
//               />
//             </div>
//             <div className="col-span-2 md:col-span-1">
//               <label
//                 className="block text-gray-700 text-[1rem] font-semibold mb-2"
//                 htmlFor="name"
//               >
//                 SMTP User Name
//               </label>
//               <input
//                 id="name"
//                 name="name"
//                 defaultValue={"******************"}
//                 type="text"
//                 className="shadow appearance-none border rounded w-full bg-[#F5F5F5] py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline mb-2"
//               />
//             </div>
//             <div className="col-span-2 md:col-span-1">
//               <label
//                 className="block text-gray-700 text-[1rem] font-semibold mb-2"
//                 htmlFor="password"
//               >
//                 SMTP Password
//               </label>
//               <input
//                 id="password"
//                 name="password"
//                 defaultValue={"******************"}
//                 type="password"
//                 className="shadow appearance-none border rounded w-full bg-[#F5F5F5] py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline mb-2"
//               />
//             </div>
//           </div>
//         </fieldset>

//         <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 px-4 py-5">
//           <legend className="text-sm font-semibold bg-primary-900 text-white px-2 py-1 rounded">
//             <div className="flex items-center gap-1">
//               <BiSolidMessageError className="text-md" />
//               <h1 className="uppercase">Notifications Setting</h1>
//             </div>
//           </legend>
//           <div className="grid grid-cols-2 gap-5">
//             <div className="col-span-2 ">
//               <label
//                 className="block text-gray-700 text-[1rem] font-semibold mb-2"
//                 htmlFor="name"
//               >
//                 Sender ID
//               </label>
//               <input
//                 id="name"
//                 name="name"
//                 defaultValue={"**********"}
//                 type="text"
//                 className="shadow appearance-none border rounded w-full bg-[#F5F5F5] py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline mb-2"
//               />
//               <h1 className="text-[.8rem] text-gray-400">
//                 Instructions: Navigate to your Firebase Project Settings Cloud
//                 Messaging. Under Firebase Cloud Messaging API, you will find the
//                 Sender ID.
//               </h1>
//             </div>

//             <div className="col-span-2 ">
//               <label
//                 className="block text-gray-700 text-[1rem] font-semibold mb-2"
//                 htmlFor="upload"
//               >
//                 Upload Credentials File (JSON Format)
//               </label>
//               <input
//                 id="upload"
//                 name="upload"
//                 type="file"
//                 className=" w-full  mb-2"
//               />
//               <h1 className="text-[.8rem] text-gray-400">
//                 Instructions: Go to Firebase Project Settings Service accounts,
//                 scroll down and click on the 'Generate new private key' button.
//                 A JSON file will be downloaded.
//               </h1>
//             </div>
//           </div>
//         </fieldset>

//         <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 px-4 py-5 my-3">
//           <legend className="text-sm font-semibold bg-primary-900 text-white px-2 py-1 rounded">
//             <div className="flex items-center gap-1">
//               <DiAndroid className="text-md" />
//               <h1 className="uppercase">Version</h1>
//             </div>
//           </legend>
//           <div className="grid grid-cols-2 gap-5">
//             <div className="col-span-2 md:col-span-1">
//               <label
//                 className="block text-gray-700 text-[1rem] font-semibold mb-2"
//                 htmlFor="version"
//               >
//                 App Version
//               </label>
//               <input
//                 id="version"
//                 name="version"
//                 defaultValue={6.0}
//                 type="text"
//                 className="shadow appearance-none border rounded w-full bg-[#F5F5F5] py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline mb-2"
//               />
//             </div>

//             <div className="col-span-2 md:col-span-1">
//               <label
//                 className="block text-gray-700 text-[1rem] font-semibold mb-2"
//                 htmlFor="version"
//               >
//                 Web Version
//               </label>
//               <input
//                 id="version"
//                 name="version"
//                 defaultValue={6.0}
//                 type="text"
//                 className="shadow appearance-none border rounded w-full bg-[#F5F5F5] py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline mb-2"
//               />
//             </div>
//           </div>
//         </fieldset>

//         <BottomButton />
//       </div>
//     </>
//   );
// };

// export default GlobalSettings;


"use client"

import { useState, useEffect } from "react"
import { FaSave, FaSpinner } from "react-icons/fa"
import { useGetGeneralSettingsQuery, useUpdateGeneralSettingsMutation } from "../../redux/services/settingService"
import { toast } from "react-toastify"

const GlobalSettings = () => {
  const { data: settings, isLoading, isError, error } = useGetGeneralSettingsQuery()
  const [updateGeneralSettings, { isLoading: isUpdating }] = useUpdateGeneralSettingsMutation()

  const [formData, setFormData] = useState({
    app_name: "",
    app_logo: "",
    app_currency: "",
    app_currency_symbol: "",
    app_currency_symbol_position: "",
    app_timezone: "",
    app_default_language: "",
    app_contact_email: "",
    app_contact_phone: "",
    app_address: "",
    app_version: "",
    app_android_version: "",
    app_ios_version: "",
    app_force_update: false,
    app_maintenance_mode: false,
  })

  useEffect(() => {
    if (settings) {
      setFormData(settings)
    }
  }, [settings])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await updateGeneralSettings(formData).unwrap()
      toast.success("General settings updated successfully")
    } catch (err) {
      toast.error(err?.data?.message || "Failed to update settings")
    }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <FaSpinner className="animate-spin text-primary-900 text-3xl" />
      </div>
    )
  }

  if (isError) {
    return (
      <div className="bg-red-50 p-4 rounded-md">
        <p className="text-red-500">Error loading settings: {error?.data?.message || "Unknown error"}</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">General Settings</h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* App Name */}
          <div className="col-span-2 md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">App Name</label>
            <input
              type="text"
              name="app_name"
              value={formData.app_name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Application Name"
            />
          </div>

          {/* App Logo */}
          <div className="col-span-2 md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">App Logo URL</label>
            <input
              type="text"
              name="app_logo"
              value={formData.app_logo}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Logo URL"
            />
            {formData.app_logo && (
              <div className="mt-2">
                <img
                  src={formData.app_logo || "/placeholder.svg"}
                  alt="App Logo"
                  className="h-12 object-contain"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = "/placeholder.svg?height=48&width=120"
                  }}
                />
              </div>
            )}
          </div>

          {/* Currency */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Currency</label>
            <input
              type="text"
              name="app_currency"
              value={formData.app_currency}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="USD"
            />
          </div>

          {/* Currency Symbol */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Currency Symbol</label>
            <input
              type="text"
              name="app_currency_symbol"
              value={formData.app_currency_symbol}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="$"
            />
          </div>

          {/* Symbol Position */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Symbol Position</label>
            <select
              name="app_currency_symbol_position"
              value={formData.app_currency_symbol_position}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="before">Before (e.g., $10)</option>
              <option value="after">After (e.g., 10$)</option>
            </select>
          </div>

          {/* Timezone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Timezone</label>
            <input
              type="text"
              name="app_timezone"
              value={formData.app_timezone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="UTC"
            />
          </div>

          {/* Default Language */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Default Language</label>
            <input
              type="text"
              name="app_default_language"
              value={formData.app_default_language}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="en"
            />
          </div>

          {/* Contact Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
            <input
              type="email"
              name="app_contact_email"
              value={formData.app_contact_email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="support@example.com"
            />
          </div>

          {/* Contact Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contact Phone</label>
            <input
              type="text"
              name="app_contact_phone"
              value={formData.app_contact_phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="+1234567890"
            />
          </div>

          {/* Address */}
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <textarea
              name="app_address"
              value={formData.app_address}
              onChange={handleChange}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Business Address"
            />
          </div>

          {/* App Version */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">App Version</label>
            <input
              type="text"
              name="app_version"
              value={formData.app_version}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="1.0.0"
            />
          </div>

          {/* Android Version */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Android Version</label>
            <input
              type="text"
              name="app_android_version"
              value={formData.app_android_version}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="1.0.0"
            />
          </div>

          {/* iOS Version */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">iOS Version</label>
            <input
              type="text"
              name="app_ios_version"
              value={formData.app_ios_version}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="1.0.0"
            />
          </div>

          {/* Force Update */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="app_force_update"
              name="app_force_update"
              checked={formData.app_force_update}
              onChange={handleChange}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label htmlFor="app_force_update" className="ml-2 block text-sm text-gray-700">
              Force App Update
            </label>
          </div>

          {/* Maintenance Mode */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="app_maintenance_mode"
              name="app_maintenance_mode"
              checked={formData.app_maintenance_mode}
              onChange={handleChange}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label htmlFor="app_maintenance_mode" className="ml-2 block text-sm text-gray-700">
              Maintenance Mode
            </label>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            disabled={isUpdating}
            className="px-4 py-2 bg-primary-900 text-white rounded-md hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-500 flex items-center"
          >
            {isUpdating ? (
              <>
                <FaSpinner className="animate-spin mr-2" />
                Saving...
              </>
            ) : (
              <>
                <FaSave className="mr-2" />
                Save Changes
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

export default GlobalSettings
