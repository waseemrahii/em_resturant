import React from 'react'

const Alldriverseyeform2 = () => {
  return (
    <>
    <div className="relative mx-auto max-w-4xl">
      
        <div className="absolute  left-0 mt-6 ml-4 mx-auto bg-[#267FFF] text-white px-5 py-3 rounded-lg" style={{ width: 'fit-content' }}>
          <h1 className='text-2xl font-semibold'>Car Details</h1>
        </div>
        </div>
    <div className='flex items-center juatify-center rounded-lg border border-gray-300 m-14 max-w-4xl  mx-auto p-10 '>
      
      <div className='flex flex-col   mt-5 gap-6'>
      <div className='flex flex-row gap-4'>
      <div className='flex flex-col'>
      <p className='text-lg text-black'>Car Number</p>
      <input type="text" placeholder="No Plates" className="w-[25vw] p-3 mt-3 rounded-lg cursor-not-allowed"disabled />
      
      </div>
      <div className='flex flex-col'>
      <p className='text-lg text-black'>Car Name</p>
      <input type="text" placeholder="Uber car" className="w-[25vw] p-3 mt-3 rounded-lg cursor-not-allowed"disabled />
      
      </div>
      </div>

      
      



<div className='flex flex-col w-full md:w-[20vw]'>
                <p className='text-xl text-black'>Car Image</p>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/production-a9404.appspot.com/o/uberEats%2Fdrivers%2FcarImages%2Fcar_default_image.png?alt=media&token=6381a50f-a71e-423b-bca2-ecdfb1dda664"
                  alt="Profile"
                  className="w-full mt-3 border border-gray-300"
                />
              </div>
      </div>

      
    </div>
    

  
    </>
  )
}

export default Alldriverseyeform2
