import React from 'react'

type Props = {}

function EmissionsItem({attributes}: {attributes: any}) {
  return (
    <div className="card m-3 bg-info rounded shadow" style={{ "width": "18rem", "height": "23rem" }}>
      <div className="card-body d-flex flex-column">
        <div className="card-title text-center fs-2 text-light fw-bold mt-n2">{attributes.name}</div>
        <hr />
        <div className="fs-5 text-light fw-bold mt-2">Type</div>
        <div className="fs-6 text-light">{attributes.emissionType}</div>
        <hr />
        <div className="fs-5 text-light fw-bold mt-2">Cause</div>
        <div className="fs-6 text-light">{attributes.cause}</div>
      </div>
    </div>
  )
}

export default EmissionsItem