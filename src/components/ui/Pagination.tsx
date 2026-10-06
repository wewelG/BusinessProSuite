import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
}: PaginationProps) {
  const startItem = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.85rem 1rem",
        borderTop: "1px solid var(--border-subtle)",
        fontSize: "0.84rem",
        color: "var(--text-secondary)",
      }}
    >
      <div>
        Showing <span style={{ fontWeight: 700, color: "var(--brown-950)" }}>{startItem}</span> to{" "}
        <span style={{ fontWeight: 700, color: "var(--brown-950)" }}>{endItem}</span> of{" "}
        <span style={{ fontWeight: 700, color: "var(--brown-950)" }}>{totalItems}</span> entries
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          className="btn btn-outline"
          style={{ padding: "0.35rem 0.6rem", fontSize: "0.78rem" }}
          aria-label="Previous page"
        >
          <ChevronLeft size={14} /> Prev
        </button>

        <span style={{ padding: "0 0.5rem", fontWeight: 600, color: "var(--brown-900)" }}>
          {currentPage} / {Math.max(1, totalPages)}
        </span>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className="btn btn-outline"
          style={{ padding: "0.35rem 0.6rem", fontSize: "0.78rem" }}
          aria-label="Next page"
        >
          Next <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}
