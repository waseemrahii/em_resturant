import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AddWalletModel from "./AddWalletModel";

const BasicInfo = ({ user }) => {
  return (
    <div className="relative border p-6 rounded-lg w-[80%] mx-auto my-10 ">
      <div className="flex justify-between  items-center">
        <h2 className="absolute -top-4 left-4 text-sm bg-primary-900 rounded-lg p-2 font-semibold text-white">
          USER DETAILS
        </h2>
        <div
          to="/add-wallet"
          className="absolute right-4 -top-4 bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600"
        >
          <AddWalletModel />
        </div>
      </div>

      <div className="flex flex-col mt-4">
        <div className="flex items-start w-[100%] gap-4">
          <div className="w-[50%]">
            <label className="text-gray-600">First Name</label>
            <p className="text-gray-900 font-medium p-2 border rounded-md ">
              {user.firstName}
            </p>
          </div>
          <div className="w-[50%]">
            <label className="text-gray-600">Email</label>
            <p className="w-[90%] text-gray-900 font-medium p-2 border rounded-md ">
              {user.email}
            </p>
          </div>
        </div>

        <div className="flex items-start w-[100%] gap-4">
          <div className="w-[50%]">
            <label className="text-gray-600">Phone</label>
            <p className=" text-gray-900 font-medium p-2 border rounded-md ">
              {user.phone}
            </p>
          </div>
          <div className="w-[50%]">
            <label className="text-gray-600">Wallet Balance</label>
            <p className=" text-gray-900 font-medium p-2 border rounded-md ">
              {user.walletBalance}
            </p>
          </div>
        </div>

        <div className="mt-4">
          <label className="text-gray-600">Profile Image</label>
          <img
            src={user.profileImage}
            alt="Profile"
            className="mt-2 h-16 w-16 object-cover rounded-lg border"
          />
        </div>

        <div className="mt-4">
          <label className="text-gray-600">Address</label>
          <p className=" text-gray-900 font-medium p-2 border rounded-md ">
            {user.address || "Not Mentioned"}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <Link
          to="/"
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

BasicInfo.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    walletBalance: PropTypes.string.isRequired,
    profileImage: PropTypes.string.isRequired,
    address: PropTypes.string,
  }).isRequired,
};

export default BasicInfo;
