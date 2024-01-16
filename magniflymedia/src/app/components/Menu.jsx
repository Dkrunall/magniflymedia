import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <>
      <div className="fixed-menu fixed bottom-5 lg:w-[45%] xs:w-auto lg:left-[28%] xs:left-[8%]">
        <div className="h-18 bg-[#00000093] backdrop-blur-md rounded-3xl">
          <div className="menu-item grid grid-cols-4 gap-1 py-2 px-3">
            <div className="w-34 h-12 border border-[#fff] rounded-2xl flex items-center justify-center">
              <Link href="/" className="text-[#fff] lg:lg:text-lg xs:text-[17px]">
                Home
              </Link>
            </div>
            <div className="w-34 h-12 border border-[#fff] rounded-2xl flex items-center justify-center">
              <Link href="/" className="text-[#fff] lg:text-lg xs:text-[17px]">
                About
              </Link>
            </div>
            <div className="w-34 h-12 border border-[#fff] rounded-2xl flex items-center justify-center">
              <Link href="/" className="text-[#fff] lg:text-lg xs:text-[17px]">
                Services
              </Link>
            </div>
            <div className="w-34 h-12 border border-[#fff] rounded-2xl flex items-center justify-center">
              <Link href="/" className="text-[#fff] lg:text-lg xs:text-[17px]">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
