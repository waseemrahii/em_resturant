import React from "react";
import { Link, NavLink } from "react-router-dom";

const ProfileHeader = () => {
  const navLinks = [
    { name: "Basic", path: "/users/edit" },
    { name: "Orders", path: "/users/edit/user-order" },
    { name: "Wallet Transaction", path: "/users/edit/user-wallet" },
  ];

  return (
    <header className="border-b my-4">
      <div className="mx-auto p-4 flex justify-between items-center">
        <nav className="flex space-x-4">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-primary-900 font-semibold border-b-2 border-primary-900"
                  : "text-gray-800"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default ProfileHeader;
