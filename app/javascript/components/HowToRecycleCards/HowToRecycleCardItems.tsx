import React from 'react'

export default function HowToRecycleCardItems({ name, facts }: { name: any, facts: any }) {
  const howToRecycleCardsList: React.JSX.Element = facts.map((fact: string, idx: number) => {
    return <li key={idx} className="my-2">{fact}</li>
  })

  return (
    <div className="card w-25 m-3 bg-info rounded shadow text-light border border-2 border-info">
      <div className="card-body">
        <div className="card-title text-center fs-3 fw-bold">{name}</div>
        <hr />
        <ul>
          {howToRecycleCardsList}
        </ul>
      </div>
    </div>
  )
}