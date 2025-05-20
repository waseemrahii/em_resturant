

// import { useState, useEffect, useRef, useCallback } from "react"
// import { FaDrawPolygon, FaTrash, FaInfoCircle, FaHandPointUp, FaMapMarkerAlt, FaSearch } from "react-icons/fa"

// const GoogleMapComponent = ({ initialCoordinates = [], onPolygonComplete, readOnly = false }) => {
//   const mapRef = useRef(null)
//   const searchBoxRef = useRef(null)
//   const [map, setMap] = useState(null)
//   const [drawingManager, setDrawingManager] = useState(null)
//   const [polygon, setPolygon] = useState(null)
//   const [isDrawing, setIsDrawing] = useState(false)
//   const [error, setError] = useState("")
//   const [mapLoaded, setMapLoaded] = useState(false)
//   const [searchBox, setSearchBox] = useState(null)
//   const [searchValue, setSearchValue] = useState("")
//   const [currentLocation, setCurrentLocation] = useState(null)
//   const [isLoadingLocation, setIsLoadingLocation] = useState(false)

//   // Check if Google Maps API is loaded
//   useEffect(() => {
//     const checkGoogleMapsLoaded = () => {
//       if (window.google && window.google.maps) {
//         setMapLoaded(true)
//       } else {
//         console.log("Google Maps not yet loaded, retrying...")
//         setTimeout(checkGoogleMapsLoaded, 500)
//       }
//     }

//     checkGoogleMapsLoaded()

//     return () => {
//       // Cleanup
//     }
//   }, [])

//   // Initialize the map
//   useEffect(() => {
//     if (!mapLoaded) return

//     try {
//       // Default to Karachi, Pakistan
//       const defaultCenter = { lat: 24.8607, lng: 67.0011 }

//       const mapOptions = {
//         center: defaultCenter,
//         zoom: 12,
//         mapTypeId: window.google.maps.MapTypeId.ROADMAP,
//         mapTypeControl: true,
//         streetViewControl: false,
//         fullscreenControl: true,
//       }

//       const newMap = new window.google.maps.Map(mapRef.current, mapOptions)
//       setMap(newMap)
//       setError("")

//       // Initialize search box
//       if (searchBoxRef.current) {
//         const newSearchBox = new window.google.maps.places.SearchBox(searchBoxRef.current)
//         setSearchBox(newSearchBox)

//         // Listen for the event fired when the user selects a prediction
//         newSearchBox.addListener("places_changed", () => {
//           const places = newSearchBox.getPlaces()

//           if (places.length === 0) {
//             return
//           }

//           // For each place, get the location.
//           const bounds = new window.google.maps.LatLngBounds()
//           places.forEach((place) => {
//             if (!place.geometry || !place.geometry.location) {
//               console.log("Returned place contains no geometry")
//               return
//             }

//             // Center map on the selected place
//             newMap.setCenter(place.geometry.location)
//             newMap.setZoom(15)

//             if (place.geometry.viewport) {
//               bounds.union(place.geometry.viewport)
//             } else {
//               bounds.extend(place.geometry.location)
//             }
//           })
//           newMap.fitBounds(bounds)
//         })
//       }
//     } catch (err) {
//       console.error("Error initializing map:", err)
//       setError(`Error initializing map: ${err.message}`)
//     }

//     return () => {
//       if (drawingManager) {
//         drawingManager.setMap(null)
//       }
//       if (polygon) {
//         polygon.setMap(null)
//       }
//     }
//   }, [mapLoaded])

//   // Initialize drawing manager
//   useEffect(() => {
//     if (!map || !mapLoaded || readOnly) return

//     try {
//       const newDrawingManager = new window.google.maps.drawing.DrawingManager({
//         drawingMode: null,
//         drawingControl: false,
//         polygonOptions: {
//           fillColor: "#FF6B6B",
//           fillOpacity: 0.3,
//           strokeWeight: 2,
//           strokeColor: "#FF6B6B",
//           clickable: true,
//           editable: true,
//           zIndex: 1,
//         },
//       })

