import React, { useState } from "react";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";

import { FaTrashAlt } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import CardHeader from "../../AllCards/CardHeader";
import HeadingCard from "../../AllCards/HeadingCard";
import DataTableInfo from "../../Dashboard/DashboardCards/DataTableInfo";
import TitleHead from "../../Header/TitleHead";

const Languages = () => {
  const Orders = [
    {
      name: "English",
      publish: true,
      slug: "ar",
      action: "",
    },
    {
      name: "Spanish",
      publish: false,
      slug: "ar",
      action: "",
    },
    {
      name: "Urdu",
      publish: false,
      slug: "ar",
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

  const handleslug = (column) => {
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

  //   --------------------
  const [roles, setRoles] = useState(Orders);

  const [currentPage, setCurrentPage] = useState(0);
  const rolesPerPage = 5;

  const startIndex = currentPage * rolesPerPage;

  return (
    <>
      <TitleHead title={"Langaguge"} desc={"Langauge"} />
      <div className="bg-white shadow-md hover:shadow-lg rounded">
        <CardHeader
          createmenu="Create Language"
          createlink={"/settingd/edit-languages"}
          listmenu="Language List"
        />
        <HeadingCard />
        <div className="overflow-x-auto scrollbar-custom">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 border text-left">
                  <button
                    onClick={() => handleSort("name")}
                    className="flex items-center justify-between w-full gap-1"
                  >
                    <h1 className="text-[.8rem] md:text-[.9rem]"> Name </h1>
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
                    onClick={() => handleslug("slug")}
                    className="flex items-center justify-between w-full gap-1"
                  >
                    <h1 className="text-[.8rem] md:text-[.9rem]"> Slug </h1>
                    <div className="flex flex-col">
                      <TbTriangleFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "slug" && sortDirection === "asc"
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      />
                      <TbTriangleInvertedFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "slug" && sortDirection === "desc"
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      />
                    </div>
                  </button>
                </th>

                <th className="text-[.8rem] md:text-[.9rem] px-4 py-2 border text-left bg-[#F8FAFD]">
                  Active
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
                    <td className="px-4 py-2 border text-left text-primary-900 text-sm">
                      {order.name}
                    </td>
                    <td className="px-4 py-2 border text-left text-gray-400 text-sm">
                      {order.slug}
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
                    <td colSpan="6" className="py-2">
                      <div className="text-gray-500 font-semibold flex flex-col gap-2">
                        <div className="flex justify-center items-center gap-2">
                          <Link to="/settingd/edit-languages">
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

export default Languages;
