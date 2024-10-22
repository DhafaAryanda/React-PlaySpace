"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast"; // import useToast

export default function FormSignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const { toast } = useToast(); // menggunakan toast

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      toast({
        title: "Sign In Failed",
        description: result.error, // tampilkan error menggunakan toast
        // status: "error",
        variant: "destructive", // gaya toast sebagai error
        duration: 5000, // durasi 5 detik
      });
    } else {
      router.push("/"); // Redirect ke halaman dashboard atau halaman lainnya
    }

    setIsSubmitting(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#181818] text-white w-[500px] flex flex-col rounded-[20px] gap-5 p-5"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-medium">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Write your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-full w-full p-[12px_20px] h-[44px] bg-[#E4E0E1] text-playspace-darker-grey text-sm appearance-none outline-none font-semibold focus:ring-2 focus:ring-[#627254]"
          required
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-full w-full p-[12px_20px] h-[44px] bg-[#E4E0E1] text-playspace-darker-grey text-sm appearance-none outline-none font-semibold focus:ring-2 focus:ring-[#627254]"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="disabled:opacity-40 text-center text-flysha-black rounded-full bg-playspace-dark-grey font-bold w-full p-[12px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#627254]"
      >
        {isSubmitting ? "Signing In..." : "Sign In"}
      </button>

      <Link
        href="/sign-up"
        className="text-center text-flysha-black hover:text-white rounded-full bg-playspace-darker-grey hover:bg-flysha-black font-semibold w-full p-[12px_30px] border border-flysha-black transition-all duration-300"
      >
        Create New Account
      </Link>
    </form>
  );
}
