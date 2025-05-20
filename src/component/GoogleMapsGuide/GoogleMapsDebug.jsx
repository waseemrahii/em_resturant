"use client"

import { useState, useEffect } from "react"
import { FaExclamationTriangle, FaCheckCircle, FaSpinner } from "react-icons/fa"

const GoogleMapsDebug = () => {
  const [status, setStatus] = useState("checking")
  const [details, setDetails] = useState({})

  useEffect(() => {
    const checkGoogleMaps = () => {
      // Check if Google Maps is loaded
      if (window.google && window.google.maps) {
        // Check for required libraries
        const libraries = {
          core: !!window.google.maps,
          drawing: !!window.google.maps.drawing,
          places: !!window.google.maps.places,
          geometry: !!window.google.maps.geometry,
        }

        setDetails({
          apiKey: document.querySelector('script[src*="maps.googleapis.com/maps/api"]')?.src || "Not found",
          libraries,
          allLibrariesLoaded: Object.values(libraries).every(Boolean),
        })

        if (Object.values(libraries).every(Boolean)) {
          setStatus("success")
        } else {
          setStatus("partial")
        }
      } else {
        // If not loaded after 5 seconds, consider it failed
        setTimeout(() => {
          if (!window.google || !window.google.maps) {
            setStatus("failed")
            setDetails({
              scriptFound: !!document.querySelector('script[src*="maps.googleapis.com/maps/api"]'),
              scriptSrc: document.querySelector('script[src*="maps.googleapis.com/maps/api"]')?.src || "Not found",
            })
          }
        }, 5000)
      }
    }

    checkGoogleMaps()
  }, [])

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 my-4">
      <h2 className="text-lg font-semibold mb-2 flex items-center">
        {status === "checking" && (
          <>
            <FaSpinner className="animate-spin mr-2 text-blue-500" />
            Checking Google Maps API...
          </>
        )}
        {status === "success" && (
          <>
            <FaCheckCircle className="mr-2 text-green-500" />
            Google Maps API Loaded Successfully
          </>
        )}
        {status === "partial" && (
          <>
            <FaExclamationTriangle className="mr-2 text-yellow-500" />
            Google Maps API Partially Loaded
          </>
        )}
        {status === "failed" && (
          <>
            <FaExclamationTriangle className="mr-2 text-red-500" />
            Google Maps API Failed to Load
          </>
        )}
      </h2>

      <div className="mt-3 text-sm bg-gray-50 p-3 rounded border border-gray-200 overflow-auto">
        <pre className="whitespace-pre-wrap">{JSON.stringify(details, null, 2)}</pre>
      </div>

      {status === "failed" && (
        <div className="mt-3 bg-red-50 border-l-4 border-red-500 p-3">
          <h3 className="font-medium text-red-800">Troubleshooting Steps:</h3>
          <ol className="list-decimal ml-5 mt-1 text-red-700">
            <li>Check if your API key is correct</li>
            <li>Verify that billing is enabled on your Google Cloud account</li>
            <li>Make sure the required APIs are enabled (Maps JavaScript API, Places API, etc.)</li>
            <li>Check for any restrictions on your API key (HTTP referrers, IP addresses)</li>
            <li>Look for any errors in the browser console</li>
          </ol>
        </div>
      )}

      {status === "partial" && (
        <div className="mt-3 bg-yellow-50 border-l-4 border-yellow-500 p-3">
          <h3 className="font-medium text-yellow-800">Missing Libraries:</h3>
          <ul className="list-disc ml-5 mt-1 text-yellow-700">
            {!details.libraries?.drawing && <li>Drawing Library</li>}
            {!details.libraries?.places && <li>Places Library</li>}
            {!details.libraries?.geometry && <li>Geometry Library</li>}
          </ul>
          <p className="mt-2 text-yellow-700">
            Make sure your script tag includes all required libraries:
            <code className="block mt-1 bg-yellow-100 p-2 rounded">
              {`<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=drawing,places,geometry" async defer></script>`}
            </code>
          </p>
        </div>
      )}
    </div>
  )
}

export default GoogleMapsDebug
