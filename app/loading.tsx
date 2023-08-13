import React from "react";

export default function loading() {
  return (
    <div className="max-w-4xl mt-16 w-full mx-auto px-4 animate-pulse ">
      <div className="grid gap-3">
        <div className="h-28 bg-gray-200 rounded-lg"></div>
        <div className="h-48 bg-gray-200 rounded-lg"></div>
        <div className="h-36 bg-gray-200 rounded-lg"></div>
        <div className="h-48 w-full flex gap-3">
          <div className="h-20 w-full bg-gray-200 rounded-lg"></div>
          <div className="h-20 w-full bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
