"use client";

import { useQuery } from "@tanstack/react-query";
import { earthQuake, randomUser, bored, article } from "./service";

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

  const datas = data?.results[0];
  return { datas, isInitialLoading, refetch };
};

export const fetchBored = () => {
  const { isInitialLoading, data, refetch } = useQuery({
    queryKey: ["bored"],
    queryFn: bored,
    enabled: false,
  });

  return { data, isInitialLoading, refetch };
};

export const fetchArticle = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["article"],
    queryFn: article,
  });

  return { data, isLoading, isError, error };
};

