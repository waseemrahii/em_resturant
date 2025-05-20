import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography'; // Import Typography for text styling
const DriverActivateForm = () => {
  return (
    <>
      <div className='mt-5'>
      <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 -top-4 flex items-center justify-center bg-primary-900 text-white p-2 rounded-lg">
            <h1 className='text-sm font-semibold'>Driver (Activate/Deactivate)</h1>
          </div>
        </div>
        <div className='flex items-center juatify-center rounded-lg border border-gray-300 m-14 max-w-4xl  mx-auto p-10 '>
          <div className='p-8'>
            <FormControlLabel
              control={<Checkbox />}
              label={<Typography variant="h6">Active</Typography>} // Increased text size
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default DriverActivateForm
