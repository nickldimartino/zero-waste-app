// ---------------------------------- Modules -----------------------------------
// External
import React from "react";
import { Link } from "react-router-dom";

// ---------------------------------- Component ---------------------------------
export default function MaterialItem({ attributes }: { attributes: any }) {
  // render the Material
  return (
    <div className="card m-3 bg-info rounded shadow" style={{ width: "18rem" }}>
      <div className="card-body d-flex flex-column justify-content-center">
        <div className="card-title text-center fs-2 text-light fw-bold">
          {attributes.name}
        </div>
        <Link
          to={`/materials/${attributes.slug}`}
          className="btn btn-light border border-2 border-info btn-sm fs-4"
        >
          View Material
        </Link>
      </div>
    </div>
  );
}
