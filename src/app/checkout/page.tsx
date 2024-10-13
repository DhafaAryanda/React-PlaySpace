import React from "react";
import Navbar from "../components/navbar";

export default function CheckoutPage() {
  return (
    <>
      <Navbar />
      <section
        id="checkout"
        className="container max-w-[1130px] mx-auto mt-[100px]"
      >
        <div className="w-full flex justify-center gap-[118px]">
          <div className="product-info flex flex-col gap-4 w-min h-fit mt-[18px]">
            <h1 className="font-semibold text-[32px] ">Checkout Product</h1>
            <div className="product-detail flex flex-col gap-3">
              <div className="thumbnail w-[412px] h-[255px] flex shrink-0 rounded-[20px] overflow-hidden">
                <img
                  src="assets/images/backgrounds/hero.png"
                  className="w-full h-full object-cover"
                  alt="thumbnail"
                />
              </div>
              <div className="product-title flex flex-col gap-[30px]">
                <div className="flex flex-col gap-3">
                  <p className="font-semibold">
                    Huis Elite: The Complete Smart Home App UI Kit for Modern
                    Living
                  </p>
                  <p className="bg-[#2A2A2A] font-semibold text-xs text-playspace-grey rounded-[4px] p-[4px_6px] w-fit">
                    Template
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full flex shrink-0 overflow-hidden">
                      <img src="assets/images/icons/ydntkwia.svg" alt="logo" />
                    </div>
                    <p className="font-semibold text-playspace-grey">
                      YDNTKWIA
                    </p>
                  </div>
                  <p className="font-semibold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#B05CB0] to-[#FCB16B]">
                    Rp 6,288,000
                  </p>
                </div>
              </div>
            </div>
          </div>
          <form className="flex flex-col p-[30px] gap-[60px] rounded-[20px] w-[450px] border-2 border-playspace-darker-grey">
            <div className="w-full flex flex-col gap-4">
              <p className="font-semibold text-xl">Transfer to:</p>
              <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                  <div className="flex items-center gap-1 p-[12px_20px] pl-4 w-[163px] justify-between rounded-lg bg-[#181818] hover:ring-[1px] hover:ring-[#A0A0A0] focus:ring-[1px] focus:ring-[#A0A0A0] transition-all duration-300">
                    <div className="flex flex-col">
                      <label
                        htmlFor="bank"
                        className="text-xs text-playspace-grey pl-1"
                      >
                        Bank Name
                      </label>
                      <select
                        name="bank"
                        id="bank"
                        className="mt-1 font-semibold bg-transparent appearance-none outline-none px-1 invalid:text-[#595959] invalid:font-normal invalid:text-sm"
                        required
                      >
                        <option
                          className="text-playspace-black"
                          value=""
                          selected
                          disabled
                          hidden
                        >
                          Select bank
                        </option>
                        <option className="text-playspace-black" value="BCA">
                          BCA
                        </option>
                        <option
                          className="text-playspace-black"
                          value="MANDIRI"
                        >
                          MANDIRI
                        </option>
                      </select>
                    </div>
                    <div className="w-6 h-6 flex shrink-0">
                      <img src="assets/images/icons/bank.svg" alt="icon" />
                    </div>
                  </div>
                  <div className="flex items-center gap-1 p-[12px_20px] pl-4 w-[215px] justify-between rounded-lg bg-[#181818] hover:ring-[1px] hover:ring-[#A0A0A0] focus:ring-[1px] focus:ring-[#A0A0A0] transition-all duration-300">
                    <div className="flex flex-col w-full">
                      <label
                        htmlFor="name"
                        className="text-xs text-playspace-grey pl-1"
                      >
                        Account Name
                      </label>
                      <div className="flex mt-1 items-center max-w-[149px]">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="font-semibold bg-transparent appearance-none autofull-no-bg outline-none px-1 placeholder:text-[#595959] placeholder:font-normal placeholder:text-sm w-full"
                          placeholder="Type here"
                          required
                        ></input>
                        <button
                          type="button"
                          className="w-[18px] h-[18px] flex shrink-0"
                        >
                          <img src="assets/images/icons/copy.svg" alt="icon" />
                        </button>
                      </div>
                    </div>
                    <div className="w-6 h-6 flex shrink-0">
                      <img
                        src="assets/images/icons/user-square.svg"
                        alt="icon"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 p-[12px_20px] pl-4 justify-between rounded-lg bg-[#181818] hover:ring-[1px] hover:ring-[#A0A0A0] focus:ring-[1px] focus:ring-[#A0A0A0] transition-all duration-300">
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="number"
                      className="text-xs text-playspace-grey pl-1"
                    >
                      Account Number
                    </label>
                    <div className="flex mt-1 items-center max-w-[322px]">
                      <input
                        type="tel"
                        name="number"
                        id="number"
                        className="mt-1 font-semibold bg-transparent appearance-none autofull-no-bg outline-none px-1 placeholder:text-[#595959] placeholder:font-normal placeholder:text-sm w-full"
                        placeholder="Type here"
                        pattern="[0-9 -]"
                        required
                      ></input>
                      <button
                        type="button"
                        className="w-[18px] h-[18px] flex shrink-0"
                      >
                        <img src="assets/images/icons/copy.svg" alt="icon" />
                      </button>
                    </div>
                  </div>
                  <div className="w-6 h-6 flex shrink-0">
                    <img src="assets/images/icons/card.svg" alt="icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-4">
              <p className="font-semibold text-xl">Confirm Payment</p>
              <div className="flex flex-col gap-3">
                <p className="text-xs text-[#2D68F8] p-[10px_22px] rounded-lg bg-[#2D68F805]">
                  Please upload proof of payment we will confirm it as soon as
                  possible
                </p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    className="flex gap-2 shrink-0 w-[291px] h-[48px] p-[12px_18px] justify-center items-center border border-dashed border-[#595959] rounded-lg hover:bg-[#2A2A2A] transition-all duration-300"
                  >
                    <p>Choose File</p>
                    <img
                      src="assets/images/icons/document-upload.svg"
                      alt="icon"
                    />
                  </button>
                  <input
                    type="file"
                    name="proof"
                    id="proof"
                    className="hidden"
                    required
                  />
                  <div className="relative rounded-lg overflow-hidden bg-[#181818] w-full h-[48px]">
                    <div className="relative file-preview z-10 w-full h-full hidden">
                      <img
                        src="assets/images/icons/check.svg"
                        className="check-icon absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="icon"
                      />
                      <img
                        src=""
                        className="thumbnail-proof w-full h-full object-cover"
                        alt="thumbnail"
                      />
                    </div>
                    <img
                      src="assets/images/icons/gallery.svg"
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                      alt="icon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <a
              href="success-checkout.html"
              className="rounded-full text-center bg-[#2D68F8] p-[8px_18px] font-semibold hover:bg-[#083297] active:bg-[#062162] transition-all duration-300"
            >
              Checkout Now
            </a>
          </form>
        </div>
      </section>
    </>
  );
}
