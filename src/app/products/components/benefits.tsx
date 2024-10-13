import React from "react";

export default function Benefits() {
  return (
    <div className="p-[2px] bg-img-purple-to-orange rounded-[20px] flex w-full h-fit">
      <div className="w-full p-[28px] bg-[#181818] rounded-[20px] flex flex-col gap-[26px]">
        <div className="flex flex-col gap-3">
          <p className="font-semibold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#B05CB0] to-[#FCB16B]">
            Rp 6,288,000
          </p>
          <div className="flex flex-col gap-[10px]">
            <div className="flex items-center gap-[10px]">
              <div className="w-4 h-4 flex shrink-0">
                <img src="assets/images/icons/check.svg" alt="icon" />
              </div>
              <p className="text-playspace-grey">100% Original Content</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="w-4 h-4 flex shrink-0">
                <img src="assets/images/icons/check.svg" alt="icon" />
              </div>
              <p className="text-playspace-grey">Lifetime Support</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="w-4 h-4 flex shrink-0">
                <img src="assets/images/icons/check.svg" alt="icon" />
              </div>
              <p className="text-playspace-grey">High-Performance Code</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="w-4 h-4 flex shrink-0">
                <img src="assets/images/icons/check.svg" alt="icon" />
              </div>
              <p className="text-playspace-grey">Customizable Themes</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="w-4 h-4 flex shrink-0">
                <img src="assets/images/icons/check.svg" alt="icon" />
              </div>
              <p className="text-playspace-grey">Responsive Design</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="w-4 h-4 flex shrink-0">
                <img src="assets/images/icons/check.svg" alt="icon" />
              </div>
              <p className="text-playspace-grey">Comprehensive Documentation</p>
            </div>
          </div>
        </div>
        <a
          href="checkout.html"
          className="bg-[#2D68F8] text-center font-semibold p-[12px_20px] rounded-full hover:bg-[#083297] active:bg-[#062162] transition-all duration-300"
        >
          Check out
        </a>
      </div>
    </div>
  );
}
