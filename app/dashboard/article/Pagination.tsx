import Link from "next/link";
import { useState } from "react";

interface PaginationProps {
  data: any[];
  page: number;
}
export default function Pagination({ data, page }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = page; // Number of items per page

  // Calculate the index of the first and last item to be shown on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const pages = data?.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the total number of pages
  const totalPages = Math.ceil(data?.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="py-5">
      {/* render data */}
      <div className="grid gap-6">
        {pages.map((item: any, id: number) => {
          return (
            <div key={id} className="grid gap-2">
              <span className="grid">
                <h6>{item.author}</h6>
                <p>{item.time}</p>
              </span>
              <div>
                <a href={item.link}>
                  <h3>{item.title}</h3>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* pagination */}
      <div className="flex justify-center pt-5 gap-3">
        {/* Previous page button */}
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className="text-dark1"
        >
          Prev
        </button>

        {/* Page numbers */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={
              currentPage === index + 1
                ? "text-bright2 font-bold text-base"
                : "text-dark1 text-xs"
            }
          >
            {index + 1}
          </button>
        ))}

        {/* Next page button */}
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className="text-dark1"
        >
          Next
        </button>
      </div>
    </div>
  );
}
