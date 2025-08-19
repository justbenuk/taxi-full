"use server";
import { loginSchema, registerSchema } from "@/validators";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import z from "zod";
import { hashSync } from "bcrypt-ts-edge";
import { db } from "@/lib/db";
import { auth, signIn, signOut } from "@/auth";
import { redirect } from "next/navigation";

export async function registerUserAction(data: z.infer<typeof registerSchema>) {
  try {
    const validated = registerSchema.parse(data);

    const hashedPassword = hashSync(validated.password, 10);

    await db.user.create({
      data: {
        name: validated.name,
        email: validated.email,
        password: hashedPassword,
        groups: {
          create: [{ group: "NONE" }],
        },
      },
    });

    await signIn("credentials", {
      email: validated.email,
      password: validated.password,
    });
    return { success: true, message: "You have logged in" };
  } catch (error) {
    if (isRedirectError(error)) throw error;
    console.log(error);
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

export async function isLoggedIn() {
  const session = await auth();
  if (!session) {
    return redirect("/login");
  }
}

export async function logoutUserAction() {
  await signOut();
}

export async function isAdmin() {
  const session = await auth();
  if (!session) {
    return redirect("/login");
  }

  if (session.user.role !== "admin") {
    return redirect("/unauthorised");
  }
  return session.user;
}

export async function getAllUsers() {
  try {
    const users = await db.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        image: true,
        groups: {
          select: {
            group: true,
          },
        },
      },
    });
    return { success: true, users };
  } catch (error) {
    console.error(error);
    return { success: true, message: "We counln't fetch the users" };
  }
}

export async function deleteUserAction(id: string) {
  console.log(id);
  const allowed = await isAdmin();
  if (!allowed) return redirect("/unauthorised");

  try {
    await db.user.delete({
      where: {
        id,
      },
    });
    return { success: true, message: "User Deleted" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Something went wrong when deleting the user" };
  }
}

export async function getCurrentUser() {
  const session = await auth();
  if (!session) return redirect("/login");

  try {
    const user = await db.user.findFirst({
      where: {
        id: session.user.id,
      },
      select: {
        name: true,
        image: true,
        email: true,
      },
    });

    if (!user) {
      return { success: false, message: "No user found" };
    }

    return { success: true, user };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error fetching profile" };
  }
}
