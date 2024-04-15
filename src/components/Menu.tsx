"use client"

import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const navHandler = () => {
    setNavbar(!navbar);
  };


  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col justify-center items-center">
          <div className="w-full z-100">
            <div className="m-auto flex justify-between items-center p-2.5 text-white">

              <div className="flex  justify-center items-center">
                <ul className="hidden md:flex text-zinc-950">
                  <li className="flex space-x-2 pr-6  pb-4 pt-4   hover:text-slate-700 duration-200">
                    <Link href="/">HOME</Link>
                    <span>|</span>
                  </li>
                  <li className="flex space-x-4 pr-6  pb-4 pt-4  hover:text-slate-700 duration-200">
                    <Link href="/">ABOUT US</Link>
                    <span>|</span>
                  </li>
                  <li className="flex space-x-4 pr-6  pb-4 pt-4  hover:text-slate-700 duration-200">
                    <Link href="/books">BOOKS</Link>
                    <span>|</span>
                  </li>

                  <li className="flex space-x-4 pr-6  pb-4 pt-4  hover:text-slate-700 duration-200">
                    <Link href="/new-release">NEW RELEASE</Link>
                    <span>|</span>
                  </li>
                  <li className="flex space-x-4  pb-4 pt-4  hover:text-slate-700 duration-200 ">
                    <Link href="/">CONTACT US</Link>
                    <span>|</span>
                  </li>
                  <li className="ml-8 pb-4 pt-4  hover:text-slate-700 duration-200 ">
                    <Link href="/blog">BLOG</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="flex justify-end relative">
        <div onClick={navHandler} className="block md:hidden mr-8 z-50">
          {navbar ? (
            <AiOutlineClose size={20} className="text-black cursor-pointer "/>
          ) : (
            <AiOutlineMenu size={20} className="text-zinc-950 cursor-pointer" />
          )}
        </div>

        <div className={navbar
          ? "md:hidden fixed top-0 left-0 right-0 bottom-0 flex pt-14 pl-6 w-full h-screen bg-[#393280] ease-in duration-200 z-30"
          : "md:hidden fixed top-0 left-[-100%] right-0 bottom-0 flex pt-14 pl-6  w-full h-screen bg-[#393280] ease-in duration-200 z-30"
        }
        >
          <ul>
            <li
              onClick={navHandler}
              className="pl-0 pr-4 pt-3 pb-3 text-2xl hover:text-gray-500"
            >
              <Link href="/">HOME</Link>
            </li>
            <li
              onClick={navHandler}
              className="pl-0 pr-4 pt-3 pb-3 text-2xl hover:text-gray-500"
            >
              <Link href="/">ABOUT US</Link>
            </li>
            <li
              onClick={navHandler}
              className="pl-0 pr-4 pt-3 pb-3 text-2xl hover:text-gray-500"
            >
              <Link href="/books">BOOKS</Link>
            </li>
            <li
              onClick={navHandler}
              className="pl-0 pr-4 pt-3 pb-3 text-2xl hover:text-gray-500"
            >
              <Link href="/new-release">NEW RELEASE</Link>
            </li>
            <li
              onClick={navHandler}
              className="pl-0 pr-4 pt-3 pb-3 text-2xl hover:text-gray-500"
            >
              <Link href="/">CONTACT  US</Link>
            </li>
            <li
              onClick={navHandler}
              className="pl-0 pr-4 pt-3 pb-3 text-2xl hover:text-gray-500"
            >
              <Link href="/blog">BLOG</Link>
            </li>
          </ul>
        </div>
      </div>

    </>

  );
};

export default Navbar;
