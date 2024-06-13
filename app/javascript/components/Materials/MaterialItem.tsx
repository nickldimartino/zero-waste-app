import React from 'react'
import { Link } from 'react-router-dom'

function MaterialItem({ attributes }: { attributes: any }) {
  return (
    <div className="card m-3" style={{"width":"18rem"}}>
      <div className="card-body d-flex flex-column justify-content-center">
        <h3 className="card-title text-center">{attributes.name}</h3>
        <Link to={`/materials/${attributes.slug}`} className="btn btn-primary">View Material</Link>
      </div>
    </div>
  )
}

export default MaterialItem