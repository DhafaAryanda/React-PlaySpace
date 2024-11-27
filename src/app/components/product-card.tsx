import Link from "next/link";
import React from "react";

export interface ProductCardProps {
  id: string;
  name: string;
  price_per_hour: string;
  owner_avatar: string;
  thumbnail: string;
  category: Category;
}

type Category = {
  id: string;
  name: string;
};

export default function ProductCard({
  id,
  name,
  category,
  price_per_hour,
  owner_avatar,
  thumbnail,
}: ProductCardProps) {
  return (
    <div className="product-card flex flex-col rounded-[18px] bg-white dark:bg-[#181818] shadow-md dark:shadow-none overflow-hidden">
      <Link
        href={`/product/${id}`}
        className="thumbnail w-full h-[180px] flex shrink-0 overflow-hidden relative"
      >
        <img
          src={thumbnail}
          className="w-full h-full object-cover"
          alt="thumbnail"
        />
        <p className="backdrop-blur bg-white/80  dark:bg-black/30 rounded-[4px] p-[4px_8px] absolute top-3 right-[14px] z-10 shadow-sm dark:shadow-none">
          Rp. {price_per_hour.toLocaleString()}
        </p>
      </Link>
      <div className="p-[10px_14px_12px] h-full flex flex-col justify-between gap-[14px]">
        <div className="flex flex-col gap-1">
          <Link
            href={`/product/${id}`}
            className="font-semibold line-clamp-2 hover:line-clamp-none"
          >
            {name}
          </Link>
          <p className="bg-gray-200 dark:bg-[#2A2A2A] font-semibold text-xs text-gray-600 dark:text-playspace-grey rounded-[4px] p-[4px_6px] w-fit">
            {category.name}
          </p>
        </div>
        <div className="flex items-center gap-[6px]">
          <div className="w-6 h-6 flex shrink-0 items-center justify-center rounded-full overflow-hidden">
            <img
              src={owner_avatar}
              className="w-full h-full object-cover"
              alt="logo"
            />
          </div>
          <a
            href=""
            className="font-semibold text-xs  text-gray-600 dark:text-playspace-grey"
          >
            Framer
          </a>
        </div>
      </div>
    </div>
  );
}