//       newDrawingManager.setMap(map)
//       setDrawingManager(newDrawingManager)

//       window.google.maps.event.addListener(newDrawingManager, "polygoncomplete", (poly) => {
//         setIsDrawing(false)
//         setPolygon(poly)

//         const path = poly.getPath()
//         const coordinates = []
//         for (let i = 0; i < path.getLength(); i++) {
//           const point = path.getAt(i)
//           coordinates.push({ lat: point.lat(), lng: point.lng() })
//         }

//         if (coordinates.length < 3) {
//           setError("At least 3 points are required to define a zone")
//           return
//         } else {
//           setError("")
//         }

//         if (onPolygonComplete) {
//           onPolygonComplete(coordinates)
//         }

//         window.google.maps.event.addListener(path, "set_at", () => {
//           updateCoordinates(poly)
//         })
//         window.google.maps.event.addListener(path, "insert_at", () => {
//           updateCoordinates(poly)
//         })
//         window.google.maps.event.addListener(path, "remove_at", () => {
//           updateCoordinates(poly)
//         })

//         newDrawingManager.setDrawingMode(null)
//       })
//     } catch (err) {
//       console.error("Error initializing drawing manager:", err)
//       setError(`Error initializing drawing tools: ${err.message}`)
//     }
//   }, [map, onPolygonComplete, readOnly, mapLoaded])

//   // Display initial coordinates
//   useEffect(() => {
//     if (!map || !mapLoaded || initialCoordinates.length < 3) return

//     try {
//       if (polygon) {
//         polygon.setMap(null)
//       }

//       const polygonPath = initialCoordinates.map((coord) => ({
//         lat: Number.parseFloat(coord.lat),
//         lng: Number.parseFloat(coord.lng),
//       }))

//       const newPolygon = new window.google.maps.Polygon({
//         paths: polygonPath,
//         fillColor: "#FF6B6B",
//         fillOpacity: 0.3,
//         strokeWeight: 2,
//         strokeColor: "#FF6B6B",
//         clickable: true,
//         editable: !readOnly,
//         zIndex: 1,
//       })

//       newPolygon.setMap(map)
//       setPolygon(newPolygon)

//       const bounds = new window.google.maps.LatLngBounds()
//       polygonPath.forEach((coord) => {
//         bounds.extend(new window.google.maps.LatLng(coord.lat, coord.lng))
//       })
//       map.fitBounds(bounds)

//       if (!readOnly) {
//         const path = newPolygon.getPath()
//         window.google.maps.event.addListener(path, "set_at", () => {
//           updateCoordinates(newPolygon)
//         })
//         window.google.maps.event.addListener(path, "insert_at", () => {
//           updateCoordinates(newPolygon)
//         })
//         window.google.maps.event.addListener(path, "remove_at", () => {
//           updateCoordinates(newPolygon)
//         })
//       }
//     } catch (err) {
//       console.error("Error displaying polygon:", err)
//       setError(`Error displaying zone area: ${err.message}`)
//     }
//   }, [map, initialCoordinates, readOnly, mapLoaded])

//   const updateCoordinates = useCallback(
//     (poly) => {
//       if (!poly) return

//       try {
//         const path = poly.getPath()
//         const coordinates = []
//         for (let i = 0; i < path.getLength(); i++) {
//           const point = path.getAt(i)
//           coordinates.push({ lat: point.lat(), lng: point.lng() })
//         }

//         if (coordinates.length < 3) {
//           setError("At least 3 points are required to define a zone")
//           return
//         } else {
//           setError("")
//         }

//         if (onPolygonComplete) {
//           onPolygonComplete(coordinates)
//         }
//       } catch (err) {
//         console.error("Error updating coordinates:", err)
//         setError(`Error updating zone area: ${err.message}`)
//       }
//     },
//     [onPolygonComplete],
//   )

//   const startDrawing = () => {
//     if (!drawingManager || !mapLoaded) return

