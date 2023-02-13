import React from "react";

export default function CommentInput() {
  return (
    <div className="max-w-lg rounded-lg shadow-md shadow-stone-600/50">
      <form action="" className="w-full p-4">
        <div className="mb-2">
          <label for="comment" className="text-lg text-gray-600">
            Add a comment
          </label>
          <textarea
            className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
            name="comment"
            placeholder=""
          ></textarea>
        </div>
        <div className="flex justify-between">
          <button className="px-3 py-2 text-sm text-purple-100 bg-stone-600 rounded">
            Comment
          </button>
          <button className="px-3 py-2 text-sm text-stone-600 border border-stone-500 rounded">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
