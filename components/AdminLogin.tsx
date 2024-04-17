import React from "react";

export default function AdminLogin() {
  return (
    <div className="grid place-items-center mt-10 sm:mt-72">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-t-indigo-600 py-10">
        <h1 className="text-xl font-col gap-3 pb-2">Enter login details</h1>

        <form className="flex flex-col gap-3 ">
          <input
            type="text"
            placeholder="Email"
            className="border p-2 rounded-sm w-auto sm:w-[400px]"
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded-sm w-auto sm:w-[400px]"
          />

          <button className="bg-indigo-600 text-white font-bold cursor-pointer px-6 py-2 rounded-sm">
            Login
          </button>

          <div className="bg-red-400 text-white w-fit text-sm py-1 px-3 rounded-sm mt-2">
            Error message
          </div>
        </form>
      </div>
    </div>
  );
}
