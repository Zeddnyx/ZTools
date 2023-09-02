"use client";
import Loading from "@/app/loading";
import { fetchRandomUser } from "@/services/queryFetch";
import { MotionOpacity } from "@/components/Motion";
import { Title } from "@/components/Title";
import Image from "next/image";
import { useState } from "react";

export default function page() {
  const [users, setUsers] = useState<any[]>([]);
  const { datas, isInitialLoading, refetch } = fetchRandomUser();

  const handleClick = () => {
    refetch();
    datas ? setUsers((user) => [...user, datas]) : "";
  };

  return (
    <MotionOpacity>
      <div className="flexCenterMargin">
        <Title
          title="User Randomizer"
          highlight="Generate random User Info"
          desc="This tool generates random user info for use in testing or creating user account"
        />

      {isInitialLoading && <p className="animate-pulse">Loading...</p>}

        <div className="grid grid-cols-2 gap-2">
          {users &&
            users.map((user: any,id) => (
              <div
                key={id}
                className="capitalize w-full flexCenterCenter flex-col md:flex-row gap-2 border-2 border-aqua p-1 rounded-md" 
              >
                <Image
                  src={user?.picture?.medium}
                  alt="profile"
                  width={180}
                  height={190}
                />
                <div className="grid gap-2 text-sm">
                  <p>Name: {user?.name?.first}</p>
                  <span className="hidden md:block">
                  <p>Email: {user?.email}</p>
                  </span>
                  <p>Phone: {user?.cell}</p>
                  <p>Gender: {user?.gender}</p>
                  <p>
                    Country: {user?.location?.country},{user?.location?.state}
                  </p>
                  <p>
                    Street: {user?.location?.street?.number},{" "}
                    {user?.location?.street?.name}
                  </p>
                </div>
              </div>
            ))}
        </div>

        <button onClick={handleClick} className="btn bg-light1 h-10 w-28">
          Generate
        </button>

      </div>
    </MotionOpacity>
  );
}
