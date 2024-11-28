import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-[#181818] py-[34px]">
      <div className="container max-w-[1130px] mx-auto flex flex-col gap-[66px]">
        <div className="flex justify-between">
          <div className="flex flex-col justify-between">
            <div className="flex shrink-0">
              <Image
                width={213}
                height={48}
                src="assets/images/logos/logo.svg"
                alt="logo"
                className="block dark:hidden"
              />
              <Image
                width={213}
                height={48}
                src="assets/images/logos/logo-dark.svg"
                alt="logo"
                className="hidden dark:block"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <p className="font-semibold text-sm ">Connect with us</p>
              <div className="flex items-center gap-5">
                <a
                  href=""
                  className="w-9 h-9 flex shrink-0 rounded-full overflow-hidden border border-[#595959] items-center justify-center"
                >
                  <img
                    src="assets/images/logos/dribbble.svg"
                    className="w-6 h-6"
                    alt="icon"
                  />
                </a>
                <a
                  href=""
                  className="w-9 h-9 flex shrink-0 rounded-full overflow-hidden border border-[#595959] items-center justify-center"
                >
                  <img
                    src="assets/images/logos/facebook.svg"
                    className="w-6 h-6"
                    alt="icon"
                  />
                </a>
                <a
                  href=""
                  className="w-9 h-9 flex shrink-0 rounded-full overflow-hidden border border-[#595959] items-center justify-center"
                >
                  <img
                    src="assets/images/logos/apple.svg"
                    className="w-6 h-6"
                    alt="icon"
                  />
                </a>
                <a
                  href=""
                  className="w-9 h-9 flex shrink-0 rounded-full overflow-hidden border border-[#595959] items-center justify-center"
                >
                  <img
                    src="assets/images/logos/figma.svg"
                    className="w-6 h-6"
                    alt="icon"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="flex gap-[72px]">
            <div className="flex flex-col gap-8">
              <p className="font-semibold text-sm">Browse</p>
              <div className="flex flex-col gap-[18px]">
                <a
                  href=""
                  className="text-gray-500 dark:text-playspace-grey font-semibold text-xs"
                >
                  All Products
                </a>
                <a
                  href=""
                  className="text-gray-500 dark:text-playspace-grey font-semibold text-xs"
                >
                  Templates
                </a>
                <a
                  href=""
                  className="text-gray-500 dark:text-playspace-grey font-semibold text-xs"
                >
                  Ebooks
                </a>
                <a
                  href=""
                  className="text-gray-500 dark:text-playspace-grey font-semibold text-xs"
                >
                  Courses
                </a>
                <a
                  href=""
                  className="text-gray-500 dark:text-playspace-grey font-semibold text-xs"
                >
                  Fonts
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <p className="font-semibold text-sm">Platform</p>
              <div className="flex flex-col gap-[18px]">
                <a
                  href=""
                  className="text-gray-500 dark:text-playspace-grey font-semibold text-xs"
                >
                  All-Access Pass
                </a>
                <a
                  href=""
                  className="text-gray-500 dark:text-playspace-grey font-semibold text-xs"
                >
                  Become an author
                </a>
                <a
                  href=""
                  className="text-gray-500 dark:text-playspace-grey font-semibold text-xs"
                >
                  Affiliate program
                </a>
                <a
                  href=""
                  className="text-gray-500 dark:text-playspace-grey font-semibold text-xs"
                >
                  Terms & Licensing
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <p className="font-semibold text-sm">Customer service</p>
              <div className="flex flex-col gap-[18px]">
                <a
                  href=""
                  className="text-gray-500 dark:text-playspace-grey font-semibold text-xs"
                >
                  FAQ
                </a>
                <a
                  href=""
                  className="text-gray-500 dark:text-playspace-grey font-semibold text-xs"
                >
                  Orders
                </a>
                <a
                  href=""
                  className="text-gray-500 dark:text-playspace-grey font-semibold text-xs"
                >
                  Payments
                </a>
                <a
                  href=""
                  className="text-gray-500 dark:text-playspace-grey font-semibold text-xs"
                >
                  refunds
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <p className="font-semibold text-sm">Contact us</p>
              <div className="flex flex-col gap-[18px]">
                <a
                  href=""
                  className="text-gray-500 dark:text-playspace-grey font-semibold text-xs"
                >
                  About us
                </a>
                <a
                  href=""
                  className="text-gray-500 dark:text-playspace-grey font-semibold text-xs"
                >
                  Company
                </a>
                <a
                  href=""
                  className="text-gray-500 dark:text-playspace-grey font-semibold text-xs"
                >
                  Careers
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="text-[10px] text-gray-400 dark:text-[#595959]">
          © 2024, playspace LLC.
        </p>
      </div>
    </footer>
  );
}
