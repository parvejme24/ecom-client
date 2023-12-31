import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Helmet>
        <title>Smart Gadget | Login</title>
      </Helmet>

      <div className="container mx-auto py-24">
        <div className="max-w-[500px] mx-4 md:mx-auto md:p-6 border shadow-md rounded-md">
          <form className="card-body">
            <h2 className="text-center text-3xl font-semibold mb-8 text-blue-900">
              Login
            </h2>
            <div className="flex items-center">
              <span className="rounded-tl-md rounded-bl-md bg-blue-900 p-3 text-white border border-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </span>

              <input
                type="email"
                name="email"
                placeholder="email"
                className="p-3 border border-blue-900 w-full rounded-tr-md rounded-br-md"
                required
              />
            </div>

            <div className="flex items-center rounded-lg">
              <span className="rounded-tl-md rounded-bl-md bg-blue-900 p-3 text-white border border-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
              </span>

              <input
                type="password"
                name="password"
                placeholder="********"
                className="p-3 border border-blue-900 w-full rounded-tr-md rounded-br-md"
                required
              />
            </div>
            <div className="form-control">
              <button className="btn rounded-md bg-blue-900 hover:bg-blue-950 text-white">
                Login
              </button>
            </div>
          </form>
          <p className="flex justify-center">
            <small>
              New to Smart Gadget? <Link to="/register" className="text-blue-500 hover:text-blue-900 hover:underline">Register</Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
