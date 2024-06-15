import React from 'react'
import { infoCards } from "../../constants";
import InfoCardItem from '../../components/InfoCards/InfoCardItem';

function HomePage() {
  const infoCardsList: React.JSX.Element = infoCards.map((card: any, idx: number) => {
    return <InfoCardItem name={card.name} info={card.info} link={card.link}></InfoCardItem>
  })

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="fs-2 fw-bold text-info">Learn All About Recycling, Emissions, and Zero Waste!</div>
      <div className="d-flex justify-content-center align-items-center flex-wrap">{infoCardsList}</div>
    </div>
  )
}

export default HomePage