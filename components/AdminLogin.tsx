"use client";

import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="grid place-items-center mt-10 sm:mt-72">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-t-indigo-600 py-10">
        <h1 className="text-xl font-col gap-3 pb-4">Welcome back Admin</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 ">
          <input
            type="text"
            placeholder="Email"
            className="border p-2 rounded-sm w-auto sm:w-[400px]"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded-sm w-auto sm:w-[400px]"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <button className="bg-indigo-600 text-white font-bold cursor-pointer px-6 py-2 rounded-sm">
            Login
          </button>

          {error && (
            <div className="bg-red-400 text-white w-fit text-sm py-1 px-3 rounded-sm mt-2">
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
