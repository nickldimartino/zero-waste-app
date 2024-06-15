import React from "react";
import { Link } from "react-router-dom";
import { howToRecycleCards } from "../../constants";
import HowToRecycleCardItems from "../../components/HowToRecycleCards/HowToRecycleCardItems";

export default function HowToRecyclePage() {
  const howToRecycleCardsList: any = howToRecycleCards.map((benefit: any, idx: number) => {
    return <HowToRecycleCardItems key={idx} name={benefit.name} facts={benefit.facts} />
  });

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="fs-2 fw-bold text-info">How to Recycle</div>
      <div className="alert alert-info fs-5 mt-2" role="alert">
        Recycling is easy! You're just a couple steps away from making this planet cleaner.
      </div>
      <div className="d-flex fled-row flex-wrap justify-content-center">
        {howToRecycleCardsList}
      </div>
    </div>
  )
}
