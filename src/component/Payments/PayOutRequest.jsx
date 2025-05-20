import { useState } from "react";
import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";
import { MdAdd } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";
import HeadingCard from "../AllCards/HeadingCard";
import DataTableInfo from "../Dashboard/DashboardCards/DataTableInfo";
import ButtonHead from "../Header/ButtonHead";
import TitleHead from "../Header/TitleHead";
import CaneclModal from "./Models/CancelModel";
import BankDetailsModal from "./Models/BankDetailsModal";

const initialRoles = [
  {
    email: "kh@gmail.com",
    roles: "Admin",
    pending: "Pending",
    date: "mon jun 21 2023 12:34:00",
    paidamount: "$20",
    note: "from App",
    name: "Super Administrator",
  },
  {
    email: "kh@gmail.com",
    roles: "Admin",
    pending: "Pending",
    date: "mon jun 21 2023 12:34:00",
    paidamount: "$20",
    note: "from App",
    name: "Administrator",
  },
  {
    email: "kh@gmail.com",
    roles: "Admin",
    pending: "Pending",
    date: "mon jun 21 2023 12:34:00",
    paidamount: "$20",
    note: "from App",
    name: "User",
  },
  {
    email: "kh@gmail.com",
    roles: "Admin",
    pending: "Pending",
    date: "mon jun 21 2023 12:34:00",
    paidamount: "$20",
    note: "from App",
    name: "Super Administrator",
  },
  {
    email: "kh@gmail.com",
    roles: "Admin",
    pending: "Pending",
    date: "mon jun 21 2023 12:34:00",
    paidamount: "$20",
    note: "from App",
    name: "Administrator",
  },
  {
    email: "kh@gmail.com",
    roles: "Admin",
    pending: "Pending",
    date: "mon jun 21 2023 12:34:00",
    paidamount: "$20",
    note: "from App",
    name: "User",
  },
  {
    email: "kh@gmail.com",
    roles: "Admin",
    pending: "Pending",
    date: "mon jun 21 2023 12:34:00",
    paidamount: "$20",
    note: "from App",
    name: "Super Administrator",
  },
  {
    email: "kh@gmail.com",
    roles: "Admin",
    pending: "Pending",
    date: "mon jun 21 2023 12:34:00",
    paidamount: "$20",
    note: "from App",
    name: "Administrator",
  },
  {
    email: "kh@gmail.com",
    roles: "Admin",
    pending: "Pending",
    date: "mon jun 21 2023 12:34:00",
    paidamount: "$20",
    note: "from App",
    name: "User",
  },
  {
    email: "kh@gmail.com",
    roles: "Admin",
    pending: "Pending",
    date: "mon jun 21 2023 12:34:00",
    paidamount: "$20",
    note: "from App",
    name: "Super Administrator",
  },
  {
    email: "kh@gmail.com",
    roles: "Admin",
    pending: "Pending",
    date: "mon jun 21 2023 12:34:00",
    paidamount: "$20",
    note: "from App",
    name: "Administrator",
  },
  {
    email: "kh@gmail.com",
    roles: "Admin",
    pending: "Pending",
    date: "mon jun 21 2023 12:34:00",
    paidamount: "$20",
    note: "from App",
    name: "User",
  },
]; // Example roles

