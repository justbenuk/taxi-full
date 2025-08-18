"use server";
import { loginSchema, registerSchema } from "@/validators";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import z from "zod";
import { hashSync } from "bcrypt-ts-edge";
import { db } from "@/lib/db";
import { signIn } from "@/auth";

export async function registerUserAction(data: z.infer<typeof registerSchema>) {
  try {
    const validated = registerSchema.parse(data);

    const hashedPassword = hashSync(validated.password, 10);

    await db.user.create({
      data: {
        name: validated.name,
        email: validated.email,
        password: hashedPassword,
      },
    });

    await signIn("credentials", {
      email: validated.email,
      password: validated.password,
    });
    return { success: true, message: "You have logged in" };
  } catch (error) {
    if (isRedirectError(error)) throw error;
    return { success: false, message: "Something went wrong" };
  }
}

export async function loginUserAction(data: z.Infer<typeof loginSchema>) {
  try {
    const validated = loginSchema.parse(data);
    await signIn("credentials", validated);
    return { success: true, message: "You have logged in" };
  } catch (error) {
    if (isRedirectError(error)) throw error;
    return { success: false, message: "Something went wrong" };
  }
}
