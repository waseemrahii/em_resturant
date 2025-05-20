"use client"

import { useState, useEffect, useRef } from "react"
import { useGetNearbyDriversQuery } from "../../redux/services/driverService"
import { FaSearch } from "react-icons/fa"
import TitleHead from "../Header/TitleHead"

const DriverMap = () => {
  // State
  const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 })
  const [searchRadius, setSearchRadius] = useState(5)
  const [userLocation, setUserLocation] = useState(null)
  const mapRef = useRef(null)
  const markersRef = useRef([])
  
  // Get nearby drivers
  const { data: driversData, isLoading, refetch } = useGetNearbyDriversQuery({
    latitude: mapCenter.lat,
    longitude: mapCenter.lng,
    distance: searchRadius,
  }, {
    skip: mapCenter.lat === 0 && mapCenter.lng === 0,
    pollingInterval: 30000, // Poll every 30 seconds
  })
  
  // Get user's location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setMapCenter({ lat: latitude, lng: longitude })
          setUserLocation({ lat: latitude, lng: longitude })
        },
        (error) => {
          console.error("Error getting location:", error)
          // Default to a fallback location
          setMapCenter({ lat: 40.7128, lng: -74.0060 }) // New York
        }
      )
    } else {
      console.error("Geolocation is not supported by this browser")
      setMapCenter({ lat: 40.7128, lng: -74.0060 }) // New York
    }
  }, [])
  
  // Initialize map
  useEffect(() => {
    if (window.google && mapCenter.lat !== 0 && mapCenter.lng !== 0) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: mapCenter,
        zoom: 13,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
          },
        ],
      })
      
      // Add user marker
      if (userLocation) {
        new window.google.maps.Marker({
          position: userLocation,
          map,
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: "#4F46E5",
            fillOpacity: 1,
            strokeColor: "#FFFFFF",
            strokeWeight: 2,
          },
          title: "Your Location",
        })
        
        // Add circle for search radius
        new window.google.maps.Circle({
          strokeColor: "#4F46E5",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#4F46E5",
          fillOpacity: 0.1,
          map,
          center: userLocation,
          radius: searchRadius * 1000, // Convert km to meters
        })
      }
      
      // Store map reference
      mapRef.current = map
    }
  }, [mapCenter, userLocation, searchRadius])
  
  // Update markers when drivers data changes
  useEffect(() => {
    if (window.google && mapRef.current && driversData?.data?.drivers) {
      // Clear existing markers
      markersRef.current.forEach((marker) => marker.setMap(null))
      markersRef.current = []
      
      // Add new markers
      driversData.data.drivers.forEach((driver) => {
        if (driver.location && driver.location.coordinates) {
          const [lng, lat] = driver.location.coordinates
          
          // Get vehicle icon
          const getVehicleIcon = (type) => {
            switch (type) {
              case "bicycle":
                return "🚲"
              case "motorcycle":
                return "🏍️"
              case "car":
                return "🚗"
              case "van":
                return "🚐"
              case "truck":
                return "🚚"
              default:
                return "🏍️"
            }
          }
          
          const marker = new window.google.maps.Marker({
            position: { lat, lng },
            map: mapRef.current,
            title: `${driver.firstName} ${driver.lastName}`,
            label: {
              text: getVehicleIcon(driver.vehicleDetails?.type),
              fontSize: "20px",
            },
          })
          
          // Add info window
          const infoWindow = new window.google.maps.InfoWindow({
            content: `
              <div style="padding: 10px; max-width: 200px;">
                <div style="font-weight: bold; margin-bottom: 5px;">${driver.firstName} ${driver.lastName}</div>
                <div style="margin-bottom: 5px;">
                  <strong>Status:</strong> ${driver.isAvailable ? "Available" : "Busy"}
                </div>
                <div style="margin-bottom: 5px;">
                  <strong>Vehicle:</strong> ${driver.vehicleDetails?.type || "N/A"}
                </div>
                <div>
                  <strong>Last Update:</strong> ${new Date(driver.lastLocationUpdate || Date.now()).toLocaleTimeString()}
                </div>
              </div>
            `,
          })
          
          marker.addListener("click", () => {
            infoWindow.open(mapRef.current, marker)
          })
          
          markersRef.current.push(marker)
        }
      })
    }
  }, [driversData])
  
  // Handle search radius change
  const handleRadiusChange = (e) => {
    setSearchRadius(Number(e.target.value))
  }
  
  // Handle search button click
  const handleSearch = () => {
    refetch()
    
    // Update circle radius
    if (window.google && mapRef.current && userLocation) {
      // Clear existing circles
      mapRef.current.overlays?.forEach((overlay) => {
        if (overlay instanceof window.google.maps.Circle) {
          overlay.setMap(null)
        }
      })
      
      // Add new circle
      new window.google.maps.Circle({
        strokeColor: "#4F46E5",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#4F46E5",
        fillOpacity: 0.1,
        map: mapRef.current,
        center: userLocation,
        radius: searchRadius * 1000, // Convert km to meters
      })
    }
  }
  
  return (
    <>
      <TitleHead title="Driver Map" desc="View and track drivers in real-time" />
      
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-4 md:mb-0">
            <h1 className="text-xl font-bold text-gray-800">Driver Tracking Map</h1>
            <p className="text-gray-600">View and track drivers in real-time</p>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <label htmlFor="radius" className="mr-2 text-sm font-medium text-gray-700">
                Search Radius (km):
              </label>
              <select
                id="radius"
                value={searchRadius}
                onChange={handleRadiusChange}
                className="border border-gray-300 rounded-md p-1 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="1">1 km</option>
                <option value="2">2 km</option>
                <option value="5">5 km</option>
                <option value="10">10 km</option>
                <option value="20">20 km</option>
              </select>
            </div>
            
            <button
              onClick={handleSearch}
              className="px-3 py-1 bg-primary-900 text-white rounded-md hover:bg-primary-800 flex items-center"
            >
              <FaSearch className="mr-1" /> Search
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Map Legend */}
        <div className="p-3 bg-gray-50 border-b">
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-primary-900 mr-2"></div>
              <span className="text-sm">Your Location</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">🚲</span>
              <span className="text-sm">Bicycle</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">🏍️</span>
              <span className="text-sm">Motorcycle</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">🚗</span>
              <span className="text-sm">Car</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">🚐</span>
              <span className="text-sm">Van</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">🚚</span>
              <span className="text-sm">Truck</span>
            </div>
          </div>
        </div>
        
        {/* Map Container */}
        <div
          ref={mapRef}
          style={{ height: "600px", width: "100%" }}
          className="relative"
        >
          {isLoading && (
            <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center z-10">
              Loading...
            </div>
          )}\
