import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";
import DropDown from "./DropDown";

export default function Navbar() {
  const [user, setUser] = useState("");
  const greeting = ["Howdy", "Hi there", "Welcome", "Greetings", "Hello"];
  const [userGreeting, setUserGreeting] = useState("");

  useEffect(() => {
    setUserGreeting(randomGreeting());
  }, []);

  function randomGreeting() {
    return greeting[Math.floor(Math.random() * greeting.length)];
  }
  return (
    <nav className="font-sans flex justify-between text-center sm:align-center sm:flex-row sm:text-left sm:justify-center py-4 px-6 shadow sm:items-center w-full">
      <Link to={"/"}>
        <div className="">
          <h1 className="text-2xl font-bold">Corrie's Blog</h1>
          <p className="">Web development - one problem at a time</p>
        </div>
      </Link>

      <div className="hidden sm:flex sm:items-center mx-auto sm:ml-auto sm:mr-0 gap-8">
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
          About
        </Link>

        <Link
          to="https://github.com/Cililocwee"
          className="hover:scale-110 duration-500 ease-in-out"
        >
          <img className="h-8" src={Github} alt="" />
        </Link>

        <Link
          to="https://www.linkedin.com/in/corriestroup/"
          className="hover:scale-110 duration-500 ease-in-out"
        >
          <img className="h-8" src={Linkedin} alt="" />
        </Link>
        <div>
          <button className="w-40 peer px-3 py-2 bg-stone-500 hover:bg-stone-700 text-stone-200">
            {userGreeting}! <br />
            Sign in to comment
          </button>

          <div className="w-40 absolute hidden peer-hover:flex hover:flex flex-1 flex-col bg-white drop-shadow-lg">
            <a href="" className="px-5 py-3 hover:bg-stone-300">
              Sign In
            </a>
            <a href="" className="px-5 py-3 hover:bg-stone-300">
              Sign Out
            </a>
          </div>
        </div>
      </div>

      <DropDown />
    </nav>
  );
}
