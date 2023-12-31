import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex justify-center items-center text-center min-h-screen">
      <div>
        <h3 className="text-8xl font-semibold">404</h3>
        <h4 className="text-2xl font-semibold mb-4">Page Not Found</h4>
        <Link to="/" className="px-4 py-2 bg-blue-600 text-white rounded-md">Go Home</Link>
      </div>
    </div>
  );
};

export default Error;
