import Link from "next/link";
import React from "react";

export default function SiteNav() {
  return (
    <nav className="flex flex-row items-center justify-center gap-6">
      <Link href={"/"}>Passenger</Link>
      <Link href={"/"}>Driver</Link>
      <Link href={"/"}>Services</Link>
      <Link href={"/"}>Business</Link>
      <Link href={"/"}>Community</Link>
      <Link href={"/"}>Book Now</Link>
    </nav>
  );
}
