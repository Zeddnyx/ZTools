"use client";
import Loading from "@/app/loading";
import { Copy } from "@/components/CopyText";
import { Title } from "@/components/Title";
import { fetchActivity} from "@/services/queryFetch";
import { useState } from "react";

export default function page() {
  const [activity, setActivity] = useState<any[]>([]);
  const { data, isInitialLoading, refetch } = fetchActivity();

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

      {isInitialLoading && <p className="animate-pulse">Loading...</p>}

      <div className="grid grid-cols-2 gap-2">
        {activity &&
          activity.map((activity, id) => (
            <div
              key={id}
              className="borderAquaGrid"
            >
              <div className="flexBetweenCenter">
                <p>type/{activity.type}</p>
                <Copy copy={activity.activity} />
              </div>
              <h4>{activity.activity}</h4>
            </div>
          ))}
      </div>

      <div className="flexCenterCenter">
        <button className="btn bg-light1 w-36 h-10" onClick={() => handleClick()}>
          Find Activity
        </button>
      </div>
    </div>
  );
}
