import React from "react";
import Moment from "moment";

export default function CommentBox({
  comment_body,
  date_posted,
  profile_pic_url,
  username,
}) {
  Moment.locale("en");
  return (
    <div className="mx-auto max-w-lg my-8 relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
      <div className="relative flex gap-4">
        <img
          src={profile_pic_url}
          className="h-16 w-16 relative rounded-lg -top-8 -mb-4 bg-white border "
          alt=""
          loading="lazy"
        />
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between">
            <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">
              {username}
            </p>
            <a className="text-gray-500 text-xl" href="#">
              <i className="fa-solid fa-trash"></i>
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            {Moment(date_posted).calendar()}
          </p>
        </div>
      </div>
      <p className="-mt-4 text-gray-500">{comment_body}</p>
    </div>
  );
}
