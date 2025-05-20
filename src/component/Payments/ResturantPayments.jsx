import React, { useState } from "react";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";
import HeadingCard from "../AllCards/HeadingCard";
import DataTableInfo from "../Dashboard/DashboardCards/DataTableInfo";
import { MdModeEdit } from "react-icons/md";

const initialRoles = [
  {
    paidamount: "($34)",
    totalamount: "($233)",
    remainingamount: "($22)",
    name: "Super Administrator",
  },
  {
    paidamount: "($34)",
    totalamount: "($233)",
    remainingamount: "($22)",
    name: "Administrator",
  },
  {
    paidamount: "($34)",
    totalamount: "($233)",
    remainingamount: "($22)",
    name: "User",
  },
  {
    paidamount: "($34)",
    totalamount: "($233)",
    remainingamount: "($22)",
    name: "Super Administrator",
  },
  {
    paidamount: "($34)",
    totalamount: "($233)",
    remainingamount: "($22)",
    name: "Administrator",
  },
  {
    paidamount: "($34)",
    totalamount: "($233)",
    remainingamount: "($22)",
    name: "User",
  },
  {
    paidamount: "($34)",
    totalamount: "($233)",
    remainingamount: "($22)",
    name: "Super Administrator",
  },
  {
    paidamount: "($34)",
    totalamount: "($233)",
    remainingamount: "($22)",
    name: "Administrator",
  },
  {
    paidamount: "($34)",
    totalamount: "($233)",
    remainingamount: "($22)",
    name: "User",
  },
  {
    paidamount: "($34)",
    totalamount: "($233)",
    remainingamount: "($22)",
    name: "Super Administrator",
  },
  {
    paidamount: "($34)",
    totalamount: "($233)",
    remainingamount: "($22)",
    name: "Administrator",
  },
  {
    paidamount: "($34)",
    totalamount: "($233)",
    remainingamount: "($22)",
    name: "User",
  },
]; // Example roles

