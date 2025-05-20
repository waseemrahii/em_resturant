import React from 'react'
import { GoDotFill } from 'react-icons/go'

const ServicesDetail = () => {
  return (
    <>
     <div className='mt-5'>
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute flex items-center justify-center left-0 ml-4 mx-auto bg-[#267FFF] text-white px-5 py-3 rounded-lg"
            style={{ width: 'fit-content', top: '-1rem' }}>
            <h1 className='text-2xl font-semibold'>Services</h1>
          </div>
        </div>

        <div className='flex items-center juatify-center rounded-lg border border-gray-300 m-14 max-w-4xl  mx-auto p-10 '>

          <div className='flex flex-col'>
            <div className="flex items-center space-x-2 p-2">
              <GoDotFill className='text-gray-400' />
              <h1 className="text-xl text-gray-400">Takes Reservations: Yes</h1>
            </div>
            <div className="flex items-center space-x-2 p-2">
              <GoDotFill className='text-gray-400' />
              <h1 className="text-xl text-gray-400">Good for Breakfast: No</h1>
            </div>
            <div className="flex items-center space-x-2 p-2">
              <GoDotFill className='text-gray-400' />
              <h1 className="text-xl text-gray-400">Vegetarian Friendly: Yes</h1>
            </div>

            <div className="flex items-center space-x-2 p-2">
              <GoDotFill className='text-gray-400' />
              <h1 className="text-xl text-gray-400">Good for Dinner: No</h1>
            </div>
            <div className="flex items-center space-x-2 p-2">
              <GoDotFill className='text-gray-400' />
              <h1 className="text-xl text-gray-400">Free Wi-Fi: No</h1>
            </div>
            <div className="flex items-center space-x-2 p-2">
              <GoDotFill className='text-gray-400' />
              <h1 className="text-xl text-gray-400">Good for Lunch: Yes</h1>
            </div>
            <div className="flex items-center space-x-2 p-2">
              <GoDotFill className='text-gray-400' />
              <h1 className="text-xl text-gray-400">Live Music: Yes</h1>
            </div>
            <div className="flex items-center space-x-2 p-2">
              <GoDotFill className='text-gray-400' />
              <h1 className="text-xl text-gray-400">Outdoor Seating: No</h1>
            </div>

          </div>

        </div>

      </div>
 
    </>
  )
}

export default ServicesDetail
