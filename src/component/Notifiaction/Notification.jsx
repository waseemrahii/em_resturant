import React, { useState } from "react";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";
import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import CardHeader from "../AllCards/CardHeader";
import HeadingCard from "../AllCards/HeadingCard";
import DataTableInfo from "../Dashboard/DashboardCards/DataTableInfo";
import ButtonHead from "../Header/ButtonHead";

const Notification = () => {
  const Orders = [
    {
      subject: "HI, how may I help you?",
      message: "HI, how may I help you?",
      date: "Wed Jun 12 2024 10:58:25 PM",
      publish: false,
      description: "Buy 1 Get 1 Free on All Pastries!",
      transaction: "Transaction",
      action: "",
    },
    // Add more orders as needed
  ];

  const [visibleOrders, setVisibleOrders] = useState(Orders.slice(0, 10));
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [showQuantity, setShowQuantity] = useState({});
  const [roles, setRoles] = useState(Orders);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedRoles, setSelectedRoles] = useState(new Set());
  const rolesPerPage = 5;

  const handleSort = (column) => {
    const newSortDirection =
      sortColumn === column && sortDirection === "asc" ? "desc" : "asc";
    setSortColumn(column);
    setSortDirection(newSortDirection);

    const sortedOrders = [...Orders].sort((a, b) => {
      if (a[column] < b[column]) return newSortDirection === "asc" ? -1 : 1;
      if (a[column] > b[column]) return newSortDirection === "asc" ? 1 : -1;
      return 0;
    });

    setVisibleOrders(sortedOrders.slice(0, 10));
  };

  const toggleQuantity = (index) => {
    setShowQuantity((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const newSelectedRoles = new Set(roles.map((_, index) => index));
      setSelectedRoles(newSelectedRoles);
    } else {
      setSelectedRoles(new Set());
    }
  };

  const handleRoleSelection = (index) => {
    const newSelectedRoles = new Set(selectedRoles);
    if (newSelectedRoles.has(index)) {
      newSelectedRoles.delete(index);
    } else {
      newSelectedRoles.add(index);
    }
    setSelectedRoles(newSelectedRoles);
  };

  const startIndex = currentPage * rolesPerPage;
  const displayedRoles = roles.slice(startIndex, startIndex + rolesPerPage);

  return (
    <div className="bg-white p-4 rounded">
      {/* <CardHeader
        createmenu="Create Notification"
        listmenu="Notification List"
        createlink={"/notifications/create-send"}
      /> */}
      <ButtonHead
        tab1={"Notification List"}
        tab2={"Create Notification"}
        link={"/notifications/create"}
      />
      <HeadingCard />
      <div className="overflow-x-auto scrollbar-custom">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="text-[.7rem] md:text-[1rem]">
              <th className="px-4 py-2 border bg-[#F8FAFD]">
                <div className="flex items-center justify-center gap-1">
                  <input
                    type="checkbox"
                    className="bg-slate-600 h-4 w-4"
                    onChange={handleSelectAll}
                    checked={
                      displayedRoles.length > 0 &&
                      displayedRoles.every((_, index) =>
                        selectedRoles.has(startIndex + index)
                      )
                    }
                  />
                  <FaTrashAlt className="text-primary-900 text-[.9rem]" />
                  <span className="font-semibold">All</span>
                </div>
              </th>
              <th className="px-4 py-2 border text-left">
                <button
                  onClick={() => handleSort("subject")}
                  className="flex items-center justify-between w-full gap-1"
                >
                  <h1>Subject</h1>
                  <div className="flex flex-col">
                    <TbTriangleFilled
                      className={`transition-colors text-[.5rem] ${
                        sortColumn === "subject" && sortDirection === "asc"
                          ? "text-gray-500"
                          : "text-gray-300"
                      }`}
                    />
                    <TbTriangleInvertedFilled
                      className={`transition-colors text-[.5rem] ${
                        sortColumn === "subject" && sortDirection === "desc"
                          ? "text-gray-500"
                          : "text-gray-300"
                      }`}
                    />
                  </div>
                </button>
              </th>
              <th className="px-4 py-2 border text-left bg-[#F8FAFD]">
                Message
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 scrollbar-custom">
            {visibleOrders.map((order, index) => (
              <React.Fragment key={index}>
                <tr
                  className={`border-b border-gray-300 ${
                    showQuantity[index] ? "border-black" : ""
                  }`}
                >
                  <td className="px-4 py-2 border text-left text-gray-400 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <div className="">
                        {showQuantity[index] ? (
                          <IoMdRemoveCircle
                            className="text-primary-900 text-xl border border-gray-400 rounded-full cursor-pointer"
                            onClick={() => toggleQuantity(index)}
                          />
                        ) : (
                          <IoMdAddCircle
                            className="text-[#31B131] text-xl border border-gray-400 rounded-full cursor-pointer"
                            onClick={() => toggleQuantity(index)}
                          />
                        )}
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          checked={selectedRoles.has(startIndex + index)}
                          onChange={() =>
                            handleRoleSelection(startIndex + index)
                          }
                          className="h-4 w-4"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2 border text-left text-gray-400 text-sm">
                    {order.subject}
                  </td>
                  <td className="px-4 py-2 border text-left text-gray-400 text-sm">
                    {order.message}
                  </td>
                </tr>
                {showQuantity[index] && (
                  <tr className="">
                    <td colSpan="3" className="py-2">
                      <div className="text-gray-500 font-semibold flex flex-col md:flex-row lg:flex-row justify-evenly gap-2">
                        <div className="flex justify-center items-center gap-2">
                          <h1>Date Created:</h1>
                          <p>{order.date}</p>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                          Actions:
                          <button>
                            <FaTrashAlt className="p-1 text-[1.6rem] bg-primary-900 text-white rounded-full" />
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <DataTableInfo entries={10} totalentries={Orders.length} />
    </div>
  );
};

export default Notification;
