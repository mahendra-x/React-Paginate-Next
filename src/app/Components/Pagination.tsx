import React from "react";

interface PaginationProps {
  initialPageReached: boolean;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
  noofPages: number;
  handlePageNumber: (n: number) => void;
  lastPageReached: boolean;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  initialPageReached,
  goToNextPage,
  goToPreviousPage,
  noofPages,
  handlePageNumber,
  lastPageReached,
  currentPage,
}) => {
  return (
    <div className="pagination-container">
      <button
        disabled={initialPageReached}
        onClick={goToPreviousPage}
        className={"page-number " + (initialPageReached ? "disable" : "")}
      >
        ⬅️
      </button>

      {[...Array(noofPages).keys()].map((n) => (
        <button
          className={"page-number " + (n === currentPage ? "active" : "")}
          key={n}
          onClick={() => handlePageNumber(n)}
        >
          {n}
        </button>
      ))}

      <button
        disabled={lastPageReached}
        onClick={goToNextPage}
        className={"page-number " + (lastPageReached ? "disable" : "")}
      >
        ▶️
      </button>
    </div>
  );
};

export default Pagination;
