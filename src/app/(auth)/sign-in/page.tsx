import React from "react";
import FormSignIn from "./components/form-signin";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { SignInForm } from "./components/signin-form";
import { buttonVariants } from "@/components/ui/button";

export default function SignInPage() {
  return (
    <>
      {/* <div className="form-section container max-w-[1130px] w-full mx-auto flex flex-col gap-[30px] mt-[53px]">
        <div className="title flex flex-col gap-1">
          <h1 className="font-bold text-[32px] leading-[48px]">Sign Up</h1>
          <p className="font-medium text-lg leading-[27px]">
            Enjoy new experience of flight
          </p>
        </div>
        <FormSignUp />
      </div> */}
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/sign-up"
          className={cn(
            buttonVariants({ variant: "default" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Sign Up
        </Link>

        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 ">
            <Image
              src="/assets/images/backgrounds/background-auth-2.jpg"
              alt="background"
              layout="fill"
            />
          </div>
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Image
              width={154}
              height={40}
              src="../../../../assets/images/logos/logo.svg"
              alt="logo"
              className="block dark:hidden"
            />
            <Image
              width={154}
              height={40}
              src="../../../../assets/images/logos/logo-dark.svg"
              alt="logo"
              className="hidden dark:block"
            />
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Your journey continues. Sign in and keep the momentum
                going. &rdquo;
              </p>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Welcome back!
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email and password to sign in
              </p>
            </div>
            <SignInForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/sign-up" className="text-primary">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
