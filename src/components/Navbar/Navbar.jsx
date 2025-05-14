// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import navLogo from "../../assets/logo.png";
// import { menuItems } from "./menuItems";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { CiMenuFries } from "react-icons/ci";
// import { IoMdClose } from "react-icons/io";

// const Navbar = () => {

//   const pathname = usePathname();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isSticky, setIsSticky] = useState(false);

//   useEffect(()=>{
//     const handleScroll = ()=>{
//       setIsSticky(window.scrollY>50)
//       window.addEventListener('scroll', handleScroll);
//       return ()=> window.removeEventListener('scroll', handleScroll);
//     } 
//   },[])
  
//   return (
//     <div className={`h-28 w-full top-0 z-50 transition-all duration-300 ${isSticky? 'fixed bg-white shadow-md' : 'absolute bg-transparent'}`}>
//       <div className="wrapper px-4 sm:px-6 flex justify-between items-center h-full py-5">
//         {/* logo brand  */}
//         <div className="flex gap-x-3 items-center">
//           <Image
//             src={navLogo}
//             alt="NavLogo Icon"
//             className="h-[62px] w-[62px]"
//           />
//           <h1 className="text-black font-bold text-3xl">SCHOOL</h1>
//         </div>
//         {/* menu items  */}
//         {/* desktop menu  */}
//         <div className="hidden md:block">
//           <ul className="flex items-center gap-x-8">
//             {menuItems.map((link) => {
//               const isActive =
//                 pathname === link.path ||
//                 (pathname.startsWith(link.path) && link.path !== "/");
//               return (
//                 <li key={link.id}>
//                   <Link
//                     href={link.path}
//                     className={
//                       isActive
//                         ? "font-bold text-xl text-Orange "
//                         : "font-medium text-xl text-Skyblue hover:text-[#05D4DF] transition-all duration-300"
//                     }
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//         {/* button area  */}
//         <div className="hidden md:block">
//           <Link href='/contact'> 
//           <button className="px-8 py-3 rounded-xl bg-Orange text-white text-xl font-semibold cursor-pointer">
//             Contact
//           </button>
//           </Link>
//         </div>
//         {/* mobile humberger  */}
//         <div onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer md:hidden">
//           {menuOpen ? <IoMdClose size={24} /> : <CiMenuFries size={26} />}
//         </div>
//         {/* mobile menu and dropdown  */}
        
//         {menuOpen && (
//           <div className="absolute top-28 left-0 w-full min-h-screen bg-white shadow-md md:hidden z-50 px-4 py-5">
//             <ul className="space-y-4">
//               {menuItems.map((link) => {
//                  const isActive =
//                 pathname === link.path ||
//                 (link.path !== "/" && pathname.startsWith(link.path));
//                 return (
//                   <li key={link.id}>
//                     <Link
//                       onClick={()=>setMenuOpen(false)}
//                       href={link.path}
//                       className={
//                         isActive
//                           ? "font-bold text-xl text-orange-500"
//                           : "font-medium text-xl text-sky-500 hover:text-[#05D4DF] transition-all duration-300"
//                       }
//                     >
//                       {link.name}
//                     </Link>
//                   </li>
//                 );
//               })}
//               <li>
//                 <Link href='/contact'>
//                 <button className="w-max mt-4 px-8 py-3 rounded-xl bg-orange-500 text-white text-xl font-semibold cursor-pointer">
//                   Contact
//                 </button>
//                  </Link>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar; 





"use client";
import React, { useState, useEffect } from "react";
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
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50); // become sticky after 50px scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`h-28 w-full top-0 z-50 transition-all duration-300 ${
        isSticky ? "fixed bg-white shadow-md" : "absolute bg-white"
      }`}
    >
      <div className="wrapper px-4 sm:px-6 flex justify-between items-center h-full py-5">
        {/* logo */}
        <div className="flex gap-x-3 items-center">
          <Image
            src={navLogo}
            alt="NavLogo Icon"
            className="h-[62px] w-[62px]"
          />
          <h1 className="text-black font-bold text-3xl">SCHOOL</h1>
        </div>

        {/* desktop menu */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-x-8">
            {menuItems.map((link) => {
              const isActive =
                pathname === link.path ||
                (pathname.startsWith(link.path) && link.path !== "/");

              return (
                <li key={link.id}>
                  <Link
                    href={link.path}
                    className={
                      isActive
                        ? "font-bold text-xl text-Orange"
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

        {/* contact button */}
        <div className="hidden md:block">
          <Link href="/contact">
            <button className="px-8 py-3 rounded-xl bg-Orange text-white text-xl font-semibold cursor-pointer">
              Contact
            </button>
          </Link>
        </div>

        {/* mobile toggle */}
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="cursor-pointer md:hidden"
        >
          {menuOpen ? <IoMdClose size={24} /> : <CiMenuFries size={26} />}
        </div>

        {/* mobile menu */}
        {menuOpen && (
          <div className="absolute top-28 left-0 w-full min-h-screen bg-white shadow-md md:hidden z-50 px-4 py-5">
            <ul className="space-y-4">
              {menuItems.map((link) => {
                const isActive =
                  pathname === link.path ||
                  (link.path !== "/" && pathname.startsWith(link.path));
                return (
                  <li key={link.id}>
                    <Link
                      onClick={() => setMenuOpen(false)}
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
                <Link href="/contact">
                  <button className="w-max mt-4 px-8 py-3 rounded-xl bg-orange-500 text-white text-xl font-semibold cursor-pointer">
                    Contact
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;



