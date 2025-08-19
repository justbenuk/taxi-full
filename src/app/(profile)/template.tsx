import { isLoggedIn } from "@/actions/user-actions";
import SiteLogo from "@/components/shared/site-logo";
import Image from "next/image";
import React, { ReactNode } from "react";

type AuthTemplateProps = {
  children: ReactNode;
};

export default async function ProfileTemplate({ children }: AuthTemplateProps) {
  await isLoggedIn();
  return <div>{children}</div>;
}
