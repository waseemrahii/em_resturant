import React, { useRef } from "react";
import { IoPrint } from "react-icons/io5";
import html2pdf from "html2pdf.js";

const PrientOrder = () => {
  const orderData = {
    restaurant: "The Pizza Place",
    location: "Ahmedabad",
    phone: "07********",
    orderId: "kaXB5lLdlJjC9huHCn9A",
    date: "Mon Aug 12 2024 11:00:42 PM",
    customerName: "John Doe",
    customerPhone: "+9**********",
    address:
      "null, 2HH5+FCH, Ellisbridge, Ahmedabad, Gujarat, 380006, India null",
    items: [
      {
        id: 1,
        name: "cheezy-7 Pizza",
        size: "Medium",
        price: "$67.85",
        quantity: 1,
        extras: "+ $0.00",
        total: "$67.85",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fpizza1_1715676072532.jpg?alt=media&token=3d136905-c1fe-4215-a7d6-f7b068ce12ff",
      },
    ],
    costBreakdown: {
      itemsPrice: "$67.85",
      addonCost: "$0.00",
      subtotal: "$67.85",
      discount: "- $0.00",
      specialOfferDiscount: "- $0.00",
      dmTips: "+ $0.00",
      deliveryFee: "+ $8.00",
      total: "$75.85",
    },
  };

  const printRef = useRef();

  const handleDownload = () => {
    const element = printRef.current;
    html2pdf().from(element).save("OrderDetailes.pdf");
  };

  return (
    <div
      ref={printRef}
      className="bg-white shadow-md hover:shadow-lg p-4 rounded mx-2 md:mx-5"
    >
      <div
        className="text-xl text-right float-right p-1 border-red1 rounded-md border-2 cursor-pointer"
        onClick={handleDownload}
      >
        <IoPrint />
      </div>
      <br />
      <hr className="my-4 border-dashed border border-black" />
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          {orderData.restaurant}
        </h2>
        <p className="text-lg text-gray-600">{orderData.location}</p>
        <p className="text-gray-600">Phone : {orderData.phone}</p>
      </div>
      <hr className="my-4 border-dashed border border-black" />
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p>
          Order ID : <span className="font-semibold">{orderData.orderId}</span>
        </p>
        <p className="text-sm text-gray-600">{orderData.date}</p>
      </div>

      <div className="mt-4">
        <p className="font-semibold">
          Customer Name : {orderData.customerName}
        </p>
        <p className="font-semibold">Phone : {orderData.customerPhone}</p>
        <p className="font-semibold">Address : {orderData.address}</p>
      </div>
      <hr className="my-4 border-dashed border border-black" />
      <div className="overflow-x-auto scrollbar-custom border rounded-lg">
        <table className="w-full table-auto">
          <thead className="bg-[#F8FAFD]">
            <tr>
              <th className="px-2 py-1 md:px-4 md:py-2">Items</th>
              <th className="px-2 py-1 md:px-4 md:py-2 text-left">Price</th>
              <th className="px-2 py-1 md:px-4 md:py-2 text-left">Qty</th>
              <th className="px-2 py-1 md:px-4 md:py-2 text-left">Extras</th>
              <th className="px-2 py-1 md:px-4 md:py-2 text-left">Total</th>
            </tr>
          </thead>
          <tbody>
            {orderData.items.map((item) => (
              <tr key={item.id}>
                <td className="flex flex-col gap-2 py-2 items-center md:py-3">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <span className="text-gray-600">Size: </span>
                    <span className="inline-block bg-gray-100 text-gray-700 text-sm px-2 py-1 mt-2 rounded-lg">
                      {item.size}
                    </span>
                  </div>
                </td>
                <td className="px-2 py-1 md:px-4 md:py-2">{item.price}</td>
                <td className="px-2 py-1 md:px-4 md:py-2">{item.quantity}</td>
                <td className="px-2 py-1 md:px-4 md:py-2">{item.extras}</td>
                <td className="px-2 py-1 md:px-4 md:py-2">{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <hr className="my-4 border-dashed border border-black" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div></div>
        <div className="bg-white border rounded-lg p-4">
          {Object.entries(orderData.costBreakdown).map(([key, value]) => (
            <div className="flex justify-between py-2" key={key}>
              <span>
                {key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}{" "}
                :
              </span>
              <span>{value}</span>
            </div>
          ))}
          <hr className="my-4" />
          <div className="flex justify-between font-bold text-lg">
            <span>Total :</span>
            <span>{orderData.costBreakdown.total}</span>
          </div>
        </div>
      </div>
      <hr className="my-4 border-dashed border border-black" />
      <h1 className="text-center text-xl md:text-2xl font-semibold">
        THANK YOU
      </h1>
      <hr className="my-4 border-dashed border border-black" />
    </div>
  );
};

export default PrientOrder;
