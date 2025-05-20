import FormHead from "../../Forms/FormHead"

const BankInfo = () => {
  return (
    <>
        <div className='flex flex-col items-center juatify-center rounded-lg border border-gray-300 m-14 max-w-4xl  mx-auto p-10 '>
          <FormHead title='Bank Info'/>
          <div className='flex flex-col w-full space-y-6 p-4'>
            <div className='flex flex-col md:flex-row md:space-x-8 w-full'>
              <p className='text-lg  text-black font-semibold flex-1'>Bank Name</p>
              <p className='text-lg  text-black font-semibold flex-1'>Branch Name</p>
            </div>
            
            <div className='flex flex-col md:flex-row md:space-x-8 w-full'>
              <p className='text-lg  text-black font-semibold flex-1'>Holder Name</p>
              <p className='text-lg  text-black font-semibold flex-1'>Account Number</p>
            </div>

            <div className='flex flex-col md:flex-row md:space-x-8 w-full'>
              <p className='text-lg  text-black font-semibold flex-1'>Other Information</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default BankInfo
