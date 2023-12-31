import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </>
  );
  return (
    <div>
      {/* top menu  */}
      <div className="container mx-auto py-3 px-2 md:px-0">
        <div className="flex justify-between items-center flex-wrap">
          <h3 className="order-1">Smart Gadget</h3>
          <div className="order-last md:order-2 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search Your Gadget"
              className="px-4 py-3 border border-blue-600 rounded-lg w-full md:w-[500px] max-w-[500px] lg:w-[700px] lg:max-w-[700px]"
            />
          </div>
          <div className="order-2 md:order-3">
            <span>Cart</span>
          </div>
        </div>
      </div>

      {/* main menu  */}
      <div className="bg-blue-900">
        <div className="container mx-auto">
          <div className="navbar">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {navItems}
                </ul>
              </div>
            </div>
            <div className="navbar-start hidden lg:flex bg-black">
              <ul className="menu menu-horizontal px-1 text-white">
                {navItems}
              </ul>
            </div>
            <div className="navbar-end">
              <Link
                to="/login"
                className="text-white border px-3 py-2 rounded-md hover:bg-white hover:text-blue-900"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
