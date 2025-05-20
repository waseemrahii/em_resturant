
// import React, { useState } from 'react';
// import { IoIosAdd } from 'react-icons/io';
// import Addwalletmodel from './Addwalletmodel'; // Adjust the import path if needed

// const Alldriverseyeform1 = () => {
//   const [openModal, setOpenModal] = useState(false);

//   const handleOpenModal = () => setOpenModal(true);
//   const handleCloseModal = () => setOpenModal(false);

//   return (
//     <>
//       <div className="relative mx-auto max-w-4xl overflow-y-auto">
//         <div className="absolute left-0 mt-6 ml-4 mx-auto bg-[#267FFF] text-white px-5 py-3 rounded-lg" style={{ width: 'fit-content' }}>
//           <h1 className='text-2xl font-semibold'>Driver details</h1>
//         </div>
//         <div
//           className="absolute right-0 mt-6 ml-4 mx-auto hover:shadow-xl transition-shadow duration-400 cursor-pointer bg-[#26DAD2] text-white px-5 py-3 rounded-lg"
//           style={{ width: 'fit-content' }}
//           onClick={handleOpenModal}
//         >
//           <span className="flex items-center space-x-2 text-white">
//             <IoIosAdd className="text-2xl" />
//             <h1 className="text-2xl font-semibold">Add Wallet Amount</h1>
//           </span>
//         </div>

//         <div className='flex items-center justify-center rounded-lg border border-gray-300 m-14 max-w-4xl mx-auto p-10'>
//           <div className='flex flex-col mt-5 gap-6'>
//             {/* Your form content */}
//             <div className='flex flex-row gap-4'>
//               <div className='flex flex-col'>
//                 <p className='text-xl text-black'>First Name</p>
//                 <input
//                   type="text"
//                   placeholder="Aug"
//                   className="w-[25vw] p-3 mt-3 text-xl bg-gray-100 cursor-not-allowed"
//                   disabled
//                 />
//               </div>
//               <div className='flex flex-col'>
//                 <p className='text-xl text-black'>Email</p>
//                 <input
//                   type="text"
//                   placeholder="a**********@yopmail.com"
//                   className="w-[25vw] p-3 mt-3 text-xl bg-gray-100 cursor-not-allowed"
//                   disabled
//                 />
//               </div>
//             </div>
//             <div className='flex flex-row gap-4'>
//               <div className='flex flex-col'>
//                 <p className='text-xl text-black'>Phone</p>
//                 <input
//                   type="text"
//                   placeholder="+9***********"
//                   className="w-[25vw] p-3 mt-3 text-xl bg-gray-100 cursor-not-allowed"
//                   disabled
//                 />
//               </div>
//               <div className='flex flex-col'>
//                 <p className='text-xl text-black'>Wallet Balance</p>
//                 <input
//                   type="text"
//                   placeholder="€0"
//                   className="w-[25vw] p-3 mt-3 text-xl bg-gray-100 cursor-not-allowed"
//                   disabled
//                 />
//               </div>
//             </div>
//             <div className='flex flex-row gap-4'>
//               <div className='flex flex-col'>
//                 <p className='text-xl text-black'>Profile Image</p>
//                 <img
//                   src="https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7"
//                   alt="Profile"
//                   className="w-[20vw] mt-3"
//                 />
//               </div>
//               <div className='flex flex-col pl-20 pt-2'>
//                 <p className='text-xl text-black'>Zone</p>
//                 <input
//                   type="text"
//                   placeholder="World Zone"
//                   className="w-[25vw] p-3 mt-3 text-xl bg-gray-100 cursor-not-allowed"
//                   disabled
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Addwalletmodel open={openModal} handleClose={handleCloseModal} />
//     </>
//   );
// }

// export default Alldriverseyeform1;


import React, { useState } from 'react';
import { IoIosAdd } from 'react-icons/io';
import Addwalletmodel from './Addwalletmodel'; // Adjust the import path if needed

const Alldriverseyeform1 = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <div className="relative mx-auto max-w-4xl overflow-y-auto p-4">
        {/* Container for small and large screens */}
        <div className="flex flex-col md:flex-row md:justify-between  mt-6">
          {/* Driver details header */}
          <div className="bg-[#267FFF] text-white px-5 py-3 rounded-lg  md:mb-0">
            <h1 className='text-2xl font-semibold'>Driver details</h1>
          </div>

          {/* Add Wallet Amount button */}
          <div
            className="bg-[#26DAD2] text-white px-5 py-3 rounded-lg hover:shadow-xl transition-shadow duration-400 cursor-pointer flex items-center"
            onClick={handleOpenModal}
          >
            <span className="flex items-center space-x-2  text-white">
              <IoIosAdd className="text-2xl" />
              <h1 className="text-2xl font-semibold">Add Wallet Amount</h1>
            </span>
          </div>
        </div>

        {/* Form content */}
        <div className='flex flex-col items-center border border-gray-300 rounded-lg p-6 mx-auto md:max-w-4xl'>
          <div className='flex flex-col gap-6 w-full'>
            {/* Form fields */}
            <div className='flex flex-col md:flex-row gap-6 w-full'>
              <div className='flex flex-col w-full md:w-[25vw]'>
                <p className='text-xl text-black'>First Name</p>
                <input
                  type="text"
                  placeholder="Aug"
                  className="w-full p-3 mt-3 text-xl bg-gray-100 cursor-not-allowed"
                  disabled
                />
              </div>
              <div className='flex flex-col w-full md:w-[25vw]'>
                <p className='text-xl text-black'>Email</p>
                <input
                  type="text"
                  placeholder="a**********@yopmail.com"
                  className="w-full p-3 mt-3 text-xl bg-gray-100 cursor-not-allowed"
                  disabled
                />
              </div>
            </div>
            <div className='flex flex-col md:flex-row gap-6 w-full'>
              <div className='flex flex-col w-full md:w-[25vw]'>
                <p className='text-xl text-black'>Phone</p>
                <input
                  type="text"
                  placeholder="+9***********"
                  className="w-full p-3 mt-3 text-xl bg-gray-100 cursor-not-allowed"
                  disabled
                />
              </div>
              <div className='flex flex-col w-full md:w-[25vw]'>
                <p className='text-xl text-black'>Wallet Balance</p>
                <input
                  type="text"
                  placeholder="€0"
                  className="w-full p-3 mt-3 text-xl bg-gray-100 cursor-not-allowed"
                  disabled
                />
              </div>
            </div>
            <div className='flex flex-col md:flex-row gap-6 w-full'>
              <div className='flex flex-col w-full md:w-[20vw]'>
                <p className='text-xl text-black'>Profile Image</p>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7"
                  alt="Profile"
                  className="w-full mt-3 border border-gray-300"
                />
              </div>
              <div className='flex flex-col w-full md:w-[25vw]'>
                <p className='text-xl text-black'>Zone</p>
                <input
                  type="text"
                  placeholder="World Zone"
                  className="w-full p-3 mt-3 text-xl bg-gray-100 cursor-not-allowed"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Addwalletmodel open={openModal} handleClose={handleCloseModal} />
    </>
  );
}

export default Alldriverseyeform1;
