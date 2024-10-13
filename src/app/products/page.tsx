import React from "react";
import ProductCard from "../components/product-card";
import Benefits from "./components/benefits";
import ProfileCard from "./components/profile-card";
import Navbar from "../components/navbar";

export default function ProductDetailPage() {
  return (
    <>
      <Navbar />
      <header className="w-full pt-[74px] pb-[103px] relative z-0">
        <div className="container max-w-[1130px] mx-auto flex flex-col items-center justify-center z-10">
          <div className="flex flex-col gap-4 mt-7 z-10">
            <p className="bg-[#2A2A2A] font-semibold text-playspace-grey rounded-[4px] p-[8px_16px] w-fit">
              Template
            </p>
            <h1 className="font-semibold text-[55px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              dicta!
            </h1>
          </div>
        </div>
        <div className="background-image w-full h-full absolute top-0 overflow-hidden z-0">
          <img
            src="assets/images/backgrounds/hero.png"
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
              src="assets/images/backgrounds/hero.png"
              className="w-full h-full object-cover"
              alt="hero image"
            />
          </div>
          <div className="flex gap-8 relative -mt-[93px]">
            <div className="flex flex-col p-[30px] gap-5 bg-[#181818] rounded-[20px] w-[700px] shrink-0 mt-[90px] h-fit">
              <div className="flex flex-col gap-4">
                <p className="font-semibold text-xl">Overview</p>
                <p className="text-playspace-grey leading-[30px]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Fugit ipsam non magnam quisquam rerum qui? Nesciunt eaque
                  nihil earum reprehenderit quos quaerat, iste unde expedita.
                  Magnam eveniet atque adipisci assumenda odit! Exercitationem
                  similique mollitia laboriosam quod animi sapiente temporibus
                  suscipit sequi impedit? Pariatur ipsum voluptas quibusdam
                  nihil hic perferendis sequi, voluptate fuga ex dolores
                  incidunt excepturi alias id expedita dolorum debitis dolore
                  repellat cupiditate? Blanditiis, iure ullam voluptate ea
                  adipisci aperiam excepturi esse qui praesentium voluptatum? Id
                  mollitia, culpa nobis expedita iste ipsam sit sequi,
                  reprehenderit a ratione, repellat consectetur at labore
                  maxime. Esse illum eaque, magni amet quis odio. Exercitationem
                  veniam aspernatur cum repellendus, soluta deleniti at sed
                  dolorum eaque amet molestiae corporis ut? Accusamus dolorem
                  deleniti sequi, error placeat eum laboriosam, saepe debitis
                  eius eligendi vel numquam quaerat asperiores cupiditate
                  praesentium assumenda repudiandae iure. At hic blanditiis
                  voluptatem esse, perferendis architecto molestiae repellendus
                  fuga doloremque fugit accusantium iusto exercitationem quo!
                  Dignissimos expedita deleniti rem beatae assumenda! Ad officia
                  quia deleniti voluptates cumque sequi laudantium nobis harum
                  nesciunt itaque qui, velit unde asperiores aliquid explicabo
                  nihil, atque dolorem eveniet repellat temporibus iusto. Illo
                  temporibus aliquid blanditiis, fugit ipsa culpa libero
                  reiciendis tempore deserunt eius, qui in cum, porro
                  accusantium?
                </p>
                <div className="flex items-center gap-[10px] mt-1">
                  <a
                    href=""
                    className="w-9 h-9 justify-center items-center rounded-full flex shrink-0 overflow-hidden border-[0.69px] border-[#414141]"
                  >
                    <img
                      src="assets/images/logos/Python.svg"
                      className="p-[5px]"
                      alt="logo"
                    />
                  </a>
                  <a
                    href=""
                    className="w-9 h-9 justify-center items-center rounded-full flex shrink-0 overflow-hidden border-[0.69px] border-[#414141]"
                  >
                    <img
                      src="assets/images/logos/figma-logo.svg"
                      className="p-[5px]"
                      alt="logo"
                    />
                  </a>
                  <a
                    href=""
                    className="w-9 h-9 justify-center items-center rounded-full flex shrink-0 overflow-hidden border-[0.69px] border-[#414141]"
                  >
                    <img
                      src="assets/images/logos/blender.svg"
                      className="p-[5px]"
                      alt="logo"
                    />
                  </a>
                  <a
                    href=""
                    className="w-9 h-9 justify-center items-center rounded-full flex shrink-0 overflow-hidden border-[0.69px] border-[#414141]"
                  >
                    <img
                      src="assets/images/logos/Excel.svg"
                      className="p-[5px]"
                      alt="logo"
                    />
                  </a>
                  <a
                    href=""
                    className="w-9 h-9 justify-center items-center rounded-full flex shrink-0 overflow-hidden border-[0.69px] border-[#414141]"
                  >
                    <img
                      src="assets/images/logos/Laravel.svg"
                      className="p-[5px]"
                      alt="logo"
                    />
                  </a>
                  <a
                    href=""
                    className="w-9 h-9 justify-center items-center rounded-full flex shrink-0 overflow-hidden border-[0.69px] border-[#414141]"
                  >
                    <img
                      src="assets/images/logos/Kotlin.svg"
                      className="p-[5px]"
                      alt="logo"
                    />
                  </a>
                  <a
                    href=""
                    className="w-9 h-9 justify-center items-center rounded-full flex shrink-0 overflow-hidden border-[0.69px] border-[#414141]"
                  >
                    <img
                      src="assets/images/logos/flutter.svg"
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
              <Benefits />
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
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </>
  );
}
