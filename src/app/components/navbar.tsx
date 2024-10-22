import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 bg-[#00000010] backdrop-blur-lg z-10">
      <div className="container max-w-[1130px] mx-auto flex items-center justify-between h-[74px]">
        <div className="flex items-center gap-[26px]">
          <a href="index.html" className="flex w-[154px] shrink-0 items-center">
            <Image
              width={154}
              height={40}
              src="assets/images/logos/logo.svg"
              alt="logo"
            />
          </a>
          <ul className="flex gap-6 items-center">
            <li className="text-playspace-grey hover:text-playspace-light-grey transition-all duration-300">
              <a href="index.html">Home</a>
            </li>
            <li className="text-playspace-grey hover:text-playspace-light-grey transition-all duration-300 relative">
              <button
                id="menu-button"
                className="flex items-center gap-1 focus:text-playspace-light-grey"
              >
                <span>Categories</span>
                <img src="assets/images/icons/arrow-down.svg" alt="icon" />
              </button>
              <div className="dropdown-menu hidden absolute top-[52px] grid grid-cols-2 p-4 gap-[10px] w-[526px] rounded-[20px] bg-[#1E1E1E] border border-[#414141] z-10">
                <div className="col-span-2 flex justify-between items-center rounded-2xl p-[12px_16px] border border-[#414141] hover:bg-[#2A2A2A] transition-all duration-300">
                  <div className="flex items-center">
                    <a
                      href=""
                      className="w-[58px] h-[58px] flex shrink-0 items-center"
                    >
                      <img src="assets/images/icons/cart.svg" alt="icon" />
                    </a>
                    <a href="" className="flex flex-col">
                      <p className="font-bold text-sm text-white">
                        All Products
                      </p>
                      <p className="text-xs text-playspace-grey">
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
                      <p className="font-bold text-sm text-white">Templates</p>
                      <p className="text-xs text-playspace-grey">
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
                      <p className="font-bold text-sm text-white">Courses</p>
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
                      <p className="font-bold text-sm text-white">Ebooks</p>
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
                      <p className="font-bold text-sm text-white">Fonts</p>
                      <p className="text-xs text-playspace-grey">
                        Typography Selection
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="text-playspace-grey hover:text-playspace-light-grey transition-all duration-300">
              <a href="">Stories</a>
            </li>
            <li className="text-playspace-grey hover:text-playspace-light-grey transition-all duration-300">
              <a href="">Benefits</a>
            </li>
            <li className="text-playspace-grey hover:text-playspace-light-grey transition-all duration-300">
              <a href="">About</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-6 items-center">
          <a
            href=""
            className="text-playspace-grey hover:text-playspace-light-grey transition-all duration-300"
          >
            Log in
          </a>
          <a
            href=""
            className="p-[8px_16px] w-fit h-fit rounded-[12px] text-playspace-grey border border-playspace-dark-grey hover:bg-[#2A2A2A] hover:text-white transition-all duration-300"
          >
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
}
