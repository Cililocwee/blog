import React, { useEffect, useState } from "react";
import Moment from "moment";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CommentBox from "./CommentBox";
import CommentInput from "./CommentInput";

export default function DetailedBlog({ id }) {
  const [blog, setBlog] = useState([
    {
      title: "Loading",
      content: "",
      date_posted: "",
    },
  ]);

  const location = window.location.href.split("/blog/")[1];

  useEffect(() => {
    fetch(`http://localhost:3001/blog/details/${location}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => {
        setBlog(jsonRes);
      })
      .catch((err) => console.error(err));
  }, []);

  const navigate = useNavigate();

  function handleDelete() {
    fetch(`http://localhost:3001/blog/delete/${location}`, {
      method: "Delete",
    })
      .then(async (res) => {
        const data = await res.text();

        // check for errors
        if (!res.ok) {
          // send error message
          const error = (data && data.message) || res.status;
          return Promise.reject(error);
        }

        navigate("/blogs");
      })
      .catch((err) => {
        console.error("There was an error!", err);
      });
  }

  Moment.locale("en");

  return (
    <div className="px-8 mb-auto flex flex-col items-center pt-3 pb-16 lg:pt-8 lg:pb-24  dark:bg-gray-900">
      {blog && (
        <div className="pb-8 mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <h1 className="text-center my-4 text-3xl font-extrabold lemb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-whiteading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
            {blog.title}
          </h1>
          <p className="whitespace-pre-wrap">{blog.content}</p>
          <div className="flex justify-between items-center">
            <p className="my-3 text-slate-400 text-sm">
              Posted: {Moment(blog.date_posted).calendar()}
            </p>
            <div className="flex align-items-center">
              <button className="m-3 w-16 h-8 px-3 py-2 text-xs font-medium  text-center text-white bg-stone-400 rounded-lg hover:bg-stone-800 focus:ring-4 focus:outline-none focus:ring-stone-300 dark:bg-stone-600 dark:hover:bg-stone-700 dark:focus:ring-stone-800">
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="m-3 h-8 w-16 px-3 py-2 text-xs font-medium text-center text-white bg-stone-700 rounded-lg hover:bg-stone-800 focus:ring-4 focus:outline-none focus:ring-stone-300 dark:bg-stone-600 dark:hover:bg-stone-700 dark:focus:ring-stone-800"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      <CommentInput />
      <CommentBox />
    </div>
  );
}
