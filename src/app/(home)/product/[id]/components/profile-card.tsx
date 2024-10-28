import React from "react";

export default function ProfileCard() {
  return (
    <div className="w-full p-[30px] bg-[#181818] rounded-[20px] flex flex-col gap-4 h-fit">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden flex shrink-0">
            <img src="/assets/images/icons/ydntkwia.svg" alt="icon" />
          </div>
          <div className="flex flex-col gap-[2px]">
            <p className="font-semibold">YDNTKWIA</p>
            <p className="text-[#595959] text-sm leading-[18px]">
              <span className="font-semibold mr-1">83</span>
              Product
            </p>
          </div>
        </div>
        <a href="">
          <img src="/assets/images/icons/arrow-right.svg" alt="icon" />
        </a>
      </div>
      <p className="text-sm leading-[24px] text-playspace-grey">
        A young UI/UX Designer from Indonesia. Specialized in mobile apps
        designs & loves creating UI Kit 🇮🇩
      </p>
    </div>
  );
}
