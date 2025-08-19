import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      role: string;
      groups: string[]
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    role: string;
  }
}