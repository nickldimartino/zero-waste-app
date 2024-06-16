// ---------------------------------- Modules -----------------------------------
// External
import React from "react";

// Internal
import BenefitsCardItem from "../../components/BenefitsCards/BenefitsCardItem";
import { benefitsCards } from "../../constants";
import { BenefitCardType } from "../../types";

// ---------------------------------- Component ---------------------------------
export default function BenefitsPage() {
  // create a list of the the cards for each benefit
  const benefitsCardsList: React.JSX.Element[] = benefitsCards.map(
    (benefit: BenefitCardType, idx: number) => {
      return (
        <BenefitsCardItem key={idx} name={benefit.name} facts={benefit.facts} />
      );
    }
  );

  // render the Benefits Page
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="fs-2 fw-bold text-info">
        Benefits of Recycling and Moving to Zero Waste
      </div>
      <div className="d-flex fled-row flex-wrap justify-content-center">
        {benefitsCardsList.slice(0, 3)}
      </div>
      <div className="fs-2 fw-bold text-info">Drawbacks and Challenges</div>
      <div className="d-flex fled-row flex-wrap justify-content-center">
        {benefitsCardsList.slice(3)}
      </div>
      <div className="alert alert-info mt-3 mb-4" role="alert">
        More information can be found out at{" "}
        <a
          className="border-bottom fw-bold"
          href="https://www.epa.gov/circulareconomy/us-recycling-system"
          target="_blank"
        >
          epa.gov
        </a>
      </div>
    </div>
  );
}
