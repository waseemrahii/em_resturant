import { useState } from "react";
import { FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import TitleHead from "../Header/TitleHead";

const initialData = [
  { name: "ID Proof", status: "Pending", action: "Edit" },
  { name: "FSSAI Certificate", status: "Approved", action: "Edit" },
  { name: "FSSAz Certificate", status: "Approved", action: "Edit" },
];

const Document = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(initialData);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* <div><DocUparbar /></div> */}
      <TitleHead
        title={"Vendor Document Details"}
        desc={"Vendor Document Details"}
        desc2={"> Vendors "}
        link={"/vendors/all"}
      />
      <div className="p-4">
        <div className="shadow-md rounded-lg border border-gray-300">
          <div className="bg-[#F7F7F7] mt-2 flex items-center justify-center border-b border-gray-300">
            <div className="bg-[#267FFF] w-full sm:w-3/4 md:w-1/2 lg:w-1/3 py-2 flex items-center justify-center mx-auto rounded">
              <p className="text-center text-white text-lg">
                Aug Store's Vendor Document Details
              </p>
            </div>
          </div>
          <div className="p-4">
            <div className="flex flex-col sm:flex-row sm:justify-between py-2">
              <div className="flex items-center sm:mb-0">
                <label htmlFor="entries" className="mr-2">
                  Show
                </label>
                <select
                  id="entries"
                  className="border border-gray-300 rounded-md"
                >
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                <span className="ml-2">entries</span>
              </div>
              <div>
                <label htmlFor="search" className="text-gray-800 px-4">
                  Search:{" "}
                </label>
                <input
                  id="search"
                  type="text"
                  value={search}
                  onChange={handleSearchChange}
                  placeholder="Search"
                  className="border border-gray-300 rounded-md w-full px-2 sm:w-auto"
                />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
                <thead>
                  <tr>
                    <th className="border border-gray-300 p-1 text-left">
                      Name
                    </th>
                    <th className="border border-gray-300 p-1 text-left">
                      Status
                    </th>
                    <th className="hidden sm:table-cell border border-gray-300 p-1 text-left">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredData.map((item, index) => (
                    <tr key={index} className="text-sm">
                      <td className="px-2 py-2 bg-[#FAFAFA] hover:bg-gray-100 whitespace-nowrap border border-gray-300">
                        {item.name}
                      </td>
                      <td className="px-2 py-2 whitespace-nowrap border border-gray-300">
                        <span
                          className={`p-2 inline-flex leading-5 font-semibold rounded-lg ${
                            item.status === "Approved"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className="px-2 whitespace-nowrap border border-gray-300">
                        <Link to={`/document-form/${item.name}`}>
                          <button className="text-white rounded-full p-2 bg-[#267FFF] hover:bg-blue-700">
                            <FaPen />
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center mt-5">
              <span className="text-sm text-gray-500">
                Showing {filteredData.length} of {data.length} entries
              </span>
              <div className="flex items-center mt-4 sm:mt-0">
                <button className="px-3 py-1 border border-gray-300 rounded-md mr-2 hover:bg-gray-100">
                  Previous
                </button>
                <span className="px-3 py-1 border-t border-b border-gray-300">
                  1
                </span>
                <button className="px-3 py-1 border border-gray-300 rounded-md ml-2 hover:bg-gray-100">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Document;
