"use client";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="border-b px-2 bg-gray-100">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.jpeg"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto border border-gray-100 p-1 rounded-full"
          />
          <h3 className="font-black text-xl text-pink-400"> SkillSphere </h3>
        </div>

        <ul className="flex items-center gap-5 text-lg">
          <li className=" border  px-1">
            <Link href={"/"}>Home</Link>
          </li>
          <li className=" border  px-1">
            <Link href={"/all-coureses"}>Courses</Link>
          </li>
          <li className=" border  px-1">
            <Link href={"/profile"}> My Profile</Link>
          </li>
        </ul>

        <div className="flex gap-4">
          <ul className="flex items-center gap-4 text-lg">
            <li  className=" border  px-1">
              <Link href={"/signup"}>SignUp</Link>
            </li>
            <li  className=" border  px-1">
              <Link href={"/login"}>Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;