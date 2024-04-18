"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  console.log();
  return (
    <nav className="flex justify-between items-center px-8 py-10 border shadow-lg">
      <Link
        className="text-black font-bold text-3xl hover:underline"
        href={"/"}
      >
        Blog NextJS.
      </Link>

      <p className="text-lg">A full stack nextjs blog website</p>

      <div className="flex gap-3">
        {session?.user?.email === "cat@cat.com" && (
          <Link href="/addArticle">
            <button className="btn border px-2 py-1 rounded-md bg-gray-400 text-white font-extrabold hover:bg-gray-500">
              Add post
            </button>
          </Link>
        )}

        {session?.user?.email === "cat@cat.com" ? (
          <button
            onClick={() => signOut()}
            className="bg-red-400 p-1 text-white font-semibold rounded-md"
          >
            Log out
          </button>
        ) : (
          <Link href="/login">
            <button className="bg-cyan-400 p-1 text-white font-semibold rounded-md">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}
