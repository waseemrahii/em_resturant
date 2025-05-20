import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";
import { MdModeEdit } from "react-icons/md";
import CardHeader from "../../AllCards/CardHeader";
import HeadingCard from "../../AllCards/HeadingCard";
import DataTableInfo from "../../Dashboard/DashboardCards/DataTableInfo";
import { Link } from "react-router-dom";
import TitleHead from "../../Header/TitleHead";

const initialRoles = [
  {
    email: 34,
    symbol: "$",
    code: "USD",
    name: "US Dollar",
    publish: true,
  },
];

const Currencies = () => {
  const [roles, setRoles] = useState(initialRoles);
  const [sortColumn, setSortColumn] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedRoles, setSelectedRoles] = useState(new Set());
  const rolesPerPage = 5;

  const handleSort = (column) => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    const sortedRoles = [...roles].sort((a, b) => {
      if (a[column] < b[column]) return newDirection === "asc" ? -1 : 1;
      if (a[column] > b[column]) return newDirection === "asc" ? 1 : -1;
      return 0;
    });
    setRoles(sortedRoles);
    setSortDirection(newDirection);
    setSortColumn(column);
  };

  const handleCode = (column) => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    const sortedRoles = [...roles].sort((a, b) => {
      if (a[column] < b[column]) return newDirection === "asc" ? -1 : 1;
      if (a[column] > b[column]) return newDirection === "asc" ? 1 : -1;
      return 0;
    });
    setRoles(sortedRoles);
    setSortDirection(newDirection);
    setSortColumn(column);
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
    <>
      <TitleHead title={"Currencies List"} desc={"Currencies List"} />
      <div className="mx-5 my-3 shadow-md hover:shadow-lg">
        <CardHeader
          listmenu={"Currencies List"}
          createlink={"/create-currencies"}
          createmenu={"Currency Create"}
        />

        <HeadingCard />
        <div className="overflow-x-auto ">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-4 py-2 border bg-[#F8FAFD]">
                  <div className="flex items-center justify-center gap-1 ">
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
                    <FaTrashAlt className="text-primary-900 " />
                    <span className="font-semibold">All</span>
                  </div>
                </th>
                <th className="px-4 py-2 border text-left">
                  <button
                    onClick={() => handleSort("name")}
                    className="flex items-center justify-between w-full gap-1"
                  >
                    <h1 className="text-[.7rem] md:text-[.9rem]"> Name </h1>
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
                    onClick={() => handleSort("email")}
                    className="flex items-center justify-between w-full gap-1"
                  >
                    <h1 className="text-[.7rem] md:text-[.9rem]"> Symbol </h1>
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
                    onClick={() => handleCode("code")}
                    className="flex items-center justify-between w-full gap-1"
                  >
                    <h1 className="text-[.7rem] md:text-[.9rem]"> Code </h1>
                    <div className="flex flex-col">
                      <TbTriangleFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "code" && sortDirection === "asc"
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      />
                      <TbTriangleInvertedFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "code" && sortDirection === "desc"
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      />
                    </div>
                  </button>
                </th>
                <th className="text-[.7rem] md:text-[.9rem] px-4 py-2 border text-left bg-[#F8FAFD]">
                  Symbol At Right
                </th>
                <th className="text-[.7rem] md:text-[.9rem] px-4 py-2 border text-left bg-[#F8FAFD]">
                  Active
                </th>
                <th className="text-[.7rem] md:text-[.9rem] px-4 py-2 border text-left bg-[#F8FAFD]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {displayedRoles.map((role, index) => (
                <tr key={index} className="hover:bg-gray-100 bg-[#F9F9F9]">
                  <td className="px-4 py-2 border w-10 text-center">
                    <input
                      className="h-4 w-4"
                      type="checkbox"
                      checked={selectedRoles.has(startIndex + index)}
                      onChange={() => handleRoleSelection(startIndex + index)}
                    />
                  </td>

                  <td className="px-4 py-2 border text-left text-primary-900 text-sm hover:text-black">
                    {role.name}
                  </td>
                  <td className="px-4 py-2 border text-left text-gray-500  text-sm ">
                    {role.symbol}
                  </td>
                  <td className="px-4 py-2 border text-left text-gray-500 text-sm ">
                    {role.code}
                  </td>
                  <td className="px-4 py-2 border text-left text-gray-500 text-sm ">
                    <div>
                      <button className="bg-red-500 border  rounded-md px-2 py-1 text-[.8rem] font-semibold text-white">
                        No
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-2 border text-left text-sm">
                    <div className="flex items-center justify-center ">
                      <div
                        onClick={() => {
                          const updatedRoles = [...roles];
                          updatedRoles[startIndex + index].publish =
                            !updatedRoles[startIndex + index].publish;
                          setRoles(updatedRoles);
                        }}
                        className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer ${
                          role.publish ? "bg-[#008000]" : "bg-primary-900"
                        }`}
                      >
                        <div
                          className={`bg-white w-4 h-4 rounded-full shadow-md transform ${
                            role.publish ? "translate-x-5" : ""
                          }`}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2 border text-left flex gap-2">
                    <Link to={"/create-currencies"}>
                      <MdModeEdit className="p-1 bg-[#008000] text-[1.6rem] rounded-full text-white" />
                    </Link>
                    <button>
                      <FaTrashAlt className="p-1 text-[1.6rem] bg-primary-900 text-white rounded-full" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <DataTableInfo entries={roles.length} totalentries={roles.length} />
      </div>
    </>
  );
};

export default Currencies;
