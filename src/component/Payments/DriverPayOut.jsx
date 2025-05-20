import React, { useState } from "react";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";
import { MdAdd } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";
import HeadingCard from "../AllCards/HeadingCard";
import DataTableInfo from "../Dashboard/DashboardCards/DataTableInfo";
import ButtonHead from "../Header/ButtonHead";
import TitleHead from "../Header/TitleHead";

const initialRoles = [
  {
    amount: "$254",
    date: "Sun Aug 2023 11:23:00 Pm ",
    note: "test",
    adminnote: "md 4",
    name: "Super Administrator",
  },
  {
    amount: "$242",
    date: "Sun Aug 2023 11:23:00 Pm ",
    note: "test",
    adminnote: "admin from 4",
    name: "Administrator",
  },
  {
    amount: "$242",
    date: "Sun Aug 2023 11:23:00 Pm ",
    note: "test",
    adminnote: "admin from 4",
    name: "User",
  },
  {
    amount: "$264",
    date: "Sun Aug 2023 11:23:00 Pm ",
    note: "test",
    adminnote: "admin from 4",
    name: "Super Administrator",
  },
  {
    amount: "$254",
    date: "Sun Aug 2023 11:23:00 Pm ",
    note: "test",
    adminnote: "admin from 4",
    name: "Administrator",
  },
  {
    amount: "$242",
    date: "Sun Aug 2023 11:23:00 Pm ",
    note: "test",
    adminnote: "admin from 4",
    name: "User",
  },
  {
    amount: "$2e4",
    date: "Sun Aug 2023 11:23:00 Pm ",
    note: "test",
    adminnote: "admin from 4",
    name: "Super Administrator",
  },
  {
    amount: "$274",
    date: "Sun Aug 2023 11:23:00 Pm ",
    note: "test",
    adminnote: "admin from 4",
    name: "Administrator",
  },
  {
    amount: "$4",
    date: "Sun Aug 2023 11:23:00 Pm ",
    note: "",
    adminnote: "user 4",
    name: "User",
  },
  {
    amount: "$2",
    date: "Mon Aug 2023 11:23:00 Pm ",
    note: "check",
    adminnote: " 4",
    name: "Super Administrator",
  },
  {
    amount: "$24",
    date: "Sun Aug 2023 11:23:00 Pm ",
    note: "test",
    adminnote: "admin from 4",
    name: "Administrator",
  },
  {
    amount: "$24",
    date: "Sun Aug 2023 11:23:00 Pm ",
    note: "test",
    adminnote: "admin from 4",
    name: "User",
  },
]; // Example roles

const DriverPayOut = () => {
  const [roles, setRoles] = useState(initialRoles);
  const [sortColumn, setSortColumn] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(0);
  const rolesPerPage = 5;

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

  const handleamount = () => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    const sortedRoles = [...roles].sort((a, b) => {
      if (a.name < b.name) return newDirection === "asc" ? -1 : 1;
      if (a.name > b.name) return newDirection === "asc" ? 1 : -1;
      return 0;
    });
    setRoles(sortedRoles);
    setSortDirection(newDirection);
    setSortColumn("amount");
  };
  const handlenote = () => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    const sortedRoles = [...roles].sort((a, b) => {
      if (a.name < b.name) return newDirection === "asc" ? -1 : 1;
      if (a.name > b.name) return newDirection === "asc" ? 1 : -1;
      return 0;
    });
    setRoles(sortedRoles);
    setSortDirection(newDirection);
    setSortColumn("note");
  };
  const handledate = () => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    const sortedRoles = [...roles].sort((a, b) => {
      if (a.name < b.name) return newDirection === "asc" ? -1 : 1;
      if (a.name > b.name) return newDirection === "asc" ? 1 : -1;
      return 0;
    });
    setRoles(sortedRoles);
    setSortDirection(newDirection);
    setSortColumn("date");
  };
  const handleadminnote = () => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    const sortedRoles = [...roles].sort((a, b) => {
      if (a.name < b.name) return newDirection === "asc" ? -1 : 1;
      if (a.name > b.name) return newDirection === "asc" ? 1 : -1;
      return 0;
    });
    setRoles(sortedRoles);
    setSortDirection(newDirection);
    setSortColumn("adminnote");
  };

  const startIndex = currentPage * rolesPerPage;
  const displayedRoles = roles.slice(startIndex, startIndex + rolesPerPage);
  return (
    <>
      <TitleHead title="Driver Payouts" desc="Payments > Driver Payouts" />
      <div className="shadow-lg">
        <ButtonHead
          tab1={"Driver Payouts List"}
          tab2={"Create Driver Payout"}
          link={"/payouts/drivers/create"}
        />
        <HeadingCard />
        <div className="overflow-x-auto scrollbar-custom">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="text-[.7rem] md:text-[1rem]">
                <th className="px-4 py-2 border text-left text-sm">
                  <button
                    onClick={handleSort}
                    className="flex items-center justify-between w-full gap-1"
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
                    onClick={handleamount}
                    className="flex items-center justify-between w-full gap-1"
                  >
                    <h1>Paid Amount</h1>
                    <div className="flex flex-col">
                      <TbTriangleFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "amount" && sortDirection === "asc"
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      />
                      <TbTriangleInvertedFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "amount" && sortDirection === "desc"
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      />
                    </div>
                  </button>
                </th>
                <th className="px-4 py-2 border text-left text-sm">
                  <button
                    onClick={handledate}
                    className="flex items-center justify-between w-full gap-1"
                  >
                    <h1>Paid Date</h1>
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
                <th className="px-4 py-2 border text-left text-sm">
                  <button
                    onClick={handlenote}
                    className="flex items-center justify-between w-full gap-1"
                  >
                    <h1> Note</h1>
                    <div className="flex flex-col">
                      <TbTriangleFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "note" && sortDirection === "asc"
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      />
                      <TbTriangleInvertedFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "note" && sortDirection === "desc"
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      />
                    </div>
                  </button>
                </th>
                <th className="px-4 py-2 border text-left text-sm">
                  <button
                    onClick={handleadminnote}
                    className="flex items-center justify-between w-full gap-1"
                  >
                    <h1> Admin Note</h1>
                    <div className="flex flex-col">
                      <TbTriangleFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "adminnote" && sortDirection === "asc"
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      />
                      <TbTriangleInvertedFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "adminnote" && sortDirection === "desc"
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
                <tr key={index} className="hover:bg-gray-100 text-sm">
                  <td className="px-4 py-2 border text-left text-primary-900 ">
                    {role.name}
                  </td>
                  <td className="px-4 py-2 border text-left text-primary-900 ">
                    {role.amount}
                  </td>
                  <td className="px-4 py-2 border text-left text-gray-400 ">
                    {role.date}
                  </td>
                  <td className="px-4 py-2 border text-left text-gray-400 ">
                    {role.note}
                  </td>
                  <td className="px-4 py-2 border text-left text-gray-400">
                    {role.adminnote}
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

export default DriverPayOut;