//     try {
//       if (polygon) {
//         polygon.setMap(null)
//         setPolygon(null)
//       }

//       setIsDrawing(true)
//       drawingManager.setDrawingMode(window.google.maps.drawing.OverlayType.POLYGON)
//     } catch (err) {
//       console.error("Error starting drawing:", err)
//       setError(`Error starting drawing mode: ${err.message}`)
//     }
//   }

//   const clearPolygon = () => {
//     if (!mapLoaded) return

//     try {
//       if (polygon) {
//         polygon.setMap(null)
//         setPolygon(null)
//       }
//       setError("")
//       if (onPolygonComplete) {
//         onPolygonComplete([])
//       }
//     } catch (err) {
//       console.error("Error clearing polygon:", err)
//       setError(`Error clearing zone area: ${err.message}`)
//     }
//   }

//   const handleSearchChange = (e) => {
//     setSearchValue(e.target.value)
//   }

//   const getCurrentLocation = () => {
//     if (!mapLoaded || !map) return

//     setIsLoadingLocation(true)

//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const pos = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           }

//           setCurrentLocation(pos)
//           map.setCenter(pos)
//           map.setZoom(15)

//           // Add a marker for current location
//           new window.google.maps.Marker({
//             position: pos,
//             map: map,
//             title: "Your Location",
//             icon: {
//               path: window.google.maps.SymbolPath.CIRCLE,
//               scale: 10,
//               fillColor: "#4285F4",
//               fillOpacity: 1,
//               strokeColor: "#ffffff",
//               strokeWeight: 2,
//             },
//           })

//           setIsLoadingLocation(false)
//         },
//         (error) => {
//           console.error("Error getting current location:", error)
//           setError(`Error getting your location: ${error.message}`)
//           setIsLoadingLocation(false)
//         },
//       )
//     } else {
//       setError("Geolocation is not supported by this browser")
//       setIsLoadingLocation(false)
//     }
//   }

//   return (
//     <div className="relative">
//       {/* Search Box */}
//       <div className="absolute top-4 left-4 z-10 w-64 md:w-80">
//         <div className="relative">
//           <input
//             ref={searchBoxRef}
//             type="text"
//             value={searchValue}
//             onChange={handleSearchChange}
//             placeholder="Search for a location..."
//             className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//           />
//           <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//         </div>
//       </div>

//       {/* Current Location Button */}
//       <button
//         type="button"
//         onClick={getCurrentLocation}
//         disabled={isLoadingLocation}
//         className="absolute top-4 right-20 z-10 bg-white p-2 rounded-md shadow-sm border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500"
//         title="Get Current Location"
//       >
//         {isLoadingLocation ? (
//           <div className="animate-spin h-5 w-5 border-2 border-primary-500 border-t-transparent rounded-full"></div>
//         ) : (
//           <FaMapMarkerAlt className="text-primary-500" />
//         )}
//       </button>

//       {/* Map Container */}
//       <div ref={mapRef} className="w-full h-[400px] rounded-lg border border-gray-300"></div>

//       {error && (
//         <div className="absolute bottom-4 left-4 right-4 bg-red-50 text-red-700 p-3 rounded-lg border border-red-200 flex items-center">
//           <FaInfoCircle className="mr-2 flex-shrink-0" />
//           {error}
//         </div>
//       )}

//       {!readOnly && mapLoaded && (
//         <div className="absolute top-4 right-4 flex flex-col gap-2">
//           <button
//             type="button"
//             onClick={startDrawing}
//             disabled={isDrawing}
//             className={`p-2 rounded-full ${
//               isDrawing
//                 ? "bg-gray-300 text-gray-600"
//                 : "bg-primary-900 text-white hover:bg-primary-800 transition-colors"
//             }`}
//             title="Draw Zone"
//           >
//             <FaDrawPolygon size={20} />
//           </button>
//           <button
//             type="button"
//             onClick={clearPolygon}
//             disabled={!polygon}
//             className={`p-2 rounded-full ${
//               !polygon ? "bg-gray-300 text-gray-600" : "bg-red-600 text-white hover:bg-red-700 transition-colors"
//             }`}
//             title="Clear Zone"
//           >
//             <FaTrash size={20} />
//           </button>
//         </div>
//       )}

