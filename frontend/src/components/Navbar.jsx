import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-evenly py-4 px-6 bg-grey shadow sm:items-baseline w-full">
      <Link
        to={"/"}
        className="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
      >
        Home
      </Link>

      <Link
        to={"/blogs"}
        className="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
      >
        Posts
      </Link>

      <Link
        to={"/create"}
        className="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
      >
        New Post
      </Link>
    </nav>
  );
}
