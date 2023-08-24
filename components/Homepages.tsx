import { feature } from "@/utils/feature";
import Link from "next/link";
import React from "react";
import { MotionOpacity } from "./Motion";

export default function Homepage() {
  return (
    <MotionOpacity>
      <section>
        <div className="container-box">
          {feature.map((item, id) => (
            <Link key={id} href={item.link}>
              <div className="box-tools">
                <span>
                  <item.icon size="20" color="text-light1" />
                </span>
                <p>{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </MotionOpacity>
  );
}
