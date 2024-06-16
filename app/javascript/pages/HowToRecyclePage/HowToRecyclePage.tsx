// ---------------------------------- Modules -----------------------------------
// External
import React from "react";

// Internal
import HowToRecycleCardItems from "../../components/HowToRecycleCards/HowToRecycleCardItems";
import { howToRecycleCards } from "../../constants";
import { HowToRecycleCardType } from "../../types";

// ---------------------------------- Component ---------------------------------
export default function HowToRecyclePage() {
  // create a list of the How To Recycle Card items
  const howToRecycleCardsList: any = howToRecycleCards.map(
    (card: HowToRecycleCardType, idx: number) => {
      return (
        <HowToRecycleCardItems
          key={idx}
          name={card.name}
          facts={card.facts}
        />
      );
    }
  );

  // render the How To Recycle Page
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="fs-2 fw-bold text-info">How to Recycle</div>
      <div className="alert alert-info fs-5 mt-2" role="alert">
        Recycling is easy! You're just a couple steps away from making this
        planet cleaner.
      </div>
      <div className="d-flex fled-row flex-wrap justify-content-center">
        {howToRecycleCardsList}
      </div>
    </div>
  );
}
