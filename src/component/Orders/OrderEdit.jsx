import React, { useState } from "react";
const OrderEdit = () => {
  const order = {
    dateCreated: "2024-07-11 4:27:08 AM",
    paymentMethodIcon: "https://foodie.siswebapp.com/images/cashondelivery.png",
    orderType: "Order Delivery",
    status: "Order Placed",
    name: "khan",
    emailaddress: "s**********@gmail.com",
    address:
      "M4QR+9M4, , Islamabad, Islamabad Capital Territory, , Pakistan null",
    phone: "+9***********",
  };
  const [status, setStatus] = useState(order.status);

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleUpdate = () => {
    // Handle the update logic, such as sending the updated status to the backend
    alert(`Order status updated to: ${status}`);
  };

  const items = [
    {
      name: "Pizza",
      image:
        "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fb?alt=media&token=9a1ddbe3-fc3a-48e5-8845-735fecc4e40f", // Replace with your image URL
      size: "Large",
      price: 300.0,
      quantity: 1,
      extras: 0.0,
      total: 300.0,
    },
  ];

  return (
    <div className=" bg-white px-4 py-2 rounded-lg shadow-lg">
      <div className="grid grid-cols-5 gap-5">
        <div className="col-span-5 md:col-span-3 lg:col-span-3   ">
          <div className=" bg-white p-4 my-5 rounded-lg shadow-lg">
            <h2 className="text-[1rem] md:text-xl font-bold mb-2">
              General Details
            </h2>
            <hr className="my-4 border border-gray-300" />
            <div className="mb-4">
              <p className="text-gray-700 text-sm">
                <strong>Date Created :</strong> {order.dateCreated}
              </p>
            </div>
            <hr className="my-4 border-dashed border border-gray-300" />
            <div className="mb-4 flex  items-center  gap-5">
              <p className="text-gray-700 text-sm">
                <strong>Payment Methods :</strong>
              </p>
              <img
                src={order.paymentMethodIcon}
                alt="Payment Method"
                className="h-8 mt-1"
              />
            </div>
            <hr className="my-4 border-dashed border border-gray-300" />
            <div className="mb-4">
              <p className="text-gray-700 text-sm">
                <strong>Order Type:</strong> {order.orderType}
              </p>
            </div>
            <hr className="my-4 border-dashed border border-gray-300" />
            <div className="mb-4">
              <label className="text-gray-700 text-sm">
                <strong>Status:</strong>
              </label>
              <select
                value={status}
                onChange={handleStatusChange}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#F5F5F5] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="Order Placed">Order Placed</option>
                <option value="Processing">Processing</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
            <hr className="my-4 border-dashed border border-gray-300" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg ">
            <div className="overflow-x-auto scrollbar-custom">
              <table className="w-full mb-6 ">
                <thead className="bg-[#F8FAFD] text-gray-600 text-[.8rem] md:text-[1rem]">
                  <tr>
                    <th className="py-2 text-left">Items</th>
                    <th className="py-2 text-left">Price</th>
                    <th className="py-2 text-left">Qty</th>
                    <th className="py-2 text-left">Extras</th>
                    <th className="py-2 text-left">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-4 flex items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-12 w-12 mr-4 rounded-md"
                        />
                        <div>
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-sm text-gray-500">
                            Size: {item.size}
                          </p>
                        </div>
                      </td>
                      <td className="py-4 text-green-600">${item.price}</td>
                      <td className="py-4">x {item.quantity}</td>
                      <td className="py-4 text-green-600">+ ${item.extras}</td>
                      <td className="py-4 text-green-600">${item.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="mb-4">
                <label className="text-gray-300">
                  -----------------------SubTotal----------------------------
                </label>
                <div className="flex justify-between mb-2 bg-[#E1FFE1] p-2 rounded">
                  <span className="font-semibold">Subtotal</span>
                  <span className="text-green-600 font-semibold">
                    $
                    {items
                      .reduce((acc, item) => acc + item.total, 0)
                      .toFixed(2)}
                  </span>
                </div>
              </div>
              <div className="mb-4">
                <label className="text-gray-300">
                  -----------------------Discount----------------------------
                </label>
                <div className="flex justify-between text-red-500 mb-2">
                  <span>Discount</span>
                  <span>-$0.00</span>
                </div>
              </div>
              <div className="mb-4">
                <label className="text-gray-300">
                  -------------------Special Offer
                  Discount------------------------
                </label>
                <div className="flex justify-between text-red-500 mb-2">
                  <span>Special Offer Discount</span>
                  <span>-$0.00</span>
                </div>
              </div>
              <div className="mb-4">
                <label className="text-gray-300">
                  -------------------Delivery Charge------------------------
                </label>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Delivery Charge</span>
                  <span className="text-green-600 font-semibold">
                    + $2776.96
                  </span>
                </div>
              </div>
              <div className="mb-4">
                <label className="text-gray-300">
                  -------------------Tip------------------------
                </label>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Tip Amount</span>
                  <span className="text-green-600 font-semibold">
                    + $2776.96
                  </span>
                </div>
              </div>
              <div className="mb-4">
                <label className="text-gray-300">
                  -------------------Total------------------------
                </label>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Total Amount</span>
                  <span className="text-green-600 font-semibold">
                    + $2776.96
                  </span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Admin Commission</span>
                  <span className="text-green-600 font-semibold">+ $0.00</span>
                </div>
              </div>
            </div> */}
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg my-3">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <hr className="flex-grow border-gray-300" />
                <span className="mx-4 text-gray-500 font-semibold">
                  Subtotal
                </span>
                <hr className="flex-grow border-gray-300" />
              </div>
              <div className="flex justify-between items-center bg-[#E1FFE1] p-2 rounded">
                <span className="font-semibold">Subtotal</span>
                <span className="text-green-600 font-semibold">
                  ${items.reduce((acc, item) => acc + item.total, 0).toFixed(2)}
                </span>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <hr className="flex-grow border-gray-300" />
                <span className="mx-4 text-gray-500 font-medium">Discount</span>
                <hr className="flex-grow border-gray-300" />
              </div>
              <div className="flex justify-between items-center text-red-500 mb-2">
                <span>Discount</span>
                <span>-$0.00</span>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <hr className="flex-grow border-gray-300" />
                <span className="mx-4 text-gray-500 font-medium">
                  Special Offer Discount
                </span>
                <hr className="flex-grow border-gray-300" />
              </div>
              <div className="flex justify-between items-center text-red-500 mb-2">
                <span>Special Offer Discount</span>
                <span>-$0.00</span>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <hr className="flex-grow border-gray-300" />
                <span className="mx-4 text-gray-500 font-medium">
                  Delivery Charge
                </span>
                <hr className="flex-grow border-gray-300" />
              </div>
              <div className="flex justify-between items-center bg-[#E1FFE1] p-2 rounded">
                <span className="font-semibold">Delivery Charge</span>
                <span className="text-green-600 font-semibold">+ $2776.96</span>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <hr className="flex-grow border-gray-300" />
                <span className="mx-4 text-gray-500 font-medium">Tip</span>
                <hr className="flex-grow border-gray-300" />
              </div>
              <div className="flex justify-between items-center bg-[#E1FFE1] p-2 rounded">
                <span className="font-semibold">Tip Amount</span>
                <span className="text-green-600 font-semibold">+ $2776.96</span>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <hr className="flex-grow border-gray-300" />
                <span className="mx-4 text-gray-500 font-medium">Total</span>
                <hr className="flex-grow border-gray-300" />
              </div>
              <div className="flex justify-between items-center bg-[#E1FFE1] p-2 rounded mb-2">
                <span className="font-semibold">Total Amount</span>
                <span className="text-green-600 font-semibold">+ $2776.96</span>
              </div>
              <div className="flex justify-between items-center bg-[#E1FFE1] p-2 rounded">
                <span className="font-semibold">Admin Commission</span>
                <span className="text-green-600 font-semibold">+ $0.00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-5 md:col-span-2 lg:col-span-2 ">
          <div className=" bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-[1rem] md:text-xl font-bold mb-2">
              Billing Details
            </h2>
            <hr className="my-4  border border-gray-300" />
            <div className="mb-4">
              <p className="text-gray-700 text-sm">
                <strong>Name:</strong> {order.name}
              </p>
            </div>
            <hr className="my-4 border-dashed border border-gray-300" />
            <div className="mb-4 flex  items-center  gap-5">
              <p className="text-gray-700">
                <strong>Address:</strong>
                {order.address}
              </p>
            </div>
            <hr className="my-4 border-dashed border border-gray-300" />
            <div className="mb-4">
              <p className="text-gray-700 text-sm">
                <strong>Email Address:</strong>{" "}
                <span className="text-red1"> {order.emailaddress}</span>
              </p>
            </div>
            <hr className="my-4 border-dashed border border-gray-300" />
            <div className="mb-4">
              <p className="text-gray-700 text-sm">
                <strong>Phone:</strong>
                {order.phone}
              </p>
            </div>
            <hr className="my-2 border-dashed border border-gray-300" />
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg my-3">
            <h2 className="text-[1rem] md:text-xl font-bold mb-2">
              Restaurant
            </h2>
            <hr className="my-4  border border-gray-300" />
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <img
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt=""
                  className="rounded-full h-16 w-16"
                />{" "}
                <h1>The Urban Cafe </h1>
              </div>
              <div>
                <h1 className="text-xl text-gray-600 font-semibold">
                  Contact Info:
                </h1>
              </div>
              <hr className="my-1 border-dashed border border-gray-300" />
              <div>
                <h1 className="font-semibold">Phone:</h1>
              </div>
              <hr className="my-1 border-dashed border border-gray-300" />
              <div className="flex items-center gap-2 ">
                <h1 className="font-semibold">Address:</h1>
                <p>Gota Ahmedabad</p>
              </div>
              <hr className="my-1 border-dashed border border-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderEdit;
