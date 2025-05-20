import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";
import { MdModeEdit } from "react-icons/md";
import HeadingCard from "../AllCards/HeadingCard";
import DataTableInfo from "../Dashboard/DashboardCards/DataTableInfo";
import ButtonHead from "../Header/ButtonHead";
import TitleHead from "../Header/TitleHead";
import { Link } from "react-router-dom";

const initialRoles = [
  {
    documentfor: "User",

    name: "Foodtrator",
    publish: false,
  },
  {
    documentfor: "driver",

    name: "Food",
    publish: true,
  },
  {
    documentfor: "me",

    name: "Foodtrator",
    publish: false,
  },
  {
    documentfor: "driver",

    name: "Food",
    publish: true,
  },
  {
    documentfor: "driver",

    name: "Foodtrator",
    publish: false,
  },
  {
    documentfor: "driver",

    name: "Food",
    publish: true,
  },
  {
    documentfor: "driver",

    name: "Foodtrator",
    publish: false,
  },
  {
    documentfor: "driver",

    name: "Food",
    publish: true,
  },

  // Add more role objects here...
];

const Documents = () => {
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
      <TitleHead title={"Document"} desc={"Document"} />
      <div className="">
        <ButtonHead
          tab1={"Document List"}
          tab2={"Create Document"}
          link={"/document/create"}
        />
        <HeadingCard />
        <div className="overflow-x-auto scrollbar-custom">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="text-[.7rem] md:text-[1rem]">
                <th className=" p-2 border bg-primary=900">
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
                    <FaTrashAlt className="text-primary-900 text-[.9rem]" />
                    <span className="font-semibold">All</span>
                  </div>
                </th>

                <th className="px-4 py-2 border text-left">
                  <button
                    onClick={() => handleSort("name")}
                    className="flex items-center justify-between w-full gap-1"
                  >
                    <h1> Title </h1>
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
                    <h1> Document For </h1>
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
                <th className="px-4 py-2 border text-left bg-primary=900">
                  Enabled
                </th>
                <th className="px-4 py-2 border text-left bg-primary=900">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {displayedRoles.map((role, index) => (
                <tr key={index} className="hover:bg-gray-100 ">
                  <td className="px-4 py-2 border w-10 text-center ">
                    <input
                      type="checkbox"
                      checked={selectedRoles.has(startIndex + index)}
                      onChange={() => handleRoleSelection(startIndex + index)}
                      className="h-4 w-4"
                    />
                  </td>

                  <td className="px-4 py-2 border text-left  text-primary-900 text-sm hover:text-black">
                    <Link to="/document/create">{role.name}</Link>
                  </td>
                  <td className="px-4 py-2 border text-left text-gray-400 text-sm">
                    {role.documentfor}
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
                        className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer ${
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
                    <Link to="/document/create">
                      <button>
                        <MdModeEdit className="p-1 bg-[#008000] text-[1.6rem] rounded-full text-white" />
                      </button>
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

export default Documents;
