import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="bg-white shadow-xl fixed w-full z-50">
        <div className="mx-auto flex flex-1 justify-between py-4 max-w-screen-2xl items-center gap-8 w-11/12">
          <Link to="/" className="block">
            <span className="sr-only">Home</span>
            <img src="/assets/NxtWave_Logo.png" alt="" height={80} width={80} />
          </Link>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link
                to="/add-resources"
                className="block rounded-md bg-blue-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-500"
              >
                + Add
              </Link>

              <Link
                to={"/"}
                className="hidden rounded-full bg-gray-100 px-2 py-2 text-sm font-medium  transition sm:block"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </Link>
            </div>

            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
