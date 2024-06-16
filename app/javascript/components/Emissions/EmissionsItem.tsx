// ---------------------------------- Modules -----------------------------------
// External
import React from "react";
import { EmissionAttributesType } from "../../types";

// ---------------------------------- Component ---------------------------------
export default function EmissionsItem({
  attributes,
}: {
  attributes: EmissionAttributesType;
}) {
  // render the Emissions item with the received attributes
  const causeList: string[] = attributes.cause.split(".");

  return (
    <div
      className="card m-3 bg-info border border-2 border-info rounded shadow"
      style={{ width: "18rem", height: "23rem" }}
    >
      <div className="card-body d-flex flex-column">
        <div className="card-title text-center fs-2 text-light fw-bold mt-n2">
          {attributes.name}
        </div>
        <hr />
        <div className="fs-5 text-light fw-bold mt-2">Type</div>
        <div className="fs-6 text-light">{attributes.emissionType}</div>
        <hr />
        <div className="fs-5 text-light fw-bold mt-2">Cause</div>
        <div className="fs-6 text-light my-2">{causeList[0]}</div>
        <div className="fs-6 text-light mt-2">{causeList[1]}</div>
      </div>
    </div>
  );
}
