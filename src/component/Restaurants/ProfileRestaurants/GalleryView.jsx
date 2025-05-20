import React from 'react'

const GalleryView = () => {
  return (
    <>
      <div className='mt-5'>
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute flex items-center justify-center left-0 ml-4 mx-auto bg-[#267FFF] text-white px-5 py-3 rounded-lg"
            style={{ width: 'fit-content', top: '-1rem' }}>
            <h1 className='text-2xl font-semibold'>Gallery</h1>
          </div>
        </div>
        <div className='flex items-center juatify-center rounded-lg border border-gray-300 m-14 max-w-4xl  mx-auto p-10 '>
          <div className="flex flex-row">
            <div className="mt-1">
              <h1 className='text-2xl text-gray-400'>Photos not available </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GalleryView
