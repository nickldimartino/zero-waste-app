import React from 'react'

export default function IndustryItem({ attributes }: { attributes: any }) {
  const companies = attributes.companies.split(".");
  const recyclables = attributes.recyclables.split(".");

  const companyList: any = companies.map((company: string) => {
    return <li className="fs-7 text-light fst-italic">{company}</li>
  });

  const recyclablesList: any = recyclables.map((recyclable: string) => {
    return <li className="fs-7 text-light fst-italic">{recyclable}</li>
  });

  return (
    <div className="card m-3 bg-info rounded shadow" style={{ "width": "18rem" }}>
      <div className="card-body d-flex flex-column justify-content-center">
        <div className="card-title text-center fs-2 text-light">{attributes.name}</div>
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
