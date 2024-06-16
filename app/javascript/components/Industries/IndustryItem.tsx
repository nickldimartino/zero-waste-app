// ---------------------------------- Modules -----------------------------------
// External
import React from "react";

// ---------------------------------- Component ---------------------------------
export default function IndustryItem({ attributes }: { attributes: any }) {
  // parse the attributes companies and recyclable strings into arrays
  const companies = attributes.companies.split(".");
  const recyclables = attributes.recyclables.split(".");

  // create a list for each company name
  const companyList: any = companies.map((company: string, idx: number) => {
    return (
      <li key={idx} className="fs-7 text-light fst-italic">
        {company}
      </li>
    );
  });

  // create a list for each recyclable
  const recyclablesList: any = recyclables.map(
    (recyclable: string, idx: number) => {
      return (
        <li key={idx} className="fs-7 text-light fst-italic">
          {recyclable}
        </li>
      );
    }
  );

  // render the Industry Item card with the lists
  return (
    <div
      className="card m-3 bg-info rounded shadow border border-2 border-info"
      style={{ width: "18rem", height: "34rem" }}
    >
      <div className="card-body d-flex flex-column">
        <div className="card-title text-center fs-2 text-light fw-bold">
          {attributes.name}
        </div>
        <hr />
        <div className="fs-5 text-light fw-bold">Companies</div>
        <ul>{companyList}</ul>
        <hr />
        <div className="fs-5 text-light fw-bold">Recyclables</div>
        <ul>{recyclablesList}</ul>
      </div>
    </div>
  );
}
