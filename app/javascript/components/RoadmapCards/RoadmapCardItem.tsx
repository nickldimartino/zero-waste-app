// ---------------------------------- Modules -----------------------------------
// External
import React from "react";

// ---------------------------------- Component ---------------------------------
export default function RoadmapCardItem({
  name,
  info,
  other,
}: {
  name: any;
  info: any;
  other: any;
}) {
  // create a list for each info item
  const infoList: any = info.map((i: any, idx: number) => {
    return (
      <li key={idx} className="text-light my-2">
        {i}
      </li>
    );
  });

  // create a list for each other info item
  const otherList: any = other.map((i: any, idx: number) => {
    return (
      <li key={idx} className="text-light my-2">
        {i}
      </li>
    );
  });

  // render the Roadmap Card with the info and other list
  return (
    <div
      className="card m-3 bg-info border-2 border-info rounded shadow"
      style={{ width: "22rem", height: "54rem" }}
    >
      <div className="card-body d-flex flex-column">
        <div className="card-title text-center fs-4 text-light fw-bold">
          {name}
        </div>
        <hr />
        <ul className="my-3">{infoList}</ul>
        <hr />
        <ul className="my-3">{otherList}</ul>
      </div>
    </div>
  );
}
