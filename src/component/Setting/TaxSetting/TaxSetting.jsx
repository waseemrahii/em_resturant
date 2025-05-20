import React, { useState } from "react";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";
import { FaTrashAlt } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import CardHeader from "../../AllCards/CardHeader";
import HeadingCard from "../../AllCards/HeadingCard";
import DataTableInfo from "../../Dashboard/DashboardCards/DataTableInfo";
import TitleHead from "../../Header/TitleHead";

const TaxSetting = () => {
  const Orders = [
    {
      title: "Basic",
      Country: "Pakistan",
      type: "Percentage",
      taxvalue: "25%",
      publish: false,
      action: "",
    },
  ];

  const [visibleOrders, setVisibleOrders] = useState(Orders.slice(0, 10));
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [showQuantity, setShowQuantity] = useState({});

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

  const handleemail = (column) => {
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

  const handletax = (column) => {
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
  const handledate = (column) => {
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

  //   --------------------
  const [roles, setRoles] = useState(Orders);

  const [currentPage, setCurrentPage] = useState(0);
  const [selectedRoles, setSelectedRoles] = useState(new Set());
  const rolesPerPage = 5;

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
    <>
      <TitleHead title={"Taxes"} desc={"Taxes"} />
      <div className="bg-white shadow-md hover:shadow-lg rounded">
        <CardHeader
          createmenu="Create Tax"
          createlink={"/settings/create-tax"}
          listmenu="Tax List"
        />
        <HeadingCard />
        <div className="overflow-x-auto scrollbar-custom">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 border bg-[#F8FAFD]">
                  <div className="flex items-center justify-center gap-2 ">
                    <input
                      type="checkbox"
                      className="bg-slate-600 h-4 w-4 "
                      onChange={handleSelectAll}
                      checked={
                        displayedRoles.length > 0 &&
                        displayedRoles.every((_, index) =>
                          selectedRoles.has(startIndex + index)
                        )
                      }
                    />
                    <FaTrashAlt className="text-primary-900 text-[.8rem]" />
                    <span className="font-semibold">All</span>
                  </div>
                </th>

                <th className="px-4 py-2 border text-left">
                  <button
                    onClick={() => handleSort("name")}
                    className="flex items-center justify-between w-full gap-1"
                  >
                    <h1 className="text-[.8rem] md:text-[.9rem]"> Title </h1>
                    <div className="flex flex-col">
                      <TbTriangleFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "name" && sortDirection === "asc"
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      />
                      <TbTriangleInvertedFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "name" && sortDirection === "desc"
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      />
                    </div>
                  </button>
                </th>
                <th className="px-4 py-2 border text-left">
                  <button
                    onClick={() => handleemail("email")}
                    className="flex items-center justify-between w-full gap-1"
                  >
                    <h1 className="text-[.8rem] md:text-[.9rem]"> Country </h1>
                    <div className="flex flex-col">
                      <TbTriangleFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "email" && sortDirection === "asc"
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      />
                      <TbTriangleInvertedFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "email" && sortDirection === "desc"
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      />
                    </div>
                  </button>
                </th>
                <th className="px-4 py-2 border text-left">
                  <button
                    onClick={() => handledate("date")}
                    className="flex items-center justify-between w-full gap-1"
                  >
                    <h1 className="text-[.8rem] md:text-[.9rem]"> Type </h1>
                    <div className="flex flex-col">
                      <TbTriangleFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "date" && sortDirection === "asc"
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      />
                      <TbTriangleInvertedFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "date" && sortDirection === "desc"
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      />
                    </div>
                  </button>
                </th>
                <th className="px-4 py-2 border text-left">
                  <button
                    onClick={() => handletax("tax")}
                    className="flex items-center justify-between w-full gap-1"
                  >
                    <h1 className="text-[.8rem] md:text-[.9rem]">
                      {" "}
                      Tax Value{" "}
                    </h1>
                    <div className="flex flex-col">
                      <TbTriangleFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "tax" && sortDirection === "asc"
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      />
                      <TbTriangleInvertedFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "tax" && sortDirection === "desc"
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      />
                    </div>
                  </button>
                </th>
                <th className="text-[.8rem] md:text-[.9rem] px-4 py-2 border text-left bg-[#F8FAFD]">
                  Status
                </th>
                <th className="text-[.8rem] md:text-[.9rem] px-4 py-2 border text-left bg-[#F8FAFD]">
                  Action
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
                    <td className=" px-4 py-2 border text-left text-gray-400 text-sm">
                      <div className="flex items-center  gap-2">
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
                    </td>{" "}
                    <td className="px-4 py-2 border text-left text-primary-900 text-sm">
                      {order.title}
                    </td>
                    <td className="px-4 py-2 border text-left text-gray-400 text-sm">
                      {order.Country}
                    </td>
                    <td className="px-4 py-2 border text-left text-gray-400 text-sm">
                      {order.type}
                    </td>
                    <td className="px-4 py-2 border text-left text-gray-400 text-sm">
                      {order.taxvalue}
                    </td>
                    <td className="px-4 py-2 border text-left text-gray-400 text-sm">
                      <div className="flex items-center justify-center ">
                        <div
                          onClick={() => {
                            const updatedRoles = [...roles];
                            updatedRoles[startIndex + index].publish =
                              !updatedRoles[startIndex + index].publish;
                            setRoles(updatedRoles);
                          }}
                          className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${
                            order.publish ? "bg-[#008000]" : "bg-primary-900"
                          }`}
                        >
                          <div
                            className={`bg-white w-5 h-5 rounded-full shadow-md transform ${
                              order.publish ? "translate-x-6" : ""
                            }`}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="py-2">
                      <div className="text-gray-500 font-semibold flex flex-col gap-2">
                        <div className="flex justify-center items-center gap-2">
                          <Link to="/settings/create-tax">
                            <MdModeEdit className="p-1 bg-[#008000] text-[1.6rem] rounded-full text-white" />
                          </Link>
                          <button>
                            <FaTrashAlt className="p-1 text-[1.6rem] bg-primary-900 text-white rounded-full" />
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
        <DataTableInfo entries={10} totalentries={10} />
      </div>
    </>
  );
};

export default TaxSetting;
