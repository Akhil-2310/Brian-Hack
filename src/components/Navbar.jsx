// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
         AI Agents
        </Link>
        <div>
          <Link to="/" className="mr-4 hover:text-gray-300">
            Home
          </Link>
          <Link
            to="/transactions"
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded m-4"
          >
            Transactions
          </Link>
          <Link
            to="/consensys"
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded m-4"
          >
            Consensys
          </Link>
          <Link
            to="/contracts"
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded m-4"
          >
            Contracts
          </Link>
          <Link
            to="/base"
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
          >
            Base
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
