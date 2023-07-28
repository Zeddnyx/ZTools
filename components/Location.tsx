"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";


export default function Location() {
  const location = usePathname();
  return (
    <span className="absolute right-3 top-2">
      <Link href="/">..{location?.replace("-", " ")}</Link>
    </span>
  );
}
