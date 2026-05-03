"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const linkClass = (path) =>
    `border px-2 py-1 rounded ${
      pathname === path
        ? "bg-green-400 text-white"
        : "bg-transparent text-black"
    }`;

  return (
    <div className="border-b px-2 bg-gray-100">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">

        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.jpeg"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto border border-gray-100 p-1 rounded-full"
          />
          <h3 className="font-black text-xl text-pink-400">
            SkillSphere
          </h3>
        </div>

        {/* Main Menu */}
        <ul className="flex items-center gap-5 text-lg">
          <li>
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>
          </li>

          <li>
            <Link href="/all-courses" className={linkClass("/all-courses")}>
              All Courses
            </Link>
          </li>

          <li>
            <Link href="/profile" className={linkClass("/profile")}>
              My Profile
            </Link>
          </li>
        </ul>

        {/* Auth */}
        <div className="flex gap-4">
          <ul className="flex items-center gap-4 text-lg">
            <li>
              <Link href="/signup" className="border px-2 py-1 rounded">
                SignUp
              </Link>
            </li>
            <li>
              <Link href="/signin" className="border px-2 py-1 rounded">
                SignIn
              </Link>
            </li>
          </ul>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;