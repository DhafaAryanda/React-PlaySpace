import React from "react";

export default function ProductCard() {
  return (
    <div className="product-card flex flex-col rounded-[18px] bg-[#181818] overflow-hidden">
      <a
        href="details.html"
        className="thumbnail w-full h-[180px] flex shrink-0 overflow-hidden relative"
      >
        <img
          src="assets/images/thumbnails/img1.png"
          className="w-full h-full object-cover"
          alt="thumbnail"
        />
        <p className="backdrop-blur bg-black/30 rounded-[4px] p-[4px_8px] absolute top-3 right-[14px] z-10">
          Rp 129,000
        </p>
      </a>
      <div className="p-[10px_14px_12px] h-full flex flex-col justify-between gap-[14px]">
        <div className="flex flex-col gap-1">
          <a
            href="details.html"
            className="font-semibold line-clamp-2 hover:line-clamp-none"
          >
            SaaS Website Master Template: Streamline Your Digital Solution
          </a>
          <p className="bg-[#2A2A2A] font-semibold text-xs text-playspace-grey rounded-[4px] p-[4px_6px] w-fit">
            Template
          </p>
        </div>
        <div className="flex items-center gap-[6px]">
          <div className="w-6 h-6 flex shrink-0 items-center justify-center rounded-full overflow-hidden">
            <img
              src="assets/images/logos/framer.png"
              className="w-full h-full object-cover"
              alt="logo"
            />
          </div>
          <a href="" className="font-semibold text-xs text-playspace-grey">
            Framer
          </a>
        </div>
      </div>
    </div>
  );
}
