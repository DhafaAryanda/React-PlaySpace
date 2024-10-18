"use client";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import Link from "next/link";

export default function FormSignIn() {
  function SubmitButton() {
    const { pending } = useFormStatus();

    return (
      <button
        type="submit"
        disabled={pending}
        className="disabled:opacity-40 text-center text-flysha-black rounded-full bg-playspace-dark-grey font-bold w-full p-[12px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#627254]"
      >
        Sign In
      </button>
    );
  }

  return (
    <form className="bg-[#181818] text-white w-[500px] flex flex-col rounded-[20px] gap-5 p-5">
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-medium">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Write your email"
          className="rounded-full w-full p-[12px_20px] h-[44px] bg-[#E4E0E1] text-playspace-darker-grey text-sm appearance-none outline-none font-semibold focus:ring-2 focus:ring-[#627254]"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="font-medium">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Type your password"
          className="rounded-full w-full p-[12px_20px] h-[44px] bg-[#E4E0E1] text-playspace-darker-grey text-sm  appearance-none outline-none font-semibold focus:ring-2 focus:ring-[#627254]"
        />
      </div>
      <SubmitButton />
      <Link
        href="/sign-up"
        className="text-center text-flysha-black hover:text-white rounded-full bg-playspace-darker-grey hover:bg-flysha-black font-semibold w-full p-[12px_30px] border border-flysha-black transition-all duration-300"
      >
        Create New Account
      </Link>
    </form>
  );
}
