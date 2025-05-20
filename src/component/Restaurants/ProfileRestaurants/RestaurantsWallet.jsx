
import { useState } from "react"
import { FaWallet, FaMoneyBillWave, FaArrowUp, FaArrowDown, FaSearch, FaCalendarAlt } from "react-icons/fa"
import PageHeader from "../../common/PageHeader"

const RestaurantsWallet = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: "2023-09-15",
      time: "14:30:45",
      amount: 125.5,
      type: "credit",
      description: "Order #12345 payment",
      status: "completed",
      reference: "TRX-12345-ABCDE",
    },
    {
      id: 2,
      date: "2023-09-14",
      time: "10:15:22",
      amount: 250.0,
      type: "debit",
      description: "Payout request #5678",
      status: "completed",
      reference: "PAY-5678-FGHIJ",
    },
    {
      id: 3,
      date: "2023-09-10",
      time: "16:45:30",
      amount: 75.25,
      type: "credit",
      description: "Order #12346 payment",
      status: "completed",
      reference: "TRX-12346-KLMNO",
    },
    {
      id: 4,
      date: "2023-09-05",
      time: "09:20:15",
      amount: 180.0,
      type: "credit",
      description: "Order #12347 payment",
      status: "completed",
      reference: "TRX-12347-PQRST",
    },
    {
      id: 5,
      date: "2023-09-01",
      time: "11:10:05",
      amount: 300.0,
      type: "debit",
      description: "Payout request #5679",
      status: "completed",
      reference: "PAY-5679-UVWXY",
    },
  ])

  const [search, setSearch] = useState("")
  const [dateRange, setDateRange] = useState({ start: "", end: "" })
  const [transactionType, setTransactionType] = useState("all")

  // Calculate wallet balance
  const walletBalance = transactions.reduce((total, transaction) => {
    return transaction.type === "credit" ? total + transaction.amount : total - transaction.amount
  }, 0)

  // Filter transactions
  const filteredTransactions = transactions.filter((transaction) => {
    // Search filter
    const matchesSearch =
      search === "" ||
      transaction.description.toLowerCase().includes(search.toLowerCase()) ||
      transaction.reference.toLowerCase().includes(search.toLowerCase())

    // Date range filter
    const transactionDate = new Date(transaction.date)
    const matchesDateRange =
      (dateRange.start === "" || new Date(dateRange.start) <= transactionDate) &&
      (dateRange.end === "" || new Date(dateRange.end) >= transactionDate)

    // Transaction type filter
    const matchesType = transactionType === "all" || transaction.type === transactionType

    return matchesSearch && matchesDateRange && matchesType
  })

  const handleExport = (format) => {
    alert(`Exporting wallet transactions as ${format}`)
  }

  return (
    <div className="space-y-6">
      <PageHeader title="Wallet Transactions" icon={FaWallet} onExport={handleExport} />

      {/* Wallet Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-primary-900">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-primary-100 mr-4">
              <FaWallet className="text-primary-900 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Current Balance</p>
              <p className="text-2xl font-bold text-gray-800">${walletBalance.toFixed(2)}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-500">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 mr-4">
              <FaArrowDown className="text-green-500 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Credits</p>
              <p className="text-2xl font-bold text-gray-800">
                $
                {transactions
                  .filter((t) => t.type === "credit")
                  .reduce((sum, t) => sum + t.amount, 0)
                  .toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-red-500">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-red-100 mr-4">
              <FaArrowUp className="text-red-500 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Debits</p>
              <p className="text-2xl font-bold text-gray-800">
                $
                {transactions
                  .filter((t) => t.type === "debit")
                  .reduce((sum, t) => sum + t.amount, 0)
                  .toFixed(2)}
              </p>
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
                placeholder="Search transactions..."
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
            <label className="block text-sm font-medium text-gray-700 mb-1">Transaction Type</label>
            <select
              value={transactionType}
              onChange={(e) => setTransactionType(e.target.value)}
              className="p-2 border border-gray-300 rounded-md w-full focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="all">All Transactions</option>
              <option value="credit">Credits Only</option>
              <option value="debit">Debits Only</option>
            </select>
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
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
                  Description
                </th>
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
                  Amount
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredTransactions.length > 0 ? (
                filteredTransactions.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{transaction.date}</div>
                      <div className="text-sm text-gray-500">{transaction.time}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{transaction.description}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{transaction.reference}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div
                        className={`text-sm font-medium ${
                          transaction.type === "credit" ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {transaction.type === "credit" ? "+" : "-"}${transaction.amount.toFixed(2)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {transaction.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500">
                    No transactions found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Wallet Amount Button */}
      <div className="flex justify-end">
        <button className="bg-primary-900 text-white px-4 py-2 rounded-md flex items-center hover:bg-primary-800 transition-colors">
          <FaMoneyBillWave className="mr-2" />
          Add Wallet Amount
        </button>
      </div>
    </div>
  )
}

export default RestaurantsWallet
