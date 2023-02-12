import React, { useEffect, useState } from "react";
import "./components.css";
import Moment from "moment";
import { Link } from "react-router-dom";

export default function Blogs() {
  const [blogs, setBlogs] = useState([
    {
      title: "",
      content: "",
      date_posted: "",
    },
  ]);

  useEffect(() => {
    fetch("http://localhost:3001/blogs/")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => {
        // console.log(jsonRes);
        setBlogs([...jsonRes]);
      })
      .catch((err) => console.error(err));
  }, []);

  Moment.locale("en");

  return (
    <div className=" flex flex-col text-center align-items-center pt-3 pb-16 lg:pt-8 lg:pb-24  dark:bg-gray-900">
      <div className="flex flex-col-reverse">
        {blogs.map((item, k) => (
          <div
            className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
            key={k}
          >
            <h4 className="text-left my-4 text-3xl font-extrabold lemb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-whiteading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
              <Link
                className="no-underline text-slate-500"
                to={`/blog/${item._id}`}
              >
                {item.title}
              </Link>
            </h4>
            <p className="text-left whitespace-pre-wrap">{item.content}</p>
            <div className="flex justify-between">
              <p className="my-3 text-slate-400 text-sm">
                Posted: {Moment(item.date_posted).calendar()}
              </p>

              {/* <p className="my-3 text-slate-400 text-m underline">
                <Link to={`/blog/${item._id}`}>0 comments</Link>
              </p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
