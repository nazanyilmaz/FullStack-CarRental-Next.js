import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaHeart, FaBell } from "react-icons/fa";
import { RiSettings4Fill } from "react-icons/ri";

const Header: React.FC = () => {
  return (
    <header className="bg-white flex justify-between items-center lg:py-8 py-5 px-7 lg:px-10">
      <Link href="/" className="text-basic-blue font-extrabold text-5xl">
        DRIVE
      </Link>
      <form className="flex gap-2 py-2 px-4 rounded-full border border-zinc-300 md:w-1/2">
        <button className="text-zinc-700 text-xl">
          <CiSearch />
        </button>
        <input type="text" placeholder="search" className=" outline-none text-zinc-800" />
      </form>
      <div className="flex gap-2 items-center ">
        <div className="p-3 text-zinc-600 border border-zinc-300 hover:bg-zinc-200 cursor-pointer transition rounded-full max-lg:hidden">
          <FaHeart />
        </div>
        <div className="p-3 text-zinc-600 border border-zinc-300 hover:bg-zinc-200 cursor-pointer transition rounded-full max-lg:hidden">
          <FaBell />
        </div>
        <div className="p-3 text-zinc-600 border border-zinc-300 hover:bg-zinc-200 cursor-pointer transition rounded-full clear-start text-lg max-lg:hidden">
          <RiSettings4Fill />
        </div>
        <img src="/avatar5.jpeg" alt="profile" className="size-[72px]" />
      </div>
    </header>
  );
};

export default Header;
