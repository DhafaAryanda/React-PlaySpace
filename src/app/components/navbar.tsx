import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 bg-[#e6e6e610] dark:bg-[#00000010] backdrop-blur-lg z-20 shadow-sm">
      <div className="container max-w-[1130px] mx-auto flex items-center justify-between h-[74px]">
        <div className="flex items-center gap-[26px]">
          <a href="index.html" className="flex w-[154px] shrink-0 items-center">
            <Image
              width={154}
              height={40}
              src="/assets/images/logos/logo.svg"
              alt="logo"
              className="block dark:hidden"
            />
            <Image
              width={154}
              height={40}
              src="/assets/images/logos/logo-dark.svg"
              alt="logo"
              className="hidden dark:block"
            />
          </a>

          <ul className="flex gap-6 items-center">
            <li className="text-gray-800 dark:text-playspace-grey hover:text-gray-900  dark:hover:text-playspace-light-grey transition-all duration-300">
              <a href="index.html">Home</a>
            </li>
            <li className="text-gray-800 dark:text-playspace-grey hover:text-gray-900  dark:hover:text-playspace-light-grey transition-all duration-300 relative">
              <button
                id="menu-button"
                className="flex items-center gap-1 focus:text-gray-900 dark:focus:text-playspace-light-grey"
              >
                <span>Categories</span>
                <img src="/assets/images/icons/arrow-down.svg" alt="icon" />
              </button>
              <div className="dropdown-menu hidden absolute top-[52px] grid grid-cols-2 p-4 gap-[10px] w-[526px] rounded-[20px] bg-white dark:bg-[#1E1E1E] border border-gray-300 dark:border-[#414141] z-10 shadow-lg dark:shadow-none">
                <div className="col-span-2 flex justify-between items-center rounded-2xl p-[12px_16px] border border-gray-300 hover:bg-gray-100 dark:border-[#414141] dark:hover:bg-[#2A2A2A] transition-all duration-300">
                  <div className="flex items-center">
                    <a
                      href=""
                      className="w-[58px] h-[58px] flex shrink-0 items-center"
                    >
                      <img src="assets/images/icons/cart.svg" alt="icon" />
                    </a>
                    <a href="" className="flex flex-col">
                      <p className="font-bold text-sm dark:text-white text-gray-800">
                        All Products
                      </p>
                      <p className="text-xs text-gray-500 dark:text-playspace-grey">
                        Everything in One Place
                      </p>
                    </a>
                  </div>
                  <div className="w-6 h-6 flex shrink-0">
                    <img src="assets/images/icons/crown.svg" alt="icon" />
                  </div>
                </div>
                <div className="flex justify-between items-center rounded-2xl p-[12px_16px] border border-[#414141] hover:bg-[#2A2A2A] transition-all duration-300">
                  <div className="flex items-center">
                    <a
                      href=""
                      className="w-[58px] h-[58px] flex shrink-0 items-center"
                    >
                      <img src="assets/images/icons/laptop.svg" alt="icon" />
                    </a>
                    <a href="" className="flex flex-col">
                      <p className="font-bold text-sm dark:text-white text-gray-800">
                        Templates
                      </p>
                      <p className="text-xs text-gray-500 dark:text-playspace-grey">
                        Designs Made Easy
                      </p>
                    </a>
                  </div>
                </div>
                <div className="flex justify-between items-center rounded-2xl p-[12px_16px] border border-[#414141] hover:bg-[#2A2A2A] transition-all duration-300">
                  <div className="flex items-center">
                    <a
                      href=""
                      className="w-[58px] h-[58px] flex shrink-0 items-center"
                    >
                      <img src="assets/images/icons/hat.svg" alt="icon" />
                    </a>
                    <a href="" className="flex flex-col">
                      <p className="font-bold text-sm dark:text-white text-gray-800">
                        Courses
                      </p>
                      <p className="text-xs text-playspace-grey">
                        Expand Your Skills
                      </p>
                    </a>
                  </div>
                </div>
                <div className="flex justify-between items-center rounded-2xl p-[12px_16px] border border-[#414141] hover:bg-[#2A2A2A] transition-all duration-300">
                  <div className="flex items-center">
                    <a
                      href=""
                      className="w-[58px] h-[58px] flex shrink-0 items-center"
                    >
                      <img src="assets/images/icons/book.svg" alt="icon" />
                    </a>
                    <a href="" className="flex flex-col">
                      <p className="font-bold text-sm dark:text-white text-gray-800">
                        Ebooks
                      </p>
                      <p className="text-xs text-playspace-grey">
                        Read and Learn
                      </p>
                    </a>
                  </div>
                </div>
                <div className="flex justify-between items-center rounded-2xl p-[12px_16px] border border-[#414141] hover:bg-[#2A2A2A] transition-all duration-300">
                  <div className="flex items-center">
                    <a
                      href=""
                      className="w-[58px] h-[58px] flex shrink-0 items-center"
                    >
                      <img src="assets/images/icons/pen.svg" alt="icon" />
                    </a>
                    <a href="" className="flex flex-col">
                      <p className="font-bold text-sm dark:text-white text-gray-800">
                        Fonts
                      </p>
                      <p className="text-xs text-playspace-grey">
                        Typography Selection
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="text-gray-800 dark:text-playspace-grey hover:text-gray-900  dark:hover:text-playspace-light-grey transition-all duration-300">
              <a href="">Stories</a>
            </li>
            <li className="text-gray-800 dark:text-playspace-grey hover:text-gray-900  dark:hover:text-playspace-light-grey transition-all duration-300">
              <a href="">Benefits</a>
            </li>
            <li className="text-gray-800 dark:text-playspace-grey hover:text-gray-900  dark:hover:text-playspace-light-grey transition-all duration-300">
              <a href="">About</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-6 items-center">
          <Link
            href="/sign-in"
            className="text-gray-800 dark:text-playspace-grey hover:text-gray-900  dark:hover:text-playspace-light-grey transition-all duration-300"
          >
            Log in
          </Link>
          <Link
            href="/sign-up"
            className="p-[8px_16px] w-fit h-fit rounded-[12px] text-gray-800 dark:text-playspace-grey border border-gray-300 dark:border-playspace-dark-grey hover:bg-gray-100 dark:hover:bg-[#2A2A2A] hover:text-gray-900 dark:hover:text-white transition-all duration-300"
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
}
