import React from "react";
import { benefitsCards } from "../../constants";
import BenefitsCardItem from "../../components/BenefitsCards/BenefitsCardItem";

export default function BenefitsPage() {
  const benefitsCardsList: any = benefitsCards.map((benefit: any, idx: number) => {
    return <BenefitsCardItem key={idx} name={benefit.name} facts={benefit.facts} />
  });

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="fs-2 fw-bold text-info">Benefits of Recycling and Moving to Zero Waste</div>
      <div className="d-flex fled-row flex-wrap justify-content-center">{benefitsCardsList.slice(0, 3)}</div>
      <div className="fs-2 fw-bold text-info">Drawbacks and Challenges</div>
      <div className="d-flex fled-row flex-wrap justify-content-center">{benefitsCardsList.slice(3)}</div>
      <div className="alert alert-info mt-3 mb-4" role="alert">
        More information can be found out at <a className="border-bottom fw-bold" href="https://www.epa.gov/circulareconomy/us-recycling-system" target="_blank">epa.gov</a>
      </div>
    </div>
  )
}
