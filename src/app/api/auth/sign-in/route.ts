import Response from "@/lib/api.response";

import bcrypt from "bcrypt";
import prisma from "../../../../../lib/prisma";
import { users } from "@prisma/client";

export async function POST(req: Request) {
  try {
    const payload = await req.json();

    const user = await prisma.users.findFirst({
      where: {
        email: payload.email,
      },
    });

    if (!user || !bcrypt.compareSync(payload.password, user.password)) {
      return Response({
        message: "Invalid Email or Password",
        status: 400,
      });
    }

    const data: Partial<users> = {
      ...user,
      password: undefined,
    };

    return Response({
      message: "Sign In Success",
      data,
      status: 200,
    });
  } catch (error: any) {
    return Response({
      message: "Sign In Failed",
      data: error,
      status: 500,
    });
  }
}
