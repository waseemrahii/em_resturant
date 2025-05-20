import React from 'react'

const VendorsDetail = () => {
  return (
    <>
     <div className='mt-5'>
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute flex items-center justify-center left-0 ml-4 mx-auto bg-[#267FFF] text-white px-5 py-3 rounded-lg"
            style={{ width: 'fit-content', top: '-1rem' }}>
            <h1 className='text-2xl font-semibold'>Vendor Details</h1>
          </div>
        </div>

        <div className='flex items-center juatify-center rounded-lg border border-gray-300 m-14 max-w-4xl  mx-auto p-10 '>
          <div className='flex flex-col gap-6 w-full'>
            {/* Form fields */}
            <div className='flex flex-col md:flex-row gap-6 w-full'>
              <div className='flex flex-col w-full md:w-[25vw]'>
                <p className='text-xl text-black'> Name</p>
                <input
                  type="text"
                  placeholder="Peter Vendor"
                  className="w-full p-3 mt-3 text-xl rounded-lg bg-gray-100 cursor-not-allowed"
                  disabled
                />
              </div>
              <div className='flex flex-col w-full md:w-[25vw]'>
                <p className='text-xl text-black'>Email</p>
                <input
                  type="text"
                  placeholder="a**********@yopmail.com"
                  className="w-full p-3 mt-3 text-xl rounded-lg bg-gray-100 cursor-not-allowed"
                  disabled
                />
              </div>
            </div>
            <div className='flex flex-col md:flex-row gap-6 w-full'>
              <div className='flex flex-col w-full md:w-[25vw]'>
                <p className='text-xl text-black'>Restaurant Status (Open/Closed)</p>
                <input
                  type="text"
                  placeholder="Closed"
                  className="w-full p-3 mt-3 text-xl rounded-lg bg-gray-100 cursor-not-allowed placeholder-primary-900"
                  disabled
                />
              </div>
              <div className='flex flex-col w-full md:w-[25vw]'>
                <p className='text-xl text-black'>Phone</p>
                <input
                  type="text"
                  placeholder="9************"
                  className="w-full p-3 mt-3 text-xl rounded-lg  bg-gray-100 cursor-not-allowed"
                  disabled
                />
              </div>
            </div>
            <div className='flex flex-col md:flex-row gap-6 w-full'>

              <div className='flex flex-col w-full md:w-[25vw]'>
                <p className='text-xl text-black'>DINE IN feature</p>
                <input
                  type="text"
                  placeholder="OFF"
                  className="w-full p-3 mt-3 text-xl bg-gray-100 rounded-lg cursor-not-allowed"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default VendorsDetail
