"use client"
import Loading from "@/app/loading";
import { fetchEarthQuake } from "@/services/queryFetch";
import { MotionOpacity } from "@/components/Motion";

export default function page() {
  const { datas, isInitialLoading, refetch } = fetchEarthQuake();

  const handleClick = () => {
    refetch();
  };

  return (
    <MotionOpacity>
      <div className="flexCenterMargin">
        <div>
          <h1>
            Earthquakes check get real-time updates on{" "}
            <span className="text-aqua">Earthquakes indonesian</span>
          </h1>
          <p className="descCenter">
            This tool provides realtime updates on earthquakes around indonesia,
            this API is made by{" "}
              <a href="https://github.com/renomureza">Renomureza</a>
          </p>
        </div>
        <button onClick={handleClick} className="btn h-10">
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
            <img src={datas?.shakemap} alt={datas?.shakemap} />
          </div>
        )}
      </div>
    </MotionOpacity>
  );
}
