import React from 'react'

export default function RoadmapCardItem({name, info, other}: {name: any, info: any, other: any}) {
  const infoList: any = info.map((i: any, idx: number) => {
    return <li key={idx} className="text-info my-2">{i}</li>
  });

  const otherList: any = info.map((i: any, idx: number) => {
    return <li key={idx} className="text-info my-2">{i}</li>
  });

  return (
    <div className="card m-3 bg-light border-2 border-info rounded shadow" style={{ "width": "22rem", "height": "46rem" }}>
      <div className="card-body d-flex flex-column">
        <div className="card-title text-center fs-4 text-info fw-bold">{name}</div>
        <hr />
        <ul className="my-3">
          {infoList}
        </ul>
        <hr />
        <ul className="my-3">
          {otherList}
        </ul>
      </div>
    </div>
  )
}
