
import React from  'react'
import { useState, useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import Header from "../component/Header"
import SideBar from "../component/Header/SideBar"

const RootLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 1024)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const location = useLocation()

  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth < 1024
      const isMobileScreen = window.innerWidth < 768

      setIsMobile(isMobileScreen)

      // Only auto-close sidebar on small screens
      if (isSmallScreen && isSidebarOpen) {
        setIsSidebarOpen(false)
      } else if (!isSmallScreen && !isSidebarOpen) {
        setIsSidebarOpen(true)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isSidebarOpen])

  // Close sidebar on route change for mobile
  useEffect(() => {
    if (isMobile) {
      setIsSidebarOpen(false)
    }
  }, [location.pathname, isMobile])

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Sidebar - fixed position on mobile with overlay */}
      <div
        className={`fixed lg:relative z-30 h-full transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } ${isSidebarOpen && isMobile ? "w-72" : ""} ${!isMobile ? (isSidebarOpen ? "w-64" : "w-16") : "w-64"}`}
      >
        <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-primary-300 scrollbar-track-gray-100">
          <SideBar isSidebarOpen={isSidebarOpen} />
        </div>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && isMobile && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20" onClick={toggleSidebar} />
      )}

      {/* Main content */}
      <div
        className={`flex flex-col  w-full transition-all duration-300 ease-in-out ${
          !isMobile ? (isSidebarOpen ? "" : "") : ""
        } overflow-hidden`}
      >
        {/* Header */}
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

        {/* Main scrollable area */}
        <main className="flex-1 overflow-y-auto p-4 pb-20">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default RootLayout
