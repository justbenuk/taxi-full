import { isLoggedIn } from "@/actions/user-actions";
import React, { ReactNode } from "react";

type AuthTemplateProps = {
  children: ReactNode;
};

export default async function ProfileTemplate({ children }: AuthTemplateProps) {
  await isLoggedIn();
  return <div>{children}</div>;
}
