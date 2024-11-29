import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { SignUpForm } from "./components/signup-form";

export default function SignUpPage() {
  return (
    <>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/sign-in"
          className={cn(
            buttonVariants({ variant: "default" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Sign In
        </Link>

        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 ">
            <Image
              src="/assets/images/backgrounds/background-auth.jpg"
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
                &ldquo;Every champion starts with a first step. Take yours
                today.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <SignUpForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
