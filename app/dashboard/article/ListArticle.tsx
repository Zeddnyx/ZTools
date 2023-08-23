"use client";
import { fetchArticle } from "@/services/queryFetch";
import Loading from "@/app/loading";
import Pagination from "./Pagination";

export default function ListArticle() {
  const { isLoading, isError, data } = fetchArticle();
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <div>Error </div>;
  }

  return (
    <>
      <div className="flex gap-3 justify-start text-start">
        {list.map((item) => (
          <button className="rounded-full px-4 py-1 bg-aqua_alt font-semibold" key={item}>
            {item}
          </button>
        ))}
      </div>
      <div className="grid gap-4">
        <Pagination data={data} page={10} />
      </div>
    </>
  );
}
const list = [
  "Frontend",
  "Reactjs",
  "Nextjs",
  "Javascript",
  "Typescript",
  "Neovim",
];
