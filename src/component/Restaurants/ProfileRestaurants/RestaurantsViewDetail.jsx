import { useState } from 'react';
import { IoIosAdd, IoMdStarOutline } from 'react-icons/io';
import AddWalletModel from '../../UserCustomer/AddWalletModel';

const RestaurantsViewDetail = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <div className="relative mx-auto max-w-4xl overflow-y-auto p-4">
        {/* Container for small and large screens */}
        <div className="flex mx-4 justify-between">
          {/* Driver details header */}
          <h1 className='bg-primary-900 text-white px-2 rounded '>Restaurants details</h1>

          {/* Add Wallet Amount button */}
          <div
            className="bg-[#26DAD2] text-white px-2  rounded-lg  transition-shadow duration-400 cursor-pointer flex items-center"
            onClick={handleOpenModal}
          >
            <AddWalletModel open={openModal} handleClose={handleCloseModal} />
          </div>
        </div>

        {/* Form content */}
        <div className='flex flex-col items-center border border-gray-300 rounded-lg p-6 mx-auto md:max-w-4xl'>
          <div className='flex flex-col gap-6 w-full'>
            {/* Form fields */}
            <div className='flex flex-col md:flex-row gap-6 w-full'>
              <div className='flex flex-col w-full md:w-[25vw]'>
                <img src='https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/flutter%2FuberEats%2FproductImages%2Fc4f24aa1-8644-4114-96ed-791a8b9bc603.png?alt=media&token=0abb571b-d222-4f33-84de-51fa119f6980' className='rounded-lg w-45 h-40' />

                <div className='flex flex-row items-center justify-center gap-4 p-4'>
                  <div className='flex'>
                    <IoMdStarOutline className='text-2xl text-primary-900' />
                    <IoMdStarOutline className='text-2xl text-primary-900' />
                    <IoMdStarOutline className='text-2xl text-primary-900' />
                    <IoMdStarOutline className='text-2xl text-primary-900' />
                  </div>

                  <p className='text-lg font-semibold'> Reviews</p>
                  <p className='text-lg font-semibold'> 0</p>


                </div>
              </div>
              <div className='flex flex-col w-full md:w-[25vw]'>
                <p className='text-xl text-black'>Name</p>
                <input
                  type="text"
                  placeholder="Food Blast"
                  className="w-full p-3 mt-3 text-xl bg-gray-100 rounded-lg cursor-not-allowed"
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
                  className="w-full p-3 mt-3 text-xl bg-gray-100 rounded-lg cursor-not-allowed"
                  disabled
                />
              </div>
              <div className='flex flex-col w-full md:w-[25vw]'>
                <p className='text-xl text-black'>Address</p>
                <input
                  type="text"
                  placeholder="19, Shakti Society, Paldi, Ahmedabad, Gujarat 380007, India"
                  className="w-full p-3 mt-3 text-xl bg-gray-100 rounded-lg cursor-not-allowed"
                  disabled
                />
              </div>
            </div>
            <div className='flex flex-col md:flex-row gap-6 w-full'>
              <div className='flex flex-col w-full md:w-[25vw]'>
                <p className='text-xl text-black'>Description</p>
                <input
                  type="text"
                  placeholder="food blast"
                  className="w-full p-3 mt-3 text-xl bg-gray-100 rounded-lg cursor-not-allowed"
                  disabled
                />
              </div>
              <div className='flex flex-col w-full md:w-[25vw]'>
                <p className='text-xl text-black'>Cuisines</p>
                <input
                  type="text"
                  placeholder="Italian"
                  className="w-full p-3 mt-3 text-xl bg-gray-100 rounded-lg cursor-not-allowed"
                  disabled
                />
              </div>
            </div>
            <div className='flex flex-col md:flex-row gap-6 w-full'>
              <div className='flex flex-col w-full md:w-[25vw]'>
                <p className='text-xl text-black'>Wallet Balance</p>
                <input
                  type="text"
                  placeholder="$0.00"
                  className="w-full p-3 mt-3 text-xl bg-gray-100 rounded-lg cursor-not-allowed"
                  disabled
                />
              </div>
              <div className='flex flex-col w-full md:w-[25vw]'>
                <p className='text-xl text-black'>Zone</p>
                <input
                  type="text"
                  placeholder="World Wide"
                  className="w-full p-3 mt-3 text-xl bg-gray-100 rounded-lg cursor-not-allowed"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
}

export default RestaurantsViewDetail;
