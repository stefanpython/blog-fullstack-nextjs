import React from "react";

export default function Comments() {
  return (
    <div>
      <form className="flex flex-col">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          <input
            className="shadow appearance-none border rounded w-[300px] sm:w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Your name"
            required
          />
        </label>

        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="content"
        >
          <textarea
            className="shadow appearance-none border rounded w-[300px] sm:w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Write your comment..."
            required
          ></textarea>
        </label>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
