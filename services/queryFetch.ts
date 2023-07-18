"use client";

import { useQuery } from "@tanstack/react-query";
import { earthQuake, randomUser } from "./service";

export const fetchEarthQuake = () => {
  const { isInitialLoading, data, refetch } = useQuery({
    queryKey: ["earthquakes"],
    queryFn: earthQuake,
    enabled: false,
  });

  const datas = data?.data;

  return { datas, isInitialLoading, refetch };
};

export const fetchRandomUser = () => {
  const { isInitialLoading, data, refetch } = useQuery({
    queryKey: ["randomUser"],
    queryFn: randomUser,
    enabled: false,
  });

  const datas = data?.results[0]
  return { datas, isInitialLoading, refetch };
}
