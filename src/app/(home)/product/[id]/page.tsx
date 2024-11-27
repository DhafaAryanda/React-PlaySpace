// app/[id]/page.tsx
"use client"; // Pastikan ini ada di bagian atas untuk menjadikan komponen client-side

import Navbar from "@/app/components/navbar";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import Benefits from "./components/benefits";
import ProfileCard from "./components/profile-card";
import ProductCard from "@/app/components/product-card";

export interface Product {
  id: string;
  title: string;
  category: string;
  price: number;
  logo: string;
  thumbnail: string;
  description: string;
}

const products: Product[] = [
  {
    id: "1",
    title: "Lapangan Tenis USK",
    category: "Tenis",
    price: 120000,
    logo: "/assets/images/logos/framer.png",
    thumbnail: "/assets/images/fasilitas/lap 1 tenis-1.jpg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Fugit ipsam non magnam quisquam rerum qui? Nesciunt eaquenesciunt itaque qui, velit unde asperiores aliquid explicabonihil, atque dolorem eveniet repellat temporibus iusto. Illotemporibus aliquid blanditiis, fugit ipsa culpa liberoreiciendis tempore deserunt eius, qui in cum, porroaccusantium?",
  },
  {
    id: "2",
    title: "Lapangan Badminton USK",
    category: "Badminton",
    price: 70000,
    logo: "/assets/images/logos/framer.png",
    thumbnail: "/assets/images/fasilitas/lap 1 badminton gelanggang-1.jpg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Fugit ipsam non magnam quisquam rerum qui? Nesciunt eaquenesciunt itaque qui, velit unde asperiores aliquid explicabonihil, atque dolorem eveniet repellat temporibus iusto. Illotemporibus aliquid blanditiis, fugit ipsa culpa liberoreiciendis tempore deserunt eius, qui in cum, porroaccusantium?",
  },
  {
    id: "3",
    title: "Lapangan Basket USK",
    category: "Basket",
    price: 120000,
    logo: "/assets/images/logos/framer.png",
    thumbnail: "/assets/images/fasilitas/lap basket indoor gelanggang-2.jpg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Fugit ipsam non magnam quisquam rerum qui? Nesciunt eaquenesciunt itaque qui, velit unde asperiores aliquid explicabonihil, atque dolorem eveniet repellat temporibus iusto. Illotemporibus aliquid blanditiis, fugit ipsa culpa liberoreiciendis tempore deserunt eius, qui in cum, porroaccusantium?",
  },
  {
    id: "4",
    title: "Stadion Mini USK",
    category: "Stadion Mini",
    price: 120000,
    logo: "/assets/images/logos/framer.png",
    thumbnail: "/assets/images/fasilitas/stadion mini-1.jpg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Fugit ipsam non magnam quisquam rerum qui? Nesciunt eaquenesciunt itaque qui, velit unde asperiores aliquid explicabonihil, atque dolorem eveniet repellat temporibus iusto. Illotemporibus aliquid blanditiis, fugit ipsa culpa liberoreiciendis tempore deserunt eius, qui in cum, porroaccusantium?",
  },
];

