"use client";
import React, { useState } from "react";
import Image from "next/image";
import navLogo from "../../assets/logo.png";
import { menuItems } from "./menuItems";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="h-28">
      <div className="wrapper px-4 sm:px-6 flex justify-between h-full py-5">
        {/* logo brand  */}
        <div className="flex gap-x-3 items-center">
          <Image
            src={navLogo}
            alt="NavLogo Icon"
            className="h-[62px] w-[62px]"
          />
          <h1 className="text-black font-bold text-3xl">SCHOOL</h1>
        </div>
        {/* menu items  */}
        {/* desktop menu  */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-x-8">
            {menuItems.map((link) => {
              const isActive =
                pathname === link.path ||
                (pathname.startsWith(link.href) && link.path !== "/");
              return (
                <li key={link.id}>
                  <Link
                    href={link.path}
                    className={
                      isActive
                        ? "font-bold text-xl text-Orange "
                        : "font-medium text-xl text-Skyblue hover:text-[#05D4DF] transition-all duration-300"
                    }
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* button area  */}
        <div className="hidden md:block">
          <button className="px-8 py-3 rounded-xl bg-Orange text-white text-xl font-semibold cursor-pointer">
            Contact
          </button>
        </div>
        {/* mobile humberger  */}
        <div onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer md:hidden">
          {menuOpen ? <IoMdClose size={24} /> : <CiMenuFries size={26} />}
        </div>
        {/* mobile menu and dropdown  */}
        
        {menuOpen && (
          <div className="absolute top-28 left-0 w-full min-h-screen bg-white shadow-md md:hidden z-50 px-4 py-5">
            <ul className="space-y-4">
              {menuItems.map((link) => {
                const isActive =
                  pathname === link.path ||
                  (pathname.startsWith(link.path) && link.path !== "/");
                return (
                  <li key={link.id}>
                    <Link
                      onClick={()=>setMenuOpen(false)}
                      href={link.path}
                      className={
                        isActive
                          ? "font-bold text-xl text-orange-500"
                          : "font-medium text-xl text-sky-500 hover:text-[#05D4DF] transition-all duration-300"
                      }
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
              <li>
                <button className="w-max mt-4 px-8 py-3 rounded-xl bg-orange-500 text-white text-xl font-semibold cursor-pointer">
                  Contact
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
