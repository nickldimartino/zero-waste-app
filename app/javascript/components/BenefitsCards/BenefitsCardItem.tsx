import React from 'react'

function BenefitsCardItem({ name, facts }: { name: any, facts: any }) {
  const benefitsFactsList: React.JSX.Element = facts.map((fact: string, idx: number) => {
    return <li key={idx}>{fact}</li>
  })

  return (
    <div className="card w-25 m-3 bg-info rounded shadow text-light border border-2 border-info">
      <div className="card-body">
        <div className="card-title text-center fs-3 fw-bold">{name}</div>
        <hr />
        <ul>
          {benefitsFactsList}
        </ul>
      </div>
    </div>
  )
}

export default BenefitsCardItem