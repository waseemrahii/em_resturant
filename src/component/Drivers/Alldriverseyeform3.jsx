// import React from 'react'

// const Alldriverseyeform3 = () => {
//   return (
//     <>
//       <div className='mt-5'>
//      <div className="relative mx-auto max-w-4xl">
//    <div className="absolute flex items-center justify-center left-0 ml-4 mx-auto bg-[#267FFF] text-white px-5 py-3 rounded-lg" 
//         style={{ width: 'fit-content', top: '-1rem' }}> 
//      <h1 className='text-2xl font-semibold'>Bank Details</h1>
//    </div>
//  </div>
//  <div className='flex items-center juatify-center rounded-lg border border-gray-300 m-14 max-w-4xl  mx-auto p-10 '>
// <div className='flex flex-col p-8'>
//     <div className='flex   space-x-56 flex-row'>
//         <p className='text-2xl text-black font-semibold'>Bank Name</p>
//         <p className='text-2xl text-black font-semibold'>Branch Name</p>


//     </div>
    
//     <div className='flex   space-x-52  mt-5 flex-row'>
//         <p className='text-2xl text-black font-semibold'>Holder Name</p>
//         <p className='text-2xl text-black font-semibold'>Account Number</p>


//     </div>

//     <div className='flex   space-x-56 mt-5 '>
//         <p className='text-2xl text-black font-semibold'>other information</p>
       


//     </div>
    

// </div>

//  </div>
//        </div>
//     </>
//   )
// }

// export default Alldriverseyeform3



import React from 'react'

const Alldriverseyeform3 = () => {
  return (
    <>
      <div className='mt-5'>
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute flex items-center justify-center left-0 ml-4 mx-auto bg-[#267FFF] text-white px-5 py-3 rounded-lg" 
               style={{ width: 'fit-content', top: '-1rem' }}> 
            <h1 className='text-2xl font-semibold'>Bank Details</h1>
          </div>
        </div>
        <div className='flex items-center juatify-center rounded-lg border border-gray-300 m-14 max-w-4xl  mx-auto p-10 '>
          <div className='flex flex-col w-full space-y-6 p-4'>
            <div className='flex flex-col md:flex-row md:space-x-8 w-full'>
              <p className='text-lg md:text-2xl text-black font-semibold flex-1'>Bank Name</p>
              <p className='text-lg md:text-2xl text-black font-semibold flex-1'>Branch Name</p>
            </div>
            
            <div className='flex flex-col md:flex-row md:space-x-8 w-full'>
              <p className='text-lg md:text-2xl text-black font-semibold flex-1'>Holder Name</p>
              <p className='text-lg md:text-2xl text-black font-semibold flex-1'>Account Number</p>
            </div>

            <div className='flex flex-col md:flex-row md:space-x-8 w-full'>
              <p className='text-lg md:text-2xl text-black font-semibold flex-1'>Other Information</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Alldriverseyeform3
