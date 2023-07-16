"use client";
import React, { useState } from "react";
import { earthQuake } from "@/services/service";

interface IProps {
  data: {
    tangal: string;
    jam: string;
    datetime: string;
    coordinates: string;
    lintang: string;
    bujur: string;
    magnitude: string;
    kedalaman: string;
    wilayah: string;
    potensi: string;
    dirasakan: string;
    shakemap: string;
  };
}

export default function page() {
  const [data, setData] = useState<IProps["data"]>();
  const [isLoading, setIsLoading] = useState();

  const handleClick = () => {
    setIsLoading(true);
    earthQuake()
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("earthQuake err", err);
        setIsLoading(false);
      });
  };
  return (
    <div className="flexCenterMargin">
      <div>
        <h1>
          Earthquakes check get real-time updates on Earthquakes indonesian
        </h1>
        <p className="descCenter">
          This tool provides realtime updates on earthquakes around indonesia,
          this API is made by{" "}
          <a href="https://github.com/renomureza"> Renomureza</a>
        </p>
      </div>
      <button onClick={handleClick} className="btn h-10">
        Track
      </button>
      {data && (
        <div className="text-center space-y-2">
          {/* <p>{data?.tangal}</p> */}
          <p>{data?.jam}</p>
          <p>{data?.datetime}</p>
          {/* <p>{data?.coordinates}</p> */}
          {/* <p>{data?.lintang}</p> */}
          {/* <p>{data?.bujur}</p> */}
          <p>Magnitude {data?.magnitude}</p>
          <p>Kedalaman {data?.kedalaman}</p>
          <p>{data?.wilayah}</p>
          <p>{data?.potensi}</p>
          <p>{data?.dirasakan}</p>
          <img src={data?.shakemap} alt={data?.shakemap} />
        </div>
      )}
    </div>
  );
}
