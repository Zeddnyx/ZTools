"use client";
import Loading from "@/app/loading";
import { Copy } from "@/components/CopyText";
import { Title } from "@/components/Title";
import { fetchBored } from "@/services/queryFetch";
import { useState } from "react";

export default function page() {
  const [activity, setActivity] = useState<any[]>([]);
  const { data, isInitialLoading, refetch } = fetchBored();

  const handleClick = () => {
    refetch();
    data ? setActivity((act) => [...act, data]) : "";
  };

  return (
    <div className="flexCenterMargin">
      <Title
        title="Bored App: A simple tool for"
        highlight="finding things to do"
      />
      <div className="flex justify-center w-full">
        <button className="btn w-20 h-8" onClick={() => handleClick()}>
          Find Activity
        </button>
      </div>

      {isInitialLoading && <Loading />}

      <div className="grid grid-cols-2 gap-2">
        {activity &&
          activity.map((activity, id) => (
            <div
              key={id}
              className="border-2 border-aqua p-1 rounded-md grid gap-2"
            >
              <div className="flex w-full justify-between items-center">
                <p>type/{activity.type}</p>
                <Copy copy={activity.activity} />
              </div>
              <h4>{activity.activity}</h4>
            </div>
          ))}
      </div>
    </div>
  );
}
