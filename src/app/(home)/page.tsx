"use client";

import CategoryCard, { CategoryProps } from "../components/category-card";
import ProductCard, { ProductCardProps } from "../components/product-card";
import { useEffect, useState } from "react";
import { getAllFacilities } from "../services/facilityService";
import { getAllCategories } from "../services/categoryService";
import Footer from "../components/footer";
import { getUser } from "../services/authService";

export default function HomePage() {
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [products, setProducts] = useState<ProductCardProps[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getAllCategories();
        await getUser();

        setCategories(response.data);
      } catch (error) {
        console.log("🚀 ~ fetchCategories ~ error:", error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllFacilities();

        setProducts(response.data);
      } catch (error) {
        console.log("🚀 ~ fetchCategories ~ error:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <header className="w-full pt-[108px] pb-[56px] bg-[url('/assets/images/backgrounds/hero-image.jpg')] bg-cover bg-no-repeat bg-center relative z-0">
        <div className="container max-w-[1130px] mx-auto flex flex-col items-center justify-center gap-[34px] z-10">
          <div className="flex flex-col gap-2 text-center w-fit mt-20 z-10">
            <h1 className="font-semibold text-[60px] leading-[130%] text-gray-800 dark:text-white">
              Find Your Perfect Sports Field
              <br />
              Anytime, Anywhere
            </h1>
            <p className="text-lg text-gray-600 dark:text-playspace-grey">
              Book high-quality fields with ease and elevate your game to the
              next level.
            </p>
          </div>
          <div className="flex w-full justify-center mb-[34px] z-10">
            <form className="group/search-bar p-[14px_18px] bg-white dark:bg-playspace-darker-grey ring-1 ring-gray-300 dark:ring-[#414141] hover:ring-gray-500 dark:hover:ring-[#888888] max-w-[560px] w-full rounded-full transition-all duration-300">
              <div className="relative text-left">
                <button className="absolute inset-y-0 left-0 flex items-center">
                  <img src="assets/images/icons/search-normal.svg" alt="icon" />
                </button>
                <input
                  type="text"
                  id="searchInput"
                  className="bg-white dark:bg-playspace-darker-grey w-full pl-[36px] focus:outline-none placeholder:text-gray-400 text-gray-700 dark:text-white dark:placeholder:text-[#595959] pr-9"
                  placeholder="Type anything to search..."
                />
                <input
                  type="reset"
                  id="resetButton"
                  className="close-button hidden w-[38px] h-[38px] flex shrink-0 bg-[url('/assets/images/icons/close.svg')] hover:bg-[url('/assets/images/icons/close-white.svg')] transition-all duration-300 appearance-none transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 -right-5"
                  value=""
                />
              </div>
            </form>
          </div>
        </div>
        <div className="w-full h-full absolute top-0 bg-gradient-to-b from-white/10 to-white dark:from-playspace-black/30 dark:to-playspace-black z-0"></div>
      </header>
      <section
        id="Category"
        className="container max-w-[1130px] mx-auto mb-[102px] flex flex-col gap-8"
      >
        <h2 className="font-semibold text-[32px]">Category</h2>
        <div className="flex justify-between items-center">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              name={category.name}
              description={category.description}
              icon={category.icon}
            />
          ))}
        </div>
      </section>
      <section
        id="NewProduct"
        className="container max-w-[1130px] mx-auto mb-[102px] flex flex-col gap-8"
      >
        <h2 className="font-semibold text-[32px]">New Product</h2>
        <div className="grid grid-cols-4 gap-[22px]">
          {products.map((products) => (
            <ProductCard
              key={products.id}
              id={products.id}
              name={products.name}
              category={products.category}
              pricePerHour={products.pricePerHour}
              ownerAvatar={products.ownerAvatar}
              thumbnail={products.thumbnail}
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
