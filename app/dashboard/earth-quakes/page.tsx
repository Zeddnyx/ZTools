"use client";
import Loading from "@/app/loading";
import { fetchEarthQuake } from "@/services/queryFetch";
import { MotionOpacity } from "@/components/Motion";
import { Title } from "@/components/Title";
import Image from "next/image";

export default function page() {
  const { datas, isInitialLoading, refetch } = fetchEarthQuake();

  const handleClick = () => {
    refetch();
  };

  return (
    <MotionOpacity>
      <div className="flexCenterMargin">
        <Title
          title="Earthquakes check"
          highlight="indonesian"
          desc="Provide realtime updates on earthquakes around indonesia this API is made by{' '}<a href='https://github.com/renomureza'>Renomureza</a>"
        />
        <button onClick={handleClick} className="btn bg-light1 h-10 w-20">
          Track
        </button>
        {isInitialLoading && <Loading />}
        {datas && (
          <div className="text-center space-y-2">
            {/* <p>{datas?.tangal}</p> */}
            <p>{datas?.jam}</p>
            <p>{datas?.datetime}</p>
            {/* <p>{datas?.coordinates}</p> */}
            {/* <p>{datas?.lintang}</p> */}
            {/* <p>{datas?.bujur}</p> */}
            <p>Magnitude {datas?.magnitude}</p>
            <p>Kedalaman {datas?.kedalaman}</p>
            <p>{datas?.wilayah}</p>
            <p>{datas?.potensi}</p>
            <p>{datas?.dirasakan}</p>
            <Image src={datas?.shakemap} alt={datas?.shakemap} width={500} height={500} />
          </div>
        )}
      </div>
    </MotionOpacity>
  );
}
