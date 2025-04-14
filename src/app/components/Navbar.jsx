"use client";
import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { HiMiniXMark } from "react-icons/hi2";
import MenuOverlay from "./MenuOverlay";
import NavLink from "./NavLink";
import Link from "next/link";
import Image from "next/image";

const NavLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contacts",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setnavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 py-4 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap  item-center justify-between mx-auto px-6">
        <Link
          href="/"
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <Image src='/assets/images/portfolio.png' width={30} height={30}  alt='pf'/>
        </Link>
        <div className="mobile-menu block  md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => 
                setnavbarOpen(true)
              }
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white"
            >
              <IoMenuOutline className="h-5 w-5" />
            </button>
          ) : (
            <button  className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white" onClick={()=>setnavbarOpen(false)}>
              <HiMiniXMark className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto  " id="navbar">
          <ul className="flex  md:p-0 md:flex-row md:space-x-8">
            {NavLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title}></NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay  link={NavLinks}/> :null}
    </nav>
  );
};

export default Navbar;
