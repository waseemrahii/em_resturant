import React from 'react'
import RolesDetalies from './RolesDetalies'
import { initialFormState } from '../../Utils/data'

const EditRoles = () => {
  
  const handleSave = (formState) => {
    console.log("Saved data:", formState);
    // handle save logic here
  };

  const handleBack = () => {
    console.log("Back button clicked");
    // handle back action here
  };

  return (
    <div>
      <RolesDetalies
      initialFormState={initialFormState}
      onSave={handleSave}
      onBack={handleBack}
    />
    </div>
  )
}

export default EditRoles
