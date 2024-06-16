// ---------------------------------- Modules -----------------------------------
// External
import React from "react";

// Internal
import InfoCardItem from "../../components/InfoCards/InfoCardItem";
import { infoCards } from "../../constants";
import { InfoCardType } from "../../types";

// ---------------------------------- Component ---------------------------------
export default function HomePage() {
  // create an Info Card list of all the Home Page information
  const infoCardsList: React.JSX.Element = infoCards.map(
    (card: InfoCardType, idx: number) => {
      return (
        <InfoCardItem
          key={idx}
          name={card.name}
          info={card.info}
          link={card.link}
        ></InfoCardItem>
      );
    }
  );

  // render the Home Page
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="fs-2 fw-bold text-info">
        Learn All About Recycling, Emissions, and Zero Waste!
      </div>
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        {infoCardsList}
      </div>
    </div>
  );
}
