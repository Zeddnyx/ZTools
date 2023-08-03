"use client";
import Link from "next/link";
import React from "react";

export default function Location() {
  return (
    <div className="relative w-full pb-10">
      <div className="absolute flex items-center">
        <Link href="/">
          <p className="rotate-180 font-bold">&#10141; </p>
        </Link>
      </div>
    </div>
  );
}
