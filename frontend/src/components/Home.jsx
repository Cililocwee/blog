import React from "react";
import { Link } from "react-router-dom";
import Github from "../assets/github.png";
import Linkedin from "../assets/linkedin.png";

export default function Home() {
  return (
    <div className="flex flex-col text-center items-center pt-8 pb-16 lg:pt-16 lg:pb-24  dark:bg-gray-900">
      <h1 className="text-5xl font-bold mt-0 mb-6">
        Welcome to my CRUDdy blog!
      </h1>
      <div className="text-left">
        <p className="mb-5 mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          This blog originally started out as a project to cement my
          understanding of CRUD operations. It was my first inpendent fullstack
          MERN project (yee!).
        </p>
        <p className="mb-5 mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          As of now, it is officially my blog! I document the things I've lerned
          and this helps to solidify concepts in my head!
        </p>
      </div>
      <div id="socials" className="flex flex-col items-center">
        <p className="text-center mb-5 mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          Check out my other projects by visiting this link{" "}
          <Link to={"https://corrie-stroup.web.app"}>
            <span className="underline">My Blog</span>
          </Link>
        </p>
        <p className="text-center mb-5 mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          Visit my Github or LinkedIn profiles by clicking below:
        </p>
        <div className="flex gap-3">
          <Link to={"https://github.com/Cililocwee"}>
            <img className="h-16 w-auto" src={Github} alt="" />
          </Link>
          <Link to={"https://www.linkedin.com/in/corriestroup/"}>
            <img className="h-16 w-auto" src={Linkedin} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}
