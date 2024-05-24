import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
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

              <div className="flex justify-center rounded-md bg-gray-100 px-4 py-1 text-sm font-medium  transition cursor-pointer">
                <SignedOut>
                  <SignInButton />
                </SignedOut>
                <SignedIn>
                  {/* <UserButton  /> */}
                  <UserButton afterSignOutUrl="/sign-in" />
                </SignedIn>
              </div>
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
