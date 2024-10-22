"use server";

import { redirect } from "next/navigation";
import prisma from "../../../../../lib/prisma";
import { userSchema } from "./validation";
import bcrypt from "bcrypt";

interface ActionResult {
  errorTitle: string | null;
  errorDesc: string[] | null;
}

export async function signUpUser(
  prevState: unknown,
  formData: FormData
): Promise<ActionResult> {
  const validate = userSchema.safeParse({
    name: formData.get("name"),
    phoneNumber: formData.get("phoneNumber"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validate.success) {
    const errorDesc = validate.error.issues.map((issue) => issue.message);

    return {
      errorTitle: "Error Validation",
      errorDesc,
    };
  }

  const hashingPassword = bcrypt.hashSync(validate.data.password, 10);

  await prisma.users.create({
    data: {
      email: validate.data.email,
      name: validate.data.name,
      phoneNumber: validate.data.phoneNumber,
      password: hashingPassword,
      role: "UMUM",
    },
  });

  return redirect("/sign-in");
}
