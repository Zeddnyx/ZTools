"use client";

import Input from "@/components/Input";
import { useCallback, useState } from "react";
import { LuClipboardCopy } from "react-icons/lu";

export default function ColorPreview() {
  const [colorCode, setColorCode] = useState("");

  const rgbToHex = useCallback(
    (r: number, g: number, b: number) => {
      const fullHexCode = [r, g, b]
        .map((x) => {
          const hex = x.toString(16);
          return hex.length === 1 ? "0" + hex : hex;
        })
        .join("");

      return "#" + fullHexCode;
    },
    [colorCode],
  );

  const hexToRgb = useCallback(
    (hexCode: string) => {
      const rgbArr = hexCode
        .replace(
          "/^#?([a-fd])([a-fd])([a-fd])$/i",
          (m, r, g, b) => "#" + r + r + g + g + b + b,
        )
        .substring(1)
        .match(/.{2}/g)
        ?.map((x) => parseInt(x, 16));

      return `rgb(${rgbArr?.[0]}, ${rgbArr?.[1] || rgbArr?.[0]}, ${rgbArr?.[2] || rgbArr?.[1] || rgbArr?.[0]
        })`;
    },
    [colorCode],
  );

  const getColorCodeType = (colorCode: string, type: "HEX" | "RGB" | "HSL") => {
    switch (type) {
      case "HEX":
        if (colorCode.includes("#")) {
          return colorCode;
        }

        if (colorCode.includes("rgb")) {
          const [r, g, b] = colorCode.match(/\d+/g) ?? ["255", "255", "255"];

          return rgbToHex(+r, +g, +b);
        }
        break;
      case "RGB":
        if (colorCode.includes("rgb")) {
          return colorCode;
        }

        if (colorCode.includes("#")) {
          return hexToRgb(colorCode);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-3/4 mx-auto pb-10">
      <Input
        type="text"
        onChange={(e) => setColorCode(e.target.value)}
        placeholder="Masukan kode disini"
        label="Color Code"
      />
      <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4">
        <div
          className="w-full aspect-square"
          style={{
            backgroundColor: `${colorCode || "#fff"}`,
          }}
        />

        <div>
          <h3>Color Info Detail</h3>
          <ul className="mt-2 space-y-2 text-lg">
            <li className="flex justify-between w-full">
              <p>hex</p>
              <p className="flex items-center gap-2">
                <span className="select-all">
                  {getColorCodeType(colorCode, "HEX") || "#"}
                </span>
                <LuClipboardCopy
                  onClick={() => {
                    navigator.clipboard.writeText(
                      getColorCodeType(colorCode, "HEX") || "#",
                    );
                    alert("Hex Color Code Copied!");
                  }}
                  className="hover:opacity-75 w-5 h-5"
                />
              </p>
            </li>

            <li className="flex justify-between w-full">
              <p>rgb</p>
              <p className="flex items-center gap-2">
                <span className="select-all">
                  {getColorCodeType(colorCode, "RGB") || "rgb()"}
                </span>
                <LuClipboardCopy
                  onClick={() => {
                    navigator.clipboard.writeText(
                      getColorCodeType(colorCode, "RGB") || "rgb()",
                    );
                    alert("RGB Color Code Copied!");
                  }}
                  className="hover:opacity-75 w-5 h-5"
                />
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
