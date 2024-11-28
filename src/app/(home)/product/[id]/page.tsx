"use client";

import Navbar from "@/app/components/navbar";
import React, { useEffect, useState } from "react";
import Benefits from "./components/benefits";
import ProfileCard from "./components/profile-card";
import {
  getAllFacilities,
  getFacilityById,
} from "@/app/services/facilityService";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setProduct, setRelatedProducts } from "@/app/slices/productSlice";
import ProductCard from "@/app/components/product-card";

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const dispatch = useDispatch();
  const product = useSelector((state: RootState) => state.product.product);
  const relatedProducts = useSelector(
    (state: RootState) => state.product.relatedProducts
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!product) {
      const fetchData = async () => {
        try {
          const responseProduct = await getFacilityById(params.id);
          const responseRelatedProducts = await getAllFacilities();

          dispatch(setProduct(responseProduct.data));
          dispatch(setRelatedProducts(responseRelatedProducts.data));
        } catch (error) {
          console.log("🚀 ~ fetchData ~ error:", error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    } else {
      setIsLoading(false);
    }
  }, [params.id, product, dispatch]);

  return (
    <>
      <Navbar />
      <header className="w-full pt-[74px] pb-[103px] relative z-0">
        <div className="container max-w-[1130px] mx-auto items-start flex flex-col  justify-center z-10">
          <div className="flex flex-col gap-4 mt-7 z-10">
            <p className="bg-[#2A2A2A] font-semibold text-playspace-grey rounded-[4px] p-[8px_16px] w-fit">
              {isLoading ? "Loading..." : product?.category.name}
            </p>
            <h1 className="font-semibold text-[55px]">
              {product?.name || "Loading..."}
            </h1>
          </div>
        </div>
        <div className="background-image w-full h-full absolute top-0 overflow-hidden z-0">
          <img
            src={product?.thumbnail}
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
              src={product?.thumbnail}
              className="w-full h-full object-cover"
              alt="hero image"
            />
          </div>
          <div className="flex gap-8 relative -mt-[93px]">
            <div className="flex flex-col p-[30px] gap-5 bg-[#181818] rounded-[20px] w-[700px] shrink-0 mt-[90px] h-fit">
              <div className="flex flex-col gap-4">
                <p className="font-semibold text-xl">Overview</p>
                <p className="text-playspace-grey leading-[30px]">
                  {isLoading ? "Loading..." : product?.description}
                </p>
              </div>
              {/* <div className="flex flex-row flex-wrap gap-4 items-center">
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
              </div> */}
            </div>
            <div className="flex flex-col w-[366px] gap-[30px] flex-nowrap overflow-y-visible">
              {isLoading ? (
                "Loading..."
              ) : (
                <Benefits
                  key={product!.id}
                  name="Benefits"
                  id={product!.id}
                  price_per_hour={product!.price_per_hour}
                />
              )}

              {isLoading ? (
                "Loading..."
              ) : (
                <ProfileCard
                  name={product!.owner.name}
                  avatar={product!.owner.avatar}
                  id={product!.owner.id}
                />
              )}
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
          {isLoading
            ? "Loading..."
            : relatedProducts?.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  category={product.category}
                  price_per_hour={product.price_per_hour}
                  owner_avatar={product.owner.avatar}
                  thumbnail={product.thumbnail}
                />
              ))}
        </div>
      </section>
    </>
  );
}
