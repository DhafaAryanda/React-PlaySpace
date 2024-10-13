import React from "react";

export default function CategoryCard() {
  return (
    <a
      href=""
      className="group category-card w-fit h-fit p-[1px] rounded-2xl bg-img-transparent hover:bg-img-purple-to-orange transition-all duration-300"
    >
      <div className="flex flex-col p-[18px] rounded-2xl w-[210px] bg-img-black-gradient group-active:bg-img-black transition-all duration-300">
        <div className="w-[58px] h-[58px] flex shrink-0 items-center justify-center">
          <img src="assets/images/icons/badminton.svg" alt="icon" />
        </div>
        <div className="px-[6px] flex flex-col text-left">
          <p className="font-bold text-sm">All Products</p>
          <p className="text-xs text-playspace-grey">Everything in One Place</p>
        </div>
      </div>
    </a>
  );
}
