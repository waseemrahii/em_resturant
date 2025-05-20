
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaIdCard,
  FaCar,
  FaImage,
  FaMoneyBillWave,
  FaCheck,
  FaArrowRight,
  FaArrowLeft,
  FaInfoCircle,
  FaCalendarAlt,
  FaFileAlt,
} from "react-icons/fa"
import PageHeader from "../../common/PageHeader"
import { toast } from "react-toastify"

const DriverDetailForm = () => {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 5 // Now 5 steps including review
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    dateOfBirth: "",
    gender: "male",
    profileImage: null,

    // Identity & Documents
    identityType: "national_id",
    identityNumber: "",
    identityExpiry: "",
    identityImage: null,
    drivingLicense: "",
    drivingLicenseExpiry: "",
    drivingLicenseImage: null,

    // Vehicle Information
    vehicleType: "car",
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: "",
    vehicleColor: "",
    vehiclePlateNumber: "",
    vehicleRegistrationExpiry: "",
    vehicleInsuranceNumber: "",
    vehicleInsuranceExpiry: "",
    vehicleImage: null,

    // Payment Information
    bankName: "",
    accountNumber: "",
    accountHolderName: "",
    routingNumber: "",
    paymentMethod: "bank_transfer",

    // Status
    status: "pending",
  })

  const [errors, setErrors] = useState({})
  const [previewImages, setPreviewImages] = useState({
    profile: null,
    identity: null,
    license: null,
    vehicle: null,
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      })
    }
  }

  const handleFileChange = (e, type) => {
    const file = e.target.files[0]
    if (!file) return

    // Create preview URL
    const previewUrl = URL.createObjectURL(file)

    // Update form data and preview based on type
    if (type === "profile") {
      setFormData((prev) => ({ ...prev, profileImage: file }))
      setPreviewImages((prev) => ({ ...prev, profile: previewUrl }))
    } else if (type === "identity") {
      setFormData((prev) => ({ ...prev, identityImage: file }))
      setPreviewImages((prev) => ({ ...prev, identity: previewUrl }))
    } else if (type === "license") {
      setFormData((prev) => ({ ...prev, drivingLicenseImage: file }))
      setPreviewImages((prev) => ({ ...prev, license: previewUrl }))
    } else if (type === "vehicle") {
      setFormData((prev) => ({ ...prev, vehicleImage: file }))
      setPreviewImages((prev) => ({ ...prev, vehicle: previewUrl }))
    }
  }

  const validateStep = (step) => {
    const newErrors = {}

    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
      if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
      if (!formData.email.trim()) newErrors.email = "Email is required"
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
      if (!formData.address.trim()) newErrors.address = "Address is required"
    } else if (step === 2) {
      if (!formData.identityNumber.trim()) newErrors.identityNumber = "Identity number is required"
      if (!formData.identityExpiry.trim()) newErrors.identityExpiry = "Expiry date is required"
      if (!formData.drivingLicense.trim()) newErrors.drivingLicense = "Driving license number is required"
      if (!formData.drivingLicenseExpiry.trim()) newErrors.drivingLicenseExpiry = "License expiry date is required"
    } else if (step === 3) {
      if (!formData.vehicleMake.trim()) newErrors.vehicleMake = "Vehicle make is required"
      if (!formData.vehicleModel.trim()) newErrors.vehicleModel = "Vehicle model is required"
      if (!formData.vehiclePlateNumber.trim()) newErrors.vehiclePlateNumber = "Plate number is required"
    }

    return newErrors
  }

  const nextStep = () => {
    const newErrors = validateStep(currentStep)
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      toast.error("Please fix the errors before proceeding")
      return
    }
    setCurrentStep(currentStep + 1)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setCurrentStep(currentStep - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Only process submission if explicitly submitted via the submit button
    if (e.nativeEvent.submitter && e.nativeEvent.submitter.type === "submit") {
      const newErrors = validateStep(currentStep)
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors)
        toast.error("Please fix the errors before submitting")
        return
      }

      setIsLoading(true)

      // Simulate API call
      setTimeout(() => {
        setIsLoading(false)
        // Show success message
        toast.success("Driver created successfully!")
        // Redirect to drivers list
        navigate("/drivers/all")
      }, 1000)
    }
  }

  const renderStepIndicator = () => {
    return (
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {[1, 2, 3, 4, 5].map((step) => (
            <div key={step} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                  currentStep === step ? "bg-primary-900" : currentStep > step ? "bg-green-500" : "bg-gray-300"
                }`}
              >
                {currentStep > step ? <FaCheck /> : step}
              </div>
              <div
                className={`text-xs mt-2 font-medium ${currentStep === step ? "text-primary-900" : "text-gray-500"}`}
              >
                {step === 1 && "Personal Info"}
                {step === 2 && "Identity & Documents"}
                {step === 3 && "Vehicle Details"}
                {step === 4 && "Payment Info"}
                {step === 5 && "Review"}
              </div>
            </div>
          ))}
        </div>
        <div className="relative mt-2">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200"></div>
          <div
            className="absolute top-0 left-0 h-1 bg-primary-900 transition-all duration-300"
            style={{ width: `${(currentStep - 1) * 25}%` }}
          ></div>
        </div>
      </div>
    )
  }

  const renderPersonalInfoStep = () => {
    return (
      <div className="space-y-6">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
            <FaUser className="text-primary-900" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Personal Information</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Profile Image */}
          <div className="md:col-span-2 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200">
                {previewImages.profile ? (
                  <img
                    src={previewImages.profile || "/placeholder.svg"}
                    alt="Profile Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <FaUser className="text-gray-400 text-4xl" />
                  </div>
                )}
              </div>
              <label
                htmlFor="profile-upload"
                className="absolute bottom-0 right-0 bg-primary-900 text-white p-2 rounded-full cursor-pointer hover:bg-primary-800 transition-colors"
              >
                <FaImage className="text-lg" />
              </label>
              <input
                type="file"
                id="profile-upload"
                className="hidden"
                accept="image/*"
                onChange={(e) => handleFileChange(e, "profile")}
              />
            </div>
          </div>

          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-gray-400" />
              </div>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={`pl-10 w-full rounded-md border ${
                  errors.firstName ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
                } focus:border-primary-500 p-2.5 transition duration-150`}
                placeholder="Enter first name"
              />
            </div>
            {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-gray-400" />
              </div>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={`pl-10 w-full rounded-md border ${
                  errors.lastName ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
                } focus:border-primary-500 p-2.5 transition duration-150`}
                placeholder="Enter last name"
              />
            </div>
            {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`pl-10 w-full rounded-md border ${
                  errors.email ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
                } focus:border-primary-500 p-2.5 transition duration-150`}
                placeholder="Enter email address"
              />
            </div>
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaPhone className="text-gray-400" />
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`pl-10 w-full rounded-md border ${
                  errors.phone ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
                } focus:border-primary-500 p-2.5 transition duration-150`}
                placeholder="Enter phone number"
              />
            </div>
            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaCalendarAlt className="text-gray-400" />
              </div>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                className="pl-10 w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5 transition duration-150"
              />
            </div>
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5 transition duration-150"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Address*</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaMapMarkerAlt className="text-gray-400" />
              </div>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                rows="3"
                className={`pl-10 w-full rounded-md border ${
                  errors.address ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
                } focus:border-primary-500 p-2.5 transition duration-150`}
                placeholder="Enter full address"
              ></textarea>
            </div>
            {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5 transition duration-150"
              placeholder="Enter city"
            />
          </div>

          {/* State */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">State/Province</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5 transition duration-150"
              placeholder="Enter state or province"
            />
          </div>

          {/* Zip Code */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Zip/Postal Code</label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
              className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5 transition duration-150"
              placeholder="Enter zip code"
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5 transition duration-150"
            >
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
              <option value="blocked">Blocked</option>
            </select>
          </div>
        </div>
      </div>
    )
  }

  const renderIdentityStep = () => {
    return (
      <div className="space-y-6">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
            <FaIdCard className="text-primary-900" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Identity & Documents</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Identity Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Identity Type*</label>
            <select
              name="identityType"
              value={formData.identityType}
              onChange={handleInputChange}
              className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5 transition duration-150"
            >
              <option value="national_id">National ID</option>
              <option value="passport">Passport</option>
              <option value="drivers_license">Driver's License</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Identity Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Identity Number*</label>
            <input
              type="text"
              name="identityNumber"
              value={formData.identityNumber}
              onChange={handleInputChange}
              className={`w-full rounded-md border ${
                errors.identityNumber ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
              } focus:border-primary-500 p-2.5 transition duration-150`}
              placeholder="Enter identity number"
            />
            {errors.identityNumber && <p className="mt-1 text-sm text-red-600">{errors.identityNumber}</p>}
          </div>

          {/* Identity Expiry */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Identity Expiry Date*</label>
            <input
              type="date"
              name="identityExpiry"
              value={formData.identityExpiry}
              onChange={handleInputChange}
              className={`w-full rounded-md border ${
                errors.identityExpiry ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
              } focus:border-primary-500 p-2.5 transition duration-150`}
            />
            {errors.identityExpiry && <p className="mt-1 text-sm text-red-600">{errors.identityExpiry}</p>}
          </div>

          {/* Identity Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Identity Document Image</label>
            <div className="flex items-center space-x-4">
              <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden bg-gray-50">
                {previewImages.identity ? (
                  <img
                    src={previewImages.identity || "/placeholder.svg"}
                    alt="Identity Document"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <FaFileAlt className="text-gray-400 text-3xl" />
                )}
              </div>
              <div className="flex-1">
                <input
                  type="file"
                  onChange={(e) => handleFileChange(e, "identity")}
                  className="hidden"
                  id="identity-upload"
                  accept="image/*"
                />
                <label
                  htmlFor="identity-upload"
                  className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-150"
                >
                  <FaImage className="mr-2 -ml-1 h-5 w-5 text-gray-500" />
                  Upload Document
                </label>
                <p className="mt-1 text-xs text-gray-500">PNG, JPG up to 5MB</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-medium text-gray-900 mb-4 pb-2 border-b border-gray-200">
              Driving License Information
            </h3>
          </div>

          {/* Driving License Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Driving License Number*</label>
            <input
              type="text"
              name="drivingLicense"
              value={formData.drivingLicense}
              onChange={handleInputChange}
              className={`w-full rounded-md border ${
                errors.drivingLicense ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
              } focus:border-primary-500 p-2.5 transition duration-150`}
              placeholder="Enter license number"
            />
            {errors.drivingLicense && <p className="mt-1 text-sm text-red-600">{errors.drivingLicense}</p>}
          </div>

          {/* Driving License Expiry */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">License Expiry Date*</label>
            <input
              type="date"
              name="drivingLicenseExpiry"
              value={formData.drivingLicenseExpiry}
              onChange={handleInputChange}
              className={`w-full rounded-md border ${
                errors.drivingLicenseExpiry
                  ? "border-red-300 focus:ring-red-500"
                  : "border-gray-300 focus:ring-primary-500"
              } focus:border-primary-500 p-2.5 transition duration-150`}
            />
            {errors.drivingLicenseExpiry && <p className="mt-1 text-sm text-red-600">{errors.drivingLicenseExpiry}</p>}
          </div>

          {/* Driving License Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Driving License Image</label>
            <div className="flex items-center space-x-4">
              <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden bg-gray-50">
                {previewImages.license ? (
                  <img
                    src={previewImages.license || "/placeholder.svg"}
                    alt="Driving License"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <FaIdCard className="text-gray-400 text-3xl" />
                )}
              </div>
              <div className="flex-1">
                <input
                  type="file"
                  onChange={(e) => handleFileChange(e, "license")}
                  className="hidden"
                  id="license-upload"
                  accept="image/*"
                />
                <label
                  htmlFor="license-upload"
                  className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-150"
                >
                  <FaImage className="mr-2 -ml-1 h-5 w-5 text-gray-500" />
                  Upload License
                </label>
                <p className="mt-1 text-xs text-gray-500">PNG, JPG up to 5MB</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 flex items-start mt-6">
          <FaInfoCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-medium text-blue-800">Document Verification</h4>
            <p className="text-xs text-blue-600 mt-1">
              All documents will be verified by our team. Please ensure that all information is accurate and documents
              are clearly visible.
            </p>
          </div>
        </div>
      </div>
    )
  }

  const renderVehicleStep = () => {
    return (
      <div className="space-y-6">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
            <FaCar className="text-primary-900" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Vehicle Information</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vehicle Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Type</label>
            <select
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleInputChange}
              className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5 transition duration-150"
            >
              <option value="car">Car</option>
              <option value="motorcycle">Motorcycle</option>
              <option value="bicycle">Bicycle</option>
              <option value="scooter">Scooter</option>
              <option value="van">Van</option>
            </select>
          </div>

          {/* Vehicle Make */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Make*</label>
            <input
              type="text"
              name="vehicleMake"
              value={formData.vehicleMake}
              onChange={handleInputChange}
              className={`w-full rounded-md border ${
                errors.vehicleMake ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
              } focus:border-primary-500 p-2.5 transition duration-150`}
              placeholder="E.g., Toyota, Honda"
            />
            {errors.vehicleMake && <p className="mt-1 text-sm text-red-600">{errors.vehicleMake}</p>}
          </div>

          {/* Vehicle Model */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Model*</label>
            <input
              type="text"
              name="vehicleModel"
              value={formData.vehicleModel}
              onChange={handleInputChange}
              className={`w-full rounded-md border ${
                errors.vehicleModel ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
              } focus:border-primary-500 p-2.5 transition duration-150`}
              placeholder="E.g., Corolla, Civic"
            />
            {errors.vehicleModel && <p className="mt-1 text-sm text-red-600">{errors.vehicleModel}</p>}
          </div>

          {/* Vehicle Year */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Year</label>
            <input
              type="number"
              name="vehicleYear"
              value={formData.vehicleYear}
              onChange={handleInputChange}
              min="1990"
              max={new Date().getFullYear()}
              className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5 transition duration-150"
              placeholder="E.g., 2020"
            />
          </div>

          {/* Vehicle Color */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Color</label>
            <input
              type="text"
              name="vehicleColor"
              value={formData.vehicleColor}
              onChange={handleInputChange}
              className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5 transition duration-150"
              placeholder="E.g., Black, White"
            />
          </div>

          {/* Vehicle Plate Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">License Plate Number*</label>
            <input
              type="text"
              name="vehiclePlateNumber"
              value={formData.vehiclePlateNumber}
              onChange={handleInputChange}
              className={`w-full rounded-md border ${
                errors.vehiclePlateNumber
                  ? "border-red-300 focus:ring-red-500"
                  : "border-gray-300 focus:ring-primary-500"
              } focus:border-primary-500 p-2.5 transition duration-150`}
              placeholder="Enter plate number"
            />
            {errors.vehiclePlateNumber && <p className="mt-1 text-sm text-red-600">{errors.vehiclePlateNumber}</p>}
          </div>

          {/* Vehicle Registration Expiry */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Registration Expiry Date</label>
            <input
              type="date"
              name="vehicleRegistrationExpiry"
              value={formData.vehicleRegistrationExpiry}
              onChange={handleInputChange}
              className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5 transition duration-150"
            />
          </div>

          {/* Vehicle Insurance Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Insurance Policy Number</label>
            <input
              type="text"
              name="vehicleInsuranceNumber"
              value={formData.vehicleInsuranceNumber}
              onChange={handleInputChange}
              className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5 transition duration-150"
              placeholder="Enter insurance policy number"
            />
          </div>

          {/* Vehicle Insurance Expiry */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Insurance Expiry Date</label>
            <input
              type="date"
              name="vehicleInsuranceExpiry"
              value={formData.vehicleInsuranceExpiry}
              onChange={handleInputChange}
              className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5 transition duration-150"
            />
          </div>

          {/* Vehicle Image */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Image</label>
            <div className="flex items-center space-x-4">
              <div className="w-32 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden bg-gray-50">
                {previewImages.vehicle ? (
                  <img
                    src={previewImages.vehicle || "/placeholder.svg"}
                    alt="Vehicle"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <FaCar className="text-gray-400 text-3xl" />
                )}
              </div>
              <div className="flex-1">
                <input
                  type="file"
                  onChange={(e) => handleFileChange(e, "vehicle")}
                  className="hidden"
                  id="vehicle-upload"
                  accept="image/*"
                />
                <label
                  htmlFor="vehicle-upload"
                  className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-150"
                >
                  <FaImage className="mr-2 -ml-1 h-5 w-5 text-gray-500" />
                  Upload Vehicle Image
                </label>
                <p className="mt-1 text-xs text-gray-500">PNG, JPG up to 5MB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderPaymentStep = () => {
    return (
      <div className="space-y-6">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
            <FaMoneyBillWave className="text-primary-900" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Payment Information</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Payment Method */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
              <div
                className={`border rounded-lg p-4 cursor-pointer transition-all ${
                  formData.paymentMethod === "bank_transfer"
                    ? "border-primary-500 bg-primary-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => handleInputChange({ target: { name: "paymentMethod", value: "bank_transfer" } })}
              >
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="bank_transfer"
                    name="paymentMethod"
                    value="bank_transfer"
                    checked={formData.paymentMethod === "bank_transfer"}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                  />
                  <label htmlFor="bank_transfer" className="ml-3 block text-sm font-medium text-gray-700">
                    Bank Transfer
                  </label>
                </div>
                <p className="text-xs text-gray-500 mt-2">Receive payments directly to your bank account</p>
              </div>

              <div
                className={`border rounded-lg p-4 cursor-pointer transition-all ${
                  formData.paymentMethod === "paypal"
                    ? "border-primary-500 bg-primary-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => handleInputChange({ target: { name: "paymentMethod", value: "paypal" } })}
              >
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="paypal"
                    name="paymentMethod"
                    value="paypal"
                    checked={formData.paymentMethod === "paypal"}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                  />
                  <label htmlFor="paypal" className="ml-3 block text-sm font-medium text-gray-700">
                    PayPal
                  </label>
                </div>
                <p className="text-xs text-gray-500 mt-2">Receive payments to your PayPal account</p>
              </div>

              <div
                className={`border rounded-lg p-4 cursor-pointer transition-all ${
                  formData.paymentMethod === "cash"
                    ? "border-primary-500 bg-primary-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => handleInputChange({ target: { name: "paymentMethod", value: "cash" } })}
              >
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="cash"
                    name="paymentMethod"
                    value="cash"
                    checked={formData.paymentMethod === "cash"}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                  />
                  <label htmlFor="cash" className="ml-3 block text-sm font-medium text-gray-700">
                    Cash
                  </label>
                </div>
                <p className="text-xs text-gray-500 mt-2">Receive cash payments directly</p>
              </div>
            </div>
          </div>

          {formData.paymentMethod === "bank_transfer" && (
            <>
              <div className="md:col-span-2">
                <h3 className="text-lg font-medium text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Bank Account Details
                </h3>
              </div>

              {/* Bank Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bank Name</label>
                <input
                  type="text"
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5 transition duration-150"
                  placeholder="Enter bank name"
                />
              </div>

              {/* Account Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Account Number</label>
                <input
                  type="text"
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5 transition duration-150"
                  placeholder="Enter account number"
                />
              </div>

              {/* Account Holder Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Account Holder Name</label>
                <input
                  type="text"
                  name="accountHolderName"
                  value={formData.accountHolderName}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5 transition duration-150"
                  placeholder="Enter account holder name"
                />
              </div>

              {/* Routing Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Routing Number / SWIFT / IBAN</label>
                <input
                  type="text"
                  name="routingNumber"
                  value={formData.routingNumber}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5 transition duration-150"
                  placeholder="Enter routing number"
                />
              </div>
            </>
          )}

          {formData.paymentMethod === "paypal" && (
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">PayPal Email</label>
              <input
                type="email"
                name="paypalEmail"
                value={formData.paypalEmail || ""}
                onChange={handleInputChange}
                className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5 transition duration-150"
                placeholder="Enter PayPal email address"
              />
            </div>
          )}
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 flex items-start mt-6">
          <FaInfoCircle className="text-yellow-500 mt-1 mr-3 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-medium text-yellow-800">Payment Information</h4>
            <p className="text-xs text-yellow-600 mt-1">
              Payment details are required for processing payouts. Make sure all information is accurate to avoid
              payment delays.
            </p>
          </div>
        </div>
      </div>
    )
  }

  const renderReviewStep = () => {
    return (
      <div className="space-y-6">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
            <FaCheck className="text-primary-900" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Review Information</h2>
        </div>

        <div className="bg-green-50 p-4 rounded-lg border border-green-200 flex items-start mb-6">
          <FaInfoCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-medium text-green-800">Ready to Submit</h4>
            <p className="text-xs text-green-600 mt-1">
              Please review all information below before submitting. Once submitted, you can still edit the driver
              details later.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="text-md font-semibold text-gray-800 mb-3">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">First Name</p>
                <p className="text-sm text-gray-900">{formData.firstName || "Not provided"}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Last Name</p>
                <p className="text-sm text-gray-900">{formData.lastName || "Not provided"}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Email</p>
                <p className="text-sm text-gray-900">{formData.email || "Not provided"}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Phone</p>
                <p className="text-sm text-gray-900">{formData.phone || "Not provided"}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm font-medium text-gray-500">Address</p>
                <p className="text-sm text-gray-900">{formData.address || "Not provided"}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Date of Birth</p>
                <p className="text-sm text-gray-900">{formData.dateOfBirth || "Not provided"}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Gender</p>
                <p className="text-sm text-gray-900 capitalize">{formData.gender || "Not provided"}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="text-md font-semibold text-gray-800 mb-3">Identity & Documents</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Identity Type</p>
                <p className="text-sm text-gray-900 capitalize">
                  {formData.identityType?.replace("_", " ") || "Not provided"}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Identity Number</p>
                <p className="text-sm text-gray-900">{formData.identityNumber || "Not provided"}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Identity Expiry</p>
                <p className="text-sm text-gray-900">{formData.identityExpiry || "Not provided"}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Driving License</p>
                <p className="text-sm text-gray-900">{formData.drivingLicense || "Not provided"}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">License Expiry</p>
                <p className="text-sm text-gray-900">{formData.drivingLicenseExpiry || "Not provided"}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="text-md font-semibold text-gray-800 mb-3">Vehicle Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Vehicle Type</p>
                <p className="text-sm text-gray-900 capitalize">{formData.vehicleType || "Not provided"}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Vehicle Make</p>
                <p className="text-sm text-gray-900">{formData.vehicleMake || "Not provided"}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Vehicle Model</p>
                <p className="text-sm text-gray-900">{formData.vehicleModel || "Not provided"}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Vehicle Year</p>
                <p className="text-sm text-gray-900">{formData.vehicleYear || "Not provided"}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">License Plate</p>
                <p className="text-sm text-gray-900">{formData.vehiclePlateNumber || "Not provided"}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="text-md font-semibold text-gray-800 mb-3">Payment Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Payment Method</p>
                <p className="text-sm text-gray-900 capitalize">
                  {formData.paymentMethod?.replace("_", " ") || "Not provided"}
                </p>
              </div>
              {formData.paymentMethod === "bank_transfer" && (
                <>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Bank Name</p>
                    <p className="text-sm text-gray-900">{formData.bankName || "Not provided"}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Account Number</p>
                    <p className="text-sm text-gray-900">{formData.accountNumber || "Not provided"}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Account Holder</p>
                    <p className="text-sm text-gray-900">{formData.accountHolderName || "Not provided"}</p>
                  </div>
                </>
              )}
              {formData.paymentMethod === "paypal" && (
                <div>
                  <p className="text-sm font-medium text-gray-500">PayPal Email</p>
                  <p className="text-sm text-gray-900">{formData.paypalEmail || "Not provided"}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-4 md:p-6">
      <PageHeader
        title="Add New Driver"
        description="Create a new driver account"
        actions={[
          {
            label: "Cancel",
            onClick: () => navigate("/drivers/all"),
            variant: "outline",
          },
        ]}
      />

      <div className="bg-white rounded-lg shadow-md p-6 mt-6">
        {renderStepIndicator()}

        {/* Notice we're NOT using a form element here */}
        <div>
          {currentStep === 1 && renderPersonalInfoStep()}
          {currentStep === 2 && renderIdentityStep()}
          {currentStep === 3 && renderVehicleStep()}
          {currentStep === 4 && renderPaymentStep()}
          {currentStep === 5 && renderReviewStep()}

          <div className="mt-8 pt-5 border-t border-gray-200 flex justify-between">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <FaArrowLeft className="mr-2 -ml-1 h-5 w-5 text-gray-500" />
                Previous
              </button>
            ) : (
              <button
                type="button"
                onClick={() => navigate("/drivers/all")}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Cancel
              </button>
            )}

            {currentStep < 5 ? (
              <button
                type="button"
                onClick={nextStep}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-900 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Next
                <FaArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault()
                  if (isLoading) return

                  const newErrors = validateStep(currentStep)
                  if (Object.keys(newErrors).length > 0) {
                    setErrors(newErrors)
                    toast.error("Please fix the errors before submitting")
                    return
                  }

                  setIsLoading(true)

                  // Simulate API call
                  setTimeout(() => {
                    setIsLoading(false)
                    // Show success message
                    toast.success("Driver created successfully!")
                    // Redirect to drivers list
                    navigate("/drivers/all")
                  }, 1000)
                }}
                disabled={isLoading}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-900 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Creating...
                  </>
                ) : (
                  <>
                    <FaCheck className="mr-2 -ml-1 h-5 w-5" />
                    Create Driver
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DriverDetailForm
