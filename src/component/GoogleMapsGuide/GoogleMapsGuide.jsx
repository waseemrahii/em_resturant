// import { FaInfoCircle, FaMapMarkedAlt, FaExternalLinkAlt } from "react-icons/fa"

// const GoogleMapsGuide = () => {
//   return (
//     <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto my-8">
//       <div className="flex items-center mb-6">
//         <FaMapMarkedAlt className="text-4xl text-primary-900 mr-4" />
//         <h1 className="text-2xl font-bold text-gray-800">Google Maps API Integration Guide</h1>
//       </div>

//       <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
//         <div className="flex">
//           <FaInfoCircle className="text-yellow-500 text-xl flex-shrink-0 mr-3 mt-1" />
//           <div>
//             <h3 className="text-lg font-medium text-yellow-800">Google Maps API Not Loaded</h3>
//             <p className="text-yellow-700 mt-1">
//               To use the map functionality in the Zone Management feature, you need to add a Google Maps API key to your
//               project.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="mb-6">
//         <h2 className="text-xl font-semibold text-gray-800 mb-3">How to Get a Google Maps API Key</h2>
//         <ol className="list-decimal pl-6 space-y-3">
//           <li className="text-gray-700">
//             <span className="font-medium">Create a Google Cloud Project:</span>
//             <ul className="list-disc pl-6 mt-1 text-gray-600">
//               <li>Go to the Google Cloud Console (console.cloud.google.com)</li>
//               <li>Create a new project or select an existing one</li>
//               <li>Make sure billing is enabled for your project</li>
//             </ul>
//           </li>
//           <li className="text-gray-700">
//             <span className="font-medium">Enable the Required APIs:</span>
//             <ul className="list-disc pl-6 mt-1 text-gray-600">
//               <li>Navigate to "APIs & Services" > "Library"</li>
//               <li>
//                 Search for and enable the following APIs:
//                 <ul className="list-circle pl-6 mt-1">
//                   <li>Maps JavaScript API</li>
//                   <li>Places API (if you need places search)</li>
//                   <li>Geocoding API (if you need address lookup)</li>
//                   <li>Directions API (if you need routing)</li>
//                 </ul>
//               </li>
//             </ul>
//           </li>
//           <li className="text-gray-700">
//             <span className="font-medium">Create API Key:</span>
//             <ul className="list-disc pl-6 mt-1 text-gray-600">
//               <li>Go to "APIs & Services" > "Credentials"</li>
//               <li>Click "Create Credentials" > "API Key"</li>
//               <li>Your new API key will be displayed</li>
//             </ul>
//           </li>
//           <li className="text-gray-700">
//             <span className="font-medium">Restrict Your API Key (Recommended):</span>
//             <ul className="list-disc pl-6 mt-1 text-gray-600">
//               <li>Click on the newly created API key</li>
//               <li>Under "Application restrictions", select "HTTP referrers"</li>
//               <li>Add your website domains</li>
//               <li>Under "API restrictions", restrict the key to the APIs you enabled</li>
//             </ul>
//           </li>
//         </ol>
//       </div>

//       <div className="mb-6">
//         <h2 className="text-xl font-semibold text-gray-800 mb-3">Adding the API Key to Your Project</h2>
//         <div className="bg-gray-800 text-green-400 p-4 rounded-md overflow-x-auto mb-3">
//           <pre className="whitespace-pre-wrap">
//             <code>{`<!-- Add this to your HTML file (index.html) -->
// <script 
//   src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=drawing,places" 
//   async 
//   defer
// ></script>`}</code>
//           </pre>
//         </div>
//         <p className="text-gray-700">
//           Replace <code className="bg-gray-100 px-1 py-0.5 rounded">YOUR_API_KEY</code> with the actual API key you
//           generated.
//         </p>
//       </div>

//       <div className="mb-6">
//         <h2 className="text-xl font-semibold text-gray-800 mb-3">Environment Variables (Recommended)</h2>
//         <p className="text-gray-700 mb-3">For better security, store your API key in an environment variable:</p>
//         <div className="bg-gray-800 text-green-400 p-4 rounded-md overflow-x-auto mb-3">
//           <pre className="whitespace-pre-wrap">
        
//           </pre>
//         </div>
//       </div>

//       <div className="flex justify-between items-center pt-4 border-t border-gray-200">
//         <a
//           href="https://developers.google.com/maps/documentation/javascript/overview"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-primary-900 hover:text-primary-700 flex items-center"
//         >
//           <FaExternalLinkAlt className="mr-2" /> Google Maps JavaScript API Documentation
//         </a>
//         <a
//           href="https://console.cloud.google.com/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-primary-900 hover:text-primary-700 flex items-center"
//         >
//           <FaExternalLinkAlt className="mr-2" /> Google Cloud Console
//         </a>
//       </div>
//     </div>
//   )
// }

// export default GoogleMapsGuide



import React from 'react'

const GoogleMapsGuide = () => {
  return (
    <div>GoogleMapsGuide</div>
  )
}

export default GoogleMapsGuide