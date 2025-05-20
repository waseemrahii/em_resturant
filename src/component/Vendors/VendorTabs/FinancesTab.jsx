import { memo } from "react"
import { FaMoneyBillWave, FaWallet, FaPercent } from "react-icons/fa"

const FinancesTab = memo(({ financials }) => {
  if (!financials) {
    return (
      <div className="text-center py-12">
        <FaMoneyBillWave className="mx-auto text-gray-300 text-5xl mb-4" />
        <h3 className="text-lg font-medium text-gray-700">Loading Financial Data...</h3>
      </div>
    )
  }

  if (!financials.summary) {
    return (
      <div className="text-center py-12">
        <FaMoneyBillWave className="mx-auto text-gray-300 text-5xl mb-4" />
        <h3 className="text-lg font-medium text-gray-700">No Financial Activity</h3>
        <p className="text-gray-500 mt-1">This vendor doesn't have any financial activity yet.</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-green-50 rounded-lg p-4 flex items-center justify-between shadow-sm">
          <div>
            <p className="text-sm text-gray-500">Total Revenue</p>
            <h3 className="text-2xl font-bold text-gray-800">
              ${financials.summary?.totalRevenue?.toFixed(2) || "0.00"}
            </h3>
          </div>
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <FaMoneyBillWave className="text-green-600 text-xl" />
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-4 flex items-center justify-between shadow-sm">
          <div>
            <p className="text-sm text-gray-500">Total Earnings</p>
            <h3 className="text-2xl font-bold text-gray-800">
              ${financials.summary?.totalEarnings?.toFixed(2) || "0.00"}
            </h3>
          </div>
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <FaMoneyBillWave className="text-blue-600 text-xl" />
          </div>
        </div>

        <div className="bg-red-50 rounded-lg p-4 flex items-center justify-between shadow-sm">
          <div>
            <p className="text-sm text-gray-500">Admin Commission</p>
            <h3 className="text-2xl font-bold text-gray-800">
              ${financials.summary?.totalCommission?.toFixed(2) || "0.00"}
            </h3>
          </div>
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
            <FaPercent className="text-red-600 text-xl" />
          </div>
        </div>

        <div className="bg-yellow-50 rounded-lg p-4 flex items-center justify-between shadow-sm">
          <div>
            <p className="text-sm text-gray-500">Wallet Balance</p>
            <h3 className="text-2xl font-bold text-gray-800">
              ${financials.summary?.walletBalance?.toFixed(2) || "0.00"}
            </h3>
          </div>
          <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
            <FaWallet className="text-yellow-600 text-xl" />
          </div>
        </div>
      </div>

      {/* Monthly Earnings */}
      {financials.monthlyEarnings && financials.monthlyEarnings.length > 0 && (
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">Monthly Earnings</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Month
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Revenue
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Earnings
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Commission
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Orders
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {financials.monthlyEarnings.map((month) => {
                  const [year, monthNum] = month._id.split("-")
                  const date = new Date(Number.parseInt(year), Number.parseInt(monthNum) - 1)
                  const monthName = date.toLocaleString("default", { month: "long" })

                  return (
                    <tr key={month._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {monthName} {year}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${month.revenue.toFixed(2)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${month.earnings.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${month.commission.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{month.orders}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Payouts */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">Payout History</h3>
        </div>
        {financials.payouts && financials.payouts.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Method
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {financials.payouts.map((payout) => (
                  <tr key={payout._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {new Date(payout.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${payout.amount.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          payout.status === "completed"
                            ? "bg-green-100 text-green-800"
                            : payout.status === "pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : payout.status === "failed"
                                ? "bg-red-100 text-red-800"
                                : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {payout.status.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payout.method}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-6 text-center">
            <p className="text-gray-500">No payout history available.</p>
          </div>
        )}
      </div>
    </div>
  )
})

export default FinancesTab
