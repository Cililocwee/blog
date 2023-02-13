import React from "react";

export default function CommentBox() {
  return (
    <div className="mx-auto max-w-lg my-8 relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
      <div className="relative flex gap-4">
        <img
          src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/charlie-chaplin-icon.png"
          className="h-16 relative rounded-lg -top-8 -mb-4 bg-white border "
          alt=""
          loading="lazy"
        />
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between">
            <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">
              John Commenter
            </p>
            <a className="text-gray-500 text-xl" href="#">
              <i className="fa-solid fa-trash"></i>
            </a>
          </div>
          <p className="text-gray-400 text-sm">Yesterday at 5:37 PM</p>
        </div>
      </div>
      <p className="-mt-4 text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        Maxime quisquam vero adipisci beatae voluptas dolor ame.
      </p>
    </div>
  );
}
