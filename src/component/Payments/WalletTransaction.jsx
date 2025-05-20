import React, { useState } from "react";
import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";
import { TfiMenuAlt } from "react-icons/tfi";
import img from "/logo-e.png";
import HeadingCard from "../AllCards/HeadingCard";
import DataTableInfo from "../Dashboard/DashboardCards/DataTableInfo";
import TitleHead from "../Header/TitleHead";

const initialRoles = [
  {
    amount: "($443)",
    date: "Fri jun 2023 12:23:00Pm",
    note: "refound By Admn",

    roles: "vendor",
    name: "Admin",
  },
  {
    amount: "($413)",
    date: "Fri jun 2023 12:23:00 Pm",
    note: "",

    roles: "vendor",
    name: "Admin",
  },
  {
    amount: "($432)",
    date: "Fri jun 2023 12:23:00Pm",
    note: "refound By Admin",

    roles: "vendor",
    name: "User ",
  },
  {
    amount: "($434)",
    date: "Monday jun 2023 12:23:00Pm",
    note: "",

    roles: "vendor",
    name: "Ali",
  },
  {
    amount: "($453)",
    date: "Fri jun 2023 12:23:00Pm",
    note: "refound By Admin",

    roles: "vendor",
    name: "Rendor",
  },
  {
    amount: "($453)",
    date: "Fri jun 2023 12:23:00Pm",
    note: "refound By Admin",

    roles: "vendor",
    name: " Vicky",
  },
  {
    amount: "($493)",
    date: "Fri jun 2023 12:23:00Pm",
    note: "refound By Admin",

    roles: "vendor",
    name: "Admin",
  },
  {
    amount: "($4)",
    date: "Fri jun 2023 12:23:00Pm",
    note: "refound By Admin",

    roles: "vendor",
    name: "Khan",
  },
  {
    amount: "($3)",
    date: "Fri jun 2023 12:23:00Pm",
    note: "refound By Admin",

    roles: "vendor",
    name: "User ",
  },
  {
    amount: "($43)",
    date: "Fri jun 2023 12:23:00Pm",
    note: "refound By Admin",

    roles: "vendor",
    name: "Super",
  },
  {
    amount: "($43)",
    date: "Fri jun 2023 12:23:00Pm",
    note: "refound By Admin",

    roles: "vendor",
    name: "AVicky ",
  },
  {
    amount: "($43)",
    date: "Fri jun 2023 12:23:00Pm",
    note: "refound By Admin",

    roles: "vendor",
    name: " Vicky",
  },
]; // Example roles

const WalletTransaction = () => {
  const [showQuantity, setShowQuantity] = useState({});
  const toggleQuantity = (index) => {
    setShowQuantity((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  const showTitle = true;
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

  const handlerole = () => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    const sortedRoles = [...roles].sort((a, b) => {
      if (a.name < b.name) return newDirection === "asc" ? -1 : 1;
      if (a.name > b.name) return newDirection === "asc" ? 1 : -1;
      return 0;
    });
    setRoles(sortedRoles);
    setSortDirection(newDirection);
    setSortColumn("role");
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

  const startIndex = currentPage * rolesPerPage;
  const displayedRoles = roles.slice(startIndex, startIndex + rolesPerPage);
  return (
    <>
      {showTitle ? (
        <TitleHead
          title="Wallet Transaction"
          desc=" Wallet Transaction"
          link={""}
        />
      ) : null}
      <div className="">
        <div className="flex flex-wrap justify-center gap-2 bg-primary-10 p-4  rounded-t mx-2 shadow-md">
          <button className="bg-primary-900 text-white py-2 px-3 md:px-4 lg:px-4 rounded flex items-center gap-2">
            <TfiMenuAlt /> Wallet Transcation Table
          </button>
          {/* <button className="bg-white hover:bg-primary-900 hover:text-white py-2 px-1 md:px-4 lg:px-4 rounded flex items-center">
          <MdAdd className="text-xl font-bold" /> Create A Pages
        </button> */}
        </div>
        <HeadingCard />
        <div className="overflow-x-auto scrollbar-custom">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="text-[.7rem] md:text-[1rem]">
                <th className="px-4 py-2 border bg-[#F8FAFD] text-left">
                  <button
                    onClick={handleSort}
                    className="flex items-center justify-between w-full gap-1"
                  >
                    <h1> User </h1>
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
                    onClick={handlerole}
                    className="flex items-center justify-between w-full gap-1"
                  >
                    <h1> Role</h1>
                    <div className="flex flex-col">
                      <TbTriangleFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "role" && sortDirection === "asc"
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      />
                      <TbTriangleInvertedFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "role" && sortDirection === "desc"
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      />
                    </div>
                  </button>
                </th>
                <th className="px-4 py-2 border text-left">
                  <button
                    onClick={handleamount}
                    className="flex items-center justify-between w-full gap-1"
                  >
                    <h1>Amount</h1>
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
                <th className="px-4 py-2 border text-left">
                  <button
                    onClick={handledate}
                    className="flex items-center justify-between w-full gap-1"
                  >
                    <h1>Date</h1>
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

                <th className="px-4 py-2 border text-left bg-[#F8FAFD]">
                  Note
                </th>
                <th className="px-4 py-2 border text-left bg-[#F8FAFD]">
                  Payment Method
                </th>
              </tr>
            </thead>
            <tbody>
              {displayedRoles.map((role, index) => (
                <>
                  <tr key={index} className="border hover:bg-gray-100 text-sm">
                    <td className="px-4 py-2 flex items-center gap-4">
                      {showQuantity[index] ? (
                        <IoMdRemoveCircle
                          className="text-primary-900 text-xl border border-gray-400 rounded-full cursor-pointer"
                          onClick={() => toggleQuantity(index)}
                        />
                      ) : (
                        <IoMdAddCircle
                          className="text-[#008000] text-xl border border-gray-400 rounded-full cursor-pointer"
                          onClick={() => toggleQuantity(index)}
                        />
                      )}
                      <h1 className="text-primary-900 hover:text-black truncate ">
                        {role.name}
                      </h1>
                    </td>
                    {/* <td className="px-4 py-2 border text-left text-primary-900 text-md">
                  {role.name}
                </td> */}
                    <td className="px-4 py-2 border text-left text-gray-400 text-md">
                      {role.roles}
                    </td>
                    <td className="px-4 py-2 border text-left text-primary-900 text-md">
                      {role.amount}
                    </td>
                    <td className="px-4 py-2 border text-left text-gray-400 text-md">
                      {role.date}
                    </td>
                    <td className="px-4 py-2 border text-left text-gray-400 text-md">
                      {role.note}
                    </td>
                    <td className="px-4 py-2 border text-left">
                      <img
                        src={img}
                        alt=""
                        className="h-10 w-16 object-contain rounded-md"
                      />{" "}
                      {/* <button>
                    <MdModeEdit className="p-1 bg-primary-400 text-[1.6rem] rounded-full text-white" />
                  </button> */}
                    </td>
                  </tr>
                  <tr>
                    {showQuantity[index] && (
                      <div className="flex justify-between px-4 py-2">
                        <h1 className="text-gray-500 font-semibold  ">
                          Payment Status
                          {/* <FaCartShopping className="text-gray-500" /> */}
                          {/* {role.name} */}
                        </h1>
                        <span className="text-secondary font-semibold">
                          Success
                        </span>
                      </div>
                    )}
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
        <DataTableInfo entries={roles.length} totalentries={roles.length} />
      </div>
    </>
  );
};

export default WalletTransaction;
