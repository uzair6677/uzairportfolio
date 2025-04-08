import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-wrap item-center justify-center mx-auto p-8">
        <Link href="/" className="text-5xl text-white font-semibold">
          Logo
        </Link>
        <div className="menu"></div>
      </div>
    </nav>
  );
};

export default Navbar;
