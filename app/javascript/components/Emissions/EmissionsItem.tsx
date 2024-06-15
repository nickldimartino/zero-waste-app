import React from 'react'

type Props = {}

function EmissionsItem({attributes}: {attributes: any}) {
  return (
    <div className="card m-3 bg-light border border-2 border-info rounded shadow" style={{ "width": "18rem", "height": "23rem" }}>
      <div className="card-body d-flex flex-column">
        <div className="card-title text-center fs-2 text-info fw-bold mt-n2">{attributes.name}</div>
        <hr />
        <div className="fs-5 text-info fw-bold mt-2">Type</div>
        <div className="fs-6 text-info">{attributes.emissionType}</div>
        <hr />
        <div className="fs-5 text-info fw-bold mt-2">Cause</div>
        <div className="fs-6 text-info">{attributes.cause}</div>
      </div>
    </div>
  )
}

export default EmissionsItem