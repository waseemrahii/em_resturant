
import { useState } from "react"
import { FaCalendarAlt, FaUsers } from "react-icons/fa"
import { MdRestaurantMenu, MdTableBar } from "react-icons/md"
import PageHeader from "../../common/PageHeader"

const DineInFeatures = () => {
  const [dineInEnabled, setDineInEnabled] = useState(true)
  const [tableReservationEnabled, setTableReservationEnabled] = useState(true)
  const [tables, setTables] = useState([
    { id: 1, name: "Table 1", capacity: 4, status: "available", location: "Indoor" },
    { id: 2, name: "Table 2", capacity: 2, status: "available", location: "Indoor" },
    { id: 3, name: "Table 3", capacity: 6, status: "occupied", location: "Indoor" },
    { id: 4, name: "Table 4", capacity: 8, status: "reserved", location: "Outdoor" },
    { id: 5, name: "Table 5", capacity: 4, status: "available", location: "Outdoor" },
  ])
  const [reservations, setReservations] = useState([
    {
      id: 1,
      customerName: "John Doe",
      tableId: 4,
      date: "2023-09-20",
      time: "19:00",
      duration: 2,
      guests: 6,
      status: "confirmed",
      contact: "+1 234-567-8901",
    },
    {
      id: 2,
      customerName: "Jane Smith",
      tableId: 3,
      date: "2023-09-21",
      time: "20:00",
      duration: 1.5,
      guests: 4,
      status: "pending",
      contact: "+1 234-567-8902",
    },
    {
      id: 3,
      customerName: "Robert Johnson",
      tableId: 1,
      date: "2023-09-22",
      time: "18:30",
      duration: 2,
      guests: 3,
      status: "confirmed",
      contact: "+1 234-567-8903",
    },
  ])

  const [activeTab, setActiveTab] = useState("settings")

  const handleAddTable = () => {
    alert("Add table functionality would go here")
  }

  const handleAddReservation = () => {
    alert("Add reservation functionality would go here")
  }

  const getTableName = (tableId) => {
    const table = tables.find((t) => t.id === tableId)
    return table ? table.name : "Unknown Table"
  }

  return (
    <div className="space-y-6">
      <PageHeader title="Dine-In Features" icon={MdRestaurantMenu} />

      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button
          className={`py-2 px-4 font-medium text-sm focus:outline-none ${
            activeTab === "settings"
              ? "text-primary-900 border-b-2 border-primary-900"
              : "text-gray-500 hover:text-primary-900"
          }`}
          onClick={() => setActiveTab("settings")}
        >
          Settings
        </button>
        <button
          className={`py-2 px-4 font-medium text-sm focus:outline-none ${
            activeTab === "tables"
              ? "text-primary-900 border-b-2 border-primary-900"
              : "text-gray-500 hover:text-primary-900"
          }`}
          onClick={() => setActiveTab("tables")}
        >
          Tables
        </button>
        <button
          className={`py-2 px-4 font-medium text-sm focus:outline-none ${
            activeTab === "reservations"
              ? "text-primary-900 border-b-2 border-primary-900"
              : "text-gray-500 hover:text-primary-900"
          }`}
          onClick={() => setActiveTab("reservations")}
        >
          Reservations
        </button>
      </div>

      {/* Settings Tab */}
      {activeTab === "settings" && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-primary-100 mr-3">
                    <MdRestaurantMenu className="text-primary-900 text-xl" />
                  </div>
                  <h3 className="text-lg font-medium">Dine-In Service</h3>
                </div>
                <button
                  onClick={() => setDineInEnabled(!dineInEnabled)}
                  className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none ${
                    dineInEnabled ? "bg-green-500" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block w-4 h-4 transform transition-transform bg-white rounded-full ${
                      dineInEnabled ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Enable or disable dine-in service for your restaurant. When disabled, customers won't be able to dine
                in.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Opening Hours</span>
                  <span className="text-sm font-medium">10:00 AM - 10:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Service Days</span>
                  <span className="text-sm font-medium">Monday - Sunday</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Average Serving Time</span>
                  <span className="text-sm font-medium">45 minutes</span>
                </div>
              </div>
              <button className="mt-4 w-full bg-primary-900 text-white py-2 rounded-md hover:bg-primary-800 transition-colors">
                Update Settings
              </button>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-blue-100 mr-3">
                    <FaCalendarAlt className="text-blue-600 text-xl" />
                  </div>
                  <h3 className="text-lg font-medium">Table Reservation</h3>
                </div>
                <button
                  onClick={() => setTableReservationEnabled(!tableReservationEnabled)}
                  className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none ${
                    tableReservationEnabled ? "bg-green-500" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block w-4 h-4 transform transition-transform bg-white rounded-full ${
                      tableReservationEnabled ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Enable or disable table reservations. When disabled, customers won't be able to reserve tables.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Advance Booking</span>
                  <span className="text-sm font-medium">Up to 7 days</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Reservation Fee</span>
                  <span className="text-sm font-medium">$10 (Refundable)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Cancellation Policy</span>
                  <span className="text-sm font-medium">4 hours before</span>
                </div>
              </div>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                Update Reservation Settings
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tables Tab */}
      {activeTab === "tables" && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-medium">Restaurant Tables</h3>
            <button
              onClick={handleAddTable}
              className="bg-primary-900 text-white px-4 py-2 rounded-md flex items-center hover:bg-primary-800 transition-colors"
            >
              <MdTableBar className="mr-2" />
              Add New Table
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tables.map((table) => (
              <div
                key={table.id}
                className={`border rounded-lg p-4 ${
                  table.status === "available"
                    ? "border-green-200 bg-green-50"
                    : table.status === "occupied"
                      ? "border-red-200 bg-red-50"
                      : "border-yellow-200 bg-yellow-50"
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-gray-900">{table.name}</h4>
                    <p className="text-sm text-gray-600">{table.location}</p>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      table.status === "available"
                        ? "bg-green-100 text-green-800"
                        : table.status === "occupied"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {table.status.charAt(0).toUpperCase() + table.status.slice(1)}
                  </span>
                </div>
                <div className="mt-4 flex items-center">
                  <FaUsers className="text-gray-400 mr-2" />
                  <span className="text-sm text-gray-700">Capacity: {table.capacity} people</span>
                </div>
                <div className="mt-4 flex justify-between">
                  <button className="text-primary-900 hover:text-primary-800 text-sm font-medium">Edit</button>
                  <button className="text-red-600 hover:text-red-800 text-sm font-medium">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Reservations Tab */}
      {activeTab === "reservations" && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-medium">Table Reservations</h3>
            <button
              onClick={handleAddReservation}
              className="bg-primary-900 text-white px-4 py-2 rounded-md flex items-center hover:bg-primary-800 transition-colors"
            >
              <FaCalendarAlt className="mr-2" />
              Add Reservation
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Customer
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Table
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Date & Time
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Guests
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {reservations.map((reservation) => (
                  <tr key={reservation.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{reservation.customerName}</div>
                      <div className="text-sm text-gray-500">{reservation.contact}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{getTableName(reservation.tableId)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{reservation.date}</div>
                      <div className="text-sm text-gray-500">
                        {reservation.time} ({reservation.duration} hrs)
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{reservation.guests} people</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          reservation.status === "confirmed"
                            ? "bg-green-100 text-green-800"
                            : reservation.status === "pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }`}
                      >
                        {reservation.status.charAt(0).toUpperCase() + reservation.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-primary-900 hover:text-primary-800 mr-3">Edit</button>
                      <button className="text-red-600 hover:text-red-800">Cancel</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

export default DineInFeatures
