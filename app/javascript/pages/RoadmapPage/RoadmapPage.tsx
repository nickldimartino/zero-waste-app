// ---------------------------------- Modules -----------------------------------
// External
import React from "react";

// Internal
import RoadmapCardItem from "../../components/RoadmapCards/RoadmapCardItem";
import { roadmapCards } from "../../constants";

// ---------------------------------- Component ---------------------------------
export default function RoadmapPage() {
  // create a list of all the Roadmap Card items
  const roadmapCardsList: React.JSX.Element = roadmapCards.map(
    (card: any, idx: number) => {
      return (
        <RoadmapCardItem
          key={idx}
          name={card.name}
          info={card.info}
          other={card.other}
        ></RoadmapCardItem>
      );
    }
  );

  // render the Roadmap Page
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="fs-2 fw-bold text-info">
        What Happens When Your Recyclables and Waste Are Collected?
      </div>
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        {roadmapCardsList}
      </div>
      <div className="alert alert-info mt-3 mb-4" role="alert">
        More information can be found out at{" "}
        <a
          className="border-bottom fw-bold"
          href="https://www.recyclenow.com/how-to-recycle/what-happens-to-my-recycling"
          target="_blank"
        >
          recyclenow.com
        </a>
      </div>
    </div>
  );
}
