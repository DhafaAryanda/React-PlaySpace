// "use server";

// import prisma from "../../../../../lib/prisma";
// import { userSchema } from "../../sign-up/lib/validation";
// import bcrypt from "bcrypt";

// export interface ActionResult {
//   errorTitle: string | null;
//   errorDesc: string[] | null;
// }

// export async function signInUser(
//   prevState: unknown,
//   formData: FormData
// ): Promise<ActionResult | undefined> {
//   const signInSchema = userSchema.pick({ email: true, password: true });

//   const validate = signInSchema.safeParse({
//     email: formData.get("email"),
//     password: formData.get("password"),
//   });

//   if (!validate.success) {
//     const errorDesc = validate.error.issues.map((issue) => issue.message);

//     return {
//       errorTitle: "Error Validation",
//       errorDesc,
//     };
//   }

//   const existingUser = await prisma.users.findFirst({
//     where: {
//       email: validate.data.email,
//     },
//   });

//   if (!existingUser) {
//     return {
//       errorTitle: "Error",
//       errorDesc: ["User not found"],
//     };
//   }

//   const validPassword = await bcrypt.compare(
//     validate.data.password,
//     existingUser.password
//   );

//   if (!validPassword) {
//     return {
//       errorTitle: "Error",
//       errorDesc: ["Email or password is incorrect"],
//     };
//   }
// }
