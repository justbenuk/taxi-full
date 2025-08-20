import React from "react";

type AdminSectionTitleProps = {
  title: string;
  description: string;
};

export default function AdminSectionTitle({ title, description }: AdminSectionTitleProps) {
  return (
    <div className="pb-4">
      <h1 className="font-semibold dark:text-yellow-300 text-2xl">{title}</h1>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  );
}