export default function ProductDetailPage() {
  const params = useParams();
  const { id } = params; // Mengambil `id` dari URL params

  const product = products.find((product) => product.id === id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <>
      <Navbar />
      <header className="w-full pt-[74px] pb-[103px] relative z-0">
        <div className="container max-w-[1130px] mx-auto items-start flex flex-col  justify-center z-10">
          <div className="flex flex-col gap-4 mt-7 z-10">
            <p className="bg-[#2A2A2A] font-semibold text-playspace-grey rounded-[4px] p-[8px_16px] w-fit">
              {product.category}
            </p>
            <h1 className="font-semibold text-[55px]">{product.title}</h1>
          </div>
        </div>
        <div className="background-image w-full h-full absolute top-0 overflow-hidden z-0">
          <img
            src={product.thumbnail}
            className="w-full h-full object-cover"
            alt="hero image"
          />
        </div>
        <div className="w-full h-1/3 absolute bottom-0 bg-gradient-to-b from-playspace-black/0 to-playspace-black z-0"></div>
        <div className="w-full h-full absolute top-0 bg-playspace-black/95 z-0"></div>
      </header>

      <section
        id="DetailsContent"
        className="container max-w-[1130px] mx-auto mb-[32px] relative -top-[70px]"
      >
        <div className="flex flex-col gap-8">
          <div className="w-[1130px] h-[700px] flex shrink-0 rounded-[20px] overflow-hidden">
            <img
              src={product.thumbnail}
              className="w-full h-full object-cover"
              alt="hero image"
            />
          </div>
          <div className="flex gap-8 relative -mt-[93px]">
            <div className="flex flex-col p-[30px] gap-5 bg-[#181818] rounded-[20px] w-[700px] shrink-0 mt-[90px] h-fit">
              <div className="flex flex-col gap-4">
                <p className="font-semibold text-xl">Overview</p>
                <p className="text-playspace-grey leading-[30px]">
                  {product.description}
                </p>
                <div className="flex items-center gap-[10px] mt-1">
                  <a
                    href=""
                    className="w-9 h-9 justify-center items-center rounded-full flex shrink-0 overflow-hidden border-[0.69px] border-[#414141]"
                  >
                    <img
                      src="/assets/images/logos/Python.svg"
                      className="p-[5px]"
                      alt="logo"
                    />
                  </a>
                  <a
                    href=""
                    className="w-9 h-9 justify-center items-center rounded-full flex shrink-0 overflow-hidden border-[0.69px] border-[#414141]"
                  >
                    <img
                      src="/assets/images/logos/figma-logo.svg"
                      className="p-[5px]"
                      alt="logo"
                    />
                  </a>
                  <a
                    href=""
                    className="w-9 h-9 justify-center items-center rounded-full flex shrink-0 overflow-hidden border-[0.69px] border-[#414141]"
                  >
                    <img
                      src="/assets/images/logos/blender.svg"
                      className="p-[5px]"
                      alt="logo"
                    />
                  </a>
                  <a
                    href=""
                    className="w-9 h-9 justify-center items-center rounded-full flex shrink-0 overflow-hidden border-[0.69px] border-[#414141]"
                  >
                    <img
                      src="/assets/images/logos/Excel.svg"
                      className="p-[5px]"
                      alt="logo"
                    />
                  </a>
                  <a
                    href=""
                    className="w-9 h-9 justify-center items-center rounded-full flex shrink-0 overflow-hidden border-[0.69px] border-[#414141]"
                  >
                    <img
                      src="/assets/images/logos/Laravel.svg"
                      className="p-[5px]"
                      alt="logo"
                    />
                  </a>
                  <a
                    href=""
                    className="w-9 h-9 justify-center items-center rounded-full flex shrink-0 overflow-hidden border-[0.69px] border-[#414141]"
                  >
                    <img
                      src="/assets/images/logos/Kotlin.svg"
                      className="p-[5px]"
                      alt="logo"
                    />
                  </a>
                  <a
                    href=""
                    className="w-9 h-9 justify-center items-center rounded-full flex shrink-0 overflow-hidden border-[0.69px] border-[#414141]"
                  >
                    <img
                      src="/assets/images/logos/flutter.svg"
                      className="p-[5px]"
                      alt="logo"
                    />
                  </a>
                </div>
              </div>
              <div className="flex flex-row flex-wrap gap-4 items-center">
                <a
                  href=""
                  className="tags p-[4px_8px] border border-[#414141] rounded-[4px] h-fit w-fit text-xs text-playspace-light-grey hover:bg-[#2A2A2A] transition-all duration-300"
                >
                  bank
                </a>
                <a
                  href=""
                  className="tags p-[4px_8px] border border-[#414141] rounded-[4px] h-fit w-fit text-xs text-playspace-light-grey hover:bg-[#2A2A2A] transition-all duration-300"
                >
                  finance
                </a>
                <a
                  href=""
                  className="tags p-[4px_8px] border border-[#414141] rounded-[4px] h-fit w-fit text-xs text-playspace-light-grey hover:bg-[#2A2A2A] transition-all duration-300"
                >
                  mobile
                </a>
                <a
                  href=""
                  className="tags p-[4px_8px] border border-[#414141] rounded-[4px] h-fit w-fit text-xs text-playspace-light-grey hover:bg-[#2A2A2A] transition-all duration-300"
                >
                  money
                </a>
                <a
                  href=""
                  className="tags p-[4px_8px] border border-[#414141] rounded-[4px] h-fit w-fit text-xs text-playspace-light-grey hover:bg-[#2A2A2A] transition-all duration-300"
                >
                  personal
                </a>
                <a
                  href=""
                  className="tags p-[4px_8px] border border-[#414141] rounded-[4px] h-fit w-fit text-xs text-playspace-light-grey hover:bg-[#2A2A2A] transition-all duration-300"
                >
                  scan
                </a>
                <a
                  href=""
                  className="tags p-[4px_8px] border border-[#414141] rounded-[4px] h-fit w-fit text-xs text-playspace-light-grey hover:bg-[#2A2A2A] transition-all duration-300"
                >
                  template
                </a>
                <a
                  href=""
                  className="tags p-[4px_8px] border border-[#414141] rounded-[4px] h-fit w-fit text-xs text-playspace-light-grey hover:bg-[#2A2A2A] transition-all duration-300"
                >
                  transfer
                </a>
                <a
                  href=""
                  className="tags p-[4px_8px] border border-[#414141] rounded-[4px] h-fit w-fit text-xs text-playspace-light-grey hover:bg-[#2A2A2A] transition-all duration-300"
                >
                  ui kit
                </a>
                <a
                  href=""
                  className="tags p-[4px_8px] border border-[#414141] rounded-[4px] h-fit w-fit text-xs text-playspace-light-grey hover:bg-[#2A2A2A] transition-all duration-300"
                >
                  UX
                </a>
                <a
                  href=""
                  className="tags p-[4px_8px] border border-[#414141] rounded-[4px] h-fit w-fit text-xs text-playspace-light-grey hover:bg-[#2A2A2A] transition-all duration-300"
                >
                  wallet
                </a>
                <a
                  href=""
                  className="tags p-[4px_8px] border border-[#414141] rounded-[4px] h-fit w-fit text-xs text-playspace-light-grey hover:bg-[#2A2A2A] transition-all duration-300"
                >
                  wallet
                </a>
              </div>
            </div>
            <div className="flex flex-col w-[366px] gap-[30px] flex-nowrap overflow-y-visible">
              <Benefits params={{ id: product.id }} product={product} />
              <ProfileCard />
            </div>
          </div>
        </div>
      </section>

      <section
        id="NewProduct"
        className="container max-w-[1130px] mx-auto mb-[102px] flex flex-col gap-8"
      >
        <h2 className="font-semibold text-[32px]">More Product</h2>
        <div className="grid grid-cols-4 gap-[22px]">
          {products.map((products, index) => (
            <ProductCard
              key={index}
              id={products.id}
              title={products.title}
              category={products.category}
              price={products.price}
              logo={products.logo}
              thumbnail={products.thumbnail}
            />
          ))}
        </div>
      </section>
    </>
  );
}
