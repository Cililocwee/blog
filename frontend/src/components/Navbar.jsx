import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-evenly py-4 px-6 bg-grey shadow sm:items-baseline w-full">
      <Link to={"/"}>
        <div className="">
          <h1 className="text-2xl font-bold">Corrie Stroup's Blog</h1>
          <p className="">Web development - one problem at a time</p>
        </div>
      </Link>

      <div className="mx-auto sm:ml-auto sm:mr-0 flex gap-8">
        <Link
          to={"/blogs"}
          className="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
        >
          Posts
        </Link>

        <Link
          to={"/aboutme"}
          className="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
        >
          About Me
        </Link>

        <Link
          to={"/create"}
          className="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
        >
          New Post
        </Link>
      </div>
    </nav>
  );
}