const ResturantPayments = () => {
  const [roles, setRoles] = useState(initialRoles);
  const [sortColumn, setSortColumn] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(0);
  // const [selectedRoles, setSelectedRoles] = useState(new Set());
  const rolesPerPage = 10;

  const handleSort = () => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    const sortedRoles = [...roles].sort((a, b) => {
      if (a.name < b.name) return newDirection === "asc" ? -1 : 1;
      if (a.name > b.name) return newDirection === "asc" ? 1 : -1;
      return 0;
    });
    setRoles(sortedRoles);
    setSortDirection(newDirection);
    setSortColumn("name");
  };

  const handlepaidamount = () => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    const sortedRoles = [...roles].sort((a, b) => {
      if (a.name < b.name) return newDirection === "asc" ? -1 : 1;
      if (a.name > b.name) return newDirection === "asc" ? 1 : -1;
      return 0;
    });
    setRoles(sortedRoles);
    setSortDirection(newDirection);
    setSortColumn("paidamount");
  };
  const handletotalamount = () => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    const sortedRoles = [...roles].sort((a, b) => {
      if (a.name < b.name) return newDirection === "asc" ? -1 : 1;
      if (a.name > b.name) return newDirection === "asc" ? 1 : -1;
      return 0;
    });
    setRoles(sortedRoles);
    setSortDirection(newDirection);
    setSortColumn("totalamount");
  };
  const handleremainingamount = () => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    const sortedRoles = [...roles].sort((a, b) => {
      if (a.name < b.name) return newDirection === "asc" ? -1 : 1;
      if (a.name > b.name) return newDirection === "asc" ? 1 : -1;
      return 0;
    });
    setRoles(sortedRoles);
    setSortDirection(newDirection);
    setSortColumn("remainingamount");
  };

  const startIndex = currentPage * rolesPerPage;
  const displayedRoles = roles.slice(startIndex, startIndex + rolesPerPage);

  return (
    <div className=" shadow-lg rounded-lg">
      <HeadingCard />
      <div className="overflow-x-auto scrollbar-custom">
        <table className="min-w-full">
          <thead>
            <tr className="text-[.7rem]  md:text-[1rem]">
              <th className="px-2 py-1 border text-left">
                <button
                  onClick={handleSort}
                  className="flex items-center justify-between w-full gap-1"
                >
                  <h1> Restaurant </h1>
                  <div className="flex flex-col">
                    <TbTriangleFilled
                      className={`transition-colors text-[.5rem] ${
                        sortColumn === "name" && sortDirection === "asc"
                          ? "text-primary-500"
                          : "text-primary-300"
                      }`}
                    />
                    <TbTriangleInvertedFilled
                      className={`transition-colors text-[.5rem] ${
                        sortColumn === "name" && sortDirection === "desc"
                          ? "text-primary-500"
                          : "text-primary-300"
                      }`}
                    />
                  </div>
                </button>
              </th>
              <th className="px-2 py-1 border text-left">
                <button
                  onClick={handletotalamount}
                  className="flex items-center justify-between w-full gap-1"
                >
                  <h1> Total Amount</h1>
                  <div className="flex flex-col">
                    <TbTriangleFilled
                      className={`transition-colors text-[.5rem] ${
                        sortColumn === "totalamount" && sortDirection === "asc"
                          ? "text-primary-500"
                          : "text-primary-300"
                      }`}
                    />
                    <TbTriangleInvertedFilled
                      className={`transition-colors text-[.5rem] ${
                        sortColumn === "totalamount" && sortDirection === "desc"
                          ? "text-primary-500"
                          : "text-primary-300"
                      }`}
                    />
                  </div>
                </button>
              </th>
              <th className="px-2 py-1 border text-left">
                <button
                  onClick={handlepaidamount}
                  className="flex items-center justify-between w-full gap-1"
                >
                  <h1>Paid Amount</h1>
                  <div className="flex flex-col">
                    <TbTriangleFilled
                      className={`transition-colors text-[.5rem] ${
                        sortColumn === "paidamount" && sortDirection === "asc"
                          ? "text-primary-500"
                          : "text-primary-300"
                      }`}
                    />
                    <TbTriangleInvertedFilled
                      className={`transition-colors text-[.5rem] ${
                        sortColumn === "paidamount" && sortDirection === "desc"
                          ? "text-primary-500"
                          : "text-primary-300"
                      }`}
                    />
                  </div>
                </button>
              </th>
              <th className="px-2 py-1 border text-left">
                <button
                  onClick={handleremainingamount}
                  className="flex items-center justify-between w-full gap-1"
                >
                  <h1> Remaining Amount</h1>
                  <div className="flex flex-col">
                    <TbTriangleFilled
                      className={`transition-colors text-[.5rem] ${
                        sortColumn === "remainingamount" &&
                        sortDirection === "asc"
                          ? "text-primary-500"
                          : "text-primary-300"
                      }`}
                    />
                    <TbTriangleInvertedFilled
                      className={`transition-colors text-[.5rem] ${
                        sortColumn === "remainingamount" &&
                        sortDirection === "desc"
                          ? "text-primary-500"
                          : "text-primary-300"
                      }`}
                    />
                  </div>
                </button>
              </th>

              {/* <th className="px-2 py-1 border text-left bg-[#F8FAFD]">
                Status
              </th> */}
            </tr>
          </thead>
          <tbody>
            {displayedRoles.map((role, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-2 py-1 border text-left text-primary-900 text-sm">
                  {role.name}
                </td>
                <td className="px-2 py-1 border text-left text-secondary text-sm">
                  {role.totalamount}
                </td>
                <td className="px-2 py-1 border text-left text-primary-900 text-sm">
                  {role.paidamount}
                </td>
                <td className="px-2 py-1 border text-left text-orange-400 text-sm">
                  {role.remainingamount}
                </td>
                {/* <td className="px-2 py-1 border text-left text-primary-400 text-sm">
                  <MdModeEdit className="p-1 bg-primary-400 text-[1.6rem] rounded-full text-white" />
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <DataTableInfo entries={roles.length} totalentries={roles.length} />
    </div>
  );
};

export default ResturantPayments;
