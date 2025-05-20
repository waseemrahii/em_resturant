import React, { useState } from "react";
import { CgMail } from "react-icons/cg";
import { Link } from "react-router-dom";

function PaymentMethod() {
  const [selectedMethod, setSelectedMethod] = useState("");

  const handleMethodClick = (method) => {
    setSelectedMethod(method);
  };

  const methodRoutes = {
    Stripe: "stripe",
    COD: "cod",
    Razorpay: "razorpay",
    PayPal: "paypal",
    Paytm: "paytm",
    Wallet: "wallet",
    Payfast: "payfast",
    Paystack: "paystack",
    FlutterWave: "flutterwave",
    MercadoPago: "mercadopago",
  };

  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-2 mb-2">
        {Object.keys(methodRoutes).map((method) => (
          <Link
            to={methodRoutes[method]} // Use the specific route for each method
            key={method}
            className={`cursor-pointer text-sm border rounded-md px-1 py-1 ${
              selectedMethod === method
                ? "bg-primary-900 text-white"
                : "bg-white"
            }  px-2 py-2 hover:bg-primary-900 hover:text-white rounded flex items-center`}
            onClick={() => handleMethodClick(method)} // Set the selected method on click
          >
            <CgMail className="text-xl font-semibold mr-2 " />
            <span className="mr-2">{method}</span>
            <span
              className={`cursor-pointer border rounded-md px-2 py-1 ${
                selectedMethod === method
                  ? "bg-white text-primary-900"
                  : "bg-primary-900 text-[1rem] text-white"
              }  px-2  rounded flex items-center`}
            >
              Active
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PaymentMethod;
