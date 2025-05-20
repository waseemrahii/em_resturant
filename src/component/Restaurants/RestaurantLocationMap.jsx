"use client"

import { useState, useEffect, useRef } from "react"
import { FaMapMarkerAlt, FaSearch, FaInfoCircle } from "react-icons/fa"

const RestaurantLocationMap = ({ initialLocation, onLocationChange, zones, selectedZoneId }) => {
  const mapRef = useRef(null)
  const searchBoxRef = useRef(null)
  const [map, setMap] = useState(null)
  const [marker, setMarker] = useState(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [isLoadingLocation, setIsLoadingLocation] = useState(false)
  const [zonePolygons, setZonePolygons] = useState([])
  const [error, setError] = useState("")
  const [isInZone, setIsInZone] = useState(true)

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
      const mapOptions = {
        center: initialLocation,
        zoom: 15,
        mapTypeId: window.google.maps.MapTypeId.ROADMAP,
        mapTypeControl: true,
        streetViewControl: false,
        fullscreenControl: true,
      }

      const newMap = new window.google.maps.Map(mapRef.current, mapOptions)
      setMap(newMap)

      // Add marker for restaurant location
      const newMarker = new window.google.maps.Marker({
        position: initialLocation,
        map: newMap,
        draggable: true,
        title: "Restaurant Location",
        animation: window.google.maps.Animation.DROP,
      })
      setMarker(newMarker)

      // Add event listener for marker drag end
      window.google.maps.event.addListener(newMarker, "dragend", () => {
        const position = newMarker.getPosition()
        const newLocation = {
          lat: position.lat(),
          lng: position.lng(),
        }
        onLocationChange(newLocation)
        checkIfInSelectedZone(newLocation)
      })

      // Initialize search box
      if (searchBoxRef.current) {
        const newSearchBox = new window.google.maps.places.SearchBox(searchBoxRef.current)

        // Bias the SearchBox results towards current map's viewport
        newMap.addListener("bounds_changed", () => {
          newSearchBox.setBounds(newMap.getBounds())
        })

        // Listen for the event fired when the user selects a prediction
        newSearchBox.addListener("places_changed", () => {
          const places = newSearchBox.getPlaces()

          if (places.length === 0) {
            return
          }

          // For each place, get the location.
          places.forEach((place) => {
            if (!place.geometry || !place.geometry.location) {
              console.log("Returned place contains no geometry")
              return
            }

            // Update marker position
            const newLocation = {
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
            }
            newMarker.setPosition(newLocation)
            onLocationChange(newLocation)
            checkIfInSelectedZone(newLocation)

            // Center map on the selected place
            newMap.setCenter(place.geometry.location)
            newMap.setZoom(15)
          })
        })
      }

      // Add click listener to map
      window.google.maps.event.addListener(newMap, "click", (event) => {
        const newLocation = {
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
        }
        newMarker.setPosition(newLocation)
        onLocationChange(newLocation)
        checkIfInSelectedZone(newLocation)
      })

      setError("")
    } catch (err) {
      console.error("Error initializing map:", err)
      setError(`Error initializing map: ${err.message}`)
    }
  }, [mapLoaded, initialLocation, onLocationChange])

  // Draw zone polygons when zones change or selected zone changes
  useEffect(() => {
    if (!mapLoaded || !map) return

    // Clear existing polygons
    zonePolygons.forEach((polygon) => {
      polygon.setMap(null)
    })
    setZonePolygons([])

    // Mock zone coordinates for demonstration
    const mockZoneCoordinates = {
      1: [
        // Karachi Central
        { lat: 24.8607, lng: 67.0011 },
        { lat: 24.9, lng: 67.05 },
        { lat: 24.92, lng: 67.03 },
        { lat: 24.88, lng: 66.98 },
      ],
      2: [
        // Lahore Downtown
        { lat: 31.5204, lng: 74.3587 },
        { lat: 31.55, lng: 74.4 },
        { lat: 31.57, lng: 74.38 },
        { lat: 31.54, lng: 74.32 },
      ],
      3: [
        // Islamabad F-Sectors
        { lat: 33.7294, lng: 73.0931 },
        { lat: 33.75, lng: 73.12 },
        { lat: 33.77, lng: 73.1 },
        { lat: 33.74, lng: 73.07 },
      ],
    }

    // Draw all zones with different colors
    const newPolygons = []
    zones.forEach((zone) => {
      if (mockZoneCoordinates[zone.id]) {
        const isSelected = zone.id.toString() === selectedZoneId.toString()

        const polygon = new window.google.maps.Polygon({
          paths: mockZoneCoordinates[zone.id],
          strokeColor: isSelected ? "#FF0000" : "#0000FF",
          strokeOpacity: 0.8,
          strokeWeight: isSelected ? 2 : 1,
          fillColor: isSelected ? "#FF0000" : "#0000FF",
          fillOpacity: isSelected ? 0.2 : 0.1,
          map: map,
          zIndex: isSelected ? 2 : 1,
        })

        // Add info window for zone name
        const infoWindow = new window.google.maps.InfoWindow({
          content: `<div><strong>${zone.name}</strong></div>`,
        })

        // Add click listener to polygon
        window.google.maps.event.addListener(polygon, "click", (event) => {
          infoWindow.setPosition(event.latLng)
          infoWindow.open(map)
        })

        newPolygons.push(polygon)
      }
    })

    setZonePolygons(newPolygons)

    // Check if current marker position is in selected zone
    if (marker) {
      checkIfInSelectedZone({
        lat: marker.getPosition().lat(),
        lng: marker.getPosition().lng(),
      })
    }
  }, [mapLoaded, map, zones, selectedZoneId, marker])

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value)
  }

  const getCurrentLocation = () => {
    if (!mapLoaded || !map || !marker) return

    setIsLoadingLocation(true)

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }

          marker.setPosition(pos)
          map.setCenter(pos)
          map.setZoom(15)
          onLocationChange(pos)
          checkIfInSelectedZone(pos)

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

  const checkIfInSelectedZone = (location) => {
    if (!selectedZoneId || !mapLoaded) {
      setIsInZone(true)
      return
    }

    // Mock zone coordinates for demonstration
    const mockZoneCoordinates = {
      1: [
        // Karachi Central
        { lat: 24.8607, lng: 67.0011 },
        { lat: 24.9, lng: 67.05 },
        { lat: 24.92, lng: 67.03 },
        { lat: 24.88, lng: 66.98 },
      ],
      2: [
        // Lahore Downtown
        { lat: 31.5204, lng: 74.3587 },
        { lat: 31.55, lng: 74.4 },
        { lat: 31.57, lng: 74.38 },
        { lat: 31.54, lng: 74.32 },
      ],
      3: [
        // Islamabad F-Sectors
        { lat: 33.7294, lng: 73.0931 },
        { lat: 33.75, lng: 73.12 },
        { lat: 33.77, lng: 73.1 },
        { lat: 33.74, lng: 73.07 },
      ],
    }

    const zoneCoords = mockZoneCoordinates[selectedZoneId]
    if (!zoneCoords) {
      setIsInZone(true)
      return
    }

    // Check if point is in polygon using Google Maps contains method
    const polygon = new window.google.maps.Polygon({
      paths: zoneCoords,
    })

    const isInZone = window.google.maps.geometry.poly.containsLocation(
      new window.google.maps.LatLng(location.lat, location.lng),
      polygon,
    )

    setIsInZone(isInZone)
  }

  return (
    <div className="relative h-full">
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
        className="absolute top-4 right-4 z-10 bg-white p-2 rounded-md shadow-sm border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500"
        title="Get Current Location"
      >
        {isLoadingLocation ? (
          <div className="animate-spin h-5 w-5 border-2 border-primary-500 border-t-transparent rounded-full"></div>
        ) : (
          <FaMapMarkerAlt className="text-primary-500" />
        )}
      </button>

      {/* Map Container */}
      <div ref={mapRef} className="w-full h-full rounded-lg"></div>

      {/* Zone Warning */}
      {!isInZone && selectedZoneId && (
        <div className="absolute bottom-4 left-4 right-4 bg-yellow-50 text-yellow-700 p-3 rounded-lg border border-yellow-200 flex items-center">
          <FaInfoCircle className="mr-2 flex-shrink-0" />
          <div>
            <p className="font-medium">Warning: Location is outside the selected zone</p>
            <p className="text-sm">
              The restaurant location should be within the selected zone boundary (highlighted in red).
            </p>
          </div>
        </div>
      )}

      {error && (
        <div className="absolute bottom-4 left-4 right-4 bg-red-50 text-red-700 p-3 rounded-lg border border-red-200 flex items-center">
          <FaInfoCircle className="mr-2 flex-shrink-0" />
          {error}
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
    </div>
  )
}

export default RestaurantLocationMap
