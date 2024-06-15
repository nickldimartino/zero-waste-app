import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

function InfoCardItem({name, info, link}: {name: any, info: any, link: any}) {
  return (
    <div className="card m-3 bg-info rounded shadow" style={{ "width": "22rem", "height": "12rem" }}>
      <div className="card-body d-flex flex-column">
        <div className="card-title text-center fs-2 text-light fw-bold">{name}</div>
        <hr />
        <div className="fs-6 text-light mb-4">{info}</div>
        <Link to={link} className="btn btn-outline-light border border-2 border-light btn-sm">Learn Now!</Link>
      </div>
    </div>
  )
}

export default InfoCardItem