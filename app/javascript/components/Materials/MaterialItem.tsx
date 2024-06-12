import React from 'react'

type Props = {}

function MaterialItem({ attributes }: { attributes: any }) {
  return (
    <div className="card" style={{width: "18rem;"}}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{attributes.name}</h5>
        <p className="card-text">{attributes.tips}</p>
        <p className="card-text">{attributes.facts}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}

export default MaterialItem