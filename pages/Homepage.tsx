import { homepage } from "@/utils/homepage";
import Link from "next/link";
import React from "react";

export default function Homepage() {
  return (
    <section>
      <div className="container-box">
        {homepage.map((item, id) => (
          <Link key={id} href={item.link}>
            <div className="box-tools">
              <span className="text-light1">
                <item.icon size="20" />
              </span>
              <p>{item.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}