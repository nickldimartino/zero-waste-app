import React from 'react'

export default function IndustryItem({ attributes }: { attributes: any }) {
  const companies = attributes.companies.split(".");
  const recyclables = attributes.recyclables.split(".");

  const companyList: any = companies.map((company: string, idx: number) => {
    return <li key={idx} className="fs-7 text-light fst-italic">{company}</li>
  });

  const recyclablesList: any = recyclables.map((recyclable: string, idx: number) => {
    return <li key={idx} className="fs-7 text-light fst-italic">{recyclable}</li>
  });

  return (
    <div className="card m-3 bg-info rounded shadow border border-2 border-info" style={{ "width": "18rem", "height": "34rem" }}>
      <div className="card-body d-flex flex-column">
        <div className="card-title text-center fs-2 text-light fw-bold">{attributes.name}</div>
        <hr />
        <div className="fs-5 text-light fw-bold">Companies</div>
        <ul>{companyList}</ul>
        <hr />
        <div className="fs-5 text-light fw-bold">Recyclables</div>
        <ul>{recyclablesList}</ul>
      </div>
    </div>
  )
}
