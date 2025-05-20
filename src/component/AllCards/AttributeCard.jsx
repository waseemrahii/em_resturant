import React, { useState, useEffect } from "react";
import { MdAdd, MdModeEdit } from "react-icons/md";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";

import { TfiMenuAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";
import HeadingCard from "./HeadingCard";
import DataTableInfo from "../Dashboard/DashboardCards/DataTableInfo";

const AttributeCard = ({ attributes = [], name }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortedAttributes, setSortedAttributes] = useState(attributes);

  const entriesPerPage = 6;

  useEffect(() => {
    setSortedAttributes(attributes); // Reset to default attributes when props change
  }, [attributes]);

  const handleSort = () => {
    const sorted = [...sortedAttributes].sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setSortedAttributes(sorted);
    setCurrentPage(0); // Reset to the first page after sorting
  };

  const currentEntries = sortedAttributes.slice(
    currentPage * entriesPerPage,
    currentPage * entriesPerPage + entriesPerPage
  );

  return (
    <div className="my-5">
      <div className="p-8 rounded">
        <div className="flex flex-wrap justify-center gap-2 bg-[#F7F7F7] p-4 rounded shadow-sm hover:shadow-md">
          <button className="bg-primary-900 text-white py-2 px-3 md:px-4 lg:px-4 rounded flex items-center gap-2">
            <TfiMenuAlt /> {name} Attributes List
          </button>
          <Link to={`/attributes/${name.toLowerCase()}/create`}>
            <button className="bg-white hover:bg-primary-900 hover:text-white py-2 px-1 md:px-4 lg:px-4 rounded flex items-center">
              <MdAdd className="text-xl font-bold" /> Create {name} Attribute
            </button>
          </Link>
        </div>
        <div className="overflow-x-auto shadow-sm hover:shadow-md rounded-e-md">
          <HeadingCard />
          <table className="min-w-full bg-white border">
            <thead>
              <tr className="text-[.7rem] md:text-[1rem] grid grid-cols-3 md:grid-cols-2 lg:grid-cols-2">
                <th className="py-2 px-4 border col-span-2 lg:col-span-1 md:col-span-1">
                  <div
                    onClick={handleSort}
                    className="flex justify-between items-center cursor-pointer"
                  >
                    <h1 className="text-sm md:text-md lg:text-md">Name</h1>
                    <div>
                      <TbTriangleFilled
                        className={`transition-colors text-[.5rem] ${
                          sortOrder === "asc"
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      />
                      <TbTriangleInvertedFilled
                        className={`transition-colors text-[.5rem] ${
                          sortOrder === "desc"
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      />
                    </div>
                  </div>
                </th>
                <th className="py-2 px-4 border col-span-1 text-sm md:text-md lg:text-md">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {currentEntries.map((attribute) => (
                <tr
                  key={attribute.id}
                  className="bg-[#FAFAFA] hover:bg-gray-100 grid grid-cols-3 md:grid-cols-2 lg:grid-cols-2"
                >
                  <td className="py-2 px-4 border text-primary-900 col-span-2 md:col-span-1 lg:col-span-1 text-sm md:text-md lg:text-md">
                    <Link to={`/attributes/${name.toLowerCase()}/create`}>
                      {attribute.name}
                    </Link>
                  </td>
                  <td className="py-2 px-4 border col-span-1">
                    <Link to={`/attributes/${name.toLowerCase()}/create`}>
                      <button>
                        <MdModeEdit className="p-1 bg-[#008000] text-[1.6rem] rounded-full text-white" />
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
            <DataTableInfo
              entries={entriesPerPage}
              totalentries={sortedAttributes.length}
            />
          </table>
        </div>
      </div>
    </div>
  );
};

export default AttributeCard;
