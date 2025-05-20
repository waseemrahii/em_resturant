// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Stripe from "./Stripe";
// import COD from "./COD";
// import RazorPay from "./RazorPay";
// import Paypal from "./Paypal";
// import Paytm from "./Paytm";
// import Wallet from "./Wallet";
// import PayFast from "./PayFast";
// import PayStack from "./PayStack";

// import MercadoPago from "./MercadoPago";
// import PaymentMethod from "./PaymentMethod";
// import FlutterWaves from "./FlutterWaves";

// const MainPayment = () => {
//   return (
//     <>
//       <PaymentMethod />
//       <Routes>
//         <Route path="/stripe-configuration" element={<Stripe />} />
//         <Route path="cod-configuration" element={<COD />} />
//         <Route path="razorpay-configuration" element={<RazorPay />} />
//         <Route path="paypal-configuration" element={<Paypal />} />
//         <Route path="paytm-configuration" element={<Paytm />} />
//         <Route path="wallet-configuration" element={<Wallet />} />
//         <Route path="payfast-configuration" element={<PayFast />} />
//         <Route path="paystack-configuration" element={<PayStack />} />
//         <Route path="flutterwave-configuration" element={<FlutterWaves />} />
//         <Route path="mercadopago-configuration" element={<MercadoPago />} />
//       </Routes>
//     </>
//   );
// };

// export default MainPayment;


"use client"

import { useState, useEffect } from "react"
import { FaSave, FaSpinner, FaCreditCard } from "react-icons/fa"
import { useGetPaymentSettingsQuery, useUpdatePaymentSettingsMutation } from "../../../redux/services/settingService"
import { toast } from "react-toastify"

