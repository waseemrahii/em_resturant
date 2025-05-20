import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";
import { MdAdd, MdModeEdit } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";
import HeadingCard from "../AllCards/HeadingCard";
import DataTableInfo from "../Dashboard/DashboardCards/DataTableInfo";

import ButtonHead from "../Header/ButtonHead";

import TitleHead from "../Header/TitleHead";

const initialRoles = [
  {
    pageslug: "abonnement",
    publish: true,
    name: "Abonnement",
  },
  {
    pageslug: "abonnements",
    publish: true,
    name: "Abonnements",
  },
  {
    pageslug: "	about-us",
    publish: true,
    name: "About Us",
  },
  {
    pageslug: "this a nice",
    publish: true,
    name: "This a nice",
  },
]; // Example roles

const CMSList = () => {
  const [roles, setRoles] = useState(initialRoles);
  const [sortColumn, setSortColumn] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedRoles, setSelectedRoles] = useState(new Set());
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

  const handleemail = () => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    const sortedRoles = [...roles].sort((a, b) => {
      if (a.name < b.name) return newDirection === "asc" ? -1 : 1;
      if (a.name > b.name) return newDirection === "asc" ? 1 : -1;
      return 0;
    });
    setRoles(sortedRoles);
    setSortDirection(newDirection);
    setSortColumn("email");
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
      {/* <TitleHead title={"CMS Pages"} desc={"CMS Pages"} /> */}
      <div className="mx-5 my-3 shadow-md hover:shadow-lg">
        <div className="flex flex-wrap justify-center gap-2 bg-[#F7F7F7] px-4 py-2 rounded shadow-sm hover:shadow-md">
          <button className="bg-primary-900 text-white py-2 px-3 md:px-4 lg:px-4 rounded flex items-center gap-2">
            <TfiMenuAlt /> Pages List
          </button>
          <Link
            to="/cms/create"
            className="bg-white hover:bg-primary-900 hover:text-white py-2 px-1 md:px-4 lg:px-4 rounded flex items-center"
          >
            <MdAdd className="text-xl font-bold" /> Create A Pages
          </Link>
        </div>
        <HeadingCard />
        <div className="overflow-x-auto scrollbar-custom">
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
                    <FaTrashAlt className="text-primary-900 text-[.9rem] " />
                    <span className="font-semibold">All</span>
                  </div>
                </th>

                <th className="px-4 py-2 border text-left">
                  <button
                    onClick={handleSort}
                    className="flex items-center justify-between w-full gap-1"
                  >
                    <h1 className="block text-gray-700 md:font-bold  font-semibold  md:text-[1rem] ">
                      {" "}
                      Page Name{" "}
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
                    onClick={handleemail}
                    className="flex items-center justify-between w-full gap-1"
                  >
                    <h1> Page Slug </h1>
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

                <th className=" text-gray-700 md:font-bold  font-semibold  md:text-[1rem] px-4 py-2 border text-left bg-[#F8FAFD]">
                  Status
                </th>
                <th className=" text-gray-700 md:font-bold  font-semibold  md:text-[1rem] px-4 py-2 border text-left bg-[#F8FAFD]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {displayedRoles.map((role, index) => (
                <tr key={index} className="hover:bg-gray-200">
                  <td className="px-4 py-2 border w-10 text-center">
                    <input
                      type="checkbox"
                      checked={selectedRoles.has(startIndex + index)}
                      onChange={() => handleRoleSelection(startIndex + index)}
                      className="h-4 w-4"
                    />
                  </td>
                  <td className="px-4 py-2 border text-left text-primary-900 text-sm">
                    {role.name}
                  </td>
                  <td className="px-4 py-2 border text-left text-gray-400 text-sm">
                    {role.pageslug}
                  </td>
                  <td className="px-4 py-2 border text-left">
                    <div className="flex items-center justify-center ">
                      <div
                        onClick={() => {
                          const updatedRoles = [...roles];
                          updatedRoles[startIndex + index].publish =
                            !updatedRoles[startIndex + index].publish;
                          setRoles(updatedRoles);
                        }}
                        className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${
                          role.publish ? "bg-[#008000]" : "bg-primary-900"
                        }`}
                      >
                        <div
                          className={`bg-white w-4 h-4 rounded-full shadow-md transform ${
                            role.publish ? "translate-x-6" : ""
                          }`}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2 border text-left flex gap-2">
                    <Link to={"/cms-create"}>
                      <MdModeEdit className="p-1 bg-[#008000] text-[1.6rem] rounded-full text-white" />
                    </Link>
                    <button>
                      <FaTrashAlt className="p-1 bg-primary-900 text-[1.6rem] rounded-full text-white" />
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

export default CMSList;
