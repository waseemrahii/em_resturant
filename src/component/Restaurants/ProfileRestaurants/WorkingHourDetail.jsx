import React from 'react'

const WorkingHourDetail = () => {
  return (
    <>
      <div className='mt-5'>
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute flex items-center justify-center left-0 ml-4 mx-auto bg-[#267FFF] text-white px-5 py-3 rounded-lg"
            style={{ width: 'fit-content', top: '-1rem' }}>
            <h1 className='text-2xl font-semibold'>Working Hours</h1>
          </div>
        </div>
        <div className='flex items-center juatify-center rounded-lg border border-gray-300 m-14 max-w-4xl  mx-auto p-10 '>
          <div className='flex flex-col md:flex-col gap-2 w-full'>
            <div className='flex flex-col w-full p-2 md:w-[25vw]'>
              <p className='text-xl text-black'>Sunday</p>
              <input
                type="text"
                placeholder="Closed"
                className="w-full mt-3 text-xl border-none bg-transparent text-black font-semibold placeholder-primary-900 cursor-not-allowed"
                disabled
              />
            </div>
            <div className='flex flex-col w-full  md:w-[]'>
              <div className='p-2'>
                <p className='text-xl text-black'>Monday</p>
                <div className='flex flex-col md:flex-row gap-2 mt-2  w-full'>
                  <div className='flex flex-col w-full md:w-[25vw]'>
                    <p className='text-xl text-black'>From</p>
                    <input
                      type="text"
                      placeholder="08:10"
                      className="w-full p-3 mt-3 text-xl bg-gray-200 rounded-lg cursor-not-allowed"
                      disabled
                    />
                  </div>
                  <div className='flex flex-col w-full md:w-[25vw]'>
                    <p className='text-xl text-black'>To</p>
                    <input
                      type="text"
                      placeholder="21:20"
                      className="w-full p-3 mt-3 text-xl bg-gray-200 rounded-lg cursor-not-allowed"
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className='p-2'>
                <p className='text-xl text-black'>Tuesday</p>
                <div className='flex flex-col md:flex-row gap-2 mt-2  w-full'>
                  <div className='flex flex-col w-full md:w-[25vw]'>
                    <p className='text-xl text-black'>From</p>
                    <input
                      type="text"
                      placeholder="08:10"
                      className="w-full p-3 mt-3 text-xl bg-gray-200 rounded-lg cursor-not-allowed"
                      disabled
                    />
                  </div>
                  <div className='flex flex-col w-full md:w-[25vw]'>
                    <p className='text-xl text-black'>To</p>
                    <input
                      type="text"
                      placeholder="21:20"
                      className="w-full p-3 mt-3 text-xl bg-gray-200 rounded-lg cursor-not-allowed"
                      disabled
                    />
                  </div>
                </div>
              </div>

              <div className='p-2 '>
                <p className='text-xl text-black'>Wednesday</p>
                <div className='flex flex-col md:flex-row gap-2 mt-2  w-full'>
                  <div className='flex flex-col w-full md:w-[25vw]'>
                    <p className='text-xl text-black'>From</p>
                    <input
                      type="text"
                      placeholder="08:10"
                      className="w-full p-3 mt-3 text-xl bg-gray-200 rounded-lg cursor-not-allowed"
                      disabled
                    />
                  </div>
                  <div className='flex flex-col w-full md:w-[25vw]'>
                    <p className='text-xl text-black'>To</p>
                    <input
                      type="text"
                      placeholder="21:20"
                      className="w-full p-3 mt-3 text-xl bg-gray-200 rounded-lg cursor-not-allowed"
                      disabled
                    />
                  </div>
                </div>
              </div>

              <div className='flex flex-col w-full p-2 '>
                <p className='text-xl text-black'>Thursday</p>
                <input
                  type="text"
                  placeholder="Closed"
                  className="w-full mt-3 text-xl border-none bg-transparent text-black font-semibold placeholder-primary-900 cursor-not-allowed"
                  disabled
                />
              </div>
              <div className='flex flex-col w-full p-2 '>
                <p className='text-xl text-black'>Friday</p>
                <input
                  type="text"
                  placeholder="Closed"
                  className="w-full mt-3 text-xl border-none bg-transparent text-black font-semibold placeholder-primary-900 cursor-not-allowed"
                  disabled
                />
              </div>
              <div className='flex flex-col w-full p-2 '>
                <p className='text-xl text-black'>Saturday</p>
                <input
                  type="text"
                  placeholder="Closed"
                  className="w-full mt-3 text-xl border-none bg-transparent text-black font-semibold placeholder-primary-900 cursor-not-allowed"
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

export default WorkingHourDetail
