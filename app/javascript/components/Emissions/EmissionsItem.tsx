import React from 'react'

type Props = {}

function EmissionsItem({attributes}: {attributes: any}) {
  return (
    <div className="card m-3 bg-info rounded shadow" style={{ "width": "18rem" }}>
      <div className="card-body d-flex flex-column justify-content-center">
        <div className="card-title text-center fs-2 text-light fw-bold">{attributes.name}</div>
        <hr />
        <div className="fs-5 text-light fw-bold">{attributes.emissionType}</div>
        <hr />
        <div className="fs-5 text-light fw-bold">{attributes.cause}</div>
      </div>
    </div>
  )
}

export default EmissionsItem