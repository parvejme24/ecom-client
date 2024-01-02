import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "border-b" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? "border-b" : "")}
        >
          Products
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/faq"
          className={({ isActive }) => (isActive ? "border-b" : "")}
        >
          FAQ
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive }) => (isActive ? "border-b" : "")}
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contacts"
          className={({ isActive }) => (isActive ? "border-b" : "")}
        >
          Contacts
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      {/* top menu  */}
      <div className="container mx-auto py-3 px-2 lg:px-0">
        <div className="flex justify-between items-center flex-wrap">
          <h3 className="order-1 text-2xl font-bold text-blue-800">
            Smart Gadget
          </h3>
          <div className="order-last md:order-2 w-full md:w-auto flex items-center mt-4 md:mt-0">
            <input
              type="text"
              placeholder="Search Your Gadget"
              className="px-4 py-3 border border-blue-600 rounded-lg w-full md:w-[400px] max-w-[400px] lg:w-[700px] lg:max-w-[700px]"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 -ml-10 border-l border-blue-900 pl-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>

          <div className="order-2 md:order-3">
            <div className="drawer drawer-end">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                {/* Page content here */}
                <label
                  htmlFor="my-drawer-4"
                  className="drawer-button cursor-pointer"
                >
                  <span className="relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-7 h-7"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                      />
                    </svg>
                    <span className="absolute top-0 right-0 -mt-2 -mr-2">
                      3
                    </span>
                  </span>
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu space-y-2 p-4 w-80 min-h-full bg-base-200 text-base-content">
                  {/* Sidebar content here */}
                  <li>
                    <Link
                      to="/cart"
                      className="text-center bg-blue-600 hover:bg-blue-700 py-3 text-white flex justify-center rounded-md"
                    >
                      View Cart
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/checkout"
                      className="text-center bg-blue-900 hover:bg-blue-950 py-3 text-white flex justify-center rounded-md"
                    >
                      Checkout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* main menu  */}
      <div className="bg-blue-900">
        <div className="container mx-auto">
          <div className="navbar">
            <div className="navbar-start lg:hidden">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-white"
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
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-lg w-52 bg-blue-950 text-white"
                >
                  {navItems}
                </ul>
              </div>
            </div>
            <div className="navbar-start hidden lg:flex">
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
