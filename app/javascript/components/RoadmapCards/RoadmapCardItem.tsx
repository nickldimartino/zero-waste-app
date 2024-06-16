// ---------------------------------- Modules -----------------------------------
// External
import React from "react";

// ---------------------------------- Component ---------------------------------
export default function RoadmapCardItem({
  name,
  info,
  other,
}: {
  name: string;
  info: string[];
  other: string[];
}) {
  // create a list for each info item
  const infoList: React.JSX.Element[] = info.map((i: string, idx: number) => {
    return (
      <li key={idx} className="text-light my-2">
        {i}
      </li>
    );
  });

  // create a list for each other info item
  const otherList: React.JSX.Element[] = other.map((i: string, idx: number) => {
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
