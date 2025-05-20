"use client"

import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { FaFileAlt, FaCheckCircle, FaTimesCircle, FaArrowLeft, FaUpload, FaEye, FaCheck, FaTimes } from "react-icons/fa"
import {
  useGetDriverQuery,
  useVerifyDriverDocumentMutation,
  useUploadDriverDocumentsMutation,
} from "../../redux/services/driverService"
import TitleHead from "../Header/TitleHead"
import Alert from "../Pagination/Alert"

const DriverDocuments = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  // State
  const [alertOpen, setAlertOpen] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")
  const [uploadModal, setUploadModal] = useState(false)
  const [documents, setDocuments] = useState([])
  const [isUploading, setIsUploading] = useState(false)

  // Queries
  const { data: driverData, isLoading, refetch } = useGetDriverQuery(id)

  // Mutations
  const [verifyDocument] = useVerifyDriverDocumentMutation()
  const [uploadDocuments] = useUploadDriverDocumentsMutation()

  // Extract driver from response
  const driver = driverData?.data?.data

  // Handle document verification
  const handleVerifyDocument = async (documentId, verified) => {
    try {
      await verifyDocument({
        id,
        documentId,
        verified,
      }).unwrap()

      setAlertMessage(`Document ${verified ? "verified" : "unverified"} successfully`)
      setAlertOpen(true)
      refetch()
    } catch (error) {
      setAlertMessage(error?.data?.message || "Failed to update document verification status")
      setAlertOpen(true)
    }
  }

  // Handle document upload
  const handleDocumentUpload = (e) => {
    const files = Array.from(e.target.files)
    setDocuments([...documents, ...files])
  }

  // Remove document from list
  const handleRemoveDocument = (index) => {
    setDocuments(documents.filter((_, i) => i !== index))
  }

  // Submit document upload
  const handleSubmitUpload = async () => {
    if (documents.length === 0) {
      setAlertMessage("Please select at least one document to upload")
      setAlertOpen(true)
      return
    }

    setIsUploading(true)

    try {
      const formData = new FormData()

      documents.forEach((doc) => {
        formData.append("documents", doc)
      })

      await uploadDocuments({
        id,
        formData,
      }).unwrap()

      setAlertMessage("Documents uploaded successfully")
      setAlertOpen(true)
      setUploadModal(false)
      setDocuments([])
      refetch()
    } catch (error) {
      setAlertMessage(error?.data?.message || "Failed to upload documents")
      setAlertOpen(true)
    } finally {
      setIsUploading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-900"></div>
      </div>
    )
  }

  if (!driver) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold text-gray-800">Driver not found</h2>
        <p className="text-gray-600 mt-2">The driver you're looking for doesn't exist or has been removed.</p>
        <button
          onClick={() => navigate("/drivers/all")}
          className="mt-4 px-4 py-2 bg-primary-900 text-white rounded-md hover:bg-primary-800"
        >
          Back to Drivers List
        </button>
      </div>
    )
  }

  return (
    <>
      <TitleHead title="Driver Documents" desc={`${driver.firstName} ${driver.lastName}`} />

      {alertOpen && <Alert message={alertMessage} onClose={() => setAlertOpen(false)} />}

      {/* Upload Modal */}
      {uploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Upload Documents</h3>

            <div className="mb-4">
              <input
                type="file"
                multiple
                onChange={handleDocumentUpload}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
              />
              <p className="text-xs text-gray-500 mt-1">Accepted formats: PDF, JPG, PNG. Maximum size: 5MB per file.</p>
            </div>

            {documents.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Selected Documents</h4>
                <ul className="max-h-40 overflow-y-auto space-y-2">
                  {documents.map((doc, index) => (
                    <li key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
                      <div className="flex items-center">
                        <FaFileAlt className="text-gray-400 mr-2" />
                        <span className="text-sm truncate max-w-xs">{doc.name}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleRemoveDocument(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaTimes />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex justify-end space-x-3 mt-4">
              <button
                onClick={() => {
                  setUploadModal(false)
                  setDocuments([])
                }}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitUpload}
                disabled={documents.length === 0 || isUploading}
                className={`px-4 py-2 bg-primary-900 text-white rounded-md hover:bg-primary-800 flex items-center ${
                  documents.length === 0 || isUploading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isUploading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
                    Uploading...
                  </>
                ) : (
                  <>
                    <FaUpload className="mr-2" /> Upload
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Back Button */}
      <div className="mb-4">
        <button
          onClick={() => navigate(`/driver/profile/${id}`)}
          className="flex items-center text-primary-900 hover:text-primary-800"
        >
          <FaArrowLeft className="mr-1" /> Back to Driver Profile
        </button>
      </div>

      {/* Header */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{`${driver.firstName} ${driver.lastName}'s Documents`}</h1>
            <p className="text-gray-600">Manage and verify driver documents</p>
          </div>

          <button
            onClick={() => setUploadModal(true)}
            className="mt-4 md:mt-0 px-4 py-2 bg-primary-900 text-white rounded-md hover:bg-primary-800 flex items-center justify-center"
          >
            <FaUpload className="mr-2" /> Upload New Documents
          </button>
        </div>
      </div>

      {/* Documents List */}
      {driver.documents && driver.documents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {driver.documents.map((doc, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 border-b bg-gray-50 flex justify-between items-center">
                <h3 className="font-medium truncate" title={doc.name}>
                  {doc.name}
                </h3>
                <div className="flex items-center">
                  {doc.verified ? (
                    <span className="flex items-center text-green-600 text-sm">
                      <FaCheckCircle className="mr-1" /> Verified
                    </span>
                  ) : (
                    <span className="flex items-center text-orange-600 text-sm">
                      <FaTimesCircle className="mr-1" /> Unverified
                    </span>
                  )}
                </div>
              </div>

              <div className="p-4">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                    <FaFileAlt className="text-3xl text-gray-400" />
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <FaEye className="mr-1" /> View Document
                  </a>

                  {doc.verified ? (
                    <button
                      onClick={() => handleVerifyDocument(doc._id, false)}
                      className="px-3 py-1.5 bg-red-600 text-white rounded-md text-sm hover:bg-red-700 transition-colors flex items-center justify-center"
                    >
                      <FaTimes className="mr-1" /> Mark as Unverified
                    </button>
                  ) : (
                    <button
                      onClick={() => handleVerifyDocument(doc._id, true)}
                      className="px-3 py-1.5 bg-green-600 text-white rounded-md text-sm hover:bg-green-700 transition-colors flex items-center justify-center"
                    >
                      <FaCheck className="mr-1" /> Mark as Verified
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <FaFileAlt className="mx-auto text-4xl text-gray-300 mb-4" />
          <h2 className="text-xl font-medium text-gray-800 mb-2">No Documents Found</h2>
          <p className="text-gray-600 mb-4">This driver hasn't uploaded any documents yet.</p>
          <button
            onClick={() => setUploadModal(true)}
            className="px-4 py-2 bg-primary-900 text-white rounded-md hover:bg-primary-800 inline-flex items-center"
          >
            <FaUpload className="mr-2" /> Upload Documents
          </button>
        </div>
      )}
    </>
  )
}

export default DriverDocuments
