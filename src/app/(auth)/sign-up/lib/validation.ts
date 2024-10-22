import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(4, { message: "Name must be at least 4 characters" }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email format" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters" }),
  phoneNumber: z
    .string({ required_error: "Phone number is required" })
    .min(11, { message: "Phone number must be at least 11 characters" }),
});
