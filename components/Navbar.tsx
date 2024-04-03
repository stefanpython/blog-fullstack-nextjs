import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-10">
      <Link className="text-black font-bold text-3xl" href={"/"}>
        Blog NextJS.
      </Link>
    </nav>
  );
}
