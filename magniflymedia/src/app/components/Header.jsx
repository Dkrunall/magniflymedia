'use client'

import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="header flex items-center justify-between px-12 py-5 bg-white/20 backdrop-blur-md fixed w-full z-10">
      <img
        src="https://magniflymedia.com/wp-content/uploads/2022/11/Asset-1-1024x155.png"
        alt="logo"
        className="h-7"
      />
      <nav className="flex items-center justify-between  gap-2">
        <Link
          href="/contact"
          className="bg-black text-white flex items-center py-2 px-7 rounded-full text-lg"
        >
          Contact <img src="/images/arrowup.svg" className="ms-2" />
        </Link>
        {/*<div className="bg-black rounded-full h-11 w-11 flex items-center justify-center"><img src="images/Ellipse-3.svg" /></div>*/}
      </nav>
    </div>
  );
};

export default Header;