//       {!mapLoaded && (
//         <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 rounded-lg">
//           <div className="text-center p-4">
//             <div className="animate-spin h-10 w-10 border-4 border-primary-500 border-t-transparent rounded-full mx-auto mb-2"></div>
//             <p className="text-gray-700 font-medium">Loading Google Maps...</p>
//             <p className="text-sm text-gray-500 mt-1">
//               If the map doesn't load, please check your API key and internet connection.
//             </p>
//           </div>
//         </div>
//       )}

//       {isDrawing && mapLoaded && (
//         <div className="absolute bottom-4 left-4 right-4 bg-white p-3 rounded-lg shadow-lg border border-primary-200">
//           <p className="text-primary-900 font-medium flex items-center">
//             <FaHandPointUp className="mr-2 text-primary-700" />
//             Click on the map to create points. Complete the polygon by connecting to the first point.
//           </p>
//         </div>
//       )}
//     </div>
//   )
// }

// export default GoogleMapComponent

"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { FaDrawPolygon, FaTrash, FaInfoCircle, FaHandPointUp, FaMapMarkerAlt, FaSearch } from "react-icons/fa"

const GoogleMapComponent = ({
  initialCoordinates = [],
  onPolygonComplete,
  readOnly = false,
  onLocationSelect = null,
  selectedLocation = null,
}) => {
  const mapRef = useRef(null)
  const searchBoxRef = useRef(null)
  const [map, setMap] = useState(null)
  const [drawingManager, setDrawingManager] = useState(null)
  const [polygon, setPolygon] = useState(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [error, setError] = useState("")
  const [mapLoaded, setMapLoaded] = useState(false)
  const [searchBox, setSearchBox] = useState(null)
  const [searchValue, setSearchValue] = useState("")
  const [currentLocation, setCurrentLocation] = useState(null)
  const [isLoadingLocation, setIsLoadingLocation] = useState(false)
  const [marker, setMarker] = useState(null)
  const [polygons, setPolygons] = useState([])

  // Check if Google Maps API is loaded
  useEffect(() => {
    const checkGoogleMapsLoaded = () => {
      if (window.google && window.google.maps) {
        setMapLoaded(true)
      } else {
        console.log("Google Maps not yet loaded, retrying...")
        setTimeout(checkGoogleMapsLoaded, 500)
      }
    }

    checkGoogleMapsLoaded()

    return () => {
      // Cleanup
    }
  }, [])

  // Initialize the map
  useEffect(() => {
    if (!mapLoaded) return

    try {
      // Default to Karachi, Pakistan
      const defaultCenter = { lat: 33.6844, lng: 73.0479 } // Islamabad coordinates

      const mapOptions = {
        center: defaultCenter,
        zoom: 12,
        mapTypeId: window.google.maps.MapTypeId.ROADMAP,
        mapTypeControl: true,
        streetViewControl: false,
        fullscreenControl: true,
      }

      const newMap = new window.google.maps.Map(mapRef.current, mapOptions)
      setMap(newMap)
      setError("")

      // Initialize search box
      if (searchBoxRef.current) {
        const newSearchBox = new window.google.maps.places.SearchBox(searchBoxRef.current)
        setSearchBox(newSearchBox)

        // Listen for the event fired when the user selects a prediction
        newSearchBox.addListener("places_changed", () => {
          const places = newSearchBox.getPlaces()

          if (places.length === 0) {
            return
          }

          // For each place, get the location.
          const bounds = new window.google.maps.LatLngBounds()
          places.forEach((place) => {
            if (!place.geometry || !place.geometry.location) {
              console.log("Returned place contains no geometry")
              return
            }

            // Center map on the selected place
            newMap.setCenter(place.geometry.location)
            newMap.setZoom(15)

            if (place.geometry.viewport) {
              bounds.union(place.geometry.viewport)
            } else {
              bounds.extend(place.geometry.location)
            }
          })
          newMap.fitBounds(bounds)
        })
      }

      // Add click listener for location selection if needed
      if (onLocationSelect) {
        newMap.addListener("click", (e) => {
          const clickedLocation = {
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
          }

          console.log("Map clicked at:", clickedLocation)

          // Update marker
          if (marker) {
            marker.setMap(null)
          }

          const newMarker = new window.google.maps.Marker({
            position: clickedLocation,
            map: newMap,
            animation: window.google.maps.Animation.DROP,
            title: "Selected Location",
          })

          setMarker(newMarker)

          // Call the callback
          if (onLocationSelect) {
            onLocationSelect(clickedLocation)
          }
        })
      }
    } catch (err) {
      console.error("Error initializing map:", err)
      setError(`Error initializing map: ${err.message}`)
    }

    return () => {
      if (drawingManager) {
        drawingManager.setMap(null)
      }
      if (polygon) {
        polygon.setMap(null)
      }
      if (marker) {
        marker.setMap(null)
      }
      // Clear all polygons
      polygons.forEach((poly) => {
        if (poly) poly.setMap(null)
      })
    }
  }, [mapLoaded, onLocationSelect])

  // Initialize drawing manager
  useEffect(() => {
    if (!map || !mapLoaded || readOnly) return

    try {
      const newDrawingManager = new window.google.maps.drawing.DrawingManager({
        drawingMode: null,
        drawingControl: false,
        polygonOptions: {
          fillColor: "#FF6B6B",
          fillOpacity: 0.3,
          strokeWeight: 2,
          strokeColor: "#FF6B6B",
          clickable: true,
          editable: true,
          zIndex: 1,
        },
      })

      newDrawingManager.setMap(map)
      setDrawingManager(newDrawingManager)

      window.google.maps.event.addListener(newDrawingManager, "polygoncomplete", (poly) => {
        setIsDrawing(false)
        setPolygon(poly)

        const path = poly.getPath()
        const coordinates = []
        for (let i = 0; i < path.getLength(); i++) {
          const point = path.getAt(i)
          coordinates.push({ lat: point.lat(), lng: point.lng() })
        }

        if (coordinates.length < 3) {
          setError("At least 3 points are required to define a zone")
          return
        } else {
          setError("")
        }

        if (onPolygonComplete) {
          onPolygonComplete(coordinates)
        }

        window.google.maps.event.addListener(path, "set_at", () => {
          updateCoordinates(poly)
        })
        window.google.maps.event.addListener(path, "insert_at", () => {
          updateCoordinates(poly)
        })
        window.google.maps.event.addListener(path, "remove_at", () => {
          updateCoordinates(poly)
        })

        newDrawingManager.setDrawingMode(null)
      })
    } catch (err) {
      console.error("Error initializing drawing manager:", err)
      setError(`Error initializing drawing tools: ${err.message}`)
    }
  }, [map, onPolygonComplete, readOnly, mapLoaded])

  // Display initial coordinates
  useEffect(() => {
    if (!map || !mapLoaded) return

    try {
      // Clear existing polygons
      polygons.forEach((poly) => {
        if (poly) poly.setMap(null)
      })

      const newPolygons = []

      // Check if initialCoordinates is an array of coordinates (single polygon)
      if (initialCoordinates && initialCoordinates.length > 0) {
        console.log("Initial coordinates:", initialCoordinates)

        // If it's a single polygon with at least 3 points
        if (initialCoordinates.length >= 3) {
          let polygonPath

          // Check if the coordinates are in [lng, lat] format (GeoJSON) or {lat, lng} format
          if (Array.isArray(initialCoordinates[0])) {
            // Format: [[lng, lat], [lng, lat], ...]
            polygonPath = initialCoordinates.map((coord) => ({
              lat: Number.parseFloat(coord[1]),
              lng: Number.parseFloat(coord[0]),
            }))
          } else if (initialCoordinates[0].lat !== undefined) {
            // Format: [{lat, lng}, {lat, lng}, ...]
            polygonPath = initialCoordinates
          }

          if (polygonPath && polygonPath.length >= 3) {
            const newPolygon = new window.google.maps.Polygon({
              paths: polygonPath,
              fillColor: "#FF6B6B",
              fillOpacity: 0.3,
              strokeWeight: 2,
              strokeColor: "#FF6B6B",
              clickable: true,
              editable: !readOnly,
              zIndex: 1,
            })

            newPolygon.setMap(map)
            newPolygons.push(newPolygon)

            // Set bounds to fit the polygon
            const bounds = new window.google.maps.LatLngBounds()
            polygonPath.forEach((coord) => {
              bounds.extend(new window.google.maps.LatLng(coord.lat, coord.lng))
            })
            map.fitBounds(bounds)
          }
        }
      }

      setPolygons(newPolygons)
    } catch (err) {
      console.error("Error displaying polygon:", err)
      setError(`Error displaying zone area: ${err.message}`)
    }
  }, [map, initialCoordinates, readOnly, mapLoaded])

  // Update marker when selectedLocation changes
  useEffect(() => {
    if (!map || !mapLoaded || !selectedLocation) return

    try {
      // Clear existing marker
      if (marker) {
        marker.setMap(null)
      }

      // Create new marker
      const newMarker = new window.google.maps.Marker({
        position: selectedLocation,
        map: map,
        animation: window.google.maps.Animation.DROP,
        title: "Selected Location",
      })

      setMarker(newMarker)

      // Center map on the marker
      map.setCenter(selectedLocation)
      map.setZoom(15)
    } catch (err) {
      console.error("Error updating marker:", err)
    }
  }, [selectedLocation, map, mapLoaded])

  const updateCoordinates = useCallback(
    (poly) => {
      if (!poly) return

      try {
        const path = poly.getPath()
        const coordinates = []
        for (let i = 0; i < path.getLength(); i++) {
          const point = path.getAt(i)
          coordinates.push({ lat: point.lat(), lng: point.lng() })
        }

        if (coordinates.length < 3) {
          setError("At least 3 points are required to define a zone")
          return
        } else {
          setError("")
        }

        if (onPolygonComplete) {
          onPolygonComplete(coordinates)
        }
      } catch (err) {
        console.error("Error updating coordinates:", err)
        setError(`Error updating zone area: ${err.message}`)
      }
    },
    [onPolygonComplete],
  )

  const startDrawing = () => {
    if (!drawingManager || !mapLoaded) return

    try {
      if (polygon) {
        polygon.setMap(null)
        setPolygon(null)
      }

      setIsDrawing(true)
      drawingManager.setDrawingMode(window.google.maps.drawing.OverlayType.POLYGON)
    } catch (err) {
      console.error("Error starting drawing:", err)
      setError(`Error starting drawing mode: ${err.message}`)
    }
  }

  const clearPolygon = () => {
    if (!mapLoaded) return

    try {
      if (polygon) {
        polygon.setMap(null)
        setPolygon(null)
      }
      setError("")
      if (onPolygonComplete) {
        onPolygonComplete([])
      }
    } catch (err) {
      console.error("Error clearing polygon:", err)
      setError(`Error clearing zone area: ${err.message}`)
    }
  }

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value)
  }

  const getCurrentLocation = () => {
    if (!mapLoaded || !map) return

    setIsLoadingLocation(true)

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }

          setCurrentLocation(pos)
          map.setCenter(pos)
          map.setZoom(15)

          // Add a marker for current location
          if (marker) {
            marker.setMap(null)
          }

          const newMarker = new window.google.maps.Marker({
            position: pos,
            map: map,
            title: "Your Location",
            icon: {
              path: window.google.maps.SymbolPath.CIRCLE,
              scale: 10,
              fillColor: "#4285F4",
              fillOpacity: 1,
              strokeColor: "#ffffff",
              strokeWeight: 2,
            },
          })

          setMarker(newMarker)

          // If location selection is enabled, call the callback
          if (onLocationSelect) {
            onLocationSelect(pos)
          }

          setIsLoadingLocation(false)
        },
        (error) => {
          console.error("Error getting current location:", error)
          setError(`Error getting your location: ${error.message}`)
          setIsLoadingLocation(false)
        },
      )
    } else {
      setError("Geolocation is not supported by this browser")
      setIsLoadingLocation(false)
    }
  }

  return (
    <div className="relative">
      {/* Search Box */}
      <div className="absolute top-4 left-4 z-10 w-64 md:w-80">
        <div className="relative">
          <input
            ref={searchBoxRef}
            type="text"
            value={searchValue}
            onChange={handleSearchChange}
            placeholder="Search for a location..."
            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Current Location Button */}
      <button
        type="button"
        onClick={getCurrentLocation}
        disabled={isLoadingLocation}
        className="absolute top-4 right-20 z-10 bg-white p-2 rounded-md shadow-sm border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500"
        title="Get Current Location"
      >
        {isLoadingLocation ? (
          <div className="animate-spin h-5 w-5 border-2 border-primary-500 border-t-transparent rounded-full"></div>
        ) : (
          <FaMapMarkerAlt className="text-primary-500" />
        )}
      </button>

      {/* Map Container */}
      <div ref={mapRef} className="w-full h-[400px] rounded-lg border border-gray-300"></div>

      {error && (
        <div className="absolute bottom-4 left-4 right-4 bg-red-50 text-red-700 p-3 rounded-lg border border-red-200 flex items-center">
          <FaInfoCircle className="mr-2 flex-shrink-0" />
          {error}
        </div>
      )}

      {!readOnly && mapLoaded && (
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button
            type="button"
            onClick={startDrawing}
            disabled={isDrawing}
            className={`p-2 rounded-full ${
              isDrawing
                ? "bg-gray-300 text-gray-600"
                : "bg-primary-900 text-white hover:bg-primary-800 transition-colors"
            }`}
            title="Draw Zone"
          >
            <FaDrawPolygon size={20} />
          </button>
          <button
            type="button"
            onClick={clearPolygon}
            disabled={!polygon}
            className={`p-2 rounded-full ${
              !polygon ? "bg-gray-300 text-gray-600" : "bg-red-600 text-white hover:bg-red-700 transition-colors"
            }`}
            title="Clear Zone"
          >
            <FaTrash size={20} />
          </button>
        </div>
      )}

      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 rounded-lg">
          <div className="text-center p-4">
            <div className="animate-spin h-10 w-10 border-4 border-primary-500 border-t-transparent rounded-full mx-auto mb-2"></div>
            <p className="text-gray-700 font-medium">Loading Google Maps...</p>
            <p className="text-sm text-gray-500 mt-1">
              If the map doesn't load, please check your API key and internet connection.
            </p>
          </div>
        </div>
      )}

      {isDrawing && mapLoaded && (
        <div className="absolute bottom-4 left-4 right-4 bg-white p-3 rounded-lg shadow-lg border border-primary-200">
          <p className="text-primary-900 font-medium flex items-center">
            <FaHandPointUp className="mr-2 text-primary-700" />
            Click on the map to create points. Complete the polygon by connecting to the first point.
          </p>
        </div>
      )}

      {onLocationSelect && mapLoaded && !isDrawing && (
        <div className="absolute bottom-4 left-4 right-4 bg-white p-3 rounded-lg shadow-lg border border-primary-200">
          <p className="text-primary-900 font-medium flex items-center">
            <FaHandPointUp className="mr-2 text-primary-700" />
            Click on the map to select the restaurant location. Make sure it's within a zone boundary.
          </p>
        </div>
      )}
    </div>
  )
}

export default GoogleMapComponent