const MainPayment = () => {
  const { data: settings, isLoading, isError, error } = useGetPaymentSettingsQuery()
  const [updatePaymentSettings, { isLoading: isUpdating }] = useUpdatePaymentSettingsMutation()

  const [formData, setFormData] = useState({
    payment_stripe_enabled: false,
    payment_stripe_key: "",
    payment_stripe_secret: "",
    payment_paypal_enabled: false,
    payment_paypal_client_id: "",
    payment_paypal_secret: "",
    payment_cod_enabled: true,
    payment_wallet_enabled: false,
    payment_razorpay_enabled: false,
    payment_razorpay_key: "",
    payment_razorpay_secret: "",
    payment_paystack_enabled: false,
    payment_paystack_key: "",
    payment_paystack_secret: "",
    payment_flutterwave_enabled: false,
    payment_flutterwave_key: "",
    payment_flutterwave_secret: "",
  })

  useEffect(() => {
    if (settings) {
      setFormData({
        ...formData,
        ...settings,
      })
    }
  }, [settings])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await updatePaymentSettings(formData).unwrap()
      toast.success("Payment settings updated successfully")
    } catch (err) {
      toast.error(err?.data?.message || "Failed to update payment settings")
    }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <FaSpinner className="animate-spin text-primary-900 text-3xl" />
      </div>
    )
  }

  if (isError) {
    return (
      <div className="bg-red-50 p-4 rounded-md">
        <p className="text-red-500">Error loading payment settings: {error?.data?.message || "Unknown error"}</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
        <FaCreditCard className="mr-2" /> Payment Method Settings
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="space-y-8">
          {/* Cash on Delivery */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Cash on Delivery</h3>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="payment_cod_enabled"
                  name="payment_cod_enabled"
                  checked={formData.payment_cod_enabled}
                  onChange={handleChange}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="payment_cod_enabled" className="ml-2 block text-sm text-gray-700">
                  Enable
                </label>
              </div>
            </div>
            <p className="text-sm text-gray-600">Allow customers to pay with cash upon delivery</p>
          </div>

          {/* Wallet */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Wallet Payment</h3>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="payment_wallet_enabled"
                  name="payment_wallet_enabled"
                  checked={formData.payment_wallet_enabled}
                  onChange={handleChange}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="payment_wallet_enabled" className="ml-2 block text-sm text-gray-700">
                  Enable
                </label>
              </div>
            </div>
            <p className="text-sm text-gray-600">Allow customers to pay using their wallet balance</p>
          </div>

          {/* Stripe */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Stripe</h3>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="payment_stripe_enabled"
                  name="payment_stripe_enabled"
                  checked={formData.payment_stripe_enabled}
                  onChange={handleChange}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="payment_stripe_enabled" className="ml-2 block text-sm text-gray-700">
                  Enable
                </label>
              </div>
            </div>

            {formData.payment_stripe_enabled && (
              <div className="mt-4 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Publishable Key</label>
                  <input
                    type="text"
                    name="payment_stripe_key"
                    value={formData.payment_stripe_key}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="pk_test_..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Secret Key</label>
                  <input
                    type="password"
                    name="payment_stripe_secret"
                    value={formData.payment_stripe_secret}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="sk_test_..."
                  />
                </div>
              </div>
            )}
          </div>

          {/* PayPal */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">PayPal</h3>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="payment_paypal_enabled"
                  name="payment_paypal_enabled"
                  checked={formData.payment_paypal_enabled}
                  onChange={handleChange}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="payment_paypal_enabled" className="ml-2 block text-sm text-gray-700">
                  Enable
                </label>
              </div>
            </div>

            {formData.payment_paypal_enabled && (
              <div className="mt-4 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Client ID</label>
                  <input
                    type="text"
                    name="payment_paypal_client_id"
                    value={formData.payment_paypal_client_id}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Client ID"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Secret</label>
                  <input
                    type="password"
                    name="payment_paypal_secret"
                    value={formData.payment_paypal_secret}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Secret"
                  />
                </div>
              </div>
            )}
          </div>

          {/* RazorPay */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">RazorPay</h3>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="payment_razorpay_enabled"
                  name="payment_razorpay_enabled"
                  checked={formData.payment_razorpay_enabled}
                  onChange={handleChange}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="payment_razorpay_enabled" className="ml-2 block text-sm text-gray-700">
                  Enable
                </label>
              </div>
            </div>

            {formData.payment_razorpay_enabled && (
              <div className="mt-4 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Key ID</label>
                  <input
                    type="text"
                    name="payment_razorpay_key"
                    value={formData.payment_razorpay_key}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="rzp_test_..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Secret Key</label>
                  <input
                    type="password"
                    name="payment_razorpay_secret"
                    value={formData.payment_razorpay_secret}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Secret Key"
                  />
                </div>
              </div>
            )}
          </div>

          {/* PayStack */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">PayStack</h3>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="payment_paystack_enabled"
                  name="payment_paystack_enabled"
                  checked={formData.payment_paystack_enabled}
                  onChange={handleChange}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="payment_paystack_enabled" className="ml-2 block text-sm text-gray-700">
                  Enable
                </label>
              </div>
            </div>

            {formData.payment_paystack_enabled && (
              <div className="mt-4 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Public Key</label>
                  <input
                    type="text"
                    name="payment_paystack_key"
                    value={formData.payment_paystack_key}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="pk_test_..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Secret Key</label>
                  <input
                    type="password"
                    name="payment_paystack_secret"
                    value={formData.payment_paystack_secret}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="sk_test_..."
                  />
                </div>
              </div>
            )}
          </div>

          {/* FlutterWave */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">FlutterWave</h3>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="payment_flutterwave_enabled"
                  name="payment_flutterwave_enabled"
                  checked={formData.payment_flutterwave_enabled}
                  onChange={handleChange}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="payment_flutterwave_enabled" className="ml-2 block text-sm text-gray-700">
                  Enable
                </label>
              </div>
            </div>

            {formData.payment_flutterwave_enabled && (
              <div className="mt-4 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Public Key</label>
                  <input
                    type="text"
                    name="payment_flutterwave_key"
                    value={formData.payment_flutterwave_key}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="FLWPUBK_TEST-..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Secret Key</label>
                  <input
                    type="password"
                    name="payment_flutterwave_secret"
                    value={formData.payment_flutterwave_secret}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="FLWSECK_TEST-..."
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            disabled={isUpdating}
            className="px-4 py-2 bg-primary-900 text-white rounded-md hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-500 flex items-center"
          >
            {isUpdating ? (
              <>
                <FaSpinner className="animate-spin mr-2" />
                Saving...
              </>
            ) : (
              <>
                <FaSave className="mr-2" />
                Save Changes
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

export default MainPayment
