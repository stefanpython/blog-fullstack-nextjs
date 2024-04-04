import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-10 border shadow-lg">
      <Link className="text-black font-bold text-3xl" href={"/"}>
        Blog NextJS.
      </Link>

      <p className="text-lg">A full stack nextjs blog website</p>

      <Link href="/addArticle">
        <button className="btn border p-2 rounded-md bg-gray-300 font-medium hover:bg-gray-400">
          Add post
        </button>
      </Link>
    </nav>
  );
}
