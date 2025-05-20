import React, { useState } from "react";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";
import { MdAdd } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";
import HeadingCard from "../AllCards/HeadingCard";
import DataTableInfo from "../Dashboard/DashboardCards/DataTableInfo";
import TitleHead from "../Header/TitleHead";
import ButtonHead from "../Header/ButtonHead";

const initialRoles = [
  {
    date: "Sun jan 2024 12:34:00 Pm",
    note: "from App",
    adminnote: "From Admin",
    paidamount: "($23)",
    name: "Super Administrator",
  },
  {
    date: "Sun jan 2024 12:34:00 Pm",
    note: "from App",
    adminnote: "From Admin",
    paidamount: "($23)",
    name: "Administrator",
  },
  {
    date: "Sun jan 2024 12:34:00 Pm",
    note: "from App",
    adminnote: "From Admin",
    paidamount: "($23)",
    name: "User",
  },
  {
    date: "Sun jan 2024 12:34:00 Pm",
    note: "from App",
    adminnote: "From Admin",
    paidamount: "($23)",
    name: "Super Administrator",
  },
  {
    date: "Sun jan 2024 12:34:00 Pm",
    note: "from App",
    adminnote: "From Admin",
    paidamount: "($23)",
    name: "Administrator",
  },
  {
    date: "Sun jan 2024 12:34:00 Pm",
    note: "from App",
    adminnote: "From Admin",
    paidamount: "($23)",
    name: "User",
  },
  {
    date: "Sun jan 2024 12:34:00 Pm",
    note: "from App",
    adminnote: "From Admin",
    paidamount: "($23)",
    name: "Super Administrator",
  },
  {
    date: "Sun jan 2024 12:34:00 Pm",
    note: "from App",
    adminnote: "From Admin",
    paidamount: "($23)",
    name: "Administrator",
  },
  {
    date: "Sun jan 2024 12:34:00 Pm",
    note: "from App",
    adminnote: "From Admin",
    paidamount: "($23)",
    name: "User",
  },
  {
    date: "Sun jan 2024 12:34:00 Pm",
    note: "from App",
    adminnote: "From Admin",
    paidamount: "($23)",
    name: "Super Administrator",
  },
  {
    date: "Sun jan 2024 12:34:00 Pm",
    note: "from App",
    adminnote: "From Admin",
    paidamount: "($23)",
    name: "Administrator",
  },
  {
    date: "Sun jan 2024 12:34:00 Pm",
    note: "from App",
    adminnote: "From Admin",
    paidamount: "($23)",
    name: "User",
  },
]; // Example roles

const RestaurantPayOut = () => {
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
      <TitleHead
        title="Restaurants Payouts"
        desc="Restaurants > Restaurants Payouts"
      />
      <div className="shadow-lg">
        {/* <div className="flex flex-wrap justify-center gap-2 bg-[#F7F7F7] px-4  rounded shadow-sm hover:shadow-md">
        <button className="bg-primary-900 text-white py-2 px-3 md:px-4 lg:px-4 rounded flex items-center gap-2">
          <TfiMenuAlt /> Restaurants Payouts List
        </button>
        <Link
          to="/restaurantdetailes"
          className="bg-white hover:bg-primary-900 hover:text-white py-2 px-1 md:px-4 lg:px-4 rounded flex items-center"
        >
          <MdAdd className="text-xl font-bold" /> Create Restaurants Payout
        </Link>
      </div> */}
        <ButtonHead
          tab1={"Restaurants Payouts"}
          tab2={"Create Restaurants Payout"}
          link={"/payouts/restaurants/create"}
        />
        <HeadingCard />
        <div className="overflow-x-auto scrollbar-custom">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-4 py-2 border text-left">
                  <button
                    onClick={handleSort}
                    className="flex items-center justify-between w-full gap-1"
                  >
                    <h1 className="text-[.7rem] md:text-[1rem]">
                      {" "}
                      Restaurant{" "}
                    </h1>
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
                    onClick={handlepaidamount}
                    className="flex items-center justify-between w-full gap-1"
                  >
                    <h1 className="text-[.7rem] md:text-[1rem]">Paid Amount</h1>
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
                <th className="px-4 py-2 border text-left">
                  <button
                    onClick={handledate}
                    className="flex items-center justify-between w-full gap-1"
                  >
                    <h1 className="text-[.7rem] md:text-[1rem]"> Date</h1>
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
                    onClick={handlenote}
                    className="flex items-center justify-between w-full gap-1"
                  >
                    <h1 className="text-[.7rem] md:text-[1rem]"> Note</h1>
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
                <th className="px-4 py-2 border text-left">
                  <button
                    onClick={handleadminnote}
                    className="flex items-center justify-between w-full gap-1"
                  >
                    <h1 className="text-[.7rem] md:text-[1rem]"> Admin Note</h1>
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
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border text-left text-primary-900 text-sm">
                    {role.name}
                  </td>
                  <td className="px-4 py-2 border text-left text-primary-900 text-sm">
                    {role.paidamount}
                  </td>
                  <td className="px-4 py-2 border text-left text-gray-400 text-sm">
                    {role.date}
                  </td>
                  <td className="px-4 py-2 border text-left text-gray-400 text-sm">
                    {role.note}
                  </td>
                  <td className="px-4 py-2 border text-left text-gray-400 text-sm">
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

export default RestaurantPayOut;
