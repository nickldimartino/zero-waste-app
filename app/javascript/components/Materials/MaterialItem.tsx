import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

function MaterialItem({ attributes }: { attributes: any }) {
  return (
    <div className="card" style={{"width":"18rem"}}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{attributes.name}</h5>
        <p className="card-text">{attributes.tips}</p>
        <p className="card-text">{attributes.facts}</p>
        <Link to={`/materials/${attributes.slug}`} className="btn btn-primary">View Material</Link>
      </div>
    </div>
  )
}

export default MaterialItem