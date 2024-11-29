"use client";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUp, SignUpData } from "@/app/services/authService";
import { useForm } from "react-hook-form";
import { signUpSchema } from "../lib/validation";
import { useState } from "react";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface FormData extends SignUpData {}

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(signUpSchema),
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (formData: FormData) => {
    setIsLoading(true);

    try {
      const result = await signUp(formData);
      console.log("🚀 ~ onSubmit ~ result:", result);
      setIsLoading(false);
      toast({
        variant: "default",
        title: "Account Created",
        description: "Your account has been created successfully.",
        action: <ToastAction altText="Close">Close</ToastAction>,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log("🚀 ~ onSubmit ~ error:", error);
      setIsLoading(false);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error?.message || "There was a problem, please try again.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="name">
              Fullname
            </Label>
            <Input
              id="name"
              placeholder="Fullname"
              autoCapitalize="none"
              {...register("name")}
            />
            {errors.name && (
              <div className="ml-1 text-red-500/70 text-xs">
                {errors.name.message}
              </div>
            )}
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="Email Address"
              type="email"
              autoCapitalize="none"
              {...register("email")}
            />
            {errors.email && (
              <div className="ml-1 text-red-500/70 text-xs">
                {errors.email.message}
              </div>
            )}
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="phone">
              Phone Number
            </Label>
            <Input
              id="phone"
              placeholder="Phone Number"
              {...register("phone")}
            />
            {errors.phone && (
              <div className="ml-1 text-red-500/70 text-xs">
                {errors.phone.message}
              </div>
            )}
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="avatar">
              Avatar
            </Label>
            <Input
              id="avatar"
              placeholder="Avatar"
              type="url"
              {...register("avatar")}
            />
            {errors.avatar && (
              <div className="ml-1 text-red-500/70 text-xs">
                {errors.avatar.message}
              </div>
            )}
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="address">
              address
            </Label>
            <Input
              id="address"
              placeholder="address"
              {...register("address")}
            />
            {errors.address && (
              <div className="ml-1 text-red-500/70 text-xs">
                {errors.address.message}
              </div>
            )}
          </div>

          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                {...register("password")}
              />
              <button
                type="button"
                onClick={() => {
                  setShowPassword((prev) => !prev);
                }}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
            {errors.password && (
              <div className="ml-1 text-red-500/70 text-xs">
                {errors.password.message}
              </div>
            )}
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="confirmPassword">
              Confirm Password
            </Label>
            <Input
              id="confirmPassword"
              placeholder="Confirm Password"
              type="password"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <div className="ml-1 text-red-500/70 text-xs">
                {errors.confirmPassword.message}
              </div>
            )}
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Create New Account
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button">
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}
        Google
      </Button>
    </div>
  );
}
