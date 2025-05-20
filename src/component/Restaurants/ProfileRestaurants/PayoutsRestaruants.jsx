// import React from 'react'
// import RestaurantPayOut from '../../Payments/RestaurantPayOut'

// const PayoutsRestaruants = () => {
//   return (
//     <div>
//       <RestaurantPayOut/>      
//     </div>
//   )
// }

// export default PayoutsRestaruants



"use client"

import { useState } from "react"
import { FaMoneyBillWave, FaCalendarAlt, FaSearch, FaPlus } from "react-icons/fa"
import PageHeader from "../../common/PageHeader"

const PayoutsRestaruants = () => {
  const [payouts, setPayouts] = useState([
    {
      id: 1,
      amount: 450.75,
      date: "2023-09-15",
      status: "completed",
      method: "Bank Transfer",
      reference: "PAY-12345-ABCDE",
      accountDetails: "XXXX-XXXX-XXXX-1234",
      notes: "Monthly payout",
    },
    {
      id: 2,
      amount: 320.5,
      date: "2023-09-01",
      status: "completed",
      method: "PayPal",
      reference: "PAY-67890-FGHIJ",
      accountDetails: "restaurant@example.com",
      notes: "Bi-weekly payout",
    },
    {
      id: 3,
      amount: 550.25,
      date: "2023-08-15",
      status: "completed",
      method: "Bank Transfer",
      reference: "PAY-54321-KLMNO",
      accountDetails: "XXXX-XXXX-XXXX-1234",
      notes: "Monthly payout",
    },
    {
      id: 4,
      amount: 275.0,
      date: "2023-08-01",
      status: "completed",
      method: "PayPal",
      reference: "PAY-09876-PQRST",
      accountDetails: "restaurant@example.com",
      notes: "Bi-weekly payout",
    },
    {
      id: 5,
      amount: 625.3,
      date: "2023-07-15",
      status: "completed",
      method: "Bank Transfer",
      reference: "PAY-13579-UVWXY",
      accountDetails: "XXXX-XXXX-XXXX-1234",
      notes: "Monthly payout",
    },
  ])

  const [search, setSearch] = useState("")
  const [dateRange, setDateRange] = useState({ start: "", end: "" })
  const [payoutMethod, setPayoutMethod] = useState("all")

  // Filter payouts
  const filteredPayouts = payouts.filter((payout) => {
    // Search filter
    const matchesSearch =
      search === "" ||
      payout.reference.toLowerCase().includes(search.toLowerCase()) ||
      payout.notes.toLowerCase().includes(search.toLowerCase())

    // Date range filter
    const payoutDate = new Date(payout.date)
    const matchesDateRange =
      (dateRange.start === "" || new Date(dateRange.start) <= payoutDate) &&
      (dateRange.end === "" || new Date(dateRange.end) >= payoutDate)

    // Method filter
    const matchesMethod = payoutMethod === "all" || payout.method.toLowerCase().includes(payoutMethod.toLowerCase())

    return matchesSearch && matchesDateRange && matchesMethod
  })

  const handleExport = (format) => {
    alert(`Exporting payouts as ${format}`)
  }

  const handleCreatePayout = () => {
    alert("Create new payout functionality would go here")
  }

  // Calculate total payout amount
  const totalPayoutAmount = payouts.reduce((total, payout) => total + payout.amount, 0)

  return (
    <div className="space-y-6">
      <PageHeader
        title="Restaurant Payouts"
        buttonText="Create Payout"
        buttonLink="/payouts/restaurants/create"
        icon={FaMoneyBillWave}
        buttonIcon={FaPlus}
        onExport={handleExport}
      />

      {/* Summary Card */}
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary-900">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="p-3 rounded-full bg-primary-100 mr-4">
              <FaMoneyBillWave className="text-primary-900 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Payouts</p>
              <p className="text-2xl font-bold text-gray-800">${totalPayoutAmount.toFixed(2)}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Last Payout</p>
              <p className="text-lg font-semibold text-gray-800">${payouts[0]?.amount.toFixed(2)}</p>
              <p className="text-xs text-gray-500">{payouts[0]?.date}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Payout Method</p>
              <p className="text-lg font-semibold text-gray-800">{payouts[0]?.method}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search payouts..."
                className="pl-10 p-2 border border-gray-300 rounded-md w-full focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">From Date</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaCalendarAlt className="text-gray-400" />
              </div>
              <input
                type="date"
                value={dateRange.start}
                onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
                className="pl-10 p-2 border border-gray-300 rounded-md w-full focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">To Date</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaCalendarAlt className="text-gray-400" />
              </div>
              <input
                type="date"
                value={dateRange.end}
                onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
                className="pl-10 p-2 border border-gray-300 rounded-md w-full focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Payout Method</label>
            <select
              value={payoutMethod}
              onChange={(e) => setPayoutMethod(e.target.value)}
              className="p-2 border border-gray-300 rounded-md w-full focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="all">All Methods</option>
              <option value="bank">Bank Transfer</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>
        </div>
      </div>

      {/* Payouts Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Reference
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Method
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
              {filteredPayouts.length > 0 ? (
                filteredPayouts.map((payout) => (
                  <tr key={payout.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{payout.reference}</div>
                      <div className="text-sm text-gray-500">{payout.notes}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{payout.date}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-green-600">${payout.amount.toFixed(2)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{payout.method}</div>
                      <div className="text-xs text-gray-500">{payout.accountDetails}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {payout.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-primary-900 hover:text-primary-800 mr-3">View</button>
                      <button className="text-gray-600 hover:text-gray-900">Print</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">
                    No payouts found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default PayoutsRestaruants
