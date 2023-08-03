"use client"
import Location from "@/components/Location";
import Loading from "@/app/loading";
import { fetchRandomUser } from "@/services/queryFetch";
import { MotionOpacity } from "@/components/Motion";

export default function page() {
  const { datas, isInitialLoading, refetch } = fetchRandomUser();

  const handleClick = () => {
    refetch();
  };

  return (
    <MotionOpacity>
      <div className="flexCenterMargin">
        <Location />
        <div>
          <h1>
            User Randomizer: Generate random{" "}
            <span className="text-aqua">User Info</span>
          </h1>
          <p className="descCenter">
            This tool generates random user info for use in testing or creating
            user account
          </p>
        </div>
        <button onClick={handleClick} className="btn h-10">
          Generate
        </button>

        {isInitialLoading && <Loading />}

        {datas && (
          <div className="capitalize w-full flex flex-col md:flex-row gap-2 justify-center items-center">
            <img
              src={datas?.picture?.large}
              alt="profile"
              className="h-[220px]"
            />
            <div>
              <p>Name: {datas?.name?.first}</p>
              <p>Email: {datas?.email}</p>
              <p>Phone: {datas?.cell}</p>
              <p>Gender: {datas?.gender}</p>
              <p>Location: {datas?.location?.city}</p>
              <p>Country: {datas?.location?.country}</p>
              <p>postcode: {datas?.location?.postcode}</p>
              <p>State: {datas?.location?.state}</p>
              <p>
                Street: {datas?.location?.street?.number},{" "}
                {datas?.location?.street?.name}
              </p>
            </div>
          </div>
        )}
      </div>
    </MotionOpacity>
  );
}
