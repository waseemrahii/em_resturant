import React, { useState } from "react";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";
import HeadingCard from "../AllCards/HeadingCard";
import DataTableInfo from "../Dashboard/DashboardCards/DataTableInfo";
import TitleHead from "../Header/TitleHead";

const initialRoles = [
  {
    totalamount: "($23333)",
    paidamount: "($2333)",
    remainingamount: "(-$433)",
    name: "Super Administrator",
  },
  {
    totalamount: "($233333)",
    paidamount: "($23333)",
    remainingamount: "(-$4333)",
    name: "Administrator",
  },
  {
    totalamount: "($2333)",
    paidamount: "($332)",
    remainingamount: "(-$4333)",
    name: "User",
  },
  {
    totalamount: "($2333)",
    paidamount: "($23)",
    remainingamount: "(-$432)",
    name: "Super Administrator",
  },
  {
    totalamount: "($23)",
    paidamount: "($2)",
    remainingamount: "(-$433)",
    name: "Administrator",
  },
  {
    totalamount: "($23)",
    paidamount: "($2)",
    remainingamount: "(-$43)",
    name: "User",
  },
  {
    totalamount: "($23)",
    paidamount: "($2)",
    remainingamount: "(-$43)",
    name: "Super Administrator",
  },
  {
    totalamount: "($23)",
    paidamount: "($2)",
    remainingamount: "(-$43)",
    name: "Administrator",
  },
  {
    totalamount: "($2356)",
    paidamount: "($245)",
    remainingamount: "(-$43)",
    name: "User",
  },
  {
    totalamount: "($23777)",
    paidamount: "($277)",
    remainingamount: "(-$43)",
    name: "Super Administrator",
  },
]; // Example roles

const DriverPayments = () => {
  const [roles, setRoles] = useState(initialRoles);
  const [sortColumn, setSortColumn] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(0);
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
    <>
      <TitleHead title="Driver Payments" desc="Payments > Driver Payments" />
      <div className="shadow-lg">
        <HeadingCard />
        <div className="overflow-x-auto scrollbar-custom">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="text-[.7rem] md:text-[1rem]">
                <th className="px-4 py-2 border text-left text-sm">
                  <button
                    onClick={handleSort}
                    className="flex items-center justify-between w-full gap-1 "
                  >
                    <h1> Driver </h1>
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
                <th className="px-4 py-2 border text-left text-sm">
                  <button
                    onClick={handletotalamount}
                    className="flex items-center justify-between w-full gap-1"
                  >
                    <h1> Total Amount</h1>
                    <div className="flex flex-col">
                      <TbTriangleFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "totalamount" &&
                          sortDirection === "asc"
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      />
                      <TbTriangleInvertedFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "totalamount" &&
                          sortDirection === "desc"
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      />
                    </div>
                  </button>
                </th>
                <th className="px-4 py-2 border text-left text-sm">
                  <button
                    onClick={handlepaidamount}
                    className="flex items-center justify-between w-full gap-1"
                  >
                    <h1>Paid Amount</h1>
                    <div className="flex flex-col">
                      <TbTriangleFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "paidamount" && sortDirection === "asc"
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      />
                      <TbTriangleInvertedFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "paidamount" &&
                          sortDirection === "desc"
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      />
                    </div>
                  </button>
                </th>
                <th className="px-4 py-2 border text-left text-sm">
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
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      />
                      <TbTriangleInvertedFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "remainingamount" &&
                          sortDirection === "desc"
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      />
                    </div>
                  </button>
                </th>

                {/* <th className="px-4 py-2 border text-left bg-[#F8FAFD]">
                Status
              </th> */}
              </tr>
            </thead>
            <tbody>
              {displayedRoles.map((role, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border text-left text-primary-900 text-sm">
                    {role.name}
                  </td>
                  <td className="px-4 py-2 border text-left text-secondary  text-sm">
                    {role.totalamount}
                  </td>
                  <td className="px-4 py-2 border text-left text-primary-400 text-sm">
                    {role.paidamount}
                  </td>
                  <td className="px-4 py-2 border text-left text-sm text-red-500">
                    {role.remainingamount}
                    {/* <button>
                    <MdModeEdit className="p-1 bg-primary-400 text-[1.6rem] rounded-full text-white" />
                  </button> */}
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

export default DriverPayments;
