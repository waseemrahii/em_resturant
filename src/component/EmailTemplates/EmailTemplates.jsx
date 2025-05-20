import { useState } from "react";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";
import { MdModeEdit } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import HeadingCard from "../AllCards/HeadingCard";
import DataTableInfo from "../Dashboard/DashboardCards/DataTableInfo";
import TitleHead from "../Header/TitleHead";
import { Link } from "react-router-dom";

const initialRoles = [
  {
    roles: "Your Order Confirmation - {orderid}",
    name: "New Order Place",
  },
  {
    roles: "	New User Registration Notification",
    name: "New registration of vendor",
  },
  {
    roles: "Payout Request Status - {requestid}",
    name: "Payout request approve and disapprove.",
  },
  {
    roles: "Payout Request - {userid}",
    name: "Payout Requests",
  },
  {
    roles: "Wallet Topup Confirmation",
    name: "Wallet Topup",
  },
]; // Example roles

const EmailTemplates = () => {
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

  const startIndex = currentPage * rolesPerPage;
  const displayedRoles = roles.slice(startIndex, startIndex + rolesPerPage);

  return (
    <>
      <TitleHead title="Email Templates" desc="Email Templates " />
      <div className="shadow-lg">
        <div className="flex flex-wrap justify-center gap-2 bg-[#F7F7F7] px-4  rounded shadow-sm hover:shadow-md">
          <button className="bg-primary-900 text-white py-2 px-3 md:px-4 lg:px-4 rounded flex items-center gap-2">
            <TfiMenuAlt /> Email Templates List
          </button>
        </div>
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
                    <h1 className="block text-gray-700 font-semibold md:font-bold text-[.9rem] md:text-[1rem] ">
                      {" "}
                      Type{" "}
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
                    <h1 className="block text-gray-700 font-semibold md:font-bold text-[.9rem] md:text-[1rem] ">
                      {" "}
                      Subject
                    </h1>
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

                {/* <th className="px-4 py-2 border text-left bg-[#F8FAFD]">
                Status
              </th> */}
                <th className="block text-gray-700 font-semibold md:font-bold text-[.9rem] md:text-[1rem] px-4 py-2 border text-left bg-[#F8FAFD]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {displayedRoles.map((role, index) => (
                <tr key={index} className="hover:bg-gray-100 bg-[#F9F9F9]">
                  {/* <td className="px-4 py-2 border w-10 text-center">
                  <input
                    type="checkbox"
                    checked={selectedRoles.has(startIndex + index)}
                    onChange={() => handleRoleSelection(startIndex + index)}
                  />
                </td> */}
                  <td className="px-4 py-2 border text-left text-gray-400 text-sm">
                    {role.name}
                  </td>
                  {/* <td className="px-4 py-2 border text-left text-primary-900 text-md">
                  {role.email}
                </td> */}
                  <td className="px-4 py-2 border text-left text-gray-400 text-sm">
                    {role.roles}
                  </td>
                  <td className="px-4 py-2 border text-left text-sm">
                    <Link to="/email/templates/create">
                      <MdModeEdit className="p-1 bg-[#008000] text-[1.6rem] rounded-full text-white" />
                    </Link>
                    {/* <button>
                      <MdModeEdit className="p-1 bg-[#008000] text-[1.6rem] rounded-full text-white" />
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

export default EmailTemplates;