const PayOutRequest = () => {
  const [showQuantity, setShowQuantity] = useState({});
  const toggleQuantity = (index) => {
    setShowQuantity((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

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

  const handlepaid = () => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    const sortedRoles = [...roles].sort((a, b) => {
      if (a.name < b.name) return newDirection === "asc" ? -1 : 1;
      if (a.name > b.name) return newDirection === "asc" ? 1 : -1;
      return 0;
    });
    setRoles(sortedRoles);
    setSortDirection(newDirection);
    setSortColumn("paid");
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

  const startIndex = currentPage * rolesPerPage;
  const displayedRoles = roles.slice(startIndex, startIndex + rolesPerPage);

  //-------- Model-
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [isCancelodalOpen, setIsCancelModalOpen] = useState(false);

  const openCancelModal = () => setIsCancelModalOpen(true);
  const closeCancelModal = () => setIsCancelModalOpen(false);
  return (
    <>
      <TitleHead title="PayOut Request" desc="Payments > PayOut Request" />
      <div className="shadow-lg">
        <ButtonHead
          tab1={"Restaurant PayOut Request"}
          tab2={"Driver PayOut Request"}
          link={"/payout/requests/drivers"}
        />
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
                    <h1> Vendor </h1>
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
                    onClick={handlepaid}
                    className="flex items-center justify-between w-full gap-1"
                  >
                    <h1> Paid Amount</h1>
                    <div className="flex flex-col">
                      <TbTriangleFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "paid" && sortDirection === "asc"
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      />
                      <TbTriangleInvertedFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "paid" && sortDirection === "desc"
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
                    <h1>Note</h1>
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

                {/* <th className="px-4 py-2 border text-left bg-[#F8FAFD]">Note</th> */}
                <th className="px-4 py-2 border text-left bg-[#F8FAFD]">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {displayedRoles.map((role, index) => (
                <>
                  <tr key={index} className="border hover:bg-gray-100">
                    <td className="px-4 py-2 flex items-center gap-4">
                      {showQuantity[index] ? (
                        <IoMdRemoveCircle
                          className="text-primary-900 text-xl border border-gray-400 rounded-full cursor-pointer"
                          onClick={() => toggleQuantity(index)}
                        />
                      ) : (
                        <IoMdAddCircle
                          className="text-primary-400 text-xl border border-gray-400 rounded-full cursor-pointer"
                          onClick={() => toggleQuantity(index)}
                        />
                      )}
                      <h1 className="text-primary-900 hover:text-black truncate">
                        {role.name}
                      </h1>
                    </td>
                    {/* <td className="px-4 py-2 border text-left text-primary-900 text-md">
                  {role.name}
                </td> */}
                    <td className="px-4 py-2 border  text-gray-400 text-sm">
                      {role.paidamount}
                    </td>
                    <td className="px-4 py-2 border  text-gray-400 text-sm">
                      {role.note}
                    </td>
                    <td className="px-4 py-2 border  text-gray-400 text-sm">
                      {role.date}
                    </td>
                    {/* <td className="px-4 py-2 border text-left text-primary-900 text-md">
                    {role.roles}
                  </td> */}
                    <td className="px-1 py-1 border text-center ">
                      <h1 className="text-white bg-[#FFA500] rounded-md text-center py-1">
                        {" "}
                        {role.pending}
                      </h1>
                      {/* <button>
                    <MdModeEdit className="p-1 bg-primary-400 text-[1.6rem] rounded-full text-white" />
                  </button> */}
                    </td>
                  </tr>
                  {showQuantity[index] && (
                    <>
                      <tr className="px-4 py-2 border w-full">
                        <td
                          colSpan={2}
                          className="py-2 px-4 flex justify-between  items-center"
                        >
                          <button className="text-gray-500  font-semibold ">
                            WidrowMethod
                            {/* <FaCartShopping className="text-gray-500" /> */}
                            {/* {role.name} */}
                          </button>
                          <h1 className="text-gray-500  font-semibold ">
                            BankTransfor
                          </h1>
                        </td>
                      </tr>
                      <tr className="px-4 py-2 border">
                        <td className="py-2 px-4 flex justify-between items-start">
                          <div className="flex flex-col  gap-2 text-gray-500  font-semibold ">
                            <h1>Action</h1>

                            <button className="text-white bg-[#26DAD2] text-sm hover:shadow-md px-3 py-1 rounded-md">
                              PayOnline
                            </button>

                            <button
                              onClick={openCancelModal}
                              className="text-white bg-primary-900 text-sm hover:shadow-md px-3 py-1 rounded-md"
                            >
                              Cancel Request
                            </button>
                            <CaneclModal
                              isOpen={isCancelodalOpen}
                              onClose={closeCancelModal}
                            />
                            {/* <FaCartShopping className="text-gray-500" /> */}
                            {/* {role.name} */}
                          </div>
                          {/* <h1 className="text-white bg-[#117A8B]  hover:shadow-md px-3 py-1 rounded-md text-sm font-semibold cursor-pointer ">
                          Manual Pay
                        </h1> */}
                          <button
                            onClick={openModal}
                            className="text-white bg-[#117A8B] text-sm hover:shadow-md px-3 py-1 rounded-md"
                          >
                            Manual Pay
                          </button>
                          <BankDetailsModal
                            isOpen={isModalOpen}
                            onClose={closeModal}
                          />
                        </td>
                      </tr>
                    </>
                  )}
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

export default PayOutRequest;
